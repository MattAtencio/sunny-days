"use client";

import { useState, useEffect } from "react";
import { WeatherType } from "@/types/weather";
import { getSimulatedWeather } from "@/lib/weather-sim";
import TodayScreen from "@/components/screens/TodayScreen";
import GalleryScreen from "@/components/screens/GalleryScreen";
import DaysScreen from "@/components/screens/DaysScreen";
import BottomNav from "@/components/BottomNav";
import { MuteButton } from "@kids-games/core/components";

type Screen = "weather" | "gallery" | "days";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("weather");
  const [weather, setWeather] = useState<WeatherType>(WeatherType.SUNNY);

  useEffect(() => {
    setWeather(getSimulatedWeather());
  }, []);

  return (
    <main className="min-h-screen">
      {/* Back to Hub */}
      <a
        href="/"
        className="fixed top-3 left-3 z-50 w-11 h-11 rounded-full bg-white/40 backdrop-blur-md shadow-md flex items-center justify-center text-xl active:scale-90 transition-transform"
        aria-label="Back to Kids Corner"
      >
        &#x1F3E0;
      </a>

      <MuteButton />

      {screen === "weather" && <TodayScreen weatherType={weather} />}
      {screen === "gallery" && <GalleryScreen />}
      {screen === "days" && <DaysScreen />}

      <BottomNav activeScreen={screen} onNavigate={setScreen} />
    </main>
  );
}
