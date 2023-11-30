import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  label: string;
  Icon: LucideIcon;
}
const MenuItem = ({ label, Icon }: MenuItemProps) => {
  return (
    <div className="group flex items-center space-x-2 hover:bg-primary px-4 py-2 rounded-md cursor-pointer">
      <Icon className="h-[1.2rem] w-[1.2rem] text-accent-foreground group-hover:text-primary-foreground" />
      <span className="text-sm text-accent-foreground/70 group-hover:text-primary-foreground font-semibold tracking-wide">
        {label}
      </span>
    </div>
  );
};

export default MenuItem;
