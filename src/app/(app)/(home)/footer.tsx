import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col border-t items-center justify-between font-medium p-6">
      <div className="flex flex-row gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
};
