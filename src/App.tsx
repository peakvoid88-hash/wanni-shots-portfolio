import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Instagram, Mail } from 'lucide-react'

const instagramWorks = [
  {
    id: 'DeYUkBmghou',
    title: 'Frame No. 01',
    category: 'Selected work',
    href: 'https://www.instagram.com/p/DeYUkBmghou/',
  },
  {
    id: 'DeYUUGhgk6H',
    title: 'Frame No. 02',
    category: 'Selected work',
    href: 'https://www.instagram.com/p/DeYUUGhgk6H/',
  },
  {
    id: 'DPAfTGSAkUV',
    title: 'Frame No. 03',
    category: 'Selected work',
    href: 'https://www.instagram.com/p/DPAfTGSAkUV/',
  },
  {
    id: 'DUaosDPEnCm',
    title: 'Frame No. 04',
    category: 'Selected work',
    href: 'https://www.instagram.com/p/DUaosDPEnCm/',
  },
]

const placeholderWorks = [
  {
    title: 'The in-between',
    category: 'Portraits / Lifestyle',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    className: 'work-tall',
  },
  {
    title: 'Golden hour, held still',
    category: 'Couples / Portraits',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    className: 'work-wide',
  },
  {
    title: 'A quiet kind of wild',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85',
    className: 'work-tall',
  },
]

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const motionProps = reduceMotion ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.18 }, variants: rise }

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <nav className="nav">
        <a href="#top" className="brand" onClick={closeMenu} aria-label="Wanni Shots home">
          <img className="brand-logo" src="/wanni-shots-logo.png" alt="Wanni Shots photography logo" />
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#packages" onClick={closeMenu}>Packages</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="https://www.instagram.com/wanni_shots" target="_blank" rel="noreferrer" onClick={closeMenu}>Instagram <ArrowUpRight size={14} /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-topline">
          <span className="eyebrow"><span className="status-dot" /> Portraits · Events · Lifestyle</span>
          <span className="hero-location">Available for selected bookings <span>↗</span></span>
        </div>
        <div className="hero-title-wrap">
          <motion.div className="hero-kicker" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            STORIES, NOT JUST PICTURES
          </motion.div>
          <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
            WANNI<br /><span>SHOTS<span className="title-period">.</span></span>
          </motion.h1>
          <motion.div className="hero-bottom" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <p>Cinematic storytelling through the lens.<br />Portraits, events and lifestyle in Sri Lanka.</p>
            <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={24} /></a>
          </motion.div>
        </div>
        <div className="hero-image" role="img" aria-label="Atmospheric photography preview">
          <div className="hero-image-shade" />
          <div className="image-caption"><span>01 / THE PORTFOLIO</span><span>MADE TO BE FELT</span></div>
          <div className="hero-image-note">Every frame<br /><em>holds a feeling.</em></div>
          <img className="hero-seal" src="/wanni-shots-logo.png" alt="Wanni Shots camera and lettering logo" />
        </div>
        <div className="hero-foot"><span>PHOTOGRAPHY • VISUAL STORIES</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro section-pad" id="about">
        <motion.div {...motionProps} className="section-label"><span>01</span><span>A LITTLE ABOUT THE WORK</span></motion.div>
        <motion.div {...motionProps} className="intro-content">
          <h2>Life moves fast.<br /><em>Let’s keep a piece of it.</em></h2>
          <div className="intro-copy">
            <p>Wanni Shots is about the moments that feel like something — the big milestones, the small gestures, the people you want to remember exactly as they were.</p>
            <p>Specialising in portraits, events and lifestyle photography, Wanni Shots brings a cinematic eye to real people and real moments.</p>
            <a className="text-link" href="#contact">Let's make something memorable <ArrowRight size={16} /></a>
          </div>
        </motion.div>
      </section>

      <section className="work-section section-pad" id="work">
        <motion.div {...motionProps} className="section-heading">
          <div><div className="section-label"><span>02</span><span>THE GALLERY</span></div><h2>Selected <em>frames.</em></h2></div>
          <p>A growing collection of people, places<br className="desktop-break" /> and moments worth keeping.</p>
        </motion.div>

        <div className="instagram-grid">
          {instagramWorks.map((work, index) => (
            <motion.a className="instagram-card" href={work.href} target="_blank" rel="noreferrer" key={work.id}
              initial={reduceMotion ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: index * 0.12 }}>
              <div className="ig-embed-wrap">
                <iframe
                  src={`https://www.instagram.com/p/${work.id}/embed/`}
                  title={work.title}
                  loading="lazy"
                  allowTransparency
                  scrolling="no"
                />
                <div className="ig-overlay">
                  <span className="ig-tag"><Instagram size={13} /> INSTAGRAM FEATURE</span>
                  <span className="ig-open">Open post <ArrowUpRight size={17} /></span>
                </div>
              </div>
              <div className="work-meta"><div><h3>{work.title}</h3><span>{work.category}</span></div><span className="work-number">0{index + 1}</span></div>
            </motion.a>
          ))}
        </div>

        <div className="gallery-note"><span className="note-line" /><p>More of the portfolio is on its way. These spaces will be filled with Wanni’s own photographs as the collection grows.</p></div>

        <div className="placeholder-grid">
          {placeholderWorks.map((work, index) => (
            <motion.article className={`placeholder-card ${work.className}`} key={work.title}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: index * 0.08 }}>
              <div className="placeholder-image">
                <img src={work.image} alt="" loading="lazy" />
                <span className="placeholder-badge">MOODBOARD IMAGE</span>
              </div>
              <div className="work-meta"><div><h3>{work.title}</h3><span>{work.category}</span></div><span className="work-number">0{index + 3}</span></div>
            </motion.article>
          ))}
        </div>
        <p className="placeholder-disclaimer">The additional images above are temporary visual placeholders, not Wanni’s work. They can be replaced with the original photographs when you send them.</p>
      </section>

      <section className="packages-section section-pad" id="packages">
        <motion.div {...motionProps} className="section-label"><span>03</span><span>SESSIONS & PACKAGES</span></motion.div>
        <div className="packages-heading">
          <motion.h2 {...motionProps}>Your moment.<br /><em>Your kind of story.</em></motion.h2>
          <motion.p {...motionProps}>From portraits to events and everyday lifestyle stories, Wanni Shots creates cinematic photographs with a personal feel. Based in Sri Lanka.</motion.p>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <span className="service-index">01 / PORTRAITS</span>
            <h3>Just you,<br /><em>beautifully seen.</em></h3>
            <p>Personal portraits, couple sessions and expressive frames that feel like you.</p>
            <a href="https://wa.me/94706691168?text=Hi%20Wanni%20Shots%2C%20I%27m%20interested%20in%20a%20portrait%20session." target="_blank" rel="noreferrer">Enquire about portraits <ArrowUpRight size={15} /></a>
          </article>
          <article className="service-card">
            <span className="service-index">02 / EVENTS</span>
            <h3>The moments<br /><em>that matter.</em></h3>
            <p>Thoughtful coverage of celebrations, gatherings and once-in-a-lifetime days.</p>
            <a href="https://wa.me/94706691168?text=Hi%20Wanni%20Shots%2C%20I'd%20like%20to%20ask%20about%20event%20photography." target="_blank" rel="noreferrer">Enquire about events <ArrowUpRight size={15} /></a>
          </article>
          <article className="service-card">
            <span className="service-index">03 / LIFESTYLE</span>
            <h3>Life, as it<br /><em>happens.</em></h3>
            <p>Natural, story-led images of people, places and the in-between moments.</p>
            <a href="https://wa.me/94706691168?text=Hi%20Wanni%20Shots%2C%20I'm%20interested%20in%20a%20lifestyle%20shoot." target="_blank" rel="noreferrer">Enquire about lifestyle <ArrowUpRight size={15} /></a>
          </article>
        </div>
        <div className="package-pdf-row">
          <div><span className="eyebrow">PRICING & DETAILS</span><p>Want to compare package options? Open Wanni Shots’ current package document on Linktree, or message directly for availability and a recommendation.</p></div>
          <a className="package-pdf-button" href="https://linktr.ee/wannishots" target="_blank" rel="noreferrer">View packages <ArrowUpRight size={17} /></a>
        </div>
        <p className="package-note">Package prices and inclusions are not reproduced here because the Linktree document's contents were not available as readable text. Use “View packages” for the latest official details.</p>
      </section>

      <section className="statement">
        <div className="statement-inner">
          <span className="eyebrow">THE WANNI SHOTS APPROACH</span>
          <h2>Not perfect.<br /><em>Just real.</em></h2>
          <p>Because the photographs you treasure most are rarely the ones where everything went to plan.</p>
          <span className="statement-star">✳</span>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <motion.div {...motionProps} className="section-label"><span>04</span><span>HAVE A STORY IN MIND?</span></motion.div>
        <motion.div {...motionProps} className="contact-main">
          <div><h2>Let’s make<br /><em>it last.</em></h2><p>Portraits, events, celebrations, or just a day you want to remember. Tell me what you have in mind.</p></div>
          <div className="contact-action">
            <a className="contact-button" href="https://wa.me/94706691168?text=Hi%20Wanni%20Shots%2C%20I%27d%20like%20to%20enquire%20about%20a%20photography%20session.">Start a conversation <ArrowUpRight size={18} /></a>
            <a className="contact-social" href="https://wa.me/94706691168?text=Hi%20Wanni%20Shots%2C%20I%27d%20like%20to%20book%20a%20session." target="_blank" rel="noreferrer"><Mail size={16} /> Message Wanni on WhatsApp</a>
            <span className="contact-small">No pressure. Just tell me your idea.</span>
          </div>
        </motion.div>
      </section>

      <footer className="footer" id="footer">
        <a href="#top" className="footer-brand"><img src="/wanni-shots-logo.png" alt="Wanni Shots photography logo" /></a>
        <span>PHOTOGRAPHY WITH FEELING</span>
        <div className="footer-right">
          <a href="https://www.instagram.com/wanni_shots" target="_blank" rel="noreferrer">INSTAGRAM <ArrowUpRight size={12} /></a>
          <a href="https://www.tiktok.com/@wannishots" target="_blank" rel="noreferrer">TIKTOK <ArrowUpRight size={12} /></a>
          <a href="https://www.facebook.com/wanni.shots" target="_blank" rel="noreferrer">FACEBOOK <ArrowUpRight size={12} /></a>
          <span>© {new Date().getFullYear()} WANNI SHOTS</span>
        </div>
      </footer>
    </main>
  )
}

export default App
