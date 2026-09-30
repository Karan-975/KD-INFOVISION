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
  Layers,
  ArrowRight,
  Database,
  Cpu,
  BarChart3,
  Server,
  Lock,
  Zap,
  Globe,
  Radio,
  FileCheck,
} from 'lucide-react';

export default function TeamComputersIndustriesView({
  settings,
  industries = [],
}) {
  const [selectedIndustryId, setSelectedIndustryId] = useState('bfsi');

  // Enterprise Industry Domain Data
  const industryDomains = [
    {
      id: 'bfsi',
      name: 'BFSI & FinTech',
      categoryBadge: 'FINANCIAL SERVICES & NBFC',
      tagline: 'Zero-Latency Financial Streaming & Regulatory Ledger Lakehouses',
      metricPill: '85ms Anomaly SLA',
      metricSub: '$4.2M Fraud Prevented Annually',
      icon: Landmark,
      svgIcon: '/images/industry/Anti-Money-Laundering.svg',
      bannerBadge: 'SECURITY & COMPLIANCE FOR RISK-FREE BANKING',
      overview:
        'Architecting event-driven lakehouses and AI anomaly detection for tier-1 commercial banks, NBFCs, and fintech payment gateways handling tens of millions of daily financial transactions.',
      pillars: [
        {
          title: 'Real-Time Fraud & Anomaly Scoring',
          desc: 'Kafka streaming ingestion with Databricks ML models, executing sub-second credit risk and unauthorized payment scoring.',
          icon: '/images/industry/Anti-Money-Laundering.svg',
          stack: ['Snowflake', 'Apache Kafka', 'Python ML', 'Azure AKS'],
        },
        {
          title: 'Core Banking Lakehouse & FinOps',
          desc: 'Unified multi-cluster data architecture unifying core banking ledgers, ATM telemetry, and automated financial reconciliations.',
          icon: '/images/industry/Digital-Command-Centre-1.svg',
          stack: ['Databricks', 'dbt', 'Power BI', 'SQL Server'],
        },
        {
          title: 'Regulatory & Audit Compliance',
          desc: 'Automated reporting pipelines meeting RBI Master Directions, SEBI guidelines, SOC2 Type II, and zero-trust data sovereignty.',
          icon: '/images/industry/Govt.-Compliances-1.svg',
          stack: ['Zero-Trust IAM', 'Data Masking', 'Audit Trails', 'PCI-DSS'],
        },
      ],
      kpis: [
        { num: '85ms', label: 'Fraud Detection SLA' },
        { num: '$4.2M', label: 'Annual Losses Prevented' },
        { num: '10M+', label: 'Daily Ingested Transactions' },
        { num: '100%', label: 'RBI & SOC2 Audit Compliance' },
      ],
      complianceTags: ['RBI Master Directions', 'SEBI Guidelines', 'SOC 2 Type II', 'PCI-DSS Level 1', 'ISO 27001'],
      caseStudyLink: '/case-studies',
      caseStudyTitle: 'Real-Time Fraud Detection & Enterprise Streaming Lakehouse',
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Smart OT',
      categoryBadge: 'INDUSTRY 4.0 & SMART FACTORIES',
      tagline: 'Connected Factory Floors, SCADA Telemetry & Autonomous Digital Twins',
      metricPill: '+24% OEE Boost',
      metricSub: 'Zero Unplanned Downtime Across Plants',
      icon: Factory,
      svgIcon: '/images/industry/MANUFACTURING.svg',
      bannerBadge: 'CONNECTED SHOP FLOORS & PREDICTIVE MAINTENANCE',
      overview:
        'Bridging the physical and digital divide with shop-floor IIoT telemetry, SCADA edge ingestion, and automated predictive maintenance engines for industrial manufacturers and automotive OEM suppliers.',
      pillars: [
        {
          title: 'Shop-Floor IIoT & Telemetry Streaming',
          desc: 'High-throughput MQTT and OPC-UA ingestion pipelines streaming real-time sensor data from machinery, CNC units, and assembly lines.',
          icon: '/images/industry/IoT-for-Smart-Manufacturing.svg',
          stack: ['AWS IoT Core', 'MQTT / OPC-UA', 'TimescaleDB', 'Docker Edge'],
        },
        {
          title: 'Predictive Asset Maintenance & Digital Twins',
          desc: 'ML anomaly detection on thermal and vibration telemetry, predicting bearing and motor failures 72 hours before catastrophic breakdown.',
          icon: '/images/industry/AI-for-Predictive-Maintenance.svg',
          stack: ['Python ML', 'Tableau', 'Airflow', 'TimescaleDB'],
        },
        {
          title: 'High-Availability Data Centers & OT Defense',
          desc: 'Resilient on-premise and hybrid cloud edge nodes isolating operational technology networks from corporate cyber threat vectors.',
          icon: '/images/industry/High-Availability-Data-Centers.svg',
          stack: ['SCADA Firewalls', 'IEC 62443', 'Hybrid Edge', 'OT Observability'],
        },
      ],
      kpis: [
        { num: '+24%', label: 'OEE Operational Boost' },
        { num: '-42%', label: 'Unplanned Machine Downtime' },
        { num: '350+', label: 'Connected Production Nodes' },
        { num: '72hr', label: 'Predictive Failure Warning' },
      ],
      complianceTags: ['IEC 62443 (OT Security)', 'ISO 9001:2015', 'ISO 27001', 'OEE Industry Standard'],
      caseStudyLink: '/case-studies',
      caseStudyTitle: 'IoT Sensor Telemetry Pipeline & Real-Time Logistics Routing Cockpit',
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      categoryBadge: 'CLINICAL INTELLIGENCE & HIPAA',
      tagline: 'HIPAA-Governed Sovereign AI, Clinical Data Lakes & Trial Acceleration',
      metricPill: '85% Faster Review',
      metricSub: '99.4% Citation Precision in Sovereign RAG',
      icon: HeartPulse,
      svgIcon: '/images/industry/Secure-Edge-Computing.svg',
      bannerBadge: 'SOVEREIGN RAG & HIPAA-COMPLIANT CLINICAL TELEMETRY',
      overview:
        'Empowering healthcare systems, hospital networks, and pharmaceutical researchers with sovereign AI architectures, automated clinical document comprehension, and patient-first privacy governance.',
      pillars: [
        {
          title: 'HIPAA-Compliant Sovereign RAG Assistants',
          desc: 'Secure vector databases and localized LLMs extracting diagnostic criteria from unstructured medical histories with deterministic citation verification.',
          icon: '/images/industry/Secure-Edge-Computing.svg',
          stack: ['Azure OpenAI', 'LangChain', 'PostgreSQL pgvector', 'FastAPI'],
        },
        {
          title: 'Clinical Trial Data Lake & Telemetry',
          desc: 'High-speed automated ingestion of diagnostic lab reports, HL7/FHIR feeds, and patient qualification signals across multi-site clinical trials.',
          icon: '/images/industry/Real-Time-Analytics.svg',
          stack: ['FHIR / HL7 Feeds', 'Databricks', 'Delta Lake', 'dbt'],
        },
        {
          title: 'Zero-Trust Patient Data Governance',
          desc: 'Cryptographic pseudonymization, role-based tenant access, and automated compliance verification meeting stringent HIPAA and FDA standards.',
          icon: '/images/industry/Regulatory-Compliance.svg',
          stack: ['Data De-Identification', 'Audit Trails', 'HIPAA Shield', 'GxP'],
        },
      ],
      kpis: [
        { num: '85%', label: 'Clinical Review Turnaround' },
        { num: '99.4%', label: 'Citation Accuracy' },
        { num: '25M+', label: 'Protected Clinical Records' },
        { num: '100%', label: 'HIPAA & FDA 21 CFR Compliance' },
      ],
      complianceTags: ['HIPAA HITECH', 'FDA 21 CFR Part 11', 'GxP Validation', 'SOC 2 Type II', 'ISO 27701'],
      caseStudyLink: '/case-studies',
      caseStudyTitle: 'HIPAA-Compliant Intelligent Clinical Document Processing & Sovereign RAG',
    },
    {
      id: 'retail',
      name: 'Retail & E-Commerce',
      categoryBadge: 'OMNICHANNEL & DEMAND ANALYTICS',
      tagline: 'Unified Customer 360, Predictive Replenishment & Dynamic Pricing',
      metricPill: '3.2× Forecast Precision',
      metricSub: '-34% Regional Stockouts Across 200+ DCs',
      icon: ShoppingBag,
      svgIcon: '/images/industry/Real-Time-Analytics.svg',
      bannerBadge: 'PREDICTIVE MERCHANDISING & OMNICHANNEL COMMERCE',
      overview:
        'Unifying disjointed ERP, POS, and digital storefront silos into high-performance semantic layers that empower retail executives with real-time replenishment schedules and dynamic pricing.',
      pillars: [
        {
          title: 'Unified Customer 360 Semantic Layer',
          desc: 'Consolidating 14+ fragmented ERP, POS, and CRM databases into an executive Power BI semantic layer and automated medallion lakehouse.',
          icon: '/images/industry/Real-time-Dashboards-Analytics-1.svg',
          stack: ['Power BI', 'Azure Synapse', 'dbt', 'Databricks'],
        },
        {
          title: 'Predictive Demand Forecasting Engine',
          desc: 'Automated machine learning pipelines predicting SKU-level regional demand, optimizing warehouse inventory levels and reordering lead times.',
          icon: '/images/industry/Claims-Forecasting.svg',
          stack: ['Python ML', 'Databricks', 'Azure ML', 'SQL'],
        },
        {
          title: 'Real-Time Cart Telemetry & Personalization',
          desc: 'Streaming event pipelines delivering instant product recommendation signals and dynamic conversion optimization at peak traffic scale.',
          icon: '/images/industry/Real-Time-Analytics.svg',
          stack: ['Kafka', 'Redis', 'Node.js', 'Next.js'],
        },
      ],
      kpis: [
        { num: '3.2×', label: 'Forecast Accuracy Improvement' },
        { num: '-34%', label: 'Warehouse Stockouts' },
        { num: '+22%', label: 'Inventory GMV Turnover' },
        { num: '200+', label: 'Optimized Distribution Centers' },
      ],
      complianceTags: ['PCI-DSS Level 1', 'DPDP Act 2023', 'GDPR', 'SOC 2 Type II', 'ISO 27001'],
      caseStudyLink: '/case-studies',
      caseStudyTitle: 'Unified Customer 360 & Predictive Demand Forecasting Engine',
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      categoryBadge: 'FLEET TELEMETRY & COLD-CHAIN',
      tagline: 'Cold-Chain Telemetry, Multi-Modal Route Optimization & Real-Time Tracking',
      metricPill: '99.98% Cold-Chain SLA',
      metricSub: '-40% Multi-Modal Transit Delay Penalties',
      icon: Truck,
      svgIcon: '/images/industry/IoT-for-Smart-Manufacturing.svg',
      bannerBadge: 'FLEET TELEMETRY & SUB-MINUTE ROUTE COCKPITS',
      overview:
        'Deploying serverless IoT telemetry and executive tracking cockpits for pharmaceutical cold-chain carriers, freight forwarders, and multimodal logistics corridors.',
      pillars: [
        {
          title: 'Real-Time Cold-Chain Telemetry Ingestion',
          desc: 'Serverless IoT event pipelines ingesting live temperature, vibration, and location pings from reefer containers and freight transit vehicles.',
          icon: '/images/industry/IoT-for-Smart-Manufacturing.svg',
          stack: ['AWS IoT Core', 'Apache Airflow', 'TimescaleDB', 'Lambda'],
        },
        {
          title: 'Dynamic Multi-Modal Route Optimization',
          desc: 'Automated deviation alerts and predictive arrival time engines calculating dynamic transit alternatives during weather or border bottlenecks.',
          icon: '/images/industry/Digital-Command-Centre-1.svg',
          stack: ['GIS Telemetry', 'PostGIS', 'Tableau', 'Kafka'],
        },
        {
          title: 'Cross-Docking & Yard Management Cockpit',
          desc: 'Centralized live dashboards providing yard operators and logistics managers complete transparency over container turnaround and SLA status.',
          icon: '/images/industry/High-Availability-Data-Centers.svg',
          stack: ['Tableau', 'Airflow', 'AWS S3', 'PostgreSQL'],
        },
      ],
      kpis: [
        { num: '99.98%', label: 'Cold-Chain SLA Compliance' },
        { num: '-40%', label: 'Transit Delay Penalties' },
        { num: '$1.8M', label: 'Perishable Waste Prevented' },
        { num: '<60s', label: 'Live Telemetry Latency' },
      ],
      complianceTags: ['GxP Cold-Chain', 'TAPA Security', 'ISO 28000', 'DOT Logistics Compliance'],
      caseStudyLink: '/case-studies',
      caseStudyTitle: 'IoT Sensor Telemetry Pipeline & Real-Time Logistics Routing Cockpit',
    },
    {
      id: 'cloud-gcc',
      name: 'Cloud & High-Tech GCCs',
      categoryBadge: 'GLOBAL CAPABILITY CENTRES & ENTERPRISE TECH',
      tagline: 'Sovereign Cloud Migration, Autonomous Multi-Agent AI & FinOps Control',
      metricPill: '-55% Cloud Spend',
      metricSub: '90% Routine BI Query Automation',
      icon: Building2,
      svgIcon: '/images/industry/High-Availability-Data-Centers.svg',
      bannerBadge: 'AUTONOMOUS MULTI-AGENT AI & ENTERPRISE FINOPS',
      overview:
        'Modernizing global technology centers, SaaS providers, and corporate GCCs with petabyte-scale cloud lakehouses, automated FinOps cost governance, and collaborative GenAI agents.',
      pillars: [
        {
          title: 'Autonomous Multi-Agent Decision Copilots',
          desc: 'LangGraph-based supervisor agent networks generating SQL queries, validating data schemas, and rendering automated charts from lakehouse tables.',
          icon: '/images/industry/Digital-Command-Centre-1.svg',
          stack: ['LangGraph', 'LlamaIndex', 'Python', 'OpenAI', 'Redis'],
        },
        {
          title: 'Petabyte Legacy Warehouse Modernization',
          desc: 'Migrating legacy on-premise relational data warehouses into distributed, serverless Snowflake and Databricks lakehouses with automated CI/CD.',
          icon: '/images/industry/High-Availability-Data-Centers.svg',
          stack: ['Snowflake', 'AWS Glue', 'Terraform', 'Airflow'],
        },
        {
          title: 'Enterprise FinOps & Cloud Observability',
          desc: 'Continuous cloud infrastructure cost optimization policies, auto-suspending idle clusters and lowering annual compute expenditure by 55%.',
          icon: '/images/industry/Real-time-Dashboards-Analytics-1.svg',
          stack: ['FinOps Guardrails', 'Datadog', 'Terraform', 'Prometheus'],
        },
      ],
      kpis: [
        { num: '-55%', label: 'Cloud Compute Spend' },
        { num: '90%', label: 'Query Automation Rate' },
        { num: '1.4 PB', label: 'Data Migrated Without Loss' },
        { num: '<3s', label: 'Agentic Decision Latency' },
      ],
      complianceTags: ['SOC 2 Type II', 'ISO 27001 / 27701', 'CSA Star Level 2', 'GDPR', 'HIPAA'],
      caseStudyLink: '/case-studies',
      caseStudyTitle: 'Autonomous Multi-Agent Copilot for Enterprise Decision Intelligence',
    },
  ];

  const currentDomain =
    industryDomains.find((d) => d.id === selectedIndustryId) || industryDomains[0];

  return (
    <div className="tc-industry-root">
      {/* =========================================================================
          1. HERO BANNER: (.industry-banner-outer)
          Matching Team Computers Industry Header with High-Contrast Gradient H1
          ========================================================================= */}
      <section
        className="industry-banner-outer"
        style={{
          background: "url('/images/industry-domain-bg.webp') no-repeat center top",
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="industry-main wow fadeInUp">
            <span className="industry-eyebrow">
              ENGINEERED ENTERPRISE VERTICALS
            </span>

            <h1
              style={{
                background: 'linear-gradient(259.44deg, #CFA3FF 25.03%, #EE7AE2 90.57%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Redefining Industries
            </h1>

            <h3>with Domain-Engineered Digital Precision</h3>

            <p>
              Purpose-built telemetry, sovereign AI, and high-throughput data architectures tailored to meet rigorous regulatory standards across critical global sectors.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DOMAIN IMPACT TICKER: High-Scale Metrics Across Verticals
          ========================================================================= */}
      <div className="industry-metrics-bar">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-col">
              <span className="metric-num">$14B+</span>
              <span className="metric-txt">Capital Assets Governed</span>
            </div>
            <div className="metric-col">
              <span className="metric-num">350+</span>
              <span className="metric-txt">Intelligent Plants &amp; DCs</span>
            </div>
            <div className="metric-col">
              <span className="metric-num">25M+</span>
              <span className="metric-txt">Clinical Records Secured</span>
            </div>
            <div className="metric-col">
              <span className="metric-num">99.99%</span>
              <span className="metric-txt">OT Telemetry Uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. DUAL-ZONE INTERACTIVE INDUSTRY CONSOLE: (.industry-console-outer)
          Unique architecture distinct from services 4-column cards and about us timeline!
          Left: Vertical Sector Selector Rail (32%)
          Right: Active Domain Architecture Cockpit (68%)
          ========================================================================= */}
      <section className="industry-console-outer">
        <div className="container">
          <div className="console-header text-center wow fadeInUp">
            <span className="sub-title">DEEP VERTICAL SPECIALIZATION</span>
            <h2>The Enterprise Domain Transformation Hub</h2>
            <p>
              Select an industry vertical below to explore its mission-critical challenges, engineered architectural pillars, verified KPIs, and compliance certifications.
            </p>
          </div>

          <div className="console-split-grid">
            {/* LEFT ZONE: Master Vertical Selector Rail */}
            <div className="sector-rail-column">
              <div className="rail-sticky-wrapper">
                <span className="rail-heading">SELECT INDUSTRY PRACTICE</span>
                <div className="sector-buttons-list" role="tablist">
                  {industryDomains.map((domain) => {
                    const isSelected = domain.id === currentDomain.id;
                    const IconComp = domain.icon;
                    return (
                      <button
                        key={domain.id}
                        className={`sector-nav-card ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedIndustryId(domain.id)}
                        role="tab"
                        aria-selected={isSelected}
                      >
                        <div className="sector-card-left">
                          <div className="sector-icon-wrap">
                            <IconComp size={22} />
                          </div>
                          <div className="sector-card-info">
                            <h4>{domain.name}</h4>
                            <span className="sector-sub-label">{domain.metricPill}</span>
                          </div>
                        </div>

                        <div className="sector-card-indicator">
                          <ArrowRight size={16} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT ZONE: Active Domain Architecture Cockpit */}
            <div className="sector-cockpit-column">
              <div className="cockpit-card wow fadeIn">
                {/* Cockpit Top Bar */}
                <div className="cockpit-top-bar">
                  <div className="domain-badge-group">
                    <span className="domain-category-pill">{currentDomain.categoryBadge}</span>
                    <span className="domain-sla-pill">
                      <TrendingUp size={14} />
                      <b>{currentDomain.metricPill}</b>
                    </span>
                  </div>

                  <span className="domain-secondary-note">{currentDomain.metricSub}</span>
                </div>

                {/* Cockpit Title & Overview */}
                <div className="cockpit-heading-block">
                  <h2>{currentDomain.name}</h2>
                  <h3 className="cockpit-tagline">{currentDomain.tagline}</h3>
                  <p className="cockpit-overview">{currentDomain.overview}</p>
                </div>

                {/* 3 Core Architecture Pillars (Grid of 3 Boxes) */}
                <div className="cockpit-pillars-section">
                  <h4 className="pillars-section-title">
                    Engineered Solution Pillars &amp; Core Architectures:
                  </h4>

                  <div className="pillars-grid">
                    {currentDomain.pillars.map((pillar, pIdx) => (
                      <div key={pIdx} className="pillar-box">
                        <div className="pillar-icon-box">
                          <img src={pillar.icon} alt={pillar.title} />
                        </div>
                        <h5>{pillar.title}</h5>
                        <p>{pillar.desc}</p>
                        <div className="pillar-stack-chips">
                          {pillar.stack.map((stk, sIdx) => (
                            <span key={sIdx} className="mini-chip">
                              {stk}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantifiable Domain Impact KPIs */}
                <div className="cockpit-kpis-strip">
                  {currentDomain.kpis.map((kpi, kIdx) => (
                    <div key={kIdx} className="cockpit-kpi-item">
                      <span className="kpi-big-num">{kpi.num}</span>
                      <span className="kpi-small-label">{kpi.label}</span>
                    </div>
                  ))}
                </div>

                {/* Regulatory Standards & Certification Strip */}
                <div className="cockpit-compliance-row">
                  <div className="compliance-label">
                    <ShieldCheck size={18} color="#00F7FF" />
                    <span>Regulatory &amp; Security Standards:</span>
                  </div>
                  <div className="compliance-tags-list">
                    {currentDomain.complianceTags.map((tag, tIdx) => (
                      <span key={tIdx} className="compliance-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Cockpit Action Bar */}
                <div className="cockpit-bottom-actions">
                  <div className="associated-case-study">
                    <span className="cs-label">Verified Case Study:</span>
                    <Link href={currentDomain.caseStudyLink} className="cs-link">
                      <span>{currentDomain.caseStudyTitle}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <Link href="/contact" className="learn-more">
                    <span>Consult {currentDomain.name} Architect</span>
                    <img src="/images/learn-more-arrow.svg" alt="arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. THE 6-SECTOR INDUSTRY REACH MATRIX: (.industry-reach)
          Matching Team Computers .industry-reach class with 32px-40px rounded cards
          ========================================================================= */}
      <section className="industry-reach">
        <div className="container">
          <div className="head text-center wow fadeInUp">
            <span className="sub-title">CROSS-SECTOR DOMAIN FOOTPRINT</span>
            <h2>Industry Reach</h2>
            <p>
              Proven architectural implementations powering modern enterprises across global financial, industrial, healthcare, and retail sectors.
            </p>
          </div>

          <ul className="industry-reach-grid">
            {industryDomains.map((ind) => {
              const IconComp = ind.icon;
              return (
                <li
                  key={ind.id}
                  className="industry-reach-card wow fadeInUp"
                  onClick={() => {
                    setSelectedIndustryId(ind.id);
                    const el = document.querySelector('.industry-console-outer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="industry-bx">
                    <figure>
                      <span className="industry-icon-span">
                        <img src={ind.svgIcon} alt={ind.name} />
                      </span>
                      <figcaption>
                        <span className="industry-name">{ind.name}</span>
                      </figcaption>
                    </figure>

                    <p className="industry-card-desc">{ind.tagline}</p>

                    <div className="industry-card-footer">
                      <span className="card-kpi-chip">{ind.metricPill}</span>
                      <span className="explore-indicator">
                        <span>Explore Domain</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* =========================================================================
          5. ENTERPRISE SECURITY & REGULATORY COMPLIANCE VAULT: (.secure-compliant-outer)
          Authentic Team Computers background 'secure-compliant-bg.webp'
          ========================================================================= */}
      <section
        className="secure-compliant-outer"
        style={{
          background: "url('/images/secure-compliant-bg.webp') no-repeat center top",
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="secure-compliant-main">
            <div className="secure-compliant-left wow fadeInLeft">
              <div className="head">
                <span className="sub-title">ZERO-TRUST SECURITY &amp; COMPLIANCE</span>
                <h2>Zero Compromise on Sector Regulations &amp; Data Sovereignty</h2>
                <p>
                  Data security and regulatory compliance are non-negotiable in critical enterprise sectors. KD Infovision engineers strict defense-in-depth security into every data pipeline, AI model, and lakehouse deployment.
                </p>
              </div>

              <div className="compliance-features-list">
                <div className="compliance-feature-item">
                  <div className="feat-ico">
                    <CheckCircle2 size={20} color="#00F7FF" />
                  </div>
                  <div>
                    <h5>Audited Sovereignty &amp; Encryption</h5>
                    <p>FIPS 140-2 validated encryption at rest and in transit with localized data residency options.</p>
                  </div>
                </div>

                <div className="compliance-feature-item">
                  <div className="feat-ico">
                    <CheckCircle2 size={20} color="#00F7FF" />
                  </div>
                  <div>
                    <h5>Real-Time Regulatory Audit Telemetry</h5>
                    <p>Continuous automated audit logging for RBI Master Directions, HIPAA HITECH, and SOC 2 Type II.</p>
                  </div>
                </div>

                <div className="compliance-feature-item">
                  <div className="feat-ico">
                    <CheckCircle2 size={20} color="#00F7FF" />
                  </div>
                  <div>
                    <h5>Air-Gapped &amp; Isolated OT Defense</h5>
                    <p>Strict network segmentation separating industrial shop-floor SCADA networks from cloud infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="secure-compliant-right wow fadeInRight">
              <div className="security-badges-card">
                <div className="shield-icon-glow">
                  <Lock size={44} color="#00F7FF" />
                </div>
                <h3>Enterprise Compliance Matrix</h3>
                <p>All architectures adhere strictly to tier-1 standards:</p>
                <div className="badges-grid">
                  <span className="sec-badge">RBI Master Directions</span>
                  <span className="sec-badge">SEBI Guidelines</span>
                  <span className="sec-badge">HIPAA HITECH</span>
                  <span className="sec-badge">FDA 21 CFR Part 11</span>
                  <span className="sec-badge">SOC 2 Type II</span>
                  <span className="sec-badge">ISO 27001 / 27701</span>
                  <span className="sec-badge">PCI-DSS Level 1</span>
                  <span className="sec-badge">IEC 62443 (OT)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. ARCHITECTURE ADVISORY CTA: (.industry-cta-outer)
          ========================================================================= */}
      <section className="industry-cta-outer">
        <div className="container">
          <div className="cta-box text-center wow fadeInUp">
            <span className="sub-title">SPECIALIZED DOMAIN ADVISORY</span>
            <h2>Ready to Deploy an Industry-Grade Architecture?</h2>
            <p>
              Connect with KD Infovision's vertical practice directors to audit your existing telemetry pipelines, cloud spend, and compliance posture.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="learn-more">
                <span>Schedule Industry Architecture Consultation</span>
                <img src="/images/learn-more-arrow.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXACT CSS STYLING MATCHING TEAM COMPUTERS INDUSTRY DESIGN SYSTEM
          ========================================================================= */}
      <style jsx>{`
        /* Root container */
        .tc-industry-root {
          background: #000000;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* 1. HERO BANNER */
        .industry-banner-outer {
          padding: 180px 0 90px;
          min-height: 75vh;
          display: flex;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .industry-banner-outer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, rgba(207, 163, 255, 0.08) 0%, rgba(0, 0, 0, 0.85) 85%);
          pointer-events: none;
        }

        .industry-main {
          position: relative;
          z-index: 2;
          max-width: 960px;
          margin: 0 auto;
        }

        .industry-eyebrow {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #fffa65;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          background: rgba(255, 250, 101, 0.1);
          padding: 6px 18px;
          border-radius: 20px;
          border: 1px solid rgba(255, 250, 101, 0.25);
        }

        .industry-main h1 {
          font-size: clamp(2.8rem, 5.5vw, 5.2rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .industry-main h3 {
          font-size: clamp(1.4rem, 2.5vw, 2.4rem);
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .industry-main p {
          font-size: 1.15rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.75);
          max-width: 780px;
          margin: 0 auto;
        }

        /* 2. METRICS BAR */
        .industry-metrics-bar {
          background: #08080c;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.2rem 0;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .metric-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .metric-col:last-child {
          border-right: none;
        }

        .metric-num {
          font-size: clamp(2rem, 3.2vw, 2.8rem);
          font-weight: 800;
          background: linear-gradient(90.21deg, #00C8FF 10.33%, #00F7FF 87.54%);
          WebkitBackgroundClip: text;
          WebkitTextFillColor: transparent;
          line-height: 1.1;
        }

        .metric-txt {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        /* 3. DUAL-ZONE INTERACTIVE INDUSTRY CONSOLE */
        .industry-console-outer {
          padding: 6.5rem 0;
          background: #050508;
          position: relative;
        }

        .console-header {
          max-width: 800px;
          margin: 0 auto 4rem auto;
          text-align: center;
        }

        .sub-title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #fffa65;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .console-header h2 {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .console-header p {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.65);
        }

        .console-split-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 2.5rem;
          align-items: flex-start;
        }

        /* Left Sector Rail */
        .sector-rail-column {
          position: relative;
        }

        .rail-sticky-wrapper {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .rail-heading {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
          padding-left: 0.5rem;
        }

        .sector-buttons-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .sector-nav-card {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.25rem;
          background: #0d0d14;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          color: #ffffff;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: inherit;
        }

        .sector-nav-card:hover {
          background: #141420;
          border-color: rgba(0, 200, 255, 0.35);
          transform: translateX(4px);
        }

        .sector-nav-card.active {
          background: linear-gradient(135deg, rgba(8, 32, 93, 0.65) 0%, rgba(20, 50, 110, 0.65) 100%);
          border-color: #00F7FF;
          box-shadow: 0 8px 24px rgba(0, 200, 255, 0.15);
        }

        .sector-card-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .sector-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00C8FF;
          transition: all 0.3s ease;
        }

        .sector-nav-card.active .sector-icon-wrap {
          background: #0089C4;
          color: #ffffff;
        }

        .sector-card-info h4 {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
          line-height: 1.2;
        }

        .sector-sub-label {
          font-size: 11px;
          font-weight: 600;
          color: #fffa65;
          display: block;
        }

        .sector-card-indicator {
          color: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .sector-nav-card.active .sector-card-indicator {
          color: #00F7FF;
          transform: translateX(3px);
        }

        /* Right Cockpit Card */
        .cockpit-card {
          background: #08080f;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.75rem;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .cockpit-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .domain-badge-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .domain-category-pill {
          background: linear-gradient(91.29deg, rgba(8, 32, 93, 0.8) 50%, rgba(24, 71, 153, 0.8) 115%);
          color: #fffa65;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          border: 1px solid rgba(255, 250, 101, 0.25);
        }

        .domain-sla-pill {
          background: rgba(0, 200, 255, 0.12);
          border: 1px solid rgba(0, 200, 255, 0.35);
          color: #00F7FF;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .domain-secondary-note {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 500;
        }

        .cockpit-heading-block h2 {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }

        .cockpit-tagline {
          font-size: 1.2rem;
          font-weight: 600;
          background: linear-gradient(90.21deg, #00C8FF 10.33%, #00F7FF 87.54%);
          WebkitBackgroundClip: text;
          WebkitTextFillColor: transparent;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .cockpit-overview {
          font-size: 1.02rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 2rem;
        }

        /* Pillars Grid */
        .cockpit-pillars-section {
          margin-bottom: 2rem;
        }

        .pillars-section-title {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1.25rem;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .pillar-box {
          background: #0f0f18;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .pillar-box:hover {
          border-color: rgba(0, 200, 255, 0.35);
          transform: translateY(-3px);
          background: #141420;
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .pillar-icon-box img {
          max-width: 36px;
          max-height: 36px;
          filter: drop-shadow(0 2px 8px rgba(0, 200, 255, 0.3));
        }

        .pillar-box h5 {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin-bottom: 0.6rem;
        }

        .pillar-box p {
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 1rem;
        }

        .pillar-stack-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .mini-chip {
          background: #1a1a26;
          border: 1px solid #2a2a3c;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 12px;
        }

        /* KPIs Strip */
        .cockpit-kpis-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          background: rgba(0, 200, 255, 0.04);
          border: 1px solid rgba(0, 200, 255, 0.15);
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.75rem;
          text-align: center;
        }

        .cockpit-kpi-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .kpi-big-num {
          font-size: 1.75rem;
          font-weight: 800;
          color: #00F7FF;
        }

        .kpi-small-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Compliance Row */
        .cockpit-compliance-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .compliance-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
        }

        .compliance-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .compliance-tag {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 14px;
        }

        /* Bottom Actions */
        .cockpit-bottom-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .associated-case-study {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cs-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #fffa65;
        }

        .cs-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .cs-link:hover {
          color: #00F7FF;
          transform: translateX(3px);
        }

        /* 4. THE 6-SECTOR INDUSTRY REACH MATRIX */
        .industry-reach {
          padding: 90px 0;
          background: #0E081D;
          overflow: hidden;
          position: relative;
        }

        .industry-reach .head {
          max-width: 780px;
          margin: 0 auto 4rem auto;
          position: relative;
          z-index: 2;
        }

        .industry-reach .head h2 {
          color: #ffffff;
          font-size: clamp(2.4rem, 4vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .industry-reach .head p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .industry-reach-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          list-style: none;
          padding: 0;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .industry-reach-card {
          border-radius: 36px;
          background: #140d2a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.25rem 2rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .industry-reach-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 36px;
          background: radial-gradient(circle at 50% 0%, rgba(0, 200, 255, 0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .industry-reach-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 200, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .industry-reach-card:hover::before {
          opacity: 1;
        }

        .industry-bx {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .industry-reach-card figure {
          margin: 0 0 1.25rem 0;
        }

        .industry-icon-span {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 1rem;
        }

        .industry-icon-span img {
          max-width: 50px;
          max-height: 50px;
          filter: drop-shadow(0 4px 10px rgba(0, 200, 255, 0.25));
        }

        .industry-name {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          display: block;
        }

        .industry-card-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .industry-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .card-kpi-chip {
          background: rgba(0, 200, 255, 0.1);
          color: #00F7FF;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 12px;
          border: 1px solid rgba(0, 200, 255, 0.25);
        }

        .explore-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.2s ease;
        }

        .industry-reach-card:hover .explore-indicator {
          color: #fffa65;
          transform: translateX(4px);
        }

        /* 5. ENTERPRISE SECURITY & REGULATORY COMPLIANCE VAULT */
        .secure-compliant-outer {
          padding: 100px 0;
          position: relative;
        }

        .secure-compliant-outer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
        }

        .secure-compliant-main {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .secure-compliant-left .head h2 {
          font-size: clamp(2rem, 3.2vw, 2.9rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }

        .secure-compliant-left .head p {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 2.25rem;
        }

        .compliance-features-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .compliance-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .feat-ico {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(0, 200, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .compliance-feature-item h5 {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .compliance-feature-item p {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
        }

        .security-badges-card {
          background: #08080f;
          border: 1px solid rgba(0, 200, 255, 0.3);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
          text-align: center;
        }

        .shield-icon-glow {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem auto;
          background: rgba(0, 200, 255, 0.08);
          border: 1px solid rgba(0, 200, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(0, 200, 255, 0.2);
        }

        .security-badges-card h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .security-badges-card p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1.75rem;
        }

        .badges-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .sec-badge {
          background: #141420;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #00F7FF;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 16px;
        }

        /* 6. ARCHITECTURE ADVISORY CTA */
        .industry-cta-outer {
          padding: 100px 0;
          background: radial-gradient(circle at 50% 50%, #0d0822 0%, #000000 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cta-box {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-box h2 {
          font-size: clamp(2.2rem, 3.6vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }

        .cta-box p {
          font-size: 1.15rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2.5rem;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
        }

        /* Team Computers signature learn-more gradient button */
        .learn-more {
          background: linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%);
          padding: 14px 34px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #ffffff;
          border-radius: 40px;
          line-height: 19px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(30, 201, 242, 0.2);
        }

        .learn-more:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 201, 242, 0.35);
          filter: brightness(1.08);
        }

        .learn-more img {
          max-width: 17px;
          height: auto;
          transition: transform 0.3s ease;
        }

        .learn-more:hover img {
          transform: translateX(4px);
        }

        /* Responsive Styles */
        @media (max-width: 1100px) {
          .console-split-grid {
            grid-template-columns: 1fr;
          }

          .rail-sticky-wrapper {
            position: static;
          }

          .sector-buttons-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }

          .pillars-grid {
            grid-template-columns: 1fr;
          }

          .industry-reach-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .secure-compliant-main {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .sector-buttons-list {
            grid-template-columns: 1fr;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .metric-col {
            border-right: none;
            padding: 1rem 0;
          }

          .cockpit-card {
            padding: 1.75rem;
          }

          .cockpit-kpis-strip {
            grid-template-columns: repeat(2, 1fr);
          }

          .industry-reach-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
