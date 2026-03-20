"use client";

import { WeatherType, WEATHER_DATA, DAYS_OF_WEEK } from "@/types/weather";
import { getDayInfo } from "@/lib/weather-sim";
import { speak, isMuted } from "@/lib/speech";
import WeatherAnimation from "@/components/weather/WeatherAnimation";
import CloudMascot from "@/components/CloudMascot";

interface TodayScreenProps {
  weatherType: WeatherType;
}

export default function TodayScreen({ weatherType }: TodayScreenProps) {
  const weather = WEATHER_DATA[weatherType];
  const { dayIndex, date } = getDayInfo();
  const dayName = DAYS_OF_WEEK[dayIndex];

  const handleSpeak = () => {
    if (isMuted()) return;
    speak(
      `Today is ${dayName}. It's ${weather.label.toLowerCase()} outside! ${weather.description}`
    );
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${weather.gradient} flex flex-col`}
      role="main"
      aria-label={`Today's weather: ${weather.label}`}
    >
      {/* Weather animation area - top 60% */}
      <div className="relative flex-1 min-h-[60vh]">
        <WeatherAnimation type={weatherType} />

        {/* Mascot */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <CloudMascot weather={weather} size={140} />
        </div>
      </div>

      {/* Info area - bottom 40% */}
      <div className="relative z-10 px-6 pb-28 pt-4 flex flex-col items-center gap-3">
        {/* Weather label */}
        <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-sm">
          {weather.label}
        </h1>

        {/* Day */}
        <p className="text-2xl font-bold text-gray-700">
          Today is {dayName}
        </p>

        {/* Date */}
        <p className="text-lg text-gray-500 font-semibold">{date}</p>

        {/* Description */}
        <p className="text-xl text-gray-600 font-medium text-center max-w-xs">
          {weather.description}
        </p>

        {/* Audio button */}
        <button
          onClick={handleSpeak}
          className="mt-2 flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg active:scale-95 transition-transform min-h-[64px]"
          aria-label={`Hear about today's weather: ${weather.label} on ${dayName}`}
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
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
          <span className="text-xl font-bold text-blue-600">Listen</span>
        </button>
      </div>
    </div>
  );
}
