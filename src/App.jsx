import { useEffect, useState } from 'react'
import './App.css'

/* eslint-disable react/prop-types */

const navItems = ['about', 'experience', 'projects', 'contact']

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Angular',
  'React.js',
  'Next.js',
  'React Native',
  'Redux',
  'Tailwind CSS',
  'Bootstrap',
  'GitHub',
  'Node.js',
  'MongoDB',
]

const services = [
  {
    number: '01',
    title: 'Web Development',
    text: 'Responsive, polished web experiences built with React and Next.js.',
    icon: 'code',
  },
  {
    number: '02',
    title: 'Mobile Apps',
    text: 'Cross-platform React Native applications with thoughtful user flows.',
    icon: 'phone',
  },
  {
    number: '03',
    title: 'API Integration',
    text: 'Reliable REST API and WebSocket integrations for real-time products.',
    icon: 'api',
  },
  {
    number: '04',
    title: 'UI Implementation',
    text: 'Pixel-aware interfaces translated from design mockups into clean code.',
    icon: 'layers',
  },
]

const experiences = [
  {
    role: 'Senior Front-End Developer',
    company: 'HMS',
    location: 'Nikol, Ahmedabad',
    date: 'Nov 2025 - Present',
    points: [
      'Built scalable healthcare interfaces with Angular for patient and admin dashboards.',
      'Led frontend architecture and component design patterns for a hospital management system.',
      'Mentored junior developers on best practices and code quality standards.',
      'Collaborated with backend and design teams to deliver reliable healthcare solutions.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'The Vikartr Technologies',
    location: 'Gandhinagar, Gujarat',
    date: 'Apr 2024 - Oct 2025',
    points: [
      'Built responsive products with React.js, Next.js and React Native.',
      'Integrated REST APIs, authentication and dynamic routing.',
      'Worked with design and backend teams to deliver reliable interfaces.',
      'Used Redux and Context API for predictable state management.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'The Clickaway IT Solutions',
    location: 'Sola, Ahmedabad',
    date: 'Jun 2023 - Mar 2024',
    points: [
      'Converted UI/UX mockups into interactive web interfaces.',
      'Developed mobile app prototypes with React Native.',
      'Tested and debugged applications for performance and reliability.',
    ],
  },
]

const projects = [
  {
    title: 'BN Share Market',
    type: 'Trading web platform',
    description:
      'A real-time stock trading experience with live market updates, interactive charts, buying and selling flows, advanced filtering and downloadable reports.',
    tags: ['React.js', 'Redux', 'Tailwind', 'WebSocket'],
    accent: 'violet',
    mark: 'BN',
  },
  {
    title: 'LinkEzPay',
    type: 'Mobile payment application',
    description:
      'A responsive React Native application with reusable interfaces, modern mobile patterns and Redux-powered state management.',
    tags: ['React Native', 'Expo', 'Redux'],
    accent: 'cyan',
    mark: 'LP',
  },
  {
    title: 'Trip Travel',
    type: 'Travel booking website',
    description:
      'A complete travel booking flow with secure authentication, dynamic package listings, filtering, detailed views and booking confirmation.',
    tags: ['Next.js', 'Redux', 'Tailwind'],
    accent: 'orange',
    mark: 'TT',
  },
  {
    title: 'Trip Travel App',
    type: 'Travel booking application',
    description:
      'A mobile travel application for exploring destinations, filtering packages, viewing trip details and completing a smooth booking journey.',
    tags: ['React Native', 'Redux', 'REST API', 'Mobile UI'],
    accent: 'blue',
    mark: 'TA',
  },
  {
    title: 'BN Market App',
    type: 'Stock trading application',
    description:
      'A real-time mobile trading application with live prices, WebSocket updates, interactive charts, stock search, secure buy and sell flows and shareable reports.',
    tags: ['React Native', 'Redux', 'WebSocket', 'REST API'],
    accent: 'green',
    mark: 'BM',
  },
  {
    title: 'Business ERP',
    type: 'Enterprise management system',
    description:
      'A centralized ERP solution covering sales, purchase, inventory and HRMS workflows with dashboards, records, reporting and role-based operations.',
    tags: ['React.js', 'Redux', 'REST API', 'Dashboard'],
    accent: 'pink',
    mark: 'ERP',
  },
  {
    title: 'Hospital HMS',
    type: 'Paperless hospital ERP',
    description:
      'A paperless hospital management system covering OPD, IPD and Physiotherapy, with patient registration, appointments, billing, pharmacy, laboratory, staff and clinical records.',
    tags: ['Angular', 'RxJS', 'REST API', 'Dashboard'],
    accent: 'teal',
    mark: 'HMS',
  },
]

function Icon({ name }) {
  const paths = {
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    phone: (
      <>
        <rect width="12" height="20" x="6" y="2" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    api: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.4.3.75.65 1 1 .25.35.4.75.4 1.1V11h.2v4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      {paths[name]}
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = ['home', ...navItems]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -55%', threshold: [0, 0.2, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Harsh Hirpara home">
          <span className="brand-mark">H</span>
          <span>Harsh Hirpara</span>
        </a>

        <nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'}>
          {navItems.map((item) => (
            <a
              className={active === item ? 'active' : ''}
              href={`#${item}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a className="resume-nav" href="/Harsh-Hirpara-Resume.pdf" download>
            Resume
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />

          <div className="hero-content reveal">
            <p className="eyebrow"><span /> Senior front-end developer / Ahmedabad</p>
            <h1>
              Engineering digital
              <br />
              products with <span>clarity.</span>
            </h1>
            <p className="hero-copy">
              I design and build scalable healthcare, enterprise, trading and
              mobile products with Angular, React, Next.js and React Native.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                Explore selected work <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="button button--ghost" href="#contact">
                Let&apos;s talk
              </a>
            </div>
            <div className="hero-meta">
              <span>Based in Ahmedabad, India</span>
              <span>3+ years experience</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Interactive developer illustration">
            <div className="orbit orbit--one">
              <span>NG</span>
            </div>
            <div className="orbit orbit--two">
              <span>RN</span>
            </div>
            <div className="orbit orbit--three">
              <span>NX</span>
            </div>
            <div className="code-window">
              <div className="window-top">
                <i />
                <i />
                <i />
                <span>harsh.workspace</span>
              </div>
              <div className="workspace">
                <div className="workspace-sidebar">
                  <span className="workspace-dot active" />
                  <span className="workspace-dot" />
                  <span className="workspace-dot" />
                  <span className="workspace-dot" />
                </div>
                <div className="workspace-main">
                  <small>PRODUCT SYSTEM</small>
                  <strong>Build. Scale. Deliver.</strong>
                  <div className="code-lines">
                    <span className="line line--short" />
                    <span className="line line--wide" />
                    <span className="line line--mid" />
                  </div>
                  <div className="workspace-metrics">
                    <span><b>07</b> Products</span>
                    <span><b>04</b> Platforms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-status">
              <span>Current focus</span>
              <strong>Angular Healthcare Systems</strong>
            </div>
            <div className="visual-ring" />
          </div>

          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span />
          </a>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="kicker">Introduction</p>
            <h2>Turning ideas into <span>clean experiences.</span></h2>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                I&apos;m a self-motivated front-end developer focused on building
                useful, responsive and dependable digital products. I enjoy
                translating thoughtful designs into interfaces that feel
                natural on every screen.
              </p>
              <p>
                My work spans modern websites, mobile app prototypes, real-time
                data experiences and API-driven applications. I care about
                details, clear collaboration and code that stays easy to grow.
              </p>
              <a className="text-link" href="/Harsh-Hirpara-Resume.pdf" download>
                Download full resume <span>↓</span>
              </a>
            </div>

            <div className="stats">
              <article>
                <strong>3+</strong>
                <span>Years of professional experience</span>
              </article>
              <article>
                <strong>07</strong>
                <span>Featured product builds</span>
              </article>
              <article>
                <strong>13</strong>
                <span>Technologies in my toolkit</span>
              </article>
            </div>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon"><Icon name={service.icon} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section">
          <div className="section-heading section-heading--row">
            <div>
              <p className="kicker">My toolkit</p>
              <h2>Technologies I <span>work with.</span></h2>
            </div>
            <p>Practical tools for building fast, scalable web and mobile products.</p>
          </div>
          <div className="skill-cloud">
            {skills.map((skill, index) => (
              <span style={{ '--delay': `${index * 80}ms` }} key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-heading">
            <p className="kicker">What I have done so far</p>
            <h2>Work <span>experience.</span></h2>
          </div>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <article className="timeline-item" key={experience.company}>
                <div className="timeline-date">{experience.date}</div>
                <div className="timeline-node">{String(index + 1).padStart(2, '0')}</div>
                <div className="timeline-card">
                  <p className="company">{experience.company}</p>
                  <h3>{experience.role}</h3>
                  <span className="location">{experience.location}</span>
                  <ul>
                    {experience.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-heading section-heading--row">
            <div>
              <p className="kicker">Selected work</p>
              <h2>Projects with <span>real purpose.</span></h2>
            </div>
            <p>
              Product experiences spanning trading, travel, payments,
              enterprise operations and paperless healthcare.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-card--${project.accent} ${
                  project.title === 'Hospital HMS' || project.title === 'BN Share Market'
                    ? 'project-card--featured'
                    : ''
                }`}
                key={project.title}
              >
                <div className="project-visual">
                  <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="project-label">
                    {project.title === 'Hospital HMS' ? 'Current flagship' : 'Case study'}
                  </span>
                  <div className="project-device">
                    <span>{project.mark}</span>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="project-info">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span>{project.description}</span>
                  <div className="tags">
                    {project.tags.map((tag) => <small key={tag}>{tag}</small>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-panel">
            <div>
              <p className="kicker">Get in touch</p>
              <h2>Have a project in mind? <span>Let&apos;s build it.</span></h2>
              <p className="contact-copy">
                I&apos;m open to senior front-end and product opportunities where I can
                contribute, learn and build meaningful products.
              </p>
            </div>
            <div className="contact-actions">
              <a className="contact-link" href="mailto:hirparaharsh402@gmail.com">
                <span>Email me</span>
                <strong>hirparaharsh402@gmail.com</strong>
              </a>
              <a className="contact-link" href="tel:+91720207818">
                <span>Call me</span>
                <strong>+91 72020 78185</strong>
              </a>
              <a className="button button--primary" href="mailto:hirparaharsh402@gmail.com">
                Start a conversation <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          <span className="brand-mark">H</span>
          <span>Harsh Hirpara</span>
        </a>
        <p>Front-end developer building for web and mobile.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
