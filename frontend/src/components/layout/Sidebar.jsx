import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Brain,
  User,
  LogOut,
  X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const { logoutUser } = useAuth();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },

    {
      name: "Jobs",
      path: "/jobs",
      icon: <Briefcase size={20} />,
    },

    {
      name: "Resume",
      path: "/resume",
      icon: <FileText size={20} />,
    },

    {
      name: "AI Analysis",
      path: "/analysis",
      icon: <Brain size={20} />,
    },

    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />,
    },
  ];

  const handleLogout = () => {
    logoutUser();

    navigate("/");
  };

  return (
    <aside
      className={`
                fixed
                top-0
                left-0
                z-40
                h-screen
                w-64
                bg-slate-900
                text-white
                transition-transform
                duration-300
                lg:translate-x-0
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
    >
      <div className="flex items-center justify-between px-6 py-6 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">HireFlow</h1>

          <p className="text-slate-400 text-sm">AI Recruitment</p>
        </div>

        <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
          <X />
        </button>
      </div>

      <nav className="mt-8 px-4 flex flex-col gap-2">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `
                                flex
                                items-center
                                gap-3
                                px-4
                                py-3
                                rounded-3xl
                                transition-all
                                duration-200

                                ${
                                  isActive
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }
                                `
            }
          >
            {item.icon}

            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <button
          onClick={handleLogout}
          className="
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-2
                        bg-red-500
                        hover:bg-red-600
                        py-3
                        rounded-3xl
                        transition
                    "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
