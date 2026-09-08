# Reference Media

## Primary reference film
YouTube: https://youtu.be/QyPdoI9-568

The project owner supplied a local copy named `ساره خليفه.mp4` for editing-style analysis.

Expected metadata:
- duration: ~1881.304 seconds (~31:21)
- resolution: 640×360
- H.264 video / AAC audio
- size: 102,468,900 bytes
- SHA-256: `b45b8ec04eeb5560e7f16aee5eed7aadc5dacf25e046740cecb76caa7c2a160e`

## Expected local path
When the original reference file is available to an agent, place it at:

`reference/sarah-khalifa-reference.mp4`

Then run:

```bash
npm run check:reference
```

## Git LFS
This repository includes `.gitattributes` rules for MP4/WAV media. From a normal Git client:

```bash
git lfs install
git add .gitattributes reference/sarah-khalifa-reference.mp4
git commit -m "Add Sarah Khalifa reference film via Git LFS"
git push
```

## Copyright boundary
This file is a research/reference asset, not an automatically cleared publication asset. Do not ship the reference video or long excerpts in the final documentary merely because it exists in the repository.

## Visual storyboard
`reference-storyboard.jpg` is a low-resolution contact-sheet overview extracted for internal analysis of pacing and visual categories. It is not intended for publication.
