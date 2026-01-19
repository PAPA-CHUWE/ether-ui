// Topbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { MenuSquare } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { scrollToHash } from "@/lib/scroll-to-hash";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <div
          className={clsx(
            "flex h-16 items-center justify-between px-4 rounded-2xl transition-all duration-300 ease-out",
            scrolled
              ? "bg-background/95 backdrop-blur-xl border border-border shadow-lg"
              : "glass"
          )}
        >
         <div>
         <Link href="/" className="text-lg font-semibold text-foreground md:hidden block">
            EtherUI
          </Link>
          <Link href="/" className="text-lg font-semibold text-foreground md:block hidden">
            <Image src={'/logos/etherui.svg'} width={150} height={150} alt="Ether-Ui"/>
          </Link>
         </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isHash = item.href.startsWith("#");

              if (!isHash) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-foreground/80 hover:text-foreground transition"
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
                    scrollToHash(item.href, { offset: 88 });
                    // optional: update URL hash without jump
                    history.pushState(null, "", item.href);
                  }}
                  className="text-sm text-foreground/80 hover:text-foreground transition cursor-pointer"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button className="glass text-foreground hover:bg-foreground/20 bg-secondary hidden md:inline-flex">
              Get Started
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden inline-flex items-center justify-center"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
            >
              <MenuSquare className="h-5 w-5" />
            </Button>
          </div>

          <MobileMenu
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            navItems={navItems}
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
