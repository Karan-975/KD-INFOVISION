const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('--- Syncing Authentic KD Infovision Content to Database ---');

  // 1. SiteSetting
  const existingSetting = await prisma.siteSetting.findFirst();
  const settingData = {
    siteName: 'KD INFOVISION',
    tagline: 'Consulting | Outsourcing | Digital',
    email: 'admin@kdinfovision.com',
    phone: '+91 9820536031',
    address: 'Shop No 9, Ananat Kanakar Marg, Bandra – East, Mumbai 400051',
    primaryColor: '#1B3A6B',
    accentColor: '#3D9BE9',
    metaTitle: 'KD Infovision — Consulting | Outsourcing | Digital',
    metaDesc:
      'KD Infovision empowers enterprises with Data & Analytics, Data Engineering, Agentic AI, and Digital Transformation solutions.',
    socialLinkedin: 'https://www.linkedin.com/company/kd-infovision-consulting/about/',
    socialTwitter: 'https://twitter.com/kdinfovision',
    socialGithub: 'https://github.com/kdinfovision',
  };

  if (existingSetting) {
    await prisma.siteSetting.update({
      where: { id: existingSetting.id },
      data: settingData,
    });
    console.log('✓ SiteSetting updated.');
  } else {
    await prisma.siteSetting.create({ data: settingData });
    console.log('✓ SiteSetting created.');
  }

  // 2. Hero Slides
  await prisma.heroSlide.deleteMany({});
  await prisma.heroSlide.createMany({
    data: [
      {
        order: 0,
        tag: 'Consulting | Outsourcing | Digital',
        headline: 'Your Partner For',
        headlineEmp: 'Digital Transformation, Data & AI Analytics',
        subtext:
          'You do not need to create your Reports & Dashboard from scratch. Just upload your data and get solution in real time.',
        primaryBtn: 'Get Started',
        primaryUrl: '#contact',
        secBtn: 'Explore Solutions →',
        secUrl: '#solutions',
        imageUrl: '/images/hero_realistic_analytics.jpg',
        svgType: 'analytics',
        bgGradient: 'linear-gradient(135deg,#0F2347 0%,#1B3A6B 55%,#0D2B5E 100%)',
        isActive: true,
      },
      {
        order: 1,
        tag: 'Strategic Advisory & Consulting',
        headline: 'We Only Suggest What You NEED,',
        headlineEmp: 'Not What You LIKE',
        subtext:
          'KDI Technology & Management Consulting — The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients.',
        primaryBtn: 'Talk to an Expert',
        primaryUrl: '#contact',
        secBtn: 'Our Capabilities →',
        secUrl: '#solutions',
        imageUrl: '/images/service_software_real.jpg',
        svgType: 'neural',
        bgGradient: 'linear-gradient(135deg,#0a1628 0%,#1B3A6B 65%,#0F2347 100%)',
        isActive: true,
      },
      {
        order: 2,
        tag: 'Staff Augmentation & Outsourcing',
        headline: 'KDI Certified Resources to Ensure',
        headlineEmp: 'Quick & Quality Delivery',
        subtext:
          "KDI's Staff Augmentations, Trainings & Outsourcing Services — As a trusted advisor, KDI’s expert consultants deliver projects on time while adhering to global standards.",
        primaryBtn: 'Contact Us',
        primaryUrl: '#contact',
        secBtn: 'Join Our Team →',
        secUrl: '/about',
        imageUrl: '/images/service_analytics_real.jpg',
        svgType: 'cloud',
        bgGradient: 'linear-gradient(135deg,#122850 0%,#0F2347 55%,#1B3A6B 100%)',
        isActive: true,
      },
    ],
  });
  console.log('✓ Hero Slides updated with reference content.');

  // 3. Stat Counters
  await prisma.statCounter.deleteMany({});
  await prisma.statCounter.createMany({
    data: [
      { order: 0, target: 38, suffix: '+', label: 'Team Members', isActive: true },
      { order: 1, target: 24, suffix: '+', label: 'Happy Clients', isActive: true },
      { order: 2, target: 50, suffix: '+', label: 'Projects Completed', isActive: true },
      { order: 3, target: 60, suffix: '%', label: 'Certified Resources', isActive: true },
    ],
  });
  console.log('✓ Stat Counters updated (38+, 24+, 50+, 60%).');

  // 4. Partners / Capabilities
  await prisma.partner.deleteMany({});
  const partnersList = [
    'Snowflake',
    'AWS',
    'Domo',
    'Databricks',
    'Qlik',
    'Tableau',
    'Spotfire',
    'Data Science & ML',
    'Power BI',
    'Python',
    'Microsoft Azure',
    'Next.js',
  ];
  await prisma.partner.createMany({
    data: partnersList.map((name, i) => ({ order: i, name, isActive: true })),
  });
  console.log('✓ Partners updated with reference capabilities.');

  // 5. Services
  await prisma.service.deleteMany({});
  await prisma.service.createMany({
    data: [
      {
        order: 0,
        num: '01',
        title: 'Data & Analytics',
        description:
          'Harness the power of data and artificial intelligence to drive smarter decisions and accelerate growth with cutting-edge AI solutions.',
        icon: 'BarChart3',
        details:
          'At KDI, we transform complex data into actionable insights with cutting-edge AI solutions, helping businesses innovate, scale, and stay ahead in a digital-first world. We deliver interactive executive dashboards and scalable business intelligence frameworks.',
        linkUrl: '#contact',
        isActive: true,
      },
      {
        order: 1,
        num: '02',
        title: 'Data Engineering',
        description:
          'Empowering businesses with seamless integration and advanced engineering solutions, aligning data strategies with business goals.',
        icon: 'Database',
        details:
          'We act as trusted advisors—aligning data strategies with business goals to unlock agility, drive innovation, and accelerate growth. We architect robust pipelines, data lakehouses on Databricks and Snowflake, and automated ETL/ELT workflows that ensure low latency and high reliability.',
        linkUrl: '#contact',
        isActive: true,
      },
      {
        order: 2,
        num: '03',
        title: 'Agentic AI',
        description:
          'Intelligent AI and Agentic AI solutions that go beyond automation by combining machine learning, NLP, and autonomous agents.',
        icon: 'BrainCircuit',
        details:
          'With our intelligent AI and Agentic AI solutions that go beyond automation. By combining advanced machine learning, natural language understanding, and autonomous agents, we help organizations streamline operations, enhance decision-making, and foster innovation.',
        linkUrl: '#contact',
        isActive: true,
      },
      {
        order: 3,
        num: '04',
        title: 'Technology & Management Consulting',
        description:
          'The KDI Framework provides efficient, high-quality solutions designed to meet the unique needs of our clients.',
        icon: 'Compass',
        details:
          "As a trusted advisor and strategic partner, KDI's expert consultants deliver projects on time while adhering to global standards and industry best practices. We only suggest what you NEED, not what you LIKE.",
        linkUrl: '#contact',
        isActive: true,
      },
      {
        order: 4,
        num: '05',
        title: 'Staff Augmentation & Trainings',
        description:
          'KDI Certified Resources to ensure quick & quality delivery for enterprise data, cloud, and engineering teams.',
        icon: 'Layers',
        details:
          'Access specialized consultants, certified data engineers, and BI analysts to augment your teams on demand. We provide enterprise technical training and outsourcing services adhering strictly to global standards.',
        linkUrl: '#contact',
        isActive: true,
      },
      {
        order: 5,
        num: '06',
        title: 'BI Visualization Solutions',
        description:
          'Deep expertise across Power BI, Tableau, Qlik, Domo, and Spotfire for immersive executive decision cockpits.',
        icon: 'BarChart3',
        details:
          'You do not need to create your reports and dashboards from scratch. Just upload your data and get real-time solutions across Power BI, Tableau, Domo, Qlik, and Spotfire.',
        linkUrl: '#contact',
        isActive: true,
      },
      {
        order: 6,
        num: '07',
        title: 'Web & Mobile Development',
        description:
          'Intuitive, high-performance web applications and mobile experiences with modern interfaces and robust admin governance.',
        icon: 'Code2',
        details:
          'We engineer scalable digital platforms, modern web apps with Next.js, and native/hybrid mobile apps with clean user experience and enterprise-ready governance.',
        linkUrl: '#contact',
        isActive: true,
      },
      {
        order: 7,
        num: '08',
        title: 'Digital & SEO Solutions',
        description:
          'Comprehensive digital transformation, marketing automation, and search engine optimization for sustainable online reach.',
        icon: 'Activity',
        details:
          'Accelerate your digital footprint with performance-driven SEO, strategic digital marketing frameworks, and customer conversion optimization.',
        linkUrl: '#contact',
        isActive: true,
      },
    ],
  });
  console.log('✓ Services updated with reference offerings.');

  // 6. Testimonials
  await prisma.testimonial.deleteMany({});
  await prisma.testimonial.createMany({
    data: [
      {
        order: 0,
        name: 'Dana Bailey',
        role: 'SVP - Analytics',
        company: 'Enterprise Financial Services',
        quote:
          "Development & Automation of reports by KDI has helped us eliminate manual dependencies and expedite decision making. Now we can support better analytics, ad hoc search, scheduled reports, administration and improved UX. KDI & Saurabh's team has completely fulfill our expectations.",
        avatarInit: 'DB',
        isActive: true,
      },
      {
        order: 1,
        name: 'David Larsen',
        role: 'Head - IT',
        company: 'Customer CRM & Tech Solutions',
        quote:
          'KDI served our firm well in building MIS Dashboards & predictive models for targeting CRM efforts for our customers. Their client service, coupled with their ability to quickly absorb both business requirements and data complexities, was first rate. I highly recommend this team.',
        avatarInit: 'DL',
        isActive: true,
      },
      {
        order: 2,
        name: 'Mary Wells',
        role: 'CEO',
        company: 'Ecommerce Global',
        quote:
          'KDI Digital & Web Development team has helped our business reach the next level. Our product interface & admin governance implemented by KDI team is so easy to use, but is nevertheless more powerful than many other readymade products on the market. I recommend KDI for Mobile & Web Development.',
        avatarInit: 'MW',
        isActive: true,
      },
    ],
  });
  console.log('✓ Testimonials updated with reference clients.');

  console.log('--- Content Sync Complete! ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
