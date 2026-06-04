"use client";
import React, { useRef, useCallback, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

type Props = {
  images: string[];
  name: string;
  /**
   * compact — inside the slide-in panel (smaller aspect, tighter controls)
   * default — full detail page width
   */
  compact?: boolean;
  /**
   * contain — for brand assets, logos, social templates (no cropping)
   * cover  — for website screenshots (default)
   */
  fit?: "cover" | "contain";
};

const GalleryCarousel = ({
  images,
  name,
  compact = false,
  fit = "cover",
}: Props) => {
  const swiperRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  const prev = useCallback(() => swiperRef.current?.swiper.slidePrev(), []);
  const next = useCallback(() => swiperRef.current?.swiper.slideNext(), []);

  if (!images.length) return null;

  const multi = images.length > 1;

  // Brand assets need white canvas + padding so logos aren't clipped
  const isContain = fit === "contain";
  const slideAspect = compact ? "aspect-[4/3]" : "aspect-[16/9]";
  const imgClass = isContain
    ? "object-contain p-6 bg-white"
    : "object-cover object-top";

  return (
    <div className="w-full">
      {/* ── Slide area ─────────────────────────────────────────── */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-white">
        <Swiper
          ref={swiperRef}
          modules={[A11y]}
          loop={multi}
          slidesPerView={1}
          onSlideChange={(s) => setActive(s.realIndex)}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className={`relative w-full ${slideAspect} bg-white`}>
                <Image
                  src={src}
                  alt={`${name} - ${i + 1}`}
                  fill
                  sizes={
                    compact
                      ? "560px"
                      : "(max-width: 1300px) 91vw, 1300px"
                  }
                  className={`transition-opacity duration-300 ${imgClass}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Floating nav arrows */}
        {multi && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-text hover:border-primary/40 hover:text-primary transition-all"
              aria-label="Previous image"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-text hover:border-primary/40 hover:text-primary transition-all"
              aria-label="Next image"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter */}
            <span className="absolute bottom-3 right-3 z-10 bg-dark/55 backdrop-blur-sm text-white/80 text-[10px] font-semibold px-2.5 py-1 rounded-full tabular-nums">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* ── Dot indicators ─────────────────────────────────────── */}
      {multi && (
        <div className="flex justify-center items-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.swiper.slideToLoop(i)}
              aria-label={`Image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === active ? "w-5 bg-primary" : "w-1.5 bg-border hover:bg-muted/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* ── Thumbnail strip (4+ images) ────────────────────────── */}
      {images.length >= 4 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-none">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.swiper.slideToLoop(i)}
              className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === active
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
              aria-label={`Jump to image ${i + 1}`}
            >
              <div className="relative w-full h-full bg-surface">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="56px"
                  className={isContain ? "object-contain p-1" : "object-cover object-top"}
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryCarousel;
