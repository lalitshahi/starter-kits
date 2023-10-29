import {
  Calendar,
  File,
  FolderOpen,
  LayoutDashboard,
  PieChart,
  Receipt,
  Settings,
  Users2,
} from "lucide-react";
import MenuItem from "./menu-item";
import ThemeBasedImage from "./theme-based-image";

const menuItems = [
  {
    label: "Dashboard",
    Icon: LayoutDashboard,
  },
  {
    label: "Team",
    Icon: Users2,
  },
  {
    label: "Projects",
    Icon: FolderOpen,
  },
  {
    label: "Calendar",
    Icon: Calendar,
  },
  {
    label: "Documents",
    Icon: File,
  },
  {
    label: "Reports",
    Icon: PieChart,
  },
];

const adminMenuItems = [
  {
    label: "Billing",
    Icon: Receipt,
  },
  {
    label: "Settings",
    Icon: Settings,
  },
];
const Sidebar = () => {
  return (
    <div className="bg-accent w-[300px] h-full">
      <ThemeBasedImage
        imageLight={"/starter-kit-light.png"}
        imageDark={"/starter-kit-dark.png"}
        width={160}
        height={80}
        alt={"logo"}
        className="m-5 p-2"
      />

      <div className="flex flex-col space-y-3 mt-16 p-5">
        {menuItems.map((item) => (
          <MenuItem label={item.label} Icon={item.Icon} key={item.label} />
        ))}
      </div>
      <p className="mx-5 p-5 text-xs text-accent-foreground/70 group-hover:text-accent-foreground font-semibold tracking-wide">
        Admin access
      </p>
      <div className="flex flex-col space-y-3 p-5">
        {adminMenuItems.map((item) => (
          <MenuItem label={item.label} Icon={item.Icon} key={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
