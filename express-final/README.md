# Express API

## Setup

1. Copy `.env.example` to `.env` and set the database, JWT, and email values for your environment.
2. Install dependencies with `npm install`.
3. Start the API with `npm run dev` (or `npm start`).

The API listens on port `5000` by default. The frontend Vite development server proxies `/api` requests to it. Set `FRONTEND_URL` to the frontend origin for direct cross-origin requests; multiple origins can be comma-separated.

Authentication routes are mounted at `/api/auth`. `GET /health` checks that the API process is running.
