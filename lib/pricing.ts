// ─── Geo-based pricing config ────────────────────────────────────────────────
// International prices = India price × 1.5, converted at mid-market rates.
// INR/USD ≈ 83  |  INR/GBP ≈ 107  |  INR/AED ≈ 22.6  |  INR/SGD ≈ 61

export type ServiceKey =
  | "chatbot"
  | "whatsapp"
  | "ai-automation"
  | "website"
  | "ai-agent"
  | "crm"
  | "saas";

type RegionPricing = {
  symbol: string;
  from: string;        // "From X"
  range: string;       // "X – Y"
  faqSingle: string;   // short FAQ price string
};

type PricingConfig = Record<ServiceKey, Record<"IN" | "INTL", RegionPricing>>;

// INR base prices: chatbot 20k, whatsapp 25k, ai-auto 30k, website 35k,
//                 ai-agent 40k, crm 40k, saas 1.2L
// INTL (USD) = INR × 1.5 / 83, rounded to nearest $49/$99 friendly number
export const PRICING: PricingConfig = {
  chatbot: {
    IN:   { symbol: "₹", from: "₹20,000",   range: "₹20,000 – ₹1,50,000",  faqSingle: "₹20,000–₹80,000" },
    INTL: { symbol: "$", from: "$359",       range: "$359 – $2,699",         faqSingle: "$359–$1,449" },
  },
  whatsapp: {
    IN:   { symbol: "₹", from: "₹25,000",   range: "₹25,000 – ₹2,00,000",  faqSingle: "₹25,000–₹60,000" },
    INTL: { symbol: "$", from: "$449",       range: "$449 – $3,599",         faqSingle: "$449–$1,079" },
  },
  "ai-automation": {
    IN:   { symbol: "₹", from: "₹30,000",   range: "₹30,000 – ₹6,00,000",  faqSingle: "₹30,000–₹60,000" },
    INTL: { symbol: "$", from: "$539",       range: "$539 – $10,799",        faqSingle: "$539–$1,079" },
  },
  website: {
    IN:   { symbol: "₹", from: "₹35,000",   range: "₹35,000 – ₹2,50,000",  faqSingle: "₹35,000–₹80,000" },
    INTL: { symbol: "$", from: "$629",       range: "$629 – $4,499",         faqSingle: "$629–$1,439" },
  },
  "ai-agent": {
    IN:   { symbol: "₹", from: "₹40,000",   range: "₹40,000 – ₹5,00,000",  faqSingle: "₹40,000–₹1,20,000" },
    INTL: { symbol: "$", from: "$719",       range: "$719 – $8,999",         faqSingle: "$719–$2,159" },
  },
  crm: {
    IN:   { symbol: "₹", from: "₹40,000",   range: "₹40,000 – ₹3,00,000",  faqSingle: "₹40,000–₹80,000" },
    INTL: { symbol: "$", from: "$719",       range: "$719 – $5,399",         faqSingle: "$719–$1,439" },
  },
  saas: {
    IN:   { symbol: "₹", from: "₹1,20,000", range: "₹1,20,000 – ₹12,00,000", faqSingle: "₹1,20,000–₹4,00,000" },
    INTL: { symbol: "$", from: "$2,159",     range: "$2,159 – $21,599",        faqSingle: "$2,159–$7,199" },
  },
};

/** Returns "IN" for India, "INTL" for everything else */
export function getRegion(country: string | undefined | null): "IN" | "INTL" {
  return country === "IN" ? "IN" : "INTL";
}

export function getPricing(service: ServiceKey, country: string | undefined | null): RegionPricing {
  return PRICING[service][getRegion(country)];
}
