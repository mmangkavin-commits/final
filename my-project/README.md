# BluePhoenix frontend

## Connect to the API

The Vite development server proxies `/api` to `http://localhost:5000` by default. Set `VITE_BACKEND_URL` in `.env` to use a different backend address. For a deployed frontend that calls the API directly, set `VITE_API_URL` to the API base URL (for example, `https://api.example.com/api`).

## Run locally

1. Start the backend in `express-final` with `npm run dev` after configuring its `.env`.
2. Start this frontend with `npm run dev`.

The signup flow registers an account and verifies its email with the backend OTP endpoint. Login stores the returned access token for protected frontend routes.
