# yosefbirri.github.io

Portfolio of Yosef Birri, geospatial data scientist. Built with [Astro](https://astro.build) and deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Add or update a project

Each project is one Markdown file in `src/content/projects/`. The frontmatter fields are defined in `src/content.config.ts`:

- `title`, `summary`, `place`, `period`, `context`
- `coords` (`[longitude, latitude]`) and `locator` (`world`, `us` or `none`) draw the locator map
- `categories` drive the filters on the Projects page
- `tools` drive the Skills section on the homepage; a skill in `src/lib/skills.ts` links to every project whose `tools` include it
- `metric` is the single headline number on the project's card
- `featured: true` puts it on the homepage; `order` sets its position
- `status: published` gives it its own case-study page; `in-progress` shows the card only

The body uses `##` headings for the case-study sections; they become the page's table of contents.

Only put numbers on the site that come from the project's own outputs.

## Structure

```
src/content/projects/   one .md per project
src/pages/              home, projects index, case-study template, about
src/components/         locator maps, project entry
src/lib/geo.ts          build-time map rendering (Natural Earth and US Census geometry)
src/lib/skills.ts       skills shown on the homepage
public/                 photo, resume.pdf, favicon
```

The previous version of this site is preserved on the `archive/2025-site` branch.
