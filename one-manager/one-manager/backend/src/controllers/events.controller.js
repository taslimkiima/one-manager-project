// events controller (placeholder)

export async function listEvents(req, res) { res.json([]); }
export async function createEvent(req, res) { res.status(201).json({}); }
export async function updateEvent(req, res) { res.json({}); }
export async function deleteEvent(req, res) { res.status(204).send(); }
export async function markAttendance(req, res) { res.json({}); }
