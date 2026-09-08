# Agent Operating Instructions

You are working on an Arabic investigative documentary production repository.

## Before modifying anything
1. Inspect the existing repository. Do not re-scaffold from zero if working code exists.
2. Read `PROJECT.md`, `docs/EDITORIAL_POLICY.md`, `docs/REFERENCE_ANALYSIS.md`, `docs/SARAH_KHALIFA_STORY_BIBLE.md`, `docs/SOURCES.md`, and `reference/README.md`.
3. Treat `docs/SOURCES.md` as a starting bibliography, not a permanent truth store. Re-check current court status immediately before publishing.
4. Preserve RTL Arabic typography and source labels.

## Implementation rules
- Remotion/React/TypeScript are the source of truth.
- Drive animation with Remotion frame APIs (`useCurrentFrame`, `interpolate`, springs/easing); do not rely on CSS transitions/animations for rendered motion.
- Put runtime media under `public/` and reference it with `staticFile()`.
- Prefer reusable scene primitives over duplicating markup.
- Keep scene content data-driven when practical.
- No placeholder comments in final code.
- Do not add dependencies unless they reduce real complexity.

## Editorial rules
- Attribute allegations: `بحسب النيابة`, `وفقًا لأمر الإحالة`, etc.
- Attribute defense claims separately.
- Court outcomes must include court level/date and current appeal status where relevant.
- Label AI or recreated visuals: `إعادة تمثيل` / `DRAMATIZED RECONSTRUCTION`.
- Do not fabricate quotes, documents, phone calls, CCTV, police footage, evidence, or confessions.
- Aesthetic reconstruction may depict environments, hands, silhouettes, generic actors, maps, files, transport, and abstract evidence. Do not imply that generated footage is authentic.
- Avoid operational detail that teaches drug manufacture/trafficking or evasion.

## Reference-film rule
Use the reference film only to study high-level craft:
- presenter-led narrative spine;
- cold open before biography;
- frequent A-roll/B-roll alternation;
- chapter punctuation;
- reenactment to cover unavailable footage;
- evidence and location inserts;
- retention questions before transitions.

Do **not** copy the script, exact scene order, graphics, music, shot compositions, or distinctive phrasing.

## Definition of done
- `npm run typecheck` passes.
- Studio opens without runtime errors.
- The target composition can render.
- All factual on-screen cards have a source entry.
- All generated reenactments are labeled.
- No missing media references.
- Final long-form and short-form exports are visually reviewed before publication.
