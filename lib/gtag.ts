export const GOOGLE_ADS_ID = "AW-18451717511";
const CONTACT_CONVERSION_LABEL = "O20JCNr4ifgcEIe7u95E";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function reportContactConversion() {
  window.gtag?.("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONTACT_CONVERSION_LABEL}`,
    value: 1.0,
    currency: "USD",
  });
}
