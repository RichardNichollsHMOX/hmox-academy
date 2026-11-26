# HMO X Academy: notes for Claude

Team induction and annual refresher for HMO X. Published (owner: Richard) at https://claude.ai/artifact/6X3kDFQfTQH6K6BLyMX5RS. Always republish to that same URL (pass it as `url`; read it first), never create a new artifact.

## How it is built
- `content.js` holds every lesson and question. Module `id`s are keys for people's saved results: never rename or remove one.
- `app.html` is the page. `bash build.sh` inlines the content into `dist/hmox-academy.html`, which is the file published.
- Results live in the artifact's database: `progress/<person>` (only that person writes; Editors read all) and `signoffs/<person>` (Editors write). Keep the same `capabilities` on republish (omit the field to keep them).
- Staff need Contributor access to save results; managers who sign off need Editor.

## Sources
- `research/drive-findings.md` (Drive "Template reports", to 26 Nov 2026), `research/sessions-findings.md` (other HMO X sessions) and `research/hub-findings.md` (the Hub, read through the Mighty GraphQL API, read-only, 26 Nov 2026) and `research/website-findings.md` (hmox.co.uk as updated 25 Nov 2026). All are cleaned of pay, budgets and discount codes; keep it that way.
- The HMO X report skills (Tier, buyer demand, GDV, buyer brief, structural anchors) hold the methodology wording.

## House rules for the content
- Brand: teal #4DE3BD, off-black #282829, accent green #0C886B, white; pastels for backgrounds only. Plus Jakarta Sans headings, Open Sans body. Real logo artwork only (text wordmark until we have the file).
- Voice: "We do not pitch. We brief." British English, plain, no emojis, no estate-agent language. Tier terms word for word (Edition 2).
- Never name Sprift, never promise an EPC, never call the Tier Test free, no client names or addresses anywhere.
- Lessons marked with `confirm:` show a manager-only note listing what still needs Richard's input.

## Open items (as of 26 Nov 2026, after the Hub read)
1. Done: the Hub has its own module (`hub`, the third module) from the Mighty Hub. Hub pages that are out of date (Hub Lite pricing, unnamed bench entries, the Self-Operators and RRA course spaces) are being changed or removed by Holly: leave them out of the course.
2. Done: Committed Sale minimum fee £4,000; HMO X Auctions minimum fee £5,000 (Richard, 26 Nov). Hand-prepared GDV stays in the course, but the instant GDV Appraisal is the one to push.
3. Done: Value My HMO is £19.99 + VAT launch price (RRP £99 + VAT), from hmox.co.uk (updated 25 Nov 2026). The Hub is free for 12 months, to 31 December 2027, while the tools and analysers launch (Richard, 26 Nov).
4. Redress scheme, complaints process, service response times: Holly is redoing the policy pages this week and Richard will add them. Do not invent them.
5. Day one: the Hub part is now in the intro module. Still needed: hours, other logins, buddy, and the January senior salesperson induction. Also whether Hitesh belongs on the team page.
