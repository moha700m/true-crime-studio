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
8. Inspect `reference/reference-storyboard.jpg` for the visual rhythm/categories of the reference film.
9. If `reference/sarah-khalifa-reference.mp4` exists, run `npm run check:reference` before using it. It is reference-only material.
10. Run `npm install`, `npm run typecheck`, and launch `npm run studio` before major edits.

## Current implementation
- Remotion + React + TypeScript.
- `SarahKhalifa` composition is currently a 30-second production shell.
- Reusable chapter-card and reconstruction-label components exist.
- CI typechecks on pushes and PRs.
- The repository contains a source ledger, story bible, editorial/legal policy, reference analysis, and production workflow.

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
- Generated scenes are labeled `إعادة تمثيل / DRAMATIZED RECONSTRUCTION`.
- Do not fabricate CCTV, police footage, documents, recordings, quotations, or confessions.
- Do not include actionable drug-production/trafficking/evasion instructions.
- Do not copy the reference video's narration, soundtrack, graphics, exact shot order, or distinctive phrasing.
- Prefer reusable Remotion primitives and data-driven scene manifests.
- Run typecheck after implementation and fix all errors before handoff.

## Reference video identity
Expected local file:
`reference/sarah-khalifa-reference.mp4`

Expected SHA-256:
`b45b8ec04eeb5560e7f16aee5eed7aadc5dacf25e046740cecb76caa7c2a160e`

If it is missing, do not invent that you watched it. Use the repository storyboard/analysis and ask for or ingest the reference asset through Git LFS when available.
