import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

function Register() {
  const navigate = useNavigate();

  const { registerUser, loading } = useAuth();

  const {
    register,

    handleSubmit,

    watch,

    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    const success = await registerUser(data);

    if (success) {
      toast.success("Account Created Successfully");

      navigate("/");
    } else {
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left */}

      <div
        className="
                hidden
                lg:flex
                flex-col
                justify-center
                items-center
                bg-gradient-to-br
                from-indigo-700
                via-blue-700
                to-cyan-700
                text-white
                p-16"
      >
        <h1 className="text-6xl font-bold">HireFlow AI</h1>

        <p className="text-xl mt-8 text-center max-w-md leading-8">
          Create your account and unlock AI-powered resume analysis, job
          management and smarter hiring.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center justify-center bg-slate-50 p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
                    bg-white
                    w-full
                    max-w-lg
                    rounded-3xl
                    shadow-lg
hover:shadow-2xl
transition-all
duration-300-2xl
                    p-10"
        >
          <h2 className="text-4xl font-bold">Create Account</h2>

          <p className="text-slate-500 mt-2 mb-8">Join HireFlow AI</p>

          {/* Name */}

          <div className="mb-5">
            <label className="font-semibold">Full Name</label>

            <div className="flex items-center border rounded-3xl mt-2 px-4">
              <User className="text-slate-400" />

              <input
                className="w-full p-4 outline-none"
                placeholder="John Doe"
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </div>

            <p className="text-red-500 text-sm mt-2">{errors.name?.message}</p>
          </div>

          {/* Email */}

          <div className="mb-5">
            <label className="font-semibold">Email</label>

            <div className="flex items-center border rounded-3xl mt-2 px-4">
              <Mail className="text-slate-400" />

              <input
                type="email"
                className="w-full p-4 outline-none"
                placeholder="abc@gmail.com"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>

            <p className="text-red-500 text-sm mt-2">{errors.email?.message}</p>
          </div>

          {/* Password */}

          <div className="mb-5">
            <label className="font-semibold">Password</label>

            <div className="flex items-center border rounded-3xl mt-2 px-4">
              <Lock className="text-slate-400" />

              <input
                type="password"
                className="w-full p-4 outline-none"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",

                  minLength: {
                    value: 6,

                    message: "Minimum 6 characters",
                  },
                })}
              />
            </div>

            <p className="text-red-500 text-sm mt-2">
              {errors.password?.message}
            </p>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="font-semibold">Confirm Password</label>

            <div className="flex items-center border rounded-3xl mt-2 px-4">
              <Lock className="text-slate-400" />

              <input
                type="password"
                className="w-full p-4 outline-none"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password",

                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
            </div>

            <p className="text-red-500 text-sm mt-2">
              {errors.confirmPassword?.message}
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
                        gap-2"
          >
            {loading ? (
              "Creating Account..."
            ) : (
              <>
                Register
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <p className="text-center mt-8">
            Already have an account?
            <Link to="/" className="text-blue-600 font-semibold ml-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
