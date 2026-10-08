'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  X,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Database,
  Cpu,
  BarChart3,
  ExternalLink,
} from 'lucide-react';

export default function TeamComputersCaseStudiesView({
  settings,
  caseStudies = [],
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  // Enterprise KD Infovision Case Studies
  const allCases = [
    {
      id: 1,
      tag: 'BFSI & FinTech',
      category: 'bfsi',
      title: 'Real-Time Fraud Detection & Enterprise Streaming Lakehouse',
      metricNum: '65%',
      metricLabel: 'Latency Reduction (85ms SLA)',
      image: '/images/hero_enterprise_tech.jpg',
      summary:
        'Architected an event-driven data streaming engine ingesting over 10M+ daily financial transactions with real-time ML anomaly scoring and sub-second decision latency.',
      stack: ['Snowflake', 'Apache Kafka', 'Python ML', 'Azure AKS', 'FinOps'],
      problem:
        'Fragmented legacy batch processing caused 4-6 hour fraud detection delays, exposing the banking institution to severe unauthorized payment liabilities and regulatory compliance audits.',
      solution:
        'Engineered a unified Databricks & Snowflake lakehouse coupled with Kafka real-time stream ingestion and containerized inference endpoints with automated schema verification.',
      fullStory:
        'The deployment lowered fraud investigation cycle times from hours to 85 milliseconds, preventing an estimated $4.2M in annual fraudulent losses while achieving full RBI and SOC2 Type II regulatory audit compliance.',
    },
    {
      id: 2,
      tag: 'Retail & E-Commerce',
      category: 'retail',
      title: 'Unified Customer 360 & Predictive Demand Forecasting Engine',
      metricNum: '3.2×',
      metricLabel: 'Forecast Precision (-34% Stockouts)',
      image: '/images/service_analytics_real.jpg',
      summary:
        'Centralized 14 fragmented ERP and CRM databases into an executive Power BI semantic layer and automated demand forecasting pipeline across 200+ distribution centers.',
      stack: ['Power BI', 'Databricks', 'Azure Synapse', 'dbt', 'SQL'],
      problem:
        'Siloed warehouse inventories and disjointed customer transactional records led to recurring stock-outs, customer churn, and excess holding costs across regional retail distribution hubs.',
      solution:
        'Created an automated dbt-governed medallion lakehouse architecture feeding executive Power BI workspaces with automated DAX model caching and real-time replenishment signals.',
      fullStory:
        'Empowered merchandising leadership with predictive inventory reordering schedules, reducing regional warehouse stockouts by 34% and increasing GMV turnover by 22% within two quarters.',
    },
    {
      id: 3,
      tag: 'Healthcare & Life Sciences',
      category: 'healthcare',
      title: 'HIPAA-Compliant Intelligent Clinical Document Processing & Sovereign RAG',
      metricNum: '85%',
      metricLabel: 'Turnaround Acceleration',
      image: '/images/about_enterprise_team.jpg',
      summary:
        'Developed an automated OCR and Retrieval-Augmented Generation (RAG) assistant for complex clinical trial reports, protocol documents, and diagnostic telemetry.',
      stack: ['Azure OpenAI', 'LangChain', 'PostgreSQL pgvector', 'Docker', 'FastAPI'],
      problem:
        'Clinical researchers spent over 25 hours per week manually extracting patient diagnostic criteria from unstructured lab PDFs and medical histories, delaying clinical trial phases.',
      solution:
        'Built an enterprise-grade sovereign RAG pipeline using secure vector embeddings, deterministic citation tracking, and zero-data-retention OpenAI endpoints under strict HIPAA governance.',
      fullStory:
        'Slashed clinical review turnaround from 4 days to 45 minutes with 99.4% citation accuracy, accelerating clinical trial qualification pipelines and patient enrollment.',
    },
    {
      id: 4,
      tag: 'Manufacturing & Supply Chain',
      category: 'manufacturing',
      title: 'IoT Sensor Telemetry Pipeline & Real-Time Logistics Routing Cockpit',
      metricNum: '99.98%',
      metricLabel: 'SLA Cold-Chain Compliance',
      image: '/images/service_software_real.jpg',
      summary:
        'Engineered a real-time IoT fleet monitoring telemetry system tracking temperature-controlled pharmaceutical freight across multi-modal national transit corridors.',
      stack: ['AWS IoT Core', 'Apache Airflow', 'Tableau', 'TimescaleDB', 'Lambda'],
      problem:
        'Lack of live sensor telemetry and route visibility caused temperature excursions, delayed carrier handoffs, and substantial insurance write-offs across cold-chain routes.',
      solution:
        'Deployed a serverless IoT ingestion pipeline with automated route deviation alerts, geo-fencing webhooks, and Tableau executive cockpits with sub-minute telemetry latency.',
      fullStory:
        'Achieved 99.98% cold-chain SLA compliance, preventing $1.8M in damaged perishable shipments and cutting route delay penalties by 40%.',
    },
    {
      id: 5,
      tag: 'Cloud & Lakehouses',
      category: 'cloud',
      title: 'Petabyte-Scale Legacy Modernization to Distributed Cloud Lakehouse',
      metricNum: '-55%',
      metricLabel: 'Cloud Compute Spend',
      image: '/images/service_cloud_real.jpg',
      summary:
        'Modernized a 15-year-old on-premise data warehouse to a serverless multi-cluster Snowflake lakehouse with automated CI/CD and cost observability.',
      stack: ['Snowflake', 'AWS Glue', 'Airflow', 'Terraform', 'FinOps'],
      problem:
        'On-premise hardware reached end-of-life with ballooning maintenance fees, night-time batch ETL pipelines failing to complete before 9 AM business opening.',
      solution:
        'Migrated 1.4PB of historical data using parallelized AWS Snowball and automated Airflow DAGs, implementing auto-suspend warehouse policies and FinOps guardrails.',
      fullStory:
        'Batch runtimes decreased from 9 hours to 52 minutes, daily business reporting became live at 6 AM, and annual compute infrastructure spend dropped by 55%.',
    },
    {
      id: 6,
      tag: 'Agentic AI & GenAI',
      category: 'ai',
      title: 'Autonomous Multi-Agent Copilot for Enterprise Decision Intelligence',
      metricNum: '90%',
      metricLabel: 'Routine Query Automation',
      image: '/images/hero_realistic_analytics.jpg',
      summary:
        'Engineered an autonomous multi-agent system where specialized AI agents collaborate to answer complex cross-functional business questions directly from lakehouse tables.',
      stack: ['LangGraph', 'LlamaIndex', 'Python', 'OpenAI', 'Redis', 'Next.js'],
      problem:
        'Department heads waited up to 5 business days for BI analysts to generate custom SQL reports and answer ad-hoc data analysis requests.',
      solution:
        'Architected a LangGraph-based multi-agent supervisor network with dynamic SQL generation, schema verification, semantic validation, and automated chart rendering.',
      fullStory:
        'Automated 90% of recurring data requests with sub-3-second responses, freeing 18 senior data analysts to focus purely on high-leverage predictive modeling.',
    },
  ];

  const filterTabs = [
    { label: 'All', key: 'all' },
    { label: 'BFSI & FinTech', key: 'bfsi' },
    { label: 'Retail & E-Commerce', key: 'retail' },
    { label: 'Healthcare & Life Sciences', key: 'healthcare' },
    { label: 'Manufacturing & Supply Chain', key: 'manufacturing' },
    { label: 'Cloud & Lakehouses', key: 'cloud' },
    { label: 'Agentic AI & GenAI', key: 'ai' },
  ];

  const filteredCases =
    activeFilter === 'all'
      ? allCases
      : allCases.filter((c) => c.category === activeFilter);

  return (
    <div className="tc-casestudy-root">
      {/* =========================================================================
          1. HERO BANNER: (.case-study-banner-outer)
          Matching Team Computers case study header with gradient h1
          ========================================================================= */}
      <section className="case-study-banner-outer">
        <div className="container">
          <div className="case-study-main wow fadeInUp">
            <h1
              style={{
                background: 'linear-gradient(90.21deg, #00C8FF 10.33%, #00F7FF 87.54%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Case Studies
            </h1>

            <h3>See how our solutions drive real results</h3>

            <p>
              Overcoming data complexities, boosting computational efficiency, and delivering quantifiable ROI across modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. IMPACT NUMBERS BAR: High-Impact Metrics
          ========================================================================= */}
      <div className="case-study-metrics-bar">
        <div className="container">
          <div className="metrics-container-card wow fadeInUp">
            <div className="metrics-grid">
              <div className="metric-col">
                <span className="metric-num">50+</span>
                <span className="metric-txt">Enterprise Deliveries</span>
              </div>
              <div className="metric-col">
                <span className="metric-num">$12M+</span>
                <span className="metric-txt">Cloud Spend Saved</span>
              </div>
              <div className="metric-col">
                <span className="metric-num">&lt;30ms</span>
                <span className="metric-txt">Insight Latency</span>
              </div>
              <div className="metric-col">
                <span className="metric-num">99.99%</span>
                <span className="metric-txt">Architecture Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. CASE STUDY LISTING SECTION: (.case-study-listing-outer)
          Authentic background 'case-study-listing-bg.webp', filter tabs, and split cards
          ========================================================================= */}
      <section
        className="case-study-listing-outer"
        style={{
          background: "url('/images/case-study-listing-bg.webp') no-repeat center top",
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          {/* Desktop Filter Tabs */}
          <div className="filter-tabs-wrapper wow fadeInUp">
            <div className="filter-tabs" role="tablist" aria-label="Filter Tabs">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    className={`tab ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveFilter(tab.key)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Posts Container */}
          <div className="case-study-listing-main">
            {filteredCases.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={item.id}
                  className={`content-card ${isEven ? 'row-reverse' : ''} wow fadeInUp`}
                  style={{ animationDelay: `${(idx % 3) * 0.15}s` }}
                >
                  <div className="card-details">
                    {/* Left: Text & Metrics */}
                    <div className="card-text">
                      <div className="card-header-tags">
                        <span className="card-label">{item.tag}</span>
                        <span className="card-metric-pill">
                          <TrendingUp size={14} />
                          <b>{item.metricNum}</b> {item.metricLabel}
                        </span>
                      </div>

                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>

                      {/* Tech Stack Chips */}
                      <div className="card-stack-row">
                        {item.stack.map((tech, sIdx) => (
                          <span key={sIdx} className="stack-chip">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        className="know-more"
                        onClick={() => setSelectedCase(item)}
                      >
                        <span>Know More</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>

                    {/* Right: Rich Enterprise Image */}
                    <div
                      className="card-img"
                      onClick={() => setSelectedCase(item)}
                    >
                      <img src={item.image} alt={item.title} />
                      <div className="card-img-overlay">
                        <span>View Architecture Study</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredCases.length === 0 && (
              <div className="no-data-message">
                <p>No case studies found in this practice area.</p>
              </div>
            )}
          </div>

          {/* Loader / Assistance CTA Button */}
          <div className="loader-btn">
            <Link href="/contact" className="learn-more">
              <span>Discuss Your Enterprise Architecture</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CASE STUDY DETAIL MODAL: Executive Deep-Dive
          ========================================================================= */}
      {selectedCase && (
        <div className="modal-backdrop" onClick={() => setSelectedCase(null)}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-tag-row">
                <span className="modal-tag">{selectedCase.tag}</span>
                <span className="modal-roi-pill">
                  <TrendingUp size={15} />
                  <b>{selectedCase.metricNum}</b> {selectedCase.metricLabel}
                </span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedCase(null)}
                aria-label="Close Case Study"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <h2>{selectedCase.title}</h2>

              <div className="modal-hero-image">
                <img src={selectedCase.image} alt={selectedCase.title} />
              </div>

              {/* Architecture Stack */}
              <div className="modal-stack-section">
                <h4>Engineered Architecture Stack:</h4>
                <div className="modal-stack-chips">
                  {selectedCase.stack.map((t, idx) => (
                    <span key={idx} className="modal-stack-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge vs Solution Grid */}
              <div className="modal-two-col">
                <div className="modal-block challenge">
                  <div className="block-title">
                    <span className="dot red"></span>
                    <h3>The Enterprise Challenge</h3>
                  </div>
                  <p>{selectedCase.problem}</p>
                </div>

                <div className="modal-block solution">
                  <div className="block-title">
                    <span className="dot green"></span>
                    <h3>The KDI Architecture Solution</h3>
                  </div>
                  <p>{selectedCase.solution}</p>
                </div>
              </div>

              {/* Measurable Verified Outcomes */}
              <div className="modal-block impact">
                <div className="block-title">
                  <span className="dot blue"></span>
                  <h3>Quantifiable Business Outcomes &amp; ROI</h3>
                </div>
                <p>{selectedCase.fullStory}</p>
              </div>

              {/* Bottom Modal CTA */}
              <div className="modal-footer-cta">
                <p>Ready to deploy a similar architecture for your organization?</p>
                <Link href="/contact" className="modal-cta-btn">
                  <span>Schedule Architecture Consultation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          EXACT CSS STYLING MATCHING TEAM COMPUTERS CASE STUDY SYSTEM
          ========================================================================= */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .tc-casestudy-root {
          background-color: #000000 !important;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        .tc-casestudy-root * {
          box-sizing: border-box;
        }

        .tc-casestudy-root .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* -------------------------------------------------------------
           1. HERO BANNER: (.case-study-banner-outer)
           ------------------------------------------------------------- */
        .tc-casestudy-root .case-study-banner-outer {
          padding: 160px 0 75px;
          text-align: center;
          background: #000000;
          position: relative;
        }

        .tc-casestudy-root .case-study-main {
          max-width: 960px;
          margin: 0 auto;
        }

        .tc-casestudy-root .case-study-main h1 {
          font-size: clamp(55px, 8.5vw, 130px);
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          line-height: 98%;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .tc-casestudy-root .case-study-main h3 {
          font-size: clamp(24px, 3vw, 38px);
          color: #ffffff;
          font-weight: 600;
          line-height: 1.35;
          margin: 0 0 18px 0;
          font-family: 'Montserrat', sans-serif;
        }

        .tc-casestudy-root .case-study-main p {
          color: #a1a1aa;
          font-size: 18px;
          line-height: 27px;
          max-width: 780px;
          margin: 0 auto;
        }

        /* -------------------------------------------------------------
           2. IMPACT NUMBERS BAR
           ------------------------------------------------------------- */
        .tc-casestudy-root .case-study-metrics-bar {
          padding: 10px 0 35px;
          position: relative;
        }

        .tc-casestudy-root .metrics-container-card {
          background: linear-gradient(180deg, rgba(16, 22, 38, 0.75) 0%, rgba(9, 13, 24, 0.9) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 32px 28px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .tc-casestudy-root .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: center;
        }

        .tc-casestudy-root .metric-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0 12px;
        }

        .tc-casestudy-root .metric-col:last-child {
          border-right: none;
        }

        .tc-casestudy-root .metric-num {
          font-size: clamp(32px, 3.2vw, 44px);
          font-weight: 800;
          font-family: 'Montserrat', sans-serif;
          background: linear-gradient(91.06deg, #00F7FF 0%, #08B066 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
          letter-spacing: -0.5px;
        }

        .tc-casestudy-root .metric-txt {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 767px) {
          .tc-casestudy-root .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .tc-casestudy-root .metric-col:nth-child(2) {
            border-right: none;
          }
        }

        /* -------------------------------------------------------------
           3. CASE STUDY LISTING SECTION: (.case-study-listing-outer)
           ------------------------------------------------------------- */
        .tc-casestudy-root .case-study-listing-outer {
          padding: 45px 0 90px;
          position: relative;
        }

        /* Filter Tabs */
        .tc-casestudy-root .filter-tabs-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
        }

        .tc-casestudy-root .filter-tabs {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          background: rgba(14, 19, 32, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 60px;
          padding: 8px 12px;
          backdrop-filter: blur(14px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .tc-casestudy-root .filter-tabs .tab {
          background: transparent;
          border: 1px solid transparent;
          color: #94a3b8;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Montserrat', sans-serif;
          white-space: nowrap;
        }

        .tc-casestudy-root .filter-tabs .tab:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-1px);
        }

        .tc-casestudy-root .filter-tabs .tab.active {
          background: linear-gradient(90.21deg, #00C8FF 10.33%, #0089C4 87.54%);
          color: #ffffff;
          border-color: rgba(0, 247, 255, 0.3);
          box-shadow: 0 4px 18px rgba(0, 200, 255, 0.35);
          font-weight: 700;
        }

        /* Case Study Cards (Elevated Glassmorphism Cards) */
        .tc-casestudy-root .case-study-listing-main {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .tc-casestudy-root .content-card {
          background: linear-gradient(145deg, rgba(16, 22, 38, 0.72) 0%, rgba(9, 13, 24, 0.88) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 38px 42px;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(14px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tc-casestudy-root .content-card:hover {
          border-color: rgba(0, 247, 255, 0.28);
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.5), 0 0 35px rgba(0, 247, 255, 0.08);
          transform: translateY(-3px);
        }

        .tc-casestudy-root .content-card .card-details {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .tc-casestudy-root .content-card.row-reverse .card-details {
          flex-direction: row-reverse;
        }

        .tc-casestudy-root .card-text {
          width: 52%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .tc-casestudy-root .card-header-tags {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .tc-casestudy-root .card-label {
          display: inline-flex;
          align-items: center;
          background: rgba(0, 200, 255, 0.08);
          color: #00F7FF;
          padding: 6px 16px;
          font-size: 12px;
          border-radius: 30px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          border: 1px solid rgba(0, 247, 255, 0.25);
        }

        .tc-casestudy-root .card-metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #10B981;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 600;
        }

        .tc-casestudy-root .card-metric-pill b {
          color: #34D399;
          font-weight: 700;
        }

        .tc-casestudy-root .card-text h3 {
          font-size: clamp(24px, 2.4vw, 32px);
          margin: 0 0 14px 0;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.3px;
        }

        .tc-casestudy-root .card-text p {
          color: #94a3b8;
          font-size: 15px;
          line-height: 26px;
          margin: 0 0 22px 0;
        }

        .tc-casestudy-root .card-stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 26px;
        }

        .tc-casestudy-root .stack-chip {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 20px;
          transition: all 0.2s ease;
        }

        .tc-casestudy-root .stack-chip:hover {
          background: rgba(0, 247, 255, 0.08);
          border-color: rgba(0, 247, 255, 0.25);
          color: #00F7FF;
        }

        .tc-casestudy-root .know-more {
          align-self: flex-start;
          background: rgba(0, 247, 255, 0.08);
          border: 1px solid rgba(0, 247, 255, 0.28);
          color: #00F7FF;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          padding: 10px 24px;
          border-radius: 40px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tc-casestudy-root .know-more:hover {
          background: linear-gradient(90.21deg, #00C8FF 10.33%, #0089C4 87.54%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(0, 200, 255, 0.35);
          transform: translateX(3px);
        }

        .tc-casestudy-root .know-more svg {
          transition: transform 0.3s ease;
        }

        .tc-casestudy-root .know-more:hover svg {
          transform: translateX(4px);
        }

        /* Image Box (Photo-realistic Showcase Frame) */
        .tc-casestudy-root .card-img {
          width: 48%;
          border-radius: 18px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.08);
          height: 380px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }

        .tc-casestudy-root .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
        }

        .tc-casestudy-root .card-img:hover img {
          transform: scale(1.05);
        }

        .tc-casestudy-root .card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.8) 100%);
          display: flex;
          align-items: flex-end;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tc-casestudy-root .card-img:hover .card-img-overlay {
          opacity: 1;
        }

        .tc-casestudy-root .card-img-overlay span {
          background: rgba(0, 137, 196, 0.9);
          color: #ffffff;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 960px) {
          .tc-casestudy-root .content-card {
            padding: 28px 24px;
          }
          .tc-casestudy-root .content-card .card-details,
          .tc-casestudy-root .content-card.row-reverse .card-details {
            flex-direction: column;
            gap: 28px;
          }
          .tc-casestudy-root .card-text,
          .tc-casestudy-root .card-img {
            width: 100%;
          }
          .tc-casestudy-root .card-img {
            height: 280px;
          }
        }

        /* Load More / Bottom CTA */
        .tc-casestudy-root .loader-btn {
          text-align: center;
          padding-top: 50px;
        }

        .tc-casestudy-root .learn-more {
          background: linear-gradient(93.05deg, #00C8FF 0%, #08B066 100%);
          padding: 16px 44px;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.35s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(0, 200, 255, 0.3), 0 2px 6px rgba(8, 176, 102, 0.2);
        }

        .tc-casestudy-root .learn-more:hover {
          background: linear-gradient(93.05deg, #08B066 0%, #00C8FF 100%);
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(8, 176, 102, 0.35), 0 4px 12px rgba(0, 200, 255, 0.25);
        }

        .tc-casestudy-root .learn-more svg {
          transition: transform 0.3s ease;
        }

        .tc-casestudy-root .learn-more:hover svg {
          transform: translateX(5px);
        }

        /* -------------------------------------------------------------
           4. MODAL DIALOG
           ------------------------------------------------------------- */
        .tc-casestudy-root .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(8px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .tc-casestudy-root .modal-container {
          background: #0d0d12;
          border: 1px solid rgba(255, 250, 101, 0.2);
          border-radius: 22px;
          max-width: 860px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tc-casestudy-root .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 30px;
          border-bottom: 1px solid #1a1a24;
          position: sticky;
          top: 0;
          background: #0d0d12;
          z-index: 10;
        }

        .tc-casestudy-root .modal-tag-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tc-casestudy-root .modal-tag {
          background: rgba(255, 250, 101, 0.1);
          color: #fffa65;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid rgba(255, 250, 101, 0.3);
        }

        .tc-casestudy-root .modal-roi-pill {
          background: rgba(29, 202, 246, 0.12);
          color: #00F7FF;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .tc-casestudy-root .modal-close-btn {
          background: #1a1a24;
          border: none;
          color: #94a3b8;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tc-casestudy-root .modal-close-btn:hover {
          background: #ff5e7e;
          color: #ffffff;
        }

        .tc-casestudy-root .modal-body {
          padding: 30px;
        }

        .tc-casestudy-root .modal-body h2 {
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 20px 0;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
        }

        .tc-casestudy-root .modal-hero-image {
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 25px;
          max-height: 320px;
        }

        .tc-casestudy-root .modal-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .tc-casestudy-root .modal-stack-section {
          margin-bottom: 25px;
        }

        .tc-casestudy-root .modal-stack-section h4 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #fffa65;
          margin: 0 0 10px 0;
        }

        .tc-casestudy-root .modal-stack-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tc-casestudy-root .modal-stack-chip {
          background: #181822;
          border: 1px solid #2e2e3e;
          color: #e2e8f0;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .tc-casestudy-root .modal-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        @media (max-width: 767px) {
          .tc-casestudy-root .modal-two-col {
            grid-template-columns: 1fr;
          }
        }

        .tc-casestudy-root .modal-block {
          background: #13131c;
          border: 1px solid #222230;
          border-radius: 14px;
          padding: 22px;
        }

        .tc-casestudy-root .modal-block.impact {
          border-color: rgba(29, 202, 246, 0.3);
          background: rgba(29, 202, 246, 0.04);
          margin-bottom: 30px;
        }

        .tc-casestudy-root .block-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .tc-casestudy-root .block-title .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .tc-casestudy-root .block-title .dot.red {
          background: #ff5e7e;
          box-shadow: 0 0 8px #ff5e7e;
        }

        .tc-casestudy-root .block-title .dot.green {
          background: #0db16a;
          box-shadow: 0 0 8px #0db16a;
        }

        .tc-casestudy-root .block-title .dot.blue {
          background: #00F7FF;
          box-shadow: 0 0 8px #00F7FF;
        }

        .tc-casestudy-root .block-title h3 {
          font-size: 17px;
          font-weight: 700;
          margin: 0;
          color: #ffffff;
        }

        .tc-casestudy-root .modal-block p {
          font-size: 15px;
          line-height: 24px;
          color: #cbd5e1;
          margin: 0;
        }

        .tc-casestudy-root .modal-footer-cta {
          text-align: center;
          padding-top: 10px;
          border-top: 1px solid #1a1a24;
        }

        .tc-casestudy-root .modal-footer-cta p {
          font-size: 15px;
          color: #94a3b8;
          margin-bottom: 16px;
        }

        .tc-casestudy-root .modal-cta-btn {
          background: linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%);
          color: #ffffff;
          padding: 12px 34px;
          border-radius: 40px;
          font-size: 15px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .tc-casestudy-root .modal-cta-btn:hover {
          background: linear-gradient(93.05deg, #0DB16A -14.26%, #1EC9F2 85.74%);
          transform: translateY(-2px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `,
        }}
      />
    </div>
  );
}
