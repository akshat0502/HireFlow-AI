import { Link } from "react-router-dom";
import { Edit, Trash2, Eye } from "lucide-react";
import { deleteJob } from "../../services/jobService";
import toast from "react-hot-toast";

function JobCard({ job, onDelete }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?",
    );

    if (!confirmDelete) return;

    try {
      await deleteJob(job.id);

      toast.success("Job deleted successfully.");

      onDelete();
    } catch (error) {
      console.error(error);

      toast.error("Unable to delete job.");
    }
  };

  return (
    <div
      className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300 p-6"
    >
      <h2 className="text-2xl font-bold">{job.title}</h2>

      <p className="text-slate-500 mt-2">{job.company}</p>

      <p className="mt-3">{job.location}</p>

      <p>₹ {job.salary}</p>

      <p>{job.experience} Years</p>

      <p className="mt-3">{job.skills}</p>

      <div className="flex gap-3 mt-6">
        <Link
          to={`/jobs/${job.id}`}
          className="bg-green-500 text-white p-2 rounded"
        >
          <Eye size={18} />
        </Link>

        <Link
          to={`/jobs/edit/${job.id}`}
          className="bg-blue-500 text-white p-2 rounded"
        >
          <Edit size={18} />
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default JobCard;
