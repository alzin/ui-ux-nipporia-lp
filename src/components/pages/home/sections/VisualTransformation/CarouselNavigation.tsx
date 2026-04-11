interface Props {
  onPrev: () => void;
  onNext: () => void;
  isRTL: boolean;
  activeIndex: number;
  total: number;
}

export default function CarouselNavigation({ onPrev, onNext, isRTL, activeIndex, total }: Props) {
  const prevArrowPath = isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7";
  const nextArrowPath = isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7";

  return (
    <>
      {/* Mobile: inline prev/counter/next bar */}
      <div className={`relative z-10 md:hidden flex items-center justify-center gap-3 px-4 pb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
        <button
          onClick={onPrev}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-lg border border-white/90 text-purple-600 shadow-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={prevArrowPath} />
          </svg>
        </button>

        <div className="text-xs font-medium text-slate-600 px-3 py-1 rounded-full bg-white/75 border border-white/80">
          {activeIndex + 1} / {total}
        </div>

        <button
          onClick={onNext}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-lg border border-white/90 text-purple-600 shadow-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <svg className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={nextArrowPath} />
          </svg>
        </button>
      </div>

      {/* Desktop: floating prev button */}
      <button
        onClick={onPrev}
        className={`hidden md:inline-flex absolute top-[42%] md:top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/65 backdrop-blur-xl border border-white/80 text-purple-600 shadow-xl shadow-purple-900/10 hover:bg-white hover:text-purple-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isRTL ? "right-1 sm:right-2 md:right-3 lg:right-4" : "left-1 sm:left-2 md:left-3 lg:left-4"}`}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={prevArrowPath} />
        </svg>
      </button>

      {/* Desktop: floating next button */}
      <button
        onClick={onNext}
        className={`hidden md:inline-flex absolute top-[42%] md:top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/65 backdrop-blur-xl border border-white/80 text-purple-600 shadow-xl shadow-purple-900/10 hover:bg-white hover:text-purple-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isRTL ? "left-1 sm:left-2 md:left-3 lg:left-4" : "right-1 sm:right-2 md:right-3 lg:right-4"}`}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={nextArrowPath} />
        </svg>
      </button>
    </>
  );
}
