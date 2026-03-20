"use client";

import { useState } from "react";
import { WeatherType, WEATHER_DATA } from "@/types/weather";
import { speak, isMuted } from "@/lib/speech";
import WeatherAnimation from "@/components/weather/WeatherAnimation";
import CloudMascot from "@/components/CloudMascot";

const ALL_TYPES = Object.values(WeatherType);

export default function GalleryScreen() {
  const [expanded, setExpanded] = useState<WeatherType | null>(null);

  const handleTap = (type: WeatherType) => {
    setExpanded(type);
    const w = WEATHER_DATA[type];
    if (!isMuted()) {
      speak(`${w.label}. ${w.description}`);
    }
  };

  const handleClose = () => {
    setExpanded(null);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-50 pt-6 pb-28 px-4"
      role="main"
      aria-label="Weather types gallery"
    >
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        Weather Types
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
        {ALL_TYPES.map((type) => {
          const w = WEATHER_DATA[type];
          return (
            <button
              key={type}
              onClick={() => handleTap(type)}
              className={`weather-card relative overflow-hidden bg-gradient-to-br ${w.gradient} rounded-3xl p-5 min-h-[140px] flex flex-col items-center justify-center gap-2 shadow-md active:scale-95 transition-transform`}
              aria-label={`${w.label} weather. Tap to learn more.`}
            >
              <span className="text-4xl" aria-hidden="true">
                {w.emoji}
              </span>
              <span className="text-xl font-extrabold text-gray-800 drop-shadow-sm">
                {w.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Expanded overlay */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 animate-card-expand"
          role="dialog"
          aria-label={`${WEATHER_DATA[expanded].label} weather details`}
          onClick={handleClose}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-b ${WEATHER_DATA[expanded].gradient}`}
          >
            <WeatherAnimation type={expanded} />
          </div>

          {/* Content */}
          <div
            className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-5xl font-extrabold text-gray-800 drop-shadow-sm">
              {WEATHER_DATA[expanded].label}
            </h2>

            <CloudMascot weather={WEATHER_DATA[expanded]} size={160} />

            <p className="text-2xl text-gray-700 font-bold text-center max-w-xs">
              {WEATHER_DATA[expanded].description}
            </p>

            {/* Listen button */}
            <button
              onClick={() => {
                if (!isMuted()) {
                  const w = WEATHER_DATA[expanded];
                  speak(`${w.label}. ${w.description}`);
                }
              }}
              className="flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg active:scale-95 transition-transform min-h-[64px]"
              aria-label={`Listen to ${WEATHER_DATA[expanded].label} description`}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon
                  points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                  fill="#3b82f6"
                />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span className="text-xl font-bold text-blue-600">Listen</span>
            </button>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="mt-4 w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center active:scale-90 transition-transform"
              aria-label="Close weather detail"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#374151"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
