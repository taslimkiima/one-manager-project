# Deploy Guide (Detail)

1. Siapkan VPS dan install Docker + Docker Compose.
2. Clone repo:
   ```bash
   git clone <repo-url>
   cd one-manager
   ```
3. Copy dan isi env backend:
   ```bash
   cp backend/.env.example backend/.env
   nano backend/.env
   ```
4. Jalankan container:
   ```bash
   docker-compose up --build -d
   ```
5. (Opsional) set domain + SSL via Nginx / certbot.
6. Cek log:
   ```bash
   docker-compose logs -f backend
   ```
