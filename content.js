/*
 * HMO X Academy course content.
 * Edit this file to change lessons and questions; index.html renders it.
 *
 * Module shape:
 *   id        stable id (never change once people have taken the quiz; progress is keyed on it)
 *   title, mins, summary
 *   sections  [{h, p:[paragraphs], list:[bullets], terms:[[term, meaning]], cards:[{name, role, text}], table:{head:[], rows:[[]]}}]
 *   confirm   note shown only to managers: content we still need from HMO X
 *   questions [{q, o:[options], a:index of correct option, why}]
 *
 * Figures marked "13 Nov 2026" come from the Team Analyser evidence scan of that date.
 */
window.HMOX_COURSE = {
  passMark: 0.8,
  refreshDays: 365,
  evidenceDate: '13 November 2026',
  modules: [
    {
      id: 'intro',
      title: 'Welcome to HMO X',
      mins: 10,
      summary: 'Who we are, why HMOs need specialists, and how this induction works.',
      sections: [
        { h: 'Who we are', p: [
          'HMO X Ltd (Company No. 15730822) specialises in houses in multiple occupation. We value HMOs, plan exits, market them for sale and match them with buyers who can run them well.',
          'Our line is "Your community of HMO experts." Sellers, buyers and colleagues should experience us as specialists who share what we know, not as a generalist agent with an HMO page.'
        ]},
        { h: 'Why HMOs need specialists', p: [
          'An HMO is a house, a business and a regulated asset at the same time. Its value depends on the rent it can hold, its licence, its lawful planning use, its condition and how well it is run, as well as the bricks.',
          'A generalist tends to value it like a house, or quotes a yield without checking whether the rent will hold or the planning position is sound. We value on evidence, and we say where every figure came from.'
        ]},
        { h: 'What sets us apart', list: [
          'The HMO X Tier Methodology: every HMO read on a T1 to T5 ladder, with Tier calls made by Richard Nicholls.',
          'The Team Analyser: a buyer demand score, local comparables, room rents and a route recommendation for any HMO in our 320-town grid.',
          'An evidence base refreshed every Friday: room rents, sold and valuation comparables, Land Registry sales and Census profiles.',
          'Routes to market built for HMOs: Committed Sale, Auction and Exit Planning.',
          'A community of vetted buyers we know by name, capital and strategy.'
        ]},
        { h: 'How we work', list: [
          'Evidence before opinion. Every figure has a named source and a date.',
          'Ranges, not false precision. Yields are quoted to 2 decimal places.',
          'Honest with sellers about price, even when it is not what they hoped to hear.',
          'Compliance first. A sale that falls over on paperwork helps nobody.',
          'Confidential by default. Client names and addresses never go into shared tools or other clients\' reports.'
        ]},
        { h: 'How this induction works', p: [
          'There are 12 modules. Read each one, then take its quiz. You need 80% to pass, and you can retake a quiz as many times as you need. Each attempt shuffles the questions.',
          'When you have passed every module, sign the declaration on your home screen. Your manager then reviews your results and signs you off. Sign-off lasts 12 months, after which you take the refresher: the same quizzes, updated as the business and the law change.'
        ]}
      ],
      confirm: 'Add HMO X\'s founding story, mission and values in your own words, plus anything every new starter should know on day one (hours, systems logins, who their buddy is).',
      questions: [
        { q: 'What is HMO X\'s line?', o: ['Your community of HMO experts', 'The UK\'s biggest HMO portal', 'Sell your HMO in seven days', 'Property made simple'], a: 0, why: '"Your community of HMO experts" appears on every report and sums up how we want people to experience us.' },
        { q: 'Why does an HMO need a specialist to value and sell it?', o: ['Its value depends on rent, licensing, lawful use, condition and management as well as the bricks', 'HMOs can only legally be sold at auction', 'Generalist agents are not allowed to sell HMOs', 'HMOs are always worth less than ordinary houses'], a: 0, why: 'An HMO is a house, a business and a regulated asset at once, so a house-style valuation misses most of what drives its price.' },
        { q: 'How often is the HMO X town evidence refreshed?', o: ['Every week, after the Friday scan', 'Once a month', 'Once a year', 'Only when a valuation is booked'], a: 0, why: 'The evidence scan runs weekly and the Team Analyser data is rebuilt after it.' },
        { q: 'A client asks what their HMO is worth. Which answer follows how we work?', o: ['A range, with yields to 2 decimal places and a named source and date', 'One exact figure so they feel confident', 'The highest comparable in the town, to win the instruction', 'A figure without saying where it came from, to keep our methods private'], a: 0, why: 'Ranges, 2 dp yields and named, dated sources are the HMO X house style.' },
        { q: 'How many towns does the HMO X evidence grid cover?', o: ['320', '32', '1,200', '50'], a: 0, why: 'The national base covers 320 towns (scan of 13 November 2026).' },
        { q: 'What do you need to pass each module quiz?', o: ['80%', '50%', '100%', 'There is no pass mark'], a: 0, why: 'The pass mark is 80%, and you can retake a quiz as often as you need.' }
      ]
    },

    {
      id: 'services',
      title: 'Services, products, tools and the Hub',
      mins: 15,
      summary: 'What we sell to sellers, buyers and developers, and the tools behind it.',
      sections: [
        { h: 'For sellers', table: { head: ['Service', 'What it is', 'Price'], rows: [
          ['Sales valuation', 'Our valuation of an HMO for sale, with a recommended route to market. It is where most instructions start.', 'Free'],
          ['Committed Sale', 'Our main sales route: launched at the asking price to committed, vetted buyers.', '2% + VAT (minimum £5,000)'],
          ['Auction', 'Speed and certainty, for HMOs buyers will take as they stand.', 'Per auction terms'],
          ['Exit Planning', 'For HMOs worth more once optimised. We map each step and when to launch.', 'Agreed per case'],
          ['HMO Health Check', 'A review of an HMO\'s tier, rent, compliance and management, for owners who are holding.', 'Agreed per case'],
          ['Portfolio valuation', 'Several HMOs valued together, for sale, refinance or planning.', 'Agreed per case']
        ]}},
        { h: 'For buyers', table: { head: ['Service', 'What it is', 'Price'], rows: [
          ['Buyer HMO Brief', 'Which regions and towns fit the investor\'s capital, tenants, management and distance, with example HMOs and the price that works for them.', 'Part of buyer onboarding'],
          ['Strategy session', 'A session with Richard to plan the investor\'s HMO strategy.', '£150 + VAT'],
          ['Buyer Valuation Pack', 'Our valuation of a specific HMO a buyer is considering.', 'Agreed per case']
        ]}},
        { h: 'For developers and refinancers', p: [
          'The GDV Appraisal (£395 + VAT) is a 13-section report on a proposed or part-built HMO: the refinance and sales gross development value, the blended rent a lender will use, whether it is valued on a commercial or bricks-and-mortar basis, and the purchase price at which the scheme stacks.'
        ]},
        { h: 'Our tools', terms: [
          ['Team Analyser', 'Our buyer demand engine. For any HMO in the grid it gives a score from 0 to 5, five reads, a price lever, route fit, speed-versus-value prices, local comparables, room rents, our valuation register for the town and completed HMO sales.'],
          ['Tier test', 'Reads an HMO through the Tier Methodology: home tier (T1 to T5), what holds it back, trading position, trajectory, legal position and next steps.'],
          ['GDV tool', 'The engine behind the GDV Appraisal.'],
          ['Buyer brief tool', 'Matches an investor\'s answers to regions, town types and example HMOs.'],
          ['Structural anchors', 'ONS data for all 378 UK local authorities: earnings, the affordability floor, 18 to 34 population, private rented share, jobs and claimants.']
        ]},
        { h: 'The Hub', p: [
          'The Hub brings our tools, listings and client work together in one place. Your manager will walk you through it in your first week.'
        ]},
        { h: 'Rules that apply to every product', list: [
          'The Team Analyser and Tier test give an indicative read. They support a valuation; they are never a value opinion on their own.',
          'Our valuations and GDV reads are not RICS valuations and not lender-appointed valuations. Client-facing text says so where relevant.',
          'Client-facing text never names Sprift and never promises the client an EPC.',
          'If a town figure in a tool looks wrong, flag it. Nobody edits the Team Analyser database by hand; the weekly scan owns it.'
        ]}
      ],
      confirm: 'Describe the Hub properly: what it is, its sections, logins and what each role uses it for. Confirm prices for Auction, Exit Planning, Health Check, Portfolio valuation and Buyer Valuation Pack.',
      questions: [
        { q: 'What is the Committed Sale fee?', o: ['2% + VAT, minimum £5,000', '1% including VAT, no minimum', '£395 + VAT fixed', '3% + VAT, minimum £10,000'], a: 0, why: 'Committed Sale terms are 2% + VAT with a £5,000 minimum.' },
        { q: 'Who is the GDV Appraisal for?', o: ['Someone with a proposed or part-built HMO who needs the GDV and to know whether the scheme stacks', 'A landlord checking a tenant\'s references', 'A seller putting a finished HMO into auction', 'An owner renewing an HMO licence'], a: 0, why: 'The GDV Appraisal (£395 + VAT) covers refinance and sales GDV, the lender\'s blended rent and the stack.' },
        { q: 'How much is a strategy session with Richard?', o: ['£150 + VAT', 'Free', '£395 + VAT', '2% + VAT'], a: 0, why: 'Strategy sessions are £150 + VAT.' },
        { q: 'What does the Team Analyser\'s buyer demand score tell you?', o: ['How deep the buyer pool is at a given price, from 0 (no pool) to 5 (strong demand)', 'The RICS market value', 'Whether the HMO is licensed', 'How many tenants are in arrears'], a: 0, why: 'The score reads where the yield sits against the town\'s band, stress-tested, and so how many buyers the price works for.' },
        { q: 'A client asks if our GDV read is a RICS valuation. What do you say?', o: ['No. It is indicative and not a RICS or lender-appointed valuation', 'Yes, because it uses the same data as a RICS valuer', 'Yes, once Richard has signed it', 'Only if the scheme is over 10 rooms'], a: 0, why: 'Every GDV and valuation read must say it is not a RICS or lender-appointed valuation.' },
        { q: 'Which two things must client-facing text never do?', o: ['Name Sprift or promise the client an EPC', 'Give a price range or name a source', 'Mention the town or the number of rooms', 'Use the Tier Methodology terms'], a: 0, why: 'These two rules appear in every HMO X skill and report template.' }
      ]
    },

    {
      id: 'team',
      title: 'Meet the team',
      mins: 10,
      summary: 'Who does what, and how a sale moves through the team.',
      sections: [
        { h: 'Who does what', cards: [
          { name: 'Richard Nicholls', role: 'Tier Methodology, valuations and strategy', text: 'Makes the Tier calls behind the Tier Methodology (197 so far), confirms the recommended route at valuation and runs buyer strategy sessions.' },
          { name: 'Nikki', role: 'Committed Sale buyers', text: 'Runs sales calls with investors buying through Committed Sale.' },
          { name: 'Georgia', role: 'Auction buyers', text: 'Looks after auction-ready buyers and auction lots.' }
        ]},
        { h: 'How a sale moves through the team', list: [
          'Enquiry: a seller asks for a valuation.',
          'Valuation: the valuer runs the Team Analyser and the Tier test, checks comparables and writes the valuation. Richard confirms the route.',
          'Instruction: the seller signs terms for Committed Sale, Auction or Exit Planning.',
          'Marketing: particulars, rent roll, compliance pack and the Tier read are prepared.',
          'Buyer matching: Nikki works Committed Sale buyers; Georgia works auction buyers.',
          'Offers and negotiation: offers are qualified and put to the seller in writing.',
          'Sale progression to completion: solicitors, lenders and searches, with the seller kept updated.'
        ]},
        { h: 'When the tools and the valuer disagree', p: [
          'The analyser reads figures only. The valuer has seen the asset, the compliance documents and the client\'s timeframe. Where they differ, the valuer\'s judgement wins, and the report gives one sentence on why.'
        ]}
      ],
      confirm: 'Add the full team: names, job titles, photos, contact details and who to go to for what (IT, HR, holidays, expenses, compliance questions). Confirm Richard\'s, Nikki\'s and Georgia\'s job titles.',
      questions: [
        { q: 'Who makes the Tier calls behind the HMO X Tier Methodology?', o: ['Richard Nicholls', 'Nikki', 'Georgia', 'The buyer'], a: 0, why: 'The Tier calls are Richard\'s, and his name goes on them in every report.' },
        { q: 'An investor is ready to buy at auction and wants to see lots. Who should they speak to?', o: ['Georgia', 'Nikki', 'The seller\'s solicitor', 'Nobody until the auction catalogue is out'], a: 0, why: 'Georgia looks after auction-ready buyers.' },
        { q: 'A buyer is interested in a Committed Sale listing. Who runs that call?', o: ['Nikki', 'Georgia', 'The valuer who wrote the report', 'The tenant'], a: 0, why: 'Nikki handles sales calls with Committed Sale investors.' },
        { q: 'Who runs buyer strategy sessions?', o: ['Richard', 'Nikki', 'Georgia', 'An outside mortgage broker'], a: 0, why: 'Strategy sessions (£150 + VAT) are with Richard.' },
        { q: 'The analyser flags Committed Sale but the valuer, having seen the property, recommends Auction. What happens?', o: ['The valuer\'s judgement wins, with one sentence explaining why', 'The analyser wins because it uses more data', 'The report shows both and lets the client choose without comment', 'The valuation is redone until they agree'], a: 0, why: 'The analyser reads figures only; the valuer has seen the asset, compliance and the client\'s timeframe.' },
        { q: 'Which is the right order for a sale?', o: ['Valuation, instruction, marketing, buyer matching, offers, sale progression', 'Marketing, valuation, instruction, offers, buyer matching', 'Buyer matching, valuation, offers, instruction, marketing', 'Instruction, offers, valuation, marketing, completion'], a: 0, why: 'We value first, agree the route, then market and match buyers.' }
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
          'A household is a single person, or members of the same family living together, including couples. Three friends sharing a house are three households. A couple sharing with one friend are two households and three people, so that is an HMO.'
        ]},
        { h: 'Licensing', list: [
          'Mandatory licensing: an HMO with 5 or more people forming 2 or more households needs a licence from the council (since 1 October 2018, whatever the number of storeys).',
          'Additional licensing: a council can require smaller HMOs in all or part of its area to be licensed too.',
          'Selective licensing: a council can require every privately rented home in an area to be licensed.',
          'Licences usually run for up to 5 years and carry conditions, such as the maximum number of occupants and the rooms that may be used for sleeping.'
        ]},
        { h: 'Minimum room sizes (licensed HMOs)', table: { head: ['Sleeping room for', 'Minimum floor area'], rows: [
          ['One person over 10', '6.51 sqm'], ['Two people over 10', '10.22 sqm'], ['One child under 10', '4.64 sqm'], ['Anyone', 'A room under 4.64 sqm cannot be used for sleeping']
        ]}, p: ['Councils can set higher local standards, so always check the licence conditions.'] },
        { h: 'Planning use classes', terms: [
          ['C3', 'A dwellinghouse: a family home or a let to one household.'],
          ['C4', 'A small HMO: 3 to 6 unrelated people sharing. Changing from C3 to C4 is permitted development, unless an Article 4 direction removes that right.'],
          ['Sui generis', 'A large HMO: 7 or more people. It always needs planning permission.'],
          ['Section 257 HMO', 'A building converted into self-contained flats that does not meet the 1991 Building Regulations, where fewer than two-thirds of the flats are owner-occupied.']
        ]},
        { h: 'The HMOs in our market', list: [
          'Tenant types: professionals, working tenants, students, supported housing, benefit tenants, or a mix.',
          'Property types: terraced, semi-detached, detached, and commercial conversions (former offices, shops or pubs).',
          'Layout: shared bathrooms, part en-suite or all en-suite. En-suites, room size and kitchen space drive the tier.',
          'Management: co-living operators, letting agents, systemised self-managers, informal self-managers and live-in landlords.'
        ]},
        { h: 'Why investors buy HMOs', p: [
          'Rent is charged per room, so an HMO usually earns a much higher gross yield than the same house let to one household. The trade-off is more regulation, more management and more ways for the income to slip. That is why the evidence matters.'
        ]}
      ],
      questions: [
        { q: 'What is the minimum for a property to be an HMO?', o: ['3 or more people, forming 2 or more households, sharing facilities', '2 people who are not related', '5 or more people of any household', 'Any house with more than 4 bedrooms'], a: 0, why: 'Housing Act 2004: 3+ people, 2+ households, sharing facilities.' },
        { q: 'When does mandatory HMO licensing apply?', o: ['5 or more people forming 2 or more households', '3 or more people in any house', '7 or more people over three storeys', 'Only where the council has an Article 4 direction'], a: 0, why: 'Since October 2018 mandatory licensing covers 5+ people in 2+ households, whatever the storeys.' },
        { q: 'What is the minimum floor area for a bedroom for one adult in a licensed HMO?', o: ['6.51 sqm', '10.22 sqm', '4.64 sqm', '8.00 sqm'], a: 0, why: '6.51 sqm for one person over 10; 10.22 sqm for two.' },
        { q: 'An HMO lets to 8 unrelated tenants. What planning use class is it?', o: ['Sui generis', 'C4', 'C3', 'Section 257'], a: 0, why: '7 or more occupants is a large HMO, sui generis, and needs planning permission.' },
        { q: 'What does an Article 4 direction do to HMOs?', o: ['Removes permitted development, so turning a C3 house into a C4 HMO needs planning permission', 'Bans HMOs in the area completely', 'Makes HMO licences last 10 years', 'Lets any house become a sui generis HMO without permission'], a: 0, why: 'It removes the C3 to C4 permitted development right in that area.' },
        { q: 'A couple and three friends share a house. Does it need a mandatory licence?', o: ['Yes: 5 people in 4 households', 'No: the couple counts as one person', 'No: only 3 households', 'Only if it has three storeys'], a: 0, why: '5 people, and the couple is one household plus three single households makes 4: over the mandatory threshold.' }
      ]
    },

    {
      id: 'compliance',
      title: 'Compliance and planning',
      mins: 20,
      summary: 'The compliance pack, fire safety, the Renters\' Rights Act, and why lawful use is separate from licensing.',
      sections: [
        { h: 'Why compliance drives value', p: [
          'Buyers, lenders and solicitors all ask for the paperwork. Gaps shrink the buyer pool, slow the sale or push it to auction. The Tier test gives every HMO a legal position (green, amber or red) and lists the gaps, and the Team Analyser asks about the licence and planning, so we find problems before a buyer\'s solicitor does.'
        ]},
        { h: 'The compliance pack', table: { head: ['Document', 'What it needs'], rows: [
          ['HMO licence', 'Current, with its conditions, where mandatory, additional or selective licensing applies.'],
          ['Lawful use', 'Planning permission, a Lawful Development Certificate, or evidence the HMO use began before an Article 4 direction.'],
          ['Gas safety certificate', 'Renewed every 12 months.'],
          ['EICR (electrics)', 'At least every 5 years.'],
          ['EPC', 'Minimum rating E to let. We never promise a client an EPC.'],
          ['Fire risk assessment', 'Current, with alarm, emergency lighting and fire door checks logged.'],
          ['Deposits', 'Protected in a government-approved scheme within 30 days.'],
          ['Right to Rent', 'Checks for every adult tenant.'],
          ['Tenancies', 'Current agreements and the rent roll that matches them.']
        ]}},
        { h: 'Fire safety', p: [
          'HMOs are higher risk than single lets, so councils expect more: interlinked smoke and heat detection, fire doors with self-closers, a protected escape route, emergency lighting where needed, and fire blankets in kitchens. The usual reference is the LACORS fire safety guidance, but the council and the licence conditions set the standard.'
        ]},
        { h: 'The Renters\' Rights Act', list: [
          'From 1 May 2026 most private tenancies in England became assured periodic tenancies, with no fixed term.',
          'Section 21 "no fault" evictions were abolished. Landlords now rely on section 8 grounds for possession.',
          'Rent can be raised once a year using the section 13 process.',
          'A specific ground lets student HMO landlords keep to the academic year.',
          'A private landlord database and an ombudsman are being introduced.',
          'For our sales: buyers inherit periodic tenancies, so the rent roll, arrears and tenancy start dates matter more than ever.'
        ]},
        { h: 'Planning and lawful use', p: [
          'A licence says the property is safe and suitable to occupy as an HMO. It does not prove the HMO use is lawful in planning terms. Those are separate questions, and a buyer\'s solicitor and lender will ask both.',
          'Lawful use is shown by planning permission, a Lawful Development Certificate (usually on evidence of continuous use over the relevant period), or evidence the C4 use began as permitted development before an Article 4 direction came in. A 7+ bed HMO needs sui generis planning permission.',
          'In Article 4 areas, a lawful existing HMO can carry scarcity value, because new ones are hard to create.'
        ]},
        { h: 'Red flags to raise straight away', list: [
          'No licence where one is needed. The owner risks civil penalties and rent repayment orders, and a buyer will not proceed.',
          'More occupants than the licence allows, or rooms under the minimum size used for sleeping.',
          'An HMO in an Article 4 area with no evidence of when its use began.',
          'Out-of-date gas, electrical or fire certificates.'
        ]}
      ],
      confirm: 'Add HMO X\'s own compliance checklist and who on the team checks the pack before a listing goes live.',
      questions: [
        { q: 'How often must an HMO\'s gas safety certificate be renewed?', o: ['Every 12 months', 'Every 5 years', 'Every 3 years', 'Only when the tenants change'], a: 0, why: 'Gas safety checks are annual.' },
        { q: 'How often is an EICR (electrical report) needed?', o: ['At least every 5 years', 'Every 12 months', 'Every 10 years', 'Only on sale'], a: 0, why: 'Electrical installations must be inspected at least every 5 years.' },
        { q: 'Within how many days must a deposit be protected?', o: ['30 days', '7 days', '60 days', '14 days'], a: 0, why: 'Deposits go into an approved scheme within 30 days.' },
        { q: 'Does a current HMO licence prove the HMO use is lawful in planning terms?', o: ['No. Licensing and planning are separate; lawful use needs planning permission, an LDC or evidence it pre-dates Article 4', 'Yes, a licence covers planning', 'Yes, if the licence is mandatory', 'Only for sui generis HMOs'], a: 0, why: 'A licence is about safety and management; planning lawful use is a separate test.' },
        { q: 'What did the Renters\' Rights Act do to section 21?', o: ['Abolished it, with tenancies becoming assured periodic tenancies from 1 May 2026', 'Extended its notice period to 6 months', 'Applied it only to HMOs', 'Nothing; it only affected deposits'], a: 0, why: 'Section 21 no-fault evictions ended; landlords now use section 8 grounds.' },
        { q: 'A seller asks you to arrange their EPC for the listing. What do you do?', o: ['Don\'t promise one. Explain an EPC (minimum E to let) is needed and how the seller can get it', 'Promise one will be in place by launch', 'Tell them EPCs are not needed for HMOs', 'Use an old EPC from a neighbouring property'], a: 0, why: 'We never promise a client an EPC.' }
      ]
    },

    {
      id: 'operations',
      title: 'Management and HMO operations',
      mins: 15,
      summary: 'How HMOs are run, what it costs, and why management drives value.',
      sections: [
        { h: 'Management models', p: ['The Tier test reads five ways an HMO can be run. How well it is run decides its trajectory: whether the rent holds, rises or drifts.'], terms: [
          ['Co-living operator', 'A professional operator running the HMO as a branded product, often with cleaning, events and an app.'],
          ['Letting agent', 'An agent manages for a fee, usually a percentage of rent.'],
          ['Systemised self-management', 'The owner runs it with proper systems: compliance calendar, maintenance log, referencing, rent tracking.'],
          ['Informal self-management', 'The owner runs it ad hoc. Common, and often where income leaks.'],
          ['Live-in landlord', 'The owner lives in the property.']
        ]},
        { h: 'Bills and running costs', p: [
          'Most HMOs include bills (energy, water, broadband, council tax) in the room rent. That makes rooms easier to let but puts the cost risk on the owner.',
          'For running costs, the HMO X GDV engine allows 22.5% of rent when bills are included and 20% when tenants pay them. The buyer demand score also stress-tests voids, maintenance, bills and stamp duty before it scores a price.'
        ]},
        { h: 'Occupancy and the rent roll', list: [
          'The rent roll lists every room, its rent, the tenant and the tenancy start date.',
          'Contracted rent (what the rooms are let for) can differ from delivered rent (what was actually received over 12 months). The Tier test reads both.',
          'Occupancy is quoted as a percentage. The Team Analyser wants gross annual rent when fully let, not a monthly figure.'
        ]},
        { h: 'Trading position', p: ['Trading position is the rent an HMO earns as a percentage of what its home tier earns in its town.'], table: { head: ['Band', 'Rent against home tier'], rows: [
          ['Launch premium', '115% or more'], ['Settling', '105% to 115%'], ['At tier', '96% to 104%'], ['Drift', '85% to 96%'], ['Sub-tier', 'Under 85%']
        ]}},
        { h: 'Launch premium', p: [
          'New or newly refurbished rooms often let above their home tier rent for the first year or two, then settle. A buyer or lender who values the launch rent as if it will last walks into the leverage trap. We value on the settled rent.'
        ]},
        { h: 'What a buyer will ask about operations', list: [
          'The rent roll, occupancy history and arrears.',
          'Whether bills are included and what they cost.',
          'Who manages it now, and whether the agreement can transfer.',
          'Tenancy types and start dates (all periodic since 1 May 2026).',
          'Maintenance history and anything due soon (boiler, roof, fire alarm).'
        ]}
      ],
      questions: [
        { q: 'An HMO earns 90% of its home tier rent. What is its trading position?', o: ['Drift', 'At tier', 'Settling', 'Sub-tier'], a: 0, why: 'Drift is 85% to 96% of the home tier rent.' },
        { q: 'What is a launch premium?', o: ['New or refurbished rooms letting above their home tier rent for a year or two before settling', 'A fee the buyer pays to launch a Committed Sale', 'Extra rent charged in the first month of a tenancy', 'A discount offered to the first tenant'], a: 0, why: 'Launch rents fade, which is why we value on the settled rent.' },
        { q: 'What running cost allowance does the GDV engine use when bills are included?', o: ['22.5% of rent', '10% of rent', '35% of rent', 'Nothing, because the tenants pay'], a: 0, why: '22.5% with bills included, 20% when tenants pay bills.' },
        { q: 'Which of these is not one of the management models the Tier test reads?', o: ['Auction management', 'Co-living operator', 'Systemised self-management', 'Live-in landlord'], a: 0, why: 'The five models are co-living, agent, systemised, informal and live-in.' },
        { q: 'Why does the quality of management matter to value?', o: ['It drives the trajectory: whether the rent holds, rises or drifts over 3, 5 and 10 years', 'It changes the planning use class', 'It decides the stamp duty rate', 'It doesn\'t; only the building matters'], a: 0, why: 'A well-run HMO holds its trading position; a poorly run one drifts.' },
        { q: 'What income figure does the Team Analyser expect?', o: ['Gross annual rent when fully let', 'The rent received last month', 'Net income after the mortgage', 'The average rent of one room'], a: 0, why: 'It wants the annual figure when full, and warns if it looks monthly.' }
      ]
    },

    {
      id: 'jargon',
      title: 'Explaining the jargon',
      mins: 20,
      summary: 'Yields, ROCE, GDV, Article 4 and the Tier Methodology terms, with worked examples.',
      sections: [
        { h: 'Money terms', terms: [
          ['Gross yield', 'Annual rent when fully let ÷ price × 100. The headline figure buyers compare.'],
          ['Net yield', 'Annual rent less running costs (and an allowance for voids) ÷ price × 100.'],
          ['ROCE (return on capital employed)', 'Annual profit after finance costs ÷ the cash the buyer actually puts in. Also called return on cash. "Geared" means with a mortgage.'],
          ['ROI', 'Return on investment: the general term for profit against money put in. In our reports, use ROCE or the yield so it is clear what was measured.'],
          ['LTV', 'Loan to value: the mortgage as a percentage of the property\'s value.'],
          ['Refinance', 'Replacing a loan with a new one, often at a higher value after works, to pull money back out.'],
          ['GDV', 'Gross development value: what a scheme is worth once finished.'],
          ['ERV', 'Estimated rental value: the full rent roll a year when let.'],
          ['SDLT', 'Stamp duty land tax. Buyers of additional homes pay a 5% surcharge on top of the standard rates.']
        ]},
        { h: 'Worked example', p: [
          'A 6-bed HMO priced at £300,000 lets for £39,000 a year when full, bills included.',
          'Gross yield: £39,000 ÷ £300,000 = 13.00%.',
          'Running costs at 22.5%: £8,775. Net income: £30,225. Net yield: £30,225 ÷ £300,000 = 10.08%.',
          'With a 75% interest-only mortgage (£225,000 at 6%): interest is £13,500 a year, so profit is £16,725. Cash in is the £75,000 deposit plus £20,000 stamp duty (with the surcharge) = £95,000, before legal and finance fees. ROCE: £16,725 ÷ £95,000 = 17.61%.'
        ]},
        { h: 'Valuation and market terms', terms: [
          ['Bricks-and-mortar value', 'What the property is worth as a house, less the cost of undoing the conversion.'],
          ['Commercial (investment) value', 'A value based on the income, capitalised at a yield.'],
          ['Yield band', 'The range of gross yields HMOs sell at in a particular town.'],
          ['Stress rate', 'The interest rate the buyer demand score tests a mortgage at.'],
          ['Comparables (comps)', 'Sold, sold subject to contract, auction and valuation evidence for similar HMOs nearby.'],
          ['SSTC', 'Sold subject to contract: an offer accepted, not yet completed.'],
          ['Guide price', 'An auction\'s indication of price, set lower to attract bidding. The reserve is the confidential minimum.']
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
        { q: 'An HMO lets for £36,000 a year and is priced at £300,000. What is the gross yield?', o: ['12.00%', '10.00%', '8.33%', '14.40%'], a: 0, why: '£36,000 ÷ £300,000 = 0.12, so 12.00%.' },
        { q: 'How does net yield differ from gross yield?', o: ['Net takes off running costs and voids before dividing by the price', 'Net includes the mortgage deposit', 'Net is gross divided by 12', 'There is no difference'], a: 0, why: 'Net yield uses income after running costs.' },
        { q: 'What does ROCE measure?', o: ['Annual profit as a percentage of the cash actually put in', 'The rent as a percentage of the price', 'The loan as a percentage of value', 'The rise in value since purchase'], a: 0, why: 'Return on capital employed compares profit to the buyer\'s own cash.' },
        { q: 'What is the leverage trap?', o: ['Borrowing set against launch-level rent or value that the lender\'s valuer won\'t see once the premium fades', 'A mortgage with an early repayment charge', 'Buying in an Article 4 area', 'Paying the stamp duty surcharge'], a: 0, why: 'Launch rents fade; a refinance based on them leaves the owner exposed.' },
        { q: 'What does GDV stand for?', o: ['Gross development value', 'Guaranteed deposit value', 'General dwelling valuation', 'Gross dividend value'], a: 0, why: 'The value of a scheme once finished.' },
        { q: 'What does SSTC mean on a listing?', o: ['Sold subject to contract: an offer accepted, not yet completed', 'Sale secured, tenants confirmed', 'Subject to survey and title check', 'Sold, settled and transferred to client'], a: 0, why: 'SSTC listings still count as comparables, flagged as not yet completed.' },
        { q: 'Which are the four T1 criteria?', o: ['Rooms of 15 sqm or more, an A1 location, hotel-standard sound-proofing, hotel-grade functionality', 'All en-suite, new kitchen, bills included, under 5 years old', 'Professional tenants, 8+ beds, sui generis, licensed', 'Gross yield over 12%, full occupancy, agent-managed, Article 4 area'], a: 0, why: 'All four, today, or it is not T1.' }
      ]
    },

    {
      id: 'valuation',
      title: 'How we value an HMO',
      mins: 25,
      summary: 'The two bases of value, the evidence we use, the Tier Methodology and the buyer demand read.',
      sections: [
        { h: 'Two ways to value an HMO', terms: [
          ['Investment (commercial) basis', 'The income capitalised at a yield the market accepts for that town and tier. This is how most HMO buyers think.'],
          ['Bricks-and-mortar basis', 'What it is worth as a house, less the cost of undoing the conversion. It is often the floor, and some lenders value on it when commercial evidence is thin.']
        ], p: [
          'For a commercial conversion (an old office or pub, say) there is no comparable house, so it is valued on income, with its alternative commercial use as the floor. The lawful HMO use must be confirmed separately.'
        ]},
        { h: 'The evidence we use', list: [
          'The rent roll and occupancy: contracted and delivered rent.',
          'Room rents in the town, including current en-suite adverts.',
          'Sold and valuation comparables: same tenant type, similar room count, within about 18 months, same postcode district first.',
          'Completed HMO sales: council HMO registers matched to Land Registry (strong matches only).',
          'The HMO X valuation register: our own past valuations in the town, given as totals and medians only.',
          'The town\'s yield band, and its structural anchors (earnings, population, private rented share).'
        ]},
        { h: 'Read through the HMO X Tier Methodology', table: { head: ['Tier', 'Label'], rows: [
          ['T1', 'Premium / Studio'], ['T2', 'New Quality'], ['T3', 'Standard / Older En-Suite'], ['T4', 'Basic / Functional'], ['T5', 'Distressed / Opportunity']
        ]}, p: [
          'The Tier test gives the home tier, what holds it back, the trading position, the trajectory and the legal position. Most HMOs we value sit at T3, then T2.',
          'Reports use the heading "Read through the HMO X Tier Methodology", the tier with its label, the shared terms word for word, and end with the evidence line naming the town\'s evidence, the national base and Richard\'s Tier calls.'
        ]},
        { h: 'The buyer demand read', p: [
          'The Team Analyser scores the asking price from 0 to 5 by where the gross yield sits against the town\'s yield band, stress-tested at the current stress rate with voids, maintenance, bills and stamp duty.'
        ], table: { head: ['Score', 'Meaning'], rows: [
          ['5', 'Strong demand: above the band, or 14%+ return on cash geared and managed'],
          ['4', 'Broad demand: upper half of the band'],
          ['3', 'Moderate demand: inside the band'],
          ['2', 'Narrow demand: up to 1.5 points below the band'],
          ['1', 'Very narrow: lower, but still makes money'],
          ['0', 'No buyer pool at that price']
        ]}},
        { h: 'From read to report', list: [
          'Collect the inputs from the brief, rent roll, floor plan, photos and compliance documents.',
          'Run the Team Analyser and the Tier test. Never re-derive or edit their numbers by hand.',
          'Check the comparables and choose the yield, factor by factor.',
          'Give the value as a range, yields to 2 dp, each figure with a named source and date.',
          'Recommend the route. If it differs from the analyser, say why in one sentence.',
          'Add the data basis line word for word in the notes.'
        ]},
        { h: 'Rules', list: [
          'The analyser and Tier test support the valuation; neither is a value opinion on its own.',
          'Never write a past client\'s address or name into a report. The register and completed sales are given as totals.',
          'Never name the owner of a comparable.',
          'Not a RICS valuation. Say so in client-facing text.'
        ]}
      ],
      questions: [
        { q: 'What is the bricks-and-mortar value of an HMO?', o: ['What it is worth as a house, less the cost of undoing the conversion', 'The rebuild cost for insurance', 'The rent capitalised at the town\'s yield', 'The price of the land alone'], a: 0, why: 'It is the house value less the cost of turning it back.' },
        { q: 'What is the label for Tier 3?', o: ['Standard / Older En-Suite', 'New Quality', 'Basic / Functional', 'Premium / Studio'], a: 0, why: 'T1 Premium / Studio, T2 New Quality, T3 Standard / Older En-Suite, T4 Basic / Functional, T5 Distressed / Opportunity.' },
        { q: 'A buyer demand score of 5 means:', o: ['Strong demand: the yield is above the town\'s band', 'The HMO has 5 bedrooms', 'It must go to auction', 'The tier is T5'], a: 0, why: '5 is strong demand; 0 is no buyer pool at that price.' },
        { q: 'How are yields written in an HMO X valuation?', o: ['To 2 decimal places, within a range, with a named source and date', 'Rounded to the nearest whole number', 'As a single figure with no source', 'Only as a net figure'], a: 0, why: 'That is the house style for every valuation.' },
        { q: 'Which comparables does the analyser prefer?', o: ['Same tenant type, similar rooms, within about 18 months, same postcode district first', 'The highest sale in the region', 'Any house sale in the same street', 'Sales from the last 10 years'], a: 0, why: 'Like for like, recent and local first.' },
        { q: 'Can you put the address of an HMO we valued last year into a new client\'s report as evidence?', o: ['No. Our register is shared as totals and medians only', 'Yes, if it supports the value', 'Yes, if the old client has sold', 'Only the postcode and house number'], a: 0, why: 'Past clients\' names and addresses never go into reports.' }
      ]
    },

    {
      id: 'marketing',
      title: 'Marketing an HMO for sale',
      mins: 20,
      summary: 'Our routes to market: Committed Sale, Auction, Exit Planning and the rest, and how we choose.',
      sections: [
        { h: 'Choosing the route', p: [
          'Every route trades speed against value. The Team Analyser flags the routes that fit the figures (best fit and worth discussing) and gives speed-versus-value prices. The valuer adds what the figures can\'t see: the condition, the compliance position and the seller\'s timeframe. Richard confirms the route.',
          'Committed Sale is our most recommended route: 362 of the 615 valuations in our register (as at ' + '13 November 2026' + ').'
        ]},
        { h: 'Committed Sale', list: [
          'Launched at the asking price to committed, vetted buyers, with full open-market price discovery.',
          'Usually agreed 3% to 5% under asking. Across our Committed Sale valuations the expected sale sat a median 3.3% under the launch price.',
          'Typically 90 to 180 days, with lower fall-through risk than standard agency.',
          'Best for compliant, well-presented HMOs where getting the best price matters.',
          'Fee: 2% + VAT (minimum £5,000).'
        ]},
        { h: 'Auction', list: [
          'Speed and certainty. Auction results typically land at 95% to 98% of market value.',
          'Guide prices are set lower to attract bidding. Our tools never show a guide figure.',
          'Buyers take the HMO as it stands, so it suits HMOs needing work, with compliance gaps, or a seller who needs certainty fast.',
          'Auction reports state both the market value and the expected auction range.'
        ]},
        { h: 'Exit Planning', list: [
          'For an under-optimised HMO: under-rented, with real uplift potential, or priced below the town\'s band today.',
          'Optimised value is typically 10% to 15% above today\'s.',
          'We map each step (compliance, re-letting, rents) and when to launch, usually into Committed Sale.'
        ]},
        { h: 'Other outcomes', terms: [
          ['Back to resi', 'Selling as a house, where the bricks-and-mortar value beats the HMO value.'],
          ['Hold / Health Check', 'Where selling now isn\'t the best move.'],
          ['Development / GDV', 'For schemes and conversions.'],
          ['Portfolio and institutional', 'A narrow, selective buyer pool for larger lots.']
        ]},
        { h: 'Pricing to the pool', p: [
          'The price lever shows the score at the asking price and at 5%, 10% and 15% lower. Each bed count has a sweet spot price where demand is deepest: 4 bed £120k, 5 bed £175k, 6 bed £225k, 7 bed £275k, 8 bed £350k. Nearer £500k, stamp duty and the capital needed thin the pool.'
        ]},
        { h: 'Marketing rules', list: [
          'Particulars must be accurate. Rent roll, compliance pack and Tier read go in the buyer pack.',
          'Never name Sprift, never promise an EPC, never publish a past client\'s address.',
          'Nothing goes live until the compliance pack has been checked.'
        ]}
      ],
      confirm: 'Add HMO X\'s marketing process: where listings go (Hub, portals, buyer emails), who writes particulars, photo standards and the launch checklist.',
      questions: [
        { q: 'Where is a Committed Sale usually agreed?', o: ['3% to 5% under the asking price', 'At least 10% over asking', '20% under asking', 'At the auction guide'], a: 0, why: 'Launched at asking and usually agreed 3% to 5% under (median 3.3%).' },
        { q: 'What do auction results typically achieve?', o: ['95% to 98% of market value', '110% of market value', '70% to 80% of market value', 'Exactly the guide price'], a: 0, why: 'Auction trades a small discount for speed and certainty.' },
        { q: 'Which HMO is the best fit for Exit Planning?', o: ['An under-rented HMO with real uplift potential, where the seller can take some time', 'A fully let, compliant HMO priced in the band', 'An HMO the seller must sell in three weeks', 'A house that was never an HMO'], a: 0, why: 'Exit Planning unlocks typically 10% to 15% more value before launch.' },
        { q: 'Why are auction guide prices set lower than expected value?', o: ['To attract bidding', 'Because auction buyers pay no stamp duty', 'Because the law requires it', 'To reduce the seller\'s fee'], a: 0, why: 'A lower guide draws more bidders into the room.' },
        { q: 'An HMO has compliance gaps and the seller needs certainty within weeks. Which route fits?', o: ['Auction', 'Committed Sale', 'Exit Planning', 'Hold'], a: 0, why: 'Auction buyers take it as it stands, at speed.' },
        { q: 'How long does a Committed Sale typically take?', o: ['90 to 180 days', '7 to 14 days', '12 to 18 months', 'Same day'], a: 0, why: 'Committed Sale sits between speed and top price: typically 90 to 180 days.' }
      ]
    },

    {
      id: 'buyers',
      title: 'Finding the right buyer',
      mins: 20,
      summary: 'Who buys HMOs, what to ask them, Buy It Right, and what buyers expect from us.',
      sections: [
        { h: 'Who buys HMOs', list: [
          'First-time HMO investors, often moving up from single lets.',
          'Experienced portfolio landlords adding to their holdings.',
          'Cash buyers and auction buyers looking for value-add.',
          'Co-living operators.',
          'Portfolio and institutional buyers: a narrow, selective pool.',
          'Overseas investors, usually wanting a managed HMO.',
          'Developers looking for conversions.'
        ]},
        { h: 'What to ask (the buyer brief)', list: [
          'Do they live in the UK or overseas? Where are they based, and how far will they go (10, 25, 50, 75 miles, or anywhere)?',
          'How many HMOs do they own already?',
          'How much capital do they have, and will they use a mortgage?',
          'Which tenants: professionals, working tenants, students, supported?',
          'Will they self-manage or use an agent?',
          'Is the goal growth, cashflow, or both?',
          'Other income, and do they work full time?',
          'Target monthly income, net yield and return on cash.',
          'Timeframe to buy.'
        ]},
        { h: 'Buy It Right', p: [
          'Match the tier to the buyer: Tier 2 and Tier 3 first; 8-bed HMOs after one HMO; Tier 4 value-add after one HMO, or two if an agent will run it. Explain Buy It Right before showing regions and example HMOs.'
        ]},
        { h: 'Qualifying a buyer', list: [
          'Proof of funds, or a mortgage agreement in principle.',
          'A solicitor ready to act.',
          'Their position: anything to sell first?',
          'Realistic timescales.'
        ]},
        { h: 'What buyers expect from HMO X', list: [
          'Honest numbers: a real rent roll, not a projection.',
          'The compliance pack and lawful-use evidence up front.',
          'A Tier read and comparables, so they can see why the price is what it is.',
          'Quick, clear answers and a clear process.',
          'Offers usually land between the asking price and 10% under.'
        ]},
        { h: 'Rules', list: [
          'Everything we give buyers is indicative, not financial advice. Encourage them to speak to a mortgage broker and a tax adviser.',
          'Towns in a buyer brief are ideas to start from. The team\'s knowledge of stock wins.',
          'Keep the investor\'s name and contact details in our systems only.'
        ]}
      ],
      confirm: 'Add how buyers are registered and tracked (CRM / Hub), how they are tagged by strategy, and the follow-up cadence.',
      questions: [
        { q: 'Under Buy It Right, which tiers should a first-time HMO buyer start with?', o: ['Tier 2 and Tier 3', 'Tier 1 only', 'Tier 4 and Tier 5', 'Any tier, if the yield is high'], a: 0, why: 'Tier 2 and Tier 3 first.' },
        { q: 'When is an 8-bed HMO right for a buyer?', o: ['After they own one HMO', 'As their first purchase', 'Only after five HMOs', 'Only if they pay cash'], a: 0, why: '8-bed HMOs after one HMO.' },
        { q: 'A buyer wants a Tier 4 value-add HMO and will use an agent. How many HMOs should they own first?', o: ['Two', 'One', 'None', 'Five'], a: 0, why: 'Tier 4 value-add after one HMO, or two if an agent will run it.' },
        { q: 'Where do offers usually land?', o: ['Between the asking price and 10% under', '20% to 30% under', 'Always over asking', 'At the bricks-and-mortar value'], a: 0, why: 'Use this to set expectations on both sides.' },
        { q: 'A buyer asks whether buying in a company is better for tax. What do you do?', o: ['Give our indicative read and recommend they speak to a tax adviser and mortgage broker', 'Tell them a company is always better', 'Tell them personal ownership is always better', 'Refuse to discuss tax at all'], a: 0, why: 'Our read is indicative, not financial advice.' },
        { q: 'Which of these is not a buyer brief question?', o: ['Why the seller is selling', 'How much capital they have', 'Whether they will self-manage or use an agent', 'Their target net yield'], a: 0, why: 'The brief is about the buyer\'s capital, experience, tenants, management, goals and timeframe.' }
      ]
    },

    {
      id: 'service',
      title: 'Communication, negotiation and service',
      mins: 15,
      summary: 'How we talk to sellers and buyers, how we negotiate, and how we protect clients\' information.',
      sections: [
        { h: 'How we talk', list: [
          'Plain English. Explain any jargon the first time you use it.',
          'Evidence first: give the figure, its source and its date.',
          'Ranges, not false precision.',
          'Never overpromise on price, timescale or what a tool says.',
          'Bad news early, with what we are doing about it.'
        ]},
        { h: 'Sellers', p: [
          'Set price expectations at the valuation, not three months into marketing. Show the evidence and the price lever, explain the speed-versus-value trade-off between routes, and agree how often you will update them.'
        ]},
        { h: 'Buyers', p: [
          'Respond quickly, send the full pack, qualify early and keep good buyers close. Many of our sales go to buyers who have bought from us before. That is the community in "Your community of HMO experts".'
        ]},
        { h: 'Negotiating', list: [
          'Anchor on evidence: comparables, the rent roll, the Tier read and buyer demand.',
          'Know the seller\'s walk-away price and timeframe before offers arrive.',
          'Trade, don\'t give: price for speed, certainty or a completion date.',
          'Get offers in writing with proof of funds and the buyer\'s position.',
          'Pass every offer to the seller promptly and in writing. Estate agents must do this by law (Estate Agents Act 1979).',
          'Never mislead a buyer or hold back material information about the property. Consumer protection law requires it.'
        ]},
        { h: 'Confidentiality', list: [
          'Client names, addresses and postcodes stay in our client systems, never in shared tools or other clients\' reports.',
          'Our valuation register and sales data are shared as totals and medians only.',
          'Never name the owner of a comparable.'
        ]}
      ],
      confirm: 'Add HMO X\'s service standards (response times for calls and emails, update frequency for sellers), the complaints process and redress scheme membership.',
      questions: [
        { q: 'A seller expects £50k more than the evidence supports. What do you do?', o: ['Show the evidence and the price lever early, as a range, and explain the route trade-off', 'Agree to their price to win the instruction', 'Say nothing and hope offers prove you right', 'Refuse to market it'], a: 0, why: 'Expectations set at valuation save months of drift.' },
        { q: 'Must every offer be passed to the seller?', o: ['Yes, promptly and in writing', 'Only offers within 10% of asking', 'Only if the buyer is qualified', 'Only the best offer each week'], a: 0, why: 'The Estate Agents Act 1979 requires agents to pass on offers.' },
        { q: 'Which is good negotiation practice?', o: ['Trade concessions, such as price for speed or certainty, instead of giving them away', 'Accept the first offer to keep things moving', 'Tell the buyer the seller\'s lowest price', 'Make up a rival bidder to push the price'], a: 0, why: 'Trade, don\'t give; and never mislead.' },
        { q: 'A buyer asks for the addresses of other HMOs we have valued in the town. What do you do?', o: ['Decline. Share totals only: the number of valuations and the medians', 'Send the list', 'Send postcodes but not house numbers', 'Ask Richard to send them'], a: 0, why: 'Past clients\' addresses are never shared.' },
        { q: 'How do you quote a yield to a client?', o: ['"13.00% gross", with the source and date', '"About 13%"', '"Excellent"', '"Higher than most"'], a: 0, why: 'Yields to 2 dp with a named source and date.' },
        { q: 'You learn a search problem will delay completion. When do you tell the seller?', o: ['Straight away, with what is being done about it', 'Once it is fixed', 'At the next weekly update', 'Only if they ask'], a: 0, why: 'Bad news early.' }
      ]
    },

    {
      id: 'market',
      title: 'The national HMO market',
      mins: 20,
      summary: 'What HMO X knows about HMOs across the country, and what drives demand in a town.',
      sections: [
        { h: 'Our evidence base', p: ['As at the 13 November 2026 scan, the national base behind every read is:'], table: { head: ['Evidence', 'Count'], rows: [
          ['Towns in the grid', '320'], ['Room rents', '15,094'], ['Sold and valuation comparables', '11,538'], ['Tier calls by Richard Nicholls', '197'], ['GDV appraisals', '34'], ['Completed HMO sales (council registers matched to Land Registry)', '2,116']
        ]}},
        { h: 'What our own valuations show', list: [
          '615 HMO X valuations across 146 towns.',
          'The typical HMO we value has 6 bedrooms.',
          'The median valuation across towns is around £380,000, at a median gross yield of 12.29%.',
          'Most HMOs we value are Tier 3, then Tier 2.',
          'Recommended routes: Committed Sale 362, Auction 76, Development / GDV 48, Exit Planning 37, Back to resi 14, Hold / Health Check 13.',
          'Busiest towns: Swindon (35), Derby (28), Preston (26), Birmingham and Coventry (22 each), Portsmouth (21).'
        ]},
        { h: 'Completed HMO sales', p: [
          'We match council HMO registers to Land Registry sales and count only strong matches (same postcode and house number). Across the towns where we hold them, the median sale price per room clusters around £62,000.'
        ]},
        { h: 'What drives demand in a town', terms: [
          ['Earnings', 'Median full-time pay. Resident earnings govern most markets; workplace earnings govern where in-commuters are the main tenants. In Derby, workplace pay runs about 15% over resident pay.'],
          ['Affordability floor', 'Resident median earnings × 30% ÷ 12: roughly what a tenant can pay a month. A derived figure, so label it as one.'],
          ['18 to 34 population', 'The core demand cohort for rooms.'],
          ['Private rented share', 'How big the rental market already is (Census 2021).'],
          ['Jobs density and claimants', 'Whether there is work to support rents.']
        ]},
        { h: 'How towns differ', list: [
          'Each town has its own yield band. Cheaper northern and Midlands towns sell at higher gross yields; the South East sells at lower yields with stronger bricks-and-mortar values.',
          'Professional tenant markets are read as deep, moderate or thin. A thin market pulls the realistic tier down.',
          'Article 4 areas restrict new HMOs, which supports lawful existing ones.'
        ]},
        { h: 'Using market data properly', list: [
          'Always state the reference period ("ASHE, April 2025 reference period"), not just a year.',
          'Never estimate a missing figure from a neighbouring area or a regional average. Report the gap.',
          'Regeneration and investment news must be searched fresh and dated. Never present an undated signal as current.'
        ]}
      ],
      questions: [
        { q: 'Roughly how many room rents sit in the HMO X evidence base?', o: ['About 15,000', 'About 1,500', 'About 150,000', 'About 500'], a: 0, why: '15,094 room rents at the 13 November 2026 scan.' },
        { q: 'Which route do our valuations recommend most often?', o: ['Committed Sale', 'Auction', 'Exit Planning', 'Back to resi'], a: 0, why: '362 of 615 valuations recommended Committed Sale.' },
        { q: 'How is the affordability floor worked out?', o: ['Resident median earnings × 30% ÷ 12', 'Average room rent × 12', 'House price ÷ 30', 'Workplace earnings ÷ 52'], a: 0, why: 'It is a derived figure, labelled as derived.' },
        { q: 'How many bedrooms does the typical HMO we value have?', o: ['6', '4', '9', '12'], a: 0, why: 'The median across our register is 6 beds.' },
        { q: 'Where does our completed HMO sales data come from?', o: ['Council HMO registers matched to Land Registry, strong matches only', 'Rightmove asking prices', 'Our own guesses', 'Auction catalogues'], a: 0, why: 'Only same postcode and house number matches count.' },
        { q: 'A report mentions a regeneration scheme in the town. What must you do?', o: ['Search it fresh and give the date', 'Copy it from last year\'s report', 'Leave the date off so it stays current', 'Assume it went ahead'], a: 0, why: 'Never present an undated regeneration signal as current.' },
        { q: 'Which tier do most HMOs we value sit in?', o: ['Tier 3', 'Tier 1', 'Tier 5', 'Tier 4'], a: 0, why: 'T3 (Standard / Older En-Suite) is the most common, then T2.' }
      ]
    }
  ]
};
