import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * NOTE:
 * - Replaced any "#ff6b6b" with "currentColor"
 * - Kept your original shapes and viewBox (80x80)
 * - Now the parent can control icon color via Tailwind (text-*)
 */

export function OldDesignIcon({ className, ...props }: IconProps) {
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
      <rect x="15" y="20" width="50" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="20" y="25" width="40" height="3" fill="currentColor" opacity="0.55" />
      <rect x="20" y="32" width="25" height="2" fill="currentColor" opacity="0.35" />
      <rect x="20" y="37" width="30" height="2" fill="currentColor" opacity="0.35" />
      <rect x="20" y="42" width="20" height="2" fill="currentColor" opacity="0.35" />
      <circle cx="55" cy="50" r="2" fill="currentColor" opacity="0.9" />
      <path
        d="M45 50L50 55L60 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function LowTrafficIcon({ className, ...props }: IconProps) {
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
        d="M15 55L25 45L35 50L45 35L55 40L65 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <circle cx="15" cy="55" r="3" fill="currentColor" opacity="0.9" />
      <circle cx="25" cy="45" r="3" fill="currentColor" opacity="0.9" />
      <circle cx="35" cy="50" r="3" fill="currentColor" opacity="0.9" />
      <circle cx="45" cy="35" r="3" fill="currentColor" opacity="0.9" />
      <circle cx="55" cy="40" r="3" fill="currentColor" opacity="0.9" />
      <circle cx="65" cy="25" r="3" fill="currentColor" opacity="0.9" />
      <path d="M65 25L70 30L70 20L60 20L65 25Z" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function HardToMaintainIcon({ className, ...props }: IconProps) {
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
      <path d="M40 15V25M40 55V65M15 40H25M55 40H65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" />
      <path
        d="M32 40L38 46L48 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="55" cy="25" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="25" cy="55" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="55" cy="55" r="3" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
