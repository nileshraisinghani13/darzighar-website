# DarziGhar - Starter Website

This is a starter Next.js + Tailwind project scaffold for *DarziGhar* (Brand: "Custom Fits. Delivered to Your Doorstep.").

## Quick start (local)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## To publish (GitHub + Vercel)
1. Create a GitHub repo (via web UI or `gh repo create <name>`).
2. Push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - DarziGhar starter site"
   git branch -M main
   git remote add origin git@github.com:<your-username>/darzighar-website.git
   git push -u origin main
   ```
3. On Vercel (vercel.com) -> Import Project from GitHub -> Select the repo -> Deploy (framework detected: Next.js).
4. Add your custom domain (`darzighar.com`) in Vercel's dashboard and follow the DNS instructions (GoDaddy).

## Notes
- This scaffold is intentionally minimal and focused on brand consistency.
- Update logo in `/public/logo.svg` and replace copy / images with your content.

## Images (placeholders) and what to do next

I added optimized SVG placeholder images for each service under `/public/images/`. These are safe, generated placeholders.

If you'd like high-quality, royalty-free photos (Unsplash / Pexels), download images and replace the files in `/public/images/` with the same filenames:

- blouse_bridal.svg  -> blouse_bridal.png (or .jpg)
- salwar_kurtis.svg  -> salwar_kurtis.png
- wedding_lehengas.svg -> wedding_lehengas.png
- alterations_repairs.svg -> alterations_repairs.png
- corporate_uniforms.svg -> corporate_uniforms.png
- home_tailor.svg -> home_tailor.png

Recommended searches on Unsplash / Pexels (these are free-to-use platforms; always check license):
- "bridal blouse stitching", "tailor measuring blouse", "indian bridal stitching"
- "salwar suit tailor", "kurtis tailoring"
- "bridal lehenga tailoring", "wedding dress tailoring"
- "clothing alteration tailor", "sewing machine closeup"
- "corporate uniform tailoring", "industrial tailoring"
- "tailor visiting home measuring customer", "home tailor measuring"

After downloading, ensure images are optimized (e.g., 1200px width, compressed) and named exactly as above, then redeploy.

