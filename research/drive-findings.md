# HMO X Ltd: Google Drive research findings

Research date: 26 November 2026. Read-only review of the Google Drive "Template reports" folder (all 66 items listed) plus related Drive files. Every fact is followed by a source tag and that file's Drive modified date. The full titles and IDs are listed in section 11. Example reports are referred to generically, and no client names, client property addresses or client personal data are reproduced.

**Source tags used below**

| Tag | File (modified) |
|---|---|
| SV-CS | Sales Valuation Report Example - Committed Sale (2026-06-08) |
| SV-AU | Sales Valuation Report Example - Auction (2026-06-08) |
| GDV | Example GDV appraisal (2026-06-08) |
| EPR | Exit Planning Example Template (2026-06-08) |
| HHC | Health Check Example Template (2026-06-08) |
| BVP | Buyer Valuation Pack Template (2026-06-08) |
| BHR | Buyer_Handover_Report_Example (2026-06-08) |
| LIR-T | HMO_X_Location_Intelligence_Report_TEMPLATE (2026-06-08) |
| PI-v4 | HMO_X_Project_Instructions_v4.docx (2026-06-09) |
| SWX | Selling_with_HMO_X_Seller_Guide (2026-06-19) |
| LSG27 | HMO_X_Landlord_Selling_Guide_2027 (2026-10-24) |
| TM2 | Tier Methodology.pdf, Edition 2 (2026-10-25) |
| BTR | Back to Resi with X HMO, seller guide (2026-10-26) |
| Spine | HMO X Core Values May 2026.pdf, titled "The Core Spine" (2026-05-17) |
| Team | HMO X Team and Team Roles v1.1 (2026-06-08) |
| Nikki | HMO_X_Nikki_Role_Definition.md (2026-06-25) |
| BSP | FINAL_HMO X Brand Starter Pack (2025-09-11) |
| BPS | Brand Positioning Statement - HMO X FINAL (2025-07-14) |
| Gloss | HMO X Glossary v1.1 (2026-05-19) |
| HubArch | HMO_X_Hub_Membership_Architecture v2 (2026-06-08) |
| HubFlow | HMO_X_Hub_Structure_and_Flow_1 (2026-06-08) |
| AOC | HMO_X_Auction_Onboarding_Checklist (2026-06-08) |
| LOC | HMO_X_Landlord_Onboarding_Checklist, Committed Sale (2026-06-08) |
| CSBG | Committed Sale Buyer Guide (2026-06-08) |
| CSTC | Committed Sale Buyer T&Cs (2026-06-08) |
| BEH | Buying_an_Established_HMO v2.0 (2026-06-08) |
| FinSum | HMO_X_Financial_Summary.xlsx (2026-06-08) |
| Bio | Richard_Nicholls_Bio_2026.docx (2026-06-08) |
| LDC | HMO X - Applying for an LDC (Seller Guide) (2026-07-08) |
| HHSRS | HMO X Landlord Checklist HHSRS (2026-07-22) |
| TTL01–05 | HMO_X_Through_the_Lens_01 to 05 (all 2026-06-08) |
| Timeline | HMO_X_Ownership_Timeline.png (2026-10-22) |
| Spec | report-data-spec.md (2026-11-26) |
| Config | site.config.json (2026-11-26) |
| IR | Interactive sales valuation example, HMOX-SV-…-interactive.html (2026-11-26) |
| VMH | Free HMO Buyer Demand Test / Value My HMO (2026-11-26) |
| AuctRM | READ ME - what to drop in here (2026-11-25) |
| MIRM | READ ME - how to add your notes (2026-11-12) |
| EIG | HMO X Auctions.pdf, EIG results export (2026-11-25) |
| FB | Richard's FB Posts (2026-04-25; posts mostly 2017–2021) |

**How to read dates.** The Drive has three layers. The oldest is the brand material from 2025. The middle layer is a June 2026 set of report templates and guides. The newest layer, from October and November 2026, is the selling guide, Tier Methodology Ed. 2, Back to Resi, site.config, the data spec, the interactive report and Value My HMO. Where these layers disagree, the October and November 2026 files should be treated as current (see section 10).

---

## 1. Brand

### Colours
- **Primary (brand pack):**
  - Off black: Pantone Neutral Black C, CMYK 0/0/0/95, RGB 40/40/41, **#282829**.
  - Teal: Pantone 333 C, CMYK 66/0/44/0, RGB 77/227/189, **#4DE3BD**.
  - White **#FFFFFF**.
  - Primary colours are used "for the logo and text". [BSP 2025-09-11]
- **Secondary pastels, for backgrounds:** **#FAD9DE** (pink, labelled Pantone 705 C), **#FCF9D2** (cream), **#D9E8F0** (pale blue, Pantone 656 C), **#E2FBE1** (pale green). [BSP 2025-09-11]
- **Report palette, "locked":**
  - Charcoal **#28282A** for body text, primary marks and table headers.
  - Mint-teal **#4DE3BD** for accent: rules, callout edges, chart highlights and the logo cross.
  - Deepened teal **#1F8E74** for section sub-headings and secondary headings, legible on white.
  - [PI-v4 2026-06-09]
- **Web report tokens (newest):**
  - --mint #4DE3BD, --mint-soft #E3FAF3, --mint-pale #F2FCF8
  - --ink #282829, --ink-2 #4A4A4F, --muted #7C7C86, --line #E6E6EA
  - --green **#0C886B** (links and eyebrows), --paper #FFFFFF, --wash #F6F7F7
  - --amber #E7A93B / #FFF5DF, --rose #E25975 / #FDE9EE, corner radius 22px
  - [IR 2026-11-26]
- **Note on the ink colour:** the brand pack gives #282829, PI-v4 gives #28282A and the web report uses #282829. The difference is negligible but should be standardised. The secondary teal also differs between documents: #1F8E74 in PI-v4 versus #0C886B on the web.

### Fonts
- Modern Era Bold is the primary font for headings, subheadings and display. It is a paid font (familytype.co). [BSP 2025-09-11]
- Plus Jakarta Sans Bold and Regular is the secondary font, for body copy (Google Font). [BSP 2025-09-11]
- In reports, Plus Jakarta Sans is used throughout as "the freely available substitute for the paid Modern Era brand font". [PI-v4 2026-06-09]
- The web report loads Plus Jakarta Sans 400–800 only. [IR 2026-11-26]
- Font files in the Template reports folder:
  - Plus Jakarta Sans: variable plus 14 static styles, OFL licence. [README.txt 2025-04-24]
  - ModernEra-Bold in .otf, .woff, .woff2, .css and .html, with an EULA.txt. [all 2025-04-24]

### Logo
- **Primary logo:** charcoal wordmark with a mint cross, on white. It is used on the white report cover and in the running header. [PI-v4 2026-06-09]
- **White logo variant:** for dark backgrounds only. [PI-v4 2026-06-09; BSP 2025-09-11]
- The brand pack shows "Primary logo" and "White logo" panels. Some mock-ups render the wordmark as "HMOX". [BSP 2025-09-11]
- **Logo file:** "HMO X_Primary.jpg", ID 17M_ONkN1bIGS8kyNiP3cETOurNG-3Z6o, modified 2025-04-24, in Template reports. The image content could not be read through the connector.
- Other logo files exist, for example logo_transparent_background.png and white_logo_dark_background.jpg (2024-11-07), but they sit in a folder named "P2P". They are probably not HMO X; this was not verified.
- **Imagery categories:** "Aspirational" and "Lifestyle and People". [BSP 2025-09-11]

### Taglines
- **Current house strapline:** "Your community of HMO experts."
  - Used on almost every 2026 report cover and footer. [SV-CS, EPR, BVP, LSG27, TM2, Config 2026-11-26]
  - Config sets it as company.tagline. [Config 2026-11-26]
- **Second strapline:** "Where expertise drives opportunity." Used as the cover line on the Health Check template and as the Core Spine strapline:
  - "The expertise is the prerequisite. Opportunity is the consequence." [HHC 2026-06-08; Spine 2026-05-17; BSP 2025-09-11]
- **Other lines:**
  - "STRATEGY TODAY. FREEDOM TOMORROW." [SWX 2026-06-19]
  - "Hub Lite is the door. The Hub is the room." [BVP, BEH, TTL series 2026-06-08]
  - "Buying well. Owning well. Selling well." [BEH 2026-06-08]
  - "Priced as a transaction. Delivered as a partnership." [SWX 2026-06-19]
  - "The route follows the valuation, not the other way round." [LSG27 2026-10-24]
  - "We aren't chasing the highest reserve. We're chasing the highest sale." [SV-AU, AOC 2026-06-08; LSG27]
  - "One HMO ecosystem. Wherever you are in the cycle." [Timeline 2026-10-22]
  - "Good HMOs used to sell for great money, and now great HMOs sell for good money." (Richard's line) [SWX 2026-06-19]
  - The manifesto sentence: "Using the Tier Methodology across everything, a new way for people to assess, appraise, develop, operate, manage, optimise, de-risk and analyse any HMO." [Spine 2026-05-17; HubArch 2026-06-08]
- **Older 2025 brand messages:**
  - "HMO X: Your go-to community of HMO experts."
  - "HMO X: Expertise drives opportunity."
  - "Expert support, unrivalled know-how. HMO X is your partner for life."
  - "Be part of the HMO X ecosystem for maximum success."
  - [BPS 2025-07-14]
  - "Your community of property experts." appears in the brand-pack mock-ups and the HHSRS checklist footer. [BSP 2025-09-11; HHSRS 2026-07-22]

### Tone of voice
- **2025 positioning:** "Confident, expert, and approachable… keep it light, friendly, and supportive… easygoing, community-driven feel." [BPS 2025-07-14]
- **2026 house style:**
  - British English, plain prose, no emojis, body copy not bolded.
  - "a specialist briefing a client, not a salesperson closing one".
  - Three non-negotiables: "Earned, not pitched. Documented, de-risked, delivered. A plan, not information."
  - [Team 2026-06-08; Spine 2026-05-17]
- "We do not pitch. We brief." "We do not sell information. We sell clarity and decisions." "We do not promise outcomes we cannot underwrite." [Spine 2026-05-17; SWX 2026-06-19]
- Professional specialist voice, no marketing register, no emojis. [Nikki 2026-06-25]
- Tricolons are used only "where they earn their keep". [Spine 2026-05-17]
- **Report tone:**
  - Premium consultancy: "a seasoned investment analyst, not a letting agent, not an academic, and not a generic AI".
  - Third person for analysis; first person only in the Strategic Conclusion.
  - Direct, active sentences.
  - No estate-agent language ("stunning", "incredible opportunity", "going fast").
  - Hedge only where real uncertainty exists.
  - [PI-v4 2026-06-09]
- Web data: "short, direct, British English, no hype". [Spec 2026-11-26]
- **"HMO X Operator Rule" callout:** a one-sentence non-negotiable that states what good looks like and the consequence of falling short. Example: "Self-management is a professional discipline, not a cost-saving exercise." [Spine 2026-05-17]
- **Four-anchor wrapper:** every Hub piece closes on 1 Lens, 2 Methodology, 3 Value, 4 Next step ("Page to Portfolio"). A piece that cannot fill all four is not published. [HubArch 2026-06-08]
- **Historic voice:** Richard's social posts from 2017–2021 are informal and sometimes profane. Useful for history, but not the current standard. [FB 2026-04-25]

### Report house style rules
- **Page and layout:**
  - A4 page; manual contents table, because the LibreOffice auto-TOC is unreliable.
  - Confidential running header, for example "/ SALES VALUATION · Page n · property · client · CONFIDENTIAL".
  - Running footer "HMO X · hmox.co.uk · hello@hmox.co.uk · 0330 44 15 888 · Report Ref · Page n".
  - Build tools: Node.js docx for .docx, WeasyPrint or ReportLab for PDF; output both. Quantitative work is computed in Python.
  - [PI-v4 2026-06-09; SV-CS 2026-06-08]
- **Cover block:**
  - "/ SERVICE NAME" eyebrow, then property and descriptor line.
  - Prepared for, Prepared by (named valuer and title), Report date, Service.
  - Status ("Initial appraisal — subject to inspection & verification").
  - Reference HMOX-<type>-<code>-001, Version v1.0.
  - "CONFIDENTIAL — PRIVATE & ADVISORY", notice paragraph, tagline.
  - [SV-CS, EPR, HHC, BHR 2026-06-08]
- **Reference prefixes:**
  - SV (sales valuation), AV (auction valuation), GDV, EPR (exit planning), HHC (health check), BVP (buyer valuation pack), BHP (buyer handover), LIR (location intelligence).
  - Guides use HMOX-GUIDE-SELL-001 and HMOX-GUIDE-BTR-001.
  - The automated tool uses HMOX-BDT-<date>-<code>.
  - [respective docs; VMH 2026-11-26]
- **Evidence and number rules:**
  - Every factual claim carries a named source and date.
  - Yields to 1–2 decimal places, matching source precision (12.4% for modelled figures, 13.31% for a cleared print).
  - Give the core cluster with any range.
  - Round working valuations to the nearest £5,000.
  - "£" before figures; figures, not words.
  - State bills-inclusive or bills-exclusive on every rent.
  - Never average asking, auction-clearing and sold yields.
  - Flag outliers above 18%.
  - [PI-v4 2026-06-09]
- **Every output carries:** a version number, date, named author, defined scope, and cited sources; yields are broken down, never averaged. [Spine 2026-05-17; SV-CS 2026-06-08]
- **Lender print-exclusion policy:** never print named live lender criteria, LTV ceilings or ICR thresholds; tell the reader to "confirm live with a broker". [PI-v4 2026-06-09]
- **Data gaps:** flag them, never fill them by estimation. [PI-v4 2026-06-09; FinSum 2026-06-08: "we would rather see a gap than a figure we cannot stand behind"]
- **Source conflicts:** log them "never silently resolved" and carry them as actions. [BHR 2026-06-08]
- **Living Document versioning:** v1, v1.5, v2. [BHR 2026-06-08]
- **Web reports:**
  - Every figure must match the formal PDF exactly; publish only when Richard has approved the figures.
  - Private link code: 10 random lowercase characters, never containing the client name or address, never reused.
  - [Spec 2026-11-26]

---

## 2. Company

### Who we are
- **Legal and contact details:**
  - HMO X Ltd, Company No. 15730822, VAT 468721068. [SV-CS 2026-06-08; CSTC 2026-06-08]
  - A separate selling entity, **HMO X Auctions Ltd**, Company 15626888, VAT 477442169, issues auction-side documents (for example the buyer handover). [BHR 2026-06-08]
- **Self-description:**
  - "The UK's specialist community for HMO investors — a full-stack advisory and transactional business built around the HMO asset and the operator behind it, end to end."
  - The remit covers acquisition, operating, optimisation, refinance and resale.
  - [SV-CS 2026-06-08; Spine 2026-05-17]
- **What HMO X is not:** "not a generalist property training group… not a single-host content channel… not a community-first membership platform". The Hub is one part alongside the transactional arm and the report/consultancy arm. [Spine 2026-05-17]
- **Asset-class focus:** "The HMO is the asset class HMO X is built for. Not buy-to-let. Not commercial. Not serviced accommodation." [Spine 2026-05-17]
- **Newer wording:** "HMO X makes the complex world of HMO investing accessible: a nationwide community and a full-service ecosystem for investors at every stage of the journey." [LSG27 2026-10-24]
- **Four arms ("the chassis"):**
  - Transactional: Committed Sale, Auctions, Bespoke Sales, Deal Thread.
  - Report and consultancy.
  - Specialist consultancy: planning, compliance, finance.
  - Education and community: Hub Lite, Hub.
  - [Spine 2026-05-17]

### History
- **Origins:** HMO X was "born from the wealth of experience of Platinum Property Partners (PPP), a business with 18 years of proven success in the HMO investment space". PPP ran a franchise model aimed at 40+ corporate professionals; HMO X "flipped this model on its head" by removing barriers to entry through the "HMO X Club". [BPS 2025-07-14]
- About-text repeats "eighteen years of HMO investment expertise developed through Platinum Property Partners". [SWX 2026-06-19]
- **Auction house:** "the UK's first HMO-specific auction house". Launched "Summer 2025" [GDV, BVP 2026-06-08; Spine 2026-05-17] or "June 2025" [EPR, HHC 2026-06-08; Gloss 2026-05-19].
- The Tier Methodology was codified to v2.0 in May 2026 [Spine 2026-05-17]; the Tier Methodology booklet is Edition 2, 2026 [TM2 2026-10-25].
- **Richard Nicholls' background:**
  - Estate agency roles (regional valuer, trainer, branch manager) and sourcing around 2008–2012.
  - Then a predecessor HMO sales business (The Property Advantage), quoting "less than 3% fall through rate".
  - [FB 2026-04-25, historic]
  - Described as "a qualified, time-served residential estate agent since the turn of the century". [LSG27 2026-10-24]

### Mission, vision and values
- **Vision:** "To be the go-to community for HMO investors, where expertise, education and collaboration help individuals thrive throughout their HMO property investment lifecycle." [BPS 2025-07-14; Spine 2026-05-17]
- **Mission:** "To provide a comprehensive, expert-led ecosystem that empowers HMO investors to succeed, no matter where they are on their journey." [BPS; Spine]
- **Five values, in priority order:** Experts, Approachable, Optimistic, Professional, Community-driven. Each has a "What clients can hold us to" standard. [Spine 2026-05-17; SV-CS 2026-06-08; SWX 2026-06-19]
  - The test for every output: "If a piece of HMO X work cannot withstand the scrutiny of a working valuer, a working surveyor, a working operator or a working solicitor, it should not have left our desk."
- **Three operating standards:**
  - De-risked. Documented. Delivered.
  - A plan, not information.
  - A partnership that continues long after completion.
  - [Spine 2026-05-17]
- **Four operating commitments:**
  - Experience matters.
  - Professionalism is the floor, not the ceiling.
  - Sustainable portfolio growth.
  - Development is for the experienced, not the keen.
  - [Spine 2026-05-17]
- **Rejuvenation thesis:** refurbishing tired, well-located stock beats creating new HMOs. Rejuvenation costs 40–60% of new-build cost per room. Tier 4/5 stock inside Article 4 zones holds irreplaceable grandfather rights. [Spine 2026-05-17]
- **Five questions every conversation should answer:**
  1. Which tier is the asset in today?
  2. Which tier will it hold across the hold period?
  3. What does that mean for income, valuation and leverage?
  4. What would it cost to move up a tier, or what is the risk of sliding?
  5. What is the right HMO X next step?
  - [Spine 2026-05-17]
- **Target audience and personas:**
  - Triage types: Buyer, Seller, Operator, Newbie, Industry Contact.
  - Lifecycle personas: Aspiring Investor, Portfolio Builder, Portfolio Optimiser, Exit Strategy Investor, Legacy Investor.
  - [Spine 2026-05-17; BPS 2025-07-14]
- **Five-year aim:** "To professionalise the HMO market by raising the standard of the work investors, operators and sellers receive at every stage." [Spine 2026-05-17]

### Addresses and contacts (business only)
- **Registered office (full form):** Unit 5, Branksome House, Discovery Court Business Centre, 551–553 Wallisdown Road, Poole, Dorset BH12 5AG. [BVP, EPR, HHC, BEH 2026-06-08]
- **Short form:** Discovery Court Business Centre, Wallisdown Road, Poole, BH12 5AG. [CSTC 2026-06-08; LSG27 2026-10-24; Config 2026-11-26]
- **Phone:** 0330 441 5888, also written "0330 44 15 888". [all 2026 docs]
- **Email:**
  - hello@hmox.co.uk (reports and general).
  - sales@hmox.co.uk (sales and onboarding). The newest config uses sales@ as the company email. [Config 2026-11-26]
  - Auction: georgia.hopewell@hmox.co.uk. [SV-AU, AOC 2026-06-08; Config]
- **Web and booking links:**
  - www.hmox.co.uk.
  - Booking: calendly.com/hmox/landlord-market-and-hmo-update.
  - CSA booking: valuation.hmox.co.uk/csa.
  - Tier test: richard-nicholls.co.uk/tier-methodology.html and tools.hmox.co.uk/tiertest.
  - Buyer demand tool: tools.hmox.co.uk.
  - Web reports: reports.richard-nicholls.co.uk. This is a temporary domain, to become reports.hmox.co.uk.
  - [Config 2026-11-26; VMH 2026-11-26; TM2 2026-10-25]
- **Social handles:** LinkedIn @hmox, Instagram @hmo_x_official, YouTube @HMO_X_official. [HMO_X_Tier_Methodology_Explainer 2026-06-08]
- **Outdated contact details:** see section 10. The GDV example carries a Havant address and an 01743 number.

### Memberships and redress scheme
- **Not found.** No Drive document seen mentions a property redress scheme (The Property Ombudsman or the Property Redress Scheme), Propertymark, Client Money Protection or RICS membership. A Drive full-text search for these terms returned nothing relevant.
- All reports state explicitly that they are **not** RICS Red Book valuations. [all valuation docs]
- **Auction platform partner:** Essential Information Group (EIG). Committed Sale terms are "in association with" EIG. [CSTC 2026-06-08; SV-AU 2026-06-08]
- **Recommendation for the course:** confirm the redress-scheme membership with Richard before the course states one.

---

## 3. Team

**Current core team (late 2026)** [Config 2026-11-26; LSG27 2026-10-24; IR 2026-11-26]

| Name | Role | Responsibilities and notes |
|---|---|---|
| Richard Nicholls | Senior Valuer & BDM. Also styled "Senior Valuer & HMO Sales Lead", "Senior Valuer" and "HMO Valuation Specialist". Managing director, lead valuer and methodology lead [Nikki]. "Founder of HMO X" [GDV]. | Every client valuation and report; owns the analytical voice; author and creator of the Tier Methodology; 20+ years. Hosts the weekly Tuesday Hub live / Weekly Community Call; writes market commentary; senior client relationships; sets every auction guide and reserve [SV-AU]. Every customer-facing output goes through Richard "until alignment is signed off in July 2026" [Spine 2026-05-17]. Routing through Richard is "a quality point, not a control point" [Nikki]. |
| Richard Parsons | Valuations Coordinator [Config], "Seller Triage" [LSG27] | First port of call for landlords thinking of selling, from one HMO to a portfolio. Triages inbound vendor enquiries; 15+ years as an HMO investor and owner; speaks to 30+ landlords a week. Does the Trello prep on the operator/seller flow [Spine]. Author of the "Valuations and Bespoke Sales Playbook v1.0" (referenced, not found) [Spine]. |
| Francesca (Fran) Perry | Office Manager & Client Onboarding | Takes a property from agreed instruction to listing-ready and compliant; first contact for appraisals and reports and for every Committed Sale onboarding; 200+ HMOs onboarded. Owns the Committed Sale onboarding checklist ("Fran's checklist"). Training as second valuer [Nikki 2026-06-25]. |
| Georgia Hopewell | Auction Manager | Runs every auction end to end: seller appraisals and onboarding, lot preparation, legal-pack reviews, the auction cycle, bidder support, pre-auction offers through to completion. Allocates auction lots to the broker. 7+ years in property, 5 years in conveyancing. Owns the auction checklist. |
| Nikki Yearsley | Sales Broker / Dedicated Sales Broker | Owns Committed Sale end to end, from instruction (after Fran's onboarding) to completion, plus auction lots allocated by Georgia. Buyer and seller liaison. 9+ years in property investment; £12m+ of HMO sales. Moved from self-employed to employed in June 2026; reports to Richard with a weekly Monday one-to-one [Nikki 2026-06-25]. |
| Kirby Butcher | Sales Progression Specialist | Takes every sale from agreed to completed; clears conveyancing blockers with buyers, solicitors and brokers. Previously "broker support and sales progression; coordinates self-employed broker team; lead allocation; escalation point" [Team 2026-06-08] and "property sales team manager" [Spine]. |
| Holly Hunt | Marketing Lead | External voice, listing marketing, database email programme, brand guidelines and tone of voice, Hub visuals. Named post-completion mentoring lead for the gifted buyer year [Spine 2026-05-17; BEH 2026-06-08]. |
| Ivy Comendador | Sales Admin Support (to Fran) | Listing preparation and onboarding support; Friday matching cycle; listing build; compliance check and P&L diagnostic [Team; Spine]. |
| Eric Canete | Auction Admin Support (to Georgia) | Enquiry and registration admin; Apex27 sales inbox and the Apex27-to-GHL Zapier link [Spine]. |
| Lucy Donovan | Hub and non-property product sales (self-employed) | 15-minute triage call for every Hub Lite registration; GHL Opportunities board; Hub community coordination and member onboarding; target of 300 Hub sign-ups in Year One. Routes buyer signals to sales [Team; Spine; Nikki]. Not listed in the October 2026 Selling Guide team page. |

**Other people**
- **Earlier self-employed brokers:** Damon, Eni, Nikki, Mike D, Asif. [Team 2026-06-08]
- **Board of portfolio landlords:** Jon Rose, Paul Kutchera, Mike Hedgecox, Paul Watson. [LSG27 2026-10-24]
- **Hitesh:** ad campaigns and Go High Level (GHL) support; owns the five-point GHL nurture. [Team; Spine]
- **"Rachel":** named in the Hub "bench" list [BVP, BEH 2026-06-08] but not identified anywhere else. Clarify with Richard.

**Team model and targets**
- **Property team:** Richard, Fran, Kirby, Georgia, Nikki, Holly, Ivy and Eric, run as "one cross-disciplined unit rather than separate auction and sales camps". [Nikki 2026-06-25]
- **Shared target:** ten exchanges per month across auctions and sales. [Nikki 2026-06-25]
- **Distributed Hub leadership since May 2026:**
  - Richard: content and community.
  - Holly: visuals, brand and tone, mentoring.
  - Lucy: community management.
  - The three meet weekly.
  - [Spine 2026-05-17]

**External bench ("Power Team")**
- **Alice Ibbotson, Property Shield:** compliance, legislation and landlord defence. Former HMO licensing officer and Tier 2 fire risk assessor. Writes the monthly Compliance Briefing; escalation point for the AI Compliance Scan. [Config; Team; HHC]
- **Carianne Wells, Well Planned:** planning and licensing; Article 4; LDC; planning history; council representation. Has her own high-end portfolio. [Config; Team; LDC 2026-07-08]
- **George Sanford, Vibe Finance:** award-winning specialist HMO and bridging mortgage broker; product, refinance, ICR and ERC questions. Author of the Financing & Leveraging module. [Config; Team; BEH]
- **Managing agent collective:** Neil Baldock, Damon Akerman, Tu Nygwyn, Jennifer Dunwell and Wendy Whittaker-Large, authors of Module 5 of Our Fundamentals. [Spine 2026-05-17]
- **Recommended solicitor:**
  - WM Legal [AOC, LOC 2026-06-08; IR 2026-11-26].
  - Isaacson's is named as the "legal partner" [Spine 2026-05-17]. See section 10.
- **Financial planner referral:** Suitable Life. [IR 2026-11-26]

**Routing table: who handles what** [Team 2026-06-08]
- Sales valuation, tier and three-scenario position → Richard.
- Onboarding, listing build and client journey → Fran.
- Auction appraisals and the auction cycle → Georgia.
- Sales progression and lead allocation → Kirby.
- Marketing → Holly.
- Hub membership → Lucy.
- Compliance → Alice.
- Planning, Article 4, LDC → Carianne.
- Finance and ERC → George.
- Ads and GHL → Hitesh.
- **Outside HMO X's remit** (use this exact phrase), each with a named referral:
  - Tax → specialist property tax adviser.
  - Mortgage product, lender and ERC → George Sanford.
  - Specialist planning → Carianne or a chartered town planner.

---

## 4. Services and prices

All prices are plus VAT. The **current** set is taken from the October and November 2026 sources [LSG27 2026-10-24; TM2 2026-10-25; Config 2026-11-26; VMH 2026-11-26; IR 2026-11-26]. Older figures are in section 10.

**Current prices**

| Service | What it includes | Fee (current) | Turnaround / timeline |
|---|---|---|---|
| Free HMO valuation / bespoke sales appraisal | Opening valuation by Richard; free 30-minute strategy call per LSG27 | Free | n/a |
| Value My HMO / Buyer Demand Test | Instant automated report: likely sale range, suggested asking price, buyer-demand score 1–5, five market reads, speed-vs-value ladder, routes [VMH] | Free | Instant, by email |
| Tier Test (full) | Home tier, what holds it back, rent vs tier, a lender's view, evidence pack | £299, launch price £99, "credited to your sales commission" [VMH; Config; IR] | Online |
| Consultancy Sales Appraisal (CSA) / strategy call | 30 minutes with Richard: should I sell, when, how, which channel | £150, credited against the route chosen; does not include Hub [TM2; VMH; Spine] | 30 minutes |
| Committed Sale | Structured private treaty; AML-vetted buyers; £3,500 reservation deposit; 56-day exclusivity; contractual exchange commitment; full onboarding pack; Hub Seller's Plan | £400 onboarding (deducted from commission on completion) + 2% commission, minimum £4,000 | Typically 90–180 days to exchange; completion up to 14 days after exchange |
| HMO X Auctions | Keen guide, 3-week intensive campaign (3–5 weeks in VMH), weekly reporting, fixed date, Deal Thread pre-auction exchange | £400 onboarding (not deducted [Config]) + 2.5%, minimum £5,000. Buyer's-premium option passes half to the buyer, so the effective seller rate is 1.25% | 30–60 days to hammer; completion 28–56 days after exchange [Config] |
| Exit Planning Report | Forward advisory, 12–36 months: optimisation thesis, room-by-room rent sensitivity, rent-review strategy, value bridge, compliance closure, phased plan, two launch windows | £995 first HMO; £200 each additional HMO in the same market (cross-market portfolios quoted individually) | Plan horizon 12–36 months |
| Back to Resi (X HMO) consultation | Site visit; three-way valuation; vacant-possession plan; holding costs; priced remedial works; planning and route | £995, credited against commission on completion. Sale fee 2% (minimum £5,000) on Committed Sale terms for all three routes | 6–18 months |
| HMO Health Check | Hold-and-review diagnostic on a held/refinance basis: Twelve Working Metrics, spec assessment, intervention plan, compliance, includes a visit by Richard, re-baselined at 6 and 12 months | £995 per HMO, no multi-discount [HubArch] | No fixed window |
| Bespoke non-sale valuation / Established HMO Client Report / Established HMO Appraisal | Deepest manual valuation for financing support, refinance, partner buy-outs, disputes, divorce | £395 [VMH; TM2] | Not stated |
| GDV Appraisal | Development or conversion: refinance and sales GDV, blended ERV, leverage trap, build-cost check | Not priced in current docs; £395, 2–4 day desktop turnaround in May 2026 [Spine] | 2–4 days (May 2026) |
| Buyer Valuation Pack | Tier diagnosis, B&M vs investment route, comparables, lender/surveyor guidance, Committed Sale terms | £195 standalone [Spine 2026-05-17]; standard on every HMO X listing | Not stated |
| Property Information Report (PIR) | "Every buyer gets a PIR with their purchase": full compliance bundle plus due-diligence, valuation and conveyancing data | Included with purchase [Timeline 2026-10-22] | n/a |
| Location Intelligence Report | Full market analysis to the 15-section standard | Not priced | Not stated |
| Add Value Report / Refinance Opinion | Rejuvenation appraisal for T4/T5 stock / lender-side refinance read | Not priced | Not stated |
| Hub (paid membership) | Tuesday Live (7pm); Deal Thread with 48-hour early visibility; Location & Market Intelligence; monthly Compliance Briefing; two six-week courses a year (RRA in spring, HMO Development in autumn); fortnightly Deal Clinics; Quarterly Deal Reviews; source-to-order; 10% off core suite plus Power Team rates; five lens spaces | £499 a year [HubArch; BVP June 2026]. Newest: "Join the HMO X Hub free: no membership fee until 31 December 2027" [VMH 2026-11-26] | Annual |
| Hub Lite | Free gated layer: 3 chassis pieces plus 8 Our Fundamentals modules, Tuesday Bitesize | Free | n/a |

**Hub entitlements and bundles**
- Every paid report includes 12 months of Hub membership; the CSA call does not. [TM2 2026-10-25; IR]
- Every HMO X buyer gets a gifted 12-month Hub year (the "Type A" year) from completion. [BVP; Spine; Gloss]
- Health Check and Exit Planning include 12 months of Hub. [HubArch 2026-06-08]
- GDV Appraisal clients get 10% off the Hub. [HubArch 2026-06-08]
- Every Committed Sale onboarding includes the Hub Seller's Plan. [Spine; SWX]

**Other charges and commercial guardrail**
- Typical seller's solicitor fee for an HMO investment sale is £1,500–£2,500 + VAT; the calculator default is £2,100 including VAT. [Config 2026-11-26]
- **Hub guardrail:** the Hub must never undercut a transaction or a paid report. [HubArch 2026-06-08]

---

## 5. Sales routes and process

### Choosing the route
- **Core principles:**
  - "The route follows the valuation, not the other way round."
  - Every principal route is run in-house, so the recommendation is "the one your evidence supports, never the one with the biggest fee".
  - Many portfolio owners run two or three routes at once.
  - [LSG27 2026-10-24; IR 2026-11-26]
- **The five routes** [LSG27 2026-10-24; TM2 2026-10-25]:

| Route | Best tier fit | Compliance | Timeline | Seller's priority | What sets value |
|---|---|---|---|---|---|
| Committed Sale | T1, T2, strong T3 | Complete or completable | 90–180 days | Price, with certainty | Investment value |
| Auction | T3, T4, T5, mixed | Workable with gaps | 30–60 days | Certainty, firm floor | Investment value |
| Exit Planning | Any, with one-tier uplift available | Gaps are the plan | 12–36 months | Max price after work | Optimised C4 value |
| Back to Resi | 4–6 person C4; never 9+ beds | Fit-out stripped out | 6–18 months | Max net on the bricks | Bricks-and-mortar vacant-possession value |
| Hold and review | Any | Any | No fixed window | Not yet pressing | Not yet decisive |

- **Earlier six-route matrix:**
  - HMO X Committed Sale: 56-day exchange; open-market ceiling; high certainty.
  - Off-market: 1–3 months; negotiated; moderate certainty.
  - HMO X Specialist Auction: 28–56 days; at or above reserve; high certainty on exchange.
  - General auction: 28–56 days; typically below market; moderate certainty.
  - On-market specialist HMO: 3–6 months; open-market range; moderate certainty.
  - Portfolio transaction: variable; volume discount likely; buyer-dependent.
  - [EPR 2026-06-08]
- **Tier-percentage rule:** a home-tier percentage in the 95–110% band defaults to Committed Sale. [EPR 2026-06-08] (The current band scale is 96–104% "at tier"; see section 10.)
- **Web report route tags:** Recommended, Fallback, Not needed today, Not credible, Not indicated. [IR 2026-11-26]
- **Web routing thresholds:** Exit Planning is suggested below a set gross yield; Auction is suggested from a yield above the floor yield. [Spec 2026-11-26]

### Seller journey (end to end)
1. **Lead arrival.** Leads come via Apex27 property enquiries, the META campaign, referrals, valuations, the Tuesday Bitesize, direct enquiries, and Value My HMO / Tier Test. The seller flow is tracked on Trello: Richard Parsons preps, Richard Nicholls signs off. [Spine 2026-05-17; VMH]
2. **Triage and first call.** Richard Parsons is the first call. [Config] Sellers are referred to Georgia (auction), Fran (Committed Sale) or the Bespoke team within two working days. [Spine]
3. **Valuation.** A free sales valuation or a £150 CSA. Three scenarios: bricks and mortar, current, optimised. Tier read and route recommendation. 30-minute strategy call. [LSG27; SV-CS]
4. **Seller information return.** The Financial Summary workbook is returned before the strategy call. [FinSum 2026-06-08]
5. **Instruction and onboarding** (1–4 weeks, depending on compliance and access to information). The pack is assembled; an HMO specialist solicitor (WM Legal recommended) is instructed early; the listing is prepared and approved by the seller; the launch date is set deliberately. [Config; SWX; LOC]
6. **Marketing launch.**
   - Database and internal network first, then a staggered launch across platforms over 1–2 weeks. [Config]
   - "Off-market first, for 3–7 days: matched investors from our database and the Committed Sale HOT LIST", then the wider database, then the portals. [VMH 2026-11-26]
   - Deal Thread members get 48 hours early visibility. [Spine]
   - A designated broker works leads, front-loads ID, proof-of-funds and AML checks, and reports weekly. [SWX]
7. **Time to agree a sale** depends on price [Config 2026-11-26]:
   - At or below floor: 1–2 weeks.
   - Between floor and asking: 2–6 weeks.
   - Up to 5% above asking: 6–12 weeks.
   - Aspirational: 3–4 months, "if it comes at all".
8. **Offer accepted.** The buyer pays a £3,500 reservation deposit; a binding Exclusivity Agreement takes the property off the market. [CSTC; BVP]
9. **Exchange** within 56 days. **Completion** up to 14 days after exchange. Kirby progresses the sale. [Config; LSG27]
10. **After completion.** Hub Seller's Plan; about half of sellers reinvest; sellers who buy through HMO X get the gifted Hub year. [SWX 2026-06-19]

### Committed Sale mechanics
- **Deposit:** £3,500 reservation deposit, card-registered via Stripe, taken on acceptance. It must be paid within 24 hours of acceptance, is held as stakeholder, forms part of the price on completion, and is not subject to VAT. [CSTC; CSBG]
- **Default rules:**
  - Buyer withdraws, or no exchange through no fault of the seller: buyer forfeits the deposit.
  - Seller default or breach: deposit returned.
  - The buyer may also terminate with the deposit returned for: a serious undisclosed structural defect that makes the property unmortgageable; damage or destruction; or the seller being unable to deduce good title.
  - [CSTC 2026-06-08]
- **Buyer qualification (mandatory before exclusivity):** AML, ID, named solicitor, proof of funds. [EPR]
- **Price is fixed at acceptance**, which deters gazundering. Finance and survey are permitted inside the 56-day window. [EPR; BVP]
- **Problems the structure solves** [EPR 2026-06-08]:
  - Fall-throughs.
  - Unqualified buyers.
  - Gazundering.
  - Tenant disruption.
  - Extended timelines.
  - Price uncertainty.
- **When the 56 days starts:** reports say "from offer acceptance". The buyer guide, onboarding checklist and config say "from receipt of draft contract" (see section 10).

### Auction mechanics
- **Pricing:**
  - Guide and reserve are set from a 20–25% reduction off open-market value, then rounded. The worked example guide was about 22% below open-market value.
  - The reserve is undisclosed and locked in just before the auction.
  - Weekly demand reporting; a lot is pulled before auction day if it is not tracking.
  - [SV-AU 2026-06-08]
- **Channels:**
  - Rightmove auction section.
  - EIG platform ("UK's largest auction database", the primary channel).
  - HMO X buyer database.
  - Hub Deal Thread.
  - HMO networks and broker outreach.
  - Auction HOT LIST. [VMH]
  - Combined reach: 600,000+ registered buyers. [SV-AU; LSG27]
- **Exchange and completion:**
  - Exchange on the fall of the hammer, with a full 10% deposit. [Config; SWX]
  - Completion around 28 days [AOC] or 28–56 days [Config].
  - Pre-auction offers can exchange on any business day under auction conditions through the Deal Thread. [AOC]
- **Buyer-beware basis:** there is no diligence after the gavel. The legal minimum pack is title only; HMO X builds the full pack because "what a bidder cannot verify, they discount".
  - "The title pack gets you into the catalogue. The full pack gets you the price."
  - Full occupancy at launch is the strongest signal to bidders.
  - [AOC 2026-06-08]
- **Bidder registration:**
  - Account, email and mobile verification, accept the terms, name a solicitor, online AML check.
  - To bid: a credit check and acceptance of the deposit and buyer's fee.
  - [AOC]
- **Cadence:** "roughly one a month" [AOC 2026-06-08]. The EIG export shows online auctions on Wednesdays at 12:30, on 15 July, 16 September and 4 November 2026. [EIG 2026-11-25]
- **Track record across those 20 lots:** 9 sold prior, 2 sold in the room, 2 sold post-auction, 1 unsold, 6 postponed. [EIG 2026-11-25]
- **"Not a last resort":** the auction clears quality and value-add assets alike, on published clearing prints. [TTL04; SWX]
- **Keys to auction success:**
  - Fully tenanted at launch.
  - No title or compliance concerns.
  - Good access for viewings.
  - Quick answers to buyer questions.
  - Speed.
  - [Config]

### Exit Planning process
- **Who it is for:** owners 12–36 months from sale with a real optimisation case. "Not for an owner who should sell now." [LSG27]
- **Phased action plan:** immediate, then 30 days, then 90 days, then the longer horizon. Supported by an Outstanding Information Tracker. [EPR; HHC]
- **Two launch windows:**
  - Window 1: as-is Committed Sale, when the trigger to sell is near-term.
  - Window 2: optimise, then launch.
  - [EPR 2026-06-08]
- **Value bridge:** yield tightening plus capitalised income, less programme cost. [LSG27]
- **Portfolios:** staggered individual sales by default, for SDLT efficiency and a wider buyer pool. [EPR]
- **Living Document:** formal review at 6 months; updates acknowledged within 5 working days; a "Property File" carries the home-tier %, scenarios and handover log across engagements. [EPR 2026-06-08]

### Back to Resi process
- **Seven steps:**
  1. Identified (in a sales valuation, portfolio review or first call).
  2. Consultation.
  3. Report and route.
  4. Vacant possession (with the client's solicitor, tenancy by tenancy).
  5. Works.
  6. Launch with X HMO.
  7. Completion (£995 credited).
  - [BTR 2026-10-26]
- **Value gap needed** (family-home vacant value against tenanted HMO value):
  - Lightly adapted: £50k or more.
  - Partly adapted: £50k–£100k.
  - Heavily adapted (en-suite throughout, sui generis): £100k or more.
  - [BTR]
- **Net gain formula:** family-home value − tenanted HMO value − lost rent − holding costs − works − fees. Run for the ideal, expected and worst timelines. The recommendation rests on the expected case and must survive the worst. [BTR]
- **Three exits:**
  - Sell as an HMO (Committed Sale).
  - Dual sale (vacant lawful C4 offered to families and investors together).
  - Full return to a family home sold through X HMO.
  - [BTR]

### Onboarding pack
- **Essential to onboard** (HMO X cannot onboard without these) [LOC 2026-06-08; Config 2026-11-26]:
  - HMO licence.
  - Lawful use: LDC or planning permission.
  - CP12 gas safety record.
  - EICR.
  - Fire risk assessment.
  - Fire alarm test certificate.
  - Emergency lighting test certificate.
  - EPC.
  - Land Registry title.
  - Room-by-room financials, including 24 months of rent review history.
  - Tenancy schedule.
  - 24-month occupancy record.
  - Operating cost base.
  - Photos and video.
  - Measured floor plan.
- **Completes the pack** (not a blocker): PAT, Building Regulations final certificate, legionella risk assessment, buildings insurance, managing agent details.
- **Six-point status scale for each document** [LOC; AOC]:
  - Valid.
  - Not supplied.
  - Not in place.
  - Not confirmed.
  - Assumed compliant — evidence required.
  - Partial.
- **Web checklist keys:** lic, plan, gas, eicr, fra, alarm, light, epc, title, rent, ten, occ, cost, photo, plan2, pat, breg, leg, ins, mgr. Answers are have / need help / not sure. [Spec; IR]

---

## 6. Valuation method and report structure

### Core method
- **Primary basis:** gross-yield capitalisation of the actual rent roll, with the net position read alongside. Yields to two decimal places, with a named source and date. The bricks-and-mortar floor is anchored to transactions. Figures are given as ranges, or as a clearing position plus yield. [SV-CS 2026-06-08]
- **Three bases in every sales valuation:**
  1. Bricks and mortar, vacant possession, 180-day sale (residential owner-occupier or reverter).
  2. Current value, as is, 180-day sale (the HMO investor today).
  3. Optimised value at the launch window after agreed work.
  - Plus a finance/refinance value "for context, not a clearing price".
  - [SV-CS; LSG27 2026-10-24]
- **Clearing value versus finance value:**
  - The finance value is a hold-and-refinance figure. It must never be used as an asking price.
  - Non-clearing prints (withdrawn listings) define the upper bound.
  - Report the asking-vs-clearing delta as a percentage.
  - [SV-CS; EPR]
- **Comparables:**
  - Sold, auction and completed prices are primary; asking and STC figures are secondary.
  - Pre-market-shift prints carry a yield-drift adjustment of at least +0.50%, shown alongside the historic print rather than overwriting it. Current rule: comparables from before April 2026 get +0.50%.
  - [SV-CS 2026-06-08; IR 2026-11-26; Spec]
- **Three channels, never averaged:** Committed Sale asking (carries an aspiration premium), auction clearing (about 0.5–1.5 points wider than realistic private treaty), and the Best Price Guide/Rightmove sold register (lags the market). The realistic private-treaty band sits between auction clearing and Committed Sale asking. [PI-v4 2026-06-09]
- **Cross-checks** [SV-CS; GDV]:
  - Per-room value.
  - £ per square foot.
  - Gross rent multiplier.
  - 9× net multiplier stress test (implies 11.11% net yield; operating costs 20–25% for bills-inclusive 5+ rooms per GDV). Treated as a deep-stress floor for bills-inclusive assets.
  - Dual bricks-and-mortar check.
- **Seven-factor yield framework** [GDV 2026-06-08]:
  - Specification premium.
  - Lot size.
  - Sui generis planning certainty.
  - Location quality.
  - Article 4 protection.
  - Finance sentiment.
  - EPC trajectory.
  - Each factor moves the yield in or out by a number of basis points.
  - Adopted yield band: tight / central / wide. The refinance-to-sales spread is about 50 bps for C4 and 100–150 bps for sui generis 6–7 bed.
- **Value uplift rule of thumb:** value gained = extra annual rent ÷ applied yield. At 12%, £1,000 of sustainable rent adds about £8,300 of value. [TM2 2026-10-25]

### Tier Methodology (current: Edition 2, Oct 2026) [TM2 2026-10-25]
- **Tiers:**
  - T1 Premium / Studio.
  - T2 New Quality ("the defensible mainstream").
  - T3 Standard / Older En-Suite.
  - T4 Basic / Functional.
  - T5 Distressed / Opportunity.
  - Tiers are set by fundamentals, never by price or bed count. T1–T4 are operating tiers; T5 is an opportunity tier. "The critical break is between T4 and T5."
- **Read-out: three numbers and two flags.**
  - Home tier.
  - Trading position: rent received as a % of home-tier rent in the town.
  - Trajectory over 3, 5 and 10 years.
  - Tenant-market flag: professional, student, supported, benefits or mixed.
  - Legal-position flag: green, amber or red.
- **Setting the home tier: five tests.**
  - Three building tests:
    - Rooms: T2 needs a 10 m²+ average and 8 m²+ smallest; T3 needs 9 m²+, or 12 m²+ if not en-suite.
    - Bathrooms: T2 all en-suite; T3 half or more en-suite, or no more than 4 people per shared bathroom.
    - Condition: 0–7 years since conversion or refurb starts at T2, 8–14 at T3, 15+ at T4; adjust one tier for excellent or poor condition.
  - Two ceilings:
    - Location: A1 up to T1, A2 up to T2, B up to T4.
    - Management: co-living operator up to T1; agent or landlord with systems up to T2; active private landlord up to T3; passive or live-in landlord up to T4.
  - The rule: take the middle of the three building readings, then cap it by the two ceilings.
- **T1 test (all four, today):**
  - Rooms 15 m²+ (dual 18–22 m²).
  - A1 location.
  - Hotel-standard acoustics (£1,500–£3,000 a room).
  - Hotel-grade functionality (food prep, storage, desk, 1Gb+ broadband).
  - Fail any one and the home tier is T2.
- **T5 question:**
  - Fully let, licensed and compliant? Then it is operating (T1–T4).
  - If not, are its established use rights the main source of value? Then T5.
  - Otherwise it is probably worth more as a house (bricks and mortar, or Back to Resi).
- **Trading-position bands:**
  - 115%+: launch premium.
  - 105–114%: settling.
  - 96–104%: at tier.
  - 85–95%: drift (the Health Check starting point).
  - Below 85%: sub-tier.
  - Register median: 97.5%. Two in three HMOs sit below 100%; one in three below 95%.
- **How long management holds a tier:** very well run 12–15 years; typical 8–10; poorly run under 5. A new HMO lets at 110–120% of home tier for 12–24 months.
- **HMO X underwriting rule:** never underwrite above 100% of home tier from Year 3 onward; stress-test at 90%. A blended five-year fix at 115/104/100/100/100 averages about 104% and passes.
- **Affordability:** a tenant spends about 30% of gross income on housing. £25k ≈ £625 a month; £30k ≈ £750; £35k ≈ £875; £40k+ ≈ £1,000+.
- **Evidence base:** 197 HMO X valuations with a Tier call, April 2025 to October 2026, medians:

| Tier | Valuations | Rent per room | Rent vs town | Gross yield | En-suite share |
|---|---|---|---|---|---|
| T2 | 58 | £696 | 1.05× | 12.0% | 100% |
| T3 | 91 | £606 | 0.97× | 12.9% | 83% |
| T4 | 21 | £564 | 0.84× | 14.8% | 0% |

- **Five lenses** [PI-v4; Spine]:
  - Sustainable leveraging (developers).
  - Valuation clarity (buyers).
  - Optimisation (operators).
  - Realisation (sellers).
  - Value-add (T4/T5 rejuvenators).
  - Each lens has a "Through the Lens" guide [TTL01–05] and a Hub space [HubArch].

### Section lists by template

**Sales Valuation, Committed Sale** [SV-CS 2026-06-08]
- Cover; Important Notice & Basis; Contents.
- 1 Executive Summary: snapshot, strategic position, scenarios at a glance, headline recommendation, critical and urgent actions.
- 2 The Property & the Asset: fundamentals, location, income/room schedule, operating cost base.
- 3 Planning, Lawful Use & Use Class.
- 4 Valuation — the Three Scenarios, plus the finance-vs-clearing reconciliation and asking-vs-clearing delta.
- 5 Rental Evidence, Tier Position & the Local Market.
- 6 Comparable Evidence: wider HMO market, primary comparable and non-clearing stress test, residential comparables, market yield analysis.
- 7 Compliance & Risk Position: document status table, Renters' Rights Act readiness, EPC.
- 8 The Optimised Exit — the Pre-Sale Lever (spec-to-rent sensitivity).
- 9 Recommended Route to Market: route assessment, primary recommendation and windows, Committed Sale terms, mortgage and tax outside remit.
- 10 Assumptions, Conditions & Disclaimer: Living Document protocol, Valuation Review Notice, General Disclaimer.
- 11 About HMO X & Your Valuer, plus next step.

**Sales Valuation, Auction** [SV-AU 2026-06-08]
- 1 Executive Summary: snapshot with open-market value, route and auction date, guide, reserve, expected bidding range; recommendation.
- 2 The Property & the Asset.
- 3 Why Auction This Property.
- 4 Valuation & Pricing Strategy: open-market value, guide, reserve, expected hammer, each with its yield.
- 5 Comparable Evidence, with a comparable-selection note.
- 6 How We Sell It: channels, what makes us different, tracking and certainty.
- 7 Fees, Key Dates & Next Steps.
- 8 About HMO X & Your Valuer; Important Notice.

**Interactive web sales valuation (newest format)** [IR 2026-11-26; Spec 2026-11-26]
- Header with route chip.
- Your figures: asking, clearing floor, income, home tier, buyer demand x of 5.
- The answer in one screen: headline, Richard's quote, plan by month.
- Two ways forward.
- Test the price: slider, income basis, gross and net yield, demand, best route.
- What you walk away with: net-proceeds calculator.
- Room by room vs the town median.
- Tier read-out.
- What holds it / what could lift it.
- Evidence table plus tested ceiling plus town brief.
- Five routes with tags and fee calculator.
- Team.
- Marketing reach.
- Guides and FAQ.
- Other services.
- Fran's onboarding checklist.
- Next step.

**GDV Appraisal** [GDV; report dated May 2026]
- Engagement details; Methodology (Sustainable Leveraging Lens, Home Tier, Leverage Trap).
- 1 Project Overview.
- 2 Proposed Development.
- 3 Accommodation Analysis: room schedule, compliance against licensing minima.
- 4 Rental Analysis & ERV: three-layer rental evidence, Four T1 Criteria, blended ERV across the 5-year mortgage term, adopted ERV, specification dependency.
- 5 Market Sustainability & Tenant Demand.
- 6 Local Market & Regional Economic Context.
- 7 Energy Efficiency & HMO Compliance.
- 8 Comparable Evidence: sold yield anchor, asking/STC, yield landscape, bands summary, thin-depth caveat.
- 9 Yield Selection & Rationale (seven-factor framework, adopted band).
- 10 GDV Modelling: refinance basis, sales basis, dual bricks-and-mortar, 9× multiplier, per-room, total GDV, build-cost/leverage-trap table with total project cost.
- 11 Key Risks & Mitigations.
- 12 Strategic Recommendations, with pre-refinance checklist.
- 13 Summary and Final Adopted Position.
- Important Notices; Meet the Valuer; About HMO X.

**Exit Planning Report** [EPR 2026-06-08]
- 1 Executive Summary.
- 2 Property & Portfolio Overview, including the Home Tier Diagnosis.
- 3 Financial Performance Analysis: room income, occupancy and voids, operating cost ratio, yield, income uplift, current % of home tier.
- 4 Valuation & Market Evidence: three scenarios, finance vs clearing, comparables, cross-checks, asking-vs-clearing delta.
- 5 Compliance & Risk: status, Article 4/LDC, Renters' Rights Act readiness, Article 4 monitoring.
- 6 Value Optimisation: thesis, plan with action/cost/timeframe/impact, spec-to-rent, rent review strategy, management, specification dependency.
- 7 Mortgage Position: ERC timing, net proceeds, tax.
- 8 Client Circumstances & Constraints.
- 9 Recommended Exit Strategy & Sale Route: six-route matrix, primary route, Committed Sale terms, challenge/solution table, Committed Sale vs conventional sale, two launch windows.
- 10 Action Plan, Timeline & Outstanding Information: tracker, Living Document, portfolio, contact.
- Important Notices; Meet the Valuer; About HMO X (product directory).

**HMO Health Check** [HHC 2026-06-08]
- 1 Executive Summary.
- 2 Property & Portfolio Overview, with Home Tier Diagnosis.
- 3 Operating & Financial Performance, ending with the **Twelve Working Metrics**:
  1. Home tier.
  2. Current % of home tier.
  3. Room rent vs tier-optimised rent.
  4. Occupancy and voids over 12 months.
  5. Gross and net yield.
  6. Operating cost ratio.
  7. Management quality and model.
  8. Compliance coverage.
  9. Room size and specification.
  10. Communal and functional quality.
  11. Local market position.
  12. Tier slippage / capex currency.
- 4 Quality & Specification Assessment.
- 5 Compliance & Risk.
- 6 Value Optimisation & Intervention Plan.
- 7 Valuation Context: held/refinance Scenario A, optimised Scenario B, resi floor Scenario C, comparables, local licensed HMO market, refinance/ICR/tax.
- 8 Operator Circumstances & Objectives.
- 9 Optimisation Roadmap & Next Steps: phased plan, Power Team, Hub onboarding gateway, honest-routing note.
- 10 Action Plan: next 90 days.
- Notices; Valuer; About.

**Buyer Valuation Pack** [BVP 2026-06-08]
- Snapshot.
- 1 Purpose (what the pack does and does not do).
- 2 HMO X View of the Asset (tier diagnosis).
- 3 Agreed Price Context.
- 4 Income & Investment Profile: rooms, operating costs, yield across the price range, home-tier % diagnostic.
- 5 Valuation Framework: the house vs the business; bricks-and-mortar vs investment route; tiers applied; leverage trap; specialist vs generalist surveyor; larger sui generis.
- 6 Comparable Evidence, including "what is missing".
- 7 Surveyor & Lender Considerations.
- 8 Recommended Valuation Positioning.
- 9 Next Steps — Committed Sale context, with buyer action checklist.
- Notices; Hub next-step page.

**Buyer Handover Report** [BHR 2026-06-08]
- Important Notice & Basis, with a log of source conflicts.
- 1 Welcome & Asset Summary, including critical actions.
- 2 The Asset You Now Own.
- 3 Planning, Lawful Use & Use Class.
- 4 The Compliance Pack You Are Receiving, with renewal calendar.
- 5 Tenancies & the Operating Handover: deposits, utilities, agent, contractors.
- 6 Tier Position & the Home-Tier Read.
- 7 The First Ninety Days & Optimisation Roadmap.
- 8 Your Hub Year.
- 9 The Ongoing HMO X Relationship.
- 10 Assumptions, Conditions & Disclaimer, including tenant data.
- 11 About HMO X & Your Contacts.

**Location Intelligence Report** [LIR-T 2026-06-08; PI-v4 2026-06-09]
- Frame: M (Methodology & Ecosystem) and D (Data Basis & Input Confirmation).
- 01 Executive Summary & Investment Verdict (strong / selective / cautious; written last).
- 02 Location Overview & Strategic Positioning.
- 03 Employment Base & Economic Resilience (ONS ASHE earnings and 30% affordability, or university enrolment in student markets).
- 04 Tenant Demand Segmentation.
- 05 Planning, Article 4 & Regulatory Risk Register.
- 06 Rental Market Analysis — Tier Methodology Applied, with the supply-vs-demand mismatch.
- 07 Spec-to-Rent Sensitivity Matrix.
- 08 Micro-Location Scoring (/25).
- 09 Supply Pipeline & Competitor Analysis.
- 10 Transactional Evidence — Three-Channel Synthesis (8 or more comparables).
- 11 Operating Cost & Net Yield Modelling (occupancy at 100/97/90/85/80%).
- 12 Lender Matrix & Finance Intelligence.
- 13 Capital Recycling & Refinance Scenarios.
- 14 Exit Strategy & Hold Period Modelling (2%, 3.5% and 5% rental growth).
- 15 Strategic Conclusion.
- **Standard net-yield assumptions** [PI-v4]:
  - Bills: £80–£150 per room per month.
  - Management: 8%, 10% or 12%.
  - Maintenance: 2.5% of gross for modern stock, 4–5% for older.
  - Mandatory licensing: £300–£700 a year.
  - Voids: T1 oversupplied 8–12%; T2/T3 3–5%; T4 5–8%.
  - Insurance: £600–£1,200 a year.

**Value My HMO automated report** [VMH 2026-11-26; engine v13.12]
- Likely sale range and suggested asking price.
- Speed-vs-value ladder:
  - Sell now (30–60 days).
  - Quick (2–3 months).
  - Balanced (3–6 months).
  - Patient (6–12 months).
  - Optimised (12–36 months).
- Buyer demand 1–5, measured across five buyer types:
  1. Unicorn buyer.
  2. Cash, self-managing.
  3. Leveraged OR managed.
  4. Leveraged AND managed.
  5. A deal.
  - Reading the score: 2 or more finds a buyer; 3 holds the price; 4–5 means buyers compete.
- Your numbers; market reads; closest sales; how to lift value; local market; routes; next steps.

**Seller information return workbook** [FinSum 2026-06-08]
- Four tabs:
  - Property & Compliance.
  - Financials (auto-calculated gross and net yield against asking).
  - Current Occupancy (contracted vs received rent, arrears).
  - Historic Occupancy (24 months, room by room).

---

## 7. Buyer process

1. **Readiness.** The five-point test:
   - Have spoken to a specialist HMO broker.
   - Know the borrowing range and structure.
   - Deposit is certain.
   - Numbers pressure-tested at home-tier rent, not asking-day rent.
   - Can move quickly.
   - [BEH 2026-06-08]
2. **Finding stock.**
   - HMO X Sales and Auctions; Deal Thread with 48-hour early visibility; source-to-order wishlist. [Spine; Timeline]
   - "Qualified, compliant, quality HMOs launched every week." [Timeline 2026-10-22]
   - Buyer "B" (buys finished, tenanted, licensed HMOs at a yield price) is the core HMO X buyer. Buyer "A" (deal-hunters and value-add) rarely buys tenanted stock. [FB, historic]
3. **Registering on the platform (Committed Sale).**
   - Create an account and verify email and mobile.
   - Accept the Committed Sale terms (contractually binding if the offer is accepted).
   - Name a solicitor.
   - Register a card for the £3,500 deposit via Stripe.
   - Online AML check (date of birth, 3 years of addresses, passport, driving licence or NI number; leaves a soft credit footprint).
   - Due diligence: view, take condition advice, read the legal pack, take legal advice.
   - [CSBG 2026-06-08]
4. **Offer.**
   - Submitted online. The buyer confirms they have read the T&Cs, taken advice on the legal pack, and can exchange within the time frame.
   - The seller has at most 3 days to accept or decline; the buyer can modify or withdraw until then.
   - [CSBG]
5. **Accepted.**
   - Deposit taken (payable within 24 hours of acceptance); conditional contract; exclusive right to exchange, usually within 56 days.
   - The buyer instructs solicitors immediately, applies for finance promptly and arranges the survey.
   - [CSTC; CSBG]
6. **Valuation support (Buyer Valuation Pack).**
   - Confirm the lender's surveyor panel before survey access is arranged.
   - Request a specialist HMO valuer on the income (investment) basis.
   - Supply the pack to the valuer in advance.
   - A bricks-and-mortar outcome on a generalist instruction is "a lending-appetite outcome, not a down-valuation".
   - Sui generis 7+ person HMOs open investment and commercial lending routes.
   - [BVP 2026-06-08]
7. **HMO X dissection of every supported purchase** [BEH]:
   - Valuation review.
   - Compliance check.
   - Legal review.
   - Lender suitability.
   - AI Compliance Scan (reads the pack against "all eleven regulated regimes" [Gloss]).
   - Buyer Pack / Legal Data Room / broker-ready documents.
8. **Auction buying.**
   - Diligence must be done before bidding.
   - Exchange on the hammer with a 10% deposit; completion around 28–56 days.
   - Engage an HMO-specialist solicitor on the legal pack before bidding.
   - [AOC; Config; Gloss]
9. **Completion and handover** (Buyer Handover Report / PIR, "issued at exchange"):
   - **Critical:**
     - Apply for a new HMO licence on completion; licences are not transferable.
     - Commission a fire risk assessment if none is supplied.
   - **High:**
     - Re-protect deposits and serve Prescribed Information within 30 days.
     - Flood-inclusive insurance where needed.
     - Reconcile the rent schedule against the tenancy agreements.
     - Obtain the rent ledger, arrears statement and tenancy assignments (tenancies are now Assured Periodic).
     - Obtain building-control completion certificates.
     - Diarise renewals: CP12 yearly, fire alarm and emergency lighting yearly, EICR 5-yearly, EPC 10-yearly.
     - Consider an LDC (s191) to crystallise the use.
   - **First 90 days:** days 0–7, 7–30, 30–60 and 60–90 tasks.
   - [BHR 2026-06-08; Timeline 2026-10-22]
10. **Post-completion.**
    - Gifted 12-month Hub year (Buyers and Operators spaces).
    - 10% off a Health Check.
    - The buyer's pack becomes the Health Check baseline.
    - Future sale routes back to Sales Valuation Triage.
    - Mentoring touchpoints: day 7 welcome call, day 30 licence/LDC checkpoint, day 60 managing agent, day 90 quarterly review, month 11 retrospective, led by Holly. [Spine 2026-05-17; SWX 2026-06-19]
    - The June 2026 handover example instead describes support as "community-led, not a single point of contact". [BHR 2026-06-08]

---

## 8. Compliance and legal statements used in reports

**Standard disclaimers**
- **Cover notice (sales valuation):** "an advisory opinion of value and strategy, not a RICS Red Book valuation, and is not intended to replace a lender-appointed mortgage valuation. Nothing in it constitutes legal, financial, mortgage or tax advice. The recipient should obtain independent professional advice before acting on any recommendation contained herein." [SV-CS 2026-06-08]
- **Basis notice:**
  - "HMO X is not instructed here as an independent expert valuer, and the figures must not be relied upon for secured lending, accounting, taxation, matrimonial, probate or litigation purposes."
  - Figures depend on the rent roll, costs, planning, licence and compliance pack being as represented. Where they are not, "both the value and the saleability default toward the bricks-and-mortar position".
  - [SV-CS]
- **Valuation Review Notice:** values are as at the report date; formal review at the time of marketing; "HMO X cannot be held to any figure or range in this report beyond 12 months from the date of issue without a formal review". [SV-CS; EPR]
- **Living Document:** flagged for review if there is no instruction within 60 days; re-issued at 12 months or on a trigger event (change in compliance or lawful use, occupancy or rent roll, new comparables, seller circumstances, market or regulatory shift). Updates are requested by email to hello@ quoting the report reference. [SV-CS; LSG27; Config FAQ]
- **General disclaimer:**
  - Confidential; no third-party reliance without written consent.
  - Comparables drawn from Land Registry, Rightmove, SpareRoom and HMO X intelligence.
  - Income and yield figures are indicative.
  - Take independent advice from solicitors, accountants, mortgage brokers and tax advisers.
  - "HMO X Ltd accepts no liability for decisions made in reliance on this report without such independent advice."
  - [SV-CS]
- **GDV, BVP and Location Intelligence short form:**
  - "not RICS valuations… no guarantee is given that a lender will adopt the same valuation outcome".
  - Re-test the figures if a decision is taken more than about 3 months after issue.
  - "Neither HMO X Limited nor the named valuer accepts any liability to any party other than the named client."
  - [GDV 2026-06-08; BVP]
- **Verbatim caveats** [PI-v4 2026-06-09; LIR-T]:
  - Valuation: "This valuation represents the professional opinion of HMO X Limited and does not constitute a formal RICS-accredited assessment."
  - Finance: "Finance references are indicative; terms are subject to individual lender assessment. Confirm live with a broker. This is not financial advice."
  - Income basis and occupancy caveats also given.
- **Remit statements:**
  - "HMO X analyses no tax mechanics or mortgage products in-report."
  - The fixed phrase is "outside HMO X's remit".
  - [SV-CS; Team]
- **Automated tool disclaimer:**
  - Instant automated valuation, not inspection-based, no guarantee of a sale or price.
  - Stamp duty figures are indicative (6+ bed HMOs may be treated as commercial).
  - Data from HMO X and official sources; HM Land Registry UK HPI.
  - [VMH 2026-11-26]
- **Net-proceeds calculator:** excludes capital gains tax and corporation tax; "a guide to help you plan, not financial or tax advice". [IR 2026-11-26]
- **Tenant data:** transfers with the assignment of tenancies "under data-protection discipline". Client insights are never shown publicly. [BHR; MIRM 2026-11-12]

**Regulatory facts used in reports** [Gloss 2026-05-19 unless stated]
- **Use classes:**
  - C4 covers 3–6 unrelated occupants.
  - Sui generis covers 7 or more and always needs planning permission; there is no permitted-development route.
  - Article 4 removes the permitted-development right from C3 to C4.
- **LDC:** issued under s191 TCPA 1990; 8–12 weeks; requires 10 years' continuous use with no enforcement action. [LDC 2026-07-08]
- **Licensing:**
  - Mandatory licensing applies at 5+ persons in 2+ households; 5-year cycle; fees typically £600–£1,500+. Licences are not transferable.
  - Additional and selective licensing schemes also exist.
- **Safety and standards:**
  - HHSRS: 29 hazards; Category 1 triggers enforcement.
  - CP12: annual; copy to tenants within 28 days.
  - EICR: 5-yearly; C1, C2 and FI findings must be fixed within 28 days.
  - FRA: under the Fire Safety Order 2005; reviewed annually.
  - EPC: minimum E today; C proposed for new tenancies from 2028 and all tenancies from 2030.
- **Tenancy rules:**
  - Deposits protected within 30 days, plus Prescribed Information; capped at 5 weeks' rent.
  - Right to Rent checks.
- **Renters' Rights Act 2025** ("in force across 2026"):
  - Section 21 abolished; ASTs convert to Assured Periodic Tenancies.
  - Possession via Section 8 grounds on Form 3A.
  - Awaab's Law; Decent Homes Standard for the PRS (2026–27); PRS Ombudsman; Landlord Database.
  - Selling ground: 4 months' notice, not available in the first 12 months of a tenancy. [BTR 2026-10-26]
- **HHSRS (England) (Amendment) Regulations 2026 checklist and fire grades:** HMOs of one or two storeys with no floor over 200 m² need Grade D1 LD1 (LD2 for existing premises); communal areas need Grade A LD2 under BS 5839-1:2017. [HHSRS 2026-07-22]

---

## 9. Market facts and data sources

**Yield bands**
- **Compliant mainstream stock (June 2026):** 11.50–12.50% gross across most Midlands and northern markets; 9.50–10.75% gross on the south coast and southern commuter belt. [AOC, LOC 2026-06-08]
- **Applied yield:** 11.5–12.5% gross Midlands and north (2026). [Gloss; BEH; TTL01]
- **Southern and South-East 6–7 bed HMOs:** clearing at about 10.5–12.5% gross. [SV-AU 2026-06-08]
- **North West compliant Tier 2:** 11.50–12.50%. [BHR 2026-06-08]
- **Large Tier-3 bills-inclusive HMO, Essex example:** needed 11%+ gross to clear in 2026. [SV-CS]
- **North East NE8/NE28 sold-with-income:** about 14.1–14.9%. [GDV, May 2026]
- **Bristol example (Nov 2026):**
  - 7–8 bed sui generis with good income: 10.25–11.00% gross since April 2026; older stock 12–13.5%.
  - "below 10% doesn't sell on this income".
  - Yields out about 0.5 points since 2024. [IR 2026-11-26]
- **Register medians by tier:** T2 12.0%, T3 12.9%, T4 14.8%. [TM2 2026-10-25]
- **Historic bands:** about 8–9% (South), 10–11% (Midlands) and 11–12% (North) "have softened by one to two points". [SWX 2026-06-19]

**Costs and lending**
- **Build cost:** a 6-bed conversion cost £240–300k in 2017 and costs £380–450k now. [SWX]
- **Operating costs:**
  - Bills-inclusive 7-bed example: 42.5%. [SV-CS]
  - Bills-inclusive 6-bed: typically 30–40%. [BHR]
  - Well-run HMOs: 35–45% with an agent; 25–35% self-managed; 20–30% where tenants pay bills.
  - Buyer's-eye cost line: management 15.6% including VAT, 5% voids. [VMH 2026-11-26; TM2]
  - Management fee: typical 10–12%. [EPR; VMH]
- **Lending:**
  - Standard HMO LTV is 75% (selective 80%).
  - ICR stressed at 7–8%: 125% for SPV or basic-rate borrowers, 145% for higher-rate.
  - [Gloss 2026-05-19]
  - Borrowing at 6.5%+. [VMH]
  - Small C4 HMOs are often lent on bricks and mortar; sui generis on investment value. [Gloss; BVP]
- **Other drivers:**
  - Rental inflation historically 2–4% on quality stock. [TTL02]
  - Tier slippage: one tier every 24–36 months without capex. [PI-v4; Gloss; TTL02]

**HMO X scale claims**
- 600,000+ registered buyers across combined channels.
- New investors a month: 100+ [SWX June 2026], 200+ [LSG27; Config], 100–200 [VMH].
- 100+ appraisals a month nationwide [LSG27; Config]; separately "150+ HMO inspections per month" [GDV; SWX; TTL02].
- 20+ years of valuation experience.
- Fall-through: "less than 3% fall through rate" was a predecessor-business claim. [FB, historic]

**Data sources named in reports**
- HM Land Registry (Price Paid and UK HPI).
- Rightmove (including Best Price Guide, BPG).
- SpareRoom: rent listings and rooms-wanted, captured with filters and dated, 50+ listings within 30 days.
- ONS: ASHE earnings, mid-year population, private rents.
- Council planning portals for Article 4 and licensing registers.
- VOA/GOV.UK LHA/BRMA rates.
- Sprift property data packs.
- EIG auction results.
- HMO X's own sold, refinance and asking comparables database and valuation register.
- HMO X Auctions clearing prints.
- [GDV; PI-v4; SV-CS; VMH]

**Internal data operations**
- **Team Analyser:** town yield bands, demand scores and field notes.
- **Tier engine.**
- **Value My HMO engine:** v13.12, "data 20 November 2026", over 200 UK towns [LSG27] or 201 towns [TM2].
- **Monday:** ingest of every HMO lot from the past week's EIG auctions from the "HMO X Auction Activity" folder.
- **Friday:** evidence scan of the "HMO X Market Insights" folder (Richard's dictated field notes), then the weekly refresh and recalibration.
- **Field notes:** never change Tier Methodology rules or town bands on their own; client insights are always internal.
- [AuctRM 2026-11-25; MIRM 2026-11-12]

---

## 10. Things that look outdated or contradictory

Newer files are treated as current.

**Fees**
1. **Committed Sale fees:**
   - May 2026: "1.5 to 2% sales commission, £250 onboarding, uplift to £1,000+ bespoke/portfolio". [Spine 2026-05-17]
   - June 2026: £400 + 2%, no minimum. [SV-CS 2026-06-08; SWX 2026-06-19]
   - June 2026: "HMO X commission competitive — speak to HMO X". [EPR 2026-06-08]
   - **Current:** £400 + 2%, minimum £4,000, onboarding deducted. [LSG27 2026-10-24; Config 2026-11-26]
2. **Auction onboarding fee:**
   - £600 + VAT, 2.5%, no minimum. [SV-AU 2026-06-08; Spine 2026-05-17]
   - **Current:** £400 + 2.5%, minimum £5,000. [LSG27; Config; BTR 2026-10-26]
   - The config says auction onboarding is *not* deducted from commission. Selling guides do not say.
3. **Hub price:**
   - £499 + VAT a year. [HubArch, BVP, BEH 2026-06-08]
   - **Newest:** "no membership fee until 31 December 2027". [VMH 2026-11-26]
   - Also "Every paid report includes 12 months of Hub membership" [TM2 2026-10-25], whereas June docs say Health Check and Exit Planning only, with GDV getting 10% off Hub. [HubArch 2026-06-08]
4. **Tier Test price:**
   - "£99 + VAT, credited". [Config 2026-11-26; IR]
   - "£299 + VAT, launch price £99". [VMH 2026-11-26]
   - The October booklet presents the Tier test as free. [TM2 2026-10-25]
5. **Strategy call:**
   - The opening valuation and 30-minute strategy call are free. [LSG27 2026-10-24]
   - Booking a strategy call with Richard costs £150 + VAT (CSA), credited. [VMH 2026-11-26; TM2]
   - The two need reconciling. The free item appears to be the bespoke sales appraisal; the call is £150.

**Contact details and naming**

6. **Office address and phone:** the GDV example (dated May 2026) shows "Station House, North Street, Havant, Hampshire, PO9 1QU" and 01743 612014. Every other document uses Poole BH12 5AG and 0330 441 5888. This looks outdated. [GDV 2026-06-08]
7. **Email:** the company email moved from hello@ (2026 reports and footers) to sales@ in the newest config and the guides from October and November 2026. [Config 2026-11-26]
8. **Richard's title varies:**
   - "Senior Valuer & HMO Sales Lead". [SV-CS, EPR, HHC, BHR, LIR-T, SWX June 2026; TM2 Oct]
   - "Senior Valuer & BDM". [SV-AU, BVP June; Config Nov]
   - "HMO Valuation Specialist" and "founder of HMO X". [GDV]
   - "BDM & Senior Valuer". [BTR Oct]
   - "Senior Valuer". [LSG27; IR header]
   - "Managing director". [Nikki]
   - Bios vary from "over two decades" to "close to two decades" [SV-AU].
9. **Taglines:** "Your community of HMO experts." is current and in the config. "Where expertise drives opportunity." still appears on the Health Check template cover and the Core Spine. "Your community of property experts." is in the 2025 brand pack and in the July 2026 HHSRS checklist footer and looks outdated.
10. **Auction launch date:** "Summer 2025" [GDV, BVP, Spine] vs "June 2025" [EPR, HHC, Gloss]. These are compatible, but use one form.

**Methodology and process rules**

11. **Tier 5 label:**
    - "Distressed / Redevelopment". [PI-v4, Gloss, LOC/AOC, BEH, SWX June 2026]
    - "Add-Value / Redevelopment". [LSG27 Oct 2026]
    - "Distressed / Opportunity" (cover: "T5 Opportunity"). [TM2 Oct 2026; Spec Nov 2026; IR]
    - Current: Distressed / Opportunity.
12. **T1 room size:** 14–16 m² single [PI-v4, GDV, TTL01, TTL05 June 2026] vs 15 m²+ [Spine, Gloss, TM2 Oct 2026].
13. **Trading-position bands:**
    - June 2026 docs: 115%+, 100%, 85–95%, below 85%. There is no band between 96% and 114%. [PI-v4; LIR-T; Gloss]
    - The Exit Planning example uses a 95–110% band for the Committed Sale default. [EPR]
    - The June explainer uses the same four-band ladder (115%+, 100%, 85–95%, below 85%) and 2025-era tier labels (T5 "Distressed / Redevelopment"). [HMO_X_Tier_Methodology_Explainer 2026-06-08]
    - Current: 115%+ launch, 105–114% settling, 96–104% at tier, 85–95% drift, below 85% sub-tier. [TM2 Oct; Spec Nov]
14. **Tier slippage pace:**
    - "One tier every 24–36 months" without capex. [PI-v4, Spine, Gloss, TTL01–05]
    - Current booklet: management holds a tier 12–15 years if very well run, 8–10 typical, under 5 if poorly run; typical owner reaches T3-level rents around year 8. [TM2 Oct 2026]
    - These are materially different models.
15. **Blended rent / leverage-discipline rule:**
    - Year 1 at 90% of T1, Year 2 at 75/25 T1/T2, Years 3–5 at T2. [PI-v4; Spine; LIR-T]
    - Year 1 115%, Year 2 104%, Years 3–5 100%. [TTL01; BEH uses 110–115/104/100]
    - Current: never above 100% from Year 3; stress-test at 90%. [TM2 Oct]
16. **Newness premium duration:** 12–18 months [BHR; BEH; TTL01] vs 12–24 months [TM2 Oct].
17. **When the 56-day exclusivity starts:** "from offer acceptance" [SV-CS, EPR, BVP] vs "from receipt of draft contract" [CSBG, LOC, Config Nov]. Config (newest) says "within 56 days of the buyer receiving draft contracts".
18. **Committed Sale timeline:**
    - Reports: exchange in about 56 days.
    - Guides: "typically 90–180 days to exchange". [LSG27; SWX]
    - The Glossary describes Committed Sale as "price and structured certainty over speed".
19. **Auction completion and cadence:**
    - About 28 days from hammer. [AOC]
    - 28–56 days. [Config]
    - Marketing is 3 weeks [SV-AU, LSG27], 3–4 weeks [Config] or 3–5 weeks [VMH].
    - "Roughly one a month" [AOC] vs three auctions in July–November 2026 on the EIG export [EIG].
20. **Selling guide misalignment:** the June 2026 selling guide's two-route table appears mis-aligned. "Around 90–180 days" and the "2% + VAT, £400 onboarding" fee sit under or next to the auction column. [SWX 2026-06-19] Superseded by the 2027 guide.

**People and partners**

21. **Recommended solicitor:** Isaacson's [Spine May 2026] vs WM Legal [AOC/LOC June 2026; IR Nov 2026]. WM Legal is current.
22. **Team composition:**
    - May 2026: five employed and five self-employed. Nikki and Eni were self-employed brokers; Lucy was frontline triage. [Spine]
    - June 2026 Team doc also lists Damon, Mike D and Asif as brokers.
    - October and November 2026: Nikki employed; Richard Parsons added (Seller Triage / Valuations Coordinator); Lucy, Eni and the other brokers are no longer shown on client-facing team pages. [LSG27; Config]
    - Kirby: "property sales team manager" [Spine] vs "Sales Progression Specialist" [Config].
    - "Rachel" appears in the Hub bench list but is unexplained. [BVP; BEH]
23. **Post-completion mentoring:** Holly runs the day-7 to month-11 touchpoints [Spine; BEH; SWX] vs "community-led… not a single point of contact" [BHR June 2026; Team doc says mentoring is community-led, coordinated by Lucy].

**Templates and reference documents**

24. **Location Intelligence template:**
    - Its Section D note references "Project Instructions v3", but v4 is current. [LIR-T]
    - Its lender-matrix note asks for "named lenders… LTV tiers… ICR thresholds", which contradicts the v4 print-exclusion policy. [LIR-T vs PI-v4]
25. **Committed Sale Buyer T&Cs:** the PDF text is badly garbled (multi-column extraction). It carries a stale SagePay link while the body references Stripe. A clean version should be sourced. [CSTC]
26. **Colour values:** brand pack ink #282829 vs PI-v4 #28282A; secondary teal #1F8E74 (PI-v4) vs #0C886B (web). Modern Era is the primary heading font in the brand pack, but reports and web use Plus Jakarta Sans only.
27. **"Club" language:** 2025 positioning speaks of the "HMO X Club" and 300 sign-ups. 2026 docs use "Hub" and "Hub Lite" (Lucy's target of 300 Hub sign-ups). [BPS 2025-07-14 vs Spine]
28. **Report names:**
    - "Buyer Handover Report" (June) is now presented as the "Property Information Report (PIR)" given to every buyer. [Timeline Oct]
    - "Established HMO Client Report £395" [TM2] = "Established HMO Appraisal" [Timeline] = "Bespoke non-sale valuation £395" [VMH].
    - The GDV £395 price is from May. [Spine]
29. **Historic social posts:** Richard's posts from 2017–2021 carry old market numbers (for example yields "sub 9%" in Derby, Notts, Leeds and Birmingham; 11–14% northern bands). Use them as voice and history only, not as market facts. [FB 2026-04-25]
30. **Brand Starter Pack mock-ups:** they include placeholder names, a Bournemouth address, and a different company number and VAT number on sample stationery. These are design placeholders, not HMO X data. Do not copy them. [BSP 2025-09-11]
31. **Missing companion documents:** the Core Spine lists companion documents that were not found in Drive by title search:
    - Tier Methodology Framework v2.0.
    - Hub Lite Introduction and Our Fundamentals modules.
    - Lucy's Lead Focus Playbook v8.0.
    - Richard Parsons' Valuations and Bespoke Sales Playbook.
    - GHL Lead Nurture brief.
    - Operational Roadmap.
    - Cross-Project Handover Architecture.
    - Brand Context Handover.
    - Hub Core Values Booklet.

---

## 11. Files read, with IDs and modified dates

### Template reports folder (1URSD4TGL_UK5PqHCNrzhN_cpUKdu7jaE): 66 items, read in full unless noted
| Title | ID | Modified |
|---|---|---|
| Back to Resi with X HMO, seller guide.pdf | 1GXDH1UWV9AmwdCzlqX3QXUWFUM_mm9sg | 2026-10-26 |
| Tier Methodology.pdf | 1RGgqAtL-ERw5d0gEyUrnG4qMhzQh9Kf4 | 2026-10-25 |
| HMO_X_Landlord_Selling_Guide_2027.pdf | 1t3eIBIY9JYVBcb9jKNaS6SCCXfAhevKf | 2026-10-24 |
| HMO_X_Ownership_Timeline.png | 13Moh_wEZsZE-ECrhnDabt6B2gA9WFTbp | 2026-10-22 |
| HMO X Landlord Checklist HHSRS.pdf | 1sxMQgOoRyAaXNdnxvtBLp6kAM2BWU0tp | 2026-07-22 |
| HMO X - Applying for an LDC (Seller Guide).pdf | 1x-tkqYXU-O-T_xXduD7olbhepIJhNJoL | 2026-07-08 |
| HMO_X_Nikki_Role_Definition.md | 1lKivbBZ9NUDtTBLKwPNTqgAy8-9IyaBo | 2026-06-25 |
| Selling_with_HMO_X_Seller_Guide.pdf | 1Bz45Le9lb4z-GE20VSAxAQ-q4SdKgg_M | 2026-06-19 |
| HMO_X_Project_Instructions_v4.docx | 1P8HCVqiElqtxvjNu3NGs85R0OH32UJqW | 2026-06-09 |
| HMO_X_Hub_Structure_and_Flow_1.pdf | 1y2cOWYCs5oepbc1_cgR2W7lPPNkz6uh3 | 2026-06-08 |
| HMO_X_Location_Intelligence_Report_TEMPLATE.pdf | 1riivc5b9TKyx2eNUU_ZyfPNs--pLK7fX | 2026-06-08 |
| HMO_X_Financial_Summary.xlsx | 1ImHpVuDdW0XLTTDX_boI8y0qt1ZHcWXH | 2026-06-08 |
| Buyer_Handover_Report_Example.pdf | 1VVcEAoKOML01zrIK9y5-5crxfl-qooLd | 2026-06-08 |
| HMO X Team and Team Roles v1.1_1.pdf | 1CIs-q_rl6SwhFSDI5hClCxYYwIfJPvUC | 2026-06-08 |
| Buying_an_Established_HMO.pdf | 1WixAczkLx0Um8OfFVjOmq5-qpLCP5E3r | 2026-06-08 |
| Richard_Nicholls_Bio_2026.docx | 1-YNKl2SfKZPrLBw5Ex1YQbCd8VzKC1jb | 2026-06-08 |
| HMO_X_Auction_Onboarding_Checklist.pdf | 1swvyC0LeLHceYy4A58ryacEmBuEHpevY | 2026-06-08 |
| HMO_X_Landlord_Onboarding_Checklist.pdf | 1BlOXMdVEH_cUWRdlrM56Q643bjV8We8p | 2026-06-08 |
| Example GDV appraisal.pdf | 13FKcQdHNpn1VcysX1KoDH-JD7AcTFA5t | 2026-06-08 (about 99k characters; read by section headings, summary, tier, yield and disclaimer sections, not every comparable table) |
| Sales Valuation Report Example - Auction.pdf | 1teEn-HvMtEtqtrTTlF1PEL5fcpk2Buys | 2026-06-08 |
| HMO_X_Hub_Membership_Architecture.pdf | 19fLjdENRZH9x6PJ5SxEsND79ef2vmXRc | 2026-06-08 |
| Sales Valuation Report Example - Committed Sale.pdf | 1FoBlsA_6h_iwa0JFpyuv5l0RjkPQtPJZ | 2026-06-08 |
| Committed Sale Buyer Guide.pdf | 1kkXpm9I72HEwIPLNNCmNka_jTDK7nBUN | 2026-06-08 |
| Committed Sale Buyer T&Cs.pdf | 1xLfvU0DufrwEh3f4tloLaKt2UYKX21JC | 2026-06-08 (text extraction garbled; key terms recovered) |
| HMO_X_Through_the_Lens_05_Add_Value_and_Renovators.pdf | 129oXo_NYX4iop3ryZlqNwL7bhHN9QdHt | 2026-06-08 |
| Buyer Valuation Pack Template.pdf | 16w8xhTbwzzVXKziEjo4-A0gBhhkkKxUQ | 2026-06-08 |
| HMO_X_Tier_Methodology_Explainer.pdf | 1N_PlHmkZG8qv7uUV5c5o5CXkf3E5CI6T | 2026-06-08 (read; the June v1-style explainer, superseded by the Oct 2026 Edition 2 booklet) |
| HMO_X_Through_the_Lens_04_Sellers_and_Exit_Planners.pdf | 1luu3OcwOVrdwH9oM56uBkenzZs_x2sMU | 2026-06-08 |
| HMO_X_Through_the_Lens_03_Investors_and_Buyers.pdf | 1LStHAebkNUlzGxjCr5WC2ZSBAiNKMJus | 2026-06-08 |
| HMO_X_Through_the_Lens_01_Developers_and_Leveragers.pdf | 1YCntAv1yxESaWXuuVIoqONCjhSp-_2oH | 2026-06-08 |
| HMO_X_Through_the_Lens_02_Operators_and_Optimisers.pdf | 1rYcNh4CvkzV_1xoZMJBfsykE_U_Tjkzz | 2026-06-08 |
| Exit Planning Example Template.pdf | 1G4-laChIBB0GXmiHGOwauL07PaAGwgWM | 2026-06-08 (about 61k characters; headings, tier, route, protocol and end matter read; mid-section tables skimmed) |
| Health Check Example Template.pdf | 13kgKnhal6FUZ7JHQtNCTXqht-wIziQJn | 2026-06-08 (about 64k characters; headings, metrics, roadmap, Hub and end matter read; mid tables skimmed) |
| HMO X Glossary.pdf | 1fZ2pGVAlQIdv61F9P9cFTVsNlnEDndSN | 2026-05-19 |
| HMO X Core Values May 2026.pdf (The Core Spine) | 11bJxA8PN2oAw6hU_EqWFa4H13T8lqiiY | 2026-05-17 |
| Richard's FB Posts.pdf | 1u4FJ6ckUUW_GwnX9zqem0lkZT4KJD_Vb | 2026-04-25 (about 165k characters; keyword-skimmed, not read line by line) |
| FINAL_HMO X Brand Starter Pack.pdf | 1qmGSyjDskCjUCglnbkNxyLVDL6AnN-UA | 2025-09-11 |
| Brand Positioning Statement - HMO X FINAL.pdf | 1_0fiDuEo8LDv3YJ6S9E06z15RQLG93p- | 2025-07-14 |
| README.txt (Plus Jakarta Sans) | 1Z3SogYWnR07YHH1Wfam1PSKr48VoqHmr | 2025-04-24 |
| HMO X_Primary.jpg | 17M_ONkN1bIGS8kyNiP3cETOurNG-3Z6o | 2025-04-24 (image; connector returned no content) |
| Landlord and agent guide to the HHSRS - GOV.UK.pdf | 1NTOS4uS2Yd7OVFde4_1Ee0D01evITiZ6 | 2026-07-06 (**not read**: external government guidance) |
| HMOs_and_residential_property_licensing_reforms_guidance.pdf | 1UqHYkJqJx3F-t_sho_Y_PYHkO9g7Bo8m | 2026-07-06 (**not read**: external government guidance) |
| building regs national.pdf | 1ZE1j1pYm-VW1nsEcccOUEj7GmPe7yKZX | 2026-07-06 (**not read**: external guidance) |
| Font files: 18 Plus Jakarta Sans .ttf, ModernEra-Bold .otf/.woff/.woff2/.css/.html, OFL.txt, EULA.txt | various (e.g. 1Q9le24zPN6F8mwJtJigilZlQwtOcWK46 ModernEra-Bold.otf) | 2025-04-24 (font binaries and licence texts; not read as content) |

### Other Drive files read
| Title | ID | Modified |
|---|---|---|
| report-data-spec.md | 1dpKTY94-TnGydyzyma_YDPLSwkNPFXpO | 2026-11-26 |
| site.config.json | 1ej2k2OTYbhgPZoCQnjHgro4MrZ6iEJsM | 2026-11-26 |
| HMOX-SV-…-interactive.html (interactive sales valuation example) | 1pbYtg-bWNX4ZVyH2Rq57uJdmsnFZZrqS | 2026-11-26 (about 1MB HTML; visible text and CSS read; client details not copied) |
| Free HMO Buyer Demand Test _ Value My HMO _ HMO X.pdf | 1MULy2ShDgnSb7qzqHcXisY5lEh_fv8vt | 2026-11-26 (client details not copied) |
| READ ME - what to drop in here (Google Doc) | 1RMX0lSMdcqzrzUaqucrYE2URSpsIZVbo2ep0Dycrchs | 2026-11-25 |
| HMO X Auctions.pdf (EIG results export) | 103bEcWJCxjtfSLyVFwdDoAsHxobcr_LQ | 2026-11-25 |
| READ ME - how to add your notes (Google Doc, HMO X Market Insights) | 1v9GJ_mAwqdm09v9q7inE7pGt8S4kcJoPX_ot82ITv5g | 2026-11-12 |
| logo_transparent_background.png (folder "P2P") | 13YJfhL4kbOFhd4ykeJpKRPjUGb1tLrDx | 2024-11-07 (image; no content returned; brand ownership unverified) |

### Found but deliberately not read
- **Property listing and comparable evidence files.** Rightmove "X bedroom house for sale…", "Best Price Guide for <postcode>" and SpareRoom room listings (folders such as "RM Best Price Guides", October–November 2026). Skipped per instruction and as client and property data.
- **Off-market opportunity sheets.** "CF23 16-bed HMO - Confidential Opportunity.pdf" (11XHvBEQJNTeG-fAmasOBvxBoAE1BIEvz) and "27-bed cluster flats - Confidential Opportunity.pdf" (1h5y6XAtoFVe89K6dd0uCiSMAgU0IRdLV), both 2026-11-26. These are listing-type documents.
- **Cloudflare account PDF.** "Workers & Pages … Cloudflare.pdf" (1GV9snP5YM4pS-y8sntRp6zyHs_Y-n-Fs). Skipped per instruction.
- **Personal or legal documents unrelated to the business.** Surfaced by search and not opened or summarised.
- **Market Insights folder field notes.** "Bristol visit 19th Nov", "New Malden", "Isle of wight finance info.pdf", and a press article. Not read: these are location notes, not induction material.
- **Duplicate copies.** A second Brand Starter Pack (1Xwcy-T8skFqiJgA_tCMJVdJwcjFOLYfG), Brand Positioning Statement (1Ph7uo8OpE9DZH6pvMwFIIhSHVA_pu6WM) and Financial Summary (1KuG19SOJaNa6vdVjJ4FXer2RdBTfsfC6) in another folder, with the same modified dates as the copies read.

### Could not find
- A dedicated brand guidelines document beyond the Brand Starter Pack and the PI-v4 brand section.
- An org chart.
- Formal job descriptions, other than the Nikki role definition.
- A standalone price list or terms of business for sellers. Fees appear only inside guides and reports.
- Seller-side Committed Sale or auction terms of engagement.
- Any redress-scheme or membership evidence.
- The Core Spine companion documents listed in section 10, item 31.
