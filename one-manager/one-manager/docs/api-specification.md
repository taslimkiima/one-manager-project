# API Specification — One Manager (Ringkas)

Base URL: `/api/v1`

## Auth
- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`

## Groups
- `GET /groups`
- `POST /groups`
- `GET /groups/:id`
- `PUT /groups/:id`
- `DELETE /groups/:id`

## Members
- `GET /members`
- `POST /members`
- `PUT /members/:id`
- `DELETE /members/:id`

## Events
- `GET /events`
- `POST /events`
- `PUT /events/:id`
- `DELETE /events/:id`
- `POST /events/:id/attendance`

## Notifications
- `GET /notifications`
- `POST /notifications/send` *(internal)*

## Logs
- `GET /logs`
