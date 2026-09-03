import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <div className="w-64 fixed top-0 left-0 h-screen">
        <Sidebar />
      </div>
      
      <div className="flex-1 ml-64 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;