# Agent Handoff — Continue This Project

Use this file when handing the repository to Codex, Claude Code, Cursor, or another capable coding/video agent.

## Mission
Continue building **True Crime Studio**, a reusable Arabic investigative documentary production system. The first production is the Sarah Khalifa documentary.

Do not rebuild the repository from scratch.

## Mandatory first actions
1. Inspect the repository tree and current git status.
2. Read `AGENTS.md` completely.
3. Read `PROJECT.md`.
4. Read `docs/EDITORIAL_POLICY.md`.
5. Read `docs/REFERENCE_ANALYSIS.md`.
6. Read `docs/SARAH_KHALIFA_STORY_BIBLE.md`.
7. Read `docs/SOURCES.md` and re-verify all time-sensitive legal claims against current reliable sources.
8. Inspect `reference/reference-storyboard.jpg` for the reference film's visual rhythm/categories.
9. Inspect `reference/sarah-khalifa-reference-visual-proxy.mp4`. It is a full-duration visual proxy of the supplied ~31-minute reference film, intentionally low frame rate/resolution and without audio so it can live directly in Git.
10. If `reference/sarah-khalifa-reference.mp4` exists, run `npm run check:reference` before using it. It is reference-only material.
11. Run `npm install`, `npm run typecheck`, and launch `npm run studio` before major edits.

## Current implementation
- Remotion + React + TypeScript.
- `SarahKhalifa` composition is currently a production shell.
- Reusable chapter-card and reconstruction-label components exist.
- CI typechecks on pushes and PRs.
- The repository contains a source ledger, story bible, editorial/legal policy, reference analysis, storyboard, full-duration visual proxy, and production workflow.

## Next production milestone
Turn the shell into a **fully researched scene manifest and narration draft**, then implement the first 60–90 seconds as a polished proof-of-style before expanding to the complete 20–30 minute master.

The first 60–90 seconds should include:
- 5 September 2026 court-ruling cold open;
- immediate clarification that defense announced an appeal;
- strong visual distinction among court/reporting/reconstruction material;
- rewind transition into the beginning of the story;
- original visual language rather than cloning the reference creator.

## Quality bar
- Arabic RTL must be correct.
- Factual claims must have source IDs/provenance.
- Allegations are attributed as allegations.
- Generated scenes are labeled `إعادة تمثيل / DRAMATIZED RECONSTRUCTION` where needed.
- Do not fabricate CCTV, police footage, documents, recordings, quotations, or confessions.
- Do not include actionable drug-production/trafficking/evasion instructions.
- Do not copy the reference video's narration, soundtrack, graphics, exact shot order, or distinctive phrasing.
- Prefer reusable Remotion primitives and data-driven scene manifests.
- Run typecheck after implementation and fix all errors before handoff.

## Reference assets
Full-duration visual proxy already in Git:
`reference/sarah-khalifa-reference-visual-proxy.mp4`

Original full-resolution reference expected through Git LFS:
`reference/sarah-khalifa-reference.mp4`

Expected original SHA-256:
`b45b8ec04eeb5560e7f16aee5eed7aadc5dacf25e046740cecb76caa7c2a160e`

Expected original size:
`102,468,900 bytes`

If the original is missing, production does not need to stop: use the full-duration visual proxy, storyboard, and repository analysis. Do not claim the proxy contains audio or full-motion detail.
