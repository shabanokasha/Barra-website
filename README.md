# Barra Website

The static brand website for **Barra (برّه)**: who we are, what we do, how ordering works, where the clothes come from, FAQ and contact.

Plain HTML + CSS + a few lines of JavaScript. No build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Edit links

Store URL, WhatsApp number and social links are set in one place at the top of `assets/main.js`.

## Deploy

Every push to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.
