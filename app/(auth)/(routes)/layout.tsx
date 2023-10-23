import { ModeToggle } from "@/components/mode-toggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="fixed top-5 right-5">
        <ModeToggle />
      </div>
      {children}
    </div>
  );
};
export default Layout;
