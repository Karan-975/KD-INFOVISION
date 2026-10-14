'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Landmark,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck,
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Search,
  Filter,
} from 'lucide-react';

export default function TeamComputersIndustriesView({ settings }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [flippedPillarIdx, setFlippedPillarIdx] = useState(null);

  // Domain Highlight Carousel / Photo Cards
  const domainHighlights = [
    {
      title: 'Banking & Financial Services',
      tag: 'BFSI & FinTech',
      metric: '85ms Anomaly SLA',
      image: '/images/hero_realistic_analytics.jpg',
      desc: 'Sub-second fraud detection & core ledger lakehouses.',
    },
    {
      title: 'Smart Factories & Industrial OT',
      tag: 'Manufacturing',
      metric: '+24% OEE Boost',
      image: '/images/service_cloud_real.jpg',
      desc: 'Shop-floor IIoT telemetry & predictive asset maintenance.',
    },
    {
      title: 'Clinical Intelligence & Pharma',
      tag: 'Healthcare',
      metric: '99.4% Citation Precision',
      image: '/images/service_software_real.jpg',
      desc: 'HIPAA sovereign RAG & diagnostic trial pipelines.',
    },
    {
      title: 'Retail & Multi-Modal Supply Chain',
      tag: 'Retail & Logistics',
      metric: '-34% Stockouts',
      image: '/images/service_analytics_real.jpg',
      desc: 'Customer 360 semantic layers & cold-chain fleet telemetry.',
    },
  ];

  // Core Pillars matching .values-deffine-slide-outer
  const domainPillars = [
    {
      name: 'Real-Time Streaming',
      sub: 'Sub-second event ingestion & lakehouse telemetry',
      icon: '/images/industry/Real-time-Dashboards-Analytics-1.svg',
    },
    {
      name: 'Zero-Trust Compliance',
      sub: 'Automated RBI, HIPAA, SOC 2, and ISO governance',
      icon: '/images/industry/Govt.-Compliances-1.svg',
    },
    {
      name: 'Sovereign GenAI & RAG',
      sub: 'Private vector databases & citation audit trails',
      icon: '/images/industry/Secure-Edge-Computing.svg',
    },
    {
      name: 'Industrial OT Defense',
      sub: 'Air-gapped factory networks & IEC 62443 isolation',
      icon: '/images/industry/IoT-for-Smart-Manufacturing.svg',
    },
    {
      name: 'Cloud & FinOps Control',
      sub: 'Multi-cluster spend optimization & auto-suspension',
      icon: '/images/industry/High-Availability-Data-Centers.svg',
    },
  ];

  // Alternating Deep-Dive Showcases matching .why-team-benifit-outer
  const benefitShowcases = [
    {
      num: '01',
      title: 'Banking, Financial Services & FinTech (BFSI)',
      image: '/images/hero_realistic_analytics.jpg',
      desc: 'Tier-1 commercial banks, payment processors, and NBFCs require zero-latency transaction monitoring and complete regulatory auditability. We engineer Kafka streaming lakehouses coupled with Databricks ML anomaly scoring to process 10M+ daily transactions with sub-85ms decision latency, preventing millions in annual fraud while satisfying strict RBI Master Directions and SEBI guidelines.',
      capabilities: [
        'Real-time transaction fraud scoring & unauthorized payment alerts',
        'Multi-cluster core banking lakehouses & automated ledger reconciliations',
        'End-to-end RBI Master Directions, SEBI, and SOC 2 Type II audit trails',
      ],
      badges: ['85ms Anomaly SLA', '$4.2M Fraud Prevented', 'RBI & SOC 2 Type II'],
    },
    {
      num: '02',
      title: 'Smart Manufacturing & Industrial OT',
      image: '/images/service_cloud_real.jpg',
      desc: 'Modern discrete and continuous processing plants cannot tolerate unplanned machine downtime. We deploy shop-floor MQTT and OPC-UA edge ingestion pipelines with predictive thermal and vibration ML diagnostics, detecting bearing and motor failures 72 hours ahead of catastrophic breakdowns and boosting overall equipment effectiveness (OEE) by 24%.',
      capabilities: [
        'Shop-floor MQTT & OPC-UA sensor telemetry streaming from assembly lines',
        'Predictive thermal and vibration asset failure warning (72h ahead)',
        'Air-gapped OT network defense & IEC 62443 cybersecurity isolation',
      ],
      badges: ['+24% OEE Boost', 'Zero Unplanned Downtime', 'IEC 62443 OT Security'],
    },
    {
      num: '03',
      title: 'Healthcare, Life Sciences & Clinical RAG',
      image: '/images/service_software_real.jpg',
      desc: 'Clinical trial documentation and diagnostic histories are heavily unstructured and subject to strict patient confidentiality. We architect HIPAA-compliant sovereign RAG assistants using private vector embeddings and deterministic citation tracking, accelerating clinical researcher review turnaround from 4 days to 45 minutes.',
      capabilities: [
        'HIPAA-sovereign RAG assistants with deterministic citation tracking',
        'Automated extraction of patient criteria from unstructured diagnostic PDFs',
        'FHIR / HL7 clinical trial telemetry lakes & de-identified data pipelines',
      ],
      badges: ['85% Faster Review', '99.4% Citation Accuracy', 'HIPAA HITECH Validated'],
    },
    {
      num: '04',
      title: 'Retail, E-Commerce & Multi-Modal Supply Chain',
      image: '/images/service_analytics_real.jpg',
      desc: 'Siloed warehouse inventories and fragmented POS channels cause recurring stockouts and customer churn. We create dbt-governed medallion semantic layers and real-time cold-chain IoT telemetry cockpits, reducing warehouse stockouts by 34% across 200+ distribution centers and maintaining 99.98% transit temperature compliance.',
      capabilities: [
        'Unified Customer 360 semantic layer spanning 14+ ERP/CRM channels',
        'Machine learning SKU demand forecasting across 200+ distribution centers',
        'Real-time cold-chain IoT telemetry tracking container temperature & GPS',
      ],
      badges: ['-34% Stockouts', '99.98% Cold-Chain SLA', 'Customer 360'],
    },
  ];

  // Directory Cards matching .job-listing
  const practiceDirectory = [
    {
      id: 'bfsi',
      category: 'bfsi',
      categoryLabel: 'BFSI & FinTech',
      title: 'Banking & Financial Services Practice',
      summary:
        'Architecting event-driven streaming lakehouses, ledger reconciliations, and real-time ML anomaly scoring under RBI regulatory governance.',
      kpi: '85ms SLA | $4.2M Saved',
      stack: ['Snowflake', 'Apache Kafka', 'Databricks', 'Azure AKS'],
      compliance: 'RBI, SEBI, SOC 2 Type II, PCI-DSS',
    },
    {
      id: 'manufacturing',
      category: 'manufacturing',
      categoryLabel: 'Manufacturing',
      title: 'Smart Manufacturing & Industrial OT Practice',
      summary:
        'Edge telemetry pipelines, MQTT/OPC-UA machine ingestion, digital twins, and ML predictive vibration diagnostics for factory plants.',
      kpi: '+24% OEE | Zero Downtime',
      stack: ['AWS IoT Core', 'TimescaleDB', 'Docker Edge', 'Tableau'],
      compliance: 'IEC 62443, ISO 9001, OEE Standard',
    },
    {
      id: 'healthcare',
      category: 'healthcare',
      categoryLabel: 'Healthcare',
      title: 'Clinical Intelligence & Life Sciences Practice',
      summary:
        'HIPAA-compliant sovereign RAG, FHIR data lakes, and automated clinical trial protocol extraction with 99.4% citation accuracy.',
      kpi: '85% Faster Review | 99.4% Precision',
      stack: ['Azure OpenAI', 'LangChain', 'pgvector', 'FastAPI'],
      compliance: 'HIPAA HITECH, FDA 21 CFR Part 11, GxP',
    },
    {
      id: 'retail',
      category: 'retail',
      categoryLabel: 'Retail & Supply Chain',
      title: 'Retail, Omnichannel & Supply Chain Practice',
      summary:
        'Unified customer 360 semantic layers, predictive replenishment schedules, and cold-chain temperature telemetry.',
      kpi: '-34% Stockouts | 99.98% SLA',
      stack: ['Power BI', 'dbt', 'Azure Synapse', 'TimescaleDB'],
      compliance: 'PCI-DSS Level 1, DPDP Act 2023, GDPR',
    },
    {
      id: 'gcc',
      category: 'gcc',
      categoryLabel: 'High-Tech GCCs',
      title: 'Cloud Modernization & Enterprise GCC Practice',
      summary:
        'Petabyte on-premise warehouse migrations to Snowflake/Databricks, FinOps cost guardrails, and autonomous multi-agent AI copilots.',
      kpi: '-55% Cloud Spend | 90% Automation',
      stack: ['LangGraph', 'Snowflake', 'Terraform', 'Next.js'],
      compliance: 'SOC 2 Type II, ISO 27001, CSA Star',
    },
    {
      id: 'logistics',
      category: 'retail',
      categoryLabel: 'Retail & Supply Chain',
      title: 'Multi-Modal Logistics & Fleet Telemetry Practice',
      summary:
        'Sub-minute route optimization, dynamic geofencing, and cold-chain sensor streams across transit corridors.',
      kpi: '-40% Transit Delay Penalties',
      stack: ['AWS IoT', 'Airflow', 'Kafka', 'Tableau'],
      compliance: 'GxP Cold-Chain, TAPA Security, ISO 28000',
    },
  ];

  const filteredPractices = practiceDirectory.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSpotlightMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
    e.currentTarget.style.setProperty('--spot-opacity', '1');
  };

  const handleSpotlightEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
    e.currentTarget.style.setProperty('--spot-opacity', '1');
  };

  const handleSpotlightLeave = (e) => {
    e.currentTarget.style.setProperty('--spot-opacity', '0');
  };

  return (
    <div className="tc-career-work-root">
      {/* =========================================================================
          1. HERO BANNER: (.career-banner-outer)
          Exact styling with background carrer-bg-1.webp & purple gradient text
          ========================================================================= */}
      <section
        className="career-banner-outer"
        onPointerMove={handleSpotlightMove}
        onPointerEnter={handleSpotlightEnter}
        onPointerLeave={handleSpotlightLeave}
        style={{
          background: "url('/images/carrer-bg-1.webp') no-repeat center center",
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="career-banner-main wow fadeInUp">
            <h1
              style={{
                background: 'linear-gradient(92.99deg, #B38BFF 32.03%, #B700FF 68.49%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Engineering Enterprise Impact <br /> Across Global Verticals
            </h1>
            <p>
              Domain-specialized architectures, sovereign AI, and high-throughput data pipelines built for regulated industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. HIGHLIGHTS STRIP: (.why-career-outer)
          Obsidian dark styling with ambient violet glow
          ========================================================================= */}
      <section
        className="why-career-outer"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.16) 0%, transparent 65%), #040208',
        }}
      >
        <div className="container">
          <div className="head text-center wow fadeInUp">
            <h2>Domains We Transform</h2>
            <p>
              Where deep vertical domain expertise meets modern data and cloud engineering.
            </p>
          </div>

          <div className="why-career-slide wow fadeInUp">
            <div className="showcase-cards-row">
              {domainHighlights.map((item, idx) => (
                <div key={idx} className="why-career-box">
                  <figure className="showcase-figure">
                    <img src={item.image} alt={item.title} />
                    <div className="showcase-overlay">
                      <span className="showcase-tag">{item.tag}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                      <span className="showcase-metric">{item.metric}</span>
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. VALUES & PILLARS: (.values-deffine-slide-outer)
          Obsidian dark styling with ambient purple glow
          ========================================================================= */}
      <section
        className="values-deffine-slide-outer"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(183, 0, 255, 0.08) 0%, transparent 60%), #06030c',
        }}
      >
        <div className="container">
          <div className="head text-center wow fadeInUp">
            <h2>The Pillars of Domain Excellence</h2>
            <p>Core engineering disciplines embedded across every vertical engagement.</p>
          </div>

          <div className="values-deffine-container">
            <div className="values-row wow fadeInUp">
              {domainPillars.map((pillar, idx) => {
                const isFlipped = flippedPillarIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`values-bx ${isFlipped ? 'is-flipped' : ''}`}
                    onClick={() => setFlippedPillarIdx(isFlipped ? null : idx)}
                  >
                    <div className="values-card-inner">
                      {/* FRONT FACE: Icon & Domain Title */}
                      <div className="values-card-front">
                        <figure className="values-figure">
                          <img src={pillar.icon} alt={pillar.name} />
                        </figure>
                        <h3>{pillar.name}</h3>
                        <span className="values-flip-hint">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                          </svg>
                          <span>Flip</span>
                        </span>
                      </div>

                      {/* BACK FACE: 3D Flipped side with Pillar Details */}
                      <div className="values-card-back">
                        <span className="values-back-tag">Pillar 0{idx + 1}</span>
                        <h4>{pillar.name}</h4>
                        <p>{pillar.sub}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FLAGSHIP ALTERNATING SHOWCASE: (.why-team-benifit-outer)
          Obsidian dark styling with ambient violet glow
          ========================================================================= */}
      <section
        className="why-team-benifit-outer"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.14) 0%, transparent 65%), #030206',
        }}
      >
        <div className="container">
          <div className="head text-center wow fadeInUp">
            <h2>Proven Enterprise Architectural Blueprints</h2>
            <p>
              Purpose-built architectures engineered to meet sector-specific regulatory, latency, and computational demands.
            </p>
          </div>

          {/* Alternating Row 1 */}
          <div className="why-benifit-row wow fadeInUp">
            <div className="why-benifit-bx">
              <figure>
                <img src={benefitShowcases[0].image} alt={benefitShowcases[0].title} />
              </figure>
            </div>
            <div className="why-benifit-details">
              <h2>
                <span>{benefitShowcases[0].num}</span>
                {benefitShowcases[0].title}
              </h2>
              <p>{benefitShowcases[0].desc}</p>

              <ul className="capabilities-bullet-list">
                {benefitShowcases[0].capabilities.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <div className="benefit-badges-group">
                {benefitShowcases[0].badges.map((b, i) => (
                  <span key={i} className="benefit-pill">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Alternating Row 2 (Reverse) */}
          <div className="why-benifit-row row-reverse wow fadeInUp">
            <div className="why-benifit-bx">
              <figure>
                <img src={benefitShowcases[1].image} alt={benefitShowcases[1].title} />
              </figure>
            </div>
            <div className="why-benifit-details">
              <h2>
                <span>{benefitShowcases[1].num}</span>
                {benefitShowcases[1].title}
              </h2>
              <p>{benefitShowcases[1].desc}</p>

              <ul className="capabilities-bullet-list">
                {benefitShowcases[1].capabilities.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <div className="benefit-badges-group">
                {benefitShowcases[1].badges.map((b, i) => (
                  <span key={i} className="benefit-pill">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Alternating Row 3 */}
          <div className="why-benifit-row wow fadeInUp">
            <div className="why-benifit-bx">
              <figure>
                <img src={benefitShowcases[2].image} alt={benefitShowcases[2].title} />
              </figure>
            </div>
            <div className="why-benifit-details">
              <h2>
                <span>{benefitShowcases[2].num}</span>
                {benefitShowcases[2].title}
              </h2>
              <p>{benefitShowcases[2].desc}</p>

              <ul className="capabilities-bullet-list">
                {benefitShowcases[2].capabilities.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <div className="benefit-badges-group">
                {benefitShowcases[2].badges.map((b, i) => (
                  <span key={i} className="benefit-pill">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Alternating Row 4 (Reverse) */}
          <div className="why-benifit-row row-reverse wow fadeInUp">
            <div className="why-benifit-bx">
              <figure>
                <img src={benefitShowcases[3].image} alt={benefitShowcases[3].title} />
              </figure>
            </div>
            <div className="why-benifit-details">
              <h2>
                <span>{benefitShowcases[3].num}</span>
                {benefitShowcases[3].title}
              </h2>
              <p>{benefitShowcases[3].desc}</p>

              <ul className="capabilities-bullet-list">
                {benefitShowcases[3].capabilities.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <div className="benefit-badges-group">
                {benefitShowcases[3].badges.map((b, i) => (
                  <span key={i} className="benefit-pill">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PRACTICE DIRECTORY: (.job-listing)
          Exact styling with filter bar, search, and directory cards
          ========================================================================= */}
      <section className="job-listing">
        <div className="container">
          <div className="head text-center wow fadeInUp">
            <h2>Sector Practice Directory</h2>
            <p>Explore tailored architectural solutions for your industry vertical</p>
          </div>

          {/* Sub-head filter bar matching .sub-head-job */}
          <div className="sub-head-job wow fadeInUp">
            <div className="filter-pill-buttons">
              {[
                { label: 'All Verticals', key: 'all' },
                { label: 'BFSI & FinTech', key: 'bfsi' },
                { label: 'Manufacturing', key: 'manufacturing' },
                { label: 'Healthcare', key: 'healthcare' },
                { label: 'Retail & Supply Chain', key: 'retail' },
                { label: 'High-Tech GCCs', key: 'gcc' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`dir-filter-btn ${selectedCategory === tab.key ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="dir-search-wrap">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search practice or capability..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dir-search-input"
              />
            </div>
          </div>

          {/* Practice Cards Grid matching .job-listing-inner */}
          <div className="job-listing-inner">
            <div className="job-grid">
              {filteredPractices.map((practice) => (
                <div
                  key={practice.id}
                  className="job-box wow fadeInUp"
                  onPointerMove={handleSpotlightMove}
                  onPointerEnter={handleSpotlightEnter}
                  onPointerLeave={handleSpotlightLeave}
                >
                  <div className="job-box-header">
                    <h4>
                      <span className="cat-dot">•</span> {practice.categoryLabel}
                    </h4>
                  </div>

                  <h6>{practice.title}</h6>
                  <p>{practice.summary}</p>

                  <div className="job-compliance-group">
                    <span className="job-group-label">COMPLIANCE</span>
                    <p className="job-compliance-text">{practice.compliance}</p>
                  </div>

                  <div className="job-tech-group">
                    <span className="job-group-label">TECHNOLOGY STACK</span>
                    <div className="job-stack-chips">
                      {practice.stack.map((stk, sIdx) => (
                        <span key={sIdx} className="job-chip">
                          {stk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="job-box-cta">
                    <Link
                      href="/case-studies"
                      className="job-apply-btn"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        textDecoration: 'none',
                      }}
                    >
                      <span className="job-apply-text" style={{ whiteSpace: 'nowrap' }}>
                        View Related Case Study
                      </span>
                      <span
                        className="job-arrow-circle"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginLeft: 'auto',
                        }}
                      >
                        <ArrowRight size={14} className="job-btn-arrow" />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CONSULTATION ADVISORY CALLOUT: (.future-outer)
          Obsidian dark styling with ambient violet glow
          ========================================================================= */}
      <section
        className="future-outer"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(124, 58, 237, 0.18) 0%, transparent 70%), #05020a',
        }}
      >
        <div className="container">
          <div className="future-main text-center wow fadeInUp">
            <h2>Ready to Deploy an Industry-Grade Architecture?</h2>
            <p>
              Schedule an architecture advisory session with our vertical practice directors to audit your existing telemetry pipelines, cloud spend, and compliance posture.
            </p>
            <div className="future-action">
              <Link href="/contact" className="future-cta-btn">
                <span>Schedule Architecture Consultation</span>
                <img src="/images/learn-more-arrow.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTHENTIC TEAM COMPUTERS CSS STYLES FOR CAREER-WORK REFERENCE
          ========================================================================= */}
      <style jsx>{`
        .tc-career-work-root {
          background: #000000;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* 1. HERO BANNER: (.career-banner-outer) */
        .career-banner-outer {
          padding: 180px 0 100px;
          min-height: 80vh;
          display: flex;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          --x: -999px;
          --y: -999px;
          --spot-opacity: 0;
        }

        .career-banner-outer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            340px circle at var(--x, -999px) var(--y, -999px),
            rgba(139, 124, 255, 0.16) 0%,
            transparent 100%
          );
          opacity: var(--spot-opacity, 0);
          transition: opacity 0.35s ease;
          pointer-events: none;
          z-index: 1;
        }

        .career-banner-outer > * {
          position: relative;
          z-index: 2;
        }

        .career-banner-main {
          max-width: 980px;
          margin: 0 auto;
        }

        .career-banner-main h1 {
          font-size: clamp(2.6rem, 5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          padding-bottom: 20px;
        }

        .career-banner-main p {
          font-size: 1.25rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          max-width: 780px;
          margin: 0 auto;
        }

        /* 2. HIGHLIGHTS STRIP: (.why-career-outer) */
        .why-career-outer {
          padding: 80px 0 90px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .head h2 {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.8);
        }

        .head p {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.82);
          max-width: 720px;
          margin: 0 auto 50px auto;
          line-height: 1.65;
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.7);
        }

        .showcase-cards-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .why-career-box {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.4s ease;
        }

        .why-career-box:hover {
          transform: translateY(-6px);
        }

        .showcase-figure {
          position: relative;
          height: 380px;
          margin: 0;
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .showcase-figure img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .why-career-box:hover .showcase-figure img {
          transform: scale(1.08);
        }

        .showcase-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(10, 4, 25, 0.92) 85%);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .showcase-tag {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: #fffa65;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        .showcase-overlay h4 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .showcase-overlay p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .showcase-metric {
          font-size: 12px;
          font-weight: 700;
          color: #C084FC;
          background: rgba(179, 139, 255, 0.14);
          padding: 4px 12px;
          border-radius: 12px;
          align-self: flex-start;
          border: 1px solid rgba(179, 139, 255, 0.3);
        }

        /* 3. VALUES & PILLARS: (.values-deffine-slide-outer) */
        .values-deffine-slide-outer {
          padding: 90px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .values-deffine-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .values-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        /* 3D Flip Card Container matching GammaStack Animation */
        .values-bx {
          perspective: 1000px;
          -webkit-perspective: 1000px;
          background: transparent;
          border-radius: 20px;
          height: 250px;
          cursor: pointer;
        }

        /* Inner Rotating Element */
        .values-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          border-radius: 20px;
        }

        /* Flip trigger on hover and when clicked/active on touch */
        .values-bx:hover .values-card-inner,
        .values-bx.is-flipped .values-card-inner {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }

        /* Shared face setup with backface hidden */
        .values-card-front,
        .values-card-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          padding: 26px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
        }

        /* FRONT FACE: Deep obsidian purple matching Industries page theme */
        .values-card-front {
          background: linear-gradient(155deg, rgba(24, 12, 42, 0.88) 0%, rgba(12, 6, 22, 0.96) 100%);
          border: 1px solid rgba(168, 85, 247, 0.22);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          z-index: 2;
          transform: rotateY(0deg);
          -webkit-transform: rotateY(0deg);
        }

        .values-bx:hover .values-card-front {
          border-color: rgba(192, 132, 252, 0.45);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
        }

        .values-figure {
          width: 62px;
          height: 62px;
          margin: 0 auto 16px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.25);
          border-radius: 16px;
          transition: transform 0.4s ease, background 0.4s ease, border-color 0.4s ease;
        }

        .values-bx:hover .values-figure {
          transform: scale(1.08);
          background: rgba(168, 85, 247, 0.18);
          border-color: rgba(34, 211, 238, 0.4);
        }

        .values-figure img {
          max-width: 42px;
          max-height: 42px;
          filter: drop-shadow(0 4px 12px rgba(34, 211, 238, 0.45));
        }

        .values-card-front h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.35;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
        }

        .values-flip-hint {
          margin-top: 14px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(192, 132, 252, 0.7);
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .values-bx:hover .values-flip-hint {
          color: #22d3ee;
        }

        /* BACK FACE: Pure white card background with deep purple text matching the card's theme */
        .values-card-back {
          background: #ffffff;
          border: 1px solid #ffffff;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 0 0 30px rgba(255, 255, 255, 0.25);
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
          z-index: 1;
        }

        .values-bx:hover .values-card-back,
        .values-bx.is-flipped .values-card-back {
          z-index: 3;
        }

        .values-back-tag {
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #7c3aed;
          margin-bottom: 8px;
          display: inline-block;
          background: rgba(124, 58, 237, 0.08);
          padding: 3px 10px;
          border-radius: 20px;
        }

        .values-card-back h4 {
          font-size: 1.05rem;
          font-weight: 800;
          color: #1e0a3c;
          margin: 0 0 10px 0;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .values-card-back p {
          font-size: 13.5px;
          color: #3b1d60;
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        /* 4. FLAGSHIP ALTERNATING SHOWCASE: (.why-team-benifit-outer) */
        .why-team-benifit-outer {
          padding: 100px 0 60px;
        }

        .why-benifit-row {
          display: flex;
          align-items: center;
          margin-bottom: 90px;
          position: relative;
        }

        .why-benifit-row.row-reverse {
          flex-direction: row-reverse;
        }

        .why-benifit-bx {
          width: 50%;
          position: relative;
          z-index: 1;
        }

        .why-benifit-bx figure {
          height: 480px;
          border-radius: 28px;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .why-benifit-bx figure img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .why-benifit-bx:hover figure img {
          transform: scale(1.05);
        }

        .why-benifit-details {
          width: 54%;
          background: linear-gradient(135deg, rgba(22, 12, 38, 0.95) 0%, rgba(14, 8, 25, 0.95) 100%);
          border: 1px solid rgba(179, 139, 255, 0.25);
          border-radius: 28px;
          padding: 50px 56px;
          position: relative;
          z-index: 2;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(12px);
        }

        .why-benifit-row:not(.row-reverse) .why-benifit-details {
          margin-left: -60px;
        }

        .why-benifit-row.row-reverse .why-benifit-details {
          margin-right: -60px;
        }

        .why-benifit-details h2 {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .why-benifit-details h2 span {
          background: linear-gradient(92.99deg, #B38BFF 30%, #D8B4FE 60%, #B700FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          font-size: 2.2rem;
          line-height: 1;
          font-weight: 900;
          display: inline-block;
          letter-spacing: -1px;
        }

        .why-benifit-details p {
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 22px;
        }

        .capabilities-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .capabilities-bullet-list li {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          padding-left: 20px;
          position: relative;
        }

        .capabilities-bullet-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #B38BFF;
          font-size: 20px;
          line-height: 14px;
        }

        .benefit-badges-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .benefit-pill {
          background: rgba(179, 139, 255, 0.12);
          border: 1px solid rgba(179, 139, 255, 0.3);
          color: #B38BFF;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 20px;
        }

        /* 5. DIRECTORY: (.job-listing) */
        .job-listing {
          padding: 90px 0;
          background: #06040a;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sub-head-job {
          background: #11091e;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .filter-pill-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .dir-filter-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.75);
          font-size: 13px;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .dir-filter-btn:hover {
          color: #ffffff;
          border-color: rgba(179, 139, 255, 0.5);
          background: rgba(179, 139, 255, 0.08);
        }

        .dir-filter-btn.active {
          background: linear-gradient(93.05deg, #B28AFF -14.26%, #8800BE 85.74%);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(178, 138, 255, 0.3);
        }

        .dir-search-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 6px 16px;
        }

        :global(.search-icon) {
          color: rgba(255, 255, 255, 0.4);
        }

        .dir-search-input {
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 13px;
          font-family: inherit;
          width: 200px;
        }

        .dir-search-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .job-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 10px;
        }

        .job-box {
          background: linear-gradient(180deg, rgba(22, 14, 38, 0.85) 0%, rgba(12, 7, 22, 0.96) 100%);
          border: 1px solid rgba(179, 139, 255, 0.18);
          border-radius: 24px;
          padding: 38px 32px 34px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
          --x: -999px;
          --y: -999px;
          --spot-opacity: 0;
        }

        /* Cursor-following spotlight glow: 340px wide fading from faint indigo (#8B7CFF at ~16% opacity) to transparent */
        .job-box::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            340px circle at var(--x, -999px) var(--y, -999px),
            rgba(139, 124, 255, 0.16) 0%,
            transparent 100%
          );
          opacity: var(--spot-opacity, 0);
          transition: opacity 0.35s ease;
          pointer-events: none;
          z-index: 0;
        }

        /* Content layers sit on top of the spotlight */
        .job-box > * {
          position: relative;
          z-index: 1;
        }

        .job-box:hover {
          transform: translateY(-6px);
          border-color: rgba(179, 139, 255, 0.45);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.65), 0 0 25px rgba(179, 139, 255, 0.14);
          background: linear-gradient(180deg, rgba(28, 18, 48, 0.9) 0%, rgba(15, 9, 28, 0.98) 100%);
        }

        .job-box-header {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .job-box h4 {
          font-size: 11px;
          font-weight: 700;
          color: #C084FC;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin: 0;
        }

        .cat-dot {
          color: #B38BFF;
          font-size: 14px;
          line-height: 1;
        }

        .job-box h6 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.4;
          margin: 0 0 12px 0;
        }

        .job-box p {
          font-size: 13.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.72);
          margin-bottom: 20px;
        }

        .job-group-label {
          font-size: 10px;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }

        .job-compliance-group {
          margin-bottom: 18px;
        }

        .job-compliance-text {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          margin: 0 !important;
          font-weight: 500;
        }

        .job-tech-group {
          margin-bottom: 24px;
        }

        .job-stack-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .job-chip {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #CBD5E1;
          font-size: 11.5px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .job-chip:hover {
          background: rgba(179, 139, 255, 0.12);
          border-color: rgba(179, 139, 255, 0.3);
          color: #ffffff;
        }

        .job-box-cta {
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          width: 100%;
        }

        .job-apply-btn {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          flex-wrap: nowrap !important;
          width: 100% !important;
          text-decoration: none !important;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .job-apply-text {
          font-size: 13.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: -0.1px;
          transition: color 0.25s ease;
          white-space: nowrap !important;
        }

        .job-arrow-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #C084FC;
          flex-shrink: 0 !important;
          margin-left: auto !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .job-btn-arrow {
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .job-box:hover .job-apply-text,
        .job-apply-btn:hover .job-apply-text {
          color: #ffffff;
        }

        .job-box:hover .job-arrow-circle,
        .job-apply-btn:hover .job-arrow-circle {
          background: linear-gradient(135deg, #7C3AED 0%, #B700FF 100%);
          border-color: rgba(183, 0, 255, 0.6);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(183, 0, 255, 0.45);
          transform: scale(1.06);
        }

        .job-box:hover :global(.job-btn-arrow),
        .job-apply-btn:hover :global(.job-btn-arrow) {
          transform: translateX(4px);
          color: #ffffff;
        }

        /* 6. CONSULTATION ADVISORY CALLOUT: (.future-outer) */
        .future-outer {
          padding: 100px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
        }

        .future-main {
          max-width: 800px;
          margin: 0 auto;
        }

        .future-main h2 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .future-main p {
          font-size: 1.15rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 36px;
        }

        .future-cta-btn {
          background: linear-gradient(93.05deg, #7C3AED -14.26%, #B700FF 85.74%);
          padding: 14px 36px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          border-radius: 40px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(183, 0, 255, 0.3);
        }

        .future-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(183, 0, 255, 0.45);
          filter: brightness(1.08);
        }

        .future-cta-btn img {
          width: 14px;
          height: auto;
          transition: transform 0.2s ease;
        }

        .future-cta-btn:hover img {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .showcase-cards-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .values-row {
            grid-template-columns: repeat(3, 1fr);
          }

          .job-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 960px) {
          .why-benifit-row,
          .why-benifit-row.row-reverse {
            flex-direction: column;
            margin-bottom: 60px;
          }

          .why-benifit-bx,
          .why-benifit-details {
            width: 100% !important;
            margin: 0 !important;
          }

          .why-benifit-bx figure {
            height: 320px;
            margin-bottom: -40px;
          }

          .why-benifit-details {
            padding: 36px 28px;
          }

          .values-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .showcase-cards-row {
            grid-template-columns: 1fr;
          }

          .values-row {
            grid-template-columns: 1fr;
            max-width: 360px;
            margin: 0 auto;
          }

          .values-bx {
            height: 230px;
          }

          .job-grid {
            grid-template-columns: 1fr;
          }

          .sub-head-job {
            flex-direction: column;
            align-items: stretch;
          }

          .dir-search-wrap {
            width: 100%;
          }

          .dir-search-input {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .values-card-inner {
            transition: transform 0.1s ease !important;
          }
          .job-box::before,
          .career-banner-outer::before {
            display: none !important;
            opacity: 0 !important;
            transition: none !important;
          }
          .job-box,
          .job-apply-btn,
          :global(.job-btn-arrow) {
            transition: none !important;
            transform: none !important;
          }
          .job-box:hover {
            transform: none !important;
          }
          .job-box:hover :global(.job-btn-arrow),
          .job-apply-btn:hover :global(.job-btn-arrow) {
            transform: none !important;
          }
        }

        @media (hover: none) {
          .job-box::before,
          .career-banner-outer::before {
            display: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
