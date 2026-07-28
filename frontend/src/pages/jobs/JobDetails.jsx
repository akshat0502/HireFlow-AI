import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    Building2,
    MapPin,
    IndianRupee,
    Briefcase,
    ArrowLeft,
    Pencil,
    Clock3,
    BadgeCheck
} from "lucide-react";
import toast from "react-hot-toast";

import { getJobById } from "../../services/jobService";

function JobDetails() {

    const { id } = useParams();

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

    if (loading) {

        return (

            <div className="flex justify-center items-center h-[70vh]">

                <h1 className="text-3xl font-bold">

                    Loading Job...

                </h1>

            </div>

        );

    }

    if (!job) {

        return (

            <div className="flex justify-center items-center h-[70vh]">

                <h1 className="text-3xl font-bold text-red-600">

                    Job Not Found

                </h1>

            </div>

        );

    }

    return (

        <div className="max-w-6xl mx-auto">

            {/* Back Button */}

            <Link

                to="/jobs"

                className="
                inline-flex
                items-center
                gap-2
                text-blue-600
                hover:text-blue-800
                font-semibold
                mb-6"

            >

                <ArrowLeft size={20} />

                Back to Jobs

            </Link>

            {/* Hero */}

            <div

                className="
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600
                rounded-3xl
                text-white
                shadow-xl
                p-10
                mb-8"

            >

                <div className="flex justify-between items-start">

                    <div>

                        <h1 className="text-5xl font-extrabold">

                            {job.title}

                        </h1>

                        <div className="flex items-center gap-2 mt-4">

                            <Building2 size={22} />

                            <span className="text-xl">

                                {job.company}

                            </span>

                        </div>

                    </div>

                    <Link

                        to={`/jobs/edit/${job.id}`}

                        className="
                        bg-white
                        text-blue-600
                        px-6
                        py-3
                        rounded-xl
                        font-semibold
                        flex
                        items-center
                        gap-2
                        hover:bg-slate-100
                        transition"

                    >

                        <Pencil size={18} />

                        Edit Job

                    </Link>

                </div>

            </div>

            {/* Information Cards */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">

                    <MapPin className="text-red-500 mb-4" size={28} />

                    <p className="text-slate-500">

                        Location

                    </p>

                    <h3 className="font-bold text-lg mt-2">

                        {job.location}

                    </h3>

                </div>

                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">

                    <IndianRupee className="text-green-600 mb-4" size={28} />

                    <p className="text-slate-500">

                        Salary

                    </p>

                    <h3 className="font-bold text-lg mt-2">

                        ₹ {Number(job.salary).toLocaleString("en-IN")}

                    </h3>

                </div>

                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">

                    <Clock3 className="text-purple-600 mb-4" size={28} />

                    <p className="text-slate-500">

                        Experience

                    </p>

                    <h3 className="font-bold text-lg mt-2">

                        {job.experience} Years

                    </h3>

                </div>

                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">

                    <Briefcase className="text-blue-600 mb-4" size={28} />

                    <p className="text-slate-500">

                        Employment

                    </p>

                    <h3 className="font-bold text-lg mt-2">

                        {job.employmentType}

                    </h3>

                </div>

            </div>
                        {/* Description */}

            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 mb-8">

                <h2 className="text-2xl font-extrabold tracking-tight mb-6">

                    Job Description

                </h2>

                <p className="text-slate-700 leading-8">

                    {job.description}

                </p>

            </div>

            {/* Skills */}

            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 mb-8">

                <h2 className="text-2xl font-extrabold tracking-tight mb-6">

                    Required Skills

                </h2>

                <div className="flex flex-wrap gap-3">

                    {(job.skills ?? "")
                        .split(",")
                        .filter(skill => skill.trim() !== "")
                        .map((skill, index) => (

                            <span

                                key={index}

                                className="
                                bg-blue-100
                                text-blue-700
                                px-4
                                py-2
                                rounded-full
                                font-medium"

                            >

                                {skill.trim()}

                            </span>

                        ))}

                </div>

            </div>

            {/* Recruiter & Status */}

            <div className="grid lg:grid-cols-2 gap-8">

                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">

                    <h2 className="text-2xl font-extrabold tracking-tight mb-6">

                        Recruiter

                    </h2>

                    <div className="flex items-center gap-4">

                        <div
                            className="
                            h-16
                            w-16
                            rounded-full
                            bg-blue-600
                            text-white
                            flex
                            items-center
                            justify-center
                            text-2xl
                            font-bold"
                        >

                            {job.recruiterName
                                ? job.recruiterName.charAt(0).toUpperCase()
                                : "R"}

                        </div>

                        <div>

                            <h3 className="text-xl font-bold">

                                {job.recruiterName || "Recruiter"}

                            </h3>

                            <p className="text-slate-500">

                                Hiring Manager

                            </p>

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">

                    <h2 className="text-2xl font-extrabold tracking-tight mb-6">

                        Job Status

                    </h2>

                    <span
                        className="
                        inline-flex
                        items-center
                        gap-2
                        bg-emerald-100
                        text-emerald-700
                        px-5
                        py-3
                        rounded-full
                        font-semibold"
                    >

                        <BadgeCheck size={18} />

                        {job.status || "Open"}

                    </span>

                </div>

            </div>

        </div>

    );

}

export default JobDetails;