"use client";

export default function SunnyAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Sun */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
        {/* Rays */}
        <div className="animate-sun-rotate">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-20 bg-yellow-300/60 rounded-full origin-bottom"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                transformOrigin: "50% 100%",
              }}
            />
          ))}
        </div>
        {/* Sun body */}
        <div className="animate-sun-pulse w-28 h-28 rounded-full bg-yellow-400 shadow-[0_0_40px_10px_rgba(250,204,21,0.5)] relative z-10" />
      </div>
      {/* Birds */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="animate-bird absolute text-2xl"
          style={{
            top: `${15 + i * 8}%`,
            ["--bird-duration" as string]: `${7 + i * 3}s`,
            ["--bird-delay" as string]: `${i * 2.5}s`,
          }}
        >
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path d="M0 8 Q6 0 12 6 Q18 0 24 8" stroke="#374151" strokeWidth="2" fill="none" />
          </svg>
        </div>
      ))}
    </div>
  );
}
