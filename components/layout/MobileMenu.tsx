"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { scrollToHash } from "@/lib/scroll-to-hash";

type NavItem = { name: string; href: string };

type Props = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

const MobileMenu = ({ open, onClose, navItems }: Props) => {
  // ✅ Auto-close when screen is no longer small
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      if (media.matches) {
        onClose();
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [onClose]);

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="top"
        className="glass px-5 shadow-none w-full h-full"
      >
        <div className="relative p-4">
          <SheetHeader className="flex-row items-center justify-between space-y-0">
            <SheetTitle className="text-base font-semibold">
              EtherUI
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-4 space-y-2">
            {navItems.map((item) => {
              const isHash = item.href.startsWith("#");

              if (!isHash) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-2xl border border-border/40 bg-card/40 px-4 py-3 text-sm text-foreground/85 backdrop-blur transition hover:bg-foreground/10 hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    requestAnimationFrame(() => {
                      scrollToHash(item.href, { offset: 88 });
                      history.pushState(null, "", item.href);
                    });
                  }}
                  className="block rounded-2xl border border-border/40 bg-card/40 px-4 py-3 text-sm text-foreground/85 backdrop-blur transition hover:bg-foreground/10 hover:text-foreground cursor-pointer"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <Button
            onClick={onClose}
            className="mt-4 w-full rounded-2xl bg-foreground text-background hover:bg-foreground/90"
          >
            Get Started
          </Button>

          <div
            className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full blur-3xl opacity-60"
            aria-hidden="true"
            style={{ background: "rgba(0,0,102,0.22)" }}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
