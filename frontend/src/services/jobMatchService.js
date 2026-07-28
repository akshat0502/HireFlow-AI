import api from "./api";

export const analyzeJobMatch = async (resumeId, jobId) => {

    const response = await api.post(
        `/ai/job-match/${resumeId}/${jobId}`
    );

    return response.data;

};