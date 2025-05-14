import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

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
        <ScrollArea>
          <SheetTitle className="text-2xl font-bold p-4">Menu</SheetTitle>
          {items.map((item) => (
            <SheetTitle key={item.href} className="px-4 py-2 text-lg">
              {item.children}
            </SheetTitle>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
