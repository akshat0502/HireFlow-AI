import { Link } from "react-router-dom";

import {
  Briefcase,
  FileText,
  Brain,
  User,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Upload,
  Plus,
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Jobs",
      value: "24",
      icon: <Briefcase size={28} />,
      color: "from-blue-500 to-blue-700",
      link: "/jobs",
    },

    {
      title: "Resume",
      value: "Uploaded",
      icon: <FileText size={28} />,
      color: "from-green-500 to-green-700",
      link: "/resume",
    },

    {
      title: "AI Score",
      value: "92%",
      icon: <Brain size={28} />,
      color: "from-purple-500 to-purple-700",
      link: "/analysis",
    },

    {
      title: "Profile",
      value: "Candidate",
      icon: <User size={28} />,
      color: "from-orange-500 to-orange-700",
      link: "/profile",
    },
  ];

  const quickActions = [
    {
      title: "Create Job",
      icon: <Plus size={22} />,
      link: "/jobs/create",
      color: "bg-blue-600",
    },

    {
      title: "Upload Resume",
      icon: <Upload size={22} />,
      link: "/resume",
      color: "bg-green-600",
    },

    {
      title: "AI Analysis",
      icon: <Sparkles size={22} />,
      link: "/analysis",
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}

      <div
        className="
                rounded-3xl
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600
                text-white
                p-10
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300-xl"
      >
        <h1 className="text-4xl font-bold">Welcome to HireFlow AI 👋</h1>

        <p className="mt-3 text-blue-100 text-lg">
          AI-powered recruitment platform to manage jobs, resumes and
          intelligent resume analysis.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Link
            key={item.title}
            to={item.link}
            className="
                            bg-white
                            rounded-2xl
                            shadow-lg
hover:shadow-2xl
transition-all
duration-300-md
                            hover:shadow-lg
hover:shadow-2xl
transition-all
duration-300-xl
                            transition
                            p-6"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-slate-500">{item.title}</p>

                <h2 className="text-3xl font-bold mt-3">{item.value}</h2>
              </div>

              <div
                className={`
                                    h-14
                                    w-14
                                    rounded-2xl
                                    flex
                                    items-center
                                    justify-center
                                    bg-gradient-to-r
                                    ${item.color}
                                    text-white
                                    `}
              >
                {item.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Main Grid */}

      <div className="grid xl:grid-cols-3 gap-8">
        {/* Recent Activity */}

        <div
          className="xl:col-span-2 bg-white rounded-2xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-md p-8"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recent Activity</h2>

            <TrendingUp className="text-blue-600" />
          </div>

          <div className="mt-8 space-y-5">
            <div className="flex justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold">Resume Uploaded</h3>

                <p className="text-slate-500">Resume.pdf</p>
              </div>

              <span className="text-green-600 font-semibold">Success</span>
            </div>

            <div className="flex justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold">AI Analysis</h3>

                <p className="text-slate-500">Resume analyzed successfully</p>
              </div>

              <span className="text-blue-600 font-semibold">Completed</span>
            </div>

            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">Jobs Posted</h3>

                <p className="text-slate-500">Java Developer</p>
              </div>

              <span className="text-purple-600 font-semibold">Active</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}

        <div
          className="bg-white rounded-2xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-md p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>

          <div className="space-y-4">
            {quickActions.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className={`
                                    ${item.color}
                                    flex
                                    items-center
                                    justify-between
                                    text-white
                                    rounded-3xl
                                    p-4
                                    hover:scale-[1.02]
                                    transition
                                    `}
              >
                <div className="flex items-center gap-3">
                  {item.icon}

                  <span className="font-semibold">{item.title}</span>
                </div>

                <ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
