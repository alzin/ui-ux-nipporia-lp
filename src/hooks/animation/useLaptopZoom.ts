"use client";

import { useState, useEffect } from "react";

const DESKTOP_ZOOM_LG = 0.59;
const DESKTOP_ZOOM_MD = 0.52;
const DESKTOP_ZOOM_SM = 0.43;
const DESKTOP_ZOOM_XS = 0.20;

function getZoomByViewport(): number {
  if (typeof window === "undefined") return DESKTOP_ZOOM_LG;
  const width = window.innerWidth;
  if (width < 420) return DESKTOP_ZOOM_XS;
  if (width < 768) return DESKTOP_ZOOM_SM;
  if (width < 1024) return DESKTOP_ZOOM_MD;
  return DESKTOP_ZOOM_LG;
}

interface UseLaptopZoomReturn {
  zoom: number;
  zoomPercent: string;
}

export function useLaptopZoom(): UseLaptopZoomReturn {
  const [zoom, setZoom] = useState(DESKTOP_ZOOM_LG);

  useEffect(() => {
    const update = () => setZoom(getZoomByViewport());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return { zoom, zoomPercent: `${100 / zoom}%` };
}
