import api from "./axios.js";

export const logsApi = {
  list: () => api.get("/logs"),
  get: (id) => api.get(`/logs/${id}`),
  create: (data) => api.post("/logs", data),
  update: (id, data) => api.put(`/logs/${id}`, data),
  remove: (id) => api.delete(`/logs/${id}`),
};
