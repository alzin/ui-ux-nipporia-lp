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
    <div className={`rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md px-4 md:px-5 py-3 shadow-lg shadow-purple-900/5 flex flex-col lg:items-center lg:justify-between gap-3 md:gap-4 ${isRTL ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className={`min-w-0 ${isRTL ? "text-right" : "text-left"}`}>
        <p className="text-sm md:text-base font-semibold text-slate-900 truncate">
          {activeProject.title}
        </p>
        <p className="text-xs md:text-sm text-slate-600 truncate">
          {activeProject.siteUrl}
        </p>
      </div>

      <div className={`flex flex-wrap items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
        <div className="inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200">
          {activeProject.mediaType !== "video" && (
            <button
              onClick={() => setDeviceMode("laptop")}
              className={`px-3 py-1.5 text-xs md:text-sm rounded-full transition-colors ${deviceMode === "laptop" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-800"}`}
            >
              {t.laptop}
            </button>
          )}
          <button
            onClick={() => setDeviceMode("phone")}
            className={`px-3 py-1.5 text-xs md:text-sm rounded-full transition-colors ${deviceMode === "phone" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-800"}`}
          >
            {t.phone}
          </button>
        </div>

        {activeProject.mediaType !== "video" && activeProject.siteUrl && (
          <a
            href={activeProject.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 text-white text-xs md:text-sm font-medium px-4 py-2 hover:bg-slate-800 transition-colors"
          >
            {t.viewLiveSite}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
