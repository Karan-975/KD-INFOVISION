'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function IndustriesSection({ industries = [] }) {
  // 6 Core Sectors mapped to Vani HQ Card Design & Colors
  const defaultSectors = [
    // Row 1: Cards 0, 1, 2
    {
      id: 'bfsi',
      name: 'BFSI & FinTech',
      desc: 'Real-time Kafka fraud detection, ledger lakehouses, and full RBI & SOC 2 regulatory compliance.',
      link: '/industries',
      bgColor: '#C7B4FF', // Vani Card 1 Lavender
      textColor: '#1E1638',
      descColor: '#312E81',
      hasGrid: false,
      watermarkSvg: (
        <svg width="183" height="223" viewBox="0 0 183 223" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51.5949 99.9326C51.3011 98.3096 51.664 96.6364 52.6038 95.2811C53.5437 93.9257 54.9834 92.9992 56.6063 92.7054L117.799 81.6267C119.422 81.3329 121.095 81.6958 122.451 82.6356C123.806 83.5754 124.732 85.0152 125.026 86.6381C125.32 88.261 124.957 89.9342 124.017 91.2896C123.077 92.6449 121.638 93.5714 120.015 93.8653L58.8221 104.944C57.1991 105.238 55.526 104.875 54.1706 103.935C52.8153 102.995 51.8888 101.555 51.5949 99.9326ZM63.2536 129.421C61.6306 129.715 60.1909 130.641 59.2511 131.997C58.3112 133.352 57.9483 135.025 58.2422 136.648C58.536 138.271 59.4625 139.711 60.8178 140.651C62.1732 141.59 63.8464 141.953 65.4693 141.66L126.662 130.581C128.285 130.287 129.725 129.361 130.664 128.005C131.604 126.65 131.967 124.977 131.673 123.354C131.38 121.731 130.453 120.291 129.098 119.351C127.742 118.411 126.069 118.049 124.446 118.342L63.2536 129.421ZM64.8894 173.364C64.5956 171.741 64.9585 170.068 65.8983 168.712C66.8381 167.357 68.2778 166.43 69.9008 166.137L131.093 155.058C132.716 154.764 134.39 155.127 135.745 156.067C137.1 157.007 138.027 158.446 138.321 160.069C138.614 161.692 138.252 163.365 137.312 164.721C136.372 166.076 134.932 167.003 133.309 167.297L72.1165 178.375C70.4936 178.669 68.8204 178.306 67.4651 177.366C66.1097 176.426 65.1832 174.987 64.8894 173.364ZM49.9591 55.9898C48.3362 56.2836 46.8964 57.2101 45.9566 58.5655C45.0168 59.9208 44.6539 61.594 44.9477 63.2169C45.2415 64.8399 46.168 66.2796 47.5234 67.2194C48.8787 68.1592 50.5519 68.5222 52.1749 68.2283L82.7712 62.689L80.5555 50.4504L49.9591 55.9898Z" fill="#AB91F2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M157.465 56.3689C157.423 55.3764 157.144 54.4085 156.651 53.5461L156.352 52.8038C155.562 51.0102 154.494 49.3523 153.187 47.8911C151.729 46.2592 149.85 44.9562 146.092 42.3503L108.655 16.3913C104.91 13.7831 103.03 12.4802 100.976 11.6765C98.903 10.8716 96.7024 10.4438 94.4784 10.4135C93.4979 10.2541 92.4935 10.332 91.5492 10.6405C90.1819 10.8375 88.5297 11.1366 86.339 11.5332L59.2918 16.43C38.731 20.1525 28.4507 22.0137 21.3425 27.4338C15.0902 32.214 10.4974 38.8375 8.21268 46.3689C5.63318 54.9506 7.48997 65.2065 11.2124 85.7672L25.3931 164.094C29.1156 184.655 30.9768 194.935 36.3969 202.043C41.1771 208.295 47.8006 212.888 55.332 215.173C63.9137 217.752 74.1696 215.896 94.7303 212.173L124.103 206.855C144.664 203.133 154.944 201.272 162.052 195.852C168.304 191.071 172.897 184.448 175.182 176.917C177.761 168.335 175.905 158.079 172.182 137.518L158.42 61.5047C158.026 59.3262 157.727 57.674 157.417 56.3144L157.465 56.3689ZM144.895 190.098C139.469 191.548 132.373 192.845 121.848 194.75L92.4756 200.068C81.9871 201.967 74.8498 203.247 69.2605 203.791C63.8203 204.321 60.9226 204.024 58.8383 203.403C53.808 201.89 49.3857 198.823 46.2053 194.643C44.8805 192.911 43.5865 190.301 42.1877 185.018C40.7377 179.593 39.4404 172.497 37.5348 161.972L23.3541 83.6448C21.4552 73.1564 20.1757 66.0191 19.6314 60.4298C19.1015 54.9895 19.3985 52.0918 20.0197 50.0076C21.5363 44.9805 24.6033 40.5575 28.7796 37.3745C30.5115 36.0498 33.1212 34.7558 38.4041 33.3569C43.8295 31.907 50.9256 30.6096 61.4508 28.7041L88.3756 23.8295L96.1307 66.6644C96.4245 68.2873 97.351 69.727 98.7063 70.6669C100.062 71.6067 101.735 71.9696 103.358 71.6758L146.193 63.9207L159.93 139.8C161.829 150.288 163.121 157.423 163.653 163.015C164.195 168.453 163.898 171.35 163.267 173.449C161.751 178.475 158.684 182.893 154.505 186.07C152.773 187.395 150.175 188.687 144.88 190.088L144.895 190.098ZM101.642 27.2924L139.079 53.2515L107.381 58.9902L101.642 27.2924Z" fill="#AB91F2"/>
        </svg>
      ),
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Smart OT',
      desc: 'Shop-floor IIoT telemetry, digital twins, and ML predictive vibration maintenance engines.',
      link: '/industries',
      bgColor: '#F3AC9E', // Vani Card 2 Coral with grid
      textColor: '#2E140C',
      descColor: '#4A2016',
      hasGrid: true,
      watermarkSvg: (
        <svg width="317" height="208" viewBox="0 0 317 208" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 217.991C28.6286 198.63 113.786 73.9539 162.119 101.539C172.711 106.082 187.191 122.902 160.376 153.837C149.986 163.891 133.632 188.958 149.387 210.283C150.077 211.217 150.981 211.987 152.047 212.448C159.744 215.774 177.286 218.148 197.381 205.184" stroke="#E1998A" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M267.745 44.3672L322.786 83.6795" stroke="#E1998A" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M265.763 168.207L338.677 61.7295C349.483 45.993 345.472 24.4551 329.736 13.6483C313.999 2.84155 292.534 6.84363 281.728 22.5802L208.814 129.058C201.143 140.175 197.781 153.726 199.223 167.124L202.242 195.612C202.478 197.511 204.258 198.7 206.058 198.254L233.699 190.813C246.771 187.335 258.083 179.252 265.754 168.134L265.763 168.207Z" stroke="#E1998A" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      desc: 'HIPAA-compliant sovereign RAG, automated diagnostic report parsing, and FHIR data lakes.',
      link: '/industries',
      bgColor: '#E4FA82', // Vani Card 3 Lime
      textColor: '#1A2E05',
      descColor: '#2B4208',
      hasGrid: false,
      watermarkSvg: (
        <svg width="201" height="261" viewBox="0 0 201 261" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.1864 152.407C79.1431 157.381 96.5072 160.235 114.075 161.868C120.523 162.468 127.019 162.895 133.516 162.428C134.553 162.904 135.471 162.458 136.419 162.109C140.173 160.73 143.436 158.524 146.435 155.959C156.979 146.936 164.013 135.591 168.062 122.416C170.139 115.649 171.04 108.691 169.176 101.656C168.67 101.006 168.118 100.385 167.665 99.6933C163.51 93.3308 159.621 86.8036 155.066 80.7039C147.261 70.2509 139.006 60.1729 129.95 50.7745C127.259 47.9745 124.819 44.828 121.339 42.8696" stroke="#CAE163" strokeWidth="10"/>
          <path d="M168.148 100.633C180.94 109.355 193.743 118.074 206.534 126.785C213.04 131.211 219.414 135.849 226.085 140.017C232.418 143.974 234.351 149.887 233.649 156.602C232.112 171.452 225.168 183.364 212.57 191.587C207.264 195.054 201.551 195.542 195.672 192.491C192.829 191.014 190.112 189.132 186.83 188.613C186.403 188.686 186.009 188.557 185.634 188.374C174.649 182.974 163.553 177.8 152.627 172.286C152.433 171.185 151.468 170.973 150.662 170.576C144.993 167.813 139.324 165.05 133.645 162.288" stroke="#CAE163" strokeWidth="10"/>
          <path d="M122.496 44.1746C125.299 51.3443 123.472 58.3909 121.596 65.2931C117.56 80.1172 110.861 93.8085 103.137 107.033C95.6997 119.78 87.2922 131.814 76.7142 142.188C72.1158 146.707 67.2167 150.894 60.689 152.464C56.8182 151.926 55.3101 150.507 54.4272 146.821C53.4536 142.721 53.9749 138.659 54.7627 134.647C57.0102 123.281 61.2454 112.584 66.3283 102.235C74.613 85.361 84.4553 69.4766 97.1681 55.526C101.791 50.4484 106.736 45.7081 113.054 42.691C117.108 40.7512 119.555 41.1462 122.504 44.1628L122.496 44.1746Z" stroke="#CAE163" strokeWidth="10"/>
        </svg>
      ),
    },

    // Row 2: Cards 3, 4, 5
    {
      id: 'retail',
      name: 'Retail & E-Commerce',
      desc: 'Unified customer semantic layers, predictive replenishment schedules across 200+ DCs.',
      link: '/industries',
      bgColor: '#BAE6FD', // Sky Glacier Cyan
      textColor: '#082F49',
      descColor: '#075985',
      hasGrid: false,
      watermarkSvg: (
        <svg width="201" height="261" viewBox="0 0 201 261" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="180" r="18" fill="#7DD3FC" opacity="0.6"/>
          <circle cx="160" cy="180" r="18" fill="#7DD3FC" opacity="0.6"/>
          <path d="M30 40h30l25 90h80l20-70H75" stroke="#7DD3FC" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      desc: 'Cold-chain IoT sensor streams, sub-minute route cockpits, and multi-modal transit intelligence.',
      link: '/industries',
      bgColor: '#FED7AA', // Sunset Apricot with grid
      textColor: '#431407',
      descColor: '#7C2D12',
      hasGrid: true,
      watermarkSvg: (
        <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="160" height="110" rx="8" stroke="#FDBA74" strokeWidth="14"/>
          <path d="M180 70h50l30 30v40h-80V70z" stroke="#FDBA74" strokeWidth="14" strokeLinejoin="round"/>
          <circle cx="80" cy="155" r="22" stroke="#FDBA74" strokeWidth="14"/>
          <circle cx="215" cy="155" r="22" stroke="#FDBA74" strokeWidth="14"/>
        </svg>
      ),
    },
    {
      id: 'cloud-gcc',
      name: 'Cloud & High-Tech GCCs',
      desc: 'Petabyte legacy warehouse migration, FinOps cloud spend governance, and multi-agent AI copilots.',
      link: '/industries',
      bgColor: '#A7F3D0', // Fresh Mint Emerald
      textColor: '#064E3B',
      descColor: '#065F46',
      hasGrid: false,
      watermarkSvg: (
        <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
  ];

  // Exact Vani HQ default: middle card active in Row 1, first in Row 2
  const [activeRow1, setActiveRow1] = useState(1);
  const [activeRow2, setActiveRow2] = useState(0);

  const row1Sectors = defaultSectors.slice(0, 3);
  const row2Sectors = defaultSectors.slice(3, 6);

  // Exact Vani HQ direct DOM event listeners for instantaneous 60 FPS transitions
  useEffect(() => {
    const wrappers = document.querySelectorAll('.vi-so-much-card-wrapper');
    const cleanups = [];

    wrappers.forEach((wrapper, rowIdx) => {
      const cards = wrapper.querySelectorAll('.vi-redirect-URL');
      cards.forEach((card, cardIdx) => {
        const handleActivate = () => {
          wrapper.querySelectorAll('.vi-redirect-URL.vi-active').forEach(c => {
            c.classList.remove('vi-active');
          });
          card.classList.add('vi-active');
          if (rowIdx === 0) setActiveRow1(cardIdx);
          else setActiveRow2(cardIdx);
        };

        card.addEventListener('mouseenter', handleActivate);
        card.addEventListener('focus', handleActivate);

        cleanups.push(() => {
          card.removeEventListener('mouseenter', handleActivate);
          card.removeEventListener('focus', handleActivate);
        });
      });
    });

    return () => cleanups.forEach(c => c());
  }, []);

  const vaniDeckCSS = `
    .vi-so-much-card-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 18px;
      width: 100%;
    }

    .vi-so-much-card-wrapper div.vi-redirect-URL,
    .vi-so-much-card-wrapper a.vi-redirect-URL {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      border-radius: 28px;
      width: 375px;
      flex: 1 1 340px;
      min-height: 25rem;
      text-align: left;
      padding: 38px 36px 32px 36px;
      cursor: pointer;
      transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                  flex 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.4s ease;
      overflow: hidden;
      position: relative;
      text-decoration: none;
      box-sizing: border-box;
      outline: none;
    }

    .vi-so-much-card-wrapper div.vi-redirect-URL.vi-active,
    .vi-so-much-card-wrapper a.vi-redirect-URL.vi-active {
      width: 660px;
      flex: 2.2 1 580px;
      transform: scale(1.01);
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
    }

    .vi-so-much-card-wrapper .vi-section-head {
      position: relative;
      z-index: 3;
      width: 100%;
    }

    .vi-so-much-card-wrapper .vi-section-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 38px;
      line-height: 42px;
      letter-spacing: -0.02em;
      font-weight: 700;
      margin: 0;
      max-width: 320px;
      color: inherit;
    }

    .vi-so-much-card-wrapper .vi-redirect-URL p {
      width: 100%;
      max-width: 400px;
      opacity: 0;
      visibility: hidden;
      transform: translateX(30px);
      transition: opacity 0.6s ease-in-out,
                  transform 0.6s ease-in-out,
                  visibility 0.6s ease-in-out;
      position: relative;
      z-index: 20;
      font-size: 16px;
      line-height: 1.6;
      margin: 18px 0 0 0;
      font-weight: 500;
    }

    .vi-so-much-card-wrapper .vi-redirect-URL.vi-active p {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }

    .vi-redirect-icon {
      display: block;
      position: relative;
      z-index: 4;
    }

    .vi-redirect-icon svg {
      display: block;
      width: 52px;
      height: 52px;
      margin-top: 1.5rem;
      opacity: 0;
      visibility: hidden;
      transform: translate3d(0, 0, 0);
      transition: opacity 0.8s ease, transform 0.8s ease, visibility 0.8s ease;
      position: relative;
      right: 0;
    }

    .vi-so-much-card-wrapper .vi-redirect-URL.vi-active .vi-redirect-icon svg {
      opacity: 1;
      visibility: visible;
      transform: translate3d(0, -10px, 20px);
      z-index: 2;
    }

    .vi-bottom-image {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 180px;
      z-index: 2;
      pointer-events: none;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
      opacity: 0.75;
    }

    .vi-so-much-card-wrapper .vi-redirect-URL.vi-active .vi-bottom-image {
      transform: scale(1.05);
      opacity: 0.95;
    }

    @media only screen and (max-width: 1024px) {
      .vi-so-much-card-wrapper {
        flex-direction: column;
        gap: 16px;
      }

      .vi-so-much-card-wrapper div.vi-redirect-URL,
      .vi-so-much-card-wrapper a.vi-redirect-URL {
        flex: none !important;
        width: 100% !important;
        min-height: 240px;
        padding: 28px 24px;
      }

      .vi-so-much-card-wrapper .vi-redirect-URL.vi-active {
        transform: none;
      }

      .vi-so-much-card-wrapper .vi-redirect-URL p {
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
      }

      .vi-redirect-icon svg {
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
        width: 36px;
        height: 36px;
      }
    }
  `;

  return (
    <section
      id="industry"
      style={{
        background: '#020814',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        color: '#ffffff',
        padding: '7.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#2DD4BF',
                marginBottom: '0.85rem',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              PROVEN CROSS-SECTOR EXPERTISE
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Industry Domain Reach.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2DD4BF 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Engineered Precision.
              </span>
            </h2>
          </div>

          <Link
            href="/industries"
            className="home-industry-cta-btn"
            style={{
              background: 'linear-gradient(93.05deg, #008559 0%, #00A389 100%)',
              color: '#ffffff',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontFamily: "'Montserrat', sans-serif",
              boxShadow: '0 4px 15px rgba(0, 133, 89, 0.35)',
            }}
          >
            <span>Explore All Verticals</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Vani HQ Exact Animation and Card Structure (Row 1 & Row 2) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* ==============================================================
              ROW 1: BFSI (0), Manufacturing (1), Healthcare (2)
              ============================================================== */}
          <div className="vi-so-much-card-wrapper">
            {row1Sectors.map((sector, idx) => {
              const isActive = activeRow1 === idx;
              return (
                <Link
                  key={sector.id}
                  href={sector.link}
                  className={`vi-flex vi-redirect-URL ${isActive ? 'vi-active' : ''}`}
                  role="link"
                  tabIndex={0}
                  style={{
                    backgroundColor: sector.bgColor,
                    color: sector.textColor,
                    backgroundImage: sector.hasGrid
                      ? 'linear-gradient(rgba(225, 153, 138, 0.45) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(225, 153, 138, 0.45) 1.5px, transparent 1.5px)'
                      : 'none',
                    backgroundSize: '88px 88px',
                  }}
                >
                  <div className="vi-section-head">
                    <h3 className="vi-section-title">{sector.name}</h3>
                    <p style={{ color: sector.descColor }}>{sector.desc}</p>
                  </div>

                  {/* Exact Vani open-link diagonal arrow */}
                  <span className="vi-redirect-icon">
                    <svg
                      className="vi-svg-icon"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.759 1.54073c.3944.04146.6806.39485.6391.78932l-1.0026 9.53985c-.0415.3944-.3949.6806-.7894.6392-.3944-.0415-.6806-.3949-.6391-.7894l.8214-7.81544-9.81518 7.94814c-.30825.2497-.76049.2021-1.010102-.1061-.249614-.3083-.202083-.7605.106162-1.0101l9.81522-7.94821-7.8155-.82144c-.39447-.04146-.68064-.39485-.63918-.78932.04146-.394465.39485-.680634.78932-.639174L12.759 1.54073Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  {/* Watermark SVG Illustration */}
                  <span className="vi-bottom-image">
                    {sector.watermarkSvg}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* ==============================================================
              ROW 2: Retail (0), Logistics (1), Cloud GCC (2)
              ============================================================== */}
          <div className="vi-so-much-card-wrapper">
            {row2Sectors.map((sector, idx) => {
              const isActive = activeRow2 === idx;
              return (
                <Link
                  key={sector.id}
                  href={sector.link}
                  className={`vi-flex vi-redirect-URL ${isActive ? 'vi-active' : ''}`}
                  role="link"
                  tabIndex={0}
                  style={{
                    backgroundColor: sector.bgColor,
                    color: sector.textColor,
                    backgroundImage: sector.hasGrid
                      ? 'linear-gradient(rgba(251, 146, 60, 0.35) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(251, 146, 60, 0.35) 1.5px, transparent 1.5px)'
                      : 'none',
                    backgroundSize: '88px 88px',
                  }}
                >
                  <div className="vi-section-head">
                    <h3 className="vi-section-title">{sector.name}</h3>
                    <p style={{ color: sector.descColor }}>{sector.desc}</p>
                  </div>

                  {/* Exact Vani open-link diagonal arrow */}
                  <span className="vi-redirect-icon">
                    <svg
                      className="vi-svg-icon"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.759 1.54073c.3944.04146.6806.39485.6391.78932l-1.0026 9.53985c-.0415.3944-.3949.6806-.7894.6392-.3944-.0415-.6806-.3949-.6391-.7894l.8214-7.81544-9.81518 7.94814c-.30825.2497-.76049.2021-1.010102-.1061-.249614-.3083-.202083-.7605.106162-1.0101l9.81522-7.94821-7.8155-.82144c-.39447-.04146-.68064-.39485-.63918-.78932.04146-.394465.39485-.680634.78932-.639174L12.759 1.54073Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  {/* Watermark SVG Illustration */}
                  <span className="vi-bottom-image">
                    {sector.watermarkSvg}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Embedded Style Tag guaranteed across Next.js SSR and client hydration */}
      <style dangerouslySetInnerHTML={{ __html: vaniDeckCSS }} />
    </section>
  );
}
