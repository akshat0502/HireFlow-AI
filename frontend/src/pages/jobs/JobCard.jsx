import {
  Building2,
  MapPin,
  IndianRupee,
  Clock3,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { Link } from "react-router-dom";

function JobCard({ job }) {
  const skills = job.skills ? job.skills.split(",") : [];

  return (
    <div
      className="
            bg-white
            rounded-3xl
            shadow-lg
hover:shadow-2xl
transition-all
duration-300-md
            hover:shadow-lg
hover:shadow-2xl
transition-all
duration-300-2xl
            transition-all
            duration-300
            border
            border-slate-200
            overflow-hidden"
    >
      {/* Header */}

      <div
        className="
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600
                text-white
                p-6"
      >
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">{job.title}</h2>

            <div className="flex items-center gap-2 mt-2">
              <Building2 size={18} />

              {job.company}
            </div>
          </div>

          <div
            className="
                        h-16
                        w-16
                        rounded-2xl
                        bg-white/20
                        flex
                        items-center
                        justify-center
                        text-3xl"
          >
            💼
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin size={18} />

            {job.location}
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <IndianRupee size={18} />₹{job.salary?.toLocaleString()}
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <Clock3 size={18} />
            {job.experience} Years
          </div>

          <div>
            <span
              className="
                            inline-block
                            bg-green-100
                            text-green-700
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            font-semibold"
            >
              {job.employmentType}
            </span>
          </div>
        </div>

        {/* Skills */}

        <div className="mt-6">
          <h3 className="font-semibold mb-3">Skills</h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="
                                    bg-blue-100
                                    text-blue-700
                                    px-3
                                    py-2
                                    rounded-full
                                    text-sm"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}

        <div className="mt-6">
          <h3 className="font-semibold">Description</h3>

          <p className="text-slate-600 mt-2 line-clamp-3">{job.description}</p>
        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-8">
          <Link
            to={`/jobs/${job.id}`}
            className="
                        flex-1
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        rounded-3xl
                        py-3
                        flex
                        justify-center
                        items-center
                        gap-2"
          >
            <Eye size={18} />
            View
          </Link>

          <Link
            to={`/jobs/edit/${job.id}`}
            className="
                        flex-1
                        bg-amber-500
                        hover:bg-amber-600
                        text-white
                        rounded-3xl
                        py-3
                        flex
                        justify-center
                        items-center
                        gap-2"
          >
            <Pencil size={18} />
            Edit
          </Link>

          <button
            className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-5
                        rounded-3xl
                        flex
                        items-center
                        justify-center"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
