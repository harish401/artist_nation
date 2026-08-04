type GTMEvent = {
  event: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const GTM_ID = "GTM-K9DCJBRV";

/**
 * Pushes a custom event to the Google Tag Manager dataLayer.
 */
export function sendGTMEvent(data: GTMEvent): void {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
}
