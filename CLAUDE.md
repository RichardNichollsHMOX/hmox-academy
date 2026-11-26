# HMO X Academy: notes for Claude

A general introduction to HMO X and to HMOs, for anyone joining the business whatever their role (Richard, 26 Nov 2026: not specific to a person or role), used as the induction and annual refresher. Published (owner: Richard) at https://claude.ai/artifact/6X3kDFQfTQH6K6BLyMX5RS. Always republish to that same URL (pass it as `url`; read it first), never create a new artifact.

## How it is built
- `content.js` holds every lesson and question. Module `id`s are keys for people's saved results: never rename or remove one.
- `app.html` is the page. `bash build.sh` inlines the content into `dist/hmox-academy.html`, which is the file published.
- Results live in the artifact's database: `progress/<person>` (only that person writes; Editors read all) and `signoffs/<person>` (Editors write). Keep the same `capabilities` on republish (omit the field to keep them).
- Staff need Contributor access to save results; managers who sign off need Editor.

## Sources
- `research/drive-findings.md` (Drive "Template reports", to 26 Nov 2026), `research/sessions-findings.md` (other HMO X sessions) and `research/hub-findings.md` (the Hub, read through the Mighty GraphQL API, read-only, 26 Nov 2026) `research/website-findings.md` (hmox.co.uk as updated 25 Nov 2026), `research/hub-lessons-notes.md` (the full text of the Hub lessons, read 26 Nov 2026) and `research/market-commentary-notes.md` (Richard's Facebook market commentary 2018 to 2026). All are cleaned of pay, budgets and discount codes; keep it that way.
- The HMO X report skills (Tier, buyer demand, GDV, buyer brief, structural anchors) hold the methodology wording.

## House rules for the content
- Brand: teal #4DE3BD, off-black #282829, accent green #0C886B, white; pastels for backgrounds only. Plus Jakarta Sans headings, Open Sans body. Real logo artwork only (text wordmark until we have the file).
- Voice: "We do not pitch. We brief." British English, plain, no emojis, no estate-agent language. Tier terms word for word (Edition 2).
- Never name Sprift, never promise an EPC, never call the Tier Test free, no client names or addresses anywhere.
- Lessons marked with `confirm:` show a manager-only note listing what still needs Richard's input.

## How conflicting sources are settled
Newest wins, in this order: Richard's own instructions; hmox.co.uk (25 Nov 2026); the Tier Methodology Edition 2; the Hub lessons (May to Nov 2026); older Drive files. The Hub lessons disagree with each other in places (tier slippage speed, ICR figures, worked examples), so never copy a Hub figure without checking it against the newer sources.

## Open items (as of 26 Nov 2026)
1. Auction entry fee: course uses £400 onboarding (newest files); the Hub's Exit Planning lesson says £600 + VAT entry fee, plus a £1,250 + VAT buyer admin fee. Confirm with Richard.
2. Launch premium length: course uses 12 to 24 months (Edition 2); the Hub lessons say 12 to 18 months.
3. Redress scheme, complaints process, service response times: Holly is redoing the policy pages; Richard will add them. Do not invent them.
4. Done and confirmed by Richard (26 Nov): Committed Sale minimum £4,000; Auction minimum £5,000; Value My HMO £19.99 + VAT launch price; Hub free to 31 Dec 2027 while the tools launch; hand-prepared GDV stays but push the instant GDV; Hitesh not on the team page; out-of-date Hub pages are Holly's to fix.
