# DevOps Task API

An Express task-management API with in-memory storage and a GitHub Actions health-check workflow. Run the application from `backend/`.

```sh
cd backend
npm ci
npm start
```

The default URL is http://localhost:5000. `PORT` overrides the port. Tasks disappear when the process restarts.

- [Developer guide: setup, API, checks, and deployment](docs/PROJECT_GUIDE.md)
- [Source and command reference](docs/REFERENCE.md)
- [Contributing](CONTRIBUTING.md)

The current branch contains no Dockerfile. The workflow verifies `/health`; it does not deploy the application. The root test script is a placeholder.

This project is intended for learning and portfolio demonstration.

<!-- developer-handbook-20261028 -->
[Developer guide](docs/PROJECT_GUIDE.md) · [Source reference](docs/REFERENCE.md) · [Verification and operations](docs/OPERATIONS.md)
<!-- /developer-handbook-20261028 -->
