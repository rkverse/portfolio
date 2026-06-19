"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",           label: "Home" },
  { href: "/about",      label: "About" },
  { href: "/projects",   label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog",       label: "Blog" },
  { href: "/contact",    label: "Contact" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 2.5rem;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .navbar--scrolled {
          background: rgba(8,8,16,0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--line);
        }
        .navbar__inner {
          max-width: 1280px; margin: 0 auto;
          height: 72px; display: flex; align-items: center; justify-content: space-between;
        }
        .navbar__logo {
          font-family: var(--font-display);
          font-size: 1.1rem; font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text);
          display: flex; align-items: center; gap: 8px;
        }
        .navbar__logo-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent); display: inline-block;
        }
        .navbar__links {
          display: flex; align-items: center; gap: 2.5rem;
          list-style: none;
        }
        .navbar__link {
          font-family: var(--font-mono);
          font-size: 0.78rem; font-weight: 400;
          letter-spacing: 0.04em;
          color: var(--text-2);
          text-transform: lowercase;
          transition: color var(--transition);
          position: relative;
        }
        .navbar__link::after {
          content: ''; position: absolute; bottom: -3px; left: 0;
          width: 0; height: 1px; background: var(--accent);
          transition: width var(--transition);
        }
        .navbar__link:hover,
        .navbar__link--active { color: var(--text); }
        .navbar__link--active::after,
        .navbar__link:hover::after { width: 100%; }
        .navbar__cta {
          font-family: var(--font-mono);
          font-size: 0.75rem; font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--bg);
          background: var(--accent);
          padding: 0.5rem 1.2rem;
          border-radius: var(--r-sm);
          transition: opacity var(--transition), transform var(--transition);
        }
        .navbar__cta:hover { opacity: 0.85; transform: translateY(-1px); }
        .navbar__toggle {
          display: none; background: none; border: none;
          color: var(--text); padding: 4px;
        }
        .navbar__mobile {
          display: none; flex-direction: column; gap: 0;
          background: var(--bg-1);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 1.5rem 2.5rem;
        }
        .navbar__mobile-link {
          font-family: var(--font-display);
          font-size: 1.4rem; font-weight: 700;
          color: var(--text-3); padding: 0.6rem 0;
          border-bottom: 1px solid var(--line);
          transition: color var(--transition);
        }
        .navbar__mobile-link:last-child { border-bottom: none; }
        .navbar__mobile-link:hover,
        .navbar__mobile-link--active { color: var(--text); }
        .navbar__mobile-cta {
          margin-top: 1.5rem;
          font-family: var(--font-mono); font-size: 0.8rem;
          font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--bg); background: var(--accent);
          padding: 0.75rem 1.5rem; border-radius: var(--r-sm);
          text-align: center;
        }
        @media (max-width: 768px) {
          .navbar { padding: 0 1.5rem; }
          .navbar__links, .navbar__cta { display: none; }
          .navbar__toggle { display: block; }
          .navbar__mobile { display: ${open ? "flex" : "none"}; }
        }
      `}</style>

      <nav className="navbar__inner">
        <Link href="/" className="navbar__logo">
          <span className="navbar__logo-dot" />
          Raj Karan
        </Link>

        <ul className="navbar__links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`navbar__link ${pathname === href ? "navbar__link--active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="navbar__cta">
          Hire me
        </Link>

        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open
              ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
              : <><line x1="3" y1="7" x2="19" y2="7"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="17" x2="19" y2="17"/></>
            }
          </svg>
        </button>
      </nav>

      <div className="navbar__mobile">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href} href={href}
            onClick={() => setOpen(false)}
            className={`navbar__mobile-link ${pathname === href ? "navbar__mobile-link--active" : ""}`}
          >
            {label}
          </Link>
        ))}
        <a href="mailto:rajkaranprem@outlook.com" className="navbar__mobile-cta">
          Hire me
        </a>
      </div>
    </header>
  );
}