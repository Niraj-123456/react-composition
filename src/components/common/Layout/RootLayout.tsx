import Header from "@/components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

type RootLayout = {
  children: React.ReactNode;
};
const RootLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="min-h-[calc(100vh-var(--default-header-height))] p-2 grid place-items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
