import type { Project } from "@/content/home/projectData";
import type { DeviceMode } from "@/hooks/ui/useDeviceDetection";

interface Props {
  activeProject: Project;
  deviceMode: DeviceMode;
  setDeviceMode: (mode: DeviceMode) => void;
  isRTL: boolean;
  t: { laptop: string; phone: string; viewLiveSite: string };
}

export default function DeviceModePicker({ activeProject, deviceMode, setDeviceMode, isRTL, t }: Props) {
  return (
    <div
      className={`rounded-2xl border border-white/70 bg-white/90 backdrop-blur-md px-4 py-4 md:px-5 shadow-lg shadow-purple-900/5 flex flex-col lg:items-center lg:justify-between gap-4 ${isRTL ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      {/* Title + URL */}
      <div className={`min-w-0 ${isRTL ? "text-right" : "text-left"}`}>
        <p className="text-sm md:text-base font-semibold text-[#8641E8] truncate">
          {activeProject.title}
        </p>
        {/* {activeProject.siteUrl && (
          <p className="text-xs md:text-sm text-slate-500 truncate">
            {activeProject.siteUrl}
          </p>
        )} */}
      </div>

      {/* Toggle + View Live */}
      <div className={`flex flex-col items-stretch gap-2 lg:flex-row lg:items-center ${isRTL ? "lg:flex-row-reverse" : ""}`}>
        {/* Laptop / Phone pill — full width on mobile, each button fills equally */}
        <div className="flex items-center p-1 rounded-full bg-[#FAF5FF] border border-black/5 w-full lg:w-auto">
          {activeProject.mediaType !== "video" && (
            <button
              onClick={() => setDeviceMode("laptop")}
              className={`flex-1 text-center px-3 py-1.5 text-sm rounded-full transition-colors ${deviceMode === "laptop" ? "bg-white text-purple-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              {/* {t.laptop} */}
              PC
            </button>
          )}
          <button
            onClick={() => setDeviceMode("phone")}
            className={`flex-1 text-center px-3 py-1.5 text-sm rounded-full transition-colors ${deviceMode === "phone" ? "bg-white text-purple-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            {/* {t.phone} */}
            Phone
          </button>
        </div>
        {/* 
        {activeProject.mediaType !== "video" && activeProject.siteUrl && (
          <a
            href={activeProject.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full lg:w-fit items-center justify-center gap-2 rounded-full bg-slate-900 text-white text-xs md:text-sm font-medium px-4 py-2 hover:bg-slate-800 transition-colors"
          >
            {t.viewLiveSite}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        )} */}
      </div>
    </div>
  );
}
