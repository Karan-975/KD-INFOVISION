'use client';

import React, { useState } from 'react';
import {
  BrainCircuit,
  BarChart3,
  Code2,
  Compass,
  Layers,
  Database,
  Cloud,
  Activity,
  ArrowRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  LineChart,
  Eye,
  Bot,
  ShieldCheck,
  Cpu,
  Table,
  PieChart,
  Network,
  Zap,
  Lock,
  Workflow,
  Server,
  RefreshCw,
  GitBranch,
  Settings,
  HardDrive,
  Users,
  Clock,
  ExternalLink,
} from 'lucide-react';

// Icon mapper for dynamic services
const iconMap = {
  BrainCircuit,
  BarChart3,
  Code2,
  Compass,
  Layers,
  Database,
  Cloud,
  Activity,
};

// Rich capabilities matrix matching Algoscale layout pattern, mapped to KD Infovision services
const capabilitiesData = {
  'AI & Machine Learning': [
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      desc: 'Forecast market trends, customer behavior, and operational variables with custom-trained machine learning models.',
    },
    {
      icon: Sparkles,
      title: 'NLP & Generative AI',
      desc: 'Build enterprise LLM solutions, intelligent document processing, and contextual enterprise search pipelines.',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      desc: 'Automated visual inspection, defect detection, OCR, and real-time image and video intelligence.',
    },
    {
      icon: Bot,
      title: 'Conversational AI',
      desc: 'Custom enterprise AI agents and automated support workflows integrated directly with your internal data sources.',
    },
    {
      icon: ShieldCheck,
      title: 'Risk & Fraud Scoring',
      desc: 'Real-time anomaly detection and risk scoring engines that identify fraudulent activity before impact.',
    },
    {
      icon: Cpu,
      title: 'MLOps & Model Monitoring',
      desc: 'Automated CI/CD pipelines for machine learning, drift detection, and continuous model performance tuning.',
    },
  ],
  'Data Analytics & BI': [
    {
      icon: BarChart3,
      title: 'Power BI Solutions',
      desc: 'Enterprise Power BI report engineering, scalable DAX modeling, row-level security, and workspace governance.',
    },
    {
      icon: PieChart,
      title: 'Tableau Dashboards',
      desc: 'Interactive executive visualization platforms and exploratory dashboards designed for rapid business discovery.',
    },
    {
      icon: Table,
      title: 'Qlik Analytics',
      desc: 'Associative data models and multi-source Qlik Sense deployments that uncover hidden business relationships.',
    },
    {
      icon: LineChart,
      title: 'Executive KPI Portals',
      desc: 'Centralized C-suite dashboards aggregating real-time metrics across finance, operations, sales, and supply chain.',
    },
    {
      icon: Zap,
      title: 'Real-Time Streaming Analytics',
      desc: 'Live telemetry monitors and sub-second dashboards delivering actionable situational awareness.',
    },
    {
      icon: Network,
      title: 'Self-Service BI Enablement',
      desc: 'Curated semantic layers and governed data marts that empower business teams to build trusted reports.',
    },
  ],
  'Software Development': [
    {
      icon: Code2,
      title: 'Custom Web Applications',
      desc: 'Fast, scalable web platforms engineered with Next.js, React, and modern micro-frontend architectures.',
    },
    {
      icon: Network,
      title: 'Enterprise APIs & Microservices',
      desc: 'Secure REST and GraphQL API gateways with comprehensive rate limiting, documentation, and versioning.',
    },
    {
      icon: Layers,
      title: 'SaaS Platform Engineering',
      desc: 'Multi-tenant cloud architectures engineered for horizontal scale, recurring billing, and high concurrency.',
    },
    {
      icon: Server,
      title: 'Robust Backend Systems',
      desc: 'High-throughput backends built on Node.js, Python, and modern scalable database persistence layers.',
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      desc: 'Containerized services deployed via Docker and Kubernetes with automated zero-downtime rollouts.',
    },
    {
      icon: RefreshCw,
      title: 'Legacy Modernization',
      desc: 'Refactoring fragile legacy monoliths into clean, maintainable, and decoupled modern services.',
    },
  ],
  'IT Consulting': [
    {
      icon: Compass,
      title: 'Technology Strategy & Advisory',
      desc: 'Aligning software and data architectures with concrete, measurable quarterly business milestones.',
    },
    {
      icon: ShieldCheck,
      title: 'Architecture & Security Audits',
      desc: 'Comprehensive code, infrastructure, and security assessments to eliminate technical debt and risk.',
    },
    {
      icon: Settings,
      title: 'Vendor & Stack Evaluation',
      desc: 'Unbiased evaluation and benchmarking of enterprise software tools, platforms, and third-party vendors.',
    },
    {
      icon: GitBranch,
      title: 'Digital Roadmap Planning',
      desc: 'Phased, prioritized modernization roadmaps from proof-of-concept to enterprise-wide rollout.',
    },
    {
      icon: Zap,
      title: 'Cost & License Optimization',
      desc: 'Rationalizing software licenses and cloud architectures to significantly reduce recurring operating costs.',
    },
    {
      icon: Lock,
      title: 'Compliance & Governance',
      desc: 'Structuring digital workflows to comply with ISO 27001, GDPR, and industry regulatory frameworks.',
    },
  ],
  'Digital Transformation': [
    {
      icon: Workflow,
      title: 'Business Process Digitization',
      desc: 'Transforming manual paper and spreadsheet workflows into automated, transparent digital platforms.',
    },
    {
      icon: Layers,
      title: 'ERP & CRM Implementation',
      desc: 'Custom implementation, migration, and integration of enterprise ERP and CRM platforms across departments.',
    },
    {
      icon: Zap,
      title: 'Workflow & RPA Automation',
      desc: 'Eliminating repetitive manual bottlenecks with intelligent robotic process automation and event triggers.',
    },
    {
      icon: Cloud,
      title: 'Enterprise Cloud Migration',
      desc: 'Relocating legacy on-premise workloads into agile, auto-scaling cloud environments with zero data loss.',
    },
    {
      icon: Users,
      title: 'Digital Change Management',
      desc: 'Comprehensive user onboarding, training programs, and workflow documentation ensuring team adoption.',
    },
    {
      icon: LineChart,
      title: 'Operational Benchmarking',
      desc: 'Tracking post-transformation cycle times, error reductions, and quantifiable ROI across all business units.',
    },
  ],
  'Data Engineering': [
    {
      icon: Workflow,
      title: 'Automated ETL/ELT Pipelines',
      desc: 'Robust automated data pipelines that extract, transform, and load massive data volumes reliably.',
    },
    {
      icon: Database,
      title: 'Modern Data Warehouses',
      desc: 'High-speed analytical repositories built on Snowflake, BigQuery, and Azure Synapse for instant querying.',
    },
    {
      icon: HardDrive,
      title: 'Lakehouse Architectures',
      desc: 'Unified storage platforms powered by Databricks Delta Lake, blending data lake scale with warehouse ACID control.',
    },
    {
      icon: ShieldCheck,
      title: 'Data Quality & Lineage',
      desc: 'Automated schema validation, anomaly checking, and end-to-end lineage mapping across all pipelines.',
    },
    {
      icon: Zap,
      title: 'Real-Time Streaming Pipelines',
      desc: 'Event-driven streaming architectures using Apache Kafka and Azure Event Hubs for live data ingestion.',
    },
    {
      icon: Settings,
      title: 'Data Orchestration',
      desc: 'Fault-tolerant orchestration and automated retry workflows using Airflow, dbt, and Azure Data Factory.',
    },
  ],
  'Cloud Solutions': [
    {
      icon: Cloud,
      title: 'Microsoft Azure Architecture',
      desc: 'Well-Architected Azure enterprise landing zones, serverless microservices, and hybrid cloud networking.',
    },
    {
      icon: Server,
      title: 'AWS Cloud Infrastructure',
      desc: 'Scalable AWS deployments utilizing ECS/EKS, Lambda, S3, RDS, and automated CloudFormation/Terraform.',
    },
    {
      icon: Lock,
      title: 'Cloud Security & IAM',
      desc: 'Zero-trust network segmentation, role-based access control, and automated encryption at rest and in transit.',
    },
    {
      icon: Zap,
      title: 'Cloud FinOps & Cost Tuning',
      desc: 'Continuous resource sizing, reserved instance planning, and automated cleanup to slash cloud waste.',
    },
    {
      icon: RefreshCw,
      title: 'Disaster Recovery & High Availability',
      desc: 'Multi-region failover, geo-redundant data replication, and sub-minute recovery time objectives (RTO).',
    },
    {
      icon: Workflow,
      title: 'Cloud Migration Frameworks',
      desc: 'Proven lift-and-shift, re-platforming, and cloud-native refactoring methodologies with minimal downtime.',
    },
  ],
  'Managed Services': [
    {
      icon: Activity,
      title: '24/7 Platform Monitoring',
      desc: 'Continuous telemetry monitoring of data pipelines, web services, database health, and uptime.',
    },
    {
      icon: Clock,
      title: 'SLA-Backed Technical Support',
      desc: 'Guaranteed rapid response and resolution times backed by formal service level agreements and escalation tiers.',
    },
    {
      icon: Zap,
      title: 'Proactive Performance Tuning',
      desc: 'Regular query plan reviews, database indexing, cache optimization, and capacity forecasting.',
    },
    {
      icon: ShieldCheck,
      title: 'Rapid Incident Remediation',
      desc: 'Dedicated on-call engineering pods conducting root cause analyses and automated self-healing recoveries.',
    },
    {
      icon: RefreshCw,
      title: 'Continuous Maintenance & Patches',
      desc: 'Scheduled dependency updates, security vulnerability patching, and database maintenance windows.',
    },
    {
      icon: Users,
      title: 'Dedicated Engineering Pods',
      desc: 'A dedicated team of KD Infovision experts acting as a seamless extension of your internal technical staff.',
    },
  ],
};

export default function ServicesSection({ services = [] }) {
  // Default list of services fallback if database prop is empty
  const defaultServicesList = [
    {
      num: '01',
      title: 'AI & Machine Learning',
      description: 'Custom ML models, predictive analytics, NLP, GenAI, computer vision — intelligent automation with real ROI.',
      details: 'We build production-grade machine learning algorithms and GenAI solutions tailored for enterprise workflows, risk scoring, predictive maintenance, and conversational intelligence.',
      icon: 'BrainCircuit',
    },
    {
      num: '02',
      title: 'Data Analytics & BI',
      description: 'Power BI, Qlik, Tableau — transform raw data into executive-ready dashboards and actionable intelligence.',
      details: 'Centralize fragmented databases into interactive visual analytics platforms that give executive leadership real-time visibility across operational KPIs, sales, and financial performance.',
      icon: 'BarChart3',
    },
    {
      num: '03',
      title: 'Software Development',
      description: 'Scalable web apps, APIs, SaaS platforms with Next.js & Laravel. MVP to enterprise-grade — fast and production-ready.',
      details: 'End-to-end full-stack software engineering from high-scale SaaS architectures and microservices to intuitive customer-facing web and mobile applications.',
      icon: 'Code2',
    },
    {
      num: '04',
      title: 'IT Consulting',
      description: 'Technology strategy, architecture reviews, vendor selection, and digital roadmap planning for every stage.',
      details: 'Strategic technology advisory that aligns technical investments with concrete business objectives, eliminating architectural debt and maximizing technology ROI.',
      icon: 'Compass',
    },
    {
      num: '05',
      title: 'Digital Transformation',
      description: 'Process digitization, ERP/CRM implementation, workflow automation, and cloud migration — fully modernize operations.',
      details: 'Transform legacy operations into streamlined digital workflows with modern ERP, CRM integrations, and robotic process automation that eliminate manual bottlenecks.',
      icon: 'Layers',
    },
    {
      num: '06',
      title: 'Data Engineering',
      description: 'Data pipelines, warehouses, lakes, and ETL workflows — robust infrastructure that powers every AI initiative.',
      details: 'Build scalable data lakehouses and automated ETL/ELT pipelines using Databricks, Snowflake, and Azure Data Factory to ensure high data quality and low latency.',
      icon: 'Database',
    },
    {
      num: '07',
      title: 'Cloud Solutions',
      description: 'Azure, AWS architecture, migration, and managed services — secure, scalable cloud tailored to your business.',
      details: 'Cloud architecture design, cloud-native modernization, multi-cloud management, and enterprise-grade security on Microsoft Azure and AWS.',
      icon: 'Cloud',
    },
    {
      num: '08',
      title: 'Managed Services',
      description: '24/7 monitoring, support, and optimization for your analytics and data stack — focus on outcomes, not operations.',
      details: 'Round-the-clock infrastructure monitoring, proactive performance tuning, SLA-backed uptime, and continuous pipeline maintenance.',
      icon: 'Activity',
    },
  ];

  const activeServices = services && services.length > 0 ? services : defaultServicesList;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedService = activeServices[selectedIndex] || activeServices[0];
  const MainIcon = iconMap[selectedService.icon] || BrainCircuit;

  // Retrieve matching capabilities for the selected service
  const currentCapabilities = capabilitiesData[selectedService.title] || [
    {
      icon: Sparkles,
      title: 'Custom Architecture',
      desc: selectedService.description || 'Enterprise-grade implementation built for scale and reliability.',
    },
    {
      icon: CheckCircle2,
      title: 'Implementation & Delivery',
      desc: selectedService.details || 'End-to-end execution from discovery to deployment and post-launch support.',
    },
    {
      icon: ArrowRight,
      title: 'Continuous Optimization',
      desc: 'Proactive performance monitoring, optimization, and SLA-backed maintenance.',
    },
  ];

  return (
    <section id="solutions" style={{ background: '#F8FAFC', padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="sec-eye" style={{ marginBottom: '0.75rem' }}>
            What We Do
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h2 className="sec-title" style={{ marginBottom: '0.5rem' }}>
                Explore Our Tech Solutions
              </h2>
              <p className="sec-sub" style={{ margin: 0, maxWidth: '680px' }}>
                Eight powerful specializations built for enterprise-scale impact. Select any domain below to explore specific capabilities and technical deliverables.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: '0.75rem 1.75rem',
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Discuss a Project <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Algoscale-Pattern Split Interactive Showcase Container */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1.5px solid var(--gray-200)',
            boxShadow: '0 12px 36px rgba(15, 35, 71, 0.05)',
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            overflow: 'hidden',
            minHeight: '620px',
          }}
          className="what-we-do-container"
        >
          {/* LEFT SIDEBAR: Category Tabs */}
          <div
            style={{
              background: '#FFFFFF',
              borderRight: '1.5px solid var(--gray-200)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.25rem 0.85rem',
              gap: '4px',
            }}
            className="services-sidebar"
          >
            {activeServices.map((service, index) => {
              const IconComp = iconMap[service.icon] || BrainCircuit;
              const isSelected = selectedIndex === index;
              const count = capabilitiesData[service.title]?.length || 6;

              return (
                <button
                  key={service.id || index}
                  onClick={() => setSelectedIndex(index)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.15rem',
                    borderRadius: '12px',
                    background: isSelected ? 'rgba(61, 155, 233, 0.08)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                    position: 'relative',
                  }}
                  onMouseEnterCapture={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'var(--gray-100)';
                  }}
                  onMouseLeaveCapture={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {/* Left Accent Bar on Active */}
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '18%',
                        bottom: '18%',
                        width: '3.5px',
                        background: 'linear-gradient(to bottom, #3D9BE9, #1B3A6B)',
                        borderRadius: '0 4px 4px 0',
                      }}
                    />
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: isSelected ? 'var(--blue)' : 'var(--gray-100)',
                        color: isSelected ? '#FFFFFF' : 'var(--navy)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                        flexShrink: 0,
                      }}
                    >
                      <IconComp size={18} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: isSelected ? 800 : 600,
                          fontSize: '0.925rem',
                          color: isSelected ? 'var(--navy)' : 'var(--body)',
                          fontFamily: 'var(--font-heading)',
                          lineHeight: 1.3,
                        }}
                      >
                        {service.title}
                      </div>
                    </div>
                  </div>

                  {/* Badge & Arrow */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: isSelected ? 'var(--blue)' : 'var(--muted)',
                      }}
                    >
                      {count}
                    </span>
                    <ChevronRight
                      size={16}
                      color={isSelected ? 'var(--blue)' : 'var(--gray-300)'}
                      style={{
                        transform: isSelected ? 'translateX(2px)' : 'none',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT MAIN PANEL: Algoscale Multi-Column Capabilities Grid */}
          <div
            style={{
              padding: '2.75rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              background: '#FFFFFF',
            }}
            className="services-content-panel"
          >
            {/* Header of Active Service */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingBottom: '2rem',
                borderBottom: '1px solid var(--gray-200)',
                marginBottom: '2.5rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ maxWidth: '680px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--blue)',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      background: 'rgba(61, 155, 233, 0.1)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    SPECIALIZATION #{selectedService.num}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>
                    {currentCapabilities.length} Core Capabilities
                  </span>
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.25, marginBottom: '0.5rem' }}>
                  {selectedService.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>
                  {selectedService.details || selectedService.description}
                </p>
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: 'var(--blue)',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: 'rgba(61, 155, 233, 0.08)',
                  transition: 'all 0.2s ease',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(61, 155, 233, 0.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(61, 155, 233, 0.08)')}
              >
                Inquire for {selectedService.title} <ArrowRight size={15} />
              </a>
            </div>

            {/* 3-COLUMN CAPABILITIES GRID (Direct Algoscale Pattern) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2.5rem 2rem',
                flex: 1,
              }}
              className="capabilities-grid"
            >
              {currentCapabilities.map((cap, idx) => {
                const CapIcon = cap.icon || Sparkles;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      position: 'relative',
                    }}
                    className="capability-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(61, 155, 233, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--blue)',
                          flexShrink: 0,
                        }}
                      >
                        <CapIcon size={18} />
                      </div>
                      <h4
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--navy)',
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {cap.title}
                      </h4>
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--muted)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Enterprise Strip */}
            <div
              style={{
                marginTop: '3rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--gray-200)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--muted)' }}>
                <CheckCircle2 size={16} color="#16A34A" />
                <span>Production-ready architectures backed by enterprise SLA and dedicated engineering pods</span>
              </div>
              <a
                href="#contact"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Schedule Architecture Consultation <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1080px) {
          :global(.capabilities-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem 1.5rem !important;
          }
        }
        @media (max-width: 860px) {
          :global(.what-we-do-container) {
            grid-template-columns: 1fr !important;
          }
          :global(.services-sidebar) {
            border-right: none !important;
            border-bottom: 1.5px solid var(--gray-200) !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            padding: 1rem !important;
          }
          :global(.services-sidebar button) {
            white-space: nowrap !important;
            flex-shrink: 0 !important;
          }
          :global(.services-content-panel) {
            padding: 2rem 1.5rem !important;
          }
        }
        @media (max-width: 600px) {
          :global(.capabilities-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
