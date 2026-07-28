import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

import JobForm from "../../components/jobs/JobForm";
import { createJob } from "../../services/jobService";

function CreateJob() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const submitJob = async (data) => {

        setLoading(true);

        try {

            await createJob(data);

            toast.success("Job Created Successfully");

            navigate("/jobs");

        }

        catch (error) {

            console.error(error);

            toast.error("Unable to create job");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="max-w-6xl mx-auto">

            {/* Header */}

            <div
                className="
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600
                rounded-3xl
                text-white
                p-8
                shadow-xl
                mb-8"
            >

                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-4xl font-extrabold">

                            Create New Job

                        </h1>

                        <p className="mt-2 text-blue-100">

                            Fill in all required details to publish a new job.

                        </p>

                    </div>

                    <PlusCircle size={60} />

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

                    loading={loading}

                    defaultValues={{

                        title: "",

                        company: "",

                        location: "",

                        salary: "",

                        description: "",

                        skills: "",

                        employmentType: "Full Time",

                        experience: 0

                    }}

                    onSubmit={submitJob}

                />

            </div>

        </div>

    );

}

export default CreateJob;