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

## 2026-06-11 — writer run
- site: essexdental
- spoke: full-arch-implant-cost (title "What Full-Arch and All-on-4 Implants Cost in Essex")
- hub: implant-costs (H1; H1.3 in section 3, highest-ticket cost intent. H1 owns price; H5 owns the full-arch treatment, so this stays cost-only)
- draft: true (parked for the publisher to flip live)
- linking: up-link to /guides/implant-costs/ (hub field + inline "our guide to dental implant cost in Essex"), one pillar link to /services/full-arch/ (inline "full-arch and All-on-4 treatment page" + relatedServiceSlugs), matching CTA (component default); no new siblings linked (single-tooth-cost still draft); referral framing kept in prose
- schema: Article + MedicalWebPage + BreadcrumbList + FAQPage emitted via blog [slug] route
- YMYL: no fabricated stats/cases/credentials; price ranges consistent with the live cost-essex post (All-on-4 £15k-£22k/arch, All-on-6 +£2.5k-£4.5k), NHS named as authority, manufacturers (Straumann, Nobel Biocare) named only generically, no treatment guarantee; UK English, no em dashes
- length: ~1054 words, 6 sections, 5 FAQs
- note: renderer shows paragraphs as plain text (no inline anchors), so up-link/pillar links resolve via the hub field, relatedServiceSlugs box and the CTA component, matching every existing spoke. External authorities cited by name in prose (renderer has no hyperlink support).
- tsc: clean (npx tsc --noEmit, exit 0) after rename round-trip to clear stale sandbox contents
- git: NOT COMMITTED. safe-commit.sh failed: .git index is corrupt ("bad signature 0x00000000 / index file corrupt") and two lock files cannot be removed from the sandbox (`.git/HEAD.lock` dated 2026-06-10 08:20 stale, `.git/index.lock` dated 2026-06-11 01:53), both returning "Operation not permitted" on unlink, i.e. held host-side. HEAD still at 470536f (H9 spoke). ACTION NEEDED (host/Claude Code): delete .git/HEAD.lock and .git/index.lock, run `git status` to rebuild/repair the index (or `rm .git/index && git reset`), then `git add -A && git commit -m "essexdental: add H1 spoke full-arch-implant-cost (draft)" && git push`. All file changes below are saved and tsc-clean, only the commit is blocked.
- buffer: 4 parked drafts (H1 single-tooth-cost, H1 full-arch-cost, H8 success-rates, H9 who-can-have); 6 live spokes, 10 written toward 100 (file-level; uncommitted)
- next: first clear the git lock/corruption above and commit this run, then continue priority order — H8 risks (#2 signs of a failing implant), H9 suitability (#2 implants with gum disease), or H10/H5 (both still empty, high value)
