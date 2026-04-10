"use client";

import { useState, useEffect } from "react";

const LOADER_VISIBLE_MS = 900;

interface UseMockupLoaderReturn {
  isLoaded: boolean;
  showLoader: boolean;
  onMediaLoaded: () => void;
}

export function useMockupLoader(url?: string, videoSrc?: string): UseMockupLoaderReturn {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setIsLoaded(false);
    setShowLoader(true);

    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, LOADER_VISIBLE_MS);

    return () => window.clearTimeout(timer);
  }, [url, videoSrc]);

  const onMediaLoaded = () => {
    setIsLoaded(true);
    setShowLoader(false);
  };

  return { isLoaded, showLoader, onMediaLoaded };
}
