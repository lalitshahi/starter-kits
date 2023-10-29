import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  label: string;
  Icon: LucideIcon;
}
const MenuItem = ({ label, Icon }: MenuItemProps) => {
  return (
    <div className="group flex items-center space-x-2 hover:bg-accent-foreground/10 px-4 py-2 rounded-md cursor-pointer">
      <Icon className="h-[1.2rem] w-[1.2rem] text-accent-foreground/70 group-hover:text-accent-foreground" />
      <span className="text-sm text-accent-foreground/70 group-hover:text-accent-foreground font-semibold tracking-wide">
        {label}
      </span>
    </div>
  );
};

export default MenuItem;
