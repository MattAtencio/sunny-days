"use client";

export default function WindyAnimation() {
  const lines = Array.from({ length: 8 }, (_, i) => ({
    top: `${10 + i * 10}%`,
    width: 40 + (i % 3) * 30,
    duration: `${2 + (i % 3)}s`,
    delay: `${(i * 0.4) % 2}s`,
  }));

  const leaves = Array.from({ length: 4 }, (_, i) => ({
    top: `${20 + i * 15}%`,
    duration: `${3.5 + i * 0.8}s`,
    delay: `${i * 1.2}s`,
    color: ["#22c55e", "#84cc16", "#f59e0b", "#ef4444"][i],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Wind lines */}
      {lines.map((line, i) => (
        <div
          key={`line-${i}`}
          className="animate-wind-line absolute h-0.5 rounded-full bg-white/40"
          style={{
            top: line.top,
            width: `${line.width}px`,
            ["--wind-duration" as string]: line.duration,
            ["--wind-delay" as string]: line.delay,
          }}
        />
      ))}
      {/* Leaves */}
      {leaves.map((leaf, i) => (
        <div
          key={`leaf-${i}`}
          className="animate-leaf absolute"
          style={{
            top: leaf.top,
            ["--leaf-duration" as string]: leaf.duration,
            ["--leaf-delay" as string]: leaf.delay,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <ellipse cx="9" cy="9" rx="6" ry="9" fill={leaf.color} opacity="0.8" transform="rotate(30 9 9)" />
            <line x1="9" y1="2" x2="9" y2="16" stroke={leaf.color} strokeWidth="0.5" opacity="0.6" />
          </svg>
        </div>
      ))}
    </div>
  );
}
