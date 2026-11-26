# HMO X Academy: notes for Claude

Team induction and annual refresher for HMO X. Published (owner: Richard) at https://claude.ai/artifact/6X3kDFQfTQH6K6BLyMX5RS. Always republish to that same URL (pass it as `url`; read it first), never create a new artifact.

## How it is built
- `content.js` holds every lesson and question. Module `id`s are keys for people's saved results: never rename or remove one.
- `app.html` is the page. `bash build.sh` inlines the content into `dist/hmox-academy.html`, which is the file published.
- Results live in the artifact's database: `progress/<person>` (only that person writes; Editors read all) and `signoffs/<person>` (Editors write). Keep the same `capabilities` on republish (omit the field to keep them).
- Staff need Contributor access to save results; managers who sign off need Editor.

## Sources
- `research/drive-findings.md` (Drive "Template reports", to 26 Nov 2026) and `research/sessions-findings.md` (other HMO X sessions). Both are cleaned of pay, budgets and discount codes; keep it that way.
- The HMO X report skills (Tier, buyer demand, GDV, buyer brief, structural anchors) hold the methodology wording.

## House rules for the content
- Brand: teal #4DE3BD, off-black #282829, accent green #0C886B, white; pastels for backgrounds only. Plus Jakarta Sans headings, Open Sans body. Real logo artwork only (text wordmark until we have the file).
- Voice: "We do not pitch. We brief." British English, plain, no emojis, no estate-agent language. Tier terms word for word (Edition 2).
- Never name Sprift, never promise an EPC, never call the Tier Test free, no client names or addresses anywhere.
- Lessons marked with `confirm:` show a manager-only note listing what still needs Richard's input.

## Open items (as of 26 Nov 2026)
1. Fill in the Hub from the HMO X Hub (Mighty) connector: sections, joining, what each role does there.
2. Committed Sale minimum: course uses £4,000 (newest files); the Team Analyser wording says £5,000. Confirm with Richard.
3. Value My HMO price: free in some files, £19.99 in the Tools session. Not stated in the course until confirmed.
4. Redress scheme, complaints process, service response times: not found anywhere yet.
5. Day-one practicalities for new starters (logins, hours, buddy) and the January senior salesperson induction.
