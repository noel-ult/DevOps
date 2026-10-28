# DevOps: verification and operations

Reviewed against [default-branch commit 09a5ae2a6d28](https://github.com/noel-ult/DevOps/commit/09a5ae2a6d28eff974e0e6d2ecf8fafa5cac36a5) on 2026-10-28. Start with the [developer guide](PROJECT_GUIDE.md) for installation and architecture, and the [source reference](REFERENCE.md) for exact scripts, configuration readers, routes, and source locations.

## Task CRUD

Check /health, create a task, update title/completed, list it, delete it, and verify an unknown ID returns 404. Restart to confirm the intentionally in-memory data resets.

These are acceptance scenarios for a maintainer to run in the documented environment. Their inclusion is not a claim that live integrations or production credentials were tested during this documentation update.

## Deployment and failure diagnosis

Run from backend/. The tracked workflow smoke-checks health; it does not deploy the service or establish full CRUD coverage.

## Maintaining the contract

When behavior changes, update the guide and examples in the same PR. Check the entry point and working directory before copying commands. Use the linked source readers to distinguish build-time configuration from process environment. For failures, capture the first application error, runtime version, selected mode, and redacted configuration names before later proxy or port errors.

Keep changes tied to evidence: a declared command is not proof it passes, a process health response is not a successful end-to-end workflow, and a historical report describes its own revision. Record actual check results and any unavailable external services in the PR.
