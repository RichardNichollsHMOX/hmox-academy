# HMO X: findings from the owner's Claude Code sessions

Research for the staff induction course. Compiled 26 Nov 2026 from three cloud sessions (read only) plus the artifacts and docs those sessions published. Client names, client property addresses and other personal data have been left out on purpose.

**Sources and the short names used below**
- **[VAL]**: "Valuations & Onboarding" (session_013ykHmKdCqMGnd8PYFqVvTH), 26 Nov 2026, 06:26 to 17:26. Read in full: every user and assistant message.
- **[TOOLS]**: "HMO X Tools & Analysers" (session_012ATPMaCnvbKVEvJjuybXjP), 24 Oct to 26 Nov 2026. This is the "master chat", and it works on the "master repo". The transcript is huge (about 30 context compactions), so I read three things: its latest compaction summary (25 Nov 21:11), every message from 25 Nov 21:11 to 26 Nov 09:15, and the artifacts and docs it published (listed below).
- **[TIER]**: "Tier Methodology Tool" (session_01N9s2vHa7P33GqmwD5SsqHx), 24 to 30 Oct 2026, now archived. I read its compaction summary (30 Oct 11:34) and its final handover (30 Oct 19:46).
- **Artifacts and docs from [TOOLS]:**
  - **[BRIEF]**: "HMO X Tools Board Brief" (13 Nov 2026), https://claude.ai/artifact/CNearH41UuMnpmJLXeJnQ7
  - **[LAUNCH]**: "HMO X tools launch plan: Nov to Dec 2026" (Claude Doc, 17 Nov 2026), https://claude.ai/artifact/UpxrYzZCWpc4msjc8dgUS8
  - **[GATES]**: "HMO X 2027: Gates and Actions" (Claude Doc, 18 Nov 2026), https://claude.ai/artifact/Q4ZA729YR1MAtPxxeSiFtS
  - **[PRIV]**: "How HMO X uses Claude: notes for the privacy policy" (Claude Doc, 25 Nov 2026), https://claude.ai/artifact/Lw4G2u64fXyNmMT8kCSy7X
  - **[HOLLY]**: "GHL steps for Holly: GDV report copies and new fields" (Claude Doc, 26 Nov 2026), https://claude.ai/artifact/7Kztd5BDb2MDkbgpRug7Fx
  - **[WFMAP]**: "Value My HMO Workflow Map" (11 Nov 2026), https://claude.ai/artifact/RhqunPMADBXqir61VnW6ZA
- **[SKILLS]**: the five HMO X skills installed on this account (SKILL.md files, about 13 Nov 2026 data). They are not a session, but they set out the house rules the sessions refer to.

Artifacts I listed but did not open: Team Analyser (YATpCRPVXQh3uaRtifkLEZ and 5PngBbrRAeoBwzC3kGaMr6), New GHL Fields, Evidence Engine (page and slides), Tools Launch Revenue, 2027 Budget slides, 2027 P&L, Investor One-Pagers. From [TIER]: The Tier Methodology, HMO X Tier Test, HMO X Tools, Tier Methodology Panel.

---

## 1. Brand

### Colours (hex)
| Token | Hex | Use |
|---|---|---|
| Mint / teal (primary) | `#4DE3BD` | The logo X, large panels, angled shapes, buttons and badges |
| Off-black / charcoal | `#282829` | Headings, buttons, the dark "evidence" card, dark panels |
| Deep green (accent text) | `#0C886B` | Small uppercase labels ("eyebrows") |
| White | `#FFFFFF` | Base |
| Teal-dark (artifacts) | `#1f9c7f` / `#0e6a55` | Eyebrow text on light backgrounds |
| Pastel fills (backgrounds only) | mint `#e4f8f1`, sky `#e6eff9`, rose `#f9e8ea`, sand `#f7f1e3`, lilac `#efeaf8` | Card backgrounds |
| Report greys | wash `#F6F7F7`, line `#E6E6EA`, muted `#7c7c86` | Report template tokens |

Sources: [VAL] 26 Nov (from the new website's stylesheets); [TIER] CLAUDE.md rule, 30 Oct: "off-black #282829, teal #4DE3BD, white; pastels for backgrounds only"; [BRIEF] 13 Nov CSS.

### Fonts
- **Plus Jakarta Sans** for headings (and for everything in the artifacts and tools) [VAL 26 Nov; TIER 30 Oct; BRIEF].
- **Open Sans** for body text on the new website [VAL 26 Nov].
- JetBrains Mono for code and tags in the internal workflow maps only [WFMAP].

### Logo
- "Real logo artwork only" [TIER CLAUDE.md, 30 Oct]. The website has a mint X.
- The X disappears on a mint background, so use the dark version on mint [VAL 26 Nov].
- Logo files are on hmox.co.uk.

### Tagline and company line
- **"Your community of HMO experts."** [TIER; BRIEF; VAL site.config.json]
- The footer line [BRIEF]: "HMO X Ltd · Your community of HMO experts · Discovery Court Business Centre, Wallisdown Road, Poole, BH12 5AG · Company No. 15730822 · sales@hmox.co.uk".

### Visual style (new website, launched with the tools)
[VAL 26 Nov]
- Rounded cards.
- Big numbers with a short caption. The site shows "5,400+", "28,500+", "320" and "Weekly".
- Small uppercase labels above headings.
- Lots of white space.
- Mint is saved for panels and big figures. Evidence goes on the dark card.
- A website hero line: "WHERE PROPERTY INVESTORS GET A STRAIGHT ANSWER".

### Tone of voice
- Short, direct, plain English, British spelling [VAL 26 Nov].
- Example from the site: "Start with the evidence, not the guess."
- Richard is not a developer, so explain things in plain English [TIER summary].
- Client quotes in reports are "my view in my voice: short, direct, plain English" [VAL project instructions, 26 Nov].

### House style for reports and pages
- **Say each thing once.** The owner's goal for reports: "more visual, less repeated wording, clearer and better in line with the brand" [VAL 26 Nov, owner].
  - The old PDFs repeated the asking price, floor and route on the cover, the snapshot, the scenarios and the recommendation.
  - They also wasted pages and put a solid mint header row on every table.
  - New direction:
    - a one-page summary with big numbers;
    - a T1–T5 tier scale;
    - a price bar running from the floor through asking to the comparables;
    - charts instead of prose;
    - legal wording collected once at the back.
- **Sales Valuation house style:**
  - give ranges;
  - give yields to 2 decimal places;
  - name the source and date for every figure;
  - copy the data-basis line word for word into the notes [SKILLS buyer-demand].
- **Tier wording in every report** [SKILLS, all report skills]:
  - Use the heading **"Read through the HMO X Tier Methodology"**.
  - Name the tier with its label: T1 Premium / Studio, T2 New Quality, T3 Standard / Older En-Suite, T4 Basic / Functional, T5 Distressed / Opportunity.
  - Use the defined terms exactly: home tier, trading position, trajectory, launch premium, leverage trap, the four T1 criteria, Buy It Right.
  - End with the methodology evidence line, word for word.
- **Executive summary format:**
  - "Home tier: T<n> (<label>); trading at <pct>% of its home tier (<band>)".
  - Buyer demand row: "<score> - <verdict> at <price> (<gross>% gross)" [SKILLS].
- **Engine versus valuer:** where the engine and the valuer differ, add one sentence on why. The valuer's judgement wins [SKILLS].
- **Interactive reports:** collapsible boxes, each with a headline you can read when it's closed. The calls to action come early and also sit in a sticky bar [VAL 26 Nov].

---

## 2. Company

### Legal entity
- **HMO X Ltd**, Company No. **15730822**. The number 07139236 is wrong and must not be used [TIER 30 Oct; GATES 18 Nov].
- Address: Discovery Court Business Centre, Wallisdown Road, Poole BH12 5AG.
- Phone: 0330 441 5888 [VAL site.config.json].
- Related entity: "HMO X Auctions Ltd". The current privacy policy belongs to this company and does not cover the tools or GHL [LAUNCH 17 Nov].

### Who we are and what we do
- HMO sales through Committed Sale and the HMO X Auction, plus valuations, consultancy and data tools [BRIEF; VAL].
- Marketing stats used in reports [VAL site.config.json]:
  - 600,000+ registered buyers across combined channels;
  - 200+ new investors a month;
  - 100+ HMO appraisals a month, nationwide;
  - 20+ years of HMO valuation experience.
- Website claims [GATES 18 Nov]: "750+ HMOs sold since 2018, 1,800+ valuations a year". The buyer database has 5,000+ buyers.

### History
- **TPA ("The Property Advantage", Shrewsbury)** was the earlier property brokerage that sold investment HMOs for landlords as their agent. It has a SharePoint/Drive archive of about 1,390 folders, with 188 sale memoranda at high confidence [TOOLS 26 Nov].
- Older sale memoranda were issued under the name **"HMO Sales Expert"** [TOOLS 26 Nov].
- The HMO X valuation register holds every valuation since May 2024 [GATES].
- The new HMO X website is finished. It launches with the tools and a webinar on Tue 1 Dec 2026 [VAL 26 Nov; GATES].

### Vision and ambition
[BRIEF 13 Nov]
- Turn "the UK's deepest HMO evidence base" into products.
- Pivot partly into prop-tech:
  - aim for prop-tech awards in 2027;
  - make the tools the industry's reference point.
- A **Local Expert (LX) franchise** plan is in draft (board papers, July 2026). Figures removed from this copy.
- Core IP: **Richard's Tier Methodology**, plus the evidence base.

### Websites and domains
| Domain | What it is | Source |
|---|---|---|
| hmox.co.uk | Main company website (Joomla / YOOtheme; team photos at /images/yootheme/meet-the-experts/). Hosted by **Beyond Your Brand (BYB)**. BYB is being given notice "next month" (Dec 2026) and hosting moves in-house. Meet the team: hmox.co.uk/meet-the-team | VAL 26 Nov |
| richard-nicholls.co.uk | Richard's own site on Wix (headless site ID 21931548-…). It also hosts every tool page and data file. Never full-drop or replace it, because it holds Richard's personal site too | TOOLS/TIER |
| tools.hmox.co.uk | GHL-hosted hub that frames the tools | PRIV |
| valuation.hmox.co.uk | GHL-hosted pages: /sales-appraisal (seller valuation form), /gdv, /valuemyhmo | VAL, HOLLY, WFMAP |
| reports.richard-nicholls.co.uk | Interactive client valuation reports (Cloudflare Pages project `hmox-reports`). Planned to add reports.hmox.co.uk alongside it once hmox.co.uk DNS is in-house. Keep the old domain working permanently | VAL 26 Nov |
| hmox-reports.pages.dev | Cloudflare test address for the reports | VAL |
| Committed Sale website and auction website | Scanned daily for live stock. Exact URLs are not seen in what I read | BRIEF; PRIV |

### Business emails
- sales@hmox.co.uk: main address, onboarding (Fran), Committed Sale and Suitable Life intros.
- valuations@hmox.co.uk: internal "new report run" alerts from the tools.
- georgia.hopewell@hmox.co.uk: auctions.
- Sources: VAL site.config, HOLLY, LAUNCH.

---

## 3. Team

### The sales team
Roles as shown on reports (site.config.json) [VAL 26 Nov]. Credentials are as published on hmox.co.uk/meet-the-team.

| Name | Role | Responsibilities |
|---|---|---|
| **Richard Nicholls** | Senior Valuer & BDM. [TIER] calls him "Senior Valuer & HMO Sales Lead" | Owner and decision-maker. Writes every valuation. Creator of the Tier Methodology. "Architect of HMO X's committed sale route and auction house". 20+ years' HMO valuation experience. Has assessed thousands of HMOs and sold hundreds. A "time-served residential agent". Covers both sales desks when they are short. Publishes nothing without his OK |
| **Richard Parsons** | Valuations Coordinator ("First call") | First port of call for landlords thinking of selling. 15+ years as an HMO investor; speaks to 30+ landlords a week |
| **Francesca (Fran) Perry** | Office Manager & Client Onboarding. Becomes team manager in 2027 | Takes a property from agreed instruction to listing-ready and compliant. Owns the Committed Sale onboarding checklist. 200+ HMOs onboarded. In 2027 she moves from processing onboardings to managing the team: the rota, holiday cover, and supporting Nikki and the new hire |
| **Nikki Yearsley** | Sales Broker ("Finding your buyer") | Matches HMOs to buyers. Committed Sale buyer calls and leads come to her. 9+ years in property investment; £12m+ of HMO sales |
| **Kirby Butcher** | Sales Progression Specialist ("Agreed to completed") | Works with buyers, solicitors and brokers to clear conveyancing blockers. 3+ years in HMOs |
| **Georgia Hopewell** | Auction Manager ("If you choose auction") | Runs every auction: seller onboarding, legal pack review, pre-auction offers, completion. Owns the auction onboarding checklist. Auction buyer calls come to her. 7+ years in property, 5 in conveyancing. Earns a flat 5% on all auction sales |
| **Ivy** | Onboarding support | Day-to-day chasing and checks on onboardings. Will run the "coming soon" onboarding tool's open-items list [TIER 30 Oct; GATES]. Fran and Ivy onboard sellers for £400 + VAT |
| **Holly** | Marketing / CRM (GHL) | Builds the GHL workflows, checkout coupons and email campaigns, and runs the tools launch campaign [GATES; LAUNCH; HOLLY]. The owner does not want to "give Holly too much work" while the tools are launching [VAL 26 Nov] |
| New senior salesperson (recruiting) | Experienced HMO sales professional, split 50/50 auction and Committed Sale | Advert w/c 23 Nov; interviews w/c 7 Dec with Richard and Fran; offer by 18 Dec; start Jan 2027 with a four-week induction. Also supports and trains Kirby and Nikki [GATES 18 Nov] |

### Consultants and partners shown on reports
[VAL 26 Nov]
- **Alice Ibbotson**, Compliance, **Property Shield**. Former HMO licensing officer and Tier 2 fire risk assessor. Handles fire risk assessments, HHSRS and licensing work. Helps the Hub community pro bono, with no referral fee for now [GATES].
- **Carianne Wells**, Planning, **Well Planned**. Handles HMO planning, licensing, lawful development certificates (LDCs) and appeals.
- **George Sanford**, Mortgages, **VIBE Finance**. Specialist HMO and bridging mortgage adviser.
- Other partners:
  - **Suitable Life**: financial planner introductions.
  - **WM Legal**: the recommended solicitor on the onboarding checklist.
  - **Vibe and 978**: finance brokers linked from the GDV tool and the coming finance tool [GATES].
- **Data Protection Lead**: a named role who must sign off the privacy notice [LAUNCH].

---

## 4. Services, products and prices
All prices are + VAT unless stated. Newest figures are given first.

### Sales routes (the five routes)
[VAL site.config.json]

| Key | Route | Blurb |
|---|---|---|
| cs | **Committed Sale** | Open-market price discovery with a structured timetable and a committed buyer |
| au | **HMO X Auction** | A keen guide brings competition, with a fixed date and certainty |
| ep | **Exit Planning** | Lift the income or the tier first, then sell at a price the evidence supports |
| br | **Back to Resi (with X HMO)** | Take the house out of the HMO market and sell it as a family home under "X HMO" |
| hold | **Hold & review** | Keep the house performing, with the Health Check setting the plan |

### Fees
[VAL site.config.json, 26 Nov]
- **Committed Sale:** 2% + VAT, minimum £4,000 + VAT. Onboarding £400 + VAT, which is deducted from the commission.
- **Auction:** 2.5% + VAT, minimum £5,000 + VAT. Onboarding £400 + VAT, not deducted.
  - "Buyer pays half" option: the seller's effective rate is 1.25% + VAT.
  - Open question: is the half applied after the minimum?
- **Buyer reservation commitment (Committed Sale):** £3,500. Exchange is within 56 days of the buyer receiving draft contracts.
- **Buyer onboarding fee** in some particulars: £250 + VAT [TOOLS summary].
- **Self-onboarding** saves the seller £300 compared with Fran and Ivy onboarding at £400 + VAT [TIER 30 Oct].
- **Solicitor (seller):** typically £1,500–£2,500 + VAT. The report calculator defaults to £2,100 including VAT. This is an estimate; the real WM Legal figure is still to be confirmed.

### Consultancy and services
[VAL site.config.json; BRIEF]
- **HMO Health Check:** £995. For owners holding, not selling. Includes a visit from Richard.
- **Exit Planning:** £995. A costed plan to lift the price over 12–36 months. £200 for each extra HMO in the same market.
- **Back to Resi with X HMO:** £995, credited. For 4–6 person C4 houses worth more as a family home.
- **CSA call / strategy session with Richard:** £150, credited. Applies the Tier Methodology to the client's HMO.
- **Hand-prepared GDV Appraisal** (13 sections, for towns with thin evidence): £395.
- **Bespoke Location Intelligence Report:** from £299.
- Paid reports include **12 months of Hub membership** [VAL 26 Nov].

### Online tools
Launch prices run for about 6 months (to about May 2027), then the RRP applies [LAUNCH 17 Nov; BRIEF 13 Nov].

| Tool | Launch price | RRP | Status (mid/late Nov) | What it does |
|---|---|---|---|---|
| **Value My HMO** | £19.99 (£23.99 inc VAT) | £99 | Live, paid | Instant valuation: likely sale range, suggested asking price, speed versus value, buyer-demand score, local clearing price per room, nearest comparables, how to lift value, HMO X valuer's view |
| **Tier Test** | £99, credited to sales commission | £299 | Ready; payment switch-on with Holly | Full report on Richard's Tier Methodology: home tier T1–T5, rent ceiling, what holds the HMO back, compliance, lender view, mortgage timing, regional market, evidence pack. **It was free before. It is now £99 + VAT and must never be called free.** The Tier Methodology booklet (p.17) still says "free" and needs updating [VAL 26 Nov] |
| **GDV Appraisal** (instant) | £99 | £299 | Live; version 0.7.1 on 25 Nov | GDV for an HMO conversion or development, from concept to pre-finance: refinance and sales GDV, the rent a lender uses, and the purchase price at which the scheme stacks |
| **Location Intelligence Report (LIR)** | £99 launch (raised from £29 on 18 Nov) | £199 | 69 towns live behind a team link (26 Nov). Automated delivery after payment is not finished | Where and why to buy: room demand and rents, sale evidence, tenant pool, jobs, licensing, Article 4 risk, council tax, LHA, news, HMO X sales and live stock |
| **Find my next HMO** (Buyer Brief) | Free | — | Live; emailed to 5,000+ buyers on Sun 22 Nov | The investor's brief: what their capital buys, which regions fit, matching HMO X stock (sold lots too: "don't miss out next time") |
| **Finance Preparation** | £49 proposed | — | Planned, next quarter | Confidence before a revaluation, packaged to hand to the surveyor |

- **Credit rule:** every tool fee is credited in full against the buyer's next HMO X service within 12 months [BRIEF; LAUNCH].
- **B2B subscription:** illustrated at about £99 a month for valuers, surveyors, agents, sourcers and networks [BRIEF].

### 2027 budget figures
Removed from this copy: management figures (budgets, revenue and profit plans, sales targets). Ask Richard.
---

## 5. Tools and systems

### Client tools
Hosted as files on richard-nicholls.co.uk (Wix) and framed on tools.hmox.co.uk and valuation.hmox.co.uk (GHL) [PRIV 25 Nov].
- **Tier test page:** tier-methodology.html and tier-test.html. The Tier test link printed in the booklet is https://www.richard-nicholls.co.uk/tier-methodology.html.
- **GDV:** gdv-appraisal.html (and -ghl.html); also valuation.hmox.co.uk/gdv.
- **Value My HMO:** valuation.hmox.co.uk/valuemyhmo.
- **Find my next HMO:** hmo-buyer-brief.html.
- **Tools triage page:** hmo-tools.html.
- **Location reports:** hmo-location-reports.html (a team link with a private `?team=` code skips payment).
- **Buyer Demand Test / analyser:** hmo-analyser.html with hmo-analyser-engine.js. The public buyer-demand tool was at https://tools.hmox.co.uk.
- **Leads:** form data goes straight from the browser to GHL. **Jotform** is only the back-up, used if GHL can't be reached. The Tier report form ID is 262966305329060, and phone is a required field.
- **Payments:** taken on the GHL checkout (Stripe or PayPal).

### "The Hub"
- An HMO X community or membership. "The Deal Thread" inside the Hub lists vetted, proceedable buyers between cycles.
- Paid reports include 12 months of Hub membership.
- Property Shield helps the Hub community pro bono.
- Sources: VAL site.config, GATES. The details of the Hub platform were not found.

### Team Analyser
- An internal claude.ai app with its own database: https://claude.ai/artifact/YATpCRPVXQh3uaRtifkLEZ (an older version is at 5PngBbrRAeoBwzC3kGaMr6).
- It holds about 12,000 comparable sale records and 580–611 of Richard's valuations, with addresses. It also holds council-register sale matches, room rents, Richard's notes per town and daily HMO news.
- Anyone in the Claude account with the link can see it.
- **Read only for everyone except the weekly scan** [PRIV; TIER].
- Engine version v13.12 (Nov 2026).
- Gives the **buyer-demand score (0–5)** [SKILLS]:
  - 5: Strong;
  - 4: Broad;
  - 3: Moderate;
  - 2: Narrow;
  - 1: Very narrow;
  - 0: No pool.
- Gives five reads, a price lever, route fit, speed-versus-value prices, comps and room rents.
- **Sweet-spot prices** by bed count: 4 bed £120k, 5 bed £175k, 6 bed £225k, 7 bed £275k, 8 bed £350k.
- **Mortgage stress rate:** 6.5%.

### Report skills
Used in Richard's valuation chats and rebuilt weekly after the Friday scan; they have to be re-uploaded by hand [SKILLS; TIER].
- hmox-buyer-demand-read
- hmox-tier-read
- hmox-gdv-read
- hmox-buyer-brief
- hmox-structural-anchors (ONS data for 378 local authorities)

### Interactive valuation reports
Built 26 Nov in [VAL].
- **Where they live:**
  - Private client links: reports.richard-nicholls.co.uk/r/<10-character random link_code>/.
  - Upload page: /admin/ (password). Drop in the JSON (and the PDF), then "Check & publish".
  - /send/: a ready-made email with a mint "View your valuation report" button, plus copy-link and plain-text options.
  - /activity: who opened what. Labels: Ready to onboard, Shared figures, Clicked a next step, Engaged, Opened.
- **Infrastructure:**
  - Cloudflare Pages project `hmox-reports`.
  - KV store `hmox-report-events`, bound as `EVENTS`; admin secret held in Cloudflare.
  - Build command `node build.mjs`, output folder `dist`, Node 22.
  - No IP addresses or cookies are recorded. Events are deleted after 400 days.
- **Workflow:**
  1. Write the valuation in the Claude "sales valuation" project.
  2. Say "Final. Give me the data file."
  3. Upload at /admin/.
  4. Use Send to client.
  5. Check /activity.
- **Client actions with no GHL involvement:**
  - Book a call: Richard's Calendly, calendly.com/hmox/landlord-market-and-hmo-update.
  - Take the Tier test.
  - The checklist emails Fran (Committed Sale) or Georgia (auction).
  - "Tell Georgia I'm ready for auction".
  - "Speak with a financial planner" (Suitable Life, via sales@).
- **Report contents:**
  - figures card and "the answer in one screen";
  - "Two ways forward";
  - price tester (the route changes with price);
  - "How long it takes" timeline;
  - net-proceeds calculator (ERC and mortgage dates; the client's figures stay in their browser unless they tick "Share these figures with Richard");
  - rents;
  - Tier box;
  - evidence;
  - route and fees;
  - team and buyers;
  - onboarding checklist (20 items);
  - six embedded guides: Tier Methodology 2026, Landlord Selling Guide 2027, Committed Sale checklist, Auction checklist, HHSRS 2026 checklist, the formal PDF. Back to Resi and LDC guides are added only when relevant.

### Location Intelligence Reports (LIR)
- 69 towns live, behind the team link https://www.richard-nicholls.co.uk/hmo-location-reports.html?team=<private code> [TOOLS 26 Nov].
- **Minimum data per report:** 50 SpareRoom adverts, 50 rooms-wanted adverts, 10 sold comps.
- **Sections added on 26 Nov:**
  - "From the archive":
    - HMO X sales (auctions, Committed Sale and agency; 130 sales, 85 priced);
    - "For sale now with HMO X" (lots within 30 miles, refreshed daily);
    - older TPA sales.
  - Buy/sell/develop cards.
  - "What makes [town] tick", with "In Richard's words" from his voice notes.
  - "Making an offer with confidence".
  - News cards.
  - One final "Your next step with HMO X" panel.
- Competitor checked: hmochecker.co.uk (£15.99 a report, subscriptions from £19.99 a month) [TOOLS 25 Nov].

### Evidence engine, scans and routines
[BRIEF 13 Nov]
- **Nightly:**
  - SpareRoom room adverts (01:17 UK);
  - council registers matched to Land Registry (5 councils a night);
  - rent and yield enrichment;
  - HMO X live stock (05:41).
- **Weekly:**
  - Thursday: auction results;
  - **Friday 16:39: evidence scan.** It reads the week's valuations and comps and recalibrates every town;
  - Friday 18:13: tools refresh, which publishes the evidence packs. Comps loaded during the week reach the tools at Friday's refresh.
- **Monthly:**
  - mortgage stress-rate review;
  - owners' figures review;
  - Land Registry re-search of all 21,622 register postcodes;
  - official data check.
- **Daily:**
  - HMO news run. Flags that could change data go to docs/news/flags-<date>.md [TOOLS 26 Nov].
  - Richard's own automated PPD/HMO Register daily schedule [TIER].
- **Weighting:** Richard's valuations count double when town yields are set. A learning log flags towns where his valuations sit outside the band.
- **Field notes:** Richard dictates his weekly market view and visit notes. They go in the Drive folder **"HMO X Market Insights"**, are filed by town on Friday, and appear on reports as "Richard's market view this week" / "In Richard's words" [BRIEF; TOOLS 26 Nov].

### Databases and data holdings
[BRIEF 13 Nov]
- 320 towns calibrated (England and Wales).
- 69,338 licensed HMOs on the 102 council registers held.
- 22,807 room rents.
- 11,569 HMO sale-evidence records ("Compara-pool": comp PDFs, screenshots, price guides, auction results).
- 2,728 Land Registry completed HMO sales.
- 1,556 floor areas.
- 611 valuations in the HMO X valuation register.
- 2,696 property histories.
- 56 live lots.
- Official data for all 320 towns.

### GitHub repositories
- **RichardNichollsHMOX/HMOX-analyser-**: the "master repo" (combined). Also written as hmox-analyser-.
  - Working branch: claude/hmox-analyser-setup-o26l53.
  - Holds the tools, the Tier, GDV and LIR scripts, the skills build and the data [TOOLS; TIER].
  - Never commit dist/skill/ (it carries comparable addresses).
- **RichardNichollsHMOX/HMOX-tier-methodology-**: also written as hmox-tier-methodology-.
  - It was the separate Tier repo until 30 Oct; that work was merged into the master repo, leaving a "moved" note.
  - On 26 Nov it became the home of the interactive reports system. The branch was claude/vigilant-brown-rricr7; pushes now go straight to main.
  - It is private and holds client report data. Keep it private [VAL; TIER].
- Older Tier working branches: claude/project-setup, claude/audit-fixes [TIER].

### Cloudflare
- Pages project **hmox-reports**: reports.richard-nicholls.co.uk, plus hmox-reports.pages.dev.
- KV **hmox-report-events**.
- Web Analytics is optional [VAL 26 Nov].

### Drive, SharePoint and other folders
- **Google Drive:**
  - "HMO Registers" folder of council HMO licence registers (licence-holder names removed);
  - "HMO X Market Insights" for Richard's voice notes;
  - comp PDFs (the "comparpool");
  - the Landlord Selling Guide 2027 PDF;
  - Fran's Landlord Onboarding Checklist [VAL; TOOLS; BRIEF].
- **SharePoint:**
  - "1. HMOX Sales" stage folders:
    1. New Leads
    2. Valued
    3. (no folder found)
    4. Preparing to list
    5. Marketing
    6. SSTC (the sale-agreed stage)
    7. Completed
    8. Archive
  - "6. Health Check/4. Completed": 12 completed Health Checks with xlsx workings (Financials, Rental Data Schedule, Market Comps, licence register, P&L).
  - The "TPA Property Folders" archive.
  - Finished valuation reports are filed in SharePoint.
  - Rule: use "Request files" links; never add landlords to the site [TOOLS; TIER; PRIV].

### CRM: GoHighLevel (GHL)
- Opportunities board for sellers.
- The sales appraisal form (valuation.hmox.co.uk/sales-appraisal) feeds it, and automated emails run from it. Richard moves the cards once he has valued a property [VAL 26 Nov].
- **Workflow 1, "Website leads":** an inbound webhook that branches on request_type [WFMAP]:
  - Report started (awaiting payment);
  - Report paid;
  - Analyser run;
  - Sales appraisal request;
  - Buyer call: Auction (Georgia) or Committed Sale (Nikki);
  - Tier Test / GDV;
  - LIR order / LIR request;
  - buyer;
  - none, which notifies Richard.
- **Workflow 2:** "Value My HMO paid", triggered on payment.
- **GDV workflow:** lead types "GDV re-run" and "GDV report email request". Add a note with the report link on every branch [HOLLY].
- **Tags:** vmh awaiting payment, vmh paid, vmh priority, buyer: auction, etc.

### Other systems
- Calendly; Microsoft 365 (Outlook, SharePoint); Google Drive; Jotform; Wix; Canva; Plota (planning data, paid credits); Meta ads; Apex27 (planned stock feed) [various].
- The **"Coming soon" onboarding tool** (for Fran and Ivy) is to be scoped in December 2026 [GATES].

### Who uses what
- **Richard:** the Team Analyser, the report skills and the valuation project. He publishes the reports.
- **Holly:** GHL.
- **Fran and Ivy:** onboarding and the checklists.
- **Georgia:** auction leads and buyers.
- **Nikki:** Committed Sale buyers.
- **Valuers:** the skills and the Team Analyser, so reports are consistent whoever writes them [BRIEF].

---

## 6. Processes

### Seller journey
[TIER 30 Oct; VAL]
1. A tool (Value My HMO or the Buyer Demand Test).
2. The Tier Test.
3. Ready to Sell / self-onboarding (planned). Or the sales appraisal form, which goes to the GHL board.
4. Richard's valuation (the formal PDF plus the interactive report).
5. Onboarding with Fran (Committed Sale) or Georgia (auction). The client's checklist answers are emailed in.
6. Launch.

### Stage timings
These are the owner's own words, 26 Nov [VAL].

| Stage | Committed Sale | Auction |
|---|---|---|
| Onboard | 1–4 weeks depending on compliance and access to info | 1–4 weeks. Get the legal pack actioned immediately on instruction |
| Marketing | Database and internal network launch first, then full marketing: a 1–2 week staggered platform launch | 3–4 week high-impact campaign, never more than 5 weeks from an auction date, always exchanging pre-auction mid-cycle |
| Sale agreed | 1–2 weeks to 3–4 months, depending on value and how aspirational the price is | On the hammer or a pre-auction offer |
| Exchange | Within 56 days of receipt of draft contracts, once the buyer's reservation commitment is paid | Day of sale, with the full 10% deposit |
| Completion | Up to 14 days after exchange | 28–56 days, depending on the special conditions and HMO X advice on allowing mortgage buyers to bid |

- Time to agree a Committed Sale, by price:
  - at or below the floor: 1–2 weeks;
  - floor to asking: 2–6 weeks;
  - up to asking + 5%: 6–12 weeks;
  - aspirational: 3–4 months, "if it comes at all".
  - The two middle bands are assumptions Claude made; the owner has not confirmed them.
- **What gets results at auction:**
  - fully tenanted;
  - no title or immediate compliance concerns;
  - good access for buyers in the short window;
  - responsive to questions;
  - speed, with a full legal pack, and high intensity.
- **What gets results on Committed Sale:**
  - diligent onboarding;
  - a full financial and compliance pack;
  - selective about viewings;
  - a transparent bundle in the data room;
  - wide marketing reach.
- **Asking price versus guide price:** they "mean different things": aspiration versus demand creation.
- **X HMO and Exit Planning sit outside these timelines** because they need consultancy.
- **Portfolios and company sales** go on the off-market buyer tools [owner, VAL 26 Nov].

### Marketing channels for a listing
[VAL site.config.json]
- HMO X buyer database;
- The Deal Thread (in the Hub);
- Rightmove;
- the secure data room: buyers register, pass AML checks and name their solicitor before they can open the pack, and every view is tracked;
- weekly engagement reporting.

### Valuation process
[VAL 26 Nov; SKILLS]
- Valuations are written in a Claude project (the "sales valuation project") using the house skills and the Team Analyser.
- Each one produces:
  1. the formal PDF;
  2. a JSON data file for the interactive report. The JSON must never disagree with the PDF.
- **Checks in the data file:**
  - income equals the valuation income;
  - asking is at or above the floor;
  - the asking yield sits between the exit-planning threshold and the floor yield;
  - the auction-from yield sits above the floor yield;
  - room rents × 12 are within about 8% of income;
  - home tier is T1–T5;
  - trading band is one of sub / drift / at / settling / launch;
  - legal flag is green / amber / red.
- **Living Document protocol:** a valuation is flagged for review if the client hasn't instructed within 60 days, and re-issued after 12 months (or sooner on a material change).
  - The backlog of 30–40 old valuations is being re-issued as "updated for 2027" versions with new links. They are re-run against current evidence, never just resent.
- **Report structure** (the Sales Valuation sections referred to by the skills):
  - executive summary snapshot;
  - Section 5: Rental evidence, Tier & local market;
  - Section 6: Comparables;
  - Section 9: Route to market;
  - Notes, with the data-basis line;
  - compliance table;
  - route assessment for all five routes;
  - FAQ, and basis and disclaimer at the back.

### Valuation FAQ answers
These are the company line [VAL site.config.json]:
- **Not a RICS Red Book valuation.** It is an advisory opinion of value and recommended route to sale. It doesn't replace a lender's mortgage valuation.
- **Values on income and bricks.** The value is based on the income and the bricks-and-mortar value, and the difference is shown. Where the residential value is well above, that gap is the Back to Resi conversation.
- **An incomplete compliance file is normal.** "We work on the basis that the house is compliant and the job is to evidence it."
- **Discretion when tenants don't know** the house is for sale.
- **Lower than hoped:** "We'd rather give you a figure the market will meet than one it quietly walks past."

### Onboarding checklist
20 items [VAL site.config.json].
- **Essential: legality, safety and title**
  - HMO licence
  - lawful use (planning permission or CLD)
  - Gas Safety Certificate (CP12)
  - EICR
  - fire risk assessment
  - fire alarm certificate
  - emergency lighting certificate
  - EPC
  - Land Registry title
- **Essential: the investment picture**
  - room-by-room rent roll
  - tenancy schedule
  - 24-month occupancy record
  - annualised operating costs
- **Essential: presentation**
  - photos and video
  - measured HMO floor plan
- **Completes the pack (useful, not a blocker)**
  - PAT record
  - Building Regulations final certificate
  - legionella risk assessment
  - buildings insurance schedule
  - managing agent details
- **Status labels** [TIER]:
  - "I have it", "Need help" or "Not sure";
  - "Assumed compliant: evidence required".
- **Ready to Sell photo list** [TIER]:
  - front;
  - garden;
  - boiler;
  - fire panel;
  - noticeboard;
  - kitchen;
  - all bathrooms and en-suites;
  - all bedrooms.

### Buyer process
[GATES; LAUNCH; SKILLS]
- **Find my next HMO** brief: matches the buyer to HMO X stock.
- **"Ready to buy":** auction buyers go to Georgia; Committed Sale buyers go to Nikki.
- **Offers** usually land between asking and 10% under.
- **Buyer pricing:** the buyer market prices in 2–5% for negotiation, to cover SDLT, arrangement fees, interest rates and choice. Developers who want to flip should get a separate sales valuation [owner, TOOLS 25 Nov].
- **Measure buyer calls booked**, not just briefs.

---

## 7. Rules the owner has set

### Publishing
- **Never publish, deploy or touch the live website (Wix), GHL, Jotform, the Team Analyser database or the weekly scheduled scan without asking Richard first** [TOOLS/TIER CLAUDE.md, still in force 25 Nov].
- Exception: the reports repo fixes now push straight to main, as agreed on 26 Nov.

### Data and privacy
- **Never commit or publish client data.** No names, addresses or postcodes, and no API keys, in code. This applies to GitHub too [TIER; PRIV].
- **Customer-facing outputs** show town totals and redacted comparables only (street and postcode district). Never show a full address, a name or a source. Never name a comparable's owner, and never write a past client's address into a report [PRIV; SKILLS].
- **Land Registry data is never used for direct marketing** [PRIV].
- **Public news headlines** that name a private person are reworded or left out [PRIV].

### Report wording
- **Client-facing text never names Sprift and never promises an EPC** [TIER; SKILLS].
- **Company number** is 15730822, never 07139236. **Tagline:** "Your community of HMO experts." [TIER; GATES]
- **The Tier Test is "£99 + VAT, credited to your sales commission".** Never call it free [owner, VAL 26 Nov].
- **The analyser and tier reads are indicative, not valuations**, and not RICS. Never present the score as a value opinion on its own. The valuer's judgement wins [SKILLS].
- **Report link codes** are 10 random lowercase letters and digits. Never reuse one, and never include the client's name or address [VAL].
- **Interactive report data** must take every figure from the final valuation. Never invent a trading-position percentage; use the band. If the engine gives no trajectory, write "At inspection" [VAL].

### Tools and data
- **SpareRoom sweep:** don't try other sites, proxies or scraping services, and don't change the script without Richard's OK [TIER].
- **Never add landlords to SharePoint.** Use "Request files" links [TIER].
- **Never full-drop or replaceAll the Wix site** [TOOLS].
- **Keep the old reports domain working** when adding reports.hmox.co.uk, so links already sent don't break [VAL].
- **Tracking needs a line in the privacy policy** before reports go out widely [VAL].

---

## 8. Market facts and data

### Yields and rents
- **Tier evidence medians** (example town in the sample report) [VAL 26 Nov]:
  - T2: 1.05× the town rent, at 12.0% yield;
  - T3: 0.97×, at 12.9%;
  - T4: 0.84×, at 14.8%.
- **Typical 6-bed HMO:** about 120 m² in total [BRIEF].
- **GDV running-cost (OPEX) model** [TOOLS 25 Nov]:
  - 10% of rent plus £900 a room a year (bills included) or £720 (bills excluded);
  - EPC credits: A −300, B −250, C −100, E +150;
  - range 15–30%.
- **Shop (mixed-use) yields:**
  - London: 4%;
  - South East / South Coast / East: 6%;
  - South West / Midlands / North West / Yorkshire / Wales: 8%;
  - North East: 10%.
- **Supported-living leases:** capped at 120% of the private-rented GDV. This reflects the "Home REIT debacle".
- **Calibration example:** a surveyor's £625k valuation matched the tool at £628k with a 20% OPEX deduction [TOOLS 25 Nov].

### HMO X sales record
- 130 HMO X sales in the archive (85 priced) [TOOLS 26 Nov].
- SharePoint has 57 sales: 43 completed, 13 sale agreed.

### Regulation news watch
26 Nov run [TOOLS].
- **Scunthorpe:** Article 4 reportedly in force.
- **Pendle:** borough-wide controls proposed.
- **Luton:** consulting on HMOs and possible Article 4; no Article 4 yet. Additional licensing covers the whole borough; selective licensing covers Town Centre and Park Town.
- **Brighton & Hove:** the selective licensing expansion has been halted after a legal challenge.
- **Wales:** an eviction ban and rent controls have been proposed.
- **Renters' Rights Act:** more commencement regulations have been made.
- Licensing schemes are tracked for 265 councils.

### Competitor and market context
- hmochecker.co.uk sells per-address HMO reports from £15.99.
- Partner networks with about 80,000+ members: Property & Poppadoms, Prosperity Network, The HMO Group, Property Filter, Coho [LAUNCH; BRIEF].

---

## 9. Changes over time (newest version first)

### Prices
- **Tier Test:** free, then **£99 + VAT credited** (Nov 2026). The RRP is £299.
- **LIR:** £29 + VAT (RRP £99), changed on **18 Nov to £99 launch / £199 RRP**. The bespoke report is from £299.

### Plans and targets
Removed from this copy: management figures (budgets, revenue and profit plans, sales targets). Ask Richard.
- **Valuation register:** 580 valuations (PRIV), against 611 (BRIEF 13 Nov). The number grows weekly.
### Systems
- **Report publishing:** GitHub upload replaced by the **/admin upload page** on 26 Nov. Reports are sent with **/send** (a button email) instead of a bare URL.
- **Report domain:** reports.hmox.co.uk was planned; **reports.richard-nicholls.co.uk is live** until hmox.co.uk DNS comes in-house.
- **Tier work:** moved from its own repo and chat into the **master repo (HMOX-analyser-) and master chat** on 30 Oct.
- **Engines:** Tier and Buyer Brief now score with the shared analyser engine. The borrowing stress rate went from 7.5% to **6.5%**.
- **Family-home value** (bricks and mortar): it is now shown for information only (option 3, 30 Oct). Scores still use the town's typical house price.
- **Lead capture:** Jotform was the primary route; it is now the back-up behind **GHL**.
- **Report delivery:** the tracking webhook to GHL is switched off. Reports work **without GHL** for now (26 Nov). Activity tracking runs on Cloudflare KV.

### People
- **Fran:** onboarding processor now; **team manager** from 2027, with the onboarding tool and Ivy taking the admin.
- **Committed Sale leads** go to Nikki, and Auction leads go to Georgia (this is still the routing).

---

## 10. Open questions and work in progress
(as of 26 Nov 2026)

### Interactive reports
- The sales valuation project needs three knowledge files uploaded and a first test. The backlog of 30–40 re-issues starts "tonight" (26 Nov) [VAL].
- Fill in the self-onboarding link and the Suitable Life link in site.config.json [VAL].
- Add the privacy-policy line for report tracking.
- Optional GHL webhook later "when Holly has time" [VAL].

### Owner to confirm
- The real average solicitor fee.
- Whether auction onboarding (£400) is deducted.
- How "buyer pays half" interacts with the £5k minimum.
- The route price bands.
- The middle sale-agreed timing bands [VAL].

### Documents and website
- Update the Tier Methodology booklet: page 17 still says the Tier test is free.
- Nikki's original photo URL on hmox.co.uk is broken [VAL].
- Website launch checklist [GATES]:
  - fix the footer company number and tagline;
  - privacy notice to cover the tools and GHL;
  - calls to action to point to the tools;
  - confirm the webinar running order with Holly.

### Tools
- **LIR:**
  - automated delivery after payment (Holly's "Location report paid" step only notifies the team);
  - no tools.hmox.co.uk page yet.
- **LIR items still to build:**
  - per-town governing fact;
  - commute geometry;
  - an Article 4 cross-check per town;
  - licensing fees and room minima;
  - HMO X's own deals as gold-standard comps [TOOLS 25–26 Nov].
- **GHL steps for Holly:** five GDV fields, the report-email and re-run branches, an "Add note" on every branch, and checking the GDV Paid email on the first real order [HOLLY].
- **Self-assessed Health Check tool** (to replace the manual Health Check reports): pricing and refund rules, and calibration against 12 completed Health Checks [TIER].
- **Ready to Sell / self-onboarding tool:** file storage and sign-in decisions [TIER; GATES].
- **Onboarding tool scope** with Fran (December).

### Launch, people and decisions
- **Launch:** Tue 1 Dec webinar, website and tools together, with partner discount codes (codes removed from this copy) and Meta ads [LAUNCH; GATES].
- **Recruitment:** the senior salesperson (advert, interviews, offer by 18 Dec).
- **Decisions for Richard:**
  - partner deal (discount, commission or both);
  - commission rules (details removed from this copy).
- **Privacy notice:**
  - confirm Anthropic Teams terms;
  - who may paste client details into Claude;
  - whether report chats are deleted after filing [PRIV].
- **Hosting:** move hmox.co.uk hosting and DNS from BYB (copy the MX records first).
- **Wix load:** a "429 Too Many Requests" error on 30 Oct shows the risk. Moving the tools to HMO X's own hosting is the lasting fix [LAUNCH].

### Coverage gaps
- Most of the [TOOLS] transcript (24 Oct to 25 Nov) was read only through its latest summary and its artifacts.
- These artifacts were not opened: Team Analyser, Evidence Engine, 2027 P&L and budget slides, Investor One-Pagers, New GHL Fields.
- Details of "the Hub" platform were not found in what I read.
