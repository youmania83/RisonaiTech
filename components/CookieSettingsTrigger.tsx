"use client";

import { Settings2 } from "lucide-react";

export default function CookieSettingsTrigger({
  label = "Manage Cookie Preferences",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const openSettings = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("risonai_open_cookie_settings"));
    }
  };

  return (
    <button
      type="button"
      onClick={openSettings}
      className={
        className ||
        "inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
      }
    >
      <Settings2 size={16} />
      {label}
    </button>
  );
}
