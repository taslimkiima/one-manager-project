# One Manager — Sistem Manajemen Keanggotaan

Aplikasi web untuk manajemen keanggotaan organisasi/komunitas dengan struktur grup bertingkat (parent-child),
Role-Based Access Control (RBAC), event & kalender, notifikasi otomatis, dashboard statistik, dan activity log.

## Fitur Utama
- Autentikasi & RBAC (Admin / Leader / Member)
- Manajemen grup hierarki (parent–child)
- CRUD anggota & peran per grup
- CRUD event, kalender, dan absensi
- Notifikasi (email / in-app)
- Dashboard ringkasan aktivitas
- Activity log / histori perubahan data
- UI responsif desktop & mobile

## Tech Stack (contoh yang direkomendasikan)
**Backend:** Node.js, Express, PostgreSQL, Prisma, JWT, Nodemailer  
**Frontend:** React + Vite, TailwindCSS, Axios, React Router  
**DevOps:** Docker, Nginx, GitHub Actions

## Cara Menjalankan (Local)
### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Akses: http://localhost:5173

## Menjalankan dengan Docker
```bash
docker-compose up --build
```

## Struktur Repo (ringkas)
Lihat folder `backend/`, `frontend/`, `docs/`, dan `deployment/`.

## Lisensi
MIT License.
