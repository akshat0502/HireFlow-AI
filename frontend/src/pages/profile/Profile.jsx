import { User, Mail, Shield, Briefcase } from "lucide-react";

import useAuth from "../../hooks/useAuth";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl text-white p-10 shadow-lg
hover:shadow-2xl
transition-all
duration-300-xl"
      >
        <div className="flex items-center gap-6">
          <div className="h-28 w-28 rounded-full bg-white text-blue-600 flex items-center justify-center">
            <User size={55} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">{user?.name || "Candidate"}</h1>

            <p className="text-blue-100 mt-2">Welcome to HireFlow AI</p>
          </div>
        </div>
      </div>

      <div
        className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg p-8 mt-8"
      >
        <h2 className="text-2xl font-bold mb-8">Account Information</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" />

            <div>
              <p className="text-slate-500">Email</p>

              <h3 className="font-semibold">{user?.email}</h3>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Shield className="text-green-600" />

            <div>
              <p className="text-slate-500">Role</p>

              <h3 className="font-semibold">Recruiter</h3>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Briefcase className="text-purple-600" />

            <div>
              <p className="text-slate-500">Status</p>

              <h3 className="font-semibold text-green-600">Active</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
