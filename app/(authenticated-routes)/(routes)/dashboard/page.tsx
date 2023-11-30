import { DataTableDemo } from "@/components/data-table";
import Sidebar from "@/components/sidebar";
import NavBar from "@/components/top-navbar";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex items-start">
      <Sidebar />
      <div className="flex flex-col w-full">
        <NavBar />
        <DataTableDemo />
      </div>
    </div>
  );
};

export default Dashboard;
