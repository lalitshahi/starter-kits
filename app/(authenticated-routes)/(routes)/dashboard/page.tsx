import Sidebar from "@/components/sidebar";
import NavBar from "@/components/top-navbar";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex items-start">
      <Sidebar />
      <NavBar />
    </div>
  );
};

export default Dashboard;
