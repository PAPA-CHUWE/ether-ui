"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter } from "lucide-react";
import gsap from "gsap";

const Footer = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    // reveal on enter (no heavy ScrollTrigger)
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        const ctx = gsap.context(() => {
          gsap.set("[data-ft]", { opacity: 0, y: 14, filter: "blur(6px)" });

          gsap.to("[data-ft]", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
          });

          // tiny shimmer pass
          gsap.fromTo(
            "[data-shimmer]",
            { xPercent: -30, opacity: 0 },
            { xPercent: 30, opacity: 1, duration: 1.2, ease: "power2.out" }
          );
        }, root);

        io.disconnect();
        return () => ctx.revert();
      },
      { threshold: 0.18 }
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  // hover micro-animations (light)
  const onSocialEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    gsap.to(el, { y: -2, duration: 0.18, ease: "power2.out" });
    gsap.to(el.querySelector("svg"), { rotate: 3, duration: 0.18, ease: "power2.out" });
  };

  const onSocialLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    gsap.to(el, { y: 0, duration: 0.2, ease: "power2.out" });
    gsap.to(el.querySelector("svg"), { rotate: 0, duration: 0.2, ease: "power2.out" });
  };

  return (
    <footer ref={rootRef} className="relative mt-20 overflow-hidden">
      {/* subtle ambient wash */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-28 right-[-80px] h-80 w-80 rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-10">
        {/* Panel (like the 2nd inspiration: top links + bottom newsletter/social) */}
        <div className="glass relative overflow-hidden rounded-3xl border border-border/40">
          {/* shimmer line */}
          <div
            data-shimmer
            className="pointer-events-none absolute left-0 top-0 h-[2px] w-full opacity-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(229,223,223,0.55), transparent)",
            }}
          />

          {/* Top row */}
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-4">
            <div data-ft className="md:col-span-1">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-foreground/70" />
                <span className="text-base font-semibold tracking-wide">EtherUI</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                A next-gen glass UI system for modern products. Clean, immersive, and fast.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-xs text-foreground/60">hello@etherui.dev</span>
                <span className="h-3 w-px bg-border/60" />
                <span className="text-xs text-foreground/60">+263 00 000 0000</span>
              </div>
            </div>

            <div data-ft>
              <h4 className="text-xs font-semibold tracking-[0.22em] text-foreground/80">
                EXPLORE
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li><Link className="hover:text-foreground transition" href="#features">Features</Link></li>
                <li><Link className="hover:text-foreground transition" href="#pricing">Pricing</Link></li>
                <li><Link className="hover:text-foreground transition" href="/about">About</Link></li>
              </ul>
            </div>

            <div data-ft>
              <h4 className="text-xs font-semibold tracking-[0.22em] text-foreground/80">
                KNOW MORE
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li><Link className="hover:text-foreground transition" href="/docs">Docs</Link></li>
                <li><Link className="hover:text-foreground transition" href="/blog">Blog</Link></li>
                <li><Link className="hover:text-foreground transition" href="/changelog">Changelog</Link></li>
              </ul>
            </div>

            <div data-ft>
              <h4 className="text-xs font-semibold tracking-[0.22em] text-foreground/80">
                ABOUT
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                <li><Link className="hover:text-foreground transition" href="/contact">Contact</Link></li>
                <li><Link className="hover:text-foreground transition" href="/privacy">Privacy</Link></li>
                <li><Link className="hover:text-foreground transition" href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-border/50" />

          {/* Bottom row (newsletter left + socials right) */}
          <div className="flex flex-col gap-4 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div data-ft className="w-full md:max-w-xl">
              <div className="text-xs font-semibold tracking-[0.22em] text-foreground/80">
                NEWSLETTER
              </div>
              <div className="mt-3 flex w-full items-center gap-2">
                <Input
                  placeholder="Enter your email"
                  className="h-11 rounded-2xl bg-card/40 backdrop-blur border-border/50"
                />
                <Button className="h-11 rounded-2xl bg-foreground text-background hover:bg-foreground/90">
                  Subscribe
                </Button>
              </div>
              <p className="mt-2 text-xs text-foreground/60">
                No spam. Just product updates and design drops.
              </p>
            </div>

            <div data-ft className="flex items-center justify-between md:justify-end md:gap-4">
              <div className="text-xs font-semibold tracking-[0.22em] text-foreground/80 md:mr-2">
                FOLLOW US
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="#"
                  onMouseEnter={onSocialEnter}
                  onMouseLeave={onSocialLeave}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-border/40 bg-card/40 backdrop-blur transition hover:bg-foreground/10"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-foreground/80" />
                </a>
                <a
                  href="#"
                  onMouseEnter={onSocialEnter}
                  onMouseLeave={onSocialLeave}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-border/40 bg-card/40 backdrop-blur transition hover:bg-foreground/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-foreground/80" />
                </a>
                <a
                  href="#"
                  onMouseEnter={onSocialEnter}
                  onMouseLeave={onSocialLeave}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-border/40 bg-card/40 backdrop-blur transition hover:bg-foreground/10"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-foreground/80" />
                </a>
              </div>
            </div>
          </div>

          {/* bottom micro bar */}
          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <div className="flex flex-col gap-2 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
              <span data-ft>© {new Date().getFullYear()} EtherUI. All rights reserved.</span>
              <span data-ft className="text-foreground/55">
                Crafted with calm motion + glass clarity.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
