import api from "./axios.js";

export const notificationsApi = {
  list: () => api.get("/notifications"),
  get: (id) => api.get(`/notifications/${id}`),
  create: (data) => api.post("/notifications", data),
  update: (id, data) => api.put(`/notifications/${id}`, data),
  remove: (id) => api.delete(`/notifications/${id}`),
};
