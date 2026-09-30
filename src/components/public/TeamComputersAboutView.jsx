'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function TeamComputersAboutView({
  settings,
  statCounters = [],
}) {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState([0, 1, 2]);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState({
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
  });

  const timelineSectionRef = useRef(null);
  const reachSectionRef = useRef(null);
  const trackRef = useRef(null);

  // Enterprise Milestones
  const milestones = [
    {
      period: '2019 — Inception & Foundation',
      title: 'Foundation & Core Advisory',
      desc: 'KD Infovision was founded in Mumbai with a focused mission: delivering high-impact Data Analytics and Business Intelligence consulting to enterprises navigating rapid digital transformation.',
    },
    {
      period: '2021 — Modern Data Stack & Cloud',
      title: 'Lakehouse & Cloud Expansion',
      desc: 'Expanded into distributed cloud architectures, partnering with Snowflake, Databricks, Microsoft Azure, and AWS to modernize legacy data estates into high-performance lakehouses.',
    },
    {
      period: '2023 — BI Cockpits & Certified Talent',
      title: 'BI Practices & Global Delivery',
      desc: 'Established specialized Power BI, Tableau, and Domo executive dashboard practices, launching the KDI Certified Talent Pods to deliver mission-critical engineering globally.',
    },
    {
      period: '2024 — Autonomous & Agentic AI Era',
      title: 'Agentic AI & Next-Gen Automation',
      desc: 'Pioneered multi-agent autonomous AI workflows, customized enterprise LLM orchestration, automated schema validation, and FinOps telemetry to eliminate cloud compute waste.',
    },
    {
      period: 'Toward 2026 — Future-Ready Intelligence',
      title: 'Autonomous Data Enterprise',
      desc: 'Scaling international delivery hubs and sovereign AI data pipelines to empower 100+ global enterprises with zero-latency decision intelligence and continuous reliability.',
    },
  ];

  // Core Values matching Team Computers 4 cards
  const coreValues = [
    {
      title: 'Innovation',
      iconUrl: '/images/core-value-ico.svg',
      desc: 'We encourage relentless creativity to develop advanced data lakehouses, intelligent streaming pipelines, and autonomous AI agents that drive digital transformation.',
    },
    {
      title: 'Integrity',
      iconUrl: '/images/core-value-ico1.svg',
      desc: 'We uphold honesty, transparent governance, and strict zero-trust data protocols across every enterprise client engagement and cloud deployment.',
    },
    {
      title: 'Customer Centricity',
      iconUrl: '/images/core-value-ico2.svg',
      desc: 'We only suggest what you NEED, not what you LIKE. We prioritize genuine enterprise ROI over hype, engineering scalable architectures with zero architectural bloat.',
    },
    {
      title: 'Engineering Excellence',
      iconUrl: '/images/core-value-ico3.svg',
      desc: 'Adhering to the KDI Framework, global delivery standards, certified talent (60%+ certified), and rigorous SLAs for sub-second query performance and 99.99% uptime.',
    },
  ];

  // Timeline Slider Handlers
  const slideWidth = 240; // width + gap matching Team Computers
  const maxIndex = Math.max(0, milestones.length - 2);

  const handlePrev = () => {
    setActiveTimelineIdx((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveTimelineIdx((prev) => Math.min(maxIndex, prev + 1));
  };

  // Reveal timeline slides sequentially on scroll
  useEffect(() => {
    const el = timelineSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          milestones.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleSlides((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
            }, idx * 250);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [milestones]);

  // Reach counters animation on scroll into view
  useEffect(() => {
    const el = reachSectionRef.current;
    if (!el) return;

    const targets = {
      c1: 38,
      c2: 24,
      c3: 4,
      c4: 50,
      c5: 60,
      c6: 99,
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
          const duration = 2000;
          const stepTime = 30;
          const steps = duration / stepTime;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = Math.min(currentStep / steps, 1);
            setCounts({
              c1: Math.floor(targets.c1 * progress),
              c2: Math.floor(targets.c2 * progress),
              c3: Math.floor(targets.c3 * progress),
              c4: Math.floor(targets.c4 * progress),
              c5: Math.floor(targets.c5 * progress),
              c6: Math.floor(targets.c6 * progress),
            });

            if (progress >= 1) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [countersStarted]);

  return (
    <div className="tc-about-root">
      {/* =========================================================================
          1. HERO BANNER: (.about-page-banner-outer)
          Exact Team Computers typography, colors & gradient
          ========================================================================= */}
      <section
        className="about-page-banner-outer"
        style={{
          background: 'url(/images/about-page-banner-bg.webp) no-repeat center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="about-page-main wow fadeInUp">
            <h1
              style={{
                background: 'linear-gradient(259.44deg, #E8F073 30.39%, rgb(0 255 200 / .99) 90.57%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Us
            </h1>

            <h3>
              Your trusted partner for tailored <br /> end-to-end Data &amp; AI solutions.
            </h3>

            <p>
              KD Infovision is a premier IT consulting and technology solutions provider based in India, with a keen focus on bridging the gap between business needs and modern technology through exceptional Data, BI, and Agentic AI strategies.
            </p>

            <a href="#vision" className="learn-more">
              Explore Our Story
              <img src="/images/learn-more-arrow.svg" alt="arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. OUR VISION & MISSION: (.our-mission-outer)
          Two mission boxes with gradient spans + right artistic badge
          ========================================================================= */}
      <section className="our-mission-outer" id="vision">
        <div className="container">
          <div className="our-mission-main">
            {/* Box 1: Vision */}
            <div className="our-mission-bx wow fadeInUp">
              <span>DREAM IT, DO IT, DIGITALLY</span>
              <h3>
                Our{' '}
                <span
                  style={{
                    background: 'linear-gradient(259.44deg, #E8F073 30.39%, rgb(0 255 200 / .99) 90.57%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Vision
                </span>
              </h3>
              <p>
                To empower modern enterprises to unlock the true value of their information assets, transforming complex raw data into autonomous, actionable intelligence that accelerates decision-making, streamlines operations, and scales digital resilience.
              </p>
            </div>

            {/* Box 2: Mission */}
            <div className="our-mission-bx wow fadeInUp" style={{ animationDelay: '0.15s' }}>
              <span>INSPIRING EXCELLENCE WITH EVERY SPRINT</span>
              <h3>
                Our{' '}
                <span
                  style={{
                    background: 'linear-gradient(259.44deg, #E8F073 30.39%, rgb(0 255 200 / .99) 90.57%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Mission
                </span>
              </h3>
              <p>
                Provide an opportunity for growth, inspire engineering excellence, value people, and serve with pride. A dedicated partner to innovate, architect, and deliver scalable enterprise data and cloud foundations.
              </p>
            </div>

            {/* Artistic Serif Badge matching Team Computers .our-mis-text */}
            <div className="our-mis-text wow fadeInUp" style={{ animationDelay: '0.3s' }}>
              <h5>
                to <br />
                serve <br />
                with <br />
                pride <span style={{ color: '#FF5E7E', verticalAlign: 'middle', fontSize: '0.8em' }}>❤️</span>
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR CORE VALUES: (.our-core-values)
          4 boxes with floating circular top-left icon (.our-core-ico)
          ========================================================================= */}
      <section
        className="our-core-values"
        style={{
          background: 'url(/images/core-value-bg.webp) no-repeat center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="head wow fadeInUp">
            <span>THE DNA OF OUR SUCCESS</span>
            <h2>Our Core Values</h2>
          </div>

          <div className="our-core-main">
            {coreValues.map((val, idx) => (
              <div key={idx} className="our-core-bx wow fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="our-core-ico">
                  <img src={val.iconUrl} alt={val.title} />
                </div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR JOURNEY / TIMELINE: (.scroll-wrapper#scroll-wrapper)
          Interactive horizontal zig-zag timeline with glowing nodes
          ========================================================================= */}
      <div
        className="scroll-wrapper"
        id="scroll-wrapper"
        ref={timelineSectionRef}
        style={{
          background: 'url(/images/journey-bg.webp) no-repeat center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="head wow fadeInUp">
            <span>THE ADVENTURES THAT SHAPED US</span>
            <h2>Our Journey</h2>
          </div>
        </div>

        <section id="sliderSection" className="slider-container">
          <div
            className="track"
            id="track"
            ref={trackRef}
            style={{
              transform: `translateX(-${activeTimelineIdx * slideWidth}px)`,
            }}
          >
            {milestones.map((m, idx) => {
              const isVisible = visibleSlides.includes(idx);
              const isSelected = activeTimelineIdx === idx;
              return (
                <div
                  key={idx}
                  className={`journey-item ${isVisible ? 'visible' : ''} ${isSelected ? 'selected' : ''}`}
                  onClick={() => setActiveTimelineIdx(idx)}
                >
                  <p>
                    <b>{m.period}:</b> {m.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons matching Team Computers */}
          <div className="nav-buttons">
            <button
              id="prevBtn"
              onClick={handlePrev}
              disabled={activeTimelineIdx === 0}
              aria-label="Previous Milestone"
            >
              ◀ Prev
            </button>
            <button
              id="nextBtn"
              onClick={handleNext}
              disabled={activeTimelineIdx >= maxIndex}
              aria-label="Next Milestone"
            >
              Next ▶
            </button>
          </div>
        </section>
      </div>

      {/* =========================================================================
          5. REACH & SCALE NUMBERS: (.every-where-outer)
          Gradient digits (.count-digit) + Map visual representation
          ========================================================================= */}
      <section
        className="every-where-outer"
        ref={reachSectionRef}
        style={{
          background: 'url(/images/every-think-bg.webp) no-repeat center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="head wow fadeInUp">
            <span>RIGHT WHERE YOU NEED US</span>
            <h2>Everywhere in India &amp; Global</h2>
          </div>

          <div className="every-where-main">
            <div className="every-india-number">
              {/* Box 1 (Top Left) */}
              <div className="every-bx">
                <h3>
                  <span
                    className="count-digit"
                    style={{
                      background: 'linear-gradient(91.06deg, #1DCAF6 0%, #08B066 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {counts.c1}
                  </span>
                  +
                </h3>
                <p>Specialized Consultants</p>
              </div>

              {/* Box 2 (Mid Left) */}
              <div className="every-bx">
                <h3>
                  <span
                    className="count-digit"
                    style={{
                      background: 'linear-gradient(91.06deg, #1DCAF6 0%, #08B066 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {counts.c2}
                  </span>
                  +
                </h3>
                <p>Enterprise Partners</p>
              </div>

              {/* Box 3 (Bottom Left) */}
              <div className="every-bx">
                <h3>
                  <span
                    className="count-digit"
                    style={{
                      background: 'linear-gradient(91.06deg, #1DCAF6 0%, #08B066 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {counts.c3}
                  </span>
                  +
                </h3>
                <p>Strategic Delivery Hubs</p>
              </div>

              {/* Box 4 (Top Right) */}
              <div className="every-bx">
                <h3>
                  <span
                    className="count-digit"
                    style={{
                      background: 'linear-gradient(91.06deg, #1DCAF6 0%, #08B066 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {counts.c4}
                  </span>
                  +
                </h3>
                <p>Global Deliveries</p>
              </div>

              {/* Box 5 (Mid Right) */}
              <div className="every-bx">
                <h3>
                  <span
                    className="count-digit"
                    style={{
                      background: 'linear-gradient(91.06deg, #1DCAF6 0%, #08B066 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {counts.c5}
                  </span>
                  %
                </h3>
                <p>Certified Specialists</p>
              </div>

              {/* Box 6 (Bottom Right) */}
              <div className="every-bx">
                <h3>
                  <span
                    className="count-digit"
                    style={{
                      background: 'linear-gradient(91.06deg, #1DCAF6 0%, #08B066 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {counts.c6}.99
                  </span>
                  %
                </h3>
                <p>Pipeline &amp; SLA Uptime</p>
              </div>
            </div>

            {/* Central Map Image matching Team Computers */}
            <div className="every-figure">
              <figure>
                <img
                  src="/images/map-image.webp"
                  alt="KD Infovision Global & India Delivery Map"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. ASSIST / CTA SECTION: (.assits-outer)
          Exact Team Computers gradient button and headline
          ========================================================================= */}
      <section className="assits-outer">
        <div className="container">
          <div className="assits-head wow fadeInUp">
            <h2>We are here to assist you</h2>
            <Link href="/contact" className="learn-more">
              <span>Learn More</span>
              <img src="/images/learn-more-arrow.svg" alt="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXACT CSS RULES EXTRACTED FROM teamcomputers.com/about-company/
          ========================================================================= */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .tc-about-root {
          background-color: #000000 !important;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }

        .tc-about-root * {
          box-sizing: border-box;
        }

        .tc-about-root .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .tc-about-root .head {
          text-align: center;
          margin-bottom: 50px;
        }

        .tc-about-root .head span {
          color: #fffa65;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
          font-family: 'Montserrat', sans-serif;
        }

        .tc-about-root .head h2 {
          color: #ffffff;
          font-size: clamp(32px, 3.8vw, 45px);
          font-weight: 600;
          line-height: 1.25;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        /* -------------------------------------------------------------
           1. HERO BANNER: (.about-page-banner-outer)
           ------------------------------------------------------------- */
        .tc-about-root .about-page-banner-outer {
          padding: 160px 0 100px;
          min-height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        .tc-about-root .about-page-main {
          text-align: center;
          max-width: 1050px;
          margin: 0 auto;
        }

        .tc-about-root .about-page-main h1 {
          font-size: clamp(65px, 9vw, 140px);
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          line-height: 99%;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          background: linear-gradient(259.44deg, #E8F073 30.39%, rgb(0 255 200 / .99) 90.57%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }

        .tc-about-root .about-page-main h3 {
          font-size: clamp(24px, 2.8vw, 42px);
          color: #ffffff;
          font-weight: 600;
          line-height: 1.35;
          margin: 0 0 20px 0;
          font-family: 'Montserrat', sans-serif;
        }

        .tc-about-root .about-page-main p {
          color: #ffffff;
          font-size: 18px;
          line-height: 27px;
          max-width: 880px;
          margin: 0 auto 30px;
          opacity: 0.9;
        }

        .tc-about-root .learn-more {
          background: linear-gradient(93.05deg, #1EC9F2 -14.26%, #0DB16A 85.74%);
          padding: 12px 36px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          color: #ffffff;
          border-radius: 40px;
          line-height: 19px;
          text-decoration: none;
          transition: all 0.5s ease;
          border: none;
          cursor: pointer;
        }

        .tc-about-root .learn-more img {
          max-width: 17px;
          width: auto;
          height: auto;
          transition: transform 0.4s ease;
        }

        .tc-about-root .learn-more:hover {
          background: linear-gradient(93.05deg, #0DB16A -14.26%, #1EC9F2 85.74%);
          transform: translateY(-2px);
        }

        .tc-about-root .learn-more:hover img {
          transform: translateX(6px);
        }

        /* -------------------------------------------------------------
           2. OUR VISION & MISSION: (.our-mission-outer)
           ------------------------------------------------------------- */
        .tc-about-root .our-mission-outer {
          background: #000000;
          padding: 70px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .tc-about-root .our-mission-outer::after {
          width: 35%;
          height: 100%;
          content: "";
          position: absolute;
          right: -5%;
          top: 0;
          background: radial-gradient(50% 50% at 50% 50%, rgb(201 148 229 / .3) 0%, rgb(0 0 0 / .3) 100%);
          background-blend-mode: lighten;
          pointer-events: none;
        }

        .tc-about-root .our-mission-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          z-index: 1;
          gap: 40px;
        }

        .tc-about-root .our-mission-bx {
          width: calc(33.33% - 40px);
        }

        .tc-about-root .our-mission-bx span {
          font-size: 13px;
          line-height: 25px;
          margin-bottom: 5px;
          display: block;
          color: #fffa65;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .tc-about-root .our-mission-bx h3 {
          font-size: clamp(32px, 3.2vw, 42px);
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          display: flex;
          align-items: baseline;
          padding-bottom: 12px;
          margin: 0;
        }

        .tc-about-root .our-mission-bx h3 span {
          font-size: clamp(32px, 3.2vw, 42px);
          text-transform: inherit;
          background: linear-gradient(259.44deg, #E8F073 30.39%, rgb(0 255 200 / .99) 90.57%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          line-height: inherit;
          margin-bottom: 0;
          padding-left: 8px;
          font-weight: 700;
        }

        .tc-about-root .our-mission-bx p {
          color: #ffffff;
          font-size: 16px;
          line-height: 26px;
          opacity: 0.88;
        }

        .tc-about-root .our-mis-text {
          position: relative;
          top: -10px;
          width: 250px;
          text-align: right;
        }

        .tc-about-root .our-mis-text h5 {
          font-size: clamp(60px, 6vw, 95px);
          line-height: 82%;
          font-family: 'Playfair Display', serif;
          color: #ffffff;
          font-weight: 400;
          font-style: italic;
          margin: 0;
        }

        @media (max-width: 991px) {
          .tc-about-root .our-mission-main {
            flex-wrap: wrap;
          }
          .tc-about-root .our-mission-bx {
            width: 100%;
          }
          .tc-about-root .our-mis-text {
            width: 100%;
            text-align: left;
            margin-top: 20px;
          }
        }

        /* -------------------------------------------------------------
           3. OUR CORE VALUES: (.our-core-values)
           ------------------------------------------------------------- */
        .tc-about-root .our-core-values {
          padding: 80px 0 60px;
        }

        .tc-about-root .our-core-main {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .tc-about-root .our-core-bx {
          width: calc(50% - 15px);
          padding: 55px 50px 30px;
          background: url(/images/core-bg1.webp) no-repeat;
          background-size: 100% 100%;
          position: relative;
          margin-bottom: 30px;
          min-height: 210px;
          transition: all 0.4s ease;
        }

        .tc-about-root .our-core-bx:hover {
          background: url(/images/core-bg1-hover.png) no-repeat;
          background-size: 100% 100%;
          transform: translateY(-4px);
        }

        .tc-about-root .our-core-ico {
          position: absolute;
          left: 50px;
          top: -35px;
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url(/images/core-ico-bg.webp) no-repeat center center;
          background-size: contain;
          border-radius: 100%;
        }

        .tc-about-root .our-core-ico img {
          max-width: 38px;
          max-height: 38px;
          object-fit: contain;
        }

        .tc-about-root .our-core-bx h3 {
          font-size: 24px;
          line-height: 124%;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
        }

        .tc-about-root .our-core-bx p {
          font-size: 16px;
          line-height: 25px;
          margin-bottom: 0;
          color: #e2e8f0;
          opacity: 0.95;
        }

        @media (max-width: 767px) {
          .tc-about-root .our-core-bx {
            width: 100%;
            padding: 50px 25px 25px;
          }
          .tc-about-root .our-core-ico {
            left: 25px;
          }
        }

        /* -------------------------------------------------------------
           4. OUR JOURNEY / TIMELINE: (.scroll-wrapper#scroll-wrapper)
           ------------------------------------------------------------- */
        .tc-about-root .scroll-wrapper {
          padding: 80px 0 90px;
          overflow: hidden;
          position: relative;
        }

        .tc-about-root .slider-container {
          position: relative;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          overflow: hidden;
          padding: 30px 70px 75px;
          min-height: 480px;
        }

        .tc-about-root .slider-container .track {
          display: flex;
          gap: 40px;
          transition: transform 0.4s ease;
          align-items: flex-start;
          margin: 0 auto;
          position: relative;
          will-change: transform;
        }

        /* Horizontal rail line */
        .tc-about-root .slider-container .track::after {
          height: 1px;
          width: 300%;
          background: rgba(255, 255, 255, 0.25);
          content: "";
          left: -50%;
          top: 150px;
          position: absolute;
          z-index: 1;
        }

        .tc-about-root .journey-item {
          min-width: 200px;
          max-width: 200px;
          position: relative;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.3s ease;
          z-index: 2;
          cursor: pointer;
        }

        .tc-about-root .journey-item.visible {
          opacity: 1;
        }

        .tc-about-root .journey-item p {
          font-size: 13px;
          color: #ffffff;
          line-height: 19px;
          margin: 0;
        }

        .tc-about-root .journey-item p b {
          color: #fffa65;
          font-weight: 700;
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
        }

        /* Glowing Connector Dot */
        .tc-about-root .journey-item::after {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: linear-gradient(259.44deg, #FBAA9D 25.03%, #66FDB9 90.57%);
          box-shadow: 0 0 10px rgba(102, 253, 185, 0.7);
          left: 0;
          position: absolute;
          right: 0;
          margin: 0 auto;
          bottom: -44px;
          content: "";
          z-index: 3;
          transition: transform 0.3s ease;
        }

        .tc-about-root .journey-item:hover::after,
        .tc-about-root .journey-item.selected::after {
          transform: scale(1.6);
        }

        /* Zig-zag alternating bottom cards */
        .tc-about-root .journey-item:nth-child(2n) {
          margin-top: 200px;
        }

        .tc-about-root .journey-item:nth-child(2n)::after {
          bottom: unset;
          top: -55px;
        }

        /* Navigation Buttons */
        .tc-about-root .slider-container .nav-buttons {
          position: absolute;
          top: 125px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          left: 0;
          z-index: 9;
          padding: 0 20px;
          pointer-events: none;
        }

        .tc-about-root .slider-container .nav-buttons button {
          min-width: 51px;
          height: 51px;
          border: 2px solid #F1F1F1;
          border-radius: 100%;
          position: relative;
          background: rgba(0, 0, 0, 0.6);
          color: #ffffff;
          font-size: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          pointer-events: auto;
          transition: all 0.3s ease;
        }

        .tc-about-root .slider-container .nav-buttons button:hover {
          border-color: #06ABBF;
          background: #06ABBF;
          transform: scale(1.08);
        }

        .tc-about-root .slider-container .nav-buttons button#prevBtn::before {
          background: url(/images/arrow-use-slide.png) no-repeat center;
          background-size: contain;
          width: 26px;
          height: 16px;
          content: "";
          position: absolute;
        }

        .tc-about-root .slider-container .nav-buttons button#nextBtn::before {
          background: url(/images/arrow-use-slide.png) no-repeat center;
          background-size: contain;
          width: 26px;
          height: 16px;
          transform: rotate(180deg);
          content: "";
          position: absolute;
        }

        .tc-about-root .slider-container .nav-buttons button:disabled {
          opacity: 0.2;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 767px) {
          .tc-about-root .slider-container {
            padding: 20px 20px 40px;
          }
        }

        /* -------------------------------------------------------------
           5. REACH & SCALE NUMBERS: (.every-where-outer)
           ------------------------------------------------------------- */
        .tc-about-root .every-where-outer {
          padding: 80px 0 90px;
          position: relative;
          overflow: hidden;
        }

        .tc-about-root .every-where-main {
          position: relative;
          min-height: 720px;
          margin-top: 30px;
        }

        .tc-about-root .every-where-main .every-figure figure {
          width: 52%;
          margin: 0 auto;
          text-align: center;
        }

        .tc-about-root .every-where-main .every-figure figure img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
          filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.7));
        }

        .tc-about-root .every-india-number {
          position: absolute;
          width: 100%;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
        }

        .tc-about-root .every-bx {
          width: 240px;
          position: absolute;
          text-align: center;
          pointer-events: auto;
          transition: transform 0.3s ease;
        }

        .tc-about-root .every-bx:hover {
          transform: translateY(-4px);
        }

        .tc-about-root .every-bx h3 {
          background: linear-gradient(91.06deg, #1DCAF6 0%, #08B066 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          font-size: clamp(45px, 5.2vw, 75px);
          line-height: 99%;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .tc-about-root .every-bx p {
          font-size: 20px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          color: #ffffff;
          margin: 0;
          opacity: 0.9;
        }

        /* Exact Team Computers Desktop Coordinates */
        .tc-about-root .every-india-number .every-bx:nth-child(1) {
          top: 0;
          left: 20px;
        }

        .tc-about-root .every-india-number .every-bx:nth-child(2) {
          top: 280px;
          left: 10px;
          width: 220px;
        }

        .tc-about-root .every-india-number .every-bx:nth-child(3) {
          top: 560px;
          left: 20px;
          width: 230px;
        }

        .tc-about-root .every-india-number .every-bx:nth-child(4) {
          top: 0;
          right: 20px;
        }

        .tc-about-root .every-india-number .every-bx:nth-child(5) {
          top: 280px;
          right: 10px;
          width: 220px;
        }

        .tc-about-root .every-india-number .every-bx:nth-child(6) {
          top: 560px;
          right: 20px;
          width: 250px;
        }

        @media (max-width: 991px) {
          .tc-about-root .every-where-main {
            min-height: auto;
          }
          .tc-about-root .every-where-main .every-figure figure {
            width: 80%;
          }
          .tc-about-root .every-india-number {
            position: static;
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            margin-top: 40px;
            justify-content: center;
          }
          .tc-about-root .every-bx {
            position: static !important;
            width: 45% !important;
          }
        }

        /* -------------------------------------------------------------
           6. ASSIST / CTA SECTION: (.assits-outer)
           ------------------------------------------------------------- */
        .tc-about-root .assits-outer {
          background: #000000;
          padding: 85px 0 95px;
          border-top: 1px solid #141414;
          text-align: center;
        }

        .tc-about-root .assits-head h2 {
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 600;
          line-height: 1.24;
          color: #ffffff;
          margin: 0 0 30px 0;
          font-family: 'Montserrat', sans-serif;
        }

        /* Wow Animations */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tc-about-root .wow.fadeInUp {
          animation: fadeInUp 0.8s ease backwards;
        }
      `,
        }}
      />
    </div>
  );
}
