import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import React from "react";
import Grid from "@/components/Grid";
import { navItems } from "../../data";
import RecentProject from "@/components/RecentProject";
import Client from "@/components/Client";
import Experience from "@/components/Experience";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Client />
        <Experience />
      </div>
    </main>
  );
};

export default page;
