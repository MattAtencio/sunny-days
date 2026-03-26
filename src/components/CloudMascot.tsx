"use client";

import { WeatherInfo } from "@/types/weather";

interface CloudMascotProps {
  weather: WeatherInfo;
  size?: number;
}

export default function CloudMascot({ weather, size = 120 }: CloudMascotProps) {
  const accessory = weather.mascotAccessory;

  return (
    <div
      className="animate-mascot-bounce relative"
      style={{ width: size, height: size * 0.75 }}
      role="img"
      aria-label={`Cloud mascot wearing ${accessory} for ${weather.label} weather`}
    >
      <svg
        viewBox="0 0 160 120"
        width={size}
        height={size * 0.75}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cloud body */}
        <ellipse cx="80" cy="80" rx="65" ry="28" fill="white" />
        <ellipse cx="55" cy="60" rx="35" ry="30" fill="white" />
        <ellipse cx="100" cy="58" rx="30" ry="28" fill="white" />
        <ellipse cx="78" cy="48" rx="28" ry="26" fill="white" />

        {/* Blush cheeks */}
        <ellipse cx="48" cy="76" rx="10" ry="6" fill="#fca5a5" opacity="0.5" />
        <ellipse cx="108" cy="76" rx="10" ry="6" fill="#fca5a5" opacity="0.5" />

        {/* Eyes */}
        {accessory === "sunglasses" ? (
          <>
            {/* Sunglasses */}
            <rect x="42" y="62" width="22" height="14" rx="4" fill="#1f2937" />
            <rect x="72" y="62" width="22" height="14" rx="4" fill="#1f2937" />
            <line x1="64" y1="69" x2="72" y2="69" stroke="#1f2937" strokeWidth="2" />
            <line x1="42" y1="66" x2="36" y2="62" stroke="#1f2937" strokeWidth="2" />
            <line x1="94" y1="66" x2="100" y2="62" stroke="#1f2937" strokeWidth="2" />
            {/* Reflection */}
            <rect x="46" y="64" width="6" height="3" rx="1" fill="white" opacity="0.3" />
            <rect x="76" y="64" width="6" height="3" rx="1" fill="white" opacity="0.3" />
          </>
        ) : (
          <>
            {/* Normal eyes */}
            <ellipse cx="58" cy="68" rx="6" ry="7" fill="#1f2937" />
            <ellipse cx="88" cy="68" rx="6" ry="7" fill="#1f2937" />
            {/* Eye shine */}
            <ellipse cx="60" cy="66" rx="2" ry="2.5" fill="white" />
            <ellipse cx="90" cy="66" rx="2" ry="2.5" fill="white" />
          </>
        )}

        {/* Smile */}
        <path d="M62 82 Q73 92 84 82" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Accessories */}
        {accessory === "umbrella" && (
          <g transform="translate(110, 30)">
            {/* Umbrella handle */}
            <line x1="15" y1="0" x2="15" y2="55" stroke="#6366f1" strokeWidth="2.5" />
            <path d="M13 55 Q13 62 18 62" stroke="#6366f1" strokeWidth="2.5" fill="none" />
            {/* Umbrella top */}
            <path d="M0 0 Q15 -18 30 0" fill="#818cf8" />
            <path d="M0 0 Q15 -14 30 0" fill="#6366f1" opacity="0.5" />
          </g>
        )}

        {accessory === "scarf" && (
          <g>
            <path d="M40 90 Q55 98 80 96 Q105 94 115 88" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M40 90 L35 108 Q38 110 42 108 L44 94" fill="#ef4444" />
            <path d="M40 90 Q55 98 80 96" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          </g>
        )}

        {accessory === "hat" && (
          <g>
            <ellipse cx="73" cy="44" rx="38" ry="6" fill="#60a5fa" />
            <rect x="50" y="20" width="46" height="24" rx="8" fill="#3b82f6" />
            <rect x="56" y="32" width="10" height="3" rx="1" fill="white" opacity="0.3" />
          </g>
        )}

        {accessory === "raincoat" && (
          <g>
            <path d="M30 85 Q35 100 45 108 L115 108 Q125 100 130 85" fill="#fbbf24" opacity="0.8" />
            <path d="M30 85 Q35 88 80 90 Q125 88 130 85" fill="#f59e0b" opacity="0.6" />
          </g>
        )}

        {accessory === "earmuffs" && (
          <g>
            <path d="M35 55 Q38 35 73 33 Q108 35 115 55" stroke="#a855f7" strokeWidth="3" fill="none" />
            <circle cx="35" cy="58" r="10" fill="#a855f7" />
            <circle cx="115" cy="58" r="10" fill="#a855f7" />
            <circle cx="35" cy="58" r="6" fill="#c084fc" />
            <circle cx="115" cy="58" r="6" fill="#c084fc" />
          </g>
        )}

        {accessory === "kite" && (
          <g transform="translate(115, 15)">
            {/* Kite string */}
            <path d="M0 60 Q10 30 15 0" stroke="#94a3b8" strokeWidth="1" fill="none" />
            {/* Kite */}
            <polygon points="15,0 25,15 15,30 5,15" fill="#f472b6" />
            <polygon points="15,0 25,15 15,15" fill="#ec4899" opacity="0.5" />
            {/* Tail */}
            <path d="M15 30 Q20 38 12 42 Q18 48 14 54" stroke="#f472b6" strokeWidth="1.5" fill="none" />
          </g>
        )}

        {accessory === "lantern" && (
          <g transform="translate(112, 55)">
            {/* Lantern handle */}
            <path d="M5 0 Q10 -5 15 0" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
            {/* Lantern body */}
            <rect x="3" y="0" width="14" height="18" rx="3" fill="#fbbf24" opacity="0.9" />
            {/* Glow */}
            <circle cx="10" cy="9" r="12" fill="#fbbf24" opacity="0.2" />
            {/* Light */}
            <ellipse cx="10" cy="9" rx="3" ry="5" fill="#fef3c7" />
          </g>
        )}
      </svg>
    </div>
  );
}
