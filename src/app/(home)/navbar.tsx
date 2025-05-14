"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { Menu } from "lucide-react";

const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
});

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavItem = ({ href, children, isActive }: NavItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "rounded-full bg-transparent border-transparent hover:bg-transparent hover:border-primary px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navItems = [
  { href: "/", children: "Home" },
  { href: "/pricing", children: "pricing" },
  { href: "/features", children: "features" },
  { href: "/about", children: "about" },
  { href: "/contact", children: "contact" },
];

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="h-20 w-full bg-white flex justify-between border-b">
      <Link href="/" className="flex items-center gap-2 pl-6">
        <span className={cn(poppins.className, "text-5xl font-semibold")}>
          Home
        </span>
      </Link>

      <NavbarSidebar
        items={navItems}
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="lg:flex hidden items-center gap-4">
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href}>
            {item.children}{" "}
          </NavItem>
        ))}
      </div>

      <div className="lg:flex hidden items-center gap-4 pr-6">
        <Button
          variant="outline"
          className="rounded-sm text-lg px-12 hover:bg-black hover:text-white bg-white text-black transition-colors"
        >
          <Link href="/sign-in">login</Link>
        </Button>
        <Button
          variant="outline"
          className="rounded-full text-lg px-12 bg-black text-white hover:bg-white hover:text-black transition-colors"
        >
          <Link href="/sign-up">start selling</Link>
        </Button>
      </div>

      <div className="lg:hidden flex items-center gap-4 pr-6">
        <Button
          variant="ghost"
          className="size-12 border-none bg-white rounded-full p-2"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu />
        </Button>
      </div>
    </nav>
  );
};
