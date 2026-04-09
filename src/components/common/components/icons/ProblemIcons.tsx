import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

/** Fragmented puzzle pieces — represents disconnected digital efforts */
export function FragmentedStrategyIcon({ className, ...props }: IconProps) {
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
      {/* Top-left puzzle piece */}
      <path
        d="M18 18H34V26C34 26 30 28 30 32C30 36 34 38 34 38V46H18V18Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Top-right puzzle piece (offset/disconnected) */}
      <path
        d="M42 16H58V24C58 24 54 26 54 30C54 34 58 36 58 36V44H42V36C42 36 46 34 46 30C46 26 42 24 42 24V16Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Bottom piece (offset/disconnected) */}
      <path
        d="M22 52H38V60C38 60 34 62 34 66C34 70 38 72 38 72V72H22V52Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.15"
      />
      {/* Disconnection lines */}
      <path
        d="M36 32L40 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        opacity="0.4"
      />
      <path
        d="M30 48L30 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        opacity="0.4"
      />
    </svg>
  );
}

/** Rocket trailing behind — represents falling behind in digital transformation */
export function DigitalLagIcon({ className, ...props }: IconProps) {
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
      {/* Competitor rocket (ahead, faded) */}
      <g opacity="0.3">
        <path
          d="M58 12L64 22L58 20L52 22L58 12Z"
          fill="currentColor"
        />
        <path d="M58 22V30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </g>
      {/* Your rocket (behind, grounded) */}
      <path
        d="M30 35L38 50L30 47L22 50L30 35Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.2"
      />
      {/* Exhaust / struggle */}
      <path
        d="M30 52C28 56 26 58 24 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M30 52C32 56 32 58 30 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Gap arrow showing distance */}
      <path
        d="M42 30L52 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.5"
      />
      <path
        d="M50 15L54 18L49 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

/** Downward chart with yen symbol — represents poor ROI */
export function PoorROIIcon({ className, ...props }: IconProps) {
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
      {/* Chart axes */}
      <path
        d="M18 18V62H65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Downward trend line */}
      <path
        d="M22 28L32 32L42 38L52 48L60 58"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Data points */}
      <circle cx="22" cy="28" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="42" cy="38" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="52" cy="48" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="60" cy="58" r="2.5" fill="currentColor" opacity="0.9" />
      {/* Downward arrow at end */}
      <path
        d="M60 58L64 54"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M60 58L56 54"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Question mark (what to fix?) */}
      <text
        x="50"
        y="28"
        fill="currentColor"
        opacity="0.4"
        fontSize="16"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        ?
      </text>
    </svg>
  );
}
