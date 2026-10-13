# Task API development guide

An Express task-management API backed by an in-memory array. The runnable application is in `backend/`; the root package is not the application entry point.

## Run

```sh
cd backend
npm ci
npm start
```

The default port is 5000; `PORT` overrides it. There is no database or environment-file loader. Tasks and the next-ID counter reset whenever the server restarts.

## HTTP API

| Method | Path | Behavior |
| --- | --- | --- |
| GET | `/` | Service message and endpoint hints |
| GET | `/health` | `{"status":"ok"}` |
| GET | `/tasks` | Current array of tasks |
| POST | `/tasks` | Create from `title`; returns 201, `id`, and `completed: false` |
| PUT | `/tasks/:id` | Update string `title` and/or boolean `completed` |
| DELETE | `/tasks/:id` | Remove task and return a message |

Missing or falsy create titles return 400; unknown task IDs return 404. Creation does not enforce a string type for nonempty titles. There is no authentication.

```sh
curl -i http://localhost:5000/health
curl -i -H 'Content-Type: application/json' -d '{"title":"Learn the API"}' http://localhost:5000/tasks
```

## Architecture, checks, and deployment

`backend/app.js` mounts `routes/taskRoutes.js`; the route handlers and array live in `controllers/taskController.js`. `.github/workflows/main.yml` installs backend dependencies, starts the server, and checks `/health` on pushes to `main`. It is a smoke check, not a CRUD test suite or deployment workflow. The root `npm test` intentionally exits with an error placeholder.

There is no tracked `backend/Dockerfile` in this revision, despite the older README's Docker instructions. Run it on a Node host with working directory `backend`, installation `npm ci`, and startup `npm start`. Durable storage and multi-instance consistency would require an implementation change.

## More documentation

- [Source, command, and configuration reference](REFERENCE.md)
- [Contributing](../CONTRIBUTING.md)
