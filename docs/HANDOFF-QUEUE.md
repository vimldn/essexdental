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
