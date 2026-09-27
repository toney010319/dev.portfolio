/// <reference types="vite/client" />

interface Gtag {
  (command: "js", date: Date): void;
  (command: "config", targetId: string, config?: Record<string, unknown>): void;
  (command: "event", eventName: string, eventParams?: Record<string, string>): void;
}

interface Window {
  dataLayer?: unknown[];
  gtag?: Gtag;
}
