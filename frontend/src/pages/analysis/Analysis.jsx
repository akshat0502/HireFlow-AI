import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
    Brain,
    CheckCircle2,
    XCircle,
    Lightbulb,
    MessageCircle,
    Trophy,
    Target
} from "lucide-react";

import { getMyResume } from "../../services/resumeService";
import { analyzeResume } from "../../services/aiService";

function Analysis() {

    const [loading, setLoading] = useState(true);

    const [analysis, setAnalysis] = useState(null);

    const loadAnalysis = useCallback(async () => {

        try {

            const resume = await getMyResume();

            const result = await analyzeResume(resume.id);

            setAnalysis(result);

        }

        catch {

            toast.error("Unable to analyze resume.");

        }

        finally {

            setLoading(false);

        }

    }, []);

    useEffect(() => {

        loadAnalysis();

    }, [loadAnalysis]);

    if (loading) {

        return (

            <div className="flex justify-center mt-24">

                <h1 className="text-3xl font-bold">

                    AI is analyzing your resume...

                </h1>

            </div>

        );

    }

    if (!analysis) {

        return (

            <div className="text-center mt-24">

                <h1 className="text-4xl font-bold">

                    No Analysis Found

                </h1>

            </div>

        );

    }

    return (

        <div className="space-y-8">

            {/* Header */}

            <div
                className="
                bg-gradient-to-r
                from-indigo-600
                via-purple-600
                to-pink-600
                rounded-3xl
                text-white
                p-8
                shadow-lg
hover:shadow-2xl
transition-all
duration-300-xl"
            >

                <div className="flex items-center gap-4">

                    <Brain size={45} />

                    <div>

                        <h1 className="text-4xl font-bold">

                            AI Resume Analysis

                        </h1>

                        <p className="text-purple-100 mt-2">

                            Generated using Gemini AI

                        </p>

                    </div>

                </div>

            </div>

            {/* Score Cards */}

            <div className="grid lg:grid-cols-2 gap-6">

                <div className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg p-8 text-center">

                    <Target
                        size={45}
                        className="mx-auto text-blue-600"
                    />

                    <h2 className="text-xl font-semibold mt-4">

                        ATS Score

                    </h2>

                    <p className="text-6xl font-bold text-blue-600 mt-4">

                        {analysis.atsScore}%

                    </p>

                    <div className="w-full bg-slate-200 rounded-full h-3 mt-6">

                        <div

                            className="bg-blue-600 h-3 rounded-full"

                            style={{

                                width: `${analysis.atsScore}%`

                            }}

                        />

                    </div>

                </div>

                <div className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg p-8 text-center">

                    <Trophy
                        size={45}
                        className="mx-auto text-green-600"
                    />

                    <h2 className="text-xl font-semibold mt-4">

                        Job Match

                    </h2>

                    <p className="text-6xl font-bold text-green-600 mt-4">

                        {analysis.jobMatch}%

                    </p>

                    <div className="w-full bg-slate-200 rounded-full h-3 mt-6">

                        <div

                            className="bg-green-600 h-3 rounded-full"

                            style={{

                                width: `${analysis.jobMatch}%`

                            }}

                        />

                    </div>

                </div>

            </div>

            {/* Strengths */}

            <div className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg p-8">

                <h2 className="text-2xl font-bold flex items-center gap-3">

                    <CheckCircle2 className="text-green-600" />

                    Strengths

                </h2>

                <div className="grid md:grid-cols-2 gap-4 mt-6">

                    {

                        analysis.strengths.map((item, index) => (

                            <div

                                key={index}

                                className="
                                bg-green-50
                                border
                                border-green-200
                                rounded-3xl
                                p-4"

                            >

                                {item}

                            </div>

                        ))

                    }

                </div>

            </div>

            {/* Missing Skills */}

            <div className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg p-8">

                <h2 className="text-2xl font-bold flex items-center gap-3">

                    <XCircle className="text-red-500" />

                    Missing Skills

                </h2>

                <div className="flex flex-wrap gap-3 mt-6">

                    {

                        analysis.missingSkills.map((skill, index) => (

                            <span

                                key={index}

                                className="
                                bg-red-100
                                text-red-700
                                px-4
                                py-2
                                rounded-full
                                font-semibold"

                            >

                                {skill}

                            </span>

                        ))

                    }

                </div>

            </div>

            {/* Suggestions */}

            <div className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg p-8">

                <h2 className="text-2xl font-bold flex items-center gap-3">

                    <Lightbulb className="text-yellow-500" />

                    AI Suggestions

                </h2>

                <div className="space-y-4 mt-6">

                    {

                        analysis.suggestions.map((item, index) => (

                            <div

                                key={index}

                                className="
                                bg-yellow-50
                                border-l-4
                                border-yellow-500
                                rounded-3xl
                                p-4"

                            >

                                {item}

                            </div>

                        ))

                    }

                </div>

            </div>

            {/* Interview Questions */}

            <div className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg p-8">

                <h2 className="text-2xl font-bold flex items-center gap-3">

                    <MessageCircle className="text-purple-600" />

                    Interview Questions

                </h2>

                <ol className="space-y-4 mt-6 list-decimal ml-6">

                    {

                        analysis.interviewQuestions.map((item, index) => (

                            <li

                                key={index}

                                className="
                                bg-slate-50
                                rounded-3xl
                                p-4"

                            >

                                {item}

                            </li>

                        ))

                    }

                </ol>

            </div>

            {/* Summary */}

            <div className="bg-white rounded-3xl shadow-lg
hover:shadow-2xl
transition-all
duration-300-lg p-8">

                <h2 className="text-2xl font-bold">

                    AI Summary

                </h2>

                <p className="mt-6 text-slate-700 leading-8">

                    {analysis.summary}

                </p>

            </div>

        </div>

    );

}

export default Analysis;