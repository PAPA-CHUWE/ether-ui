"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import clsx from "clsx";
import { scrollToHash } from "@/lib/scroll-to-hash";

type NavItem = { name: string; href: string };

type Props = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

const MobileMenu = ({ open, onClose, navItems }: Props) => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("#home");

  // ✅ Track hash changes
  useEffect(() => {
    const updateHash = () =>
      setActiveHash(window.location.hash || "#home");

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // ✅ Auto-close when screen is no longer small
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const handleChange = () => media.matches && onClose();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [onClose]);

  const handleHashNav = (hash: string) => {
    onClose();

    requestAnimationFrame(() => {
      if (pathname !== "/") {
        window.location.href = `/${hash}`;
        return;
      }

      scrollToHash(hash, { offset: 88 });

      if (hash === "#home") {
        history.replaceState(null, "", hash);
      } else {
        history.pushState(null, "", hash);
      }

      setActiveHash(hash);
    });
  };

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="top" className="glass px-5 shadow-none w-full h-full">
        <div className="relative p-4">
          <SheetHeader className="flex-row items-center justify-between space-y-0">
            <SheetTitle className="text-base font-semibold">
              EtherUI
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-4 space-y-2">
            {navItems.map((item) => {
              const isHash = item.href.startsWith("#");
              const isActive =
                isHash && activeHash === item.href && pathname === "/";

              const itemClass = clsx(
                "block rounded-2xl border px-4 py-3 text-sm backdrop-blur transition",
                isActive
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card/40 border-border/40 text-foreground/85 hover:bg-foreground/10 hover:text-foreground"
              );

              if (!isHash) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={itemClass}
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
                    handleHashNav(item.href);
                  }}
                  className={itemClass}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <Button
            onClick={() => handleHashNav("#pricing")}
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
