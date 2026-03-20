"use client";
import React, { useRef, useCallback } from "react";
import Image from "next/image";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "@/app/components/Elements/Container";
import pharmabolt from "@/public/pharmabolt.png";
import icystore from "@/public/icystore.png";
import najecFmcg from "@/public/najec-fmcg.png";
import chris from "@/public/chris-global.png";
import goodhomes from "@/public/good-homes.png";
import graft from "@/public/graft.png";
import rdjestates from "@/public/rdj-estates.png";

const projects = [
  {
    image: graft,
    name: "Graft",
    tags: ["Web Design", "Branding", "SEO"]
  },
  {
    image: rdjestates,
    name: "RDJ Estates",
    tags: ["Web Design", "CRO", "SEO"]
  },
  {
    image: goodhomes,
    name: "Good Homes",
    tags: ["Web Design", "Branding", "CRO"]
  },
  {
    image: chris,
    name: "Chris Global Limited",
    tags: ["Branding", "Web Design", "Social Media"]
  },
  {
    image: najecFmcg,
    name: "Najec FMCG",
    tags: ["Branding", "Web Design", "Social Media"]
  },
  {
    image: pharmabolt,
    name: "Pharmabolt",
    tags: ["E-commerce", "Web Dev", "CRO"]
  },
  {
    image: icystore,
    name: "Icy Store",
    tags: ["E-commerce", "Branding", "CRO"]
  }
];

const Works = () => {
  const swiperRef: any = useRef(null);

  const slidePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const slideNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <section id="works" className="py-28 bg-white">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="section-label mb-4 inline-flex">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Our Portfolio
            </span>
            <h2
              className="font-bold text-text tracking-tight mt-2"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
            >
              Work we're
              <span className="gradient-text-primary"> proud of</span>
            </h2>
          </div>
          <p className="text-muted text-[15px] max-w-xs leading-relaxed md:text-right">
            Real projects, real results. Every build is crafted to perform.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, A11y]}
            pagination={false}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 2.2, spaceBetween: 24 }
            }}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="group relative rounded-2xl overflow-hidden bg-surface aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-white/70 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Always-visible label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-white/90 text-sm font-medium">{project.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-3">
              <button
                onClick={slidePrev}
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-white text-text flex items-center justify-center transition-all"
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={slideNext}
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-white text-text flex items-center justify-center transition-all"
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <a
              href="https://cal.com/lumixus-studio/30min"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              Start your project
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Works;
