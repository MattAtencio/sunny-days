"use client";

export default function PartlyCloudyAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Sun peeking */}
      <div className="absolute top-[8%] left-[30%] animate-sun-peek">
        <div className="animate-sun-pulse w-24 h-24 rounded-full bg-yellow-400 shadow-[0_0_30px_8px_rgba(250,204,21,0.4)]" />
      </div>
      {/* Cloud partially covering sun */}
      <div
        className="animate-cloud-drift absolute top-[5%]"
        style={
          {
            "--cloud-duration": "30s",
            "--cloud-delay": "-10s",
          } as React.CSSProperties
        }
      >
        <svg width="180" height="90" viewBox="0 0 120 60" fill="none">
          <ellipse
            cx="60"
            cy="40"
            rx="50"
            ry="18"
            fill="white"
            opacity="0.95"
          />
          <ellipse cx="40" cy="30" rx="28" ry="22" fill="white" />
          <ellipse
            cx="75"
            cy="28"
            rx="24"
            ry="20"
            fill="white"
            opacity="0.95"
          />
          <ellipse cx="55" cy="22" rx="20" ry="18" fill="white" />
        </svg>
      </div>
      {/* Small background clouds */}
      <div
        className="animate-cloud-drift absolute top-[30%]"
        style={
          {
            "--cloud-duration": "25s",
            "--cloud-delay": "-18s",
          } as React.CSSProperties
        }
      >
        <svg width="100" height="50" viewBox="0 0 120 60" fill="none">
          <ellipse
            cx="60"
            cy="40"
            rx="50"
            ry="18"
            fill="white"
            opacity="0.7"
          />
          <ellipse
            cx="45"
            cy="30"
            rx="25"
            ry="18"
            fill="white"
            opacity="0.75"
          />
        </svg>
      </div>
    </div>
  );
}
