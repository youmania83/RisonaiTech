"use client";

import { useEffect } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * Global component that listens for document-level clicks on any WhatsApp link,
 * firing the secondary conversion event. It handles popup blocker restrictions 
 * by checking the anchor target attribute.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find the closest anchor tag parent
      const anchor = target.closest("a");
      
      if (!anchor) return;

      const href = anchor.href || "";
      const isWhatsApp = href.includes("wa.me") || href.includes("whatsapp.com");

      if (isWhatsApp) {
        console.log("Intercepted WhatsApp link click:", href);
        
        const targetAttr = anchor.getAttribute("target");
        
        if (targetAttr === "_blank") {
          // For _blank links, let the browser open the tab immediately (preventing popup block).
          // Since the current page remains loaded, the gtag event executes safely in the background.
          trackWhatsAppClick(href);
        } else {
          // For same-tab links, prevent default, fire event, then navigate.
          e.preventDefault();
          trackWhatsAppClick(href, () => {
            window.location.href = href;
          });
        }
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return null; // This component doesn't render any UI
}
