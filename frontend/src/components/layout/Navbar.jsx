import { Menu, Bell, Search, User, LogOut } from "lucide-react";

import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

function Navbar({ setSidebarOpen }) {
  const navigate = useNavigate();

  const { logoutUser, user } = useAuth();

  const handleLogout = () => {
    logoutUser();

    navigate("/");
  };

  return (
    <header
      className="
            sticky
            top-0
            z-20
            bg-white/80
            backdrop-blur-lg
            border-b
            border-slate-200
            px-6
            lg:px-8
            h-20
            flex
            items-center
            justify-between"
    >
      {/* Left */}

      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="
                    lg:hidden
                    p-2
                    rounded-xl
                    hover:bg-slate-100"
        >
          <Menu size={24} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

          <p className="text-sm text-slate-500">Welcome back 👋</p>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">
        {/* Search */}

        <div
          className="
                    hidden
                    md:flex
                    items-center
                    gap-3
                    bg-slate-100
                    rounded-3xl
                    px-4
                    py-2"
        >
          <Search size={18} className="text-slate-500" />

          <input
            placeholder="Search..."
            className="
                        bg-transparent
                        outline-none
                        w-48"
          />
        </div>

        {/* Notification */}

        <button
          className="
                    relative
                    p-2
                    rounded-3xl
                    hover:bg-slate-100"
        >
          <Bell size={22} />

          <span
            className="
                        absolute
                        -top-1
                        -right-1
                        h-3
                        w-3
                        bg-red-500
                        rounded-full"
          />
        </button>

        {/* User */}

        <div
          className="
                    flex
                    items-center
                    gap-3
                    bg-slate-100
                    rounded-3xl
                    px-4
                    py-2"
        >
          <div
            className="
                        h-10
                        w-10
                        rounded-full
                        bg-blue-600
                        text-white
                        flex
                        items-center
                        justify-center"
          >
            <User size={18} />
          </div>

          <div className="hidden md:block">
            <p className="font-semibold text-slate-800">
              {user?.email || "User"}
            </p>

            <p className="text-xs text-slate-500">Recruiter</p>
          </div>
        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
                    hidden
                    lg:flex
                    items-center
                    gap-2
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-4
                    py-2
                    rounded-3xl
                    transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;
