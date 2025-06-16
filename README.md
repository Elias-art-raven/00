# Content Locker Web Application

This project provides a basic skeleton for a Content Locker application with a Next.js frontend and an Express/MongoDB backend.

## Features

- User authentication (register/login)
- File upload and listing
- Dark mode toggle
- Drag and drop uploads

This is intended as a starting point and can be extended with additional features like advanced search, sharing, and previews.

## Project Structure

```
backend/   - Express API server
frontend/  - Next.js application
```

## Getting Started

### Backend

1. Copy `.env.example` to `.env` and adjust the values.
2. Install dependencies and start the server:

```bash
cd backend
npm install
npm start
```

### Frontend

1. Install dependencies and run the development server:

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the API to run on `http://localhost:4000`. Adjust `NEXT_PUBLIC_API_URL` in a `.env.local` file inside `frontend` if needed.

## Deployment

- The frontend can be deployed to Vercel.
- The backend can be deployed to any Node.js hosting service (Heroku, AWS, etc.).
