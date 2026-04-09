"use client";

import { useState, useEffect } from "react";
import type { Project } from "../../../components/ProjectData";

export type DeviceMode = "laptop" | "phone";

export function useDeviceDetection(mediaType: Project["mediaType"]) {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("laptop");

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (isMobile) setDeviceMode("phone");
  }, []);

  useEffect(() => {
    if (mediaType === "video" && deviceMode !== "phone") {
      setDeviceMode("phone");
    }
  }, [mediaType, deviceMode]);

  return { deviceMode, setDeviceMode };
}
