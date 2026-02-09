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
      <rect x="20" y="25" width="25" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="50" y="25" width="10" height="10" rx="2" fill="currentColor" />
      <rect x="50" y="40" width="10" height="15" rx="2" fill="currentColor" opacity="0.7" />
      <circle cx="32.5" cy="40" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M15 60L65 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="15" r="3" fill="currentColor" opacity="0.6" />
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
