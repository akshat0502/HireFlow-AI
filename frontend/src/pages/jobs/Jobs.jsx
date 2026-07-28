import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, Briefcase } from "lucide-react";

import toast from "react-hot-toast";

import JobCard from "../../components/jobs/JobCard";
import { getAllJobs } from "../../services/jobService";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadJobs = useCallback(async () => {
    try {
      const response = await getAllJobs();

      setJobs(response.data);
    } catch {
      toast.error("Unable to load jobs.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  const filteredJobs = useMemo(() => {
    const keyword = search.toLowerCase();

    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword) ||
        job.skills.toLowerCase().includes(keyword),
    );
  }, [jobs, search]);

  if (loading) {
    return (
      <div className="flex justify-center mt-24">
        <h1 className="text-3xl font-bold">Loading Jobs...</h1>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div>
          <h1 className="text-4xl font-bold">Jobs</h1>

          <p className="text-slate-500 mt-2">
            Manage all available job openings.
          </p>
        </div>

        <Link
          to="/jobs/create"
          className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    rounded-3xl
                    px-6
                    py-3
                    flex
                    items-center
                    gap-2"
        >
          <Plus size={20} />
          Create Job
        </Link>
      </div>

      {/* Search */}

      <div
        className="
                bg-white
                rounded-2xl
                shadow-lg
hover:shadow-2xl
transition-all
duration-300
                p-4
                flex
                items-center
                gap-3"
      >
        <Search className="text-slate-400" />

        <input
          type="text"
          placeholder="Search by title, company, skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
                    w-full
                    outline-none
                    text-lg"
        />
      </div>

      {/* Jobs */}

      {filteredJobs.length === 0 ? (
        <div
          className="
                            bg-white
                            rounded-2xl
                            shadow-lg
hover:shadow-2xl
transition-all
duration-300
                            py-24
                            text-center"
        >
          <Briefcase size={70} className="mx-auto text-slate-400" />

          <h2 className="text-3xl font-bold mt-5">No Jobs Found</h2>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Jobs;
