"use client";

export default function FoggyAnimation() {
  const layers = [
    { top: "10%", opacity: 0.3, duration: "12s", delay: "0s" },
    { top: "25%", opacity: 0.4, duration: "15s", delay: "-4s" },
    { top: "40%", opacity: 0.5, duration: "10s", delay: "-7s" },
    { top: "55%", opacity: 0.35, duration: "14s", delay: "-2s" },
    { top: "70%", opacity: 0.45, duration: "11s", delay: "-9s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {layers.map((layer, i) => (
        <div
          key={i}
          className="animate-fog absolute left-0 w-[120%] h-16 rounded-full"
          style={
            {
              top: layer.top,
              background: `linear-gradient(90deg, transparent, rgba(200,200,210,${layer.opacity}), rgba(180,180,195,${layer.opacity * 0.8}), transparent)`,
              "--fog-duration": layer.duration,
              "--fog-delay": layer.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
