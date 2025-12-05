import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import groupsRoutes from "./routes/groups.routes.js";
import membersRoutes from "./routes/members.routes.js";
import eventsRoutes from "./routes/events.routes.js";
import notificationsRoutes from "./routes/notifications.routes.js";
import logsRoutes from "./routes/logs.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/v1/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/groups", groupsRoutes);
app.use("/api/v1/members", membersRoutes);
app.use("/api/v1/events", eventsRoutes);
app.use("/api/v1/notifications", notificationsRoutes);
app.use("/api/v1/logs", logsRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});

export default app;
