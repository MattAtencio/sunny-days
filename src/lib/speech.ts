"use client";

export function speak(text: string, onEnd?: () => void) {
  if (typeof window === "undefined") return;
  if (!("speechSynthesis" in window)) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85; // Slightly slower for kids
  utterance.pitch = 1.1; // Slightly higher pitch
  utterance.volume = 1.0;

  if (onEnd) {
    utterance.onend = onEnd;
  }

  // Try to find a friendly voice
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(
    (v) => v.lang.startsWith("en") && v.name.includes("Female")
  ) || voices.find((v) => v.lang.startsWith("en"));
  if (preferred) {
    utterance.voice = preferred;
  }

  window.speechSynthesis.speak(utterance);
}

export function isMuted(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("sunny-days-muted") === "true";
}

export function setMuted(muted: boolean) {
  if (typeof window === "undefined") return;
  localStorage.setItem("sunny-days-muted", String(muted));
  if (muted) {
    window.speechSynthesis.cancel();
  }
}
