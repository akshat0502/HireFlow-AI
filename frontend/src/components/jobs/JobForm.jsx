import { useForm } from "react-hook-form";

function JobForm({
  defaultValues,

  onSubmit,

  loading,
}) {
  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg
hover:shadow-2xl
transition-all
duration-300 rounded-3xl p-8 space-y-5"
    >
      <div>
        <label className="font-semibold">Job Title</label>

        <input
          className="
w-full
border
border-slate-300
rounded-xl
p-4
mt-2
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
outline-none
transition"
          {...register("title", {
            required: "Title is required",
          })}
        />

        <p className="text-red-500">{errors.title?.message}</p>
      </div>

      <div>
        <label className="font-semibold">Company</label>

        <input
          className="
w-full
border
border-slate-300
rounded-xl
p-4
mt-2
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
outline-none
transition"
          {...register("company", {
            required: "Company is required",
          })}
        />

        <p className="text-red-500">{errors.company?.message}</p>
      </div>

      <div>
        <label className="font-semibold">Location</label>

        <input
          className="
w-full
border
border-slate-300
rounded-xl
p-4
mt-2
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
outline-none
transition"
          {...register("location", {
            required: "Location is required",
          })}
        />
      </div>

      <div>
        <label className="font-semibold">Salary</label>

        <input
          type="number"
          className="
w-full
border
border-slate-300
rounded-xl
p-4
mt-2
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
outline-none
transition"
          {...register("salary", {
            required: true,

            valueAsNumber: true,
          })}
        />
      </div>

      <div>
        <label className="font-semibold">Skills</label>

        <textarea
          rows="3"
          className="
w-full
border
border-slate-300
rounded-xl
p-4
mt-2
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
outline-none
transition"
          {...register("skills", {
            required: true,
          })}
        />
      </div>

      <div>
        <label className="font-semibold">Description</label>

        <textarea
          rows="5"
          className="
w-full
border
border-slate-300
rounded-xl
p-4
mt-2
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
outline-none
transition"
          {...register("description", {
            required: true,
          })}
        />
      </div>

      <div>
        <label className="font-semibold">Employment Type</label>

        <select
          className="
w-full
border
border-slate-300
rounded-xl
p-4
mt-2
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
outline-none
transition"
          {...register("employmentType")}
        >
          <option>Full Time</option>

          <option>Part Time</option>

          <option>Internship</option>

          <option>Contract</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Experience</label>

        <input
          type="number"
          className="
w-full
border
border-slate-300
rounded-xl
p-4
mt-2
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
outline-none
transition"
          {...register("experience", {
            required: true,

            valueAsNumber: true,
          })}
        />
      </div>

      <button
        disabled={loading}
        className="
                w-full
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                hover:scale-[1.02]
                shadow-lg
                hover:bg-blue-700
                text-white
                py-3
                rounded-xl"
      >
        {loading ? "Creating..." : "Create Job"}
      </button>
    </form>
  );
}

export default JobForm;
