"use client";

import { WeatherType } from "@/types/weather";
import SunnyAnimation from "./SunnyAnimation";
import CloudyAnimation from "./CloudyAnimation";
import PartlyCloudyAnimation from "./PartlyCloudyAnimation";
import RainyAnimation from "./RainyAnimation";
import StormyAnimation from "./StormyAnimation";
import SnowyAnimation from "./SnowyAnimation";
import WindyAnimation from "./WindyAnimation";
import FoggyAnimation from "./FoggyAnimation";

const ANIMATION_MAP: Record<WeatherType, React.ComponentType> = {
  [WeatherType.SUNNY]: SunnyAnimation,
  [WeatherType.PARTLY_CLOUDY]: PartlyCloudyAnimation,
  [WeatherType.CLOUDY]: CloudyAnimation,
  [WeatherType.RAINY]: RainyAnimation,
  [WeatherType.STORMY]: StormyAnimation,
  [WeatherType.SNOWY]: SnowyAnimation,
  [WeatherType.WINDY]: WindyAnimation,
  [WeatherType.FOGGY]: FoggyAnimation,
};

export default function WeatherAnimation({ type }: { type: WeatherType }) {
  const Component = ANIMATION_MAP[type];
  return <Component />;
}
