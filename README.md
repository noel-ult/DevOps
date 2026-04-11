# DevOps Task API

A production-oriented backend portfolio project that demonstrates how to build, containerize, test, and deploy a Node.js Express API using modern DevOps practices.

## Project Overview

This project is a simple Task Management API built with Express. It is designed to showcase a complete DevOps workflow:

- Backend API development with Node.js and Express
- Docker-based containerization
- CI pipeline with GitHub Actions
- Cloud deployment to Render

The API supports creating, listing, updating, and deleting tasks with in-memory storage.

## Features

- RESTful Task API
- Health check endpoint for monitoring and CI validation
- Environment-based port configuration (`process.env.PORT || 5000`)
- Dockerfile for portable deployments
- Automated CI workflow on push to `main`
- Render-ready deployment setup

## Tech Stack

- Node.js (CommonJS)
- Express.js
- Docker
- GitHub Actions
- Render

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── main.yml
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## Local Setup

### Prerequisites

- Node.js 18+
- npm

### Run Locally

```bash
cd backend
npm install
npm start
```

Server starts on:

- `http://localhost:5000` (default)
- or any custom port via `PORT` environment variable

## API Endpoints

Base URL:

- `http://localhost:5000`

### Health Check

- `GET /health`

### Task Endpoints

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

### Sample Request (Create Task)

```http
POST /tasks
Content-Type: application/json

{
	"title": "Learn DevOps pipeline"
}
```

### Sample Response

```json
{
	"id": 1,
	"title": "Learn DevOps pipeline",
	"completed": false
}
```

## Docker Setup

### Build Image

```bash
cd backend
docker build -t task-api:latest .
```

### Run Container

```bash
docker run --rm -p 5000:5000 task-api:latest
```

## CI/CD Pipeline (GitHub Actions)

Workflow file:

- `.github/workflows/main.yml`

Pipeline runs on every push to `main` and performs:

1. Checkout repository
2. Set up Node.js
3. Install backend dependencies
4. Start server and verify `/health`

## Deployment on Render

Create a new Web Service in Render and use:

- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

Environment variables:

- No custom variables are required for this project
- `PORT` is provided automatically by Render
- Optional: `NODE_ENV=production`

After deployment, use your Render URL to test:

- `/health`
- `/tasks`

## Portfolio Highlights

This project demonstrates practical backend DevOps skills:

- Building an API with clean project structure
- Containerizing services with Docker
- Automating validation with GitHub Actions
- Deploying a backend service to cloud infrastructure

## License

This project is open for learning and portfolio demonstration.