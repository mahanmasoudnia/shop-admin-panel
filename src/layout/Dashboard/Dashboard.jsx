import React from "react";

import SideBar from "../../components/layout/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import Header from "./../../components/layout/header/Header";
import { ActionProvider } from "../../context/Action";

const Dashboard = () => {
  return (
    <>
    <ActionProvider>

      <div className="flex">
        <SideBar />
        <div className="dashboard h-full max-sm:w-[85%] max-md:w-[92%] w-full ">
          <Header />
          
          <main className="h-full mx-[4rem] max-lg:mx-[1.6rem]">
            <Outlet />
          </main>
        </div>
      </div>
    </ActionProvider>
    </>
  );
};

export default Dashboard;
