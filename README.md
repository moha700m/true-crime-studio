# True Crime Studio

Arabic investigative video production system built with **Remotion + React**.

The repository is designed so a coding/video agent can open it and immediately understand the editorial rules, visual language, source-of-truth research, and production workflow.

## First film

**Sarah Khalifa — working title:** `سارة خليفة: القضية التي صنعت الشهرة`

Status: **pre-production / scaffold ready**.

## Start here

1. Read [`AGENTS.md`](./AGENTS.md).
2. Read [`PROJECT.md`](./PROJECT.md).
3. Read [`docs/EDITORIAL_POLICY.md`](./docs/EDITORIAL_POLICY.md).
4. Read [`docs/REFERENCE_ANALYSIS.md`](./docs/REFERENCE_ANALYSIS.md).
5. Read [`docs/SARAH_KHALIFA_STORY_BIBLE.md`](./docs/SARAH_KHALIFA_STORY_BIBLE.md).
6. Read [`docs/SOURCES.md`](./docs/SOURCES.md) and re-verify time-sensitive claims before rendering.
7. Run `npm install`, then `npm run typecheck`, then `npm run studio`.

## Core rule

The uploaded/reference YouTube film is **reference material only**. Do not copy its narration, scene sequence, graphics, music, or unique visual expression. Extract high-level storytelling principles (hook, pacing, visual changes, evidence presentation) and produce an original film.

## Repository layout

- `src/` — Remotion compositions and reusable video components.
- `docs/` — editorial policy, production workflow, story bible, source list.
- `reference/` — reference-film manifest and visual storyboard.
- `public/` — production assets used by Remotion.
- `scripts/` — deterministic validation tools.

## Current Remotion composition

`SarahKhalifa` — 1920×1080, 30 fps. The current 30-second composition is a validated **production shell**, not the final documentary.

## Media handling

The original reference video is approximately 102 MB and should be tracked through Git LFS if added with a normal Git client. See [`reference/README.md`](./reference/README.md).

Do not publish third-party copyrighted reference footage as part of the final film unless rights/quotation use has been reviewed. Prefer original narration, licensed/owned archival media, public-record material where appropriate, and clearly labeled dramatized reconstructions.
