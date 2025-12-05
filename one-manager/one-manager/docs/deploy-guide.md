# Deployment Guide (Singkat)

## Prasyarat
- Docker & Docker Compose
- Domain (opsional)
- VPS / cloud instance

## Langkah Deployment
1. Clone repo pada server.
2. Isi `.env` backend sesuai environment server.
3. Jalankan:
   ```bash
   docker-compose up --build -d
   ```
4. Konfigurasi reverse proxy (Nginx) jika memakai domain.
5. Pastikan backup database harian aktif.

## Healthcheck
- Backend: `GET /api/v1/health`
- Frontend: akses domain/root.
