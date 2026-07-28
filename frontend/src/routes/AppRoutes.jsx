import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";

import MainLayout from "../layouts/MainLayout";

// Authentication
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Jobs
import Jobs from "../pages/jobs/Jobs";
import CreateJob from "../pages/jobs/CreateJob";
import EditJob from "../pages/jobs/EditJob";
import JobDetails from "../pages/jobs/JobDetails";

// Resume
import Resume from "../pages/resume/Resume";

// AI Analysis
import Analysis from "../pages/analysis/Analysis";

// Profile
import Profile from "../pages/profile/Profile";

function AppRoutes() {

    return (

        <AuthProvider>

            <BrowserRouter>

                <Routes>

                    {/* Public Routes */}

                    <Route
                        path="/"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />

                    {/* Protected Routes */}

                    <Route
                        element={
                            <ProtectedRoute>

                                <MainLayout />

                            </ProtectedRoute>
                        }
                    >

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/jobs"
                            element={<Jobs />}
                        />

                        <Route
                            path="/jobs/create"
                            element={<CreateJob />}
                        />

                        <Route
                            path="/jobs/edit/:id"
                            element={<EditJob />}
                        />

                        <Route
                            path="/jobs/:id"
                            element={<JobDetails />}
                        />

                        <Route
                            path="/resume"
                            element={<Resume />}
                        />

                        <Route
                            path="/analysis"
                            element={<Analysis />}
                        />

                        <Route
                            path="/profile"
                            element={<Profile />}
                        />

                    </Route>

                    {/* 404 */}

                    <Route
                        path="*"
                        element={

                            <div className="min-h-screen flex items-center justify-center">

                                <h1 className="text-5xl font-bold">

                                    404 | Page Not Found

                                </h1>

                            </div>

                        }
                    />

                </Routes>

            </BrowserRouter>

        </AuthProvider>

    );

}

export default AppRoutes;