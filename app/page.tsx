"use client";

import { useState, useEffect } from "react";
import { WeatherType } from "@/types/weather";
import { getSimulatedWeather } from "@/lib/weather-sim";
import TodayScreen from "@/components/screens/TodayScreen";
import GalleryScreen from "@/components/screens/GalleryScreen";
import DaysScreen from "@/components/screens/DaysScreen";
import BottomNav from "@/components/BottomNav";
import MuteButton from "@/components/MuteButton";

type Screen = "weather" | "gallery" | "days";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("weather");
  const [weather, setWeather] = useState<WeatherType>(WeatherType.SUNNY);

  useEffect(() => {
    setWeather(getSimulatedWeather());
  }, []);

  return (
    <main className="min-h-screen">
      <MuteButton />

      {screen === "weather" && <TodayScreen weatherType={weather} />}
      {screen === "gallery" && <GalleryScreen />}
      {screen === "days" && <DaysScreen />}

      <BottomNav activeScreen={screen} onNavigate={setScreen} />
    </main>
  );
}
