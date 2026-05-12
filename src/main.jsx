import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Send,
  Server,
  Sparkles,
  Terminal,
  Trophy,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const CHATBOT_ENDPOINT = 'https://myportfolio-chatbot.onrender.com';

const profile = {
  name: 'Nishant Jhade',
  role: 'Full Stack Developer',
  location: 'Bhopal, Madhya Pradesh, India',
  phone: '+91 7067056699',
  email: 'jhadenishant@gmail.com',
  github: 'https://github.com/nishant-x',
  linkedin: 'https://www.linkedin.com/in/nishant-jhade-6b9a2b27b/',
  portfolio: 'https://nishant-x.github.io/MyPortfolio/',
  resume: '/Nishant_Jhade_Resume.pdf',
};

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['certifications', 'Certifications'],
  ['contact', 'Contact'],
];

const stats = [
  ['7.59', 'B.Tech CGPA'],
  ['3+', 'Featured Projects'],
  ['2', 'Professional Roles'],
  ['5+', 'Certifications'],
];

const projects = [
  {
    title: 'Sankat Mochan',
    category: 'AI Healthcare',
    featured: true,
    tech: ['MERN Stack', 'Python', 'AI Chatbot', 'REST APIs', 'MongoDB'],
    image: '/images/Nishant/carehealth.png',
    github: profile.github,
    live: '#contact',
    summary:
      'Hospital management platform for OPD queueing, bed and inventory visibility, and AI-assisted report analysis with home-remedy guidance.',
    details: [
      'Designed patient-first workflows for OPD queueing, resource tracking, and hospital operations.',
      'Integrated an AI-powered chatbot concept for report insights and contextual healthcare support.',
      'Structured the system around scalable MERN modules with Python support for intelligence features.',
    ],
  },
  {
    title: 'MIS - Management Information System',
    category: 'Operations Platform',
    featured: true,
    tech: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
    image: '/images/Nishant/MIS.png',
    github: 'https://github.com/nishant-x/MIS',
    live: '#contact',
    summary:
      'Police operations platform covering leave management, case management, jawan live status tracking, and administrative workflows.',
    details: [
      'Built an operational dashboard for high-frequency police department workflows.',
      'Created interfaces for leave, case, and live-status modules to reduce manual tracking friction.',
      'Focused on usability and clear information architecture for non-technical users.',
    ],
  },
  {
    title: 'Coding Ka Cricket',
    category: 'Event Tech',
    featured: true,
    tech: ['MERN Stack', 'Python', 'Compiler', 'MCQ Engine', 'APIs'],
    image: '/images/Nishant/jplppl.png',
    github: profile.github,
    live: '#contact',
    summary:
      'Competitive programming event platform for SISTec-R with compiler integration and MCQ rounds inspired by a cricket-style format.',
    details: [
      'Supported event rounds with coding and MCQ systems for competitive participation.',
      'Worked on compiler integration and backend flows for round management.',
      'Balanced playful event mechanics with reliable web-app structure.',
    ],
  },
  {
    title: 'React To-Do System',
    category: 'Frontend',
    featured: false,
    tech: ['React', 'JavaScript', 'CSS', 'State Management'],
    image: '/images/Nishant/todo.png',
    github: 'https://github.com/nishant-x/TodoList-In-React',
    live: '#contact',
    summary:
      'Clean task-management application built to practice component state, frontend interactions, and responsive React UI patterns.',
    details: [
      'Implemented core CRUD-style task interactions with React components.',
      'Focused on clear UI states and frontend architecture fundamentals.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'UI/UX'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'JWT', 'Cookies', 'Auth'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'DBMS', 'Schema Design'],
  },
  {
    title: 'Tools',
    icon: Layers3,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Render', 'Vercel'],
  },
  {
    title: 'Programming',
    icon: Terminal,
    skills: ['C++', 'JavaScript', 'SQL', 'Python Basics', 'OOPs', 'DSA'],
  },
  {
    title: 'AI/ML & CRM',
    icon: Sparkles,
    skills: ['AI Chatbots', 'Python', 'Salesforce', 'CRM Concepts', 'Trailhead'],
  },
];

const timeline = [
  {
    type: 'Experience',
    title: 'MERN Stack Developer',
    org: 'ZennAura, Delhi',
    period: '2026',
    points: [
      'Designed, developed, and deployed a full-stack e-commerce web application.',
      'Built UI/UX, backend APIs, database structure, and production deployment flows.',
      'Handled environment variables, build debugging, Vercel hosting, and Render deployment.',
    ],
  },
  {
    type: 'Experience',
    title: 'Development Intern',
    org: 'Eazy ERP Technologies Pvt. Ltd.',
    period: '2026',
    points: [
      'Contributing to real-world software design and implementation under mentor supervision.',
      'Assisting in scalable application development with attention to code quality and performance.',
      'Collaborating with the team on debugging, delivery discipline, and development best practices.',
    ],
  },
  {
    type: 'Education',
    title: 'B.Tech in Computer Science Engineering',
    org: 'Sagar Institute of Science, Technology & Engineering, Bhopal',
    period: '2022 - 2026',
    points: ['Current CGPA: 7.59', 'Coursework focus: DBMS, OOPs, DSA, Web Technologies, APIs.'],
  },
];

const education = [
  ['B.Tech CSE', 'SISTec, Bhopal', 'CGPA 7.59 | 2022 - 2026'],
  ['Class 12', 'Govt. Higher Secondary School, Betul', '85% | 2022'],
  ['Class 10', 'Saraswati Shishu Vidhya Mandir, Betul', '78.5% | 2020'],
];

const certifications = [
  ['SmartBridge Salesforce Training', 'Salesforce fundamentals, CRM concepts, and Trailhead modules', 'Feb - Mar 2026'],
  ['Full Stack Development', 'React, Node.js, and PostgreSQL via Scaler/Udemy certification', 'Jan - Feb 2026'],
  ['Programming in C', 'NPTEL certification focused on C programming foundations', 'Jul - Oct 2024'],
  ['Modern C++', 'NPTEL certification for C++ programming and modern language concepts', 'Jul - Oct 2024'],
  ['Web Development & DSA Workshop', 'MANIT Bhopal workshop on web development and data structures', 'Sep 2024'],
];

const achievements = [
  ['Winner', 'Branch Master - SISTec-R', 'Mar 2025'],
  ['3rd Position', 'JLU Hackathon', 'May 2024'],
  ['5th Rank', 'SISTec Innovation Hackathon 2.0', 'Apr 2024'],
];

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Section({ id, eyebrow, title, children, className }) {
  return (
    <section id={id} className={cn('relative px-5 py-20 sm:px-8 lg:px-10', className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-3xl"
          >
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 24 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.35 },
    );
    navItems.forEach(([id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-mint via-cyan to-coral" style={{ scaleX }} />
      <header className="fixed left-0 right-0 top-0 z-[60] px-4 pt-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/75 px-4 py-3 shadow-glow backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-mint to-cyan font-display text-sm font-black text-ink">NJ</span>
            <span className="hidden font-display text-sm font-bold text-white sm:block">Nishant Jhade</span>
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={cn('nav-link', active === id && 'active')}>
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="icon-button hidden sm:grid" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <button className="icon-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-panel/95 p-3 shadow-glow backdrop-blur-xl lg:hidden"
            >
              {navItems.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/10">
                  {label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function Hero() {
  const words = ['MERN apps', 'REST APIs', 'GraphQL layers', 'production UI', 'cloud deployments'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((value) => (value + 1) % words.length), 1700);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-32 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-radial-grid" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-4 py-2 text-sm text-mint shadow-mint">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_16px_#34f5c5]" />
            Available for full-stack developer roles
          </div>
          <h1 className="max-w-5xl font-display text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Building polished web products with code that scales.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I am {profile.name}, a full-stack developer who blends frontend craft with backend structure. I build MERN applications, API systems, GraphQL-ready services, and deployment workflows that feel sharp to use and reliable in production.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="terminal-pill"><Terminal size={16} /> currently shipping: {words[index]}</span>
            <span className="terminal-pill"><MapPin size={16} /> {profile.location}</span>
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">Explore work <ArrowUpRight size={18} /></a>
            <a href={profile.resume} className="secondary-button" download>Download CV <Download size={18} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative z-10">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan/20 via-mint/10 to-coral/20 blur-3xl" />
            <div className="glass-panel relative overflow-hidden p-5">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-3 w-3 rounded-full bg-coral" />
                <span className="h-3 w-3 rounded-full bg-gold" />
                <span className="h-3 w-3 rounded-full bg-mint" />
                <span className="ml-auto font-mono text-xs text-slate-400">portfolio.jsx</span>
              </div>
              <div className="font-mono text-sm leading-7 text-slate-300">
                <p><span className="text-coral">const</span> developer = {'{'}</p>
                <p className="pl-5"><span className="text-cyan">name</span>: <span className="text-mint">'Nishant Jhade'</span>,</p>
                <p className="pl-5"><span className="text-cyan">stack</span>: [<span className="text-mint">'React'</span>, <span className="text-mint">'Node'</span>, <span className="text-mint">'GraphQL'</span>],</p>
                <p className="pl-5"><span className="text-cyan">focus</span>: <span className="text-mint">'scalable full-stack apps'</span>,</p>
                <p className="pl-5"><span className="text-cyan">deploy</span>: <span className="text-mint">'Vercel + Render'</span>,</p>
                <p>{'}'}</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="font-display text-3xl font-black text-white">{value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Full-stack thinking with product-grade polish.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-7 sm:p-9">
          <p className="text-lg leading-8 text-slate-300">
            I enjoy turning messy ideas into clean, usable software: interfaces that feel fast, APIs that are predictable, databases that make sense, and deployments that do not fall apart at the final step. My strongest lane is the MERN stack, with growing depth in GraphQL, authentication, cloud deployment, and Salesforce CRM fundamentals.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Recruiters and teams can expect a developer who cares about both sides of the product: the visual detail that earns user trust and the backend structure that keeps the application dependable.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Frontend creativity', 'Backend APIs', 'Deployment discipline'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-white">
                <CheckCircle2 className="mb-3 text-mint" size={20} /> {item}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="grid gap-6">
          <div className="glass-panel p-7">
            <p className="eyebrow">Currently Learning</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {['Advanced GraphQL', 'Salesforce CRM', 'System Design', 'Production APIs'].map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </div>
          <div className="glass-panel p-7">
            <p className="eyebrow">Tech Stack I Love</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Vercel'].map((item) => (
                <div key={item} className="rounded-xl bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-100">{item}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Projects() {
  const filters = ['All', 'MERN Stack', 'AI Healthcare', 'Operations Platform', 'Event Tech', 'Frontend'];
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((project) => project.category === active || project.tech.includes(active))),
    [active],
  );

  return (
    <Section id="projects" eyebrow="Projects" title="Featured builds with real product context.">
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button key={filter} onClick={() => setActive(filter)} className={cn('filter-button', active === filter && 'active')}>
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -8 }}
            className="project-card"
          >
            <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              {project.featured && <span className="absolute left-4 top-4 rounded-full bg-mint px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-ink">Featured</span>}
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-cyan">{project.category}</p>
                <button className="icon-button" onClick={() => setSelected(project)} aria-label={`Open ${project.title}`}>
                  <ExternalLink size={17} />
                </button>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 min-h-[84px] leading-7 text-slate-300">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => <span key={tech} className="tag">{tech}</span>)}
              </div>
              <div className="mt-6 flex gap-3">
                <a className="small-button" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
                <a className="small-button" href={project.live}><Rocket size={16} /> Demo</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-ink/80 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.96 }} className="glass-panel max-h-[88vh] w-full max-w-3xl overflow-y-auto p-6 sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{project.category}</p>
                <h3 className="mt-2 font-display text-3xl font-black text-white">{project.title}</h3>
              </div>
              <button className="icon-button shrink-0" onClick={onClose} aria-label="Close project modal"><X size={18} /></button>
            </div>
            <p className="leading-8 text-slate-300">{project.summary}</p>
            <div className="mt-6 space-y-3">
              {project.details.map((detail) => (
                <div key={detail} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200">
                  <Zap className="mt-1 shrink-0 text-mint" size={18} /> <span>{detail}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => <span key={tech} className="tag">{tech}</span>)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A practical stack for modern full-stack delivery.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }, index) => (
          <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="glass-panel p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-mint/25 to-cyan/20 text-mint">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience, education, and proof of momentum.">
      <div className="grid gap-8 lg:grid-cols-[1fr_.75fr]">
        <div className="space-y-5">
          {timeline.map((item, index) => (
            <motion.div key={`${item.title}-${item.org}`} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="timeline-item">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-mint">{item.type}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-slate-400">{item.org}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-300">{item.period}</span>
              </div>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-300"><CheckCircle2 className="mt-1 shrink-0 text-cyan" size={17} /> {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="space-y-5">
          <div className="glass-panel p-6">
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="text-mint" /> <h3 className="font-display text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map(([degree, place, score]) => (
                <div key={degree} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-semibold text-white">{degree}</p>
                  <p className="mt-1 text-sm text-slate-400">{place}</p>
                  <p className="mt-2 text-sm text-mint">{score}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-6">
            <div className="mb-5 flex items-center gap-3">
              <Trophy className="text-gold" /> <h3 className="font-display text-xl font-bold text-white">Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map(([rank, event, date]) => (
                <div key={event} className="flex items-center justify-between gap-4 rounded-2xl bg-white/[0.04] p-4">
                  <div>
                    <p className="font-semibold text-white">{rank}</p>
                    <p className="text-sm text-slate-400">{event}</p>
                  </div>
                  <span className="text-sm text-gold">{date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications that support the stack.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map(([title, desc, date], index) => (
          <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="cert-card">
            <Award className="mb-6 text-mint" size={30} />
            <p className="mb-2 text-sm font-semibold text-cyan">{date}</p>
            <h3 className="font-display text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="pb-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.1] to-white/[0.03] p-7 shadow-glow sm:p-10 lg:p-14">
        <div className="absolute inset-0 bg-radial-grid opacity-80" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let’s build something clean, fast, and useful.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              I am open to full-stack roles, internships, freelance builds, and collaborative projects where thoughtful UI and dependable backend work both matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="primary-button"><Mail size={18} /> Email me</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="secondary-button"><Linkedin size={18} /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-button"><Github size={18} /> GitHub</a>
            </div>
          </div>
          <div className="glass-panel p-6">
            <div className="space-y-4">
              <a className="contact-row" href={`mailto:${profile.email}`}><Mail size={19} /> {profile.email}</a>
              <a className="contact-row" href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={19} /> {profile.phone}</a>
              <a className="contact-row" href={profile.portfolio} target="_blank" rel="noreferrer"><ExternalLink size={19} /> Portfolio live site</a>
              <div className="contact-row"><BriefcaseBusiness size={19} /> Full Stack Developer</div>
            </div>
            <blockquote className="mt-6 rounded-2xl border border-mint/20 bg-mint/10 p-5 text-slate-200">
              “Great software feels simple because someone cared about every layer behind it.”
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi, I'm Nishant's AI assistant. Ask me about his projects, MERN stack work, resume, skills, or contact details.",
    },
  ]);

  const sendMessage = async () => {
    const question = input.trim();
    if (!question || loading) return;

    setMessages((current) => [...current, { sender: 'user', text: question }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(CHATBOT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) throw new Error(`Chatbot server returned ${response.status}`);

      const data = await response.json();
      setMessages((current) => [
        ...current,
        { sender: 'bot', text: data.response || "I'm here to help with Nishant's portfolio." },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          sender: 'bot',
          text: "The AI backend is warming up or temporarily unavailable. You can still reach Nishant at jhadenishant@gmail.com or explore the projects above.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-4 z-[90] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="chatbot-panel"
          >
            <div className="flex items-center gap-3 border-b border-white/10 p-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-mint/15 text-mint">
                <Bot size={22} />
              </div>
              <div>
                <p className="font-display text-base font-bold text-white">Nishant AI</p>
                <p className="text-xs text-slate-400">Portfolio chatbot</p>
              </div>
              <button className="icon-button ml-auto" onClick={() => setOpen(false)} aria-label="Close chatbot">
                <X size={17} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <div key={`${message.sender}-${index}`} className={cn('chat-bubble', message.sender === 'user' && 'user')}>
                  {message.text}
                </div>
              ))}
              {loading && (
                <div className="chat-bubble">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
                    Thinking...
                  </span>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') sendMessage();
                  }}
                  placeholder="Ask about Nishant..."
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button className="chat-send" onClick={sendMessage} disabled={loading} aria-label="Send chat message">
                  <Send size={17} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.06, y: -4 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen((value) => !value)}
        className="chatbot-toggle"
        aria-label="Open Nishant AI chatbot"
      >
        <span className="absolute -left-2 -top-2 rounded-full bg-mint px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-ink">
          AI
        </span>
        <img src="/images/chatbot-logo.png" alt="" className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
      </motion.button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-ink text-white selection:bg-mint selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Chatbot />
      <footer className="px-5 pb-8 text-center text-sm text-slate-500">
        Built with React, Tailwind CSS, and Framer Motion. © {new Date().getFullYear()} Nishant Jhade.
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
