"use client"
import { useState, useEffect, useRef } from "react";

const LOGO_URL = "/images-removebg-preview.png";
const BG_URL = "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/d6dfb3181348827.651ed2ad18051.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Campus", href: "#campus" },
  { label: "Placements", href: "#placements" },
  { label: "About", href: "#about" },
];

const PROGRAMS = [
  { code: "CSE", name: "Computer Science & Engineering", seats: 180, icon: "💻" },
  { code: "ECE", name: "Electronics & Communication", seats: 120, icon: "📡" },
  { code: "ME", name: "Mechanical Engineering", seats: 60, icon: "⚙️" },
  { code: "CE", name: "Civil Engineering", seats: 60, icon: "🏗️" },
  { code: "EEE", name: "Electrical & Electronics", seats: 60, icon: "⚡" },
  { code: "MBA", name: "Master of Business Admin", seats: 60, icon: "📊" },
];

const STATS = [
  { value: "272%", label: "Placement Rate", sub: "2023 batch" },
  { value: "₹10 LPA", label: "Highest CTC", sub: "offered" },
  { value: "8000+", label: "Students", sub: "across campuses" },
  { value: "400+", label: "Faculty", sub: "members" },
];

const RECRUITERS = ["TCS", "Infosys", "Wipro", "Capgemini", "Cognizant", "IBM", "Genpact", "Unisys", "Reliance Jio", "Sonodyne"];

const TESTIMONIALS = [
  {
    name: "Alumni — IBM",
    quote: "SVIST played a vital role in building my career at IBM. They helped me realize my strengths and develop areas that mattered most in interviews.",
    batch: "B.Tech CSE",
  },
  {
    name: "Alumni — TCS & Wipro",
    quote: "I got placed in Genpact, Unisys, Wipro, TCS, and Reliance Jio during campus drives in my final year. The exposure was phenomenal.",
    batch: "B.Tech ECE",
  },
  {
    name: "Alumni — Soni Rubber Products",
    quote: "Life at college was truly awesome. The love and affection I received every day gave me the energy to achieve my dreams.",
    batch: "B.Tech ME",
  },
];

export default function SVISTWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "'Rethink Sans', sans-serif" }} className="min-h-screen bg-white text-neutral-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap');

        :root {
          --orange: #F4600C;
          --orange-light: #FF7A2F;
          --orange-dark: #C44A00;
          --orange-faint: #FFF3EC;
          --orange-mid: #FDDCC8;
        }

        html { scroll-behavior: smooth; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        .nav-link {
          position: relative;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: opacity 0.2s;
          padding: 0.25rem 0;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1.5px;
          background: var(--orange-light);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link:hover { opacity: 0.85; }

        .btn-primary {
          background: var(--orange);
          color: white;
          border: none;
          border-radius: 4px;
          padding: 0.65rem 1.5rem;
          font-family: 'Rethink Sans', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-transform: uppercase;
        }
        .btn-primary:hover { background: var(--orange-light); transform: translateY(-1px); }

        .btn-outline {
          background: transparent;
          color: white;
          border: 1.5px solid rgba(255,255,255,0.55);
          border-radius: 4px;
          padding: 0.65rem 1.5rem;
          font-family: 'Rethink Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          text-transform: uppercase;
        }
        .btn-outline:hover { border-color: white; background: rgba(255,255,255,0.08); }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-inner {
          display: flex;
          animation: ticker 30s linear infinite;
          width: max-content;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.75s ease both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.26s; }
        .delay-3 { animation-delay: 0.42s; }
        .delay-4 { animation-delay: 0.58s; }

        .program-card {
          border: 1px solid #ffe0cc;
          border-radius: 6px;
          padding: 1.5rem;
          background: white;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          cursor: default;
        }
        .program-card:hover {
          border-color: var(--orange);
          box-shadow: 0 4px 24px rgba(244,96,12,0.10);
          transform: translateY(-3px);
        }

        .stat-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--orange);
          line-height: 1.1;
        }

        .section-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--orange);
          font-weight: 700;
          padding: 0.2rem 0.65rem;
          border: 1px solid var(--orange-mid);
          background: var(--orange-faint);
          border-radius: 2px;
          display: inline-block;
          margin-bottom: 0.85rem;
        }

        .divider-orange {
          width: 52px;
          height: 3px;
          background: var(--orange);
          margin: 0.85rem 0 1.25rem;
          border-radius: 2px;
        }

        .testimonial-card {
          background: white;
          border: 1px solid var(--orange-mid);
          border-top: 3px solid var(--orange);
          border-radius: 6px;
          padding: 2rem;
          max-width: 640px;
          margin: 0 auto;
        }

        .recruiter-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 500;
          padding: 0.4rem 0.85rem;
          border: 1px solid #ffdcc8;
          border-radius: 3px;
          background: var(--orange-faint);
          color: var(--orange-dark);
          letter-spacing: 0.04em;
        }

        .orange-accent-bar {
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--orange) 0%, var(--orange-light) 50%, #FFB366 100%);
        }

        footer a { color: rgba(255,255,255,0.5); transition: color 0.2s; text-decoration: none; }
        footer a:hover { color: var(--orange-light); }

        .scroll-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          border: 1.5px solid var(--orange);
          background: transparent;
          cursor: pointer;
          transition: background 0.2s;
          padding: 0;
        }
        .scroll-dot.active { background: var(--orange); }

        .hero-overlay {
          background: linear-gradient(
            105deg,
            rgba(10,4,0,0.88) 0%,
            rgba(20,8,0,0.78) 35%,
            rgba(30,12,0,0.55) 65%,
            rgba(0,0,0,0.25) 100%
          );
        }
      `}</style>

      {/* ─── NAV ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
        style={{
          background: scrolled ? "rgba(12,5,0,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="SVIST Logo"
              className="h-10 w-10 object-contain rounded"
              style={{ padding: "2px" }}
            />
            <div>
              <div className="text-white font-extrabold text-sm leading-tight tracking-wide">SVIST</div>
              <div className="mono text-white/40" style={{ fontSize: "0.58rem", letterSpacing: "0.1em" }}>
                EST. 2008 · KOLKATA
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact">
              <button className="btn-outline" style={{ padding: "0.48rem 1.1rem", fontSize: "0.76rem" }}>Contact</button>
            </a>
            <a href="#programs">
              <button className="btn-primary" style={{ padding: "0.48rem 1.1rem", fontSize: "0.76rem" }}>Apply Now →</button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ background: "rgba(12,5,0,0.97)" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-white font-medium text-sm" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <button className="btn-primary w-full mt-1">Apply Now →</button>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${BG_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Decorative orange glow — bottom left */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "8%", left: "-5%",
            width: "360px", height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(244,96,12,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
          <div className="max-w-2xl">
            <div className="fade-up">
              <span className="mono text-xs font-bold tracking-widest uppercase" style={{ color: "var(--orange-light)" }}>
                ◆ Swami Vivekananda Group of Institutes
              </span>
            </div>

            <h1
              className="fade-up delay-1 text-white mt-4 leading-none tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)", fontWeight: 800 }}
            >
              Engineering
              <br />
              <span style={{ color: "var(--orange-light)" }}>Excellence</span>
              <br />
              in Kolkata.
            </h1>

            <div className="fade-up delay-2" style={{ width: "80px", height: "3px", background: "var(--orange)", marginTop: "1.25rem", marginBottom: "1rem", borderRadius: "2px" }} />

            <p className="fade-up delay-2 max-w-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.68)", fontSize: "1rem" }}>
              AICTE Approved · NAAC 'B' Accredited · MAKAUT Affiliated.
              B.Tech &amp; MBA programs at Sonarpur, South Kolkata — shaping engineers since 2008.
            </p>

            <div className="fade-up delay-3 flex flex-wrap gap-3 mt-8">
              <button className="btn-primary" style={{ fontSize: "0.9rem", padding: "0.75rem 1.8rem" }}>Apply for 2026 →</button>
              <button className="btn-outline" style={{ fontSize: "0.9rem", padding: "0.75rem 1.8rem" }}>Explore Programs</button>
            </div>

            {/* Quick stats */}
            <div className="fade-up delay-4 flex flex-wrap gap-8 mt-12 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[["272%","Placement Rate"],["₹10 LPA","Highest Package"],["960","Total Seats"]].map(([v,l]) => (
                <div key={l}>
                  <div className="mono font-bold text-xl" style={{ color: "var(--orange-light)" }}>{v}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom recruiter ticker */}
        <div className="relative w-full overflow-hidden" style={{ background: "rgba(0,0,0,0.55)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="py-3">
            <div className="ticker-inner">
              {[...RECRUITERS, ...RECRUITERS, ...RECRUITERS, ...RECRUITERS].map((r, i) => (
                <span key={i} className="mono text-xs px-6 whitespace-nowrap" style={{ color: "rgba(255,165,80,0.65)", letterSpacing: "0.12em" }}>
                  {r}<span style={{ color: "var(--orange)", margin: "0 10px" }}>◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ORANGE BAR ─── */}
      <div className="orange-accent-bar" />

      {/* ─── STATS ─── */}
      <section className="py-20" style={{ background: "var(--orange-faint)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="stat-num">{s.value}</div>
                <div className="font-bold text-neutral-800 mt-1 text-sm">{s.label}</div>
                <div className="mono text-xs mt-0.5" style={{ color: "var(--orange-dark)", opacity: 0.65 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="section-tag">Programs Offered</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight">
                Choose Your Path to<br />
                <span style={{ color: "var(--orange)" }}>Innovation.</span>
              </h2>
            </div>
            <p className="max-w-xs text-neutral-500 text-sm leading-relaxed">
              Industry-aligned curriculum. Experienced faculty. State-of-the-art labs.
              Admission via WBJEE, JEE Mains, and MAT.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((p) => (
              <div key={p.code} className="program-card">
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="mono text-xs font-bold mb-1 tracking-widest uppercase" style={{ color: "var(--orange)" }}>{p.code}</div>
                <h3 className="font-bold text-neutral-900 text-base leading-snug">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    <span className="mono font-semibold text-neutral-700">{p.seats}</span> seats
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--orange)" }}>Learn more →</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ background: "var(--orange-faint)", border: "1px solid var(--orange-mid)" }}>
            <div>
              <p className="font-bold text-neutral-900">50–100% Scholarships Available</p>
              <p className="text-sm text-neutral-600 mt-0.5">Via the SVGI Scholarship Test — for top-performing students on tuition fees.</p>
            </div>
            <button className="btn-primary whitespace-nowrap">Check Eligibility →</button>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / CAMPUS ─── */}
      <section id="campus" className="py-24" style={{ background: "linear-gradient(155deg,#100500 0%,#2a0f00 55%,#3d1800 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="mono text-xs font-bold tracking-widest uppercase" style={{ color: "var(--orange-light)" }}>◆ About SVIST</span>
              <h2 className="text-white text-3xl md:text-4xl font-extrabold mt-3 leading-tight">
                More Than a Degree —<br />
                <span style={{ color: "var(--orange-light)" }}>A Community.</span>
              </h2>
              <div className="divider-orange" />
              <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                Established in 2008 at Dakshin Gobindapur, Sonarpur, SVIST is part of the Swami Vivekananda
                Group of Institutes — a network spanning 100+ acres, 400+ faculty, and 8,000 students across
                Kolkata, Barrackpore, and South 24 Parganas.
              </p>
              <p className="mt-4 leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Affiliated to MAKAUT and recognised by AICTE, SVIST combines rigorous academics with
                industry integration through MoUs with Eleation, Endurance Technologies, HwxaHire and others.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[["MAKAUT Affiliated","✓"],["AICTE Approved","✓"],["NAAC Accredited 'B'","✓"],["20+ MoU Partners","✓"]].map(([l,v]) => (
                  <div key={l} className="flex items-center gap-2 p-3 rounded"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <span className="mono font-bold text-sm w-5 h-5 flex items-center justify-center rounded"
                      style={{ color: "var(--orange-light)", background: "rgba(244,96,12,0.18)" }}>{v}</span>
                    <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📚", title: "Library & Research", desc: "Extensive digital and physical library resources" },
                { icon: "🏟️", title: "Auditorium", desc: "State-of-the-art event & seminar spaces" },
                { icon: "🌐", title: "Wi-Fi Campus", desc: "High-speed internet across the entire campus" },
                { icon: "🏠", title: "Hostel Facility", desc: "Affordable on-campus housing for outstation students" },
              ].map((f) => (
                <div key={f.title} className="p-4 rounded"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(244,96,12,0.18)" }}>
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <div className="font-bold text-white text-sm">{f.title}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PLACEMENTS ─── */}
      <section id="placements" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="section-tag">Placements</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight">
              Real Careers at<br />
              <span style={{ color: "var(--orange)" }}>Top Companies.</span>
            </h2>
            <div className="divider-orange" />
            <p className="text-neutral-500 text-sm leading-relaxed">
              With a 272% placement rate in 2023 and highest CTC of ₹10 LPA, SVIST's career support ensures every student steps out career-ready.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {RECRUITERS.map((r) => (
              <span key={r} className="recruiter-pill">{r}</span>
            ))}
          </div>

          <div className="mt-14">
            <div className="testimonial-card">
              <div className="mono font-black leading-none mb-4" style={{ fontSize: "3.5rem", color: "var(--orange-mid)" }}>"</div>
              <p className="text-neutral-700 leading-relaxed">{TESTIMONIALS[activeTestimonial].quote}</p>
              <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="font-bold text-neutral-900 text-sm">{TESTIMONIALS[activeTestimonial].name}</div>
                  <div className="mono text-xs mt-0.5" style={{ color: "var(--orange-dark)", opacity: 0.8 }}>{TESTIMONIALS[activeTestimonial].batch}</div>
                </div>
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button key={i} className={`scroll-dot ${i === activeTestimonial ? "active" : ""}`}
                      onClick={() => setActiveTestimonial(i)} aria-label={`Testimonial ${i + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH FEST BANNER ─── */}
      <section style={{ background: "linear-gradient(100deg, var(--orange-dark) 0%, var(--orange) 55%, var(--orange-light) 100%)" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="mono text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>◆ Upcoming Event</div>
            <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-tight">Innovetion 2026</h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
              1st & 2nd April · SVIST Campus · <span className="font-semibold">Techtrix · Robotics · Code Storm · Esports</span>
            </p>
          </div>
          <button className="whitespace-nowrap rounded font-extrabold uppercase tracking-wider text-sm px-7 py-3 transition-all"
            style={{ background: "white", color: "var(--orange-dark)", border: "none", cursor: "pointer" }}>
            Register Now →
          </button>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="section-tag">Get in Touch</span>
              <h2 className="text-3xl font-extrabold text-neutral-900 leading-tight">
                Start Your Journey<br />
                <span style={{ color: "var(--orange)" }}>at SVIST.</span>
              </h2>
              <div className="divider-orange" />

              <div className="mt-4 space-y-5 text-sm">
                {[
                  ["📍","Address","Dakshin Gobindapur, P.S. Sonarpur, Kolkata – 700145, West Bengal"],
                  ["📞","Phone","+91 98310 84446  ·  +91 33 2437-9913"],
                  ["✉️","Email","info@svist.org"],
                  ["🌐","Website","www.svist.org"],
                ].map(([icon,label,val]) => (
                  <div key={label as string} className="flex gap-3">
                    <span className="text-base mt-0.5">{icon}</span>
                    <div>
                      <div className="mono text-xs font-bold uppercase tracking-wider" style={{ color: "var(--orange)" }}>{label}</div>
                      <div className="text-neutral-700 mt-0.5">{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Logo in contact section */}
              <div className="mt-10 flex items-center gap-4 p-4 rounded"
                style={{ background: "var(--orange-faint)", border: "1px solid var(--orange-mid)", width: "fit-content" }}>
                <img src={LOGO_URL} alt="SVIST Logo" className="h-14 w-14 object-contain" />
                <div>
                  <div className="font-extrabold text-neutral-900">SVIST</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Swami Vivekananda Institute<br />of Science & Technology</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded" style={{ background: "var(--orange-faint)", border: "1px solid var(--orange-mid)" }}>
              <h3 className="font-extrabold text-neutral-900 text-lg mb-5">Request Free Consultation</h3>
              <div className="space-y-3">
                {["Full Name","Email Address","Phone Number"].map((ph) => (
                  <input key={ph} type="text" placeholder={ph}
                    className="w-full border rounded px-4 py-2.5 text-sm outline-none"
                    style={{ borderColor: "#ffdcc8", background: "white", fontFamily: "'Rethink Sans', sans-serif" }} />
                ))}
                <select className="w-full border rounded px-4 py-2.5 text-sm outline-none"
                  style={{ borderColor: "#ffdcc8", background: "white", fontFamily: "'Rethink Sans', sans-serif", color: "#6b7280" }}>
                  <option value="">Select Program of Interest</option>
                  {PROGRAMS.map((p) => (
                    <option key={p.code} value={p.code}>{p.code} — {p.name}</option>
                  ))}
                </select>
                <button className="btn-primary w-full" style={{ fontSize: "0.875rem", padding: "0.7rem" }}>
                  Submit Enquiry →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12" style={{ background: "#0a0200" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={LOGO_URL} alt="SVIST" className="h-10 w-10 object-contain rounded"
                  style={{ background: "rgba(255,255,255,0.06)", padding: "2px" }} />
                <span className="text-white font-extrabold tracking-wide">SVIST</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                Swami Vivekananda Institute<br />of Science & Technology<br />Kolkata, West Bengal
              </p>
            </div>

            {[
              { heading: "Programs", links: ["B.Tech CSE","B.Tech ECE","B.Tech ME","B.Tech CE","B.Tech EEE","MBA"] },
              { heading: "Quick Links", links: ["Admissions","Placements","Scholarships","Campus Life","About Us"] },
              { heading: "Contact", links: ["+91 98310 84446","info@svist.org","Sonarpur, Kolkata 700145"] },
            ].map((col) => (
              <div key={col.heading}>
                <div className="mono text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--orange-light)" }}>{col.heading}</div>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="text-xs">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="mono text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              © 2026 SVIST · Swami Vivekananda Group of Institutes
            </span>
            <span className="mono text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
              AICTE · MAKAUT · NAAC
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
