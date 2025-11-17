# Travel Management Frontend (Demo)

This is a minimal React (Vite) frontend template prepared for automated CI/CD using GitHub Actions.

What is included:
- A small React app (`src/`) with a demo UI.
- `Dockerfile` to build and serve the production build via nginx.
- GitHub Actions workflow `.github/workflows/deploy.yml` to build and publish `dist/` to GitHub Pages on every push to `main`.

How to use:
1. Extract the ZIP into a new repository.
2. (Optional) Update `vite.config.js` `base` to match the repo name or site root.
3. Commit and push to `main`.
4. GitHub Actions will run on push and publish the `dist` folder to GitHub Pages (gh-pages branch) automatically.

Notes:
- If you prefer Docker image publishing instead of GitHub Pages, replace the GitHub Actions step with a workflow that builds the image and pushes to Docker Hub or a container registry.
- This template is intentionally minimal for assessment use — replace with your full frontend code as needed."# TRAVEL-MANAGEMENT" 
