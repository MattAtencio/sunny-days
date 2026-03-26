"use client";

interface BottomNavProps {
  activeScreen: "weather" | "gallery" | "days";
  onNavigate: (screen: "weather" | "gallery" | "days") => void;
}

export default function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  const tabs = [
    {
      id: "weather" as const,
      label: "Today",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="14" r="8" fill="#fbbf24" />
          <line x1="16" y1="2" x2="16" y2="5" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="23" x2="16" y2="26" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <line x1="5" y1="14" x2="8" y2="14" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="14" x2="27" y2="14" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "gallery" as const,
      label: "Weather",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <ellipse cx="16" cy="20" rx="12" ry="6" fill="#94a3b8" />
          <ellipse cx="11" cy="16" rx="7" ry="6" fill="#9ca3af" />
          <ellipse cx="20" cy="15" rx="6" ry="5.5" fill="#94a3b8" />
          <circle cx="8" cy="10" r="4" fill="#fbbf24" />
        </svg>
      ),
    },
    {
      id: "days" as const,
      label: "Days",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="4" fill="#60a5fa" />
          <rect x="4" y="6" width="24" height="8" rx="4" fill="#3b82f6" />
          <text x="16" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">7</text>
        </svg>
      ),
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-100 safe-area-bottom"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-around items-center h-20 max-w-lg mx-auto px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center justify-center w-20 h-16 rounded-2xl transition-all active:scale-90 ${
              activeScreen === tab.id
                ? "bg-sky-100 scale-105"
                : "opacity-60"
            }`}
            aria-label={`Go to ${tab.label} screen`}
            aria-current={activeScreen === tab.id ? "page" : undefined}
          >
            {tab.icon}
            <span className="text-xs font-bold mt-0.5 text-gray-700">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
