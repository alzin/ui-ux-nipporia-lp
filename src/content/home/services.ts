import {
  SeoIcon,
  BlogIcon,
  GoogleAdsIcon,
  UiUxIcon,
  AiIcon,
  MobileAppIcon,
  SaasIcon,
  DigitalMarketingIcon,
  MaintenanceIcon,
} from "@/components/common/components/icons/ServiceIcons";

export type TServiceMeta = {
  number: string;
  color: string;
  iconColor: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const servicesMeta: TServiceMeta[] = [
  { number: "01", color: "from-violet-400 to-purple-400",   iconColor: "text-violet-700",  Icon: MaintenanceIcon },
  { number: "02", color: "from-pink-400 to-rose-400",       iconColor: "text-rose-700",    Icon: SeoIcon },
  { number: "03", color: "from-cyan-400 to-blue-400",       iconColor: "text-blue-700",    Icon: BlogIcon },
  { number: "04", color: "from-green-400 to-emerald-400",   iconColor: "text-emerald-700", Icon: GoogleAdsIcon },
  { number: "05", color: "from-orange-400 to-amber-400",    iconColor: "text-amber-700",   Icon: UiUxIcon },
  { number: "06", color: "from-sky-400 to-cyan-500",        iconColor: "text-sky-700",     Icon: AiIcon },
  { number: "07", color: "from-teal-400 to-emerald-500",    iconColor: "text-teal-700",    Icon: MobileAppIcon },
  { number: "08", color: "from-fuchsia-400 to-pink-500",    iconColor: "text-fuchsia-700", Icon: SaasIcon },
  { number: "09", color: "from-lime-400 to-green-500",      iconColor: "text-lime-700",    Icon: DigitalMarketingIcon },
];
