# Rsbuild Test Project

This repository shows a minimal reproduction of the following issue: https://github.com/web-infra-dev/rsbuild/issues/3193.

## How to reproduce

1. Clone the repository.
2. Start Docker Desktop on Windows 11 using the WSL2 backend.
3. Run `docker compose up -d` in the project folder.
4. Open http://localhost:3000 in a browser.
5. Modify `src/App.svelte` and save the changes.

### Expected result
The Docker container log contains a message about compilation and the changes are reflected in the reloaded page in the browser.

### Actual result
The page in the browser gets reloaded but the dev server doesn't compile the changes.
