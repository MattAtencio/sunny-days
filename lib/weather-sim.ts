import { WeatherType } from "@/types/weather";

/**
 * Simulate weather based on the current hour and date.
 * Rotates through weather types so kids see variety.
 */
export function getSimulatedWeather(): WeatherType {
  const now = new Date();
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const hour = now.getHours();

  // Combine day and time period to pick weather
  const timePeriod = Math.floor(hour / 3); // 8 periods per day
  const index = (dayOfYear + timePeriod) % 8;

  const types = [
    WeatherType.SUNNY,
    WeatherType.PARTLY_CLOUDY,
    WeatherType.CLOUDY,
    WeatherType.RAINY,
    WeatherType.STORMY,
    WeatherType.SNOWY,
    WeatherType.WINDY,
    WeatherType.FOGGY,
  ];

  return types[index];
}

export function getDayInfo() {
  const now = new Date();
  const dayIndex = now.getDay();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return {
    dayIndex,
    date: `${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`,
  };
}
