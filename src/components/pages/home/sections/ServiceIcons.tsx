import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function NextJsDevIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M20 20L60 20L60 60L20 60L20 20Z" stroke="currentColor" strokeWidth="2" />
      <path d="M30 35L50 35M30 45L40 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M45 40L50 35L45 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25" cy="25" r="2" fill="currentColor" />
      <circle cx="30" cy="25" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="35" cy="25" r="2" fill="currentColor" />
    </svg>
  );
}

export function SeoIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="35" cy="35" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M45 45L55 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M30 30L35 35L40 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M35 25V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="20" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function BlogIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect x="20" y="15" width="40" height="50" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line
        x1="30"
        y1="35"
        x2="50"
        y2="35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <line
        x1="30"
        y1="45"
        x2="45"
        y2="45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <line
        x1="30"
        y1="55"
        x2="40"
        y2="55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M15 20L15 60L25 65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function GoogleAdsIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M25 50L35 30L45 40L55 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25" cy="50" r="3" fill="currentColor" />
      <circle cx="35" cy="30" r="3" fill="currentColor" />
      <circle cx="45" cy="40" r="3" fill="currentColor" />
      <circle cx="55" cy="20" r="3" fill="currentColor" />
      <rect x="50" y="50" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M55 55L60 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 60L65 60" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

export function UiUxIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Artboard */}
      <rect x="16" y="16" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
      {/* Layout guides */}
      <path d="M16 32H64" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M36 16V64" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Content block */}
      <rect x="22" y="38" width="10" height="20" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="42" y="22" width="16" height="6" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="42" y="32" width="12" height="4" rx="1" fill="currentColor" opacity="0.15" />
      {/* Pen tool cursor */}
      <path
        d="M28 18L22 34L26 34L28 40L30 34L34 34L28 18Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Bezier handle dots */}
      <circle cx="56" cy="52" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="48" cy="58" r="2.5" fill="currentColor" opacity="0.5" />
      <path d="M56 52L48 58" stroke="currentColor" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
    </svg>
  );
}

export function MaintenanceIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M40 20C29 20 20 29 20 40C20 51 29 60 40 60C51 60 60 51 60 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M55 25L60 20L65 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M60 20V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M40 32V40L45 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25" cy="40" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="55" cy="40" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="40" cy="25" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="40" cy="55" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function AiIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect x="24" y="24" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="36" r="3" fill="currentColor" />
      <circle cx="46" cy="36" r="3" fill="currentColor" />
      <path d="M32 46C34.5 49 37 50 40 50C43 50 45.5 49 48 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 58V64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 40H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 40H64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MobileAppIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect x="26" y="14" width="28" height="52" rx="6" stroke="currentColor" strokeWidth="2" />
      <rect x="30" y="20" width="20" height="34" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="40" cy="60" r="2" fill="currentColor" />
      <path d="M20 28L24 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 52L24 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 32L56 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 48L56 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SaasIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect x="14" y="20" width="52" height="40" rx="6" stroke="currentColor" strokeWidth="2" />
      <path d="M14 30H66" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="25" r="1.5" fill="currentColor" />
      <circle cx="25" cy="25" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="30" cy="25" r="1.5" fill="currentColor" opacity="0.5" />
      <rect x="22" y="38" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="38" y="38" width="20" height="4" rx="2" fill="currentColor" opacity="0.8" />
      <rect x="38" y="46" width="14" height="4" rx="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function DigitalMarketingIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("w-full h-full", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M18 56H62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="22" y="44" width="8" height="12" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="34" y="38" width="8" height="18" rx="1" fill="currentColor" opacity="0.8" />
      <rect x="46" y="30" width="8" height="26" rx="1" fill="currentColor" />
      <path d="M22 24L34 20L46 24L58 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54 18H58V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
