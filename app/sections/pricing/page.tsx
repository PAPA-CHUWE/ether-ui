"use client";

import React, { useMemo, useState } from "react";
import { Check, Sparkles, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

type Plan = {
  key: string;
  name: string;
  badge: string;
  Icon: React.ComponentType<{ className?: string }>;
  priceMonthly: number;
  priceAnnual: number; // per month billed annually (displayed)
  description: string;
  features: string[];
  popular?: boolean;
};

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const plans: Plan[] = useMemo(
    () => [
      {
        key: "core",
        name: "Core",
        badge: "Best for solo creators",
        Icon: Sparkles,
        priceMonthly: 19,
        priceAnnual: 15,
        description: "For personal projects and fast iteration.",
        features: ["100MB Cloud storage", "100+ prompt templates", "5 projects", "24/7 support"],
      },
      {
        key: "overdrive",
        name: "Overdrive",
        badge: "Most popular plan",
        Icon: Rocket,
        priceMonthly: 79,
        priceAnnual: 65,
        description: "Power features for serious builders.",
        features: ["All Starter features", "1TB additional storage", "Unlimited projects", "Analytics"],
        popular: true,
      },
      {
        key: "team",
        name: "Team",
        badge: "Exclusively for teams",
        Icon: Users,
        priceMonthly: 39,
        priceAnnual: 32,
        description: "Collaboration + control for teams.",
        features: ["All Overdrive features", "10TB additional storage", "50% off per member", "Real-time collaboration"],
      },
    ],
    []
  );

  const getPrice = (p: Plan) => (billing === "monthly" ? p.priceMonthly : p.priceAnnual);

  return (
    <section id="pricing" className="relative overflow-hidden py-16 sm:py-20" aria-label="Pricing">
      {/* Ambient background (subtle, like the reference UI) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-foreground/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#E5DFDF_1px,transparent_1px)] [background-size:14px_14px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl" data-aos="fade-up">
            Flexible pricing <br className="hidden sm:block" /> for teams of all sizes
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base" data-aos="fade-up" data-aos-delay="80">
            Clean tiers, premium glass styling, and just enough motion to feel alive.
          </p>

          {/* Billing toggle (matches reference pill switch) */}
          <div className="mt-6 flex justify-center" data-aos="fade-up" data-aos-delay="140">
            <div className="glass inline-flex items-center gap-1 p-1">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={[
                  "px-4 py-2 text-xs font-medium rounded-xl transition",
                  billing === "monthly"
                    ? "bg-foreground/15 text-foreground"
                    : "text-foreground/70 hover:text-foreground",
                ].join(" ")}
                aria-pressed={billing === "monthly"}
              >
                MONTHLY
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={[
                  "px-4 py-2 text-xs font-medium rounded-xl transition",
                  billing === "annual"
                    ? "bg-foreground/15 text-foreground"
                    : "text-foreground/70 hover:text-foreground",
                ].join(" ")}
                aria-pressed={billing === "annual"}
              >
                ANNUAL
              </button>
            </div>
          </div>
        </div>

        {/* Cards: “staged” like the reference (center is raised & highlighted) */}
        <div className="mt-12 grid items-end gap-5 lg:grid-cols-3">
          {plans.map((p, idx) => {
            const Icon = p.Icon;
            const price = getPrice(p);

            return (
              <article
                key={p.key}
                className={[
                  "relative",
                  p.popular ? "lg:-translate-y-6" : "lg:translate-y-0",
                ].join(" ")}
                data-aos="fade-up"
                data-aos-delay={String(idx * 90)}
                data-aos-duration="650"
              >
                {/* outer glow */}
                {p.popular && (
                  <div
                    className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-60 blur-2xl"
                    aria-hidden="true"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 20%, rgba(229,223,223,0.25), transparent 55%), radial-gradient(circle at 60% 80%, rgba(0,0,102,0.35), transparent 60%)",
                    }}
                  />
                )}

                <div
                  className={[
                    "glass group relative overflow-hidden rounded-[28px] p-6",
                    "transition-transform duration-300 ease-out motion-reduce:transform-none",
                    "hover:-translate-y-1",
                    p.popular ? "border border-foreground/30" : "border border-border/40",
                  ].join(" ")}
                >
                  {/* top shimmer */}
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-[2px] w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(229,223,223,0.55), transparent)",
                    }}
                  />

                  {/* icon bubble */}
                  <div className="flex items-center justify-center">
                    <div
                      className="grid h-12 w-12 place-items-center rounded-2xl border border-border/40 bg-card/40 backdrop-blur"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6 text-foreground/85" />
                    </div>
                  </div>

                  {/* plan label */}
                  <div className="mt-4 text-center">
                    <div className="text-[11px] tracking-[0.22em] text-foreground/70">{p.name.toUpperCase()}</div>
                    <div
                      className={[
                        "mx-auto mt-2 inline-flex items-center rounded-full px-3 py-1 text-[11px]",
                        p.popular
                          ? "bg-foreground/15 text-foreground"
                          : "bg-card/40 text-foreground/75 border border-border/30",
                      ].join(" ")}
                    >
                      {p.badge}
                    </div>
                  </div>

                  {/* price */}
                  <div className="mt-6 text-center">
                    <div className="flex items-end justify-center gap-2">
                      <span
                        className={[
                          "text-4xl font-semibold tracking-tight",
                          p.popular ? "text-foreground" : "text-foreground",
                        ].join(" ")}
                      >
                        ${price}
                      </span>
                      <span className="pb-1 text-xs text-foreground/70">/ MO</span>
                    </div>
                    <p className="mt-2 text-sm text-foreground/70">{p.description}</p>
                    {billing === "annual" && (
                      <p className="mt-1 text-xs text-foreground/60">Billed annually • save with yearly pricing</p>
                    )}
                  </div>

                  {/* features */}
                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/75">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10">
                          <Check className="h-3.5 w-3.5 text-foreground/80" />
                        </span>
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-7">
                    <Button
                      className={[
                        "w-full rounded-2xl",
                        p.popular
                          ? "bg-foreground text-[white] hover:bg-foreground/90"
                          : "glass text-white hover:bg-foreground/15 ring-1 ring-ring",
                      ].join(" ")}
                    >
                      Get Started
                    </Button>

                    {p.popular && (
                      <p className="mt-3 text-center text-xs text-foreground/60">
                        Limited time offer — upgrade anytime
                      </p>
                    )}
                  </div>

                  {/* inner glow */}
                  <div
                    className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                    aria-hidden="true"
                    style={{ background: "rgba(0,0,102,0.22)" }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
