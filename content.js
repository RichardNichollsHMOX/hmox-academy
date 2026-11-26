/*
 * HMO X Academy course content.
 * Edit this file to change lessons and questions; index.html renders it.
 *
 * Module shape:
 *   id        stable id (never change once people have taken the quiz; progress is keyed on it)
 *   title, mins, summary
 *   sections  [{h, p:[paragraphs], list:[bullets], terms:[[term, meaning]], cards:[{name, role, text}], table:{head:[], rows:[[]]}}]
 *   confirm   note shown only to managers: content still to confirm with Richard
 *   questions [{q, o:[options], a:index of correct option, why}]  (options are shuffled on screen)
 *
 * Sources: HMO X template reports and guides in Drive (to 26 Nov 2026), the Tier Methodology Edition 2
 * (Oct 2026), the newest site config (26 Nov 2026), the Team Analyser evidence scan (13 Nov 2026) and
 * Richard's decisions in the Valuations & Onboarding and Tools sessions. See research/ for the detail.
 */
window.HMOX_COURSE = {
  passMark: 0.8,
  refreshDays: 365,
  evidenceDate: '13 November 2026',
  modules: [
    {
      id: 'intro',
      title: 'Welcome to HMO X',
      mins: 15,
      summary: 'Who we are, where we came from, what we stand for and how this induction works.',
      sections: [
        { h: 'Who we are', p: [
          'HMO X is the UK\'s specialist community for HMO investors: a full-service advisory and transactional business built around the HMO and the operator behind it, from buying to running, optimising, refinancing and selling.',
          'The HMO is the asset class we are built for. Not buy-to-let. Not commercial. Not serviced accommodation.',
          'Our line is "Your community of HMO experts." You will see it on every report cover and footer.'
        ]},
        { h: 'The company', terms: [
          ['HMO X Ltd', 'Company No. 15730822. The main business: valuations, Committed Sale, reports, consultancy and the Hub.'],
          ['HMO X Auctions Ltd', 'Company No. 15626888. The auction business, the UK\'s first HMO-specific auction house, launched in summer 2025. It issues the auction-side documents.'],
          ['Office', 'Discovery Court Business Centre, Wallisdown Road, Poole, BH12 5AG. Phone 0330 441 5888.'],
          ['Email', 'sales@hmox.co.uk for sales and onboarding, hello@hmox.co.uk for reports, georgia.hopewell@hmox.co.uk for auctions.'],
          ['Websites', 'hmox.co.uk is the main site. The tools run on tools.hmox.co.uk and richard-nicholls.co.uk.']
        ]},
        { h: 'Where we came from', p: [
          'HMO X grew out of 18 years of HMO investment experience at Platinum Property Partners, which ran a franchise model for corporate professionals. HMO X turned that model around by removing the barriers to entry.',
          'Richard Nicholls, our Senior Valuer, has been a residential estate agent since the turn of the century, working as a valuer, trainer and branch manager before running a specialist HMO sales business. He created the Tier Methodology, which sits behind everything we do.'
        ]},
        { h: 'Vision and mission', terms: [
          ['Vision', 'To be the go-to community for HMO investors, where expertise, education and collaboration help people thrive throughout their HMO investment lifecycle.'],
          ['Mission', 'To provide a complete, expert-led ecosystem that helps HMO investors succeed, wherever they are on their journey.'],
          ['Five-year aim', 'To professionalise the HMO market by raising the standard of work investors, operators and sellers receive at every stage.']
        ]},
        { h: 'Our values, in priority order', list: [
          'Experts', 'Approachable', 'Optimistic', 'Professional', 'Community-driven'
        ], p: [
          'The test for every piece of work: if it could not stand up to a working valuer, surveyor, operator or solicitor, it should not leave our desk.',
          'Our operating standards are: de-risked, documented, delivered; a plan, not information; and a partnership that continues long after completion.'
        ]},
        { h: 'The four arms of the business', terms: [
          ['Transactional', 'Committed Sale, HMO X Auctions, bespoke sales and the Deal Thread.'],
          ['Reports and consultancy', 'Valuations, Health Checks, Exit Planning, GDV appraisals and buyer packs.'],
          ['Specialist consultancy', 'Planning, compliance and finance, through our trusted partners.'],
          ['Education and community', 'Hub Lite (free) and the Hub.']
        ]},
        { h: 'Five questions every conversation should answer', list: [
          'Which tier is the HMO in today?',
          'Which tier will it hold over the hold period?',
          'What does that mean for income, value and borrowing?',
          'What would it cost to move up a tier, or what is the risk of sliding?',
          'What is the right HMO X next step?'
        ]},
        { h: 'Your first week: the Hub', list: [
          'You are given a Team Subscription to the Hub (mighty.hmox.co.uk), free for as long as you work with us. It shows you exactly what members see.',
          'Complete the Hub welcome checklist (it earns the Getting Started badge) and fill in your profile.',
          'Read the Chassis and the Tier Methodology module in Our Fundamentals, then the introduction to each of the five lens spaces.',
          'Join the next Tuesday Community Call at 7pm, and read this week\'s Deal Thread.'
        ]},
        { h: 'How this induction works', p: [
          'There are 13 modules. Read each one, then take its quiz. You need 80% to pass, and you can retake a quiz as many times as you need. Each attempt shuffles the questions and answers.',
          'When you have passed every module, sign the declaration on your home screen. Your manager then reviews your results and signs you off. Sign-off lasts 12 months, after which you take the refresher.'
        ]}
      ],
      confirm: 'The Hub part of day one is now in. Still to add: hours, the other logins (GHL, Trello, Apex27), who each new starter\'s buddy is, and the January four-week induction plan for the new senior salesperson.',
      questions: [
        { q: 'What is HMO X\'s line on every report?', o: ['Your community of HMO experts', 'Where expertise drives opportunity', 'Your community of property experts', 'Sell your HMO with certainty'], a: 0, why: '"Your community of HMO experts." is current. The other lines are older or not ours.' },
        { q: 'Which asset class is HMO X built for?', o: ['HMOs only', 'HMOs and buy-to-let', 'HMOs and serviced accommodation', 'Any residential investment'], a: 0, why: 'Not buy-to-let, not commercial, not serviced accommodation.' },
        { q: 'Which company issues the auction-side documents?', o: ['HMO X Auctions Ltd', 'HMO X Ltd', 'Essential Information Group', 'Platinum Property Partners'], a: 0, why: 'HMO X Auctions Ltd (No. 15626888) is the auction business. EIG is our auction platform partner.' },
        { q: 'Which is first in HMO X\'s values, in priority order?', o: ['Experts', 'Community-driven', 'Optimistic', 'Professional'], a: 0, why: 'Experts, Approachable, Optimistic, Professional, Community-driven.' },
        { q: 'What is the test for every piece of HMO X work?', o: ['Would it stand up to a working valuer, surveyor, operator or solicitor?', 'Would the client be pleased with the number?', 'Is it longer than a competitor\'s report?', 'Has marketing approved the design?'], a: 0, why: 'If it would not withstand that scrutiny, it should not leave our desk.' },
        { q: 'Which question should every client conversation answer?', o: ['Which tier is the HMO in today, and which will it hold?', 'How quickly can we get it on Rightmove?', 'What did the neighbour sell for?', 'Can the client afford our fee?'], a: 0, why: 'The five questions start with the tier today and the tier over the hold period.' }
      ]
    },

    {
      id: 'services',
      title: 'Services, products and tools',
      mins: 20,
      summary: 'What we offer sellers, buyers, operators and developers, what it costs, and the tools behind it.',
      sections: [
        { h: 'For sellers', p: ['All prices are plus VAT.'], table: { head: ['Service', 'What it is', 'Fee'], rows: [
          ['Sales valuation', 'Richard\'s opening valuation: three bases of value, a tier read and a route recommendation.', 'Free'],
          ['Strategy call (CSA)', '30 minutes with Richard: should I sell, when, how and through which route.', '£150, credited against the route chosen'],
          ['Committed Sale', 'Our structured private sale to vetted buyers, with a £3,500 buyer reservation deposit and 56-day exchange.', '£400 onboarding (deducted on completion) + 2%, minimum £4,000'],
          ['HMO X Auctions', 'A keen guide, an intensive campaign of about three weeks, a fixed date and exchange on the hammer.', '£400 onboarding + 2.5%, minimum £5,000. Option for the buyer to pay half'],
          ['Exit Planning', 'A costed plan to lift the price over 12 to 36 months, then launch.', '£995 first HMO, £200 each extra HMO in the same market'],
          ['Back to Resi (X HMO)', 'For 4 to 6 person HMOs worth more as a family home: site visit, three-way valuation and plan.', '£995, credited on completion'],
          ['HMO Health Check', 'For owners who are holding: a full diagnostic with a visit from Richard, re-checked at 6 and 12 months.', '£995 per HMO'],
          ['Non-sale valuation', 'Our deepest manual valuation, for refinance, partner buy-outs, disputes or divorce.', '£395']
        ]}},
        { h: 'For buyers and developers', table: { head: ['Product', 'What it is', 'Fee'], rows: [
          ['Find My Next HMO', 'Online tool, about 4 minutes: the regions and towns that suit the buyer\'s money, experience and how hands-on they want to be, the price range their capital reaches, and matching HMO X stock.', 'Free'],
          ['Buyer Valuation Pack', 'Tier diagnosis, basis of value, comparables and lender guidance for an HMO they are buying.', 'Standard on every HMO X listing'],
          ['Property Information Report', 'Every buyer gets one with their purchase: the compliance bundle and due-diligence data.', 'Included'],
          ['GDV Appraisal', 'Refinance and sales GDV for a conversion or development, and the price at which it stacks.', '£99 launch price (RRP £299) for the instant appraisal, which is the one to recommend first; a hand-prepared 13-section report is still available for thin-evidence towns'],
          ['Location Intelligence Report', 'Where and why to buy: room demand, rents, sales, tenant pool, licensing and Article 4 risk.', '£99 launch price (RRP £199); bespoke from £299']
        ]}},
        { h: 'Our online tools', terms: [
          ['Value My HMO', 'An instant valuation in about 3 minutes: likely sale price and range, suggested asking price, value by speed of sale, buyer demand from 1 to 5 at that figure, how it reads against the town, the nearest HMO sales, how to lift value, and the route to market that fits. £19.99 + VAT launch price (RRP £99 + VAT). Indicative, not a RICS valuation: Richard\'s follow-up confirms it with local comparables.'],
          ['Tier Test', 'The full Tier Methodology report: home tier, what holds it back, rent against its tier, a lender\'s view and the evidence pack. About 10 minutes. £99 + VAT launch price (RRP £299 + VAT). Never call it free.'],
          ['Credit rule', 'Every tool fee is credited in full to the client\'s next step with HMO X, within 12 months.'],
          ['One property file', 'Value My HMO, the Tier Test and the GDV Appraisal share one property file in the client\'s browser, with one reference number, so answers carry across. Nothing leaves their device until they ask for a report.'],
          ['The five tools', 'Value My HMO, Tier Test, GDV Appraisal, Find My Next HMO and the Location Intelligence Report launch together with the new website. Richard walks members through them live on the Community Call on Tuesday 1 December 2026 at 7pm. Every answer rests on evidence our team has gathered and checked by hand.']
        ]},
        { h: 'Behind the scenes', terms: [
          ['Team Analyser', 'Our buyer demand engine. For any HMO in the 320-town grid: a score from 0 to 5, five reads, a price lever, route fit, comparables, room rents and our valuation register.'],
          ['Tier engine', 'Reads an HMO through the Tier Methodology for valuations, Health Checks and reports.'],
          ['Weekly evidence scan', 'Every Friday the evidence base is refreshed and the tools are recalibrated. Every Monday the past week\'s auction lots are added.'],
          ['Interactive reports', 'Valuations can be issued as private web reports with their own link, alongside the PDF. Figures must match the PDF exactly, and Richard approves them before they go.']
        ]},
        { h: 'The Hub', p: [
          'The Hub is our community for HMO investors: the weekly Community Call, the Deal Thread, Source-To-Order, Location Intelligence Reports, the Compliance Briefing and the lens courses. Hub Lite is the free entry level. The Hub is free for every HMO investor until 31 December 2027: 12 months free while we launch our tools and analysers, with no trial and no subscription. Every client who completes a purchase or paid service gets a gifted 12-month Hub year. The next module covers the Hub in full.'
        ]},
        { h: 'Rules that apply to every product', list: [
          'Our tools and reads support a valuation; they are never a value opinion on their own.',
          'Our valuations are not RICS Red Book valuations and do not replace a lender\'s valuation.',
          'Client-facing text never names Sprift and never promises an EPC.',
          'Nothing is published to the website, GoHighLevel, Jotform or the Team Analyser without Richard\'s OK.'
        ]}
      ],
      questions: [
        { q: 'What is the Committed Sale fee?', o: ['£400 onboarding + 2%, minimum £4,000, plus VAT', '£600 onboarding + 2.5%, no minimum', '1.5% with no onboarding fee', '£995 fixed'], a: 0, why: 'The current terms are £400 + 2%, minimum £4,000 + VAT, with the onboarding fee deducted on completion.' },
        { q: 'What is the HMO X Auctions fee?', o: ['£400 onboarding + 2.5%, minimum £5,000, plus VAT', '£400 onboarding + 2%, minimum £4,000', '£150, credited', '10% of the hammer price'], a: 0, why: 'There is also an option for the buyer to pay half the fee.' },
        { q: 'What does a strategy call (CSA) with Richard cost?', o: ['£150 + VAT, credited against the route chosen', 'Free', '£995 + VAT', '£99 + VAT'], a: 0, why: 'The sales valuation itself is free; the 30-minute CSA call is £150, credited.' },
        { q: 'A client asks if the Tier Test is free. What do you say?', o: ['It is £99 + VAT at launch, credited in full to their next step with HMO X', 'Yes, it is free', 'Only for auction sellers', 'It is £995'], a: 0, why: 'It used to be free. It is now £99 + VAT and must never be called free.' },
        { q: 'Which service suits an owner who is holding, not selling?', o: ['HMO Health Check', 'Committed Sale', 'HMO X Auctions', 'Back to Resi'], a: 0, why: 'The Health Check is a hold-and-review diagnostic with a visit from Richard.' },
        { q: 'What does Value My HMO cost at launch?', o: ['£19.99 + VAT (RRP £99 + VAT), credited to the next step', 'It is free', '£99 + VAT', '£150 + VAT'], a: 0, why: 'Launch price £19.99 + VAT, credited in full to the client\'s next step with HMO X.' },
        { q: 'What happens to a tool fee if the client then uses another HMO X service?', o: ['It is credited in full within 12 months', 'It is refunded on request', 'Nothing; fees are not credited', 'It is converted into Hub credit'], a: 0, why: 'Every tool fee is credited against the next HMO X service within 12 months.' }
      ]
    },

    {
      id: 'hub',
      title: 'The HMO X Hub',
      mins: 20,
      summary: 'Our community platform for HMO investors: how it is laid out, how people join, what members get and what each of us does there.',
      sections: [
        { h: 'What the Hub is', p: [
          'The HMO X Hub is our online community for HMO investors, at mighty.hmox.co.uk (built on the Mighty Networks platform, with an app as well as the website). Its line is "Your community of HMO experts."',
          'It is built for investors who have started, or own several HMOs, not for people learning what an HMO is. The Hub describes itself as "one framework, five lenses, one room": everything in it runs on the Tier Methodology and reads through the same five lenses we use in our reports.',
          'Hub Lite is the free front door. The Hub is the room itself. In the Hub\'s own words: "Hub Lite is the door. The Hub is the room."'
        ]},
        { h: 'How the Hub is laid out', p: ['The left-hand navigation is grouped into five collections:'], table: { head: ['Collection', 'Spaces', 'What is in them'], rows: [
          ['Community', 'Newsfeed; Welcome to Hub; Welcome to Hub Lite', 'Announcements, call reminders and recordings, the weekly Community Callout, and the welcome pages for each level.'],
          ['Deals', 'Deals (the Deal Thread and Deal Vault); Source-To-Order', 'HMO X stock before it reaches the open market, each new listing with its Property Information Report, plus sold listings. Source-To-Order is where members submit a buying brief.'],
          ['Analyse', 'Location Intelligence Reports', 'Full town reports, filed by region (for example Northampton, Derby, Portsmouth, Poole, Grimsby and Cleethorpes, all Q3 2026 editions).'],
          ['Learn', 'Our Fundamentals; the five lens spaces; Video Library', 'The written modules, the lens courses, and recordings such as the Renters\' Rights Act series.'],
          ['Events', 'Hub Events; Hub Lite Events', 'The weekly Community Call and its archive of recordings, episode by episode.']
        ]}},
        { h: 'Our Fundamentals and the Chassis', p: [
          'Our Fundamentals is the reading library open to everyone, including Hub Lite. It starts with the Chassis: "Your Starting Point" (ownership structure, professional team, tax position and accounting discipline) and the HMO X Glossary.',
          'Then nine specialist modules, each credited to the person who does that work every day: the HMO X Tier Methodology, Buying your first HMO, Growing your Portfolio and Exit Planning and Selling (Richard Nicholls); Compliance and Legislation (Alice Ibbotson); Planning and Licensing (Carianne Wells); Financing and Leveraging (George Sanford); Working with a Managing Agent; and Self-Management.',
          'Every module ends the same way, with a "Page to Portfolio" step: the reader\'s specific next move. The same space also holds the monthly companion guides written up from the Community Call, and the Renters\' Rights Act companion course.'
        ]},
        { h: 'The five lens spaces', p: ['Each lens is its own space, built the same way so members always know their way around: Introduction, Framework, Diagnostic, Worked Scheme, Expert layer and Case study. Members can hold as many lenses as apply to them.'], table: { head: ['Hub space', 'Lens', 'Its rule'], rows: [
          ['Investor & Buyer', 'Buyers', 'Buy the tier it holds, not the price it asks.'],
          ['Operator', 'Operators', 'Operate to the tier it holds, not the rooms it fills.'],
          ['Add Value', 'Rejuvenators (Tier 4 and Tier 5 assets)', 'Spec to the tier it holds, not past it.'],
          ['Developer', 'Developers', 'Leverage to the tier it holds, not the tier it performs.'],
          ['Exit & Seller', 'Sellers (the realisation lens)', 'Sell the tier it holds, on the timeline you chose.']
        ]}},
        { h: 'The spine every member shares', terms: [
          ['Weekly Community Call (Tuesday Live)', 'Every Tuesday at 7pm, hosted by Richard Nicholls with a rotating guest expert: market update, deal clinic, expert deep dive and live Q&A. One call a month is open to Hub Lite; the others are for full members. Recordings go into Hub Events, and a written companion guide follows in the matching lens space.'],
          ['The Deal Thread', 'What Richard and the valuations team are valuing, onboarding and launching. Members see every new listing 48 hours before the open market, and can request details and book viewings before launch.'],
          ['The Deal Vault', 'Every newly launched property with its Property Information Report: 16 sections reading the asset end to end, from the investment verdict to the compliance and evidence pack.'],
          ['Source-To-Order', 'A member tells us their brief (tier, area, the numbers that need to work) and we search the market against it, with a dedicated point of contact. It is included in Hub membership, with no sourcing fee or percentage. It is for buyers ready to act, not exploring.'],
          ['Location and Market Intelligence', 'Location Intelligence Reports, comparables and market commentary, kept current and meant to be read at the decision point.'],
          ['The Compliance Briefing', 'Alice Ibbotson\'s monthly regulatory update: what has changed, what it means, and what to check.'],
          ['The expert panel', 'Managing agents, lawyers, accountants, planners, developers and experienced landlords, feeding the weekly call and the written material that follows.']
        ]},
        { h: 'How people join', table: { head: ['Route', 'Who it is for', 'What they get'], rows: [
          ['Hub Lite', 'Anyone who registers', 'Free. Our Fundamentals, the Tier Methodology Guide and the monthly open call. Every registration is offered a 15-minute call with a member of the team, who routes them honestly.'],
          ['Hub Subscription', 'Investors who want the full room', 'Every lens space and the full spine. Hub Lite members upgrade themselves in under a minute: Personal Settings, Plans and Access, Change Plan, Hub Subscription.'],
          ['Gifted year (Client Subscription)', 'Every client who completes a purchase or a paid service with us (an auction or Committed Sale purchase, a GDV, an Exit Plan, a Health Check)', 'Twelve months of full Hub membership from completion day, even if they are already a member. Nothing to sign up for.'],
          ['Seller Subscription (Hub Seller\'s Plan)', 'Committed Sale sellers', 'A free, permanent account: all of Hub Lite plus the Exit & Seller space.'],
          ['Expert Tier', 'Specialists who contribute to the calls and content', 'Free permanent Hub access and named credit.'],
          ['Founding Tier', 'Ten handpicked founding ambassadors', 'Free permanent access and early sight of new tools.'],
          ['PPP Subscription', 'Platinum Property Partners franchise partners', 'The Deals space only.'],
          ['Team Subscription', 'Every HMO X employee and contractor', 'Full free access, so you see exactly what members see.']
        ]}, p: [
          'Price: the Hub is free for every HMO investor until 31 December 2027: 12 months free while we launch our tools and analysers, with no trial and no subscription. It is open to everyone, whether or not they have used our tools. Say "free to join until the end of 2027".',
          'When someone joins, the profile asks two questions: the reason they are here, and their goal for the next 12 months. Their answers, and the lens tags they choose, tell us which lens and which next step fits.'
        ]},
        { h: 'Recognition, badges and Community Leaders', p: [
          'Members can recognise one another for our five values (Expert, Approachable, Optimistic, Professional, Community-driven). Recognitions feed the Community Leaders board. A member needs at least 20 points, earned by visiting, working through modules, joining calls, RSVPing and contributing to the Deal Thread, before they can recognise someone else.',
          'Badges include Getting Started (finishing the welcome checklist), Fundamental Graduate (completing the Our Fundamentals modules), Tier Methodology Certified, Live Regular, Committed (converting a trial into full membership), Verified Buyer and One Year In. Team members carry the HMO X Team Member badge and specialists the Expert Tier Member badge.',
          'Every week the Newsfeed runs a Community Callout: members post whatever is on their desk, and every question is answered in the comments. Topics that need more go on to the weekly call, with a guest expert where it calls for one.'
        ]},
        { h: 'What each of us does in the Hub', table: { head: ['Who', 'Their part'], rows: [
          ['Richard Nicholls', 'Hosts the weekly call, walks through the week\'s deal releases, writes the Tier Methodology and lens pieces and the Location Intelligence Reports.'],
          ['Lucy Donovan', 'The Hub community and member onboarding: the onboarding call when someone joins, where a Source-To-Order brief is first captured.'],
          ['Holly Hunt', 'Marketing, content and the Deal Thread presentation; post-completion mentoring for gifted-year buyers.'],
          ['Fran Perry', 'Onboarding and the seller relationship.'],
          ['Georgia Hopewell', 'Auction stock, especially when Tier 4 and Tier 5 rejuvenation comes up.'],
          ['Kirby Butcher', 'Sales progression; also wrote several of the Hub\'s checklists.'],
          ['The sales team', 'Live transactions and buyer enquiries from the Deal Thread.'],
          ['Alice Ibbotson', 'The monthly Compliance Briefing (partner, Property Shield).'],
          ['Everyone', 'Uses the Hub as a member would, so nothing we tell a client is out of date, and passes back what members are asking for. Some of us also have Host or Moderator rights to manage posts and members.']
        ]}},
        { h: 'Rules for the Hub', list: [
          'The Hub must never undercut a transaction or a paid report. It points to the right HMO X next step; it does not replace it.',
          'Never post client names, addresses or private figures in a discussion, recording or companion guide. Case studies have the address and parties removed.',
          'Answer specialist questions with the right specialist, and say "outside HMO X\'s remit" where it is.',
          'Hub content follows the same voice as everything else: we brief, we do not pitch. Tier terms word for word.',
          'Nothing goes into the Deal Thread or Deal Vault without Richard\'s OK.'
        ]}
      ],
      questions: [
        { q: 'Where does a Hub member see new HMO X listings before the open market?', o: ['The Deal Thread, 48 hours early', 'Rightmove, the same day', 'Hub Lite Events', 'The Video Library'], a: 0, why: 'Members see every new listing on the Deal Thread 48 hours before the open market.' },
        { q: 'A Hub Lite member asks how to get the full Hub. What do you tell them?', o: ['Personal Settings, Plans and Access, Change Plan, Hub Subscription: under a minute', 'They must book a strategy call first', 'They have to buy a report first', 'Email Richard for an invitation'], a: 0, why: 'They can upgrade themselves, no call needed. The Hub is free to join until the end of 2027.' },
        { q: 'A buyer completes on an HMO through HMO X Auctions. What happens with the Hub?', o: ['They get a gifted 12-month Hub year from completion day', 'Nothing unless they pay', 'They get Hub Lite only', 'They get one free call'], a: 0, why: 'Every client who completes a purchase or paid service gets twelve months of full Hub membership, automatically.' },
        { q: 'What is Source-To-Order?', o: ['Members give us a brief and we search the market against it, included in membership', 'A paid sourcing service at 3% of the price', 'A list of auction lots', 'A tenant-finding service'], a: 0, why: 'It is included in Hub membership with no sourcing fee; it suits buyers ready to act.' },
        { q: 'Which Hub space holds content for an investor buying tired Tier 4 and Tier 5 HMOs to improve them?', o: ['Add Value', 'Developer', 'Exit & Seller', 'Operator'], a: 0, why: 'Add Value is the Rejuvenator lens: spec to the tier it holds, not past it.' },
        { q: 'When is the weekly Community Call?', o: ['Tuesdays at 7pm', 'Mondays at 9am', 'The first Friday of each month', 'Whenever Richard posts'], a: 0, why: 'Tuesday Live runs every Tuesday at 7pm; one call a month is open to Hub Lite.' },
        { q: 'A prospect asks what the Hub costs. What do you say?', o: ['It is free to join until the end of 2027', '£499 + VAT a year', '£49 + VAT a month', '£19.99 a month'], a: 0, why: 'The Hub is free for 12 months, to 31 December 2027, while we launch our tools and analysers.' },
        { q: 'A member posts a case study naming the tenant and the street. What should happen?', o: ['Remove the names and address; Hub content never carries them', 'Leave it, members are vetted', 'Pin it as a good example', 'Move it to the Deal Thread'], a: 0, why: 'No client names, addresses or private figures in the Hub.' }
      ]
    },

    {
      id: 'team',
      title: 'Meet the team',
      mins: 15,
      summary: 'Who does what, who to send things to, and our trusted partners.',
      sections: [
        { h: 'The property team', p: ['We work as one cross-disciplined team rather than separate auction and sales camps, with a shared target of ten exchanges a month.'], cards: [
          { name: 'Richard Nicholls', role: 'Senior Valuer & BDM', text: 'Creator of the Tier Methodology. Every valuation and report, the Tier calls, auction guides and reserves, market commentary and the Tuesday Hub Live.' },
          { name: 'Richard Parsons', role: 'Valuations Coordinator', text: 'First call for landlords thinking of selling, from one HMO to a portfolio. Triages every seller enquiry. 15+ years as an HMO investor.' },
          { name: 'Fran Perry', role: 'Office Manager & Client Onboarding', text: 'Takes a property from agreed instruction to listing-ready and compliant. Owns the Committed Sale onboarding checklist. 200+ HMOs onboarded. Becomes team manager in 2027.' },
          { name: 'Nikki Yearsley', role: 'Sales Broker', text: 'Owns Committed Sale from instruction to completion, plus auction lots allocated by Georgia. Buyer and seller liaison. £12m+ of HMO sales.' },
          { name: 'Georgia Hopewell', role: 'Auction Manager', text: 'Runs every auction end to end: appraisals, onboarding, lot preparation, legal packs, bidder support and pre-auction offers. Owns the auction checklist.' },
          { name: 'Kirby Butcher', role: 'Sales Progression', text: 'Takes every sale from agreed to completed, clearing blockers with buyers, solicitors and brokers.' },
          { name: 'Holly Hunt', role: 'Marketing Lead', text: 'Listing marketing, email campaigns, GoHighLevel, brand and tone of voice, Hub visuals.' },
          { name: 'Lucy Donovan', role: 'Hub community and member onboarding', text: 'Looks after Hub members: the onboarding call when someone joins, the 15-minute call for new Hub Lite registrations, and first capture of Source-To-Order briefs.' },
          { name: 'Ivy and Eric', role: 'Admin support', text: 'Ivy supports Fran with listing preparation and onboarding. Eric supports Georgia with auction enquiries and registrations.' }
        ]},
        { h: 'Directors', terms: [
          ['Jon Rose', 'Financial and estate planner (Suitable Life), including inheritance tax and tax planning; 15+ years building a large HMO portfolio.'],
          ['Paul Kutchera', 'Ten years supporting 100+ HMO landlords with the business side of their portfolios; owns and manages 7 HMOs.'],
          ['Mike Hedgecox', 'Business operations; joint owner of Platinum Property Partners, with his own HMO portfolio.'],
          ['Paul Watson', '30+ years in property, self-manages HMOs across two portfolios; part-owner of franchise businesses including Platinum Property Partners.']
        ]},
        { h: 'Who handles what', table: { head: ['Enquiry', 'Goes to'], rows: [
          ['A landlord thinking of selling', 'Richard Parsons'],
          ['Sales valuation, tier and route', 'Richard Nicholls'],
          ['Onboarding and listing build', 'Fran'],
          ['Auction appraisals and the auction cycle', 'Georgia'],
          ['Committed Sale buyers', 'Nikki'],
          ['Sale agreed to completion', 'Kirby'],
          ['Marketing and campaigns', 'Holly'],
          ['Hub membership and joining', 'Lucy']
        ]}, p: ['Sellers are passed to the right person within two working days.'] },
        { h: 'Our trusted partners', terms: [
          ['Alice Ibbotson, Property Shield', 'Compliance, licensing and fire risk. A former HMO licensing officer. Writes the monthly Compliance Briefing.'],
          ['Carianne Wells, Well Planned', 'Planning, Article 4, Lawful Development Certificates and council representation.'],
          ['George Sanford, Vibe Finance', 'Specialist HMO and bridging mortgage broker: products, refinance, ICR and early repayment charges.'],
          ['WM Legal', 'Our recommended HMO specialist solicitor.'],
          ['Mike Dixon, mentor consultant', 'Advises clients on selling and helps buyers make confident purchases: 250+ investors guided, 400+ HMOs sourced and developed.'],
          ['Kim McGinley, Vibe Finance', 'Founder of Vibe Finance, bringing a lender\'s view of property finance.'],
          ['Suitable Life', 'Financial and estate planning referrals (Jon Rose).'],
          ['Essential Information Group (EIG)', 'Our auction platform partner.']
        ]},
        { h: 'Outside HMO X\'s remit', p: [
          'We do not advise on tax mechanics or mortgage products. Use the exact phrase "outside HMO X\'s remit" and refer the client: tax to a specialist property tax adviser, mortgages to George Sanford, specialist planning to Carianne or a chartered town planner.'
        ]},
        { h: 'When the tools and the valuer disagree', p: [
          'Our tools read figures only. The valuer has seen the asset, the compliance documents and the client\'s timeframe. The valuer\'s judgement wins, with one sentence explaining why.'
        ]}
      ],
      confirm: 'Confirm the senior salesperson joining in January.',
      questions: [
        { q: 'A landlord rings saying they are thinking of selling. Who is their first call?', o: ['Richard Parsons', 'Kirby Butcher', 'Holly Hunt', 'Eric'], a: 0, why: 'Richard Parsons is the Valuations Coordinator and triages every seller enquiry.' },
        { q: 'Who takes a property from agreed instruction to listing-ready and compliant?', o: ['Fran Perry', 'Georgia Hopewell', 'Nikki Yearsley', 'Richard Parsons'], a: 0, why: 'Fran owns onboarding and the Committed Sale checklist.' },
        { q: 'Who runs an auction from appraisal to pre-auction offers?', o: ['Georgia Hopewell', 'Nikki Yearsley', 'Kirby Butcher', 'Fran Perry'], a: 0, why: 'Georgia is the Auction Manager.' },
        { q: 'An offer has been accepted and the solicitors are slow. Who drives it to completion?', o: ['Kirby Butcher', 'Holly Hunt', 'Richard Parsons', 'Ivy'], a: 0, why: 'Kirby handles sales progression from agreed to completed.' },
        { q: 'A buyer asks which mortgage product to choose. What do you say?', o: ['That it is outside HMO X\'s remit, and refer them to George Sanford', 'Recommend the cheapest lender you know', 'Tell them to ask the seller', 'Give them the lender criteria from our reports'], a: 0, why: 'Mortgage products are outside our remit; George Sanford at Vibe Finance is our specialist broker.' },
        { q: 'Who should a question about Article 4 or a Lawful Development Certificate go to?', o: ['Carianne Wells', 'Alice Ibbotson', 'George Sanford', 'WM Legal'], a: 0, why: 'Carianne Wells at Well Planned handles planning, Article 4 and LDCs.' },
        { q: 'Who sets every auction guide and reserve?', o: ['Richard Nicholls', 'The seller alone', 'EIG', 'Nikki Yearsley'], a: 0, why: 'Richard sets every auction guide and reserve.' }
      ]
    },

    {
      id: 'what-is-hmo',
      title: 'What is an HMO?',
      mins: 15,
      summary: 'The legal definition, licensing, room sizes, planning classes and the kinds of HMO we sell.',
      sections: [
        { h: 'The legal definition', p: [
          'Under the Housing Act 2004, a house in multiple occupation is a property let to 3 or more people who form 2 or more households and share facilities such as a kitchen, bathroom or toilet.',
          'A household is a single person, or members of the same family living together, including couples. Three friends sharing are three households. A couple sharing with one friend are two households and three people, so that is an HMO.'
        ]},
        { h: 'Licensing', list: [
          'Mandatory licensing: an HMO with 5 or more people forming 2 or more households needs a licence, whatever the number of storeys.',
          'Additional licensing: a council can require smaller HMOs in all or part of its area to be licensed.',
          'Selective licensing: a council can require every privately rented home in an area to be licensed.',
          'Licences usually run for 5 years, carry conditions such as the maximum number of occupants, and typically cost £600 to £1,500 or more.',
          'Licences are not transferable. A buyer must apply for a new licence on completion.'
        ]},
        { h: 'Minimum room sizes (licensed HMOs)', table: { head: ['Sleeping room for', 'Minimum floor area'], rows: [
          ['One person over 10', '6.51 sqm'], ['Two people over 10', '10.22 sqm'], ['One child under 10', '4.64 sqm'], ['Anyone', 'A room under 4.64 sqm cannot be used for sleeping']
        ]}, p: ['These are legal minimums. Councils can set higher local standards, and the Tier Methodology expects much more: a Tier 2 HMO averages 10 sqm or more a room.'] },
        { h: 'Planning use classes', terms: [
          ['C3', 'A dwellinghouse: a family home or a let to one household.'],
          ['C4', 'A small HMO: 3 to 6 unrelated people sharing. Changing from C3 to C4 is permitted development, unless an Article 4 direction removes that right.'],
          ['Sui generis', 'A large HMO: 7 or more people. It always needs planning permission; there is no permitted development route.'],
          ['LDC', 'A Lawful Development Certificate (section 191) confirms an existing use is lawful. It needs 10 years\' continuous use with no enforcement action and takes 8 to 12 weeks.'],
          ['Section 257 HMO', 'A building converted into self-contained flats that does not meet the 1991 Building Regulations, where fewer than two-thirds are owner-occupied.']
        ]},
        { h: 'The HMOs in our market', list: [
          'Tenant markets: professional, student, supported, benefits or mixed.',
          'Property types: terraced, semi-detached, detached and commercial conversions.',
          'Layout: shared bathrooms, part en-suite or all en-suite. Room size, bathrooms and condition set the tier.',
          'Management: co-living operators, agents, landlords with systems, active private landlords, and passive or live-in landlords.'
        ]},
        { h: 'Why investors buy HMOs', p: [
          'Rent is charged per room, so an HMO earns a much higher gross yield than the same house let to one household. The trade-off is more regulation, more management and more ways for income to slip. That is why the tier and the evidence matter.'
        ]}
      ],
      questions: [
        { q: 'What is the minimum for a property to be an HMO?', o: ['3 or more people forming 2 or more households, sharing facilities', '2 unrelated people sharing a kitchen', '5 or more people of any household', 'Any house with more than 4 bedrooms'], a: 0, why: 'Housing Act 2004: 3+ people, 2+ households, sharing facilities.' },
        { q: 'When does mandatory HMO licensing apply?', o: ['5 or more people forming 2 or more households', '3 or more people in any house', '7 or more people over three storeys', 'Only where there is an Article 4 direction'], a: 0, why: 'Mandatory licensing covers 5+ people in 2+ households, whatever the storeys.' },
        { q: 'A buyer completes on a licensed HMO. What happens to the licence?', o: ['It does not transfer; the buyer must apply for a new one', 'It transfers automatically', 'It lasts until the old expiry date', 'The seller keeps it for their next HMO'], a: 0, why: 'Licences are not transferable, so a new application is a critical first task.' },
        { q: 'What is the minimum floor area for a bedroom for one adult in a licensed HMO?', o: ['6.51 sqm', '10.22 sqm', '4.64 sqm', '8.00 sqm'], a: 0, why: '6.51 sqm for one person over 10; 10.22 sqm for two.' },
        { q: 'An HMO lets to 8 unrelated tenants. What planning use class is it?', o: ['Sui generis', 'C4', 'C3', 'Section 257'], a: 0, why: '7 or more occupants is a large HMO, sui generis, and always needs planning permission.' },
        { q: 'What does an LDC need to show for an HMO use?', o: ['10 years\' continuous use with no enforcement action', '2 years of licence renewals', 'A current gas certificate', 'That neighbours have not complained'], a: 0, why: 'A section 191 LDC needs 10 years\' continuous use and takes 8 to 12 weeks.' }
      ]
    },

    {
      id: 'compliance',
      title: 'Compliance and planning',
      mins: 20,
      summary: 'The onboarding pack, certificate rules, the Renters\' Rights Act, and why lawful use is separate from licensing.',
      sections: [
        { h: 'Why compliance drives value', p: [
          'Buyers, lenders and solicitors all ask for the paperwork. What a buyer cannot verify, they discount. Gaps shrink the buyer pool, slow the sale or push it to auction. Where the paperwork is not as represented, both value and saleability default toward the bricks-and-mortar position.'
        ]},
        { h: 'Essential to onboard', p: ['We cannot onboard a property without these:'], list: [
          'HMO licence', 'Lawful use: planning permission or an LDC', 'Gas safety record (CP12)', 'EICR', 'Fire risk assessment', 'Fire alarm and emergency lighting test certificates', 'EPC', 'Land Registry title', 'Room-by-room financials, with 24 months of rent history', 'Tenancy schedule and 24-month occupancy record', 'Operating cost base', 'Photos, video and a measured floor plan'
        ]},
        { h: 'Completes the pack', p: ['Not blockers, but they make a stronger pack: PAT testing, the Building Regulations final certificate, a legionella risk assessment, buildings insurance and managing agent details.'] },
        { h: 'How we record each document', table: { head: ['Status', 'Meaning'], rows: [
          ['Valid', 'In place and in date'], ['Partial', 'Some of it is there'], ['Not confirmed', 'We have been told it exists but have not seen it'], ['Assumed compliant, evidence required', 'Likely fine, but we need the proof'], ['Not supplied', 'The seller has not sent it'], ['Not in place', 'It does not exist']
        ]}},
        { h: 'Certificate rules', table: { head: ['Document', 'Rule'], rows: [
          ['Gas safety (CP12)', 'Every 12 months; copy to tenants within 28 days'],
          ['EICR', 'Every 5 years; C1, C2 and FI findings fixed within 28 days'],
          ['Fire risk assessment', 'Under the Fire Safety Order 2005; reviewed every year'],
          ['Fire alarm and emergency lighting', 'Tested and certified every year'],
          ['EPC', 'Minimum E to let today; C is proposed for new tenancies from 2028 and all tenancies from 2030. We never promise a client an EPC'],
          ['Deposits', 'Protected within 30 days with Prescribed Information; capped at 5 weeks\' rent'],
          ['Right to Rent', 'Checked for every adult tenant']
        ]}},
        { h: 'The Renters\' Rights Act 2025', list: [
          'Section 21 "no fault" evictions are abolished and tenancies are now assured periodic tenancies.',
          'Possession is by section 8 grounds. The selling ground needs 4 months\' notice and is not available in the first 12 months of a tenancy.',
          'Awaab\'s Law, a Decent Homes Standard for private rentals, a private landlord database and an ombudsman are being brought in.',
          'For our sales: buyers inherit periodic tenancies, so the rent schedule, arrears and tenancy start dates matter more than ever.'
        ]},
        { h: 'Planning and lawful use', p: [
          'A licence says the property is safe to occupy as an HMO. It does not prove the use is lawful in planning terms. A buyer\'s solicitor and lender will ask both questions.',
          'Lawful use is shown by planning permission, an LDC, or evidence the C4 use began before an Article 4 direction. A 7+ person HMO needs sui generis permission.',
          'In Article 4 areas, a lawful existing HMO holds rights that cannot be recreated, which supports its value.'
        ]},
        { h: 'Red flags to raise straight away', list: [
          'No licence where one is needed.',
          'More occupants than the licence allows, or undersized rooms used for sleeping.',
          'An HMO in an Article 4 area with no evidence of when its use began.',
          'Out-of-date gas, electrical or fire certificates.'
        ]}
      ],
      questions: [
        { q: 'Which of these must we have before we can onboard a property?', o: ['The HMO licence and evidence of lawful use', 'A PAT test certificate', 'Buildings insurance', 'Managing agent details'], a: 0, why: 'Licence and lawful use are essential; PAT, insurance and agent details complete the pack but are not blockers.' },
        { q: 'How often is a gas safety record (CP12) needed?', o: ['Every 12 months', 'Every 5 years', 'Every 3 years', 'Only when tenants change'], a: 0, why: 'Annually, with a copy to tenants within 28 days.' },
        { q: 'How long does a landlord have to protect a deposit?', o: ['30 days', '7 days', '60 days', '14 days'], a: 0, why: 'Within 30 days, with the Prescribed Information.' },
        { q: 'Does a current HMO licence prove the HMO use is lawful in planning terms?', o: ['No. Licensing and planning are separate questions', 'Yes, a licence covers planning', 'Yes, if it is a mandatory licence', 'Only for sui generis HMOs'], a: 0, why: 'Lawful use needs planning permission, an LDC or evidence it pre-dates the Article 4 direction.' },
        { q: 'Under the Renters\' Rights Act, when can a landlord use the selling ground?', o: ['With 4 months\' notice, not in the first 12 months of a tenancy', 'At any time with 2 months\' notice', 'Using a section 21 notice', 'Only at auction'], a: 0, why: 'Section 21 is gone; the selling ground needs 4 months\' notice and not in the first year.' },
        { q: 'A seller says their gas certificate is "definitely somewhere". How is it recorded?', o: ['Not confirmed', 'Valid', 'Not in place', 'Partial'], a: 0, why: 'We have been told it exists but have not seen it.' },
        { q: 'A seller asks you to sort their EPC for the listing. What do you do?', o: ['Don\'t promise one; explain it is needed and how they can get it', 'Promise it will be ready by launch', 'Tell them HMOs don\'t need an EPC', 'Use the EPC from next door'], a: 0, why: 'We never promise a client an EPC.' }
      ]
    },

    {
      id: 'operations',
      title: 'Management and HMO operations',
      mins: 20,
      summary: 'How HMOs are run, what they cost to run, and why management decides whether a tier holds.',
      sections: [
        { h: 'Management sets the ceiling', p: ['Management is one of the two ceilings in the Tier Methodology. However good the building, an HMO cannot hold a higher tier than its management supports.'], table: { head: ['Management', 'Highest tier it supports'], rows: [
          ['Co-living operator', 'T1'], ['Agent, or a landlord with proper systems', 'T2'], ['Active private landlord', 'T3'], ['Passive or live-in landlord', 'T4']
        ]}},
        { h: 'How long a tier holds', list: [
          'Very well run: 12 to 15 years.',
          'Typically run: 8 to 10 years.',
          'Poorly run: under 5 years.',
          'Self-management is a professional discipline, not a cost-saving exercise.'
        ]},
        { h: 'Running costs', p: ['Bills are usually included in the room rent, which makes rooms easier to let but puts the cost risk on the owner.'], table: { head: ['Set-up', 'Typical operating costs, as a share of rent'], rows: [
          ['Well run, with an agent', '35% to 45%'], ['Well run, self-managed', '25% to 35%'], ['Tenants pay the bills', '20% to 30%'], ['Management fee alone', 'Typically 10% to 12%']
        ]}},
        { h: 'The rent roll', list: [
          'The rent schedule lists every room, its rent, the tenant and the tenancy start date. Always say whether rents include bills.',
          'Contracted rent (what the rooms are let for) can differ from delivered rent (what was actually received over 12 months).',
          'We ask for 24 months of rent history and occupancy, because buyers and lenders look at the track record, not just today.'
        ]},
        { h: 'Trading position', p: ['Trading position is the rent an HMO earns as a percentage of what its home tier earns in its town. Across our register the median is 97.5%: two in three HMOs sit below 100%.'], table: { head: ['Band', 'Rent against home tier'], rows: [
          ['Launch premium', '115% or more'], ['Settling', '105% to 114%'], ['At tier', '96% to 104%'], ['Drift', '85% to 95% (the usual starting point for a Health Check)'], ['Sub-tier', 'Under 85%']
        ]}},
        { h: 'Launch premium and the underwriting rule', p: [
          'A new or newly refurbished HMO lets at 110% to 120% of its home tier for 12 to 24 months, then settles.',
          'Our underwriting rule: never underwrite above 100% of home tier from year 3 onwards, and stress-test at 90%. Borrowing set against launch rent is the leverage trap.'
        ]},
        { h: 'What tenants can afford', p: ['A tenant spends about 30% of gross income on housing: £25,000 a year supports about £625 a month, £30,000 about £750, £35,000 about £875, and £40,000 or more about £1,000.'] }
      ],
      questions: [
        { q: 'An HMO is run by an active private landlord. What is the highest tier it can hold?', o: ['T3', 'T1', 'T2', 'T5'], a: 0, why: 'Management is a ceiling: an active private landlord supports up to T3.' },
        { q: 'An HMO earns 90% of its home tier rent. What is its trading position?', o: ['Drift', 'At tier', 'Settling', 'Sub-tier'], a: 0, why: 'Drift is 85% to 95%.' },
        { q: 'What is HMO X\'s underwriting rule from year 3 onwards?', o: ['Never above 100% of home tier, stress-tested at 90%', 'Use the launch rent for all five years', 'Use 115% of home tier', 'Use whatever the lender accepts'], a: 0, why: 'Launch rents fade, so we never underwrite above home tier from year 3.' },
        { q: 'How long does a typically run HMO hold its tier?', o: ['8 to 10 years', '12 to 15 years', 'Under 2 years', 'Forever'], a: 0, why: 'Very well run 12 to 15 years; typical 8 to 10; poorly run under 5.' },
        { q: 'A tenant earns £30,000 a year. Roughly what monthly rent can they afford?', o: ['About £750', 'About £1,250', 'About £450', 'About £1,000'], a: 0, why: 'About 30% of gross income: £30,000 × 30% ÷ 12 = £750.' },
        { q: 'How much rent history do we ask a seller for?', o: ['24 months', '3 months', '6 months', 'Just the current month'], a: 0, why: 'Buyers and lenders want the track record: 24 months of rent and occupancy.' }
      ]
    },

    {
      id: 'jargon',
      title: 'Explaining the jargon',
      mins: 20,
      summary: 'Yields, ROCE, GDV, Article 4 and the Tier Methodology terms, with a worked example.',
      sections: [
        { h: 'Money terms', terms: [
          ['Gross yield', 'Annual rent when fully let ÷ price × 100. The headline figure buyers compare.'],
          ['Net yield', 'Annual rent less operating costs (including voids) ÷ price × 100.'],
          ['ROCE (return on capital employed)', 'Annual profit after finance costs ÷ the cash the buyer actually puts in. "Geared" means with a mortgage.'],
          ['ROI', 'Return on investment: the general term. In our reports, say which measure you mean (gross yield, net yield or ROCE).'],
          ['LTV', 'Loan to value. Standard HMO lending is around 75%.'],
          ['ICR', 'Interest cover ratio: how far the rent must exceed the stressed mortgage interest. Lenders set their own; always say "confirm live with a broker".'],
          ['GDV', 'Gross development value: what a scheme is worth once finished.'],
          ['ERV', 'Estimated rental value: the full rent roll a year when let.'],
          ['SDLT', 'Stamp duty land tax. Buyers of additional homes pay a surcharge; 6+ bed HMOs may be treated as commercial. Our figures are indicative.']
        ]},
        { h: 'Worked example', p: [
          'A 6-bed HMO priced at £300,000 lets for £39,000 a year when full, bills included.',
          'Gross yield: £39,000 ÷ £300,000 = 13.00%.',
          'Operating costs at 30%: £11,700. Net income: £27,300. Net yield: £27,300 ÷ £300,000 = 9.10%.',
          'With a 75% interest-only mortgage (£225,000 at 6%): interest is £13,500 a year, so profit is £13,800. Cash in is the £75,000 deposit plus £20,000 stamp duty with the surcharge = £95,000, before fees. ROCE: £13,800 ÷ £95,000 = 14.53%.',
          'Value uplift rule of thumb: value gained = extra annual rent ÷ yield. At 12%, £1,000 more sustainable rent adds about £8,300 of value.'
        ]},
        { h: 'Valuation and market terms', terms: [
          ['Bricks-and-mortar value', 'What the property is worth as a house with vacant possession.'],
          ['Investment value', 'A value based on the income, capitalised at a yield.'],
          ['Clearing value', 'The price it will actually sell at. Different from a finance value, which is never used as an asking price.'],
          ['Yield band', 'The range of gross yields HMOs sell at in a particular town.'],
          ['Comparables (comps)', 'Sold, auction and completed prices first; asking and STC prices second.'],
          ['STC / SSTC', 'Sold subject to contract: an offer accepted, not yet completed.'],
          ['Guide and reserve', 'At auction, the guide draws bidders in; the reserve is the confidential minimum, locked in just before the auction.'],
          ['Gazundering', 'A buyer cutting their offer just before exchange. Committed Sale fixes the price at acceptance to stop it.']
        ]},
        { h: 'Planning terms', terms: [
          ['Article 4 direction', 'A council order removing permitted development, so a house cannot become a C4 HMO without planning permission.'],
          ['C4 and sui generis', 'Small HMO (3 to 6 people) and large HMO (7+ people).'],
          ['LDC', 'Lawful Development Certificate: the council\'s confirmation that an existing use is lawful.']
        ]},
        { h: 'Tier Methodology terms (use them word for word)', terms: [
          ['Home tier', 'What the HMO\'s rooms, bathrooms, condition, location and management sustainably support, from T1 to T5.'],
          ['Trading position', 'The rent it earns as a percentage of what its home tier earns in its town.'],
          ['Trajectory', 'Where the trading position is heading over 3, 5 and 10 years, by how well the HMO is run.'],
          ['Launch premium', 'New or newly refurbished rooms let above their home tier rent for the first year or two, then settle.'],
          ['Leverage trap', 'Borrowing set against launch-level rent or value, which a lender\'s valuer won\'t see once the premium fades.'],
          ['The four T1 criteria', 'All four, today: rooms of 15 sqm or more, an A1 location, hotel-standard sound-proofing and hotel-grade functionality.'],
          ['Buy It Right', 'Match the tier to the buyer: Tier 2 and Tier 3 first; 8-bed HMOs after one HMO; Tier 4 value-add after one HMO, or two if an agent will run it.']
        ]}
      ],
      questions: [
        { q: 'An HMO lets for £36,000 a year and is priced at £300,000. What is the gross yield?', o: ['12.00%', '10.00%', '8.33%', '14.40%'], a: 0, why: '£36,000 ÷ £300,000 = 12.00%.' },
        { q: 'How does net yield differ from gross yield?', o: ['Net takes off operating costs and voids first', 'Net includes the mortgage deposit', 'Net is gross divided by 12', 'There is no difference'], a: 0, why: 'Net yield uses income after operating costs.' },
        { q: 'What does ROCE measure?', o: ['Profit as a percentage of the cash put in', 'Rent as a percentage of the price', 'The loan as a percentage of value', 'The rise in value since purchase'], a: 0, why: 'Return on capital employed compares profit to the buyer\'s own cash.' },
        { q: 'What is the leverage trap?', o: ['Borrowing against launch rent that a lender won\'t see once it fades', 'A mortgage with an early repayment charge', 'Buying in an Article 4 area', 'Paying the stamp duty surcharge'], a: 0, why: 'Launch rents settle; a refinance based on them leaves the owner exposed.' },
        { q: 'At a 12% yield, roughly how much value does £1,000 of extra sustainable rent add?', o: ['About £8,300', 'About £1,200', 'About £12,000', 'About £120,000'], a: 0, why: '£1,000 ÷ 0.12 ≈ £8,300.' },
        { q: 'What is gazundering?', o: ['A buyer cutting their offer just before exchange', 'A seller raising the price after acceptance', 'An auction lot failing to sell', 'A lender down-valuing'], a: 0, why: 'Committed Sale fixes the price at acceptance to stop it.' },
        { q: 'Which are the four T1 criteria?', o: ['15 sqm+ rooms, A1 location, hotel-standard sound-proofing, hotel-grade functionality', 'All en-suite, new kitchen, bills included, under 5 years old', 'Professional tenants, 8+ beds, sui generis, licensed', 'Over 12% gross, fully let, agent-managed, Article 4 area'], a: 0, why: 'All four, today, or the home tier is T2.' }
      ]
    },

    {
      id: 'valuation',
      title: 'How we value an HMO',
      mins: 25,
      summary: 'The three bases of value, our evidence rules, the Tier Methodology and how a valuation report is written.',
      sections: [
        { h: 'Three bases in every sales valuation', terms: [
          ['Bricks and mortar', 'Vacant possession, a 180-day sale to a home buyer. Often the floor.'],
          ['Current value', 'As it stands, a 180-day sale to an HMO investor today.'],
          ['Optimised value', 'At the launch window after agreed work.']
        ], p: [
          'We may also give a finance or refinance value for context. It is a hold-and-refinance figure and must never be used as an asking price.',
          'Our primary method is gross-yield capitalisation of the actual rent roll, with the net position read alongside.'
        ]},
        { h: 'Evidence rules', list: [
          'Sold, auction and completed prices come first; asking and STC prices are secondary.',
          'Comparables from before April 2026 get a yield-drift adjustment of +0.50%, shown next to the original figure.',
          'Never average Committed Sale asking yields, auction clearing yields and sold-register yields. They measure different things.',
          'Cross-check with value per room, £ per square foot and the bricks-and-mortar floor.',
          'Flag yields above 18% as outliers.',
          'Where data is missing, flag the gap. Never fill it with an estimate.'
        ]},
        { h: 'Read through the HMO X Tier Methodology (Edition 2)', table: { head: ['Tier', 'Label'], rows: [
          ['T1', 'Premium / Studio'], ['T2', 'New Quality: the defensible mainstream'], ['T3', 'Standard / Older En-Suite'], ['T4', 'Basic / Functional'], ['T5', 'Distressed / Opportunity']
        ]}, p: ['Tiers are set by fundamentals, never by price or bed count. T1 to T4 are operating tiers; T5 is an opportunity tier.'] },
        { h: 'Setting the home tier: five tests', list: [
          'Rooms: T2 needs a 10 sqm+ average and 8 sqm+ smallest room; T3 needs 9 sqm+, or 12 sqm+ if not en-suite.',
          'Bathrooms: T2 is all en-suite; T3 is half or more en-suite, or no more than 4 people per shared bathroom.',
          'Condition: 0 to 7 years since conversion or refurbishment starts at T2, 8 to 14 at T3, 15+ at T4. Move one tier for excellent or poor condition.',
          'Location ceiling: A1 allows up to T1, A2 up to T2, B up to T4.',
          'Management ceiling: co-living up to T1, agent or landlord with systems up to T2, active private landlord up to T3, passive or live-in landlord up to T4.'
        ], p: ['The rule: take the middle of the three building readings, then cap it by the two ceilings. The read-out is three numbers (home tier, trading position, trajectory) and two flags (tenant market and legal position).'] },
        { h: 'Our register by tier', p: ['Medians from 197 HMO X valuations with a Tier call, April 2025 to October 2026:'], table: { head: ['Tier', 'Valuations', 'Rent a room', 'Gross yield', 'En-suite share'], rows: [
          ['T2', '58', '£696', '12.0%', '100%'], ['T3', '91', '£606', '12.9%', '83%'], ['T4', '21', '£564', '14.8%', '0%']
        ]}},
        { h: 'The buyer demand read', p: ['The Team Analyser scores a price from 0 (no buyer pool) to 5 (strong demand) by where its gross yield sits against the town\'s band, stress-tested for voids, maintenance, bills and stamp duty. It is a read on the buyer pool, not a valuation.'] },
        { h: 'Writing the report', list: [
          'Speak as a specialist briefing a client: third person for the analysis, first person only in the conclusion.',
          'Every figure has a named source and a date. Give ranges with the core cluster. Round working valuations to the nearest £5,000.',
          'Say whether rents include bills, every time.',
          'Use the heading "Read through the HMO X Tier Methodology" and the tier terms word for word.',
          'Never print named lender criteria, LTV ceilings or ICR thresholds. Say "confirm live with a broker".',
          'State that it is not a RICS Red Book valuation and does not replace a lender\'s valuation.',
          'A report is reviewed if there is no instruction within 60 days, and re-issued after 12 months.'
        ]}
      ],
      questions: [
        { q: 'Which three bases does every sales valuation give?', o: ['Bricks and mortar, current value and optimised value', 'Asking, auction and sold', 'Gross, net and ROCE', 'Rebuild, insurance and land value'], a: 0, why: 'Plus a finance value for context, which is never an asking price.' },
        { q: 'A comparable sold in January 2026. What do you do with its yield?', o: ['Show it with a +0.50% yield-drift adjustment', 'Use it unchanged', 'Discard it', 'Average it with asking prices'], a: 0, why: 'Comparables from before April 2026 carry a +0.50% adjustment, shown alongside the original.' },
        { q: 'Can you average asking, auction-clearing and sold yields into one figure?', o: ['No, they are never averaged', 'Yes, it gives a fair middle', 'Only for T3 HMOs', 'Only in the South East'], a: 0, why: 'They measure different things and are always shown separately.' },
        { q: 'An HMO\'s three building tests read T2, T3 and T3, in a B location with an active private landlord. What is its home tier?', o: ['T3', 'T2', 'T4', 'T1'], a: 0, why: 'The middle building reading is T3; neither ceiling (B up to T4, active landlord up to T3) pulls it lower.' },
        { q: 'What is the label for Tier 5?', o: ['Distressed / Opportunity', 'Basic / Functional', 'Add-Value / Redevelopment', 'Standard / Older En-Suite'], a: 0, why: 'Edition 2 uses Distressed / Opportunity. Older documents used other labels.' },
        { q: 'A client asks what LTV and ICR a lender will use. What goes in the report?', o: ['No named criteria: "confirm live with a broker"', 'The lender\'s current criteria table', 'Our best guess', 'Whatever the client\'s last mortgage used'], a: 0, why: 'We never print live lender criteria.' },
        { q: 'What is the median gross yield for T3 HMOs in our register?', o: ['12.9%', '9.5%', '14.8%', '18.0%'], a: 0, why: 'T2 12.0%, T3 12.9%, T4 14.8%.' }
      ]
    },

    {
      id: 'marketing',
      title: 'Marketing an HMO for sale',
      mins: 25,
      summary: 'Our five routes, how each one works, and how a listing goes to market.',
      sections: [
        { h: 'The route follows the valuation', p: [
          'We run every main route in-house, so the route we recommend is the one the evidence supports, never the one with the biggest fee. Many portfolio owners use two or three routes at once.'
        ], table: { head: ['Route', 'Best fit', 'Compliance', 'Timeline'], rows: [
          ['Committed Sale', 'T1, T2, strong T3', 'Complete or completable', '90 to 180 days'],
          ['Auction', 'T3, T4, T5 or mixed', 'Workable with gaps', '30 to 60 days'],
          ['Exit Planning', 'Any HMO with a one-tier uplift available', 'The gaps are the plan', '12 to 36 months'],
          ['Back to Resi', '4 to 6 person C4 houses; never 9+ beds', 'Fit-out stripped out', '6 to 18 months'],
          ['Hold and review', 'Any', 'Any', 'No fixed window']
        ]}},
        { h: 'Committed Sale', list: [
          'Off-market first for 3 to 7 days to matched investors and the Committed Sale hot list, then the wider database, then the portals.',
          'Deal Thread members in the Hub see it 48 hours early.',
          'Buyers must pass AML and ID checks, name a solicitor and show proof of funds before exclusivity.',
          'On acceptance the buyer pays a £3,500 reservation deposit within 24 hours. The property comes off the market and the price is fixed, which stops gazundering.',
          'Exchange within 56 days of the buyer receiving draft contracts; completion up to 14 days after exchange.',
          'If the buyer pulls out without good reason, they lose the deposit.'
        ]},
        { h: 'How long to agree a sale', table: { head: ['Priced', 'Typical time to agree'], rows: [
          ['At or below the floor', '1 to 2 weeks'], ['Between floor and asking', '2 to 6 weeks'], ['Up to 5% above asking', '6 to 12 weeks'], ['Aspirational', '3 to 4 months, if it comes at all']
        ]}},
        { h: 'HMO X Auctions', list: [
          'Online auctions run through EIG, with combined reach of 600,000+ registered buyers, plus Rightmove, our database and the Deal Thread.',
          'Richard sets the guide and reserve. The guide sits 20% to 25% below open-market value to draw bidders in; the reserve stays within 10% of the guide, stays confidential, and is locked in once registered bidding can be read. If the reserve is not a price the seller would genuinely exchange at, we say so at valuation, not at the gavel.',
          'Our record: 100% of HMOs sold at our auctions have completed, 90% of lots that go to live bidding sell, and 58% of sales exchange before auction day.',
          'About three weeks of intensive marketing, with weekly demand reports. A lot that is not tracking is pulled before the day.',
          'Exchange on the fall of the hammer with a 10% deposit; completion 28 to 56 days later. Pre-auction offers can exchange early through the Deal Thread.',
          'The legal minimum is title only. We build the full pack, because what a bidder cannot verify, they discount.',
          'Keys to success: fully let at launch, no title or compliance concerns, good access for viewings, quick answers.',
          '"We aren\'t chasing the highest reserve. We\'re chasing the highest sale." Auction is not a last resort.'
        ]},
        { h: 'Exit Planning', list: [
          'For owners 12 to 36 months from selling with a real case for optimisation. Not for an owner who should sell now.',
          'A phased plan (now, 30 days, 90 days, longer term) and two launch windows: sell as is, or optimise then launch.',
          'Reviewed formally at 6 months.'
        ]},
        { h: 'Back to Resi (X HMO)', list: [
          'For HMOs worth more as a family home. The gap needs to be about £50,000+ for a lightly adapted house, and £100,000+ for a heavily adapted one.',
          'Net gain = family-home value less tenanted HMO value, lost rent, holding costs, works and fees, run for the best, expected and worst timelines.',
          'Seven steps: identified, consultation, report and route, vacant possession, works, launch with X HMO, completion.'
        ]},
        { h: 'Marketing rules', list: [
          'Nothing goes live until the pack has been checked and the seller has approved the listing.',
          'No estate-agent language: no "stunning", "incredible opportunity" or "going fast".',
          'Never name Sprift, never promise an EPC, never publish a past client\'s address.'
        ]}
      ],
      questions: [
        { q: 'Which route suits a compliant T2 HMO where the seller wants price with certainty?', o: ['Committed Sale', 'Auction', 'Back to Resi', 'Hold and review'], a: 0, why: 'Committed Sale fits T1, T2 and strong T3 with complete or completable compliance.' },
        { q: 'What deposit does a Committed Sale buyer pay on acceptance?', o: ['£3,500 reservation deposit within 24 hours', '10% of the price on the day', 'Nothing until exchange', '£400 onboarding fee'], a: 0, why: 'The £3,500 deposit takes the property off the market and fixes the price.' },
        { q: 'When must a Committed Sale exchange?', o: ['Within 56 days of the buyer receiving draft contracts', 'On the day the offer is accepted', 'Within 12 months', 'Whenever the buyer is ready'], a: 0, why: 'Then completion follows within 14 days of exchange.' },
        { q: 'What happens at the fall of the hammer at an HMO X auction?', o: ['Contracts exchange and the buyer pays a 10% deposit', 'The buyer has 56 days to decide', 'The reserve is announced', 'The buyer pays £3,500'], a: 0, why: 'Auction exchanges on the hammer; completion is 28 to 56 days later.' },
        { q: 'Why do we build a full legal pack for auction when title alone is the legal minimum?', o: ['What a bidder cannot verify, they discount', 'EIG requires it by law', 'It lets us charge a higher fee', 'Buyers cannot bid without it'], a: 0, why: '"The title pack gets you into the catalogue. The full pack gets you the price."' },
        { q: 'A listing is priced between the floor and asking. How long does a sale typically take to agree?', o: ['2 to 6 weeks', '1 to 2 days', '6 to 12 months', '3 to 4 months'], a: 0, why: 'At or below floor 1 to 2 weeks; floor to asking 2 to 6 weeks; up to 5% over 6 to 12 weeks.' },
        { q: 'Which owner is not right for Exit Planning?', o: ['One who should sell now', 'One 18 months from selling with uplift available', 'One with compliance gaps to close', 'One with under-rented rooms'], a: 0, why: 'Exit Planning is for owners 12 to 36 months out with a real optimisation case.' }
      ]
    },

    {
      id: 'buyers',
      title: 'Finding the right buyer',
      mins: 20,
      summary: 'Who buys from us, how to qualify them, Buy It Right, and what buyers get from HMO X.',
      sections: [
        { h: 'Who buys from us', list: [
          'Our core buyer buys finished, tenanted, licensed HMOs at a yield price.',
          'Deal-hunters and value-add buyers, who mostly buy at auction.',
          'First-time HMO investors, portfolio builders, co-living operators and developers.',
          'We bring 200+ new investors a month into the business, and Find my next HMO goes to 5,000+ buyers.'
        ]},
        { h: 'Is the buyer ready? The five-point test', list: [
          'They have spoken to a specialist HMO broker.',
          'They know their borrowing range and structure.',
          'Their deposit is certain.',
          'They have tested the numbers at home-tier rent, not today\'s asking rent.',
          'They can move quickly.'
        ]},
        { h: 'What to ask (the buyer brief)', list: [
          'UK or overseas? Where are they based, and how far will they go?',
          'How many HMOs do they own already?',
          'Capital available, and cash or mortgage?',
          'Which tenant market, and will they self-manage or use an agent?',
          'Growth, cashflow or both? Target income, net yield and return on cash?',
          'Timeframe to buy.'
        ]},
        { h: 'Buy It Right', p: [
          'Match the tier to the buyer: Tier 2 and Tier 3 first; 8-bed HMOs after one HMO; Tier 4 value-add after one HMO, or two if an agent will run it. Explain Buy It Right before showing regions and example HMOs.'
        ]},
        { h: 'From offer to completion (Committed Sale)', list: [
          'The buyer registers: verifies email and mobile, accepts the Committed Sale terms, names a solicitor, registers a card for the deposit and passes an online AML check.',
          'Offers are made online. The seller has up to 3 days to accept or decline.',
          'On acceptance: the £3,500 deposit, then solicitors, finance and survey straight away.',
          'Valuation support: ask the lender for a specialist HMO valuer on the investment basis, and send them the Buyer Valuation Pack in advance.',
          'Buyers price in 2% to 5% for negotiation, to cover stamp duty, fees, rates and choice. Offers usually land between asking and 10% under.'
        ]},
        { h: 'Handover: critical first tasks', list: [
          'Apply for a new HMO licence on completion; licences do not transfer.',
          'Commission a fire risk assessment if none was supplied.',
          'Re-protect deposits and serve Prescribed Information within 30 days.',
          'Reconcile the rent schedule with the tenancy agreements, and get the rent ledger and arrears statement.',
          'Diarise renewals: gas yearly, fire alarm and lighting yearly, EICR every 5 years, EPC every 10 years.'
        ]},
        { h: 'After completion', p: [
          'Every HMO X buyer gets a gifted 12-month Hub year (the Hub is free to everyone until 31 December 2027 in any case), 10% off a Health Check, and check-ins at day 7, day 30, day 60, day 90 and month 11. Their buyer pack becomes the baseline for their first Health Check.'
        ]},
        { h: 'Rules', list: [
          'Everything we give buyers is indicative. Tax and mortgage products are outside HMO X\'s remit: refer them on.',
          'Towns in a buyer brief are a starting point; the team\'s knowledge of stock wins.',
          'Keep buyers\' details in our systems only.'
        ]}
      ],
      questions: [
        { q: 'Which is part of the five-point buyer readiness test?', o: ['The numbers are tested at home-tier rent, not asking-day rent', 'They have viewed at least ten HMOs', 'They own a property in the same town', 'They have joined the Hub'], a: 0, why: 'The test: broker spoken to, borrowing known, deposit certain, numbers at home-tier rent, can move quickly.' },
        { q: 'Under Buy It Right, which tiers should a first-time HMO buyer start with?', o: ['Tier 2 and Tier 3', 'Tier 1 only', 'Tier 4 and Tier 5', 'Any tier with a high yield'], a: 0, why: 'Tier 2 and Tier 3 first.' },
        { q: 'A buyer wants a Tier 4 value-add HMO and will use an agent. How many HMOs should they own first?', o: ['Two', 'One', 'None', 'Five'], a: 0, why: 'Tier 4 value-add after one HMO, or two if an agent will run it.' },
        { q: 'How long does a seller have to accept or decline a Committed Sale offer?', o: ['Up to 3 days', 'Up to 56 days', 'Up to 24 hours', 'Until the buyer withdraws'], a: 0, why: 'The buyer can change or withdraw the offer until then.' },
        { q: 'What should a buyer ask their lender for at valuation?', o: ['A specialist HMO valuer on the investment basis', 'The cheapest available surveyor', 'A bricks-and-mortar valuation', 'No valuation at all'], a: 0, why: 'And send them the Buyer Valuation Pack in advance.' },
        { q: 'What is the most urgent task for a buyer on completion?', o: ['Apply for a new HMO licence', 'Redecorate the communal areas', 'Raise the rents', 'Renew the EPC'], a: 0, why: 'Licences do not transfer, so this is critical.' },
        { q: 'What does every HMO X buyer get after completion?', o: ['12 months of Hub membership', 'A free second HMO valuation every month', 'A rent guarantee', 'A refund of the deposit'], a: 0, why: 'Plus 10% off a Health Check and check-ins over the first year.' }
      ]
    },

    {
      id: 'service',
      title: 'Communication, negotiation and service',
      mins: 15,
      summary: 'The HMO X voice, how we negotiate, and how we protect clients and their information.',
      sections: [
        { h: 'The HMO X voice', p: ['We do not pitch. We brief. We do not sell information; we sell clarity and decisions. We do not promise outcomes we cannot underwrite.'], list: [
          'Speak as a specialist briefing a client, not a salesperson closing one.',
          'British English, plain and direct. No emojis, no hype, no estate-agent language.',
          'Give the figure, its source and its date. Ranges, not false precision.',
          'Hedge only where there is real uncertainty.',
          'Bad news early, with what we are doing about it.'
        ]},
        { h: 'Sellers', p: [
          'Set price expectations at the valuation, not three months into marketing. Show the evidence, the three bases of value and the speed-versus-value trade-off. If a seller insists on an aspirational price, explain plainly what that means for time to agree.'
        ]},
        { h: 'Buyers', p: [
          'Respond quickly, send the full pack, qualify early and keep good buyers close. About half of our sellers reinvest, and many buyers come back. That is the community in "Your community of HMO experts".'
        ]},
        { h: 'Negotiating', list: [
          'Anchor on evidence: comparables, the rent roll, the tier read and buyer demand.',
          'Know the seller\'s walk-away price and timeframe before offers arrive.',
          'Trade, don\'t give: price for speed, certainty or a completion date.',
          'Get offers in writing, with proof of funds and the buyer\'s position.',
          'Pass every offer to the seller promptly and in writing. Estate agents must by law (Estate Agents Act 1979).',
          'Never mislead a buyer or hold back material information about the property.'
        ]},
        { h: 'Confidentiality', list: [
          'Client names, addresses and postcodes stay in our client systems, never in shared tools, code or other clients\' reports.',
          'Our valuation register and sales data are shared as totals and medians only.',
          'Never name the owner of a comparable.',
          'Private report links are random codes that never contain a client\'s name or address, and are never reused.',
          'Where sources conflict, log it and say so. Never resolve it silently.'
        ]}
      ],
      confirm: 'Holly is redoing the complaints and policy pages this week; Richard will add the redress scheme, complaints process and service response times here once they are done.',
      questions: [
        { q: 'Which line describes the HMO X voice?', o: ['We do not pitch. We brief.', 'Always be closing.', 'Every HMO is an incredible opportunity.', 'Say yes, then work it out.'], a: 0, why: 'We speak as a specialist briefing a client, not a salesperson closing one.' },
        { q: 'Which phrase should never appear in an HMO X listing?', o: ['"Stunning opportunity, going fast!"', '"Fully let, licensed for six"', '"13.00% gross, bills included"', '"Lawful C4 use confirmed by LDC"'], a: 0, why: 'No estate-agent language and no hype.' },
        { q: 'Must every offer be passed to the seller?', o: ['Yes, promptly and in writing', 'Only offers within 10% of asking', 'Only from qualified buyers', 'Only the best offer each week'], a: 0, why: 'The Estate Agents Act 1979 requires it.' },
        { q: 'Which is good negotiation practice?', o: ['Trade price for speed or certainty instead of giving it away', 'Accept the first offer to keep things moving', 'Tell the buyer the seller\'s lowest price', 'Mention a rival bidder who does not exist'], a: 0, why: 'Trade, don\'t give; and never mislead.' },
        { q: 'A buyer asks for the addresses of HMOs we have valued in the town. What do you do?', o: ['Decline; share totals and medians only', 'Send the list', 'Send postcodes but not house numbers', 'Ask the old clients first'], a: 0, why: 'Past clients\' details are never shared.' },
        { q: 'Two sources give different rents for the same room. What do you do?', o: ['Log the conflict and say so in the work', 'Pick the higher figure', 'Average them', 'Leave both out without comment'], a: 0, why: 'Source conflicts are logged, never silently resolved.' }
      ]
    },

    {
      id: 'market',
      title: 'The national HMO market',
      mins: 20,
      summary: 'What HMO X knows about HMOs across the country, and what drives demand in a town.',
      sections: [
        { h: 'Our evidence base', p: ['As at the 13 November 2026 scan, the national base behind every read is:'], table: { head: ['Evidence', 'Count'], rows: [
          ['Towns in the grid', '320'], ['Room rents', '15,094'], ['Sold and valuation comparables', '11,538'], ['Tier calls by Richard Nicholls', '197'], ['GDV appraisals', '34'], ['Completed HMO sales (council registers matched to Land Registry)', '2,116'], ['Licensed HMOs on council registers', '69,338, from 102 councils']
        ]}},
        { h: 'What we say publicly', p: ['These are the figures on hmox.co.uk (November 2026). Use them, not the internal counts above, in anything a client sees.'], list: [
          '5,100+ HMO sales, auction lots and listings from the last two years, and 23,400+ room rents from the last 12 months, across 320 towns, each with its own evidence. New sales, rents and our own valuations are added every Friday.',
          '700+ HMO sales completed since 2018, and 150+ HMO valuations carried out every month.',
          'The UK\'s first auction house dedicated solely to HMOs, launched June 2025.',
          'HMO X Sales (formerly HMO Sales Expert) charges buyers 0% commission.'
        ]},
        { h: 'Where yields sit (2026)', table: { head: ['Market', 'Gross yield on compliant stock'], rows: [
          ['Most Midlands and northern markets', '11.50% to 12.50%'], ['South coast and southern commuter belt', '9.50% to 10.75%'], ['Southern 6 to 7 bed HMOs', 'About 10.5% to 12.5%'], ['Our register: T2 / T3 / T4', '12.0% / 12.9% / 14.8%']
        ]}, p: ['Yields have moved out by about half a point since 2024. Older bands have softened by one to two points.'] },
        { h: 'What our own valuations show', list: [
          '615 HMO X valuations across 146 towns. The typical HMO we value has 6 bedrooms.',
          'Most are Tier 3, then Tier 2.',
          'Committed Sale is the route we recommend most often, then Auction.',
          'Busiest towns: Swindon, Derby, Preston, Birmingham, Coventry and Portsmouth.',
          'Completed HMO sales across the towns we hold cluster around £62,000 a room.'
        ]},
        { h: 'What drives demand in a town', terms: [
          ['Earnings', 'Resident earnings govern most markets; workplace earnings govern where in-commuters are the main tenants. In Derby, workplace pay runs about 15% over resident pay.'],
          ['Affordability floor', 'Resident median earnings × 30% ÷ 12: roughly what a tenant can pay a month. A derived figure, so label it as one.'],
          ['18 to 34 population', 'The core demand cohort for rooms.'],
          ['Private rented share', 'How big the rental market already is (Census 2021).'],
          ['Jobs density and claimants', 'Whether there is work to support rents.']
        ]},
        { h: 'Where our data comes from', list: [
          'HM Land Registry (price paid and the house price index), Rightmove, and SpareRoom rents and rooms-wanted adverts (50+ listings within 30 days).',
          'ONS earnings, population and rents; council planning portals and licensing registers; local housing allowance rates.',
          'EIG auction results and HMO X Auctions clearing prices.',
          'Our own comparables database and valuation register.',
          'Every Monday the past week\'s auction lots are added; every Friday Richard\'s field notes are scanned and the tools are recalibrated. Field notes never change the methodology rules or town bands on their own.'
        ]},
        { h: 'Using market data properly', list: [
          'State the reference period ("ASHE, April 2025 reference period"), not just a year.',
          'Never estimate a missing figure from a neighbouring area. Report the gap.',
          'Regeneration and investment news must be searched fresh and dated.',
          'Old social posts and older reports carry old numbers. Use current evidence only.'
        ]}
      ],
      questions: [
        { q: 'Roughly what gross yield does compliant HMO stock sell at in most Midlands and northern markets?', o: ['11.50% to 12.50%', '6% to 7%', '18% to 20%', '9.50% to 10.75%'], a: 0, why: '9.50% to 10.75% is the south coast and commuter belt.' },
        { q: 'Which route do our valuations recommend most often?', o: ['Committed Sale', 'Auction', 'Exit Planning', 'Back to Resi'], a: 0, why: 'Committed Sale, then Auction.' },
        { q: 'How is the affordability floor worked out?', o: ['Resident median earnings × 30% ÷ 12', 'Average room rent × 12', 'House price ÷ 30', 'Workplace earnings ÷ 52'], a: 0, why: 'It is a derived figure, labelled as derived.' },
        { q: 'Where does our completed HMO sales data come from?', o: ['Council HMO registers matched to Land Registry', 'Rightmove asking prices', 'Auction catalogues only', 'Estimates from neighbouring towns'], a: 0, why: 'Only strong matches (same postcode and house number) count.' },
        { q: 'A town is missing an earnings figure. What do you do?', o: ['Report the gap', 'Use the neighbouring town\'s figure', 'Use the regional average', 'Leave the line blank without comment'], a: 0, why: 'Never estimate a missing figure; a flagged gap is the right answer.' },
        { q: 'What happens every Friday?', o: ['The evidence scan runs and the tools are recalibrated', 'All valuations are re-issued', 'The auction takes place', 'Prices are published to Rightmove'], a: 0, why: 'Monday adds the auction lots; Friday scans the field notes and recalibrates.' },
        { q: 'Which tier do most HMOs we value sit in?', o: ['Tier 3', 'Tier 1', 'Tier 5', 'Tier 4'], a: 0, why: 'T3 (Standard / Older En-Suite) is the most common, then T2.' }
      ]
    }
  ]
};
