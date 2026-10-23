# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```


Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Social sharing image

All pages using `src/layouts/Layout.astro` share the branded
`public/social/first-fragment.png` image for Open Graph (`og:image`) and
Twitter/X Cards (`twitter:image`). The PNG is 1200 x 630 pixels, and Twitter
uses the `summary_large_image` card. Titles and descriptions come from each
page's layout props; image URLs are absolute and use the production `site`
configured in `astro.config.mjs`.

To change the artwork, edit `Scripts/SocialImage.mjs`, then run:

```sh
npm run generate:social
npm run build
```

The generator uses the existing studio emblem in
`public/android-chrome-512x512.png`. Commit the regenerated PNG alongside the
generator changes. Text rendering uses locally available Georgia and Segoe UI
fonts (with generic fallbacks), so generate on Windows for consistent typography.
Deploy the site before checking share previews on social platforms. Platforms
may cache an older preview until the URL is re-scraped.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
