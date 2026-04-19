"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/dist/SplitText";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { User, Sparkles } from "lucide-react";

function About() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(".about-description", {
      type: "lines,words",
      linesClass: "overflow-hidden",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      rotateX: -45,
      stagger: 0.015,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-description",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo(
      ".about-image-card",
      { opacity: 0, scale: 0.9, x: 50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-image-card",
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <div id="about" className="relative py-24 lg:py-48 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-red-500 mb-2">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <User className="w-5 h-5 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.3em]">
                  Discovery
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Me
                </span>
              </h2>
            </div>

            <div className="relative group p-8 lg:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Sparkles className="w-24 h-24 text-red-500" />
              </div>

              <div className="about-description text-slate-300 text-lg lg:text-xl leading-relaxed text-justify space-y-4 font-medium italic">
                {personalData.description}
              </div>

              {/* Decorative Accent */}
              <div className="absolute  w-1 h-20 bg-gradient-to-b from-red-600 to-transparent left-0 top-10 rounded-full" />
            </div>

            <div className="flex flex-wrap gap-8 items-center mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">1</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Internships
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">5+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Projects
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Technologies learned
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Profile Image with High-End Frame */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Tilt
              perspective={1500}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ef4444"
              scale={1.05}
              className="about-image-card"
            >
              <div className="relative group">
                {/* Decorative Frames */}
                <div className="absolute -inset-4 border border-red-500/20 rounded-3xl group-hover:-inset-6 transition-all duration-500 opacity-50" />
                <div className="absolute -inset-8 border border-red-950/10 rounded-[40px] group-hover:-inset-12 transition-all duration-700 delay-75 opacity-30" />

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(239,68,68,0.15)] bg-[#050505]">
                  <Image
                    src={personalData.profile}
                    fill
                    alt={personalData.name}
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-white font-bold text-center tracking-widest uppercase text-xs">
                      Built with Passion
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
