"use client";

import { useEffect, useState } from "react";
import { isMuted, setMuted } from "@/lib/speech";

export default function MuteButton() {
  const [muted, setMutedState] = useState(false);

  useEffect(() => {
    setMutedState(isMuted());
  }, []);

  const toggle = () => {
    const newVal = !muted;
    setMutedState(newVal);
    setMuted(newVal);
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center active:scale-90 transition-transform"
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
    >
      {muted ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#374151" />
          <line x1="23" y1="9" x2="17" y2="15" stroke="#ef4444" />
          <line x1="17" y1="9" x2="23" y2="15" stroke="#ef4444" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#374151" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#374151" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="#374151" />
        </svg>
      )}
    </button>
  );
}
