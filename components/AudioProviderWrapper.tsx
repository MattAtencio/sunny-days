"use client";

import { KidsAudioProvider } from "@kids-games/core/voice";
import type { ReactNode } from "react";

export function AudioProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <KidsAudioProvider storagePrefix="sunny-days" audioBasePath="/sunny-days/audio">
      {children}
    </KidsAudioProvider>
  );
}
