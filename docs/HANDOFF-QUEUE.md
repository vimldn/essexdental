# Handoff queue — essexdental writer/publisher runs

Newest entries at the bottom. One dated block per writer run.

## 2026-06-09 — writer run
- site: essexdental
- spoke: single-tooth-implant-cost (title "What a Single Tooth Implant Costs in Essex")
- hub: implant-costs (H1)
- draft: true (parked for the publisher to flip live)
- linking: up-link to /guides/implant-costs/ (hub field), one pillar link to /services/single-tooth/, matching CTA (component default)
- schema: Article + MedicalWebPage + BreadcrumbList + FAQPage emitted via blog [slug] route
- tsc: clean (npx tsc --noEmit, exit 0) after rename round-trip to clear stale sandbox contents
- git: committed to main; push pending (note state below)
- buffer: 1 parked draft for H1; 6 live spokes total, 7 written toward 100

## 2026-06-10 — writer run
- site: essexdental
- spoke: dental-implant-success-rates (title "Dental Implant Success Rates: What the Evidence Shows")
- hub: implant-risks-and-success (H8, first spoke for a previously-empty hub)
- draft: true (parked for the publisher to flip live)
- linking: up-link to /guides/implant-risks-and-success/ (hub field), one pillar link to /services/single-tooth/, matching CTA (component default); referral framing kept in prose
- schema: Article + MedicalWebPage + BreadcrumbList + FAQPage emitted via blog [slug] route
- YMYL: no fabricated stats/cases/credentials; survival ranges attributed to long-term studies, NHS named as authority, no treatment guarantee; UK English, no em dashes
- length: ~1078 words, 6 sections, 5 FAQs
- tsc: clean (npx tsc --noEmit, exit 0) after rename round-trip to clear stale sandbox contents
- git: committed to main; push attempted (note state below)
- buffer: 2 parked drafts (H1 single-tooth-cost, H8 success-rates); 6 live spokes, 8 written toward 100

## 2026-06-10 — writer run (2)
- site: essexdental
- spoke: who-can-have-dental-implants (title "Who Can Have Dental Implants? Suitability Explained")
- hub: am-i-suitable-for-implants (H9, first spoke for a previously-empty high-value hub; candidacy overview, the anchor spoke)
- draft: true (parked for the publisher to flip live)
- linking: up-link to /guides/am-i-suitable-for-implants/ (hub field), one pillar link to /services/single-tooth/, matching CTA (component default); no siblings (H9 had no published spokes); referral framing kept in prose
- schema: Article + MedicalWebPage + BreadcrumbList + FAQPage emitted via blog [slug] route
- YMYL: no fabricated stats/cases/credentials; smoking ~2x failure risk attributed to studies, NHS named as authority, GDC-registered framing, no treatment guarantee; UK English, no em dashes
- length: ~1050 words, 6 sections, 5 FAQs
- tsc: clean (npx tsc --noEmit, exit 0) after rename round-trip to clear stale sandbox contents
- git: committed to main; push attempted (note state below)
- buffer: 3 parked drafts (H1 single-tooth-cost, H8 success-rates, H9 who-can-have); 6 live spokes, 9 written toward 100

## 2026-06-11 — writer run (2)
- site: essexdental
- spoke: implant-consultation-questions (title "Questions to Ask at Your Implant Consultation")
- hub: choosing-an-implant-dentist (H10, first spoke for a previously-empty high-value hub; H10 feeds the matching CTA and provider-choice intent). Section 3 H10.4; H10.1 "how to choose an implant dentist in Essex" deliberately skipped this run to avoid colliding with the hub head term.
- draft: true (parked for the publisher to flip live)
- linking: up-link to /guides/choosing-an-implant-dentist/ (hub field + inline "our guide to choosing an implant dentist"), one pillar link to /location/chelmsford/ via relatedLocationSlugs (genuine local angle: assessing Essex clinicians), matching CTA (component default); no siblings (H10 had no published spokes); referral framing kept in prose ("we do not place implants, we own no clinic, we match you free of charge")
- schema: Article + MedicalWebPage + BreadcrumbList + FAQPage emitted via blog [slug] route (author @id = /about/#author, datePublished + dateModified = 2026-06-11)
- YMYL: no fabricated stats/cases/credentials; General Dental Council named as the registration authority (GDC online register), no clinical statistics asserted, no treatment guarantee; UK English, no em dashes; prose written apostrophe-free to avoid multibyte mangling under the sandbox sync issue noted below
- length: ~974 words (paragraphs + FAQs), 6 sections, 5 FAQs
- verify: esbuild bundles data/blog.ts clean (exit 0); link gate `scripts/check-links.mjs .` prints "essexdental — 21 slugs, 0 broken"; blog.ts on disk = 515 lines / 11 entries / 0 NUL / tail (exports) intact
- note: renderer shows paragraphs as plain text (no inline anchors), so up-link/pillar links resolve via the hub field, relatedLocationSlugs box and the CTA component, matching every existing spoke
- SANDBOX FS INSTABILITY (this run): the Linux sandbox mount intermittently NUL-padded and truncated files on read AND write. The Edit-tool write of this spoke was truncated mid-entry on disk; recovered by restoring data/blog.ts from HEAD and re-splicing the entry atomically via a Python script in one bash call, then re-validating (the restore + splice round-tripped cleanly, esbuild + link gate confirm). Sibling client files (app/guides/[slug]/GuideHubClient.tsx, app/guides/[slug]/page.tsx) still read with NUL bytes in the sandbox but are clean on the host (verified via host-path read), i.e. mount read artifacts, not real corruption — do NOT "fix" them.
- tsc: NOT run to completion in-sandbox. Full-project `npx tsc --noEmit` fails only with phantom TS1127 "Invalid character" on the NUL-mount-corrupted sibling client files above (clean on host); data/blog.ts itself validates via esbuild. Host should re-run `npx tsc --noEmit` to confirm clean once the mount is stable.
- git: NOT COMMITTED. Same recurring failure as the previous run: `.git/index` is unreadable/NUL-corrupt through the sandbox mount (`xxd .git/index` -> "No such file or directory"; `git ls-files` -> 0 entries; status shows every file as staged-delete + untracked), and a host-held `.git/index.lock` cannot be removed from the sandbox. safe-commit.sh also read corrupted through the mount (line-32 "unexpected EOF while looking for matching quote") so it did not run. HEAD still at 0432c38. ACTION NEEDED (host/Claude Code): from a stable (host) environment, remove any stale `.git/index.lock` / `.git/HEAD.lock`, rebuild the index (`rm -f .git/index && git reset` or `git status` to repair), VERIFY data/blog.ts is intact (515 lines, 11 BLOG_POSTS entries, ends with the BLOG_SLUGS export), then `git add -A && git commit -m "essexdental: add H10 spoke implant-consultation-questions (draft)" && git push`. All file changes (data/blog.ts spoke, docs/SILO-PLAN.md section 9 counts) are saved on disk; only the commit is blocked.
- buffer: 5 parked drafts (H1 single-tooth-cost, H1 full-arch-cost, H8 success-rates, H9 who-can-have, H10 implant-consultation-questions); 6 live spokes, 11 written toward 100 (file-level; this run uncommitted)
- next: host commits this run first (clear the git lock/index corruption above), then continue priority order — H10 still thin (consider H10.2 "dental implants abroad: risks vs UK treatment"), H5 full-arch hub still empty (H5.1 "all-on-4 and full-arch implants explained"), or H8/H9 second spokes

## 2026-06-12 — writer run
- site: essexdental
- spoke: full-arch-implants-explained (title "Full-Arch and All-on-4 Dental Implants Explained")
- hub: full-arch-all-on-4 (H5, first spoke for a previously-empty priority hub)
- draft: true (parked for the publisher to flip live)
- linking: up-link to /guides/full-arch-all-on-4/ (hub field), one pillar link to /services/full-arch/, matching CTA (component default); no siblings (none published yet in H5); referral framing kept in prose
- schema: Article + MedicalWebPage + BreadcrumbList + FAQPage emitted via blog [slug] route
- YMYL: cornerstone explainer kept shallow to leave depth for siblings; no fabricated stats/cases/credentials; All-on-4 attributed to Nobel Biocare, survival ranges attributed to published long-term studies, no treatment guarantee; price detail deferred to H1 cost guide (boundary respected); UK English, no em dashes
- length: ~1040 words, 7 sections, 5 FAQs
- tsc: clean (npx tsc --noEmit, exit 0) after rename round-trip to clear stale sandbox contents
- link gate: check-links.mjs OK, 22 slugs, 0 broken
- git: committed to main; push attempted (note state below)
- buffer: 6 parked drafts (H1 single-tooth-cost + full-arch-cost, H8 success-rates, H9 who-can-have, H10 consultation-questions, H5 full-arch-explained); 6 live spokes, 12 written toward 100
