"use client";

import { useEffect } from "react";

const TAWK_LOCALE_MAP: Record<string, string> = {
  ja: "ja",
  en: "en",
  ar: "ar",
};

interface Props {
  lang: string;
  propertyId: string;
  widgetId: string;
}

declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      setAttributes?: (
        attrs: Record<string, string>,
        callback?: () => void,
      ) => void;
      hideWidget?: () => void;
      showWidget?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

export default function TawkChat({ lang, propertyId, widgetId }: Props) {
  const locale = TAWK_LOCALE_MAP[lang] ?? "en";
  console.log("TawkChat rendered with propertyId:", propertyId);
  useEffect(() => {
    if (!propertyId || !widgetId) return;
    if (document.getElementById("tawk-script")) return;

    window.Tawk_API = window.Tawk_API ?? {};
    window.Tawk_LoadStart = new Date();

    // Once the widget loads, send the visitor's current language to the agent
    // so they know which language to reply in.
    window.Tawk_API.onLoad = () => {
      window.Tawk_API?.setAttributes?.({ language: locale });
    };

    const s1 = document.createElement("script");
    s1.id = "tawk-script";
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.head.appendChild(s1);
  }, [propertyId, widgetId]); // eslint-disable-line react-hooks/exhaustive-deps

  // When the visitor switches language, update the attribute for the agent
  useEffect(() => {
    window.Tawk_API?.setAttributes?.({ language: locale });
  }, [locale]);

  return null;
}
