"use client";

import React from "react";
import {
  Layers,
  Sparkles,
  LayoutDashboard,
  Palette,
  ShieldCheck,
  Zap,
} from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
  className: string; // div1..div6
  aos: string;
  delay: number;
};

export default function Features() {
  const features: Feature[] = [
    {
      title: "Glass Smart Surfaces",
      desc: "Frosted panels with calm depth and high readability—premium without noise.",
      Icon: Layers,
      className: "div1",
      aos: "fade-up",
      delay: 0,
    },
    {
      title: "Ambient Motion",
      desc: "Subtle micro motion that feels alive—never distracting, always smooth.",
      Icon: Sparkles,
      className: "div2",
      aos: "fade-up",
      delay: 80,
    },
    {
      title: "Focus-First Layout",
      desc: "Typography + spacing that guides attention with effortless flow.",
      Icon: LayoutDashboard,
      className: "div3",
      aos: "fade-up",
      delay: 160,
    },
    {
      title: "Ether Palette DNA",
      desc: "Your signature tones (#E5DFDF + #000066) across every surface and state.",
      Icon: Palette,
      className: "div4",
      aos: "fade-up",
      delay: 240,
    },
    {
      title: "Trust & Accessibility",
      desc: "Reduced-motion friendly, clear focus, consistent contrast—built-in comfort.",
      Icon: ShieldCheck,
      className: "div5",
      aos: "fade-up",
      delay: 320,
    },
    {
      title: "Performance-Lite",
      desc: "AOS + CSS effects only—minimal overhead, maximum polish.",
      Icon: Zap,
      className: "div6",
      aos: "fade-up",
      delay: 400,
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden py-16 sm:py-20"
      aria-label="EtherUI features"
    >
      {/* subtle ambient background (no parallax) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-foreground/10 blur-3xl" />
        <div className="absolute -bottom-32 right-6 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#E5DFDF_1px,transparent_1px)] [background-size:14px_14px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/40 px-3 py-1 text-xs text-foreground/75 backdrop-blur"
            data-aos="fade-up"
            data-aos-duration="650"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/70" />
            EtherUI • Next-gen features
          </div>

          <h2
            className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Lively, calm, and immersive.
          </h2>

          <p
            className="mt-3 text-pretty text-sm leading-relaxed text-foreground/70 sm:text-base"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            A 5×5 art-directed grid (stair layout) using grid-areas + AOS reveal—
            clean, modern, and premium.
          </p>
        </div>

        {/* Mobile: uniform 250px cards (centered). LG+: 5x5 grid-area layout */}
        <div className="mt-10 lg:mt-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:block">
            {/* mobile/tablet */}
            {features.map((f) => (
              <div key={`m-${f.title}`} className="lg:hidden flex justify-center">
                <article
                  className="glass group relative w-[250px] overflow-hidden p-4"
                  data-aos={f.aos}
                  data-aos-delay={String(f.delay)}
                  data-aos-duration="650"
                >
                  <CardContent f={f} />
                </article>
              </div>
            ))}

            {/* lg+ art-directed grid */}
            <div className="parent hidden lg:grid">
              {features.map((f) => (
                <div
                  key={`d-${f.title}`}
                  className={`cell ${f.className}`}
                >
                  <article
                    className="glass group relative w-[250px] overflow-hidden p-4"
                    data-aos={f.aos}
                    data-aos-delay={String(f.delay)}
                    data-aos-duration="650"
                  >
                    <CardContent f={f} />
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* exact grid-areas + centering each card inside its area */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .parent {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 18px;
            min-height: 560px;
          }

          /* each area is a “cell” that centers a 250px card */
          .cell {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .div1 {
            grid-area: 1 / 1 / 3 / 2;
          }
          .div2 {
            grid-area: 2 / 2 / 4 / 4;
          }
          .div3 {
            grid-area: 3 / 4 / 5 / 6;
          }
          .div4 {
            grid-area: 3 / 1 / 6 / 2;
          }
          .div5 {
            grid-area: 5 / 4 / 6 / 6;
          }
          .div6 {
            grid-area: 4 / 2 / 6 / 4;
          }
        }
      `}</style>
    </section>
  );
}

function CardContent({ f }: { f: Feature }) {
  return (
    <>
      {/* shimmer */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[2px] w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(229,223,223,0.55), transparent)",
        }}
      />

      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border/40 bg-card/40 backdrop-blur">
          <f.Icon className="h-5 w-5 text-foreground/80" />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold">{f.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-foreground/70">
            {f.desc}
          </p>
        </div>
      </div>

      {/* inner glow */}
      <div
        className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-85"
        aria-hidden="true"
        style={{ background: "rgba(0,0,102,0.22)" }}
      />
    </>
  );
}
