import { useCallback, useEffect, useState } from "react";
import {
  Upload,
  FileText,
  Download,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

import toast from "react-hot-toast";

import {
  uploadResume,
  getMyResume,
  downloadResume,
} from "../../services/resumeService";

function Resume() {
  const [resume, setResume] = useState(null);

  const [loading, setLoading] = useState(true);

  const [uploading, setUploading] = useState(false);

  const loadResume = useCallback(async () => {
    try {
      const data = await getMyResume();

      setResume(data);
    } catch {
      setResume(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadResume();
  }, [loadResume]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Only PDF allowed");

      return;
    }

    try {
      setUploading(true);

      await uploadResume(file);

      toast.success("Resume Uploaded Successfully");

      loadResume();
    } catch {
      toast.error("Upload Failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await downloadResume(resume.id);

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.download = resume.fileName;

      link.click();

      window.URL.revokeObjectURL(url);
    } catch {
      toast.error("Download Failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center mt-24">
        <h1 className="text-3xl font-bold">Loading Resume...</h1>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold">Resume Manager</h1>

        <p className="text-slate-500 mt-2">
          Upload and manage your latest resume.
        </p>
      </div>

      {resume ? (
        <div
          className="
                            bg-white
                            rounded-3xl
                            shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg
                            overflow-hidden"
        >
          {/* Top */}

          <div
            className="
                                bg-gradient-to-r
                                from-blue-600
                                via-indigo-600
                                to-purple-600
                                text-white
                                p-8"
          >
            <div className="flex items-center gap-4">
              <FileText size={50} />

              <div>
                <h2 className="text-2xl font-bold">{resume.fileName}</h2>

                <p className="text-blue-100">PDF Resume</p>
              </div>
            </div>
          </div>

          {/* Body */}

          <div className="p-8">
            <div
              className="
                                    bg-green-50
                                    border
                                    border-green-200
                                    rounded-2xl
                                    p-5
                                    flex
                                    items-center
                                    gap-3"
            >
              <CheckCircle2 className="text-green-600" />

              <span className="font-semibold">
                Resume uploaded successfully.
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={handleDownload}
                className="
                                        bg-green-600
                                        hover:bg-green-700
                                        text-white
                                        px-6
                                        py-3
                                        rounded-3xl
                                        flex
                                        items-center
                                        gap-2"
              >
                <Download size={18} />
                Download
              </button>

              <label
                className="
                                        bg-blue-600
                                        hover:bg-blue-700
                                        text-white
                                        px-6
                                        py-3
                                        rounded-3xl
                                        flex
                                        items-center
                                        gap-2
                                        cursor-pointer"
              >
                <RefreshCw size={18} />
                Replace Resume
                <input
                  hidden
                  type="file"
                  accept=".pdf"
                  onChange={handleUpload}
                />
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="
                            bg-white
                            rounded-3xl
                            shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg
                            p-12
                            border-2
                            border-dashed
                            border-blue-300
                            text-center"
        >
          <Upload size={70} className="mx-auto text-blue-600" />

          <h2 className="text-3xl font-bold mt-6">Upload Resume</h2>

          <p className="text-slate-500 mt-3">Upload your latest PDF resume.</p>

          <label
            className="
                                inline-flex
                                mt-8
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-8
                                py-4
                                rounded-3xl
                                cursor-pointer
                                font-semibold"
          >
            {uploading ? "Uploading..." : "Choose PDF"}

            <input hidden type="file" accept=".pdf" onChange={handleUpload} />
          </label>
        </div>
      )}
    </div>
  );
}

export default Resume;
