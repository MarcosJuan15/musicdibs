"use client";
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function DashboardLayout() {
    const [activeSection, setActiveSection] = useState("resumen");

    return (
        <div className="min-h-screen bg-gray-50/50">
            <DashboardHeader />
            <div className="flex">
                <Sidebar 
                    activeSection={activeSection} 
                    setActiveSection={setActiveSection} 
                />
                <MainContent activeSection={activeSection} />
            </div>
        </div>
    );
}