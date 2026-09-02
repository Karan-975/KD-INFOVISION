const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding KD INFOVISION Database...');

  // 1. Admin User
  const existingAdmin = await prisma.adminUser.findFirst({ where: { username: 'admin' } });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.adminUser.create({
      data: {
        username: 'admin',
        email: 'admin@kdinfovision.com',
        password: hashedPassword,
      },
    });
    console.log('Admin user created: admin / admin123');
  }

  // 2. Site Setting
  const existingSetting = await prisma.siteSetting.findFirst();
  if (!existingSetting) {
    await prisma.siteSetting.create({
      data: {
        siteName: 'KD INFOVISION',
        tagline: 'Data. AI. Digital Transformation.',
        email: 'hello@kdinfovision.com',
        phone: '+91 98765 43210',
        address: 'Bangalore & Mumbai, India',
        primaryColor: '#1B3A6B',
        accentColor: '#3D9BE9',
        metaTitle: 'KD Infovision — Data. AI. Digital Transformation.',
        metaDesc: 'KD Infovision empowers enterprises to build AI-powered solutions, unlock business intelligence, and accelerate digital transformation.',
        socialLinkedin: 'https://linkedin.com',
        socialTwitter: 'https://twitter.com',
        socialGithub: 'https://github.com',
      },
    });
    console.log('Site settings seeded.');
  }

  // 3. Hero Slides
  const slideCount = await prisma.heroSlide.count();
  if (slideCount === 0) {
    await prisma.heroSlide.createMany({
      data: [
        {
          order: 0,
          tag: 'AI & Data Consulting',
          headline: 'Turning Data Into Your',
          headlineEmp: 'Competitive Advantage',
          subtext: 'KD Infovision empowers enterprises to build AI-powered solutions, unlock business intelligence, and accelerate digital transformation.',
          primaryBtn: 'Explore Services',
          primaryUrl: '#solutions',
          secBtn: 'Talk to an Expert →',
          secUrl: '#contact',
          svgType: 'analytics',
          bgGradient: 'linear-gradient(135deg,#0F2347 0%,#1B3A6B 55%,#0D2B5E 100%)',
          isActive: true,
        },
        {
          order: 1,
          tag: 'Machine Learning & AI',
          headline: 'AI That Actually Delivers',
          headlineEmp: 'Real Business Results',
          subtext: 'Custom ML models, GenAI, and intelligent automation — systems that learn from your data and generate measurable ROI from day one.',
          primaryBtn: 'Explore AI Services',
          primaryUrl: '#solutions',
          secBtn: 'Book a Demo →',
          secUrl: '#contact',
          svgType: 'neural',
          bgGradient: 'linear-gradient(135deg,#0a1628 0%,#1B3A6B 65%,#0F2347 100%)',
          isActive: true,
        },
        {
          order: 2,
          tag: 'Digital Transformation',
          headline: 'Modernize Your Business With',
          headlineEmp: 'Next-Gen Tech',
          subtext: 'Cloud migration, ERP implementation, process automation, and scalable platform development — complete digital transformation under one roof.',
          primaryBtn: 'Talk to an Expert',
          primaryUrl: '#contact',
          secBtn: 'View Services →',
          secUrl: '#solutions',
          svgType: 'cloud',
          bgGradient: 'linear-gradient(135deg,#122850 0%,#0F2347 55%,#1B3A6B 100%)',
          isActive: true,
        },
      ],
    });
    console.log('Hero slides seeded.');
  }

  // 4. Stat Counters
  const statCount = await prisma.statCounter.count();
  if (statCount === 0) {
    await prisma.statCounter.createMany({
      data: [
        { order: 0, target: 50, suffix: '+', label: 'Projects Delivered', isActive: true },
        { order: 1, target: 25, suffix: '+', label: 'Enterprise Clients', isActive: true },
        { order: 2, target: 8, suffix: '+', label: 'Industries Served', isActive: true },
        { order: 3, target: 100, suffix: '%', label: 'Outcome Focused', isActive: true },
      ],
    });
    console.log('Stat counters seeded.');
  }

  // 5. Partners
  const partnerCount = await prisma.partner.count();
  if (partnerCount === 0) {
    const partnersList = [
      'Microsoft Azure', 'AWS', 'Power BI', 'Qlik', 'Databricks',
      'Python', 'Next.js', 'Laravel', 'Tableau', 'OpenAI', 'Azure ML', 'React'
    ];
    await prisma.partner.createMany({
      data: partnersList.map((name, i) => ({ order: i, name, isActive: true })),
    });
    console.log('Partners seeded.');
  }

  // 6. Services
  const serviceCount = await prisma.service.count();
  if (serviceCount === 0) {
    await prisma.service.createMany({
      data: [
        {
          order: 0,
          num: '01',
          title: 'AI & Machine Learning',
          description: 'Custom ML models, predictive analytics, NLP, GenAI, computer vision — intelligent automation with real ROI.',
          icon: 'BrainCircuit',
          details: 'We build production-grade machine learning algorithms and GenAI solutions tailored for enterprise workflows, risk scoring, predictive maintenance, and conversational intelligence.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 1,
          num: '02',
          title: 'Data Analytics & BI',
          description: 'Power BI, Qlik, Tableau — transform raw data into executive-ready dashboards and actionable intelligence.',
          icon: 'BarChart3',
          details: 'Centralize fragmented databases into interactive visual analytics platforms that give executive leadership real-time visibility across operational KPIs, sales, and financial performance.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 2,
          num: '03',
          title: 'Software Development',
          description: 'Scalable web apps, APIs, SaaS platforms with Next.js & Laravel. MVP to enterprise-grade — fast and production-ready.',
          icon: 'Code2',
          details: 'End-to-end full-stack software engineering from high-scale SaaS architectures and microservices to intuitive customer-facing web and mobile applications.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 3,
          num: '04',
          title: 'IT Consulting',
          description: 'Technology strategy, architecture reviews, vendor selection, and digital roadmap planning for every stage.',
          icon: 'Compass',
          details: 'Strategic technology advisory that aligns technical investments with concrete business objectives, eliminating architectural debt and maximizing technology ROI.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 4,
          num: '05',
          title: 'Digital Transformation',
          description: 'Process digitization, ERP/CRM implementation, workflow automation, and cloud migration — fully modernize operations.',
          icon: 'Layers',
          details: 'Transform legacy operations into streamlined digital workflows with modern ERP, CRM integrations, and robotic process automation that eliminate manual bottlenecks.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 5,
          num: '06',
          title: 'Data Engineering',
          description: 'Data pipelines, warehouses, lakes, and ETL workflows — robust infrastructure that powers every AI initiative.',
          icon: 'Database',
          details: 'Build scalable data lakehouses and automated ETL/ELT pipelines using Databricks, Snowflake, and Azure Data Factory to ensure high data quality and low latency.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 6,
          num: '07',
          title: 'Cloud Solutions',
          description: 'Azure, AWS architecture, migration, and managed services — secure, scalable cloud tailored to your business.',
          icon: 'Cloud',
          details: 'Cloud architecture design, cloud-native modernization, multi-cloud management, and enterprise-grade security on Microsoft Azure and AWS.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 7,
          num: '08',
          title: 'Managed Services',
          description: '24/7 monitoring, support, and optimization for your analytics and data stack — focus on outcomes, not operations.',
          icon: 'Activity',
          details: 'Round-the-clock infrastructure monitoring, proactive performance tuning, SLA-backed uptime, and continuous pipeline maintenance.',
          linkUrl: '#contact',
          isActive: true,
        },
      ],
    });
    console.log('Services seeded.');
  }

  // 7. Industry Reach
  const industryCount = await prisma.industry.count();
  if (industryCount === 0) {
    await prisma.industry.createMany({
      data: [
        { order: 0, title: 'Banking & Insurance', description: 'Risk analytics, fraud detection, compliance', icon: 'Landmark', isActive: true },
        { order: 1, title: 'Manufacturing', description: 'Supply chain, demand forecasting, predictive ops', icon: 'Factory', isActive: true },
        { order: 2, title: 'Healthcare & Pharma', description: 'Clinical analytics, patient outcomes', icon: 'HeartPulse', isActive: true },
        { order: 3, title: 'Retail & CPG', description: 'Customer intelligence, inventory optimization', icon: 'ShoppingBag', isActive: true },
        { order: 4, title: 'E-commerce & D2C', description: 'Personalization, conversion, platform dev', icon: 'ShoppingCart', isActive: true },
        { order: 5, title: 'Education & EdTech', description: 'Learning analytics, LMS platforms', icon: 'GraduationCap', isActive: true },
        { order: 6, title: 'Logistics & Transport', description: 'Route optimization, fleet analytics', icon: 'Truck', isActive: true },
        { order: 7, title: 'Real Estate', description: 'Market intelligence, digital platforms', icon: 'Building2', isActive: true },
        { order: 8, title: 'IT & Startups', description: 'Rapid scaling, MVPs, growth analytics', icon: 'Rocket', isActive: true },
      ],
    });
    console.log('Industries seeded.');
  }

  // 8. Case Studies
  const caseCount = await prisma.caseStudy.count();
  if (caseCount === 0) {
    await prisma.caseStudy.createMany({
      data: [
        {
          order: 0,
          tag: 'BFSI',
          resultNum: '60%',
          resultLabel: 'Faster Reporting',
          title: 'Slashing Report Time by 60% with Real-Time Power BI Dashboards',
          summary: 'A leading financial services firm replaced manual Excel reports with an integrated Power BI solution across 12 data sources, giving leadership real-time visibility.',
          fullStory: 'We architected an automated data pipeline consolidating data from core banking, CRM, and ledger systems into an enterprise Power BI environment. Over 40 manual daily spreadsheets were completely eliminated, reducing month-end reporting cycles from 7 days to under 4 hours.',
          isActive: true,
        },
        {
          order: 1,
          tag: 'Manufacturing',
          resultNum: '30%',
          resultLabel: 'Better Forecast Accuracy',
          title: 'AI-Powered Demand Forecasting Delivering 30% Better Planning Accuracy',
          summary: 'Our ML model trained on 3 years of sales data eliminated inventory overstocks and stockouts, significantly reducing waste and costs.',
          fullStory: 'Implemented custom gradient-boosting time-series forecasting models that incorporated seasonal trends, raw material costs, and lead times. The solution decreased inventory carrying costs by ₹1.2 Cr in the first 6 months.',
          isActive: true,
        },
        {
          order: 2,
          tag: 'E-commerce',
          resultNum: '8 wk',
          resultLabel: 'Discovery to Go-Live',
          title: 'Scalable D2C Platform Built and Delivered in Just 8 Weeks',
          summary: 'Full Next.js + Laravel platform with integrated analytics, payment gateway, and custom admin panel — on time and under budget.',
          fullStory: 'Engineered a headless commerce platform handling 50,000+ daily sessions with sub-second page loads, automated inventory synchronization, and custom recommendation carousels.',
          isActive: true,
        },
        {
          order: 3,
          tag: 'Retail',
          resultNum: '3×',
          resultLabel: 'Faster Decisions',
          title: 'Centralized Analytics Platform Enabling 3× Faster Executive Decisions',
          summary: 'Retail chain with 200+ outlets gained instant insight into daily sales, inventory, and footfall with a centralized Qlik solution.',
          fullStory: 'Unified store point-of-sale data across 200+ geographic outlets into a single real-time executive cockpit, enabling store managers to optimize promotions and inventory levels dynamically.',
          isActive: true,
        },
      ],
    });
    console.log('Case studies seeded.');
  }

  // 9. Process Steps
  const stepCount = await prisma.processStep.count();
  if (stepCount === 0) {
    await prisma.processStep.createMany({
      data: [
        { order: 0, stepNum: '01', title: 'Discover', description: 'Deep-dive workshops to map your data landscape, business goals, and current challenges. We listen before we build.', icon: 'Search', isActive: true },
        { order: 1, stepNum: '02', title: 'Design', description: 'Solution architecture, technology selection, and a clear roadmap with milestones and success metrics.', icon: 'Compass', isActive: true },
        { order: 2, stepNum: '03', title: 'Build & Deliver', description: 'Agile sprints, regular demos, transparent progress. On-time and to spec — without compromise.', icon: 'Wrench', isActive: true },
        { order: 3, stepNum: '04', title: 'Support & Scale', description: 'Post-launch managed services, continuous optimization, and a long-term partnership for sustained growth.', icon: 'ShieldCheck', isActive: true },
      ],
    });
    console.log('Process steps seeded.');
  }

  // 10. Testimonials
  const testiCount = await prisma.testimonial.count();
  if (testiCount === 0) {
    await prisma.testimonial.createMany({
      data: [
        {
          order: 0,
          quote: 'KD Infovision transformed how we use data. Their Power BI dashboards reduced our reporting time by 60% and gave leadership real-time visibility for the first time.',
          name: 'Rajesh Kumar',
          role: 'Head of Operations',
          company: 'Manufacturing Co.',
          avatarInit: 'RK',
          isActive: true,
        },
        {
          order: 1,
          quote: 'Their AI churn model helped us retain 30% more clients. Deep BFSI domain understanding made the difference — they spoke our language from day one.',
          name: 'Priya Sharma',
          role: 'VP Analytics',
          company: 'Financial Services Firm',
          avatarInit: 'PS',
          isActive: true,
        },
        {
          order: 2,
          quote: 'From discovery to go-live in 8 weeks. Fast, scalable, easy to manage. Quality and communication throughout were truly exceptional. A trusted partner.',
          name: 'Anil Mehta',
          role: 'CTO',
          company: 'E-commerce Startup',
          avatarInit: 'AM',
          isActive: true,
        },
      ],
    });
    console.log('Testimonials seeded.');
  }

  // 11. Insights
  const insightCount = await prisma.insight.count();
  if (insightCount === 0) {
    await prisma.insight.createMany({
      data: [
        {
          order: 0,
          category: 'Blog',
          title: 'Why Your Data & AI Stack Needs a Practice, Not Just a Pile of Tools',
          summary: 'Most enterprise AI initiatives fail not because of bad technology, but missing foundations — data governance, team skills, and clear problem statements.',
          content: 'Enterprise artificial intelligence is no longer about testing experimental models in isolation. Real competitive advantage comes from establishing end-to-end data governance, robust pipelines, and actionable business KPIs. In this article, we explore the essential pillars required to turn fragmented data into continuous intelligence.',
          dateLabel: 'August 2026',
          isFeatured: true,
          isTrending: false,
          isActive: true,
        },
        {
          order: 1,
          category: 'Guide',
          title: 'From Data Chaos to Data Culture: A Practical Guide for Indian Enterprises',
          summary: 'How organizations can eliminate data silos and build a data-driven operating rhythm.',
          dateLabel: 'August 2026',
          isFeatured: false,
          isTrending: true,
          isActive: true,
        },
        {
          order: 2,
          category: 'Trend',
          title: 'GenAI in Business: What\'s Working, What\'s Not, and What\'s Next',
          summary: 'Separating generative AI hype from real-world enterprise ROI and production deployment.',
          dateLabel: 'July 2026',
          isFeatured: false,
          isTrending: true,
          isActive: true,
        },
        {
          order: 3,
          category: 'Analysis',
          title: 'Power BI vs Qlik vs Tableau: Choosing the Right BI Tool in 2026',
          summary: 'A comprehensive benchmark of feature sets, licensing models, and cloud ecosystem integrations.',
          dateLabel: 'July 2026',
          isFeatured: false,
          isTrending: true,
          isActive: true,
        },
        {
          order: 4,
          category: 'Architecture',
          title: 'How to Build an AI-Ready Data Architecture on Azure',
          summary: 'Best practices for lakehouse implementation, delta tables, and low-latency feature stores.',
          dateLabel: 'June 2026',
          isFeatured: false,
          isTrending: true,
          isActive: true,
        },
      ],
    });
    console.log('Insights seeded.');
  }

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
