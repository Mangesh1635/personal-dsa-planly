require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const taskRoutes = require('./routes/tasks');
const { seedIfEmpty } = require('./config/seed');

const app = express();

// ===============================
// View Engine
// ===============================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ===============================
// Middleware
// ===============================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// ===============================
// Database Connection
// ===============================
let dbPromise = null;
let seedPromise = null;

async function ensureDatabase() {
    if (!dbPromise) {
        dbPromise = mongoose.connect(
            process.env.MONGO_URI ||
            'mongodb://127.0.0.1:27017/personal_task_manager'
        );
    }

    await dbPromise;

    if (!seedPromise) {
        seedPromise = seedIfEmpty();
    }

    await seedPromise;
}

// ===============================
// Ensure DB before routes
// ===============================
app.use(async (req, res, next) => {
    try {
        await ensureDatabase();
        next();
    } catch (error) {
        console.error('Database error:', error);

        res.status(500).send(
            'Database connection failed. Check Vercel logs and MONGO_URI.'
        );
    }
});

// ===============================
// Routes
// ===============================
app.use('/', taskRoutes);

// ===============================
// IMPORTANT FOR VERCEL
// ===============================
module.exports = app;

// ===============================
// LOCAL DEVELOPMENT
// ===============================
if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
}