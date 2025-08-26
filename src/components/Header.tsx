"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/work-history", label: "History" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-cabinet/80 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 border-b-2 border-screen">
          <Link
            href="/"
            className="font-arcade text-lg text-cyan hover:text-magenta transition-colors"
          >
            Simonlinn.com
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-arcade text-xs uppercase tracking-widest transition-colors hover:text-cyan focus-ring",
                  pathname === href ? "text-cyan" : "text-pixel"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-pixel hover:text-cyan"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-cabinet/95 border-l-2 border-screen w-[250px] crt p-0"
              >
                <SheetHeader className="p-4 border-b-2 border-screen">
                  <SheetTitle className="font-arcade text-lg text-cyan">
                    MENU
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 p-4">
                  {navLinks.map(({ href, label }) => (
                    <SheetClose key={href} asChild>
                      <Link
                        href={href}
                        className={cn(
                          "font-arcade text-base uppercase tracking-wider transition-colors hover:text-cyan focus-ring",
                          pathname === href ? "text-cyan" : "text-pixel"
                        )}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
