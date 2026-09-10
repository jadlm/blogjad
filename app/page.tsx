"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  ExternalLink,
  Mail,
  Menu,
  Phone,
  Send,
  X,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  url: string;
  domain: string;
  screenshot: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Couronne Urban",
    category: "Menuiserie & Décoration",
    description:
      "Site vitrine pour une entreprise de menuiserie sur mesure, décoration intérieure et aménagement d'espaces à Casablanca.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://couronneurban.vercel.app/",
    domain: "couronneurban.vercel.app",
    screenshot: "/screenshots/couronne-urban.png",
  },
  {
    number: "02",
    name: "Atelier Nord",
    category: "Architecture Intérieure",
    description:
      "Site d'un studio d'architecture intérieure. Des intérieurs singuliers et durables, pensés avec justesse.",
    stack: ["React", "Vite", "CSS"],
    url: "https://atelier-one-coral.vercel.app/",
    domain: "atelier-one-coral.vercel.app",
    screenshot: "/screenshots/atelier-nord.png",
  },
  {
    number: "03",
    name: "Anass Laalili",
    category: "Peinture & Rénovation",
    description:
      "Site professionnel pour un artisan spécialisé en peinture et rénovation de qualité à Casablanca.",
    stack: ["React", "Vite", "CSS"],
    url: "https://anasslaalili.vercel.app/",
    domain: "anasslaalili.vercel.app",
    screenshot: "/screenshots/anass-laalili.png",
  },
  {
    number: "04",
    name: "MCP Yassine",
    category: "Cabinet d'Architecture",
    description:
      "Site pour MCP Architecture — cabinet de conception, rénovation et suivi de projets architecturaux.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://mcpyassine.vercel.app/",
    domain: "mcpyassine.vercel.app",
    screenshot: "/screenshots/mcp-yassine.png",
  },
  {
    number: "05",
    name: "CAN 2025",
    category: "Billetterie Sportive",
    description:
      "Plateforme de billetterie pour la Coupe d'Afrique des Nations 2025 au Maroc. Calendrier, stades et réservation.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://can2025.vercel.app/",
    domain: "can2025.vercel.app",
    screenshot: "/screenshots/can-2025.png",
  },
  {
    number: "06",
    name: "DXN Maroc",
    category: "E-commerce Bien-être",
    description:
      "Boutique en ligne de produits DXN — compléments, boissons santé et cosmétiques naturels livrés au Maroc.",
    stack: ["Next.js", "Tailwind CSS", "React"],
    url: "https://dxnmar.vercel.app/",
    domain: "dxnmar.vercel.app",
    screenshot: "/screenshots/dxn-maroc.png",
  },
];

const skills = [
  ["FRONT-END", "HTML / CSS", "JavaScript", "React / Next.js"],
  ["BACK-END", "Java", "Spring Boot", "REST APIs"],
  ["OUTILS", "Git / GitHub", "Vercel", "Responsive Design"],
];

const services = [
  {
    icon: "🌐",
    title: "Sites web",
    desc: "Sites vitrines, landing pages et plateformes conçus pour être rapides, clairs et efficaces.",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    desc: "Boutiques en ligne complètes avec gestion de produits, panier et processus de commande.",
  },
  {
    icon: "📱",
    title: "Design responsive",
    desc: "Interfaces adaptées à tous les écrans avec une expérience fluide sur mobile, tablette et desktop.",
  },
  {
    icon: "⚡",
    title: "Performance",
    desc: "Optimisation du temps de chargement, SEO technique et bonnes pratiques web modernes.",
  },
  {
    icon: "🎨",
    title: "UI / UX Design",
    desc: "Design d'interfaces centrées sur l'utilisateur, avec une attention particulière aux détails.",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    desc: "Mises à jour, corrections et évolutions continues pour garder votre site performant.",
  },
];

/* ═══════════════════════════════════════════════
   REVEAL COMPONENT
   ═══════════════════════════════════════════════ */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   BROWSER WINDOW COMPONENT
   ═══════════════════════════════════════════════ */
function BrowserWindow({ project }: { project: Project }) {
  return (
    <div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block" }}
      >
        <div className="browser-window">
          {/* Top bar */}
          <div className="browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="browser-url">
              <span className="live-dot" />
              {project.domain}
            </div>
          </div>

          {/* Screenshot viewport */}
          <div className="browser-viewport">
            <img
              src={project.screenshot}
              alt={`${project.name} — ${project.category}`}
              loading="lazy"
              decoding="async"
            />
            <div className="browser-overlay">
              <span className="visit-btn">
                View live site
                <ArrowUpRight size={15} />
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* Meta info below */}
      <div className="project-meta">
        <p className="project-number">{project.number} / {project.name}</p>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */
export default function Home() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const prefersReducedMotion = useReducedMotion();

  const copyEmail = async () => {
    await navigator.clipboard.writeText("jadllamtaifi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      const shouldReduce = Boolean(mediaQuery.matches || prefersReducedMotion);
      setReducedMotion(shouldReduce);
      document.body.classList.toggle("reduced-motion", shouldReduce);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, [prefersReducedMotion]);

  // Navbar scroll & active section
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ─────────── NAVBAR ─────────── */}
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="shell nav-inner">
          <a className="brand" href="#top">
            Jad Lamtaifi
          </a>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={activeSection === href.slice(1) ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="toggle-reduced-motion"
              type="button"
              onClick={() => setReducedMotion((prev) => !prev)}
              aria-label="Basculer la réduction des animations"
            >
              {reducedMotion ? "Animations on" : "Réduire les animations"}
            </button>
            <a className="nav-contact" href="#contact">
              Let&apos;s talk <ArrowUpRight size={14} />
            </a>
            <button
              className="menu-btn"
              aria-label="Menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero shell" id="hero">
          <div className="hero-content">
            <div className="hero-copy">
              <motion.div
                className="hero-label"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.1 }}
              >
                Portfolio — 2026
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.2 }}
              >
                Jad Lamtaifi
              </motion.h1>

              <motion.p
                className="hero-role"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.3 }}
              >
                Full-Stack Developer
              </motion.p>

              <motion.p
                className="hero-desc"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.5 }}
              >
                Je conçois et développe des expériences web modernes, performantes et adaptées aux besoins réels des entreprises.
              </motion.p>

              <motion.div
                className="hero-cta"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.65 }}
              >
                <a className="button primary" href="#work">
                  Explore projects <ArrowDownRight size={16} />
                </a>
                <a className="button ghost" href="#contact">
                  Contact me <ArrowUpRight size={16} />
                </a>
              </motion.div>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.96, x: 18 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.15 }}
            >
              <div className="portrait-frame">
                <img
                  src="/jadimagepro.jpeg"
                  alt="Portrait de Jad Lamtaifi"
                  className="portrait-image"
                />
              </div>
            </motion.div>
          </div>

          <div className="scroll-hint">
            <span />
            Scroll
          </div>
        </section>

        {/* ─────────── SELECTED WORK ─────────── */}
        <section className="work-section" id="work">
          <div className="shell">
            <Reveal>
              <div className="work-header">
                <p className="eyebrow">Selected Work</p>
                <h2 className="section-title">
                  Sites <em>réalisés</em>
                </h2>
                <p className="section-subtitle">
                  Une sélection de projets web conçus et développés avec une
                  attention particulière portée à l&apos;expérience utilisateur,
                  au design et aux performances.
                </p>
              </div>
            </Reveal>

            <div className="projects-editorial">
              {/* Row 1 — Couronne Urban (full) */}
              <Reveal>
                <div className="project-row full">
                  <BrowserWindow project={projects[0]} />
                </div>
              </Reveal>

              {/* Row 2 — Atelier Nord (full) */}
              <Reveal>
                <div className="project-row full">
                  <BrowserWindow project={projects[1]} />
                </div>
              </Reveal>

              {/* Row 3 — Anass Laalili + MCP Yassine (split) */}
              <div className="project-row split">
                <Reveal>
                  <BrowserWindow project={projects[2]} />
                </Reveal>
                <Reveal delay={0.15}>
                  <BrowserWindow project={projects[3]} />
                </Reveal>
              </div>

              {/* Row 4 — CAN 2025 (full) */}
              <Reveal>
                <div className="project-row full">
                  <BrowserWindow project={projects[4]} />
                </div>
              </Reveal>

              {/* Row 5 — DXN Maroc (full) */}
              <Reveal>
                <div className="project-row full">
                  <BrowserWindow project={projects[5]} />
                </div>
              </Reveal>
            </div>

            <a
              className="github-link"
              href="https://github.com/jadlm"
              target="_blank"
              rel="noreferrer"
            >
              See all repositories on GitHub <Code2 size={16} />
            </a>
          </div>
        </section>

        {/* ─────────── SERVICES ─────────── */}
        <section className="section" id="services">
          <div className="shell">
            <Reveal>
              <div className="section-head">
                <div>
                  <p className="eyebrow">02 / Services</p>
                  <h2 className="section-title">
                    Ce que je <em>propose</em>
                  </h2>
                </div>
                <p className="section-note">
                  Du design à la mise en ligne, un accompagnement complet pour
                  votre projet web.
                </p>
              </div>
            </Reveal>

            <div className="services-grid-layout">
              {services.map((svc, i) => (
                <Reveal key={svc.title} delay={i * 0.08}>
                  <div className="service-item">
                    <div className="service-icon-wrap">{svc.icon}</div>
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── ABOUT ─────────── */}
        <section className="section" id="about">
          <div className="shell about-grid">
            <Reveal>
              <div>
                <p className="eyebrow">03 / À propos</p>
                <h2 className="section-title">
                  Du fond
                  <br />à la <em>forme</em>.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="about-copy">
                <p className="lead">
                  Je conçois des applications web où l&apos;interface, la logique
                  et la performance avancent ensemble.
                </p>
                <p>
                  Mon profil se situe à la rencontre du front-end et du
                  back-end. Les projets visibles dans ce portfolio témoignent
                  d&apos;un parcours qui traverse les sites vitrines, les
                  applications React/Next.js et les plateformes e-commerce.
                </p>
                <p>
                  Chaque projet commence par une question simple : comment
                  rendre l&apos;outil plus évident pour la personne qui
                  l&apos;utilise ?
                </p>
                <div className="location">Casablanca, Maroc</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─────────── SKILLS ─────────── */}
        <section className="section" id="skills">
          <div className="shell">
            <Reveal>
              <div className="section-head">
                <div>
                  <p className="eyebrow">04 / Compétences</p>
                  <h2 className="section-title">
                    Les bons outils
                    <br />
                    au bon <em>endroit</em>.
                  </h2>
                </div>
                <p className="section-note">
                  Une sélection basée sur les technologies utilisées dans mes
                  projets.
                </p>
              </div>
            </Reveal>

            <div className="skills-grid">
              {skills.map(([title, ...items]) => (
                <Reveal key={title}>
                  <div className="skill-group">
                    <p className="skill-label">{title}</p>
                    {items.map((item, i) => (
                      <div className="skill-row" key={item}>
                        <span className="mono">0{i + 1}</span>
                        <strong>{item}</strong>
                        <ArrowUpRight size={14} />
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── METHOD ─────────── */}
        <section className="section">
          <div className="shell method-grid">
            <Reveal>
              <div>
                <p className="eyebrow">05 / Méthode</p>
                <h2 className="section-title">
                  Clair.
                  <br />
                  Concentré.
                  <br />
                  <em>Curieux.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="method-list">
                {[
                  "Comprendre le besoin",
                  "Dessiner l'expérience",
                  "Construire avec précision",
                  "Améliorer en continu",
                ].map((item, i) => (
                  <div className="method-row" key={item}>
                    <span className="mono">0{i + 1}</span>
                    <strong>{item}</strong>
                    <ArrowUpRight size={15} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─────────── CONTACT ─────────── */}
        <section className="section contact-section" id="contact">
          <div className="shell contact-grid">
            <Reveal>
              <div>
                <p className="eyebrow">06 / Contact</p>
                <h2 className="section-title">Contactez-moi</h2>
                <p className="contact-text">
                  Pour une collaboration, une question ou simplement faire connaissance, je suis disponible pour échanger autour de votre projet.
                </p>

                <div className="contact-list">
                  <a href="mailto:jadllamtaifi@gmail.com" className="contact-item">
                    <span className="contact-icon"><Mail size={18} /></span>
                    <div>
                      <small>Email</small>
                      <strong>jadllamtaifi@gmail.com</strong>
                    </div>
                  </a>

                  <a href="tel:+212621924487" className="contact-item">
                    <span className="contact-icon"><Phone size={18} /></span>
                    <div>
                      <small>Téléphone</small>
                      <strong>+212 621924487</strong>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/lamtaifi-jad-2418bb239/" target="_blank" rel="noreferrer" className="contact-item">
                    <span className="contact-icon"><ExternalLink size={18} /></span>
                    <div>
                      <small>LinkedIn</small>
                      <strong>Jad Lamtaifi</strong>
                    </div>
                  </a>
                </div>

                <div className="contact-actions">
                  <a className="button primary" href="mailto:jadllamtaifi@gmail.com">
                    <Mail size={16} /> Envoyer un e-mail
                  </a>
                  <a className="button ghost" href="tel:+212621924487">
                    <Phone size={16} /> Appeler
                  </a>
                  <a className="button ghost" href="https://www.linkedin.com/in/lamtaifi-jad-2418bb239/" target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field-row">
                  <label>
                    <span>Nom</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </label>
                  <label>
                    <span>E-mail</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>Sujet</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    required
                  />
                </label>

                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    required
                  />
                </label>

                <button type="submit" className="button primary submit-btn">
                  <Send size={16} /> Envoyer le message
                </button>

                {formSent && (
                  <p className="success-message">
                    <CheckCircle2 size={16} />
                    Merci ! Votre message a bien été envoyé.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Jad Lamtaifi</span>
          <span className="mono">Full-Stack Developer — Casablanca</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
