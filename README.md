# Wanni Shots Photography Portfolio

A responsive monochrome photography portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Windows setup

1. Create a new empty folder, for example `C:\Users\USER\Downloads\WanniShots-CLEAN`.
2. Extract the ZIP so that `package.json`, `index.html`, `src`, and `public` are directly inside that folder. Do not run commands from a parent folder.
3. Open PowerShell inside the folder and check the project scripts:

   ```powershell
   Get-Content .\package.json
   ```

   The package name should be `wanni-shots-photography-portfolio` and the `dev` script should use `vite --host 0.0.0.0`.
4. Install dependencies and start Vite:

   ```powershell
   npm install
   npm run dev
   ```
5. Open the local URL shown in the terminal, normally `http://localhost:5173/`.

If the terminal prints `hogwarts-cafe-scrollytelling` or `next dev`, the command is being run from an old or different directory. This ZIP has a root-level `package.json` configured for Vite and does not need a Next.js `app` or `pages` folder.

## Notes

- Logo assets are in `public/wanni-shots-logo.png` and `public/wanni-shots-icon.png`.
- Portfolio includes links to Wanni Shots' social profiles, Instagram posts, package page and WhatsApp booking.
- Some gallery photographs remain visual placeholders; replace them with the photographer's own images before publishing.
