"use client";

export default function SnowyAnimation() {
  const flakes = Array.from({ length: 20 }, (_, i) => ({
    left: `${(i * 5.2) % 98}%`,
    size: 6 + (i % 4) * 4,
    duration: `${4 + (i % 3) * 1.5}s`,
    delay: `${(i * 0.4) % 4}s`,
    opacity: 0.5 + (i % 3) * 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Light snow cloud */}
      <div className="absolute top-[3%] left-1/2 -translate-x-1/2">
        <svg width="200" height="80" viewBox="0 0 120 50" fill="none">
          <ellipse cx="60" cy="35" rx="55" ry="15" fill="#e2e8f0" />
          <ellipse cx="40" cy="25" rx="30" ry="20" fill="#f1f5f9" />
          <ellipse cx="75" cy="22" rx="26" ry="18" fill="#e2e8f0" />
          <ellipse cx="55" cy="18" rx="22" ry="16" fill="#f1f5f9" />
        </svg>
      </div>
      {/* Snowflakes */}
      {flakes.map((flake, i) => (
        <div
          key={i}
          className="animate-snowflake absolute"
          style={
            {
              left: flake.left,
              top: "15%",
              "--snow-duration": flake.duration,
              "--snow-delay": flake.delay,
            } as React.CSSProperties
          }
        >
          <svg
            width={flake.size}
            height={flake.size}
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle
              cx="8"
              cy="8"
              r="6"
              fill="white"
              opacity={flake.opacity}
            />
            <line
              x1="8"
              y1="1"
              x2="8"
              y2="15"
              stroke="white"
              strokeWidth="0.5"
              opacity={flake.opacity * 0.7}
            />
            <line
              x1="1"
              y1="8"
              x2="15"
              y2="8"
              stroke="white"
              strokeWidth="0.5"
              opacity={flake.opacity * 0.7}
            />
            <line
              x1="3"
              y1="3"
              x2="13"
              y2="13"
              stroke="white"
              strokeWidth="0.5"
              opacity={flake.opacity * 0.7}
            />
            <line
              x1="13"
              y1="3"
              x2="3"
              y2="13"
              stroke="white"
              strokeWidth="0.5"
              opacity={flake.opacity * 0.7}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
