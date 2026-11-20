export type Program = {
  id: string;
  tier: string;
  title: string;
  pricing: string;
  spots: string;
  featured?: boolean;
  includesPrefix?: string;
  items: string[];
  target?: string;
  graduation?: string;
  cta: string;
  ctaNote?: string;
  link?: string;
};

export const programs: Program[] = [
  {
    id: 'foundation',
    tier: 'Foundation — 6 Months',
    title: 'Thought Leader Foundation',
    pricing: '$14,997 (or 6 payments of $2,750)',
    spots: '20 per cohort',
    link: 'https://course.businessanalysisschool.com/offers/G2dWJBCW',
    items: [
      'The complete STORY Framework™ implementation — all 5 pillars with workbooks, templates, and live coaching',
      'Personal brand strategy and Unique Value Proposition development',
      'Content creation and distribution system — LinkedIn, video, podcast, and written content strategies',
      'Speaking opportunity identification and pitch system — find, pitch, and land speaking engagements',
      'Media and PR strategy — get featured in publications, podcasts, and media outlets',
      'Consulting offer creation with premium pricing — retainers, advisory, and project-based structures',
      '12 bi-weekly group coaching sessions with Eno and senior thought leadership coaches',
      '6-month community access and post-program support',
    ],
    target:
      'For professionals earning $100K+ who want to build a thought leadership brand and add $50K–$200K in annual revenue from speaking, advisory, and consulting.',
    cta: 'Apply Now',
  },
  {
    id: 'accelerator',
    tier: 'Accelerator — 12 Months',
    title: 'Authority Accelerator',
    pricing: '$29,997 (or 12 payments of $2,750)',
    spots: '10 per cohort',
    featured: true,
    link: 'https://course.businessanalysisschool.com/offers/kbwjeAHt',
    includesPrefix: 'Everything in Thought Leader PLUS:',
    items: [
      'Speaking opportunities curation and active placement — we help you land stages',
      'Book writing and publishing support — concept, outline, writing coaching, and publishing strategy',
      'Course creation and productization — turn your methodology into a scalable digital product',
      'Advanced media training — interview prep, media coaching, and PR campaign management',
      'Monthly 1:1 executive coaching sessions with Eno Eka',
      'Board and advisory positioning strategy — land advisory board seats that generate prestige and revenue',
      '12-month premium VIP support and community access',
    ],
    graduation: 'Publish a book, course, or signature talk + generate $100K+ in thought leadership revenue.',
    cta: 'Apply Now',
    ctaNote: 'Eno reviews personally',
  },
  {
    id: 'mastermind',
    tier: 'Mastermind — Ongoing Monthly',
    title: 'TLBS Mastermind',
    pricing: '$2,997/month (quarterly retreats included)',
    spots: 'Requires Authority Accelerator graduation',
    link: 'https://course.businessanalysisschool.com/offers/HuG2vHLm',
    items: [
      'Monthly strategy calls with Eno and mastermind peers — deal review, brand audits, opportunity sharing',
      'Quarterly in-person retreats at premium venues — 2-day intensive strategy sessions',
      'Deal and opportunity review sessions — bring your live opportunities and get collective intelligence',
      'Guest expert sessions — publishers, media agents, literary agents, lawyers, successful thought leaders',
      'Priority referral network — qualified opportunities shared among mastermind members',
      'Annual brand audit and strategy refresh — comprehensive review and realignment',
      'Private community with direct access to Eno and peers',
    ],
    cta: 'Apply to the Mastermind',
  },
  {
    id: 'private',
    tier: 'Private — By Application or Invitation',
    title: 'Private Advisory with Eno Eka',
    pricing: '$50,000 – $100,000/year',
    spots: 'Maximum 5 clients per year',
    items: [
      'Exclusive 1:1 advisory relationship with Eno Eka',
      'Monthly strategy sessions — deep-dive on brand, revenue, positioning, and opportunities',
      'Direct access via private communication channel — real-time advisory between sessions',
      'Complete brand audit and repositioning — end-to-end brand architecture redesign',
      'Direct introductions to Eno’s personal network — media, speaking, boards, partnerships',
      'Speaking, media, and board opportunity facilitation — active door-opening, not just coaching',
      'Annual strategic planning retreat — 1:1 intensive at a premium location',
    ],
    target:
      'For established executives, founders, and senior consultants who want direct, personal advisory from someone who has built what they’re building.',
    cta: 'Inquire About Private Advisory',
  },
];

export const storyPillars = [
  {
    letter: 'S',
    name: 'STRATEGY',
    body:
      'Define your niche with surgical precision. Craft a Unique Value Proposition that makes you the only choice. Build a strategic roadmap with clear milestones, revenue targets, and positioning goals.',
  },
  {
    letter: 'T',
    name: 'THOUGHT LEADERSHIP',
    body:
      'Create your signature methodology — the intellectual property that differentiates you from everyone else in your space. Develop frameworks, models, and language that become synonymous with your name.',
  },
  {
    letter: 'O',
    name: 'OFFERS & MONETIZATION',
    body:
      'Build consulting, coaching, advisory, and speaking offers with premium pricing structures. Create retainers, productized services, courses, and intellectual property that generate revenue while you sleep.',
  },
  {
    letter: 'R',
    name: 'REACH & VISIBILITY',
    body:
      'Master the media strategy, speaking circuit, content system, and personal branding architecture that builds an audience of decision-makers who convert into high-ticket clients.',
  },
  {
    letter: 'Y',
    name: 'YIELD & SCALE',
    body:
      'Leverage AI, technology, teams, and operational systems to scale your brand beyond your personal capacity. Move from practitioner to CEO of your thought leadership empire.',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  result: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'The STORY Framework gave me the clarity I’d been missing for years. Within 6 months, I went from charging $200 per hour to $500 per hour, landed my first keynote speaking engagement, and signed a book deal with a publisher. TLBS is not a course. It’s a complete transformation of how you see yourself and how the market sees you.',
    author: 'Management Consultant — Toronto, Canada',
    result: '$200 → $500/hr + Keynote + Book Deal',
  },
  {
    quote:
      'I had 20 years of deep operational experience but no platform, no audience, and no way to monetize beyond my day rate. The Authority Accelerator gave me the positioning strategy that led to 3 board advisory appointments and tripled my income in 12 months. Eno sees what you can’t see about your own brand.',
    author: 'Former VP of Operations — Lagos, Nigeria',
    result: '3 Board Advisory Roles + 3x Income',
  },
  {
    quote:
      'TLBS Live in Calgary was the single best investment I’ve made in my professional career. Two days that completely rewired how I think about my brand, my pricing, my positioning, and my value. I left with a roadmap and I’ve been executing against it ever since. The results have been extraordinary.',
    author: 'Independent Advisor — London, UK',
    result: 'Complete Brand Repositioning',
  },
  {
    quote:
      'The Mastermind has accelerated my growth more in 12 months than the previous 5 years of trying to figure it out on my own. Having Eno and a room full of accomplished thought leaders review my deals, challenge my thinking, and share referrals has been transformative. The referral network alone has generated over $200K in new business.',
    author: 'TLBS Mastermind Member — Atlanta, USA',
    result: '$200K+ From Referral Network Alone',
  },
  {
    quote:
      'I was terrified to charge premium rates. The Foundation program didn’t just give me permission — it gave me the framework and the confidence. I’ve since launched a $25K group coaching program, landed 3 paid speaking engagements, and been featured in two major publications. None of that existed before TLBS.',
    author: 'Executive Coach — Accra, Ghana',
    result: '$25K Program + Paid Speaking + Media Features',
  },
  {
    quote:
      'Eno’s Private Advisory is unlike anything else available in the market. Having someone who has personally built a multi-seven-figure global brand actively opening doors for you, reviewing your strategy, and holding you accountable is invaluable. My brand has grown more in one year of advisory than in the previous decade combined.',
    author: 'Private Advisory Client',
    result: 'Decade of Growth in One Year',
  },
  {
    quote:
      'I entered TLBS with credentials and left with a category. The positioning work alone paid for the program within one quarter.',
    author: 'Senior Partner — Professional Services — Dallas, USA',
    result: 'Category Leadership + Paid Advisory Pipeline',
  },
  {
    quote:
      'The frameworks are surgical. My team finally speaks one language about our brand, and our inbound conversations changed within weeks.',
    author: 'Founder — B2B SaaS — Vancouver, Canada',
    result: 'Aligned Brand + Higher Inbound Quality',
  },
];

export type ResourceItem = {
  title: string;
  description: string;
  cta: string;
  file?: string;
};

export const resources: ResourceItem[] = [
  {
    title: 'Free Masterclass: The 7 Steps to Building a Seven-Figure Thought Leadership Brand',
    description: 'Email + phone capture. Instant access to the full training.',
    cta: 'Watch',
  },
  {
    title: 'The STORY Framework™ Quick-Start Guide (PDF)',
    description: 'Implementation overview of all 5 pillars.',
    cta: 'Download',
    file: '/TLBS_STORY_Framework_Guide.pdf',
  },
  {
    title: 'Personal Brand Audit Worksheet (PDF)',
    description: 'Self-assessment of positioning, content, and monetization gaps.',
    cta: 'Download',
    file: '/TLBS_Personal_Brand_Audit_Worksheet.pdf',
  },
  {
    title: 'Speaking Opportunity Tracker (Google Sheet template)',
    description: 'System for finding and pitching stages.',
    cta: 'Get template',
    file: '/TLBS_Speaking_Opportunity_Tracker.pdf',
  },
  {
    title: 'From Expert to Authority eBook (PDF)',
    description: 'The playbook for monetizing expertise at the highest level.',
    cta: 'Download',
  },
  {
    title: 'Authority Assessment Quiz',
    description: '5-minute assessment: where are you on the thought leadership spectrum?',
    cta: 'Take quiz',
  },
];
