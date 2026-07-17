/**
 * Google Ads Conversion Tracking Utility
 * 
 * Manages event queueing, secure SHA-256 hashing of lead data for Google Ads 
 * Enhanced Conversions, conversion callbacks, and fallback timeouts.
 */

// Define TypeScript interfaces for gtag.js
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || "AW-18229362372";
const LEAD_FORM_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_FORM_LABEL || "4KqSCN_H1e4ZEJzkv8oq";
const WHATSAPP_CLICK_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CLICK_LABEL || "whatsapp_click_label_placeholder";

/**
 * Helper to hash a string to SHA-256 using the browser's native Crypto API.
 * Google Ads Enhanced Conversions requires lowercased, trimmed, and SHA-256 hashed values.
 */
async function sha256(message: string): Promise<string | null> {
  if (typeof window === "undefined") return null;
  
  const trimmed = message.trim().toLowerCase();
  if (!trimmed) return null;

  try {
    // Check if secure context and Crypto API are available
    if (window.crypto && window.crypto.subtle) {
      const msgUint8 = new TextEncoder().encode(trimmed);
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
      return hashHex;
    }
  } catch (err) {
    console.error("Failed to hash data for Enhanced Conversions:", err);
  }
  
  return null;
}

/**
 * Fires a Google Ads conversion event with a callback and a safety timeout fallback.
 * 
 * @param eventName The Google Ads event action ('conversion' or custom)
 * @param label The specific conversion label
 * @param value The value associated with this conversion
 * @param currency The currency (default: 'INR')
 * @param callback Callback function executed after conversion is tracked or on timeout
 * @param userData Optional user data for Enhanced Conversions (email, phone, name)
 */
export async function trackAdsEvent(
  eventName: string,
  label: string,
  value: number = 1.0,
  currency: string = "INR",
  callback?: () => void,
  userData?: { phone?: string; name?: string }
) {
  let callbackCalled = false;
  
  // Safe callback runner to guarantee it only runs once
  const executeCallback = () => {
    if (callbackCalled) return;
    callbackCalled = true;
    if (callback) {
      callback();
    }
  };

  // Fallback timeout: If Google Ads script is blocked by an ad-blocker or fails
  // to respond within 1.5 seconds, trigger the callback to prevent breaking the flow.
  const fallbackTimeout = setTimeout(() => {
    console.warn("Google Ads conversion callback timed out. Running fallback.");
    executeCallback();
  }, 1500);

  // Initialize dataLayer if missing
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
  }

  // Ensure gtag function exists
  const gtag = typeof window !== "undefined" ? window.gtag : undefined;

  if (!gtag) {
    console.warn("gtag.js is not loaded on the window. Executing callback immediately.");
    clearTimeout(fallbackTimeout);
    executeCallback();
    return;
  }

  try {
    // 1. Prepare and send Enhanced Conversions User Data if available
    if (userData) {
      const userPayload: Record<string, any> = {};

      if (userData.phone) {
        // Formulate standard E.164 phone format if needed, then hash
        let cleanPhone = userData.phone.replace(/[^0-9+]/g, "");
        if (cleanPhone.startsWith("91") && !cleanPhone.startsWith("+")) {
          cleanPhone = "+" + cleanPhone;
        } else if (!cleanPhone.startsWith("+")) {
          cleanPhone = "+91" + cleanPhone; // Fallback default country code
        }
        const hashedPhone = await sha256(cleanPhone);
        if (hashedPhone) {
          userPayload["sha256_phone_number"] = hashedPhone;
        }
      }

      if (userData.name) {
        const hashedName = await sha256(userData.name);
        if (hashedName) {
          userPayload["address"] = {
            "sha256_first_name": hashedName
          };
        }
      }

      if (Object.keys(userPayload).length > 0) {
        console.log("Setting secure user_data for Enhanced Conversions");
        gtag("set", "user_data", userPayload);
      }
    }

    // 2. Fire the conversion event
    console.log(`Firing conversion event: ${eventName} (Label: ${label})`);
    gtag("event", eventName, {
      send_to: `${CONVERSION_ID}/${label}`,
      value: value,
      currency: currency,
      event_callback: () => {
        clearTimeout(fallbackTimeout);
        console.log("Google Ads conversion successfully recorded.");
        executeCallback();
      }
    });
  } catch (err) {
    console.error("Error firing Google Ads conversion event:", err);
    clearTimeout(fallbackTimeout);
    executeCallback();
  }
}

/**
 * Wrapper for Lead Form submissions (Primary conversion)
 */
export function trackLeadSubmission(
  name: string,
  phone: string,
  callback: () => void
) {
  trackAdsEvent(
    "conversion",
    LEAD_FORM_LABEL,
    1.0,
    "INR",
    callback,
    { name, phone }
  );
}

/**
 * Wrapper for Direct WhatsApp clicks (Secondary conversion)
 */
export function trackWhatsAppClick(
  destinationUrl: string,
  callback?: () => void
) {
  trackAdsEvent(
    "conversion",
    WHATSAPP_CLICK_LABEL,
    1.0,
    "INR",
    callback
  );
}
