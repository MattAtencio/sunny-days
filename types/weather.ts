export enum WeatherType {
  SUNNY = "SUNNY",
  PARTLY_CLOUDY = "PARTLY_CLOUDY",
  CLOUDY = "CLOUDY",
  RAINY = "RAINY",
  STORMY = "STORMY",
  SNOWY = "SNOWY",
  WINDY = "WINDY",
  FOGGY = "FOGGY",
}

export interface WeatherInfo {
  type: WeatherType;
  label: string;
  description: string;
  gradient: string;
  emoji: string;
  mascotAccessory:
    | "sunglasses"
    | "umbrella"
    | "scarf"
    | "hat"
    | "raincoat"
    | "earmuffs"
    | "kite"
    | "lantern";
}

export const WEATHER_DATA: Record<WeatherType, WeatherInfo> = {
  [WeatherType.SUNNY]: {
    type: WeatherType.SUNNY,
    label: "Sunny",
    description: "The sun is shining bright!",
    gradient: "from-yellow-200 via-amber-100 to-sky-300",
    emoji: "\u2600\uFE0F",
    mascotAccessory: "sunglasses",
  },
  [WeatherType.PARTLY_CLOUDY]: {
    type: WeatherType.PARTLY_CLOUDY,
    label: "Partly Cloudy",
    description: "The sun is playing peek-a-boo with the clouds!",
    gradient: "from-sky-200 via-blue-100 to-gray-200",
    emoji: "\u26C5",
    mascotAccessory: "hat",
  },
  [WeatherType.CLOUDY]: {
    type: WeatherType.CLOUDY,
    label: "Cloudy",
    description: "Fluffy clouds cover the sky!",
    gradient: "from-gray-200 via-gray-100 to-blue-100",
    emoji: "\u2601\uFE0F",
    mascotAccessory: "hat",
  },
  [WeatherType.RAINY]: {
    type: WeatherType.RAINY,
    label: "Rainy",
    description: "Pitter-patter goes the rain!",
    gradient: "from-blue-200 via-blue-300 to-gray-300",
    emoji: "\uD83C\uDF27\uFE0F",
    mascotAccessory: "umbrella",
  },
  [WeatherType.STORMY]: {
    type: WeatherType.STORMY,
    label: "Stormy",
    description: "A big storm is here! Stay cozy inside!",
    gradient: "from-slate-500 via-slate-400 to-gray-700",
    emoji: "\u26C8\uFE0F",
    mascotAccessory: "raincoat",
  },
  [WeatherType.SNOWY]: {
    type: WeatherType.SNOWY,
    label: "Snowy",
    description: "Snowflakes are falling from the sky!",
    gradient: "from-white via-blue-50 to-blue-100",
    emoji: "\u2744\uFE0F",
    mascotAccessory: "scarf",
  },
  [WeatherType.WINDY]: {
    type: WeatherType.WINDY,
    label: "Windy",
    description: "Whoosh! The wind is blowing!",
    gradient: "from-teal-200 via-cyan-100 to-sky-200",
    emoji: "\uD83D\uDCA8",
    mascotAccessory: "kite",
  },
  [WeatherType.FOGGY]: {
    type: WeatherType.FOGGY,
    label: "Foggy",
    description: "Everything looks misty and mysterious!",
    gradient: "from-gray-100 via-gray-50 to-gray-200",
    emoji: "\uD83C\uDF2B\uFE0F",
    mascotAccessory: "lantern",
  },
};

export const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const DAY_COLORS = [
  "bg-red-200",
  "bg-orange-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-indigo-200",
  "bg-purple-200",
] as const;
