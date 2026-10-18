## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Branch and merge workflow

- Make every code change set on its own branch created from an up-to-date `main`; do not commit changes directly to `main`.
- Keep the branch synchronized with `main`. Before merging, fetch the latest `main`, integrate it into the change branch, resolve any conflicts, and rerun the relevant checks.
- Track each change set in a pull request. Include a concise summary, relevant documentation updates, the tests/build checks run and their results (or why checks were not applicable), and the branch's sync status with `main`.
- Run the smallest relevant validation for the change and report the outcome in the pull request. Do not merge until required checks pass.
- After review and checks, merge the pull request into `main` and verify that the change is present on `main`. If remote access, review, or checks prevent completion, leave the branch intact and report the blocker rather than claiming it was merged.
- Keep unrelated pre-existing worktree changes out of the change branch's commits and pull request.
