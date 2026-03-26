"use client";

function Cloud({ size, top, duration, delay }: { size: number; top: string; duration: string; delay: string }) {
  return (
    <div
      className="animate-cloud-drift absolute"
      style={{
        top,
        ["--cloud-duration" as string]: duration,
        ["--cloud-delay" as string]: delay,
      }}
    >
      <svg width={size} height={size * 0.5} viewBox="0 0 120 60" fill="none">
        <ellipse cx="60" cy="40" rx="50" ry="18" fill="white" opacity="0.9" />
        <ellipse cx="40" cy="30" rx="28" ry="22" fill="white" opacity="0.95" />
        <ellipse cx="75" cy="28" rx="24" ry="20" fill="white" opacity="0.9" />
        <ellipse cx="55" cy="22" rx="20" ry="18" fill="white" opacity="0.95" />
      </svg>
    </div>
  );
}

export default function CloudyAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Cloud size={160} top="10%" duration="20s" delay="0s" />
      <Cloud size={120} top="25%" duration="25s" delay="-8s" />
      <Cloud size={140} top="5%" duration="22s" delay="-14s" />
      <Cloud size={100} top="35%" duration="28s" delay="-5s" />
    </div>
  );
}
