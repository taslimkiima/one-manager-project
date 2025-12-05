// auth controller (placeholder)

export async function register(req, res) {
  res.status(201).json({ message: "register placeholder" });
}
export async function login(req, res) {
  res.json({ message: "login placeholder" });
}
export async function me(req, res) {
  res.json({ user: req.user });
}
