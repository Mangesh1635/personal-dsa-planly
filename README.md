# Personal Sprint Task Manager

Simple personal tracker built with Node.js, Express, EJS, vanilla HTML/CSS/JS, and MongoDB.

Features: Sprint → Day → Task hierarchy, estimated time, persistent task timer, Not started/In progress/Completed status, daily/sprint progress, favorites, and filters.

## Run
1. Install MongoDB locally or use MongoDB Atlas.
2. `cp .env.example .env` and set `MONGO_URI`.
3. `npm install`
4. `npm run dev`
5. Open `http://localhost:3000`.

`data/plan.js` is seeded only when the database has no tasks.
