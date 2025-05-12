import { Navbar } from "./navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;
