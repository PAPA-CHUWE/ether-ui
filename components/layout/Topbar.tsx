"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { MenuSquare } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { scrollToHash } from "@/lib/scroll-to-hash";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Topbar = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Hash tracking */
  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  /* Redirect / to #home on first load */
useEffect(() => {
  if (typeof window === "undefined") return;

  if (pathname === "/" && !window.location.hash) {
    history.replaceState(null, "", "#home");
    setActiveHash("#home");

    // optional: scroll with offset if needed
    scrollToHash("#home", { offset: 88 });
  }
}, [pathname]);


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
          {/* Logo */}
          <div>
            <Link href="/" className="md:hidden block text-lg font-semibold">
              EtherUI
            </Link>
            <Link href="/" className="hidden md:block">
              <Image
                src="/logos/etherui.svg"
                width={100}
                height={40}
                alt="EtherUI"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isHash = item.href.startsWith("#");
              const isActive = isHash
                ? activeHash === item.href
                : pathname === item.href;

              const linkClass = clsx(
                "relative text-sm transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-foreground/70 hover:text-foreground"
              );

              const underlineClass = clsx(
                "absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-foreground transition-transform duration-300",
                isActive ? "scale-x-100" : "scale-x-0"
              );

              if (!isHash) {
                return (
                  <Link key={item.name} href={item.href} className={linkClass}>
                    {item.name}
                    <span className={underlineClass} />
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
                    history.pushState(null, "", item.href);
                    setActiveHash(item.href);
                  }}
                  className={linkClass}
                >
                  {item.name}
                  <span className={underlineClass} />
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button className="hidden md:inline-flex glass">
              Get Started
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
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
