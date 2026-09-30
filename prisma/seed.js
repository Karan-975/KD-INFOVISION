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
        tagline: 'Consulting | Outsourcing | Digital',
        email: 'admin@kdinfovision.com',
        phone: '+91 9820536031',
        address: 'Shop No 9, Ananat Kanakar Marg, Bandra – East, Mumbai 400051',
        primaryColor: '#1B3A6B',
        accentColor: '#3D9BE9',
        metaTitle: 'KD Infovision — Consulting | Outsourcing | Digital',
        metaDesc: 'KD Infovision empowers enterprises with Data & Analytics, Data Engineering, Agentic AI, and Digital Transformation solutions.',
        socialLinkedin: 'https://www.linkedin.com/company/kd-infovision-consulting/about/',
        socialTwitter: 'https://twitter.com/kdinfovision',
        socialGithub: 'https://github.com/kdinfovision',
      },
    });
    console.log('Site settings seeded.');
  }

  // 3. Hero Slides
  const slideCount = await prisma.heroSlide.count();
  if (slideCount === 0) {
    await prisma.heroSlide.create({
      data: {
        order: 0,
        tag: 'Consulting | Solutioning | Digital',
        headline: 'Your Partner For',
        headlineEmp: '“Empowering Your Enterprise with Intelligent Data & Next-Gen Autonomous Agents”',
        subtext: '',
        primaryBtn: 'Get Started',
        primaryUrl: '/contact',
        imageUrl: '/images/hero_skyline.jpg',
        isActive: true,
      },
    });
    console.log('Hero slide seeded.');
  }

  // 4. Stat Counters
  const statCount = await prisma.statCounter.count();
  if (statCount === 0) {
    await prisma.statCounter.createMany({
      data: [
        { order: 0, target: 38, suffix: '+', label: 'Team Members', isActive: true },
        { order: 1, target: 24, suffix: '+', label: 'Happy Clients', isActive: true },
        { order: 2, target: 50, suffix: '+', label: 'Projects Completed', isActive: true },
        { order: 3, target: 60, suffix: '%', label: 'Certified Resources', isActive: true },
      ],
    });
    console.log('Stat counters seeded.');
  }

  // 5. Partners
  const partnerCount = await prisma.partner.count();
  if (partnerCount === 0) {
    const partnersList = [
      'Snowflake', 'AWS', 'Domo', 'Databricks', 'Qlik',
      'Tableau', 'Spotfire', 'Data Science & ML', 'Power BI', 'Python', 'Microsoft Azure', 'Next.js'
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
          title: 'Data & Analytics',
          description: 'Harness the power of data and artificial intelligence to drive smarter decisions and accelerate growth with cutting-edge AI solutions.',
          icon: 'BarChart3',
          details: 'At KDI, we transform complex data into actionable insights with cutting-edge AI solutions, helping businesses innovate, scale, and stay ahead in a digital-first world.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 1,
          num: '02',
          title: 'Data Engineering',
          description: 'Empowering businesses with seamless integration and advanced engineering solutions, aligning data strategies with business goals.',
          icon: 'Database',
          details: 'We act as trusted advisors—aligning data strategies with business goals to unlock agility, drive innovation, and accelerate growth. We architect robust pipelines, data lakehouses on Databricks and Snowflake, and automated ETL/ELT workflows.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 2,
          num: '03',
          title: 'Agentic AI',
          description: 'Intelligent AI and Agentic AI solutions that go beyond automation by combining machine learning, NLP, and autonomous agents.',
          icon: 'BrainCircuit',
          details: 'With our intelligent AI and Agentic AI solutions that go beyond automation. By combining advanced machine learning, natural language understanding, and autonomous agents, we help organizations streamline operations and enhance decision-making.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 3,
          num: '04',
          title: 'Technology & Management Consulting',
          description: 'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients.',
          icon: 'Compass',
          details: "As a trusted advisor and strategic partner, KDI's expert consultants deliver projects on time while adhering to global standards and industry best practices. We only suggest what you NEED, not what you LIKE.",
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 4,
          num: '05',
          title: 'Staff Augmentation & Trainings',
          description: 'KDI Certified Resources to ensure quick & quality delivery for enterprise data, cloud, and engineering teams.',
          icon: 'Layers',
          details: 'Access specialized consultants, certified data engineers, and BI analysts to augment your teams on demand. We provide enterprise technical training and outsourcing services adhering strictly to global standards.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 5,
          num: '06',
          title: 'BI Visualization Solutions',
          description: 'Deep expertise across Power BI, Tableau, Qlik, Domo, and Spotfire for immersive executive decision cockpits.',
          icon: 'BarChart3',
          details: 'You do not need to create your reports and dashboards from scratch. Just upload your data and get real-time solutions across Power BI, Tableau, Domo, Qlik, and Spotfire.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 6,
          num: '07',
          title: 'Web & Mobile Development',
          description: 'Intuitive, high-performance web applications and mobile experiences with modern interfaces and robust admin governance.',
          icon: 'Code2',
          details: 'We engineer scalable digital platforms, modern web apps with Next.js, and native/hybrid mobile apps with clean user experience and enterprise-ready governance.',
          linkUrl: '#contact',
          isActive: true,
        },
        {
          order: 7,
          num: '08',
          title: 'Digital & SEO Solutions',
          description: 'Comprehensive digital transformation, marketing automation, and search engine optimization for sustainable online reach.',
          icon: 'Activity',
          details: 'Accelerate your digital footprint with performance-driven SEO, strategic digital marketing frameworks, and customer conversion optimization.',
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
          quote: "Development & Automation of reports by KDI has helped us eliminate manual dependencies and expedite decision making. Now we can support better analytics, ad hoc search, scheduled reports, administration and improved UX. KDI & Saurabh's team has completely fulfill our expectations.",
          name: 'Dana Bailey',
          role: 'SVP - Analytics',
          company: 'Enterprise Financial Services',
          avatarInit: 'DB',
          isActive: true,
        },
        {
          order: 1,
          quote: 'KDI served our firm well in building MIS Dashboards & predictive models for targeting CRM efforts for our customers. Their client service, coupled with their ability to quickly absorb both business requirements and data complexities, was first rate. I highly recommend this team.',
          name: 'David Larsen',
          role: 'Head - IT',
          company: 'Customer CRM & Tech Solutions',
          avatarInit: 'DL',
          isActive: true,
        },
        {
          order: 2,
          quote: 'KDI Digital & Web Development team has helped our business reach the next level. Our product interface & admin governance implemented by KDI team is so easy to use, but is nevertheless more powerful than many other readymade products on the market. I recommend KDI for Mobile & Web Development.',
          name: 'Mary Wells',
          role: 'CEO',
          company: 'Ecommerce Global',
          avatarInit: 'MW',
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
