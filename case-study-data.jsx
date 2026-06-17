/* ------------------------------------------------------------------ *
 *  Case study content: data-driven medium-depth case studies.
 *  Each entry is rendered by case-study.jsx based on window.__CASE_SLUG__.
 *  Clients are anonymized; metrics are representative.
 * ------------------------------------------------------------------ */
window.CASE_STUDIES = {

  /* ===================== CME Audience Intelligence ===================== */
  "cme-audience-segment-specialty-society": {
    client: "National Specialty Society",
    area: "CME Audience Intelligence",
    areaHref: "solutions/cme-audience-intelligence.html",
    title: ["How a national specialty society built a ", "40,000-physician CME segment", " in 48 hours"],
    date: "Apr 2026",
    read: "3 min read",
    summary: "A large but undifferentiated member file became a precise, in-market audience once verified specialty data met live intent signals, producing a 40,000-physician segment ready to activate in two days.",
    metrics: [
      { val: "40,000", label: "Physicians Segmented" },
      { val: "48 hrs", label: "To First Live Segment" },
      { val: "3.2×", label: "Faster Campaign Launch" },
    ],
    challenge: [
      "The society held one of the largest physician membership files in its specialty, yet it behaved like a single undifferentiated list. When the team wanted to promote a new guideline-based activity, they had no reliable way to isolate the members actually in-market for that topic.",
      "Manual segmentation depended on a small data team and took weeks per campaign. By the time a segment was ready, the moment of interest had often passed.",
    ],
    approachIntro: "We layered verified provider attributes over the existing file and enriched it with live behavioral signals, turning a static roster into a queryable audience.",
    approach: [
      "Matched every record to a verified NPI with current specialty, subspecialty, and practice-setting attributes.",
      "Overlaid intent signals tied to the guideline topic: content consumption, search behavior, and recertification timing.",
      "Built reusable dynamic segments the marketing team could filter themselves, with no data-team bottleneck.",
    ],
    resultsIntro: "The first activated segment was live in 48 hours instead of the usual multi-week cycle, and subsequent campaigns reused the same framework.",
    results: [
      "A 40,000-physician segment isolated by specialty, topic interest, and renewal window.",
      "Campaign launch time cut to roughly a third of the prior process.",
      "Higher early engagement, because outreach reached members already researching the topic.",
    ],
    quote: { text: "We stopped emailing our whole membership and started reaching the few thousand who were actually looking. The segment paid for itself on the first send.", role: "Director of Education, National Specialty Society" },
    sibling: "grand-rounds-intent-data",
  },

  "grand-rounds-intent-data": {
    client: "Academic Medical Center",
    area: "CME Audience Intelligence",
    areaHref: "solutions/cme-audience-intelligence.html",
    title: ["Academic medical center used intent data to ", "refill grand rounds attendance"],
    date: "Mar 2026",
    read: "3 min read",
    summary: "Declining grand rounds attendance turned around when the program stopped relying on internal staff alone and used intent data to reach external physicians in its service area.",
    metrics: [
      { val: "2.4×", label: "Grand Rounds Attendance" },
      { val: "61%", label: "Reach to External Physicians" },
      { val: "9", label: "Departments Activated" },
    ],
    challenge: [
      "Weekly grand rounds attendance had been sliding for two years. Promotion went almost entirely to internal staff through hospital email, and the same faces showed up each week.",
      "The team knew there were relevant physicians across their region who would value the sessions, but they had no way to identify or reach them.",
    ],
    approachIntro: "We built an audience around the institution's actual service area and the clinical topics on each week's calendar.",
    approach: [
      "Geographic and health-system targeting to reach physicians within the medical center's catchment.",
      "Topic-level intent signals to surface clinicians actively researching each session's subject.",
      "Recurring calendar invitations and reminder sequences tuned to the weekly RSS schedule.",
    ],
    resultsIntro: "Within a quarter the rooms were full again, and most of the growth came from physicians who had never attended before.",
    results: [
      "Average attendance more than doubled across nine departments.",
      "A majority of new attendees were external physicians from the surrounding region.",
      "Interprofessional segments brought in NPs, PAs, and pharmacists alongside physicians.",
    ],
    quote: { text: "For the first time, the audience in the room matched the topic on the screen. Attendance stopped being a coin flip.", role: "CME Program Manager, Academic Medical Center" },
    sibling: "cme-audience-segment-specialty-society",
  },

  /* ========================== HCP Outreach ========================== */
  "compliant-prescriber-outreach": {
    client: "Specialty Pharma Team",
    area: "HCP Outreach",
    areaHref: "solutions/hcp-outreach.html",
    title: ["Specialty pharma team reached ", "18,000 in-market prescribers", " with zero compliance flags"],
    date: "Feb 2026",
    read: "3 min read",
    summary: "Reaching prescribers at scale without touching protected health information is a tightrope. By building targeting on verified professional records and behavior, the team hit reach and compliance goals at once.",
    metrics: [
      { val: "18,000", label: "Prescribers Reached" },
      { val: "0", label: "Compliance Flags" },
      { val: "94%", label: "Email Deliverability" },
    ],
    challenge: [
      "The team needed meaningful reach into a specialist prescriber audience, but a previous vendor had created both deliverability problems and compliance concerns by leaning on questionable data sources.",
      "Legal required that nothing in the program rely on protected health information, and every contact had to be defensible.",
    ],
    approachIntro: "We built the audience entirely on professional behavior matched to verified provider records, never on patient data.",
    approach: [
      "Targeting derived from professional research behavior mapped to verified NPI and licensure records.",
      "Full suppression and consent handling aligned to CAN-SPAM and the client's internal review.",
      "Deliverability hardening: verified work addresses, domain warm-up, and ongoing list hygiene.",
    ],
    resultsIntro: "The program scaled to 18,000 prescribers and cleared every internal compliance review without a single flag.",
    results: [
      "18,000 in-market specialist prescribers reached across the campaign.",
      "Zero compliance flags raised in legal and medical-legal review.",
      "Deliverability held at 94%, well above the prior vendor's baseline.",
    ],
    quote: { text: "Our compliance team signed off without a single change request. That had never happened with an outreach vendor before.", role: "Marketing Lead, Specialty Pharma Team" },
    sibling: "intent-targeted-outreach-efficiency",
  },

  "intent-targeted-outreach-efficiency": {
    client: "Medical Society",
    area: "HCP Outreach",
    areaHref: "solutions/hcp-outreach.html",
    title: ["Medical society used intent signals to ", "cut outreach volume 40%", " while lifting response"],
    date: "Feb 2026",
    read: "3 min read",
    summary: "More email was producing less response. By sending only to clinicians showing real in-market behavior, the society shrank its volume and grew its results at the same time.",
    metrics: [
      { val: "−40%", label: "Send Volume" },
      { val: "+27%", label: "Response Rate" },
      { val: "2.1×", label: "Return on Spend" },
    ],
    challenge: [
      "The society's default play was broad blasts to its entire file. Response rates had been falling for a year, unsubscribes were climbing, and list fatigue was setting in.",
      "Leadership worried that cutting volume would mean cutting results, so nothing changed, and the decline continued.",
    ],
    approachIntro: "We replaced volume with precision, scoring the file by live intent and sending only where interest was real.",
    approach: [
      "Intent scoring across content consumption, search behavior, and engagement cadence.",
      "A decay model so stale interest was down-weighted and fresh signals rose to the top.",
      "Tighter segments and message-to-audience matching instead of one message to everyone.",
    ],
    resultsIntro: "Sending less, to the right people, reversed the trend in a single quarter.",
    results: [
      "Total send volume down 40%, easing list fatigue and unsubscribes.",
      "Response rate up 27% despite the smaller audience.",
      "Return on outreach spend more than doubled.",
    ],
    quote: { text: "We were afraid that emailing less would mean earning less. The opposite happened, almost immediately.", role: "Membership Marketing Director, Medical Society" },
    sibling: "compliant-prescriber-outreach",
  },

  /* ========================== Alumni Outreach ========================== */
  "cme-alumni-reactivation": {
    client: "Academic CME Office",
    area: "Alumni Outreach",
    areaHref: "solutions/alumni-outreach.html",
    title: ["Academic CME office reactivated ", "38% of lapsed alumni", " in a single semester"],
    date: "Jan 2026",
    read: "3 min read",
    summary: "Thousands of past learners had gone quiet. A structured reactivation built on refreshed contact data and renewal-window timing brought more than a third of them back in one semester.",
    metrics: [
      { val: "38%", label: "Lapsed Alumni Reactivated" },
      { val: "1", label: "Semester to Result" },
      { val: "4.3×", label: "Re-Enrollment Lift" },
    ],
    challenge: [
      "The office had a deep history of past participants, but most had not enrolled in over a year. There was no system for re-engaging them, and contact data had decayed.",
      "Each new term started from a cold list, ignoring the most likely buyers: people who had already learned with them before.",
    ],
    approachIntro: "We treated lapsed alumni as the highest-intent audience they owned and built a deliberate path back.",
    approach: [
      "Identified dormant learners and re-matched them to current, verified contact records.",
      "Timed outreach to each clinician's license-renewal window, when CME demand peaks.",
      "Sequenced multichannel nurture rather than a single re-introduction email.",
    ],
    resultsIntro: "A standing alumni audience replaced the cold-start scramble at the top of each term.",
    results: [
      "38% of previously lapsed alumni re-engaged within one semester.",
      "Re-enrollment from this group ran several times higher than cold acquisition.",
      "A repeatable reactivation playbook now runs every term automatically.",
    ],
    quote: { text: "Our best future learners turned out to be our past ones. We just had to reach them at the right moment.", role: "Director, Academic CME Office" },
    sibling: "alumni-recurring-revenue",
  },

  "alumni-recurring-revenue": {
    client: "Specialty Society",
    area: "Alumni Outreach",
    areaHref: "solutions/alumni-outreach.html",
    title: ["Specialty society turned past attendees into a ", "recurring revenue stream"],
    date: "Dec 2025",
    read: "3 min read",
    summary: "One-and-done event attendees rarely came back, making revenue lumpy and unpredictable. Cohort nurture and intent-triggered offers turned them into a dependable, repeating pipeline.",
    metrics: [
      { val: "3", label: "Recurring Cohorts Built" },
      { val: "+52%", label: "Repeat Enrollment" },
      { val: "Steady", label: "Predictable Pipeline" },
    ],
    challenge: [
      "The society ran strong individual events, but attendees rarely returned for the next one. Each program effectively started from zero, and revenue swung wildly between events.",
      "There was no mechanism to carry the relationship forward after an activity ended.",
    ],
    approachIntro: "We built continuity between events so each activity fed the next instead of ending cold.",
    approach: [
      "Segmented past attendees into cohorts by specialty and prior activity.",
      "Nurture sequences that kept the relationship warm between programs.",
      "Intent-triggered offers that surfaced the next relevant activity at the right time.",
    ],
    resultsIntro: "Events stopped being isolated spikes and became a connected, repeating revenue base.",
    results: [
      "Three recurring cohorts now carry forward from event to event.",
      "Repeat enrollment up 52% across the program calendar.",
      "Revenue shifted from unpredictable spikes to a steady, plannable pipeline.",
    ],
    quote: { text: "Every event used to start from scratch. Now each one hands the audience to the next.", role: "Education Revenue Lead, Specialty Society" },
    sibling: "cme-alumni-reactivation",
  },

  /* ===================== Nurse Audience Intelligence ===================== */
  "nursing-ce-rn-enrollment": {
    client: "Nursing CE Provider",
    area: "Nurse Audience Intelligence",
    areaHref: "solutions/nurse-audience-intelligence.html",
    title: ["Nursing CE provider tripled RN enrollment by ", "targeting active renewal windows"],
    date: "Jan 2026",
    read: "3 min read",
    summary: "Generic nurse lists and mistimed outreach kept conversion low. License-verified data and state-by-state renewal targeting tripled RN enrollment.",
    metrics: [
      { val: "3×", label: "RN Enrollment" },
      { val: "50-state", label: "License Coverage" },
      { val: "88%", label: "Record Match Accuracy" },
    ],
    challenge: [
      "The provider bought generic nurse lists that mixed license levels, specialties, and states together. Outreach landed at random points in each nurse's renewal cycle, so most of it was ignored.",
      "Conversion was low and the cost per enrollment kept climbing.",
    ],
    approachIntro: "We rebuilt the audience on license-verified nurse data and timed every message to renewal demand.",
    approach: [
      "License-verified records segmented by license level, specialty, and practice setting.",
      "State-by-state renewal-window targeting, since requirements and deadlines vary by board.",
      "Specialty-matched messaging instead of a single generic nursing offer.",
    ],
    resultsIntro: "Reaching the right nurse at the right point in the cycle changed the economics entirely.",
    results: [
      "RN enrollment tripled across the catalog.",
      "Coverage spanned all 50 states with renewal timing built in.",
      "Record match accuracy reached 88%, sharply lowering wasted sends.",
    ],
    quote: { text: "Timing was everything. Reaching nurses in their renewal window did more than any creative change ever had.", role: "Marketing Director, Nursing CE Provider" },
    sibling: "aprn-license-segmentation",
  },

  "aprn-license-segmentation": {
    client: "APRN Certification Body",
    area: "Nurse Audience Intelligence",
    areaHref: "solutions/nurse-audience-intelligence.html",
    title: ["APRN certification body filled specialty cohorts using ", "license-level segmentation"],
    date: "Dec 2025",
    read: "3 min read",
    summary: "Specialty cohorts kept opening under-filled because the audience couldn't be split by APRN role. License-level segmentation closed the gap.",
    metrics: [
      { val: "6", label: "Specialty Cohorts Filled" },
      { val: "+44%", label: "Cohort Fill Rate" },
      { val: "License-level", label: "Targeting Precision" },
    ],
    challenge: [
      "The body offered specialty programs for advanced practice nurses, but its data couldn't distinguish nurse practitioners from clinical nurse specialists, nurse anesthetists, or nurse midwives.",
      "Invitations went out broadly, the wrong roles received the wrong programs, and cohorts repeatedly opened under-enrolled.",
    ],
    approachIntro: "We segmented the audience down to license level and role so each program reached the right advanced-practice nurses.",
    approach: [
      "License-level segmentation across NP, CNS, CRNA, and CNM populations.",
      "Specialty and practice-setting filters layered on top of role.",
      "Role-specific invitations matched to each cohort's eligibility.",
    ],
    resultsIntro: "Precise targeting turned chronically under-filled cohorts into full ones.",
    results: [
      "Six specialty cohorts filled across the program calendar.",
      "Overall cohort fill rate up 44%.",
      "Far less wasted outreach, since each role saw only relevant programs.",
    ],
    quote: { text: "Once we could see role and license level, the under-filled cohorts simply stopped happening.", role: "Program Director, APRN Certification Body" },
    sibling: "nursing-ce-rn-enrollment",
  },

};
