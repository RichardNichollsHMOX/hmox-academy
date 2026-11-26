/*
 * HMO X Academy course content.
 * Edit this file to change lessons and questions; app.html renders it.
 *
 * A general course: an introduction to HMO X and to HMOs, for anyone joining the business,
 * whatever their role. Nothing in it is written for one person or one job.
 *
 * Module shape:
 *   id        stable id (never change once people have taken the quiz; progress is keyed on it)
 *   title, mins, summary
 *   sections  [{h, p:[paragraphs], list:[bullets], terms:[[term, meaning]], cards:[{name, role, text}], table:{head:[], rows:[[]]}}]
 *   confirm   note shown only to managers: content still to confirm with Richard
 *   questions [{q, o:[options], a:index of correct option, why}]  (options are shuffled on screen)
 *
 * Sources: the HMO X Hub lessons (Our Fundamentals, the five lens courses, the Community Calls and the
 * Renters' Rights Act series, read in full 26 Nov 2026), Richard Nicholls' market commentary 2018 to 2026,
 * hmox.co.uk (updated 25 Nov 2026), the Tier Methodology Edition 2 (Oct 2026), the HMO X template reports
 * in Drive and the Team Analyser evidence scan (13 Nov 2026). See research/ for the detail.
 */
window.HMOX_COURSE = {
  passMark: 0.8,
  refreshDays: 365,
  evidenceDate: "13 November 2026",
  modules: [

    /* ------------------------------------------------------------------ 1 */
    {
      id: "intro",
      title: "Welcome to HMO X",
      mins: 15,
      summary: "Who we are, what we stand for, how the business fits together and how this course works.",
      sections: [
        { h: "Who we are", p: [
          "HMO X makes the complex world of HMO investing accessible: a nationwide community and a full-service ecosystem for investors at every stage, from buying to running, improving, refinancing and selling.",
          "The HMO is the asset class we are built for. Not buy-to-let. Not commercial. Not serviced accommodation.",
          "Our line is “Your community of HMO experts.” You will see it on every report cover and footer."
        ]},
        { h: "The company", terms: [
          ["HMO X Ltd", "Company No. 15730822. The main business: valuations, sales, reports, consultancy and the Hub."],
          ["HMO X Auctions Ltd", "Company No. 15626888. The UK's first auction house dedicated solely to HMOs, launched in June 2025. It issues the auction-side documents."],
          ["HMO X Sales", "Our agency team for established HMOs, formerly HMO Sales Expert. 700+ HMO sales completed since 2018."],
          ["Office", "Discovery Court Business Centre, Wallisdown Road, Poole, BH12 5AG. Phone 0330 441 5888."],
          ["Websites", "hmox.co.uk is the main site. The tools run on tools.hmox.co.uk. The Hub is at mighty.hmox.co.uk."]
        ]},
        { h: "Where we came from", p: [
          "HMO X grew out of 18 years of HMO investment experience at Platinum Property Partners, which ran a franchise model for corporate professionals. HMO X turned that model around by removing the barriers to entry.",
          "Our Senior Valuer, Richard Nicholls, has 20+ years of HMO valuation experience and is the author of the Tier Methodology, the framework behind every answer we give."
        ]},
        { h: "Vision and mission", terms: [
          ["Vision", "To be the community every HMO investor turns to first, where one evidenced framework, not guesswork, guides every decision from first purchase to final exit."],
          ["Mission", "To give every HMO investor the same honest diagnosis we would want for ourselves, with the Tier Methodology at the core, whichever lens brought them to us."]
        ]},
        { h: "Our values, in priority order", list: [
          "Experts", "Approachable", "Optimistic", "Professional", "Community-driven"
        ], p: [
          "The test for every piece of work: if it could not stand up to a working valuer, surveyor, operator or solicitor, it should not leave our desk.",
          "Our standards: de-risked, documented, delivered; a plan, not information; and a partnership that continues long after completion. “Data, not opinion.”"
        ]},
        { h: "How the business fits together", terms: [
          ["Sales and auctions", "HMO X Sales (Committed Sale and bespoke sales) and HMO X Auctions."],
          ["Reports and consultancy", "Valuations, Health Checks, Exit Planning, GDV appraisals, buyer packs and Location Intelligence Reports."],
          ["Tools", "Five online tools built on our own evidence: Value My HMO, Tier Test, GDV Appraisal, Find My Next HMO and the Location Intelligence Report."],
          ["Community and education", "The HMO X Hub, free to join, with the weekly Community Call."],
          ["Specialist partners", "Planning, compliance, finance, legal and financial planning, through named partners."]
        ]},
        { h: "Five lenses on one framework", p: [
          "We look at every HMO through five lenses, because that is how investors move through this market: Buy, Operate (optimise and hold), Add value, Develop and Sell. Most investors use three or four of them over the life of a portfolio. Each is covered later in this course."
        ]},
        { h: "Five questions every conversation should answer", list: [
          "Which tier is the HMO in today?",
          "Which tier will it hold over the hold period?",
          "What does that mean for income, value and borrowing?",
          "What would it cost to move up a tier, or what is the risk of sliding?",
          "What is the right next step?"
        ]},
        { h: "Getting started", list: [
          "Join the HMO X Hub and read the Chassis (“Your Starting Point”) and the Tier Methodology module in Our Fundamentals.",
          "Download the Tier Methodology Guide from hmox.co.uk.",
          "Join a Tuesday Community Call at 7pm.",
          "Try the five tools on tools.hmox.co.uk so you know what clients see."
        ]},
        { h: "How this course works", p: [
          "There are 15 modules. Read each one, then take its quiz. You need 80% to pass, and you can retake a quiz as many times as you need. Each attempt shuffles the questions and answers.",
          "When you have passed every module, sign the declaration on your home screen. A manager then reviews your results and signs you off. Sign-off lasts 12 months, after which you take the refresher."
        ]}
      ],
      questions: [
        { q: "What is HMO X's line on every report?", o: ["Your community of HMO experts", "Where expertise drives opportunity", "Your community of property experts", "Sell your HMO with certainty"], a: 0, why: "“Your community of HMO experts.” is current. The other lines are older or not ours." },
        { q: "Which asset class is HMO X built for?", o: ["HMOs only", "HMOs and buy-to-let", "HMOs and serviced accommodation", "Any residential investment"], a: 0, why: "Not buy-to-let, not commercial, not serviced accommodation." },
        { q: "Which company issues the auction-side documents?", o: ["HMO X Auctions Ltd", "HMO X Ltd", "Essential Information Group", "Platinum Property Partners"], a: 0, why: "HMO X Auctions Ltd (No. 15626888) is the auction business. EIG is our auction platform partner." },
        { q: "Which is first in HMO X's values, in priority order?", o: ["Experts", "Community-driven", "Optimistic", "Professional"], a: 0, why: "Experts, Approachable, Optimistic, Professional, Community-driven." },
        { q: "What is the test for every piece of HMO X work?", o: ["Would it stand up to a working valuer, surveyor, operator or solicitor?", "Would the client be pleased with the number?", "Is it longer than a competitor's report?", "Has marketing approved the design?"], a: 0, why: "If it would not withstand that scrutiny, it should not leave our desk." },
        { q: "Which are HMO X's five lenses?", o: ["Buy, Operate, Add value, Develop, Sell", "North, South, East, West, London", "Student, Professional, Social, Supported, Mixed", "Tier 1 to Tier 5"], a: 0, why: "Five lenses on one framework. Most investors use three or four over a portfolio's life." },
        { q: "Which question should every client conversation answer first?", o: ["Which tier is the HMO in today, and which will it hold?", "How quickly can it go on Rightmove?", "What did the neighbour sell for?", "Can the client afford our fee?"], a: 0, why: "The five questions start with the tier today and the tier over the hold period." }
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: "what-is-hmo",
      title: "What is an HMO?",
      mins: 15,
      summary: "The legal definition, licensing, room sizes, planning classes and why investors buy HMOs.",
      sections: [
        { h: "The legal definition", p: [
          "Under the Housing Act 2004, a house in multiple occupation is a property let to 3 or more people who form 2 or more households and share facilities such as a kitchen, bathroom or toilet.",
          "A household is a single person, or members of the same family living together, including couples. Three friends sharing are three households. A couple sharing with one friend are two households and three people, so that is an HMO."
        ]},
        { h: "Licensing", list: [
          "Mandatory licensing: an HMO with 5 or more people forming 2 or more households needs a licence, whatever the number of storeys.",
          "Additional licensing: a council can require smaller HMOs (often 3 or 4 occupants) in all or part of its area to be licensed.",
          "Selective licensing: a council can require every privately rented home in an area to be licensed.",
          "Licences usually run for 5 years, carry conditions (occupancy, room sizes, amenities, a named manager) and typically cost £600 to £1,500 or more.",
          "Licences are not transferable. A buyer must apply for a new licence on completion, with a new fit and proper test."
        ]},
        { h: "Minimum room sizes (licensed HMOs)", table: { head: ["Sleeping room for", "Minimum floor area"], rows: [
          ["One person over 10", "6.51 sqm"], ["Two people over 10", "10.22 sqm"], ["One child under 10", "4.64 sqm"], ["Anyone", "A room under 4.64 sqm cannot be used for sleeping"]
        ]}, p: ["These are legal minimums. Councils can set higher standards; amenities are typically one bathroom and one WC per five people. The Tier Methodology expects much more: a Tier 2 HMO averages around 10 sqm or more a room."] },
        { h: "Planning use classes", terms: [
          ["C3", "A dwellinghouse: a family home or a let to one household."],
          ["C4", "A small HMO: 3 to 6 unrelated people sharing. Changing from C3 to C4 is permitted development, unless an Article 4 direction removes that right."],
          ["Sui generis", "A large HMO: 7 or more people. It always needs planning permission. “The seventh occupant is the universal stop.”"],
          ["Article 4 direction", "A council order removing the C3 to C4 permitted development right, so a new small HMO needs planning permission. Existing lawful HMOs keep their use (grandfather rights)."],
          ["LDC", "A Lawful Development Certificate (section 191) confirms an existing use is lawful: either the HMO use began before the Article 4 direction, or it has run for 10 years continuously with no enforcement. It takes 8 to 12 weeks, sometimes longer."],
          ["Section 257 HMO", "A building converted into self-contained flats that does not meet the 1991 Building Regulations, where fewer than two-thirds are owner-occupied."]
        ]},
        { h: "A licence is not planning", p: [
          "A licence says a property is safe to occupy as an HMO. It does not prove the use is lawful in planning terms. Buyers' solicitors and lenders ask both questions, and lenders increasingly want the LDC itself. Care use is C2, not C4."
        ]},
        { h: "The HMOs in our market", list: [
          "Tenant markets: professional, working, student, social or supported, and mixed. Professional, student and supported HMOs are “three different businesses”.",
          "Property types: terraced, semi-detached, detached and commercial conversions.",
          "Layout: shared bathrooms, part en-suite or all en-suite. Room size, bathrooms, condition, location and management set the tier."
        ]},
        { h: "Why investors buy HMOs", p: [
          "Rent is charged per room, so an HMO earns a much higher return than the same house let to one household: as a rule of thumb, around 7% to 9% net against 2% to 3% for a typical buy-to-let. The trade-off is more regulation, more management and more ways for income to slip. That is why the tier and the evidence matter.",
          "HMO X's first buying test: an HMO must out-invest a local buy-to-let on a net basis, or it is not worth the extra work."
        ]}
      ],
      questions: [
        { q: "What is the minimum for a property to be an HMO?", o: ["3 or more people forming 2 or more households, sharing facilities", "2 unrelated people sharing a kitchen", "5 or more people of any household", "Any house with more than 4 bedrooms"], a: 0, why: "Housing Act 2004: 3+ people, 2+ households, sharing facilities." },
        { q: "When does mandatory HMO licensing apply?", o: ["5 or more people forming 2 or more households", "3 or more people in any house", "7 or more people over three storeys", "Only where there is an Article 4 direction"], a: 0, why: "Mandatory licensing covers 5+ people in 2+ households, whatever the storeys." },
        { q: "A buyer completes on a licensed HMO. What happens to the licence?", o: ["It does not transfer; the buyer must apply for a new one", "It transfers automatically", "It lasts until the old expiry date", "The seller keeps it for their next HMO"], a: 0, why: "Licences are not transferable, so a new application is a critical first task." },
        { q: "What is the minimum floor area for a bedroom for one adult in a licensed HMO?", o: ["6.51 sqm", "10.22 sqm", "4.64 sqm", "8.00 sqm"], a: 0, why: "6.51 sqm for one person over 10; 10.22 sqm for two." },
        { q: "An HMO lets to 8 unrelated tenants. What planning use class is it?", o: ["Sui generis", "C4", "C3", "Section 257"], a: 0, why: "7 or more occupants is a large HMO, sui generis, and always needs planning permission." },
        { q: "Which shows an HMO use is lawful for an LDC?", o: ["The use began before the Article 4 direction, or 10 years' continuous use with no enforcement", "A current HMO licence", "A gas safety certificate", "Two years of rent statements"], a: 0, why: "There are two routes. A licence is not planning." },
        { q: "What does an Article 4 direction do?", o: ["Removes the C3 to C4 permitted development right", "Bans all HMOs in the area", "Makes licensing voluntary", "Doubles council tax on HMOs"], a: 0, why: "New small HMOs then need planning; existing lawful HMOs keep their use." }
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: "compliance",
      title: "Compliance and safety",
      mins: 25,
      summary: "The documents every HMO needs, fire safety, HHSRS, insurance and energy rules, and why compliance is part of the price.",
      sections: [
        { h: "Why compliance drives value", p: [
          "Buyers, lenders and solicitors all ask for the paperwork. What a buyer cannot verify, they discount, and every loose end is discounted twice: once for the cost of fixing it and once for the doubt it creates.",
          "As a rule of thumb, an HMO with gaps attracts offers around 80p in the pound; a fully prepared one achieves 92p to 95p. “Read before the offer, it is leverage. Found after completion, it is cost.”",
          "HMO compliance is its own discipline: Alice Ibbotson of Property Shield counts eleven regulated regimes, not five, and most failures are “operational drift”, not bad intent."
        ]},
        { h: "The compliance pack", p: ["The documents we need before a property can be marketed:"], list: [
          "HMO licence and its conditions", "Lawful use: planning permission or an LDC", "Gas safety record (CP12)", "EICR", "Fire risk assessment, with alarm and emergency lighting records", "EPC", "Land Registry title", "Room-by-room rent roll with actual rent statements", "Tenancy agreements, deposit certificates and the tenancy schedule", "Operating costs", "Photos, video and a measured floor plan"
        ]},
        { h: "Completes the pack", p: ["Now asked for on almost every sale: PAT records, the Building Regulations final certificate, a legionella risk assessment, asbestos information and buildings insurance that names the HMO use."] },
        { h: "How we record each document", table: { head: ["Status", "Meaning"], rows: [
          ["Valid", "In place and in date"], ["Partial", "Some of it is there"], ["Not confirmed", "We have been told it exists but have not seen it"], ["Assumed compliant, evidence required", "Likely fine, but we need the proof"], ["Not supplied", "The seller has not sent it"], ["Not in place", "It does not exist"]
        ]}},
        { h: "Certificate rules", table: { head: ["Document", "Rule"], rows: [
          ["Gas safety (CP12)", "Every 12 months; copy to tenants within 28 days. Not serving the copy is the commonest failure"],
          ["EICR", "Every 5 years; C1, C2 and FI findings put right within 28 days"],
          ["Deposits", "Protected within 30 days (DPS, TDS or MyDeposits) with Prescribed Information; capped at 5 weeks' rent. A deposit failure now blocks possession"],
          ["Right to Rent", "Checked for every adult before the tenancy starts"],
          ["EPC", "Minimum E to let today; C is proposed for new tenancies from 2028 and all tenancies from 2030. We never promise a client an EPC"]
        ]}},
        { h: "Fire safety", p: [
          "“There is no compliance position above the fire safety position.” A fire strategy covers design and construction; a fire risk assessment (FRA) covers an occupied building, its precautions and its people."
        ], list: [
          "FRA by a competent assessor: a full assessment roughly every 4 years, with a written review every year and after any change or incident.",
          "Alarms (BS 5839-6): most HMOs need mains, interlinked detection (Grade D1, Category LD1) with detection in bedrooms. A Grade A panel is tested weekly and serviced every six months; Grade D is tested monthly.",
          "Emergency lighting (BS 5266-1) where escape is compromised: tested monthly, serviced yearly.",
          "Fire doors: FD30 with intumescent strips, smoke seals and self-closers; gaps over about 4mm fail. Have them surveyed by an accredited specialist.",
          "Keep a logbook that records the fix, not just the fault, and do a logged monthly walk-round.",
          "No e-bike or e-scooter charging in bedrooms or escape routes. Letting by the room rather than on a joint tenancy can raise the fire standard."
        ]},
        { h: "HHSRS", p: [
          "The Housing Health and Safety Rating System is how councils judge hazards in any rented home. A 2026 amendment came into force on 23 June 2026: it cut the hazard list from 29 to 21 and added baseline indicators. “It got sharper.”"
        ], list: [
          "Category 1 (a score above 1,000): the council must act. Category 2: it may act.",
          "Hazards are judged against the most vulnerable people who could live there within 12 months, not the current tenants.",
          "No heating or hot water is Category 1 in any month. A self-contained studio under about 18 sqm can fail on size alone.",
          "The HMO Management Regulations 2006 apply to every HMO, licensed or not, and are strict liability: “I was getting it fixed” is no defence. Councils issue civil penalties for each breach.",
          "Liability transfers to a buyer on completion."
        ]},
        { h: "Insurance: insured is not covered", list: [
          "Insure the rebuild cost, never the market value; re-check it at least every 3 years. A converted HMO can cost far more to rebuild than it is worth.",
          "Under-insure and every claim is cut in proportion (averaging): insured for half, a £20,000 claim pays £10,000.",
          "Declare it as an HMO, with every material fact. If a provider or rent-to-rent operator places the occupants, declare it as a sublet. Tenant type is the biggest cause of voided HMO claims."
        ]},
        { h: "Energy", p: [
          "Bring the energy assessor in before a refurbishment, not after. Expect the EPC method to change (the Home Energy Model); the details of the future minimum standard are not confirmed, so we never promise an outcome."
        ]},
        { h: "Red flags to raise straight away", list: [
          "No licence where one is needed, or more occupants than the licence allows.",
          "An HMO in an Article 4 area with no evidence of when its use began.",
          "Out-of-date gas, electrical or fire records, or no adequate FRA (over half of the HMOs we onboard lack one).",
          "Deposits that cannot be confirmed with the scheme itself."
        ]}
      ],
      questions: [
        { q: "How often is a gas safety record (CP12) needed?", o: ["Every 12 months", "Every 5 years", "Every 3 years", "Only when tenants change"], a: 0, why: "Annually, with a copy to tenants within 28 days." },
        { q: "How long does a landlord have to protect a deposit?", o: ["30 days, with Prescribed Information", "7 days", "60 days", "At the end of the tenancy"], a: 0, why: "Within 30 days. A deposit failure now blocks possession." },
        { q: "How often should a full fire risk assessment be carried out by a competent assessor?", o: ["About every 4 years, with a written review every year", "Once, when the HMO opens", "Every 10 years", "Only after a fire"], a: 0, why: "Plus a review after any material change or incident." },
        { q: "What HHSRS score makes a hazard Category 1?", o: ["Above 1,000", "Above 100", "Above 50", "Any hazard at all"], a: 0, why: "Category 1 means the council must act." },
        { q: "When did the 2026 HHSRS amendment come into force?", o: ["23 June 2026", "1 May 2026", "31 May 2026", "April 2027"], a: 0, why: "It cut the hazards from 29 to 21 and made the system sharper." },
        { q: "An HMO is insured for half its rebuild cost. What does a £20,000 claim pay?", o: ["£10,000", "£20,000", "Nothing", "£15,000"], a: 0, why: "Averaging cuts every claim in proportion to the under-insurance." },
        { q: "What should the buildings sum insured be based on?", o: ["The rebuild cost", "The market value", "The price paid", "The mortgage balance"], a: 0, why: "Rebuild cost can far exceed value; re-check it at least every 3 years." },
        { q: "A seller says their gas certificate is “definitely somewhere”. How is it recorded?", o: ["Not confirmed", "Valid", "Not in place", "Partial"], a: 0, why: "We have been told it exists but have not seen it." },
        { q: "A seller asks you to sort their EPC rating for the listing. What do you do?", o: ["Don't promise one; explain it is needed and how they can get it", "Promise it will be ready by launch", "Tell them HMOs don't need an EPC", "Use the EPC from next door"], a: 0, why: "We never promise a client an EPC." }
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: "rra",
      title: "The Renters' Rights Act",
      mins: 15,
      summary: "What changed on 1 May 2026, what it means for HMOs, and why paperwork is now the position.",
      sections: [
        { h: "What changed", list: [
          "The Renters' Rights Act 2025 came into force on 1 May 2026. Section 21 “no fault” evictions ended, and existing assured shorthold tenancies became assured periodic tenancies (APTs): rolling, with no fixed term.",
          "Landlords had to give tenants the government Information Sheet by 31 May 2026 (written key terms for verbal tenancies).",
          "Rent increases use Section 13 and Form 4A: at least two months' notice, no more than once a year, and the tenant can challenge an above-market rent at the First-tier Tribunal. Keep rent comparables on file.",
          "No rent can be asked for before the tenancy is signed, and no bidding wars on rent.",
          "Pet requests must be considered; a refusal needs a valid reason.",
          "Rent repayment orders now reach up to two years' rent. A landlord database, the Decent Homes Standard for private rentals, Awaab's Law and a private rented sector ombudsman are being brought in."
        ]},
        { h: "Possession", list: [
          "Possession is by Section 8 grounds on Form 3A, with evidence.",
          "The selling ground needs 4 months' notice and cannot be used in the first 12 months of a tenancy.",
          "Ground 4A lets student HMO landlords recover possession for the academic year, but only if its conditions are met, including a specific written statement at the start; it is easy to get wrong.",
          "Deposit protection is now a condition of possession."
        ]},
        { h: "What it means for HMOs", p: [
          "“Not the end of HMOs. But it is the end of winging it.” HMO tenants move on naturally, so losing Section 21 matters less to a well-run HMO. Room rents have to be set right from the start, because increases are limited and can be challenged.",
          "The market was already splitting, and the Act is the accelerant: “the documented HMO commands the premium and the undocumented HMO carries the discount.” Process is the asset."
        ]},
        { h: "Three readers, one pack", terms: [
          ["The buyer", "Reads for inherited risk: a discount to comparables is not a discount until the inherited position is costed."],
          ["The surveyor", "Reads whether the rent roll and valuation can be defended."],
          ["The council", "Reads for enforcement exposure: licensing, fire safety, HHSRS and the management regulations."]
        ]},
        { h: "Running an HMO under the Act", list: [
          "“The document is the position.” For every room keep the deposit pack, the Section 13 file and the notice trail.",
          "The landlord can delegate the work to an agent, but not the awareness: “the buck stops with the landlord.”",
          "Reference properly and never lower standards to fill a void.",
          "Rent-to-rent has become riskier: the freeholder inherits the operator's tenancies, deposits, notices and rent repayment exposure."
        ]}
      ],
      questions: [
        { q: "When did the Renters' Rights Act come into force?", o: ["1 May 2026", "1 January 2025", "31 May 2026", "1 April 2027"], a: 0, why: "Section 21 ended and tenancies became assured periodic tenancies." },
        { q: "What replaced assured shorthold tenancies?", o: ["Assured periodic tenancies, with no fixed term", "Twelve-month fixed terms", "Licences to occupy", "Section 21 tenancies"], a: 0, why: "APTs roll monthly with no fixed end date." },
        { q: "How can rent be increased under the Act?", o: ["Section 13 and Form 4A, two months' notice, at most once a year", "By email with one month's notice", "At any time with tenant agreement", "Only at the end of a fixed term"], a: 0, why: "The tenant can challenge an above-market rent at tribunal." },
        { q: "Under the selling ground, what notice is needed?", o: ["4 months, and not in the first 12 months of a tenancy", "2 months at any time", "A Section 21 notice", "6 weeks"], a: 0, why: "Section 21 is gone; selling needs a Section 8 ground." },
        { q: "How far do rent repayment orders now reach?", o: ["Up to two years' rent", "Six months' rent", "A fixed £5,000", "One month's rent"], a: 0, why: "They doubled from one year to two." },
        { q: "A landlord uses a managing agent. What can they not delegate?", o: ["The awareness and accountability", "Rent collection", "Viewings", "Repairs"], a: 0, why: "“The buck stops with the landlord.”" },
        { q: "What is HMO X's summary of the Act for HMOs?", o: ["Not the end of HMOs, but the end of winging it", "The end of the HMO market", "No change for landlords", "Only student HMOs are affected"], a: 0, why: "Well-run, well-documented HMOs are least affected." }
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: "operations",
      title: "Running an HMO well",
      mins: 20,
      summary: "Management, running costs, the home tier percentage, tier slippage and the discipline that holds value.",
      sections: [
        { h: "Operate to the tier it holds", p: [
          "Between the build and the sale sit the years of operating, where most of an HMO's life and risk sit. The Operator rule: “Operate to the tier it holds, not the rooms it fills.”",
          "Occupancy says the rooms are full. The home tier percentage says whether the rent is right. A house fully let at 83% is under-performing, with no empty room to warn you. “Run the house on the second number.”"
        ]},
        { h: "Home tier percentage", p: ["The rent an HMO earns as a percentage of what its home tier sustainably earns in its town:"], table: { head: ["Band", "Rent against home tier"], rows: [
          ["Launch premium", "115% or more: a newness premium that will fade"], ["Settling", "105% to 114%"], ["At tier", "96% to 104%: market, asset and operation aligned"], ["Drift", "85% to 95%: deferred capex or lagging rents, with a clear way back"], ["Sub-tier", "Under 85%: a tier or more below home tier, often where value-add begins"]
        ]}},
        { h: "Tier slippage", list: [
          "Slippage is the default. Left passive, without capex and disciplined management, an HMO drifts down roughly one tier every 24 to 36 months. A new Tier 1 conversion is a Tier 2 asset by year three.",
          "It shows up as slower lets and tenants negotiating, not empty rooms.",
          "How long a tier holds depends on management: very well run 12 to 15 years, typically run 8 to 10, poorly run under 5.",
          "Tier defence: a capex reserve of about £500 to £1,000 per room per year, plus a refit every 5 to 7 years. Skipping it “borrows from the refinance”. Gold-plating past the tier is the opposite leak, because what tenants can afford caps the rent."
        ]},
        { h: "Management sets the ceiling", p: ["However good the building, an HMO cannot hold a higher tier than its management supports."], table: { head: ["Management", "Highest tier it supports"], rows: [
          ["Co-living operator", "T1"], ["Agent, or a landlord with proper systems", "T2"], ["Active private landlord", "T3"], ["Passive or live-in landlord", "T4"]
        ]}},
        { h: "Self-manage or use an agent?", list: [
          "Both are legitimate. Self-manage only with all four conditions: time, temperament, local knowledge and standards. If any one is missing, use an agent from day one.",
          "“Self-management is a vocational discipline, not a cost-saving exercise.”",
          "Good HMO specialist agents typically charge about 10% to 15% plus VAT; question anything much under 10% and read the exit terms. “The right agent at 12% is invariably cheaper than the wrong agent at 9%.”",
          "“The agent runs the asset. The owner runs the agent.” Penalties are served on the licence holder, not the agent."
        ]},
        { h: "Letting rooms well", list: [
          "Market a room before it is empty and reply to enquiries fast; in a crowded market new adverts drop off page one within hours.",
          "Small, regular rent reviews beat a catch-up after three years. Keep rents at market: under-renting hurts the tenant mix and the sale.",
          "Mid-market rooms let best. New conversions often let to professionals for 2 to 3 years, then settle into working tenants.",
          "Spot-check an agent by searching for your own room as a tenant would."
        ]},
        { h: "Running costs", p: ["Bills are usually included in the room rent, which makes rooms easier to let but puts the cost risk on the owner."], table: { head: ["Set-up", "Typical operating costs, as a share of rent"], rows: [
          ["Well run, with an agent", "35% to 45%"], ["Well run, self-managed", "25% to 35%"], ["Tenants pay the bills", "20% to 30%"]
        ]}},
        { h: "What tenants can afford", p: ["A tenant spends about 30% of gross income on housing: £25,000 a year supports about £625 a month, £30,000 about £750, £35,000 about £875 and £40,000 or more about £1,000. Most Midlands and northern HMO tenants earn £25,000 to £35,000, which is Tier 2 and Tier 3 territory."] },
        { h: "Run it like a business", list: [
          "Keep accounts per HMO and a room-by-room rent roll with voids tracked.",
          "Set certificate reminders 90, 60 and 30 days before expiry. Aim to produce the full compliance pack in five minutes.",
          "Re-baseline every HMO once a year: home tier, current percentage, last year's percentage, the change and the action.",
          "“A lone wolf, old school, ‘sod it’ style HMO landlord is not a good place to be any more.” This is the age of systems and structure."
        ]}
      ],
      questions: [
        { q: "An HMO is fully let at 83% of its home tier rent. What is its position?", o: ["Sub-tier: under-performing despite full occupancy", "At tier", "Launch premium", "Performing perfectly"], a: 0, why: "Occupancy hides soft rents. Under 85% is sub-tier." },
        { q: "An HMO earns 90% of its home tier rent. Which band is that?", o: ["Drift", "At tier", "Settling", "Sub-tier"], a: 0, why: "Drift is 85% to 95%." },
        { q: "Left passive, how fast does an HMO typically slip?", o: ["About one tier every 24 to 36 months", "One tier every 10 years", "One tier every 3 months", "It never slips if fully let"], a: 0, why: "Slippage is the default without capex and disciplined management." },
        { q: "What annual capex reserve does HMO X recommend?", o: ["About £500 to £1,000 per room, plus a refit every 5 to 7 years", "£50 per house", "£5,000 per room", "Nothing until the refinance"], a: 0, why: "Skipping it borrows from the refinance." },
        { q: "An HMO is run by an active private landlord. What is the highest tier it can hold?", o: ["T3", "T1", "T2", "T5"], a: 0, why: "Management is a ceiling: an active private landlord supports up to T3." },
        { q: "Which four conditions must all be present to self-manage?", o: ["Time, temperament, local knowledge and standards", "Capital, a van, a degree, a licence", "An SPV, a broker, an agent, an accountant", "A CP12, an EICR, an EPC, an FRA"], a: 0, why: "If any one is missing, use an agent from day one." },
        { q: "A tenant earns £30,000 a year. Roughly what monthly rent can they afford?", o: ["About £750", "About £1,250", "About £450", "About £1,000"], a: 0, why: "About 30% of gross income: £30,000 × 30% ÷ 12 = £750." }
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: "jargon",
      title: "The language of HMOs",
      mins: 20,
      summary: "Yields, ROCE, GDV, valuation bases and the Tier Methodology terms, with a worked example.",
      sections: [
        { h: "Money terms", terms: [
          ["Gross yield", "Annual rent when fully let ÷ price × 100. The headline figure buyers compare."],
          ["Net yield", "Annual rent less operating costs (including voids) ÷ price × 100. “Net is king.”"],
          ["ROCE (return on capital employed)", "Annual profit after finance costs ÷ the cash the buyer actually puts in."],
          ["LTV", "Loan to value, measured against the lender's valuation, not the price."],
          ["ICR", "Interest cover ratio: how far the rent must exceed the stressed mortgage interest. Lenders set their own; always say “confirm live with a broker”."],
          ["GDV", "Gross development value: what a scheme is worth once finished."],
          ["BRRR", "Buy, refurbish, refinance, rent: the developer's cycle of recycling cash through a refinance."],
          ["SPV", "A limited company used to hold property. Section 24 restricts mortgage-interest relief for property held personally; a company can deduct it in full. Structure is a question for a specialist accountant."],
          ["SDLT", "Stamp duty land tax. Buyers of additional homes pay a surcharge. Our figures are indicative."]
        ]},
        { h: "Worked example", p: [
          "A 6-bed HMO priced at £300,000 lets for £39,000 a year when full, bills included.",
          "Gross yield: £39,000 ÷ £300,000 = 13.00%.",
          "Operating costs at 30%: £11,700. Net income: £27,300. Net yield: £27,300 ÷ £300,000 = 9.10%.",
          "With a 75% interest-only mortgage (£225,000 at 6%): interest is £13,500 a year, so profit is £13,800. Cash in is the £75,000 deposit plus £20,000 stamp duty = £95,000, before fees. ROCE: £13,800 ÷ £95,000 = 14.53%.",
          "Thirty-second sense check: gross annual rent ÷ rooms ÷ 12 = average room rent (£541 here). Compare it with the area: around £450 where rooms should make £600 suggests Tier 4 or 5."
        ]},
        { h: "Valuation and market terms", terms: [
          ["Bricks-and-mortar value", "What the building would sell for as a family home with vacant possession. Often the floor."],
          ["Investment (commercial) value", "A value based on the income, capitalised at a yield."],
          ["Asking, clearing and sold yields", "Asking is the marketing yield; clearing is what a competitive sale actually achieves; sold is the completion yield. Never average them."],
          ["Comparables (comps)", "Sold, auction and completed prices first; asking prices second. “Exit comps ultimately dictate finance values.”"],
          ["Guide and reserve", "At auction the guide draws bidders in; the reserve is the confidential minimum."],
          ["Gazundering", "A buyer cutting their offer just before exchange. Committed Sale fixes the price at acceptance to stop it."],
          ["Buyer A and Buyer B", "Buyer A creates value: buys a house, converts or improves and refinances. Buyer B wants a finished, well-run, well-papered HMO and will pay a premium for it."],
          ["Grandfather rights", "A lawful HMO use that pre-dates an Article 4 direction. It passes to every later owner and cannot be recreated."]
        ]},
        { h: "Tier Methodology terms (use them word for word)", terms: [
          ["Home tier", "The tier an HMO's rooms, bathrooms, condition, location and management sustainably support, from T1 to T5. Home tier rent is the analytical 100%."],
          ["Home tier %", "The rent it earns as a percentage of what its home tier earns in its town: “the single travelling number”."],
          ["Trajectory", "Where the percentage is heading over 3, 5 and 10 years, by how well the HMO is run."],
          ["Launch premium", "New or newly refurbished rooms let above their home tier rent for the first year or two, then settle."],
          ["Tier slippage", "The drift down the tiers when capex, compliance or management slip."],
          ["Leverage trap", "Borrowing against launch-level rent or value, which a lender's valuer will not see once the premium fades."],
          ["The four T1 criteria", "All four, today: room size (14 to 16 sqm single, 18 to 22 sqm dual), an A1 location, hotel-standard acoustics and privacy, and hotel-grade functionality. Fail one and it is Tier 2."],
          ["Buy It Right", "Match the tier to the buyer: Tier 2 and Tier 3 first; 8-bed HMOs after one HMO; Tier 4 value-add after one HMO, or two if an agent will run it."]
        ]}
      ],
      questions: [
        { q: "An HMO lets for £36,000 a year and is priced at £300,000. What is the gross yield?", o: ["12.00%", "10.00%", "8.33%", "14.40%"], a: 0, why: "£36,000 ÷ £300,000 = 12.00%." },
        { q: "What does ROCE measure?", o: ["Profit as a percentage of the cash put in", "Rent as a percentage of the price", "The loan as a percentage of value", "The rise in value since purchase"], a: 0, why: "Return on capital employed compares profit to the buyer's own cash." },
        { q: "What is the thirty-second sense check on an HMO?", o: ["Gross annual rent ÷ rooms ÷ 12, compared with the area", "Price ÷ rooms", "Net rent ÷ 12", "Price ÷ gross rent"], a: 0, why: "It gives the average room rent, a quick read on the real tier." },
        { q: "Who is “Buyer B”?", o: ["An investor who wants a finished, well-run HMO and will pay a premium", "A builder converting houses", "A first-time owner-occupier", "A rent-to-rent operator"], a: 0, why: "Buyer A creates value; Buyer B buys the finished product." },
        { q: "What is the leverage trap?", o: ["Borrowing against launch rent that a lender won't see once it fades", "A mortgage with an early repayment charge", "Buying in an Article 4 area", "Paying the stamp duty surcharge"], a: 0, why: "Launch rents settle; a refinance based on them leaves the owner exposed." },
        { q: "Can you average asking, clearing and sold yields into one figure?", o: ["No, they are never averaged", "Yes, it gives a fair middle", "Only for T3 HMOs", "Only in the South"], a: 0, why: "They measure different things." },
        { q: "Which are the four T1 criteria?", o: ["Room size, A1 location, hotel-standard acoustics, hotel-grade functionality", "All en-suite, new kitchen, bills included, under 5 years old", "Professional tenants, 8+ beds, sui generis, licensed", "Over 12% gross, fully let, agent-managed, Article 4 area"], a: 0, why: "All four, today, or the home tier is T2." }
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: "valuation",
      title: "How HMOs are valued",
      mins: 25,
      summary: "The house and the business, two valuation bases, the Tier Methodology and the evidence rules behind every HMO X figure.",
      sections: [
        { h: "The house and the business", p: [
          "You value an HMO as two things at once: a house and a business. Start with what the building is worth as a home, then let the income, planning position and compliance earn any premium above that, proven by what similar HMOs have actually sold for.",
          "“Justify every single penny above bricks-and-mortar value.” The gross yield is the conclusion of a valuation, not its starting point: “The 13% is the conclusion. It's the result of all of the analysis.”"
        ]},
        { h: "Three figures, one building", terms: [
          ["The house", "Bricks-and-mortar value: what it would fetch as an empty family home."],
          ["The lender's figure", "What a lender's panel surveyor puts on it for borrowing."],
          ["The sale value", "What a buyer will actually pay for the HMO as a going concern."]
        ], p: ["Our job is to justify the difference between them. A refinance has one valuer; a sale reaches many buyers. “Exit comps ultimately dictate finance values.”"] },
        { h: "Two valuation bases", list: [
          "Bricks and mortar: the default for most small C4 HMOs. The room income is set aside.",
          "Investment (income): the default for sui generis and possible on well-specified C4s. A lender's surveyor deducts running costs before applying a yield, so their yield is not the gross yield on the particulars.",
          "Which basis a lender uses is “the first underwriting question, not the last”, and a question for a specialist broker.",
          "A premium above bricks and mortar is earned by secured lawful use, specification, a deep lettings market, evidenced income and clean management. “Asserted, not evidenced, gets down-valued.”"
        ]},
        { h: "Net is king", list: [
          "Buyers and valuers work back from a net return. Two HMOs with the same rent can rightly sell at 13% and 15.6% gross if one costs more to run.",
          "When yields rise, rent growth is what protects value. Flat rents and rising yields mean falling values.",
          "Student comparables mislead: higher house values, lower rents and bills excluded push their yields down. A professional HMO's equivalent yield is several points higher.",
          "A 0.5% move in yield is worth roughly £10,000 of value at typical income levels, which is why yields are built from evidence, not guessed."
        ]},
        { h: "Three bases in every HMO X sales valuation", terms: [
          ["Bricks and mortar", "Vacant possession, a 180-day sale to a home buyer."],
          ["Current value", "As it stands, a 180-day sale to an HMO investor today."],
          ["Optimised value", "At the launch window after agreed work."]
        ], p: ["We may also give a finance figure for context. It is never used as an asking price."] },
        { h: "Evidence rules", list: [
          "Sold, auction and completed prices come first; asking prices are secondary. An old asking price that never sold shows where the market refused to buy.",
          "Never average Committed Sale asking yields, auction clearing yields and sold-register yields.",
          "Use actual rent statements, not a spreadsheet; build the rent room by room from let evidence.",
          "Cross-check with value per room, £ per square foot and the bricks-and-mortar floor.",
          "Where data is missing, flag the gap. Never fill it with an estimate."
        ]},
        { h: "Read through the HMO X Tier Methodology (Edition 2)", table: { head: ["Tier", "Label"], rows: [
          ["T1", "Premium / Studio"], ["T2", "New Quality: the defensible mainstream"], ["T3", "Standard / Older En-Suite"], ["T4", "Basic / Functional"], ["T5", "Distressed / Opportunity"]
        ]}, p: ["Tiers are set by fundamentals, never by price alone. T1 to T4 are operating tiers; T5 is an opportunity tier, where value sits in rights and footprint. Tiers 1 and 2 are valued on income; Tiers 4 and 5 move towards bricks and mortar."] },
        { h: "Setting the home tier: five tests", list: [
          "Rooms: T2 needs a 10 sqm+ average and 8 sqm+ smallest room; T3 needs 9 sqm+, or 12 sqm+ if not en-suite.",
          "Bathrooms: T2 is all en-suite; T3 is half or more en-suite, or no more than 4 people per shared bathroom.",
          "Condition: 0 to 7 years since conversion or refurbishment starts at T2, 8 to 14 at T3, 15+ at T4. Move one tier for excellent or poor condition.",
          "Location ceiling: A1 allows up to T1, A2 up to T2, B up to T4.",
          "Management ceiling: co-living up to T1, agent or landlord with systems up to T2, active private landlord up to T3, passive or live-in landlord up to T4."
        ], p: ["Take the middle of the three building readings, then cap it by the two ceilings. “A brand-new conversion is usually a Tier 2 asset wearing a Tier 1 price. Read the tier, not the finish.”"] },
        { h: "“I've had a down valuation”", p: [
          "This is very rarely true. Usually the lender's valuer simply did not reach the borrower's hopes, because the hopes were built on launch rents or new-room rates rather than the many settled comparables a valuer uses."
        ]},
        { h: "Rules for anything we write", list: [
          "Every figure has a named source and a date. Give ranges, not false precision. Say whether rents include bills, every time.",
          "Never print named lender criteria, LTV ceilings or ICR thresholds: “confirm live with a broker”.",
          "Our valuations are not RICS Red Book valuations and do not replace a lender's valuation."
        ]}
      ],
      questions: [
        { q: "How does HMO X describe what you are valuing in an HMO?", o: ["A house and a business", "A house only", "A business only", "A pension"], a: 0, why: "Start with the house, then let the business earn any premium above it." },
        { q: "What is the default valuation basis for most small C4 HMOs?", o: ["Bricks and mortar", "Investment (income)", "Replacement cost", "Auction guide"], a: 0, why: "Investment valuation is the default for sui generis and possible on well-specified C4s." },
        { q: "Two HMOs have the same rent but one costs much more to run. What happens to its value?", o: ["Higher gross yield, lower price", "Same price", "Lower gross yield", "Higher price"], a: 0, why: "Valuers work back from net. “Net is king.”" },
        { q: "What does an old asking price that never sold tell you?", o: ["Where the market refused to buy", "The floor price", "The refinance value", "A midpoint to split"], a: 0, why: "Sold and completed evidence comes first." },
        { q: "An HMO's three building tests read T2, T3 and T3, in a B location with an active private landlord. What is its home tier?", o: ["T3", "T2", "T4", "T1"], a: 0, why: "The middle reading is T3; neither ceiling pulls it lower." },
        { q: "What is the label for Tier 5?", o: ["Distressed / Opportunity", "Basic / Functional", "Add-Value / Redevelopment", "Standard / Older En-Suite"], a: 0, why: "Edition 2 uses Distressed / Opportunity." },
        { q: "A client says they've had a down valuation. What is usually going on?", o: ["The valuer didn't reach their hopes, which were built on launch rents", "The property has subsidence", "The council has revoked the licence", "Rents fell overnight"], a: 0, why: "Valuers use settled comparables, not new-room rates." },
        { q: "A client asks what LTV and ICR a lender will use. What do you say?", o: ["Confirm live with a broker", "Quote the latest criteria table", "Give our best guess", "Use their last mortgage"], a: 0, why: "We never print live lender criteria." }
      ]
    },

    /* ------------------------------------------------------------------ 8 */
    {
      id: "lenses",
      title: "The five lenses",
      mins: 25,
      summary: "Buying, operating, adding value, developing and selling: what each lens asks and the rule that goes with it.",
      sections: [
        { h: "One framework, five lenses", table: { head: ["Lens", "For", "Its rule"], rows: [
          ["Buy", "Buying an established HMO on its income", "Buy the tier it holds, not the price it asks."],
          ["Operate", "Holding and optimising", "Operate to the tier it holds, not the rooms it fills."],
          ["Add value", "Buying slipped Tier 4 and Tier 5 stock to improve", "Spec to the tier it holds, not past it."],
          ["Develop", "Creating an HMO and financing it so it survives", "Leverage to the tier it holds, not the tier it performs."],
          ["Sell", "The moment years of ownership are priced", "Sell the tier it holds, on the timeline you chose."]
        ]}, p: ["Every lens asks the same question in a different way: what does this HMO sustainably hold? “The framework is the start, the percentage is the diagnostic, the application is the work.”"] },
        { h: "Choosing a route in", list: [
          "There are three ways into HMOs: create a new one, add value to a tired one, or buy an established one. “Be led by the deal, not loyalty to a strategy.”",
          "Settle six things first: location, tenant type, budget, your plan, management and scale. “Every decision here is tenant-led.”",
          "HMO X's recommended entry point is the quality established HMO, a Tier 2 or Tier 3. “Development is for the experienced, not the keen.”",
          "Building a like-for-like HMO now often costs more than buying a ready-made one, so the established resale market offers value."
        ]},
        { h: "Develop", list: [
          "Every development decision is a leverage decision: day-one rent sets the valuation, the valuation sets the debt, and the debt decides whether the scheme survives the first refinance.",
          "Gear to the blend, not the launch: Year 1 at 115% of home tier, Year 2 at 104%, Years 3 to 5 at 100%, averaging at or below 100%. Bank the premium; never borrow against it.",
          "The cost-led GDV error is pushing the GDV up until the appraisal balances. A valuer prices what the HMO earns, not what it cost.",
          "Tier 1 is a product class, not a finish level: it must meet all four criteria today, and count demand against new supply. Design fire safety, acoustics and ventilation in at drawing stage; late fixes cost far more.",
          "The big equity release happens once, at the first refinance. Do not plan on a second."
        ]},
        { h: "Operate", list: [
          "Read the home tier percentage, not occupancy, and name the one binding bottleneck: room size, en-suites, communal quality, management or rents left behind.",
          "Drift (85% to 95%) is usually recoverable cheaply. Under 85% is structural: re-tier or change strategy.",
          "The sharpest self-test: “What percentage will my next refinance value at?”",
          "“Protect the value before you add to it”: a clean compliance pack narrows the yield a valuer applies."
        ]},
        { h: "Add value", list: [
          "Genuine value-add changes what the building is: extensions, reconfiguring for more bedrooms, all en-suite, a change of planning class, a loft or floor drop, or compliance work that unlocks lending.",
          "Paint, furniture and a change of tenant type pay through the margin, not the valuation. “Lender surveyors fund rent, not invoices.”",
          "The refinance trap: without material change, a surveyor uses your own purchase as the comparable. “Your entry price is your worst comparable.”",
          "Separate management gaps (an operator's fix) from renovation gaps (a capex fix), and cost the target tier honestly before you start."
        ]},
        { h: "Buy", list: [
          "“The asking price is a claim about tier.” The gap between the asking price and your working valuation is “either your negotiating room or your overpayment”.",
          "Three checks: what am I inheriting; what will the lender say (does it stack at 100% of home tier, or only at 115%); can I act?",
          "See the module on buying an HMO well."
        ]},
        { h: "Sell", list: [
          "“Plan the exit; don't trigger it.” Plan 12 to 24 months ahead, and hold the tier until completion.",
          "“The pack is not paperwork. It is price.”",
          "See the module on selling an HMO."
        ]},
        { h: "Scale is a choice", p: [
          "One way to think about portfolio size: a corner shop (1 to 5 HMOs, self-managed), a Tesco Express (part-time help from about 6) and a supermarket (systemised, from about 10). “A portfolio is a strategy, not a number.” Concentrating in one corridor shares contractors and agents; “scale does not eliminate risk, it concentrates it.”"
        ]}
      ],
      questions: [
        { q: "What is the Developer lens rule?", o: ["Leverage to the tier it holds, not the tier it performs", "Build as many rooms as possible", "Always borrow the maximum", "Develop only in Article 4 areas"], a: 0, why: "Day-one rent sets the debt; the debt decides survival." },
        { q: "How should a developer gear across a five-year fix?", o: ["To a blend: 115%, 104%, then 100% of home tier", "To the launch rent every year", "To 120% throughout", "To 90% throughout"], a: 0, why: "The average should stay at or below 100% of home tier." },
        { q: "What is the cost-led GDV error?", o: ["Pushing the GDV up until the appraisal balances", "Using too many comparables", "Ignoring stamp duty", "Valuing on bricks and mortar"], a: 0, why: "A valuer prices what the HMO earns, not what it cost." },
        { q: "Which works justify a higher valuation on refinance?", o: ["Adding en-suites, a change of planning class or more floor space", "Paint and new furniture", "Switching from students to professionals", "Signing a lease with a provider"], a: 0, why: "Lender surveyors fund rent, not invoices; material change is needed." },
        { q: "Without material change, what comparable will a surveyor use on your refinance?", o: ["Your own purchase price", "The highest sale in the street", "The asking price", "The council tax band"], a: 0, why: "“Your entry price is your worst comparable.”" },
        { q: "What is HMO X's recommended entry point for a first HMO?", o: ["A quality established Tier 2 or Tier 3", "A new Tier 1 build", "A Tier 5 rescue", "A rent-to-rent deal"], a: 0, why: "“Development is for the experienced, not the keen.”" },
        { q: "What is the Seller lens rule?", o: ["Sell the tier it holds, on the timeline you chose", "Sell at the highest asking price", "Always sell at auction", "Sell only when forced"], a: 0, why: "“Plan the exit; don't trigger it.”" },
        { q: "When does the big equity release happen on a development?", o: ["Once, at the first refinance", "At every refinance", "On completion of the build", "Every five years"], a: 0, why: "Do not plan on a second big release." }
      ]
    },

    /* ------------------------------------------------------------------ 9 */
    {
      id: "buyers",
      title: "Buying an HMO well",
      mins: 20,
      summary: "Who buys HMOs, how to test a purchase, what a buyer inherits and how a purchase goes from offer to completion.",
      sections: [
        { h: "Who buys HMOs", list: [
          "Buyer B buys finished, tenanted, licensed HMOs at a yield price: often busy professionals, business owners, cash or overseas buyers. “Where a developer sees opportunity, these buyers see risk.”",
          "Buyer A buys to create value and mostly buys at auction.",
          "Also: first-time HMO investors, portfolio builders, operators, family offices and small funds. Funds mostly buy student, supported and social housing rather than traditional HMOs."
        ]},
        { h: "Is the buyer ready? The five-point test", list: [
          "They have spoken to a specialist HMO broker.",
          "They know their borrowing range and structure.",
          "Their deposit is certain.",
          "They have tested the numbers at home tier rent, not today's asking rent.",
          "They can move quickly."
        ]},
        { h: "Testing a purchase", list: [
          "Pick the corridor before you pick the asset: real demand means rooms wanted, not rooms listed, with two separate sources of tenants nearby.",
          "Work the price back from the lender: a blended rent roll, the lender's stress test and loan to value give the maximum price. Settle finance before the offer.",
          "Budget for working capital after completion (first interest payments, licence fee, void cover, a buffer); it is the line most often underestimated.",
          "Higher gross yield usually means the market is pricing in weaker fundamentals.",
          "“If a rate of around 6% to 6.5% makes a deal fall apart, the deal probably wasn't good enough in the first place.”"
        ]},
        { h: "Buy It Right", p: [
          "Match the tier to the buyer: Tier 2 and Tier 3 first; 8-bed HMOs after one HMO; Tier 4 value-add after one HMO, or two if an agent will run it. Buy Tier 5 only with vacant possession in mind: never buy a non-compliant HMO with tenants in."
        ]},
        { h: "What the buyer inherits", list: [
          "The licence does not transfer: apply for a new one on completion.",
          "Lawful use, the FRA and fire records, CP12, EICR, EPC, the tenancies and deposits, and the title.",
          "Every gap is a lever before the offer and a cost after it. “A bad HMO, you cannot buy it cheaply enough.”"
        ]},
        { h: "From offer to completion (Committed Sale)", list: [
          "The buyer passes AML and ID checks, names a solicitor and shows proof of funds before exclusivity.",
          "On acceptance the buyer pays a £3,500 reservation deposit. The property comes off the market and the price is fixed, which stops gazundering.",
          "A 56-day exclusivity period to exchange; completion typically within 14 days of exchange. A buyer who pulls out without good reason loses the deposit.",
          "Valuation: ask the lender for a specialist HMO valuer, and send them the Buyer Valuation Pack and rent roll in advance. “A surveyor who arrives with the rent roll values the going concern. One who arrives cold values a house.”",
          "Prices are typically agreed around 3% to 4% below asking."
        ]},
        { h: "After completion", list: [
          "Re-protect deposits and serve Prescribed Information within 30 days; serve change of landlord notices.",
          "Reconcile the rent schedule with the tenancies and get the rent ledger and arrears statement.",
          "Diarise renewals: gas yearly, EICR every 5 years, fire records as set out in the FRA, EPC every 10 years.",
          "Every HMO X buyer can join the Hub free, and their buyer pack becomes the baseline for their first Health Check."
        ]},
        { h: "Rules", list: [
          "Everything we give buyers is indicative. Tax and mortgage products are outside HMO X's remit: refer them on.",
          "Keep buyers' details in our systems only."
        ]}
      ],
      questions: [
        { q: "Which is part of the five-point buyer readiness test?", o: ["The numbers are tested at home tier rent, not asking-day rent", "They have viewed at least ten HMOs", "They own a property in the same town", "They have joined the Hub"], a: 0, why: "Broker spoken to, borrowing known, deposit certain, numbers at home tier rent, can move quickly." },
        { q: "Under Buy It Right, which tiers should a first-time HMO buyer start with?", o: ["Tier 2 and Tier 3", "Tier 1 only", "Tier 4 and Tier 5", "Any tier with a high yield"], a: 0, why: "Tier 2 and Tier 3 first." },
        { q: "What is the line most often underestimated in a first HMO budget?", o: ["Working capital after completion", "Stamp duty", "The deposit", "The survey fee"], a: 0, why: "First interest, licence fee, void cover and a buffer all land at once." },
        { q: "Why should a buyer never take on a non-compliant Tier 5 with tenants in?", o: ["Fines and liability transfer on completion and outweigh the income", "Lenders always refuse tenanted HMOs", "The licence would transfer", "Insurance is cheaper when vacant"], a: 0, why: "Buy Tier 5 with vacant possession in mind." },
        { q: "What deposit does a Committed Sale buyer pay on acceptance?", o: ["A £3,500 reservation deposit", "10% of the price", "Nothing until exchange", "£400"], a: 0, why: "It takes the property off the market and fixes the price." },
        { q: "What is the most urgent task for a buyer on completion?", o: ["Apply for a new HMO licence", "Redecorate the communal areas", "Raise the rents", "Renew the EPC"], a: 0, why: "Licences do not transfer." },
        { q: "What should a buyer send their lender's valuer in advance?", o: ["The Buyer Valuation Pack and the rent roll", "Nothing; let them arrive cold", "Last year's asking prices", "The seller's mortgage offer"], a: 0, why: "A valuer with the rent roll values the going concern." }
      ]
    },

    /* ------------------------------------------------------------------ 10 */
    {
      id: "marketing",
      title: "Selling an HMO",
      mins: 25,
      summary: "Why an HMO sale is a business exit, the routes to market, getting ready and looking after tenants during a sale.",
      sections: [
        { h: "A business exit, not a house sale", p: [
          "A house sale asks what it will fetch. An HMO sale asks what tier it really sits at and what that tier will sustainably hold. Buyers pay for evidenced income, compliance and lawful use, not just bricks and mortar.",
          "“HMOs either need to be a ‘deal’ or ‘ideal’ to sell well in this market.” Get it wrong and the price can “drop off a cliff all the way to bricks and mortar”."
        ]},
        { h: "The routes to market", p: ["We run every main route in-house, so the route we recommend is the one the evidence supports. “Asset tier sets the calibration of the listing. Seller circumstance sets the channel.”"], table: { head: ["Route", "Best for", "Timeline"], rows: [
          ["Committed Sale", "A well-run, compliant HMO ready to sell at a strong price (roughly 95% to 110% of home tier)", "Usually 90 to 180 days to exchange"],
          ["HMO X Auctions", "Selling on a fixed date, or an HMO with room to add value", "Usually 30 to 60 days"],
          ["Exit Planning", "An HMO that could sell for noticeably more after targeted improvements", "12 to 36 months"],
          ["Back to Resi", "4 to 6 person HMOs worth more as a family home; never 9+ beds", "6 to 18 months"],
          ["Hold and review", "When now isn't the right time: a mortgage exit charge, the rest of the portfolio, or circumstances", "We agree a date to look again"]
        ]}},
        { h: "Committed Sale", list: [
          "Off-market first to matched investors, then the wider database, then the portals. Buyers can match their brief to our stock with Find My Next HMO.",
          "Buyers pass AML, ID and proof-of-funds checks and name a solicitor before exclusivity.",
          "A £3,500 reservation deposit on acceptance, forfeited if the buyer doesn't proceed, then a binding 56-day exclusivity period to exchange."
        ]},
        { h: "HMO X Auctions", list: [
          "Every lot is an HMO and every guide and reserve is set through the Tier Methodology. Combined reach of 600,000+ registered buyers through EIG, plus our own buyer database.",
          "The guide sits 20% to 25% below open-market value to draw bidders in; the reserve stays within 10% of the guide, stays confidential, and is locked in once registered bidding can be read. “A keen guide brings the bidders. Bidders bring competition. Competition lifts the price.”",
          "About three weeks of intensive marketing. A lot that is not tracking is pulled before the day.",
          "Unconditional exchange on the fall of the hammer with a 10% deposit; completion in 6 to 8 weeks. Pre-auction offers can exchange early.",
          "Our record: 100% of HMOs sold at our auctions have completed, 90% of lots that go to live bidding sell, and 58% of sales exchange before auction day."
        ]},
        { h: "Getting ready", list: [
          "“Sale-readiness is a daily operating discipline, not a one-off project.” Exit planning starts on day one of ownership.",
          "The readiness pack: the licence and conditions, lawful use, the safety records, the wider pack, a signed tenancy and deposit certificate for every room, 12 to 18 months of actual rent statements, full occupancy on the valuer's visit, and clean title.",
          "Don't list to “test the market”: a failed public sale unsettles tenants and follows the property into its next sale or refinance.",
          "A refinance has one valuer; a sale reaches many buyer types. “If it values up as expected, keep it. If you can't get the refinance you hoped for, sell it.”"
        ]},
        { h: "Tenants during a sale", list: [
          "Tell tenants early and honestly why.",
          "Keep viewings to a minimum: give notice, group viewings where you can, and plan for three or four investor viewings.",
          "Never offer tenants financial incentives."
        ]},
        { h: "Portfolios", p: [
          "HMO portfolios usually sell for the sum of the parts, not at a premium for scale and not at the bulk discount buy-to-let portfolios suffer. Build a portfolio one buyer could underwrite as one deal. “Hope is not an exit plan.”"
        ]},
        { h: "Rules for every listing", list: [
          "Nothing goes live until the pack has been checked and the seller has approved the listing.",
          "No estate-agent language: no “stunning”, “incredible opportunity” or “going fast”.",
          "Never name Sprift, never promise an EPC, never publish a past client's address."
        ]}
      ],
      questions: [
        { q: "Which route suits a compliant, well-run HMO where the seller wants price with certainty?", o: ["Committed Sale", "Auction", "Back to Resi", "Hold and review"], a: 0, why: "Committed Sale fits stabilised, compliant HMOs around 95% to 110% of home tier." },
        { q: "Where does an HMO X auction guide usually sit?", o: ["20% to 25% below open-market value", "At open-market value", "10% above value", "At the reserve"], a: 0, why: "A keen guide brings the bidders; the reserve stays within 10% of the guide." },
        { q: "What happens at the fall of the hammer?", o: ["Unconditional exchange with a 10% deposit", "The buyer has 56 days to decide", "The reserve is announced", "The buyer pays £3,500"], a: 0, why: "Auction exchanges on the hammer; completion follows in 6 to 8 weeks." },
        { q: "Why does HMO X discourage “testing the market”?", o: ["A failed sale unsettles tenants and follows the property into its next sale or refinance", "It is illegal", "Portals charge more", "Buyers always pay more later"], a: 0, why: "A bad public history becomes a bad comparable." },
        { q: "How do HMO portfolios usually sell?", o: ["For the sum of the parts", "At a large bulk discount", "At institutional yields of 6%", "Only at auction"], a: 0, why: "Expect the sum of the parts, not a premium for scale." },
        { q: "How should tenants be treated when an HMO is for sale?", o: ["Told early and honestly, with viewings kept to a minimum", "Not told until completion", "Offered cash to leave", "Asked to show buyers round"], a: 0, why: "Honesty and few viewings protect the tenancy and the sale." },
        { q: "Which phrase should never appear in an HMO X listing?", o: ["“Stunning opportunity, going fast!”", "“Fully let, licensed for six”", "“13.00% gross, bills included”", "“Lawful C4 use confirmed by LDC”"], a: 0, why: "No estate-agent language and no hype." }
      ]
    },

    /* ------------------------------------------------------------------ 11 */
    {
      id: "market",
      title: "The national HMO market",
      mins: 20,
      summary: "Where yields sit, how the market has moved since 2018, what drives demand in a town and the evidence behind every read.",
      sections: [
        { h: "How the market has moved", list: [
          "2020: gross yields ran in bands by area, from 15%+ in low-demand areas to under 8% in London and the South Coast. A flat 10% for every HMO was rarely right.",
          "October 2022 was the turning point. After the mini-budget, yields rose almost everywhere; flat-rent HMOs lost value, and rent growth was the only thing protecting it.",
          "2023 to 2024: more value-add buyers than ready-made buyers, as squeezed margins pushed investors towards creating value; many hands-off buyers left after management failed to deliver.",
          "2024 onwards: higher stamp duty from October 2024 hurt saleability; build costs rose by around half since 2021, so the cost of a new HMO often exceeds the price of a ready-made one.",
          "2025: a two-tier market, where HMOs sell well if they are a clear deal or an ideal turnkey asset.",
          "2026: “Most HMOs need to hit at least 12% gross yield” to work as an investment. The Renters' Rights Act is “a market reset” that rewards quality."
        ]},
        { h: "Where yields sit (2026)", table: { head: ["Market", "Gross yield on compliant stock"], rows: [
          ["Most Midlands and northern markets", "11.50% to 12.50%"], ["South coast and southern commuter belt", "9.50% to 10.75%"], ["Our register: T2 / T3 / T4", "12.0% / 12.9% / 14.8%"]
        ]}, p: ["The average yield at exchange across recent HMO X sales has been about 13%, with some southern sales under 10%."] },
        { h: "Lessons that keep coming back", list: [
          "Judge an HMO by its long-term net income and occupancy, not launch-day rents or how it looks. “Net income is all that counts.”",
          "Oversupply can wipe out rent growth. “HMOs are the most transient property type”: most new HMOs aim at the top of the market and settle into the middle tiers as newer stock arrives.",
          "Article 4 usually brings a rush of conversions and a dip in the run-up, then protects established HMOs with lawful use. “Article 4 is your friend not your foe” for buyers of ready-made HMOs.",
          "An active rent-to-rent contract usually leaves an HMO worth only bricks and mortar to a buyer.",
          "Compliance gaps slow or kill sales: non-compliant HMOs increasingly sell with vacant possession at a discount. “No sophisticated investor will pay a premium to inherit someone else's compliance exposure.”",
          "If a deal still works at a 6%+ stress rate, it is probably solid."
        ]},
        { h: "What drives demand in a town", terms: [
          ["Earnings", "Resident earnings govern most markets; workplace earnings govern where in-commuters are the main tenants."],
          ["Affordability floor", "Resident median earnings × 30% ÷ 12: roughly what a tenant can pay a month. A derived figure, so label it as one."],
          ["18 to 34 population", "The core demand cohort for rooms."],
          ["Rooms wanted against rooms listed", "Real demand, rather than supply. Stagnating rents usually mean oversupply."],
          ["Jobs density and claimants", "Whether there is work to support rents."]
        ]},
        { h: "What we say publicly", p: ["These are the figures on hmox.co.uk (November 2026). Use them in anything a client sees."], list: [
          "5,100+ HMO sales, auction lots and listings from the last two years, and 23,400+ room rents from the last 12 months, across 320 towns, each with its own evidence. New sales, rents and our own valuations are added every Friday.",
          "700+ HMO sales completed since 2018, and 150+ HMO valuations carried out every month.",
          "The UK's first auction house dedicated solely to HMOs, launched June 2025.",
          "HMO X Sales charges buyers 0% commission."
        ]},
        { h: "Where our data comes from", list: [
          "HM Land Registry, Rightmove, room-rent listings and rooms-wanted adverts; ONS earnings, population and rents; council planning portals and licensing registers; local housing allowance rates.",
          "EIG auction results and HMO X Auctions clearing prices, our own comparables database and our valuation register.",
          "Every Monday the past week's auction lots are added; every Friday field notes are scanned and the tools are recalibrated."
        ]},
        { h: "Using market data properly", list: [
          "State the reference period, not just a year.",
          "Never estimate a missing figure from a neighbouring area. Report the gap.",
          "Old social posts and older reports carry old numbers. Use current evidence only."
        ]}
      ],
      questions: [
        { q: "When does HMO X date the turning point when yields started rising almost everywhere?", o: ["October 2022", "March 2020", "June 2016", "May 2026"], a: 0, why: "After the mini-budget; rent growth then became what protected value." },
        { q: "Roughly what gross yield does compliant HMO stock sell at in most Midlands and northern markets?", o: ["11.50% to 12.50%", "6% to 7%", "18% to 20%", "9.50% to 10.75%"], a: 0, why: "9.50% to 10.75% is the south coast and commuter belt." },
        { q: "What usually happens to local HMO values around an Article 4 direction?", o: ["A dip in the run-up, then established HMOs are protected", "A permanent collapse", "An instant doubling", "Nothing"], a: 0, why: "The rush of conversions comes before enforcement; lawful use then becomes valuable." },
        { q: "What does an active rent-to-rent contract usually do to a sale value?", o: ["Reduces it to bricks and mortar", "Adds a premium", "Has no effect", "Doubles the yield"], a: 0, why: "Buyers won't pay the HMO premium for it." },
        { q: "How is the affordability floor worked out?", o: ["Resident median earnings × 30% ÷ 12", "Average room rent × 12", "House price ÷ 30", "Workplace earnings ÷ 52"], a: 0, why: "It is a derived figure, labelled as derived." },
        { q: "Which figure can you use publicly for HMO X's evidence base?", o: ["23,400+ room rents from the last 12 months", "Every HMO in the UK", "1 million comparables", "Whatever the latest internal count shows"], a: 0, why: "Use the figures on hmox.co.uk in anything a client sees." },
        { q: "A town is missing an earnings figure. What do you do?", o: ["Report the gap", "Use the neighbouring town's figure", "Use the regional average", "Leave it blank without comment"], a: 0, why: "Never estimate a missing figure." }
      ]
    },

    /* ------------------------------------------------------------------ 12 */
    {
      id: "services",
      title: "Services, products and tools",
      mins: 20,
      summary: "What we offer sellers, owners, buyers and developers, what it costs, and the tools behind it.",
      sections: [
        { h: "For sellers", p: ["All prices are plus VAT."], table: { head: ["Service", "What it is", "Fee"], rows: [
          ["Sales appraisal", "Richard's opening valuation: three bases of value, a tier read and a route recommendation.", "Free"],
          ["Consultancy Sales Appraisal (CSA)", "A 30-minute call with Richard: should I sell, when, how and through which route.", "£150, credited against the route chosen"],
          ["Committed Sale", "Our structured private sale to vetted buyers, with a £3,500 buyer reservation deposit and 56-day exclusivity.", "£400 onboarding (deducted on completion) + 2%, minimum £4,000"],
          ["HMO X Auctions", "A keen guide, about three weeks of campaign, a fixed date and exchange on the hammer.", "£400 onboarding + 2.5%, minimum £5,000. Option for the buyer to pay half"],
          ["Exit Planning", "A costed plan to lift the price over 12 to 36 months, then launch.", "£995 first HMO, £200 each extra HMO in the same market"],
          ["Back to Resi (X HMO)", "For HMOs worth more as a family home: site visit, three-way valuation and plan.", "£995, credited on completion"]
        ]}},
        { h: "For owners and buyers", table: { head: ["Service", "What it is", "Fee"], rows: [
          ["HMO Health Check", "For owners who are holding: a full diagnostic with a visit from Richard, figures on each fix and the cost of the way back to 100%.", "£995 per HMO"],
          ["Non-sale valuation", "Our deepest manual valuation, for refinance, partner buy-outs, disputes or divorce.", "£395"],
          ["Buyer Valuation Pack", "Tier diagnosis, basis of value, comparables and lender guidance for an HMO being bought.", "Standard on every HMO X listing"],
          ["Property Information Report", "A 16-section brief that reads the asset end to end, from the investment verdict to the compliance pack. “A brief, not a brochure.”", "Included with listings"],
          ["Hand-prepared GDV report", "A 13-section report for towns with thin evidence.", "On request; recommend the instant GDV Appraisal first"]
        ]}},
        { h: "Our online tools", p: ["Five tools built on the evidence our team has gathered and checked by hand. Each report ends with next steps. All prices are plus VAT."], table: { head: ["Tool", "What it answers", "Price", "Time"], rows: [
          ["Value My HMO", "What it is worth, buyer demand from 1 to 5 at that figure, and the route to market that fits", "£19.99 launch price (RRP £99)", "About 3 minutes"],
          ["Tier Test", "Home tier T1 to T5, trading position, five-year trajectory, legal position and what to fix", "£99 launch price (RRP £299)", "About 10 minutes"],
          ["GDV Appraisal", "Refinance and sales GDV, the rent a lender will use, and the purchase price that makes it stack", "£99 launch price (RRP £299)", "About 8 minutes"],
          ["Find My Next HMO", "Where to buy, what the buyer's capital reaches, and HMO X stock that fits their brief", "Free", "About 4 minutes"],
          ["Location Intelligence Report", "The full picture for one town: priced example HMOs, room rents by tier, demand against supply, best postcode districts", "£99 launch price (RRP £199)", "On request"]
        ]}},
        { h: "How the tools work", terms: [
          ["Credit rule", "Every tool fee is credited in full to the client's next step with HMO X, within 12 months."],
          ["One property file", "Value My HMO, the Tier Test and the GDV Appraisal share one property file in the client's browser, so answers carry across. Nothing leaves their device until they ask for a report."],
          ["Indicative, not RICS", "The tools give indicative figures from our evidence. A valuer's follow-up confirms them with local comparables. The Tier Test is never free."]
        ]},
        { h: "Behind the scenes", terms: [
          ["Team Analyser", "Our buyer demand engine for the 320-town grid: a score, five reads, a price lever, route fit, comparables and room rents."],
          ["Weekly evidence scan", "Every Friday the evidence base is refreshed and the tools recalibrated. Every Monday the past week's auction lots are added."],
          ["Interactive reports", "Valuations can be issued as private web reports alongside the PDF. Figures must match exactly, and Richard approves them before they go."]
        ]},
        { h: "Rules that apply to every product", list: [
          "Our tools and reads support a valuation; they are never a value opinion on their own.",
          "Our valuations are not RICS Red Book valuations and do not replace a lender's valuation.",
          "Client-facing text never names Sprift and never promises an EPC.",
          "Nothing is published to the website, GoHighLevel, Jotform or the Team Analyser without Richard's OK."
        ]}
      ],
      questions: [
        { q: "What is the Committed Sale fee?", o: ["£400 onboarding + 2%, minimum £4,000, plus VAT", "£1,000 onboarding + 3%, no minimum", "1.5% with no onboarding fee", "£995 fixed"], a: 0, why: "The onboarding fee is deducted on completion." },
        { q: "What is the HMO X Auctions fee?", o: ["£400 onboarding + 2.5%, minimum £5,000, plus VAT", "£400 onboarding + 2%, minimum £4,000", "£150, credited", "10% of the hammer price"], a: 0, why: "There is also an option for the buyer to pay half the fee." },
        { q: "What does Value My HMO cost at launch?", o: ["£19.99 + VAT (RRP £99 + VAT)", "It is free", "£99 + VAT", "£150 + VAT"], a: 0, why: "Credited in full to the client's next step with HMO X." },
        { q: "A client asks if the Tier Test is free. What do you say?", o: ["It is £99 + VAT at launch, credited to their next step with HMO X", "Yes, it is free", "Only for auction sellers", "It is £995"], a: 0, why: "It must never be called free." },
        { q: "Which tool is free?", o: ["Find My Next HMO", "Value My HMO", "Tier Test", "GDV Appraisal"], a: 0, why: "It matches buyers to towns and to HMO X stock." },
        { q: "Which service suits an owner who is holding, not selling?", o: ["HMO Health Check", "Committed Sale", "HMO X Auctions", "Back to Resi"], a: 0, why: "A hold-and-review diagnostic with a visit from Richard." },
        { q: "What does a CSA call with Richard cost?", o: ["£150 + VAT, credited against the route chosen", "Free", "£995 + VAT", "£19.99 + VAT"], a: 0, why: "The sales appraisal itself is free." }
      ]
    },

    /* ------------------------------------------------------------------ 13 */
    {
      id: "hub",
      title: "The HMO X Hub",
      mins: 15,
      summary: "Our community platform for HMO investors: how it is laid out, how people join and what members get.",
      sections: [
        { h: "What the Hub is", p: [
          "The HMO X Hub is our online community for HMO investors, at mighty.hmox.co.uk, with an app as well as the website. It describes itself as “one framework, five lenses, one room”: everything in it runs on the Tier Methodology.",
          "The Hub is free for every HMO investor until 31 December 2027: 12 months free while we launch our tools and analysers, with no trial and no subscription. It is open to everyone, whether or not they have used our tools. Say “free to join until the end of 2027”.",
          "There is one Hub, with free access, and it connects straight to our tools: every guide ends with the one HMO X tool that fits it.",
          "“When you need a number on your own property, the HMO X tools give you one in minutes. The Hub is where you talk it through.”"
        ]},
        { h: "How the Hub is laid out", table: { head: ["Area", "What is in it"], rows: [
          ["Community", "The Newsfeed (announcements, call reminders, recordings and the weekly Community Callout) and the welcome pages."],
          ["Deals", "Links to our live listings: Committed Sale (committedsale.hmox.co.uk) and HMO X Auctions (auctions.hmox.co.uk)."],
          ["Tools and Analysers", "Links straight to our tools: GDV Appraisal, Tier Test, Value My HMO, Location Intelligence Reports and Find My Next HMO."],
          ["Learn", "Our Fundamentals, the five lens spaces and the Video Library."],
          ["Events", "The weekly Community Call and its archive of recordings."]
        ]}},
        { h: "Our Fundamentals and the lens spaces", p: [
          "Our Fundamentals is the core library: the Chassis (“Your Starting Point”), the HMO X Glossary and specialist modules on the Tier Methodology, buying your first HMO, compliance and legislation, planning and licensing, financing, working with a managing agent, self-management, growing a portfolio and exit planning. Each is written or co-written by the person who does that work every day, and each opens with an HMO X banner and ends with one next step: the HMO X tool that fits the subject.",
          "Each of the five lens spaces is built the same way: Introduction, Framework, Diagnostic, Worked Scheme and Expert layer, so members always know their way around."
        ]},
        { h: "What every member shares", terms: [
          ["Weekly Community Call", "Every Tuesday at 7pm: a market update, an expert deep dive and live Q&A. Recordings go into the archive and a written companion guide follows in the matching lens space."],
          ["Find My Next HMO", "Our free buyer tool replaced the Deal Thread and Source-To-Order: a buyer gives their money, experience and how hands-on they want to be, and it matches HMO X stock (live Committed Sale and auction lots, coming soon and recent sales) to their brief."],
          ["Tools from every guide", "Each guide ends with one tool card: the Tier Test, Value My HMO, the GDV Appraisal, Find My Next HMO or the full tools page."],
          ["Community Callout", "A weekly Newsfeed thread where members post whatever is on their desk; every question is answered."]
        ]},
        { h: "How people join", list: [
          "Anyone can join the Hub free until the end of 2027. There is one Hub: Hub Lite has been closed.",
          "Committed Sale sellers keep a permanent account with the selling and exit content.",
          "Recognised specialists can hold an Expert Tier place, and everyone at HMO X has full access, so we see exactly what members see."
        ]},
        { h: "Recognition", p: [
          "Members can recognise one another for our five values (Expert, Approachable, Optimistic, Professional, Community-driven), which feeds the Community Leaders board. Badges mark milestones such as completing the welcome checklist or the Fundamentals."
        ]},
        { h: "Rules for the Hub", list: [
          "The Hub must never undercut a transaction or a paid report. It points to the right next step; it does not replace it.",
          "Never post client names, addresses or private figures in a discussion, recording or guide. Case studies have the address and parties removed.",
          "Answer specialist questions with the right specialist, and say “outside HMO X's remit” where it is.",
          "Nothing is posted about a listing or a client's property without Richard's OK."
        ]}
      ],
      questions: [
        { q: "A prospect asks what the Hub costs. What do you say?", o: ["It is free to join until the end of 2027", "£499 + VAT a year", "£49 + VAT a month", "£19.99 a month"], a: 0, why: "The Hub is free for 12 months, to 31 December 2027, while we launch our tools and analysers." },
        { q: "A buyer asks how to find HMO X stock that suits them. Where do you send them?", o: ["Find My Next HMO, our free buyer tool", "The Deal Thread", "Source-To-Order", "Hub Lite"], a: 0, why: "Find My Next HMO matches our stock to their brief. The Deal Thread, Source-To-Order and Hub Lite have closed." },
        { q: "What does every guide in the Hub end with?", o: ["One card linking to the HMO X tool that fits it", "A booking calendar", "A Hub membership offer", "Nothing"], a: 0, why: "One next step per guide, always a tool." },
        { q: "When is the weekly Community Call?", o: ["Tuesdays at 7pm", "Mondays at 9am", "The first Friday of each month", "Whenever there is news"], a: 0, why: "Market update, expert deep dive and live Q&A." },
        { q: "Where do the Deals links in the Hub go?", o: ["Our live Committed Sale and auction listing pages", "A private Deal Thread", "Rightmove", "The Video Library"], a: 0, why: "Deals links to committedsale.hmox.co.uk and auctions.hmox.co.uk." },
        { q: "A member posts a case study naming the tenant and the street. What should happen?", o: ["Remove the names and address", "Leave it; members are vetted", "Pin it as a good example", "Move it to the Video Library"], a: 0, why: "No client names, addresses or private figures in the Hub." }
      ]
    },

    /* ------------------------------------------------------------------ 14 */
    {
      id: "team",
      title: "The team and our partners",
      mins: 15,
      summary: "The people behind HMO X, the specialists we work with, and where questions go.",
      sections: [
        { h: "The team", p: ["We work as one cross-disciplined team rather than separate auction and sales camps. These are the people clients meet on a call, at a viewing or on the Community Call."], cards: [
          { name: "Richard Nicholls", role: "Senior Valuer & BDM", text: "Author of the Tier Methodology. Responsible for every client valuation and report, auction guides and reserves, and host of the weekly Community Call." },
          { name: "Richard Parsons", role: "Valuations Coordinator", text: "The first port of call for landlords thinking about selling, from a single HMO to a portfolio. 15+ years as an HMO investor." },
          { name: "Francesca (Fran) Perry", role: "Office Manager & Client Onboarding", text: "First point of contact for appraisals, reports and seller onboarding, making sure every property is compliant and ready. 200+ HMOs onboarded." },
          { name: "Nikki Yearsley", role: "Sales Broker", text: "Helps investors find and secure HMOs that fit their goals. £12m+ of HMO sales completed." },
          { name: "Georgia Hopewell", role: "Auction Manager", text: "Manages every auction, from seller onboarding and legal pack reviews to pre-auction offers and completion." },
          { name: "Kirby Butcher", role: "Sales Progression", text: "Takes every sale from agreed to completed, clearing blockers with buyers, sellers, solicitors and brokers." },
          { name: "Holly Hunt", role: "Marketing Lead", text: "Shapes how investors find and understand HMO X, from our public voice to the message behind every enquiry." },
          { name: "Lucy Donovan", role: "Hub community and member onboarding", text: "Looks after Hub members and new member onboarding." },
          { name: "Ivy Comendador and Eric Cañete", role: "Sales and auction admin support", text: "Prepare every sales and auction listing and keep enquiries moving." }
        ]},
        { h: "Directors", terms: [
          ["Jon Rose", "Financial and estate planner (Suitable Life); 15+ years building a large HMO portfolio."],
          ["Paul Kutchera", "Ten years supporting 100+ HMO landlords with the business side of their portfolios; owns and manages 7 HMOs."],
          ["Mike Hedgecox", "Business operations; joint owner of Platinum Property Partners, with his own HMO portfolio."],
          ["Paul Watson", "30+ years in property; self-manages HMOs across two portfolios."]
        ]},
        { h: "Where questions go", table: { head: ["Question", "Goes to"], rows: [
          ["A landlord thinking of selling", "Richard Parsons"],
          ["A valuation, tier or route", "Richard Nicholls"],
          ["Onboarding a property", "Fran"],
          ["Auctions", "Georgia"],
          ["Buying through Committed Sale", "Nikki"],
          ["A sale between agreed and completion", "Kirby"],
          ["Marketing", "Holly"],
          ["Hub membership", "Lucy"]
        ]}},
        { h: "Our specialist partners", terms: [
          ["Alice Ibbotson, Property Shield", "Compliance, licensing, fire risk and HHSRS. A former HMO licensing officer and Tier 2 fire risk assessor. Writes the monthly Compliance Briefing."],
          ["Carianne Wells, Well Planned", "HMO planning: Article 4, Lawful Development Certificates and council representation."],
          ["George Sanford and Kim McGinley, Vibe Finance", "Specialist HMO, buy-to-let, commercial, bridging and development finance."],
          ["Mike Dixon, mentor consultant", "Advises on selling and buying: 250+ investors guided, 400+ HMOs sourced and developed."],
          ["WM Legal", "Our recommended HMO specialist solicitor."],
          ["Essential Information Group (EIG)", "Our auction platform partner."]
        ]},
        { h: "Outside HMO X's remit", p: [
          "We do not advise on tax mechanics or mortgage products. Use the exact phrase “outside HMO X's remit” and refer the client: tax to a specialist property tax adviser, mortgages to a specialist broker such as Vibe Finance, specialist planning to Carianne or a chartered town planner.",
          "“The serious HMO investor is not the one who knows the most law. It is the one who has the right specialists around them and knows when to call which one.”"
        ]},
        { h: "When the tools and the valuer disagree", p: [
          "Our tools read figures only. The valuer has seen the asset, the compliance documents and the client's timeframe. The valuer's judgement wins, with one sentence explaining why."
        ]}
      ],
      questions: [
        { q: "A landlord rings saying they are thinking of selling. Who is their first call?", o: ["Richard Parsons", "Kirby Butcher", "Holly Hunt", "Eric"], a: 0, why: "Richard Parsons is the first port of call for landlords thinking about selling." },
        { q: "Who manages HMO X's auctions?", o: ["Georgia Hopewell", "Nikki Yearsley", "Kirby Butcher", "Fran Perry"], a: 0, why: "Georgia is the Auction Manager." },
        { q: "An offer has been accepted and the solicitors are slow. Who drives it to completion?", o: ["Kirby Butcher", "Holly Hunt", "Richard Parsons", "Lucy Donovan"], a: 0, why: "Kirby handles sales progression from agreed to completed." },
        { q: "A buyer asks which mortgage product to choose. What do you say?", o: ["That it is outside HMO X's remit, and refer them to a specialist broker", "Recommend the cheapest lender you know", "Tell them to ask the seller", "Give them lender criteria from our reports"], a: 0, why: "Mortgage products are outside our remit." },
        { q: "Who should a question about Article 4 or a Lawful Development Certificate go to?", o: ["Carianne Wells", "Alice Ibbotson", "George Sanford", "WM Legal"], a: 0, why: "Carianne Wells at Well Planned handles HMO planning." },
        { q: "Who writes the monthly Compliance Briefing?", o: ["Alice Ibbotson of Property Shield", "George Sanford", "Holly Hunt", "EIG"], a: 0, why: "Alice is a former HMO licensing officer and fire risk assessor." },
        { q: "The tool says one figure and the valuer another. Whose wins?", o: ["The valuer's, with one sentence explaining why", "The tool's, always", "The higher figure", "The average of the two"], a: 0, why: "The valuer has seen the asset and the documents." }
      ]
    },

    /* ------------------------------------------------------------------ 15 */
    {
      id: "service",
      title: "How we work",
      mins: 15,
      summary: "The HMO X voice, evidence and honesty, handling offers fairly, and protecting clients and their information.",
      sections: [
        { h: "The HMO X voice", p: ["We do not pitch. We brief. We do not sell information; we sell clarity and decisions. We do not promise outcomes we cannot underwrite."], list: [
          "Speak as a specialist briefing a client, not a salesperson closing one.",
          "British English, plain and direct. No emojis, no hype, no estate-agent language.",
          "Give the figure, its source and its date. Ranges, not false precision.",
          "Bad news early, with what we are doing about it.",
          "Honest routing, even when the right answer is to wait, to read three modules and come back, or to use someone else."
        ]},
        { h: "Expectations", p: [
          "Set expectations at the start, not three months in. Show the evidence and the speed-versus-value trade-off. If a client insists on an aspirational price, explain plainly what it means for time to sell."
        ]},
        { h: "Handling offers fairly", list: [
          "Anchor on evidence: comparables, the rent roll, the tier read and buyer demand.",
          "Get offers in writing, with proof of funds and the buyer's position.",
          "Pass every offer to the seller promptly and in writing. Estate agents must by law (Estate Agents Act 1979).",
          "Never mislead a buyer or hold back material information about a property."
        ]},
        { h: "Confidentiality", list: [
          "Client names, addresses and postcodes stay in our client systems, never in shared tools, code, social posts or other clients' reports.",
          "Our valuation register and sales data are shared as totals and medians only. Never name the owner of a comparable.",
          "Private report links are random codes that never contain a client's name or address.",
          "Where sources conflict, log it and say so. Never resolve it silently."
        ]}
      ],
      confirm: "Holly is redoing the complaints and policy pages this week; Richard will add the redress scheme, complaints process and service response times here once they are done.",
      questions: [
        { q: "Which line describes the HMO X voice?", o: ["We do not pitch. We brief.", "Always be closing.", "Every HMO is an incredible opportunity.", "Say yes, then work it out."], a: 0, why: "We speak as a specialist briefing a client." },
        { q: "Must every offer be passed to the seller?", o: ["Yes, promptly and in writing", "Only offers within 10% of asking", "Only from qualified buyers", "Only the best offer each week"], a: 0, why: "The Estate Agents Act 1979 requires it." },
        { q: "A client wants an aspirational price. What do you do?", o: ["Explain plainly what it means for time to sell, with the evidence", "Agree to keep them happy", "Refuse to act", "Quietly list it lower"], a: 0, why: "Set expectations at the start, not three months in." },
        { q: "A buyer asks for the addresses of HMOs we have valued in the town. What do you do?", o: ["Decline; share totals and medians only", "Send the list", "Send postcodes only", "Ask the old clients first"], a: 0, why: "Past clients' details are never shared." },
        { q: "Two sources give different rents for the same room. What do you do?", o: ["Log the conflict and say so", "Pick the higher figure", "Average them", "Leave both out without comment"], a: 0, why: "Source conflicts are logged, never silently resolved." },
        { q: "Where can client names and addresses be kept?", o: ["In our client systems only", "In social posts", "In shared spreadsheets", "In report links"], a: 0, why: "They never leave our client systems." }
      ]
    }
  ]
};
