"use client";

import { DAYS_OF_WEEK, DAY_COLORS } from "@/types/weather";
import { speak, isMuted } from "@/lib/speech";

export default function DaysScreen() {
  const today = new Date().getDay();
  const yesterday = (today + 6) % 7;
  const tomorrow = (today + 1) % 7;

  const handleTapDay = (dayIndex: number) => {
    if (isMuted()) return;
    const dayName = DAYS_OF_WEEK[dayIndex];
    if (dayIndex === today) {
      speak(`Today is ${dayName}!`);
    } else {
      speak(dayName);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 pt-6 pb-28 px-4 overflow-y-auto"
      role="main"
      aria-label="Days of the week"
    >
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-2">
        Days of the Week
      </h1>

      {/* Yesterday / Tomorrow labels */}
      <div className="flex justify-between max-w-sm mx-auto mb-4 px-2">
        <p className="text-base font-bold text-gray-500">
          Yesterday was {DAYS_OF_WEEK[yesterday]}
        </p>
        <p className="text-base font-bold text-gray-500">
          Tomorrow is {DAYS_OF_WEEK[tomorrow]}
        </p>
      </div>

      {/* Day blocks */}
      <div className="flex flex-col gap-3 max-w-sm mx-auto">
        {DAYS_OF_WEEK.map((day, i) => {
          const isToday = i === today;
          return (
            <button
              key={day}
              onClick={() => handleTapDay(i)}
              className={`
                day-block relative flex items-center justify-center
                min-h-[80px] rounded-3xl shadow-md
                ${DAY_COLORS[i]}
                ${isToday ? "animate-day-glow animate-day-bounce ring-4 ring-yellow-400" : ""}
                active:scale-95 transition-transform
              `}
              aria-label={`${day}${isToday ? ", today" : ""}. Tap to hear.`}
              aria-current={isToday ? "date" : undefined}
            >
              <span className="text-2xl font-extrabold text-gray-800">
                {day}
              </span>
              {isToday && (
                <span className="absolute right-4 text-sm font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">
                  TODAY
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
