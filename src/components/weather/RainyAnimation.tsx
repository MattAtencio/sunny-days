"use client";

export default function RainyAnimation() {
  const drops = Array.from({ length: 15 }, (_, i) => ({
    left: `${5 + (i * 6.5) % 90}%`,
    duration: `${0.8 + Math.random() * 0.8}s`,
    delay: `${(i * 0.15) % 1.5}s`,
  }));

  const ripples = Array.from({ length: 5 }, (_, i) => ({
    left: `${15 + i * 18}%`,
    delay: `${i * 0.3}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Rain cloud */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2">
        <svg width="200" height="80" viewBox="0 0 120 50" fill="none">
          <ellipse cx="60" cy="35" rx="55" ry="15" fill="#94a3b8" />
          <ellipse cx="40" cy="25" rx="30" ry="20" fill="#9ca3af" />
          <ellipse cx="75" cy="22" rx="26" ry="18" fill="#94a3b8" />
          <ellipse cx="55" cy="18" rx="22" ry="16" fill="#9ca3af" />
        </svg>
      </div>
      {/* Raindrops */}
      {drops.map((drop, i) => (
        <div
          key={i}
          className="animate-raindrop absolute w-0.5 h-4 rounded-full bg-blue-400/70"
          style={{
            left: drop.left,
            top: "20%",
            ["--drop-duration" as string]: drop.duration,
            ["--drop-delay" as string]: drop.delay,
          }}
        />
      ))}
      {/* Ripples at bottom */}
      {ripples.map((r, i) => (
        <div
          key={i}
          className="animate-ripple absolute bottom-[15%] w-4 h-1 rounded-full border border-blue-300/50"
          style={{
            left: r.left,
            ["--ripple-delay" as string]: r.delay,
          }}
        />
      ))}
    </div>
  );
}
