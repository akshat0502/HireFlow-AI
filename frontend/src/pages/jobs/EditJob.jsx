import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PencilLine, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

import JobForm from "../../components/jobs/JobForm";

import {
    getJobById,
    updateJob
} from "../../services/jobService";

function EditJob() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [job, setJob] = useState(null);

    const [loading, setLoading] = useState(true);

    const loadJob = useCallback(async () => {

        setLoading(true);

        try {

            const response = await getJobById(id);

            setJob(response.data);

        }

        catch (error) {

            console.error(error);

            toast.error("Unable to load job.");

        }

        finally {

            setLoading(false);

        }

    }, [id]);

    useEffect(() => {

        loadJob();

    }, [loadJob]);

    const submitJob = async (data) => {

        try {

            await updateJob(id, data);

            toast.success("Job Updated Successfully");

            navigate("/jobs");

        }

        catch (error) {

            console.error(error);

            toast.error("Unable to update job.");

        }

    };

    if (loading) {

        return (

            <div className="flex justify-center items-center h-[70vh]">

                <h2 className="text-3xl font-bold">

                    Loading Job...

                </h2>

            </div>

        );

    }

    if (!job) {

        return (

            <div className="flex justify-center items-center h-[70vh]">

                <h2 className="text-3xl font-bold text-red-600">

                    Job Not Found

                </h2>

            </div>

        );

    }

    return (

        <div className="max-w-6xl mx-auto">

            {/* Header */}

            <div
                className="
                bg-gradient-to-r
                from-amber-500
                via-orange-500
                to-red-500
                rounded-3xl
                text-white
                p-8
                shadow-xl
                mb-8"
            >

                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-4xl font-extrabold">

                            Edit Job

                        </h1>

                        <p className="mt-2 text-orange-100">

                            Update the job information and save your changes.

                        </p>

                    </div>

                    <PencilLine size={60} />

                </div>

            </div>

            {/* Back Button */}

            <button

                onClick={() => navigate("/jobs")}

                className="
                mb-6
                flex
                items-center
                gap-2
                text-blue-600
                hover:text-blue-800
                font-semibold"

            >

                <ArrowLeft size={20} />

                Back to Jobs

            </button>

            {/* Form */}

            <div
                className="
                bg-white
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                p-8"
            >

                <JobForm

                    defaultValues={job}

                    loading={loading}

                    onSubmit={submitJob}

                />

            </div>

        </div>

    );

}

export default EditJob;