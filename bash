npm install
npm run build
npm install gh-pages --save-dev
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
npm run deploy
