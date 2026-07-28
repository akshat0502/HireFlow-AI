import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function MainLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="min-h-screen bg-slate-50">

            {/* Mobile Sidebar Overlay */}

            {sidebarOpen && (

                <div

                    className="
                    fixed
                    inset-0
                    bg-black/40
                    z-30
                    lg:hidden"

                    onClick={() => setSidebarOpen(false)}

                />

            )}

            <div className="flex">

                <Sidebar

                    sidebarOpen={sidebarOpen}

                    setSidebarOpen={setSidebarOpen}

                />

                <div

                    className="
                    flex-1
                    min-h-screen
                    lg:ml-64"

                >

                    <Navbar

                        setSidebarOpen={setSidebarOpen}

                    />

                    <main

                        className="
                        p-6
                        lg:p-8
                        max-w-7xl
                        mx-auto"

                    >

                        <Outlet />

                    </main>

                </div>

            </div>

        </div>

    );

}

export default MainLayout;