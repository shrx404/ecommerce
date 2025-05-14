import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
  children: React.ReactNode;
  href: string;
}

interface Props {
  items: NavbarItem[];
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const NavbarSidebar = ({ items, isOpen, onOpenChange }: Props) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="text-2xl font-bold p-4">
          <div className="flex items-center gap-2">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          <div>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onOpenChange(false)}
                className="px-4 py-4 text-base w-full text-left hover:bg-black hover:text-white transition-colors flex items-center font-medium"
              >
                {item.children}
              </Link>
            ))}
          </div>

          <div className="w-full flex flex-row gap-2 p-4">
            <Link
              href="/sign-in"
              className="px-4 py-2 text-base w-full text-center hover:bg-black hover:text-white transition-colors font-medium"
              onClick={() => onOpenChange(false)}
            >
              login
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-2 text-base w-full text-center hover:bg-black hover:text-white transition-colors font-medium"
              onClick={() => onOpenChange(false)}
            >
              start selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
