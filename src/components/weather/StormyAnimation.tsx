"use client";

export default function StormyAnimation() {
  const drops = Array.from({ length: 15 }, (_, i) => ({
    left: `${3 + (i * 7) % 94}%`,
    duration: `${0.6 + Math.random() * 0.5}s`,
    delay: `${(i * 0.12) % 1.2}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dark storm cloud */}
      <div className="absolute top-[3%] left-1/2 -translate-x-1/2">
        <svg width="240" height="100" viewBox="0 0 140 60" fill="none">
          <ellipse cx="70" cy="42" rx="65" ry="18" fill="#4b5563" />
          <ellipse cx="45" cy="30" rx="35" ry="24" fill="#374151" />
          <ellipse cx="90" cy="28" rx="30" ry="22" fill="#4b5563" />
          <ellipse cx="65" cy="20" rx="28" ry="20" fill="#374151" />
        </svg>
      </div>
      {/* Lightning */}
      <div className="animate-lightning absolute top-[18%] left-1/2 -translate-x-1/2 z-10">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
          <polygon points="20,0 8,35 18,35 10,80 35,30 22,30 30,0" fill="#fbbf24" opacity="0.9" />
        </svg>
      </div>
      {/* Rain */}
      {drops.map((drop, i) => (
        <div
          key={i}
          className="animate-raindrop absolute w-0.5 h-5 rounded-full bg-blue-300/60"
          style={{
            left: drop.left,
            top: "18%",
            ["--drop-duration" as string]: drop.duration,
            ["--drop-delay" as string]: drop.delay,
          }}
        />
      ))}
    </div>
  );
}
