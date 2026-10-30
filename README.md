# Dexter Guibone — AI Video Creator & Editor Portfolio

A responsive, multi-page static portfolio designed for GitHub Pages.

## Pages
- `index.html` — Home
- `about.html` — About and experience
- `portfolio.html` — Five Google Drive work-sample collections
- `services.html` — Services
- `contact.html` — Contact form that prepares an email using the visitor's email app

## Before publishing
1. Open `contact.html` and replace `YOUR_EMAIL@example.com` with your real professional email in both places:
   - The visible email link
   - The email form destination in `assets/js/main.js`
2. Replace the LinkedIn placeholder in `contact.html` with your actual profile URL, or remove that contact item.
3. Confirm that each Google Drive sample folder is shared as **Anyone with the link — Viewer** if you want clients to access it.
4. Update any collection titles to describe the actual contents of each folder.

## Publish with GitHub Pages
1. Create a GitHub repository, for example `dexter-ai-portfolio`.
2. Upload the contents of this folder to the repository root (not the enclosing ZIP folder).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish and open the URL shown in the Pages settings.

This is a static site; no server, database, build process or paid hosting is required.

## Notes
- Navigation uses relative links, so it works on GitHub Pages project sites.
- Google Fonts are loaded from Google Fonts; the site still works with system fonts if that service is unavailable.
- The contact form does not send messages directly or store submissions. It opens the visitor's default email app with a pre-filled message.
