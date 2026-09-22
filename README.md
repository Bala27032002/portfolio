# Bala Muthu Manikandan M — Portfolio

Component-based React (Vite) portfolio. Live: https://bala27032002.github.io/portfolio/

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup: in the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

## Edit content
All text lives in `src/data/` — `profile.js`, `skills.js`, `experience.js`, `projects.js`.
To show a photo, add `public/profile.jpg` and uncomment the `<img>` in `src/components/Sidebar.jsx`.

# portfolio
