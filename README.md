# AI Coding Skills Website

Documentation site for the [AI Coding Skills](https://github.com/AI-Coding-Skills) open-source initiative.

- **Site:** https://aicodingskills.dev
- **Stack:** [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) + [starlight-theme-next](https://starlight-theme-next.trueberryless.org/)
- **Output:** fully static

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The static site is written to `dist/`.

## Deploy

### Cloudflare Pages

1. Connect the `AI-Coding-Skills/website` repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Node.js version: `22` or newer (required by `starlight-theme-next`)
5. Attach the custom domain `aicodingskills.dev`

### GitHub Pages

1. Build with `npm run build`.
2. Publish the `dist/` directory (GitHub Action or Pages from a branch/artifact).
3. Configure the custom domain `aicodingskills.dev`.

Because the site uses a custom apex domain, keep Astro `site` set to `https://aicodingskills.dev` and do not set a non-root `base` path.

## Content layout

Documentation is organized so platforms stay outside language trees:

- Platforms: `src/content/docs/platforms/`
- Java frameworks, skills, examples, guides: `src/content/docs/languages/java/`

See [Contributing](https://aicodingskills.dev/contributing/) for contribution guidelines.
