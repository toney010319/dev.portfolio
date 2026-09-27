type EventParams = Record<string, string>;

export function trackEvent(name: string, params?: EventParams) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
