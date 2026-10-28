# DevOps source reference

Source reviewed: [`09a5ae2a6d28`](https://github.com/noel-ult/DevOps/commit/09a5ae2a6d28eff974e0e6d2ecf8fafa5cac36a5).

This reference records the checked-in source, scripts, configuration names, and route declarations. It is a navigation aid; service availability and successful test execution require separate verification.

## Package commands

Run each command in the directory containing its package manifest. A declared script is not necessarily a passing check; guides call out placeholders and known mismatches.

### backend/package.json

| Script | Shell command |
| --- | --- |
| `start` | `node app.js` |

Manifest: [backend/package.json](../backend/package.json).

### package.json

| Script | Shell command |
| --- | --- |
| `test` | `echo "Error: no test specified" && exit 1` |

Manifest: [package.json](../package.json).

## Configuration names

Names below are declared by source or example files. Example-only entries may be stale; consult the linked reader and project guide before relying on them. Secret values are intentionally omitted.

| Name | Declared/read in |
| --- | --- |
| `PORT` | [backend/app.js](../backend/app.js) |

## HTTP route declarations

Paths are **as declared in each source file**. Router/blueprint mount prefixes from the entry point must be prepended; the project guide describes the active entry point and common prefixes. Alternate entry points (such as SQLite) are listed separately by file. Authentication, request bodies, and response schemas live in the linked handlers/models.

| Source | Method | Declared path | Handler |
| --- | --- | --- | --- |
| [backend/app.js](../backend/app.js) | GET | `/` | `` |
| [backend/app.js](../backend/app.js) | GET | `/health` | `` |
| [backend/routes/taskRoutes.js](../backend/routes/taskRoutes.js) | GET | `/` | `` |
| [backend/routes/taskRoutes.js](../backend/routes/taskRoutes.js) | POST | `/` | `` |
| [backend/routes/taskRoutes.js](../backend/routes/taskRoutes.js) | PUT | `/:id` | `` |
| [backend/routes/taskRoutes.js](../backend/routes/taskRoutes.js) | DELETE | `/:id` | `` |

## File-based pages and handlers

- [backend/node_modules/express/lib/router/route.js](../backend/node_modules/express/lib/router/route.js)
- [node_modules/router/lib/route.js](../node_modules/router/lib/route.js)

## Existing documentation

Historical plans/reports describe their own revision; use current source when they disagree.

- [CONTRIBUTING.md](../CONTRIBUTING.md)
- [README.md](../README.md)
- [docs/PROJECT_GUIDE.md](../docs/PROJECT_GUIDE.md)
- [docs/REFERENCE.md](../docs/REFERENCE.md)

## Source and configuration map

Generated lockfiles, binary assets, compiled output, vendored dependencies, and cached bytecode are omitted. Test files remain listed so coverage can be located.

- [.github/workflows/main.yml](../.github/workflows/main.yml)
- [backend/app.js](../backend/app.js)
- [backend/controllers/taskController.js](../backend/controllers/taskController.js)
- [backend/package.json](../backend/package.json)
- [backend/routes/taskRoutes.js](../backend/routes/taskRoutes.js)
- [package.json](../package.json)
