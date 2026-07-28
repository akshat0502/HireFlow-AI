import api from "../api/api";

export const getAllJobs = () => {
    return api.get("/api/jobs");
};

export const getJobById = (id) => {
    return api.get(`/api/jobs/${id}`);
};

export const createJob = (job) => {
    return api.post("/api/jobs", job);
};

export const updateJob = (id, job) => {
    return api.put(`/api/jobs/${id}`, job);
};

export const deleteJob = (id) => {
    return api.delete(`/api/jobs/${id}`);
};