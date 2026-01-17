"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type NavItem = { name: string; href: string };

type Props = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

const MobileMenu = ({ open, onClose, navItems }: Props) => {
  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="top"
        className="mx-4 mt-4 rounded-3xl  glass p-0 shadow-none w-full h-full"
      >
        {/* Glass panel */}
        <div className=" relative p-4">
          {/* Header */}
          <SheetHeader className="flex-row items-center justify-between space-y-0">
            <SheetTitle className="text-base font-semibold">
              EtherUI
            </SheetTitle>

      
          </SheetHeader>

          {/* Navigation */}
          <nav className="mt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block rounded-2xl border border-border/40 bg-card/40 px-4 py-3 text-sm text-foreground/85 backdrop-blur transition hover:bg-foreground/10 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Button
            onClick={onClose}
            className="mt-4 w-full rounded-2xl bg-foreground text-background hover:bg-foreground/90"
          >
            Get Started
          </Button>

          {/* Subtle inner glow */}
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
