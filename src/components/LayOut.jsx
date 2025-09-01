import React from "react";
import SideBar from "./ProjectSidebar";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto bg-white">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayOut;
