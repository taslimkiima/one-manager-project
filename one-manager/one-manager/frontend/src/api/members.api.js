import api from "./axios.js";

export const membersApi = {
  list: () => api.get("/members"),
  get: (id) => api.get(`/members/${id}`),
  create: (data) => api.post("/members", data),
  update: (id, data) => api.put(`/members/${id}`, data),
  remove: (id) => api.delete(`/members/${id}`),
};
