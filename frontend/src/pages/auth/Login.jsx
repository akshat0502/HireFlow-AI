import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

function Login() {
  const navigate = useNavigate();

  const { loginUser, loading } = useAuth();

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const success = await loginUser(data);

    if (success) {
      toast.success("Welcome Back!");

      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}

      <div
        className="
                hidden
                lg:flex
                flex-col
                justify-center
                items-center
                bg-gradient-to-br
                from-blue-700
                via-indigo-700
                to-purple-700
                text-white
                p-16"
      >
        <h1 className="text-6xl font-bold">HireFlow AI</h1>

        <p className="text-xl mt-8 text-center max-w-md leading-8">
          AI Powered Resume Screening Platform helping recruiters and candidates
          connect smarter and faster.
        </p>

        <img
          src="https://illustrations.popsy.co/white/artificial-intelligence.svg"
          alt="AI"
          className="w-[420px] mt-14"
        />
      </div>

      {/* Right Side */}

      <div
        className="
                flex
                items-center
                justify-center
                bg-slate-50
                p-8"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
                    bg-white
                    w-full
                    max-w-md
                    rounded-3xl
                    shadow-lg
hover:shadow-2xl
transition-all
duration-300-2xl
                    p-10"
        >
          <h2 className="text-4xl font-bold">Welcome 👋</h2>

          <p className="text-slate-500 mt-3 mb-10">Login to continue</p>

          {/* Email */}

          <div className="mb-6">
            <label className="font-semibold">Email</label>

            <div
              className="
                            mt-2
                            flex
                            items-center
                            border
                            rounded-3xl
                            px-4"
            >
              <Mail className="text-slate-400" />

              <input
                type="email"
                placeholder="Enter email"
                className="
                                w-full
                                p-4
                                outline-none"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>

            <p className="text-red-500 text-sm mt-2">{errors.email?.message}</p>
          </div>

          {/* Password */}

          <div>
            <label className="font-semibold">Password</label>

            <div
              className="
                            mt-2
                            flex
                            items-center
                            border
                            rounded-3xl
                            px-4"
            >
              <Lock className="text-slate-400" />

              <input
                type="password"
                placeholder="Enter password"
                className="
                                w-full
                                p-4
                                outline-none"
                {...register("password", {
                  required: "Password is required",
                })}
              />
            </div>

            <p className="text-red-500 text-sm mt-2">
              {errors.password?.message}
            </p>
          </div>

          <button
            disabled={loading}
            className="
                        mt-8
                        w-full
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        rounded-3xl
                        py-4
                        font-semibold
                        flex
                        justify-center
                        items-center
                        gap-2
                        transition"
          >
            {loading ? (
              "Signing In..."
            ) : (
              <>
                Login
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <p className="text-center mt-8">
            Don't have an account?
            <Link to="/register" className="text-blue-600 font-semibold ml-2">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
