import api from "./axios.js";

export const groupsApi = {
  list: () => api.get("/groups"),
  get: (id) => api.get(`/groups/${id}`),
  create: (data) => api.post("/groups", data),
  update: (id, data) => api.put(`/groups/${id}`, data),
  remove: (id) => api.delete(`/groups/${id}`),
};
