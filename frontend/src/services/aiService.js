import api from "./api";

export const analyzeResume = async (resumeId) => {

    const response = await api.post(
        `/ai/analyze/${resumeId}`
    );

    return response.data;

};