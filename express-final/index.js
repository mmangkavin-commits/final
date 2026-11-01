const express = require('express');
require('dotenv').config();
const app = express();

const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:5173,http://127.0.0.1:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use((req, res, next) => {
    const origin = req.get('origin');

    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Vary', 'Origin');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    }

    if (req.method === 'OPTIONS') {
        return res.sendStatus(origin && !allowedOrigins.includes(origin) ? 403 : 204);
    }

    next();
});

app.use(express.json());
const authRoutes = require('./routes/auth.route');
app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
    res.send({
        status: 'success',
        message: 'api is running'
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})