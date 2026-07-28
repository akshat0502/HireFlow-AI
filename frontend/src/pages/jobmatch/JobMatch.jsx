import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getAllJobs } from "../../services/jobService";
import { getMyResume } from "../../services/resumeService";
import { analyzeJobMatch } from "../../services/jobMatchService";

function JobMatch() {
  const [jobs, setJobs] = useState([]);

  const [selectedJob, setSelectedJob] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const response = await getAllJobs();

      setJobs(response.data);
    } catch {
      toast.error("Unable to load jobs.");
    }
  };

  const handleAnalyze = async () => {
    if (!selectedJob) {
      toast.error("Select a job first.");

      return;
    }

    try {
      setLoading(true);

      const resume = await getMyResume();

      const response = await analyzeJobMatch(resume.id, selectedJob);

      setResult(response);
    } catch {
      toast.error("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Resume vs Job Match</h1>

      <div
        className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300 p-6"
      >
        <select
          className="w-full border rounded-xl p-3"
          value={selectedJob}
          onChange={(e) => setSelectedJob(e.target.value)}
        >
          <option value="">Select Job</option>

          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title} - {job.company}
            </option>
          ))}
        </select>

        <button
          onClick={handleAnalyze}
          className="
                    mt-5
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-6
                    py-3
                    rounded-xl"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {result && (
        <div className="mt-8 space-y-6">
          <div
            className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300 p-6"
          >
            <h2 className="text-2xl font-bold">ATS Score</h2>

            <p className="text-5xl text-blue-600 mt-3">{result.atsScore}%</p>
          </div>

          <div
            className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300 p-6"
          >
            <h2 className="text-2xl font-bold">Match Percentage</h2>

            <p className="text-5xl text-green-600 mt-3">
              {result.matchPercentage}%
            </p>
          </div>

          <div
            className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300 p-6"
          >
            <h2 className="text-2xl font-bold mb-3">Missing Skills</h2>

            <div className="flex flex-wrap gap-3">
              {result.missingSkills.map((skill, index) => (
                <span
                  key={index}
                  className="
                                            bg-red-100
                                            text-red-700
                                            px-3
                                            py-2
                                            rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobMatch;
