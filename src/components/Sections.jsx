import { useApp } from '../context/AppContext.jsx'
import { Link } from '../router.jsx'
import { ui, filled } from '../i18n.js'
import {
  config,
  caseStudies,
  otherProjects,
  proofs,
  services,
  mobileService,
  skillGroups,
  otherLanguages,
  spokenLanguages,
  experience,
  education,
  testimonials,
} from '../data/site.js'
import Icon from './Icon.jsx'
import portrait520 from '../assets/portrait-520.webp'
import portrait900 from '../assets/portrait-900.webp'

// ---------- utilitaires ----------
const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`
const waLink = (text) => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`
const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

function ExtLink({ href, className, children }) {
  const { t } = useApp()
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> {t(ui.newTab)}</span>
    </a>
  )
}

// En-tête de page (h1) ou de bloc (h2)
function PageHead({ num, title, intro, as: Tag = 'h1' }) {
  return (
    <div className="sec-head reveal">
      {num && (
        <span className="sec-num" aria-hidden="true">
          {num}
        </span>
      )}
      <Tag>{title}</Tag>
      {intro && <p>{intro}</p>}
    </div>
  )
}

function CvButton({ file, label, variant = 'primary' }) {
  return (
    <a className={`btn btn--${variant}`} href={asset(file)} target="_blank" rel="noopener" type="application/pdf">
      <Icon name="download" /> {label}
    </a>
  )
}

function ContactCta({ title, text }) {
  const { t } = useApp()
  const wa = config.whatsapp ? waLink(t(ui.contact.waProject)) : ''
  return (
    <div className="cta reveal">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta__actions">
        {wa ? (
          <ExtLink href={wa} className="btn btn--light">
            <Icon name="whatsapp" /> {t(ui.services.cta)}
          </ExtLink>
        ) : (
          <Link to="contact" className="btn btn--light">
            <Icon name="mail" /> {t(ui.services.cta)}
          </Link>
        )}
        {config.email && (
          <a href={`mailto:${config.email}`} className="cta__mail">
            <Icon name="mail" size={18} /> {config.email}
          </a>
        )}
      </div>
    </div>
  )
}

// =====================================================================
//  ACCUEIL
// =====================================================================
function Hero() {
  const { t, lang } = useApp()
  const cvMain = lang === 'en' ? config.cv.en : config.cv.fr
  const cvOther = lang === 'en' ? config.cv.fr : config.cv.en

  return (
    <section className="hero" aria-labelledby="accueil-titre">
      <div className="wrap hero__grid">
        <div className="hero__photo">
          <img
            src={portrait520}
            srcSet={`${portrait520} 520w, ${portrait900} 900w`}
            sizes="(min-width: 1200px) 520px, (min-width: 900px) 40vw, 76px"
            width="900"
            height="1080"
            alt={t(ui.hero.photoAlt)}
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <p className="hero__intro">
          <span>
            <Icon name="pin" size={16} /> {t(config.location)}
          </span>
          <span>{t(config.school)}</span>
        </p>

        <div className="hero__body">
          <h1 id="accueil-titre">{config.name}</h1>
          <p className="hero__role">{t(config.title)}</p>
          <p className="hero__tagline">{t(config.tagline)}</p>

          {filled(config.availability) && (
            <p className="hero__available">
              <span className="pulse" aria-hidden="true" />
              {t(ui.hero.available)} : <strong>{t(config.availability)}</strong>
            </p>
          )}

          <div className="hero__actions">
            <CvButton file={cvMain} label={t(ui.hero.cv)} />
            <Link to="contact" className="btn btn--secondary">
              {t(ui.hero.contact)} <Icon name="arrowRight" />
            </Link>
          </div>

          <p className="hero__links">
            <a href={asset(cvOther)} target="_blank" rel="noopener" type="application/pdf">
              <Icon name="file" size={18} /> {t(ui.hero.otherCv)}
            </a>
            <ExtLink href={config.github}>
              <Icon name="github" size={18} /> GitHub
            </ExtLink>
            <ExtLink href={config.linkedin}>
              <Icon name="linkedin" size={18} /> LinkedIn
            </ExtLink>
          </p>
        </div>
      </div>
    </section>
  )
}

function Proofs() {
  const { t } = useApp()
  const items = proofs.filter((p) => filled(p.value) && filled(p.label))
  if (!items.length) return null
  return (
    <section className="proofs" aria-label={t(ui.proofs)}>
      <ul className="wrap proofs__list">
        {items.map((p, i) => (
          <li key={i}>
            <span className="proofs__value">{t(p.value)}</span>
            <span className="proofs__label">{t(p.label)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Featured() {
  const { t } = useApp()
  return (
    <section className="section" aria-labelledby="recents-titre">
      <div className="wrap">
        <div className="sec-head sec-head--row reveal">
          <div>
            <h2 id="recents-titre">{t(ui.home.featured)}</h2>
            <p>{t(ui.home.featuredIntro)}</p>
          </div>
          <Link to="projets" className="link-btn link-btn--strong">
            {t(ui.home.allProjects)} <Icon name="arrowRight" size={18} />
          </Link>
        </div>
        <ul className="featured">
          {caseStudies.map((p) => (
            <li key={p.id} className="feat reveal">
              <Shot project={p} compact />
              <p className="kicker">{t(p.kicker)}</p>
              <h3>{t(p.name)}</h3>
              <p>{t(p.summary)}</p>
              <Link to="projets" hash={`cas-${p.id}`} className="feat__more">
                {t(ui.home.seeProject)} <Icon name="arrowRight" size={17} />
                <span className="sr-only"> : {t(p.name)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function HomePage() {
  const { t } = useApp()
  return (
    <>
      <Hero />
      <Proofs />
      <Featured />
      <section className="section section--tight" aria-label={t(ui.nav.contact)}>
        <div className="wrap">
          <ContactCta title={t(ui.home.ctaTitle)} text={t(ui.home.ctaText)} />
        </div>
      </section>
    </>
  )
}

// =====================================================================
//  PROJETS
// =====================================================================
function Shot({ project, compact = false }) {
  const { t } = useApp()
  const domain = hostOf(project.links.live)
  return (
    <div className={`shot${project.image ? '' : ' shot--cover'}${compact ? ' shot--compact' : ''}`}>
      {!compact && (
        <div className="shot__bar" aria-hidden="true">
          <span className="shot__url">{domain || ' '}</span>
        </div>
      )}
      {project.image ? (
        <img
          src={project.image.src}
          srcSet={project.image.srcSet}
          sizes={compact ? '(min-width: 1200px) 25vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 900px) 50vw, 100vw'}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
          alt={`${t(ui.projects.screenshot)} ${t(project.name)}`}
        />
      ) : (
        <div className="cover" aria-hidden="true">
          <span className="cover__name">{t(project.name)}</span>
          {filled(project.cover) && <span className="cover__kind">{t(project.cover)}</span>}
        </div>
      )}
    </div>
  )
}

function ProjectLinks({ links }) {
  const { t } = useApp()
  if (!links.live && !links.code) return null
  return (
    <p className="links">
      {links.live && (
        <ExtLink href={links.live} className="link-btn link-btn--strong">
          {t(ui.projects.live)} <Icon name="arrowUpRight" size={18} />
        </ExtLink>
      )}
      {links.code && (
        <ExtLink href={links.code} className="link-btn">
          <Icon name="github" size={17} /> {t(ui.projects.code)}
        </ExtLink>
      )}
    </p>
  )
}

function CaseStudy({ project }) {
  const { t } = useApp()
  const results = project.results.filter(filled)
  return (
    <article id={`cas-${project.id}`} className="case reveal" aria-labelledby={`cas-${project.id}-titre`}>
      <Shot project={project} />
      <div className="case__body">
        <p className="kicker">{t(project.kicker)}</p>
        <h2 id={`cas-${project.id}-titre`}>{t(project.name)}</h2>
        <p className="case__summary">{t(project.summary)}</p>
        <dl className="facts">
          <div>
            <dt>{t(ui.projects.problem)}</dt>
            <dd>{t(project.problem)}</dd>
          </div>
          <div>
            <dt>{t(ui.projects.solution)}</dt>
            <dd>{t(project.solution)}</dd>
          </div>
          {filled(project.role) && (
            <div>
              <dt>{t(ui.projects.role)}</dt>
              <dd>{t(project.role)}</dd>
            </div>
          )}
          {results.length > 0 && (
            <div>
              <dt>{t(ui.projects.result)}</dt>
              <dd>
                {results.length === 1 ? (
                  t(results[0])
                ) : (
                  <ul>
                    {results.map((r, i) => (
                      <li key={i}>{t(r)}</li>
                    ))}
                  </ul>
                )}
              </dd>
            </div>
          )}
        </dl>
        <ul className="tags" aria-label={t(ui.projects.stack)}>
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <ProjectLinks links={project.links} />
      </div>
    </article>
  )
}

export function ProjectsPage() {
  const { t } = useApp()
  return (
    <section className="section">
      <div className="wrap">
        <PageHead num="01" title={t(ui.projects.title)} intro={t(ui.projects.intro)} />
        <div className="cases">
          {caseStudies.map((p) => (
            <CaseStudy key={p.id} project={p} />
          ))}
        </div>

        <h2 className="sub-title reveal">{t(ui.projects.others)}</h2>
        <ul className="others">
          {otherProjects.map((p, i) => (
            <li key={i} className="other reveal">
              {p.image && (
                <img
                  className="other__img"
                  src={p.image.src}
                  srcSet={p.image.srcSet}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  width={p.image.width}
                  height={p.image.height}
                  loading="lazy"
                  decoding="async"
                  alt={`${t(ui.projects.screenshot)} ${t(p.name)}`}
                />
              )}
              <h3>{t(p.name)}</h3>
              <p>{t(p.text)}</p>
              <p className="other__stack">{p.stack.join(', ')}</p>
              <ProjectLinks links={p.links} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// =====================================================================
//  SERVICES
// =====================================================================
export function ServicesPage() {
  const { t } = useApp()
  const list = filled(config.mobileTech) ? [...services, mobileService(config.mobileTech)] : services
  return (
    <section className="section">
      <div className="wrap">
        <PageHead num="02" title={t(ui.services.title)} intro={t(ui.services.intro)} />
        <ol className="services">
          {list.map((s) => (
            <li key={s.id} className="service reveal">
              <h2>{t(s.title)}</h2>
              <dl>
                <dt>{t(ui.services.deliver)}</dt>
                <dd>{t(s.deliver)}</dd>
                <dt>{t(ui.services.how)}</dt>
                <dd>{t(s.how)}</dd>
                <dt>{t(ui.services.tech)}</dt>
                <dd className="service__tech">{s.stack.join(', ')}</dd>
              </dl>
            </li>
          ))}
        </ol>

        {testimonials.length > 0 && (
          <ul className="quotes">
            {testimonials.map((q, i) => (
              <li key={i} className="quote reveal">
                <blockquote>{t(q.quote)}</blockquote>
                <p>
                  {q.author}
                  {filled(q.role) && <span>, {t(q.role)}</span>}
                </p>
              </li>
            ))}
          </ul>
        )}

        <ContactCta title={t(ui.services.ctaTitle)} text={t(ui.services.ctaText)} />
      </div>
    </section>
  )
}

// =====================================================================
//  COMPÉTENCES
// =====================================================================
export function SkillsPage() {
  const { t } = useApp()
  return (
    <section className="section">
      <div className="wrap">
        <PageHead num="03" title={t(ui.skills.title)} intro={t(ui.skills.intro)} />
        <div className="skills">
          {skillGroups.map((g) => (
            <div key={t(g.title)} className="skill reveal">
              <h2>{t(g.title)}</h2>
              <ul className="tags">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {filled(g.usedIn) && (
                <p className="skill__used">
                  {t(ui.skills.usedIn)} : {t(g.usedIn)}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="skills__more reveal">
          {otherLanguages.length > 0 && (
            <span>
              <strong>{t(ui.skills.otherLangs)} :</strong> {otherLanguages.join(', ')}
            </span>
          )}
          <span>
            <strong>{t(ui.skills.languages)} :</strong> {t(spokenLanguages)}
          </span>
        </p>
      </div>
    </section>
  )
}

// =====================================================================
//  PARCOURS
// =====================================================================
function Timeline({ title, items }) {
  const { t } = useApp()
  return (
    <div className="timeline reveal">
      <h2>{title}</h2>
      <ol>
        {items.map((it, i) => (
          <li key={i}>
            <span className="timeline__period">
              {t(it.period)}
              {it.ongoing && <em> · {t(ui.journey.ongoing)}</em>}
            </span>
            <div>
              <h3>{t(it.title)}</h3>
              <p className="timeline__place">{t(it.place)}</p>
              {filled(it.text) && <p>{t(it.text)}</p>}
              {filled(it.facts) && <p className="timeline__facts">{t(it.facts)}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function JourneyPage() {
  const { t } = useApp()
  return (
    <section className="section">
      <div className="wrap">
        <PageHead num="04" title={t(ui.journey.title)} intro={t(ui.journey.intro)} />
        <div className="journey">
          <Timeline title={t(ui.journey.experience)} items={experience} />
          <Timeline title={t(ui.journey.education)} items={education} />
        </div>
      </div>
    </section>
  )
}

// =====================================================================
//  CONTACT
// =====================================================================
export function ContactPage() {
  const { t } = useApp()
  const rows = [
    config.whatsapp && {
      icon: 'whatsapp',
      label: t(ui.contact.whatsapp),
      value: config.whatsappDisplay,
      href: waLink(t(ui.contact.waMessage)),
      external: true,
    },
    config.email && { icon: 'mail', label: t(ui.contact.email), value: config.email, href: `mailto:${config.email}` },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: hostOf(config.linkedin) + new URL(config.linkedin).pathname.replace(/\/$/, ''),
      href: config.linkedin,
      external: true,
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: hostOf(config.github) + new URL(config.github).pathname,
      href: config.github,
      external: true,
    },
  ].filter(Boolean)

  return (
    <section className="section">
      <div className="wrap contact">
        <PageHead num="05" title={t(ui.contact.title)} intro={t(ui.contact.intro)} />
        <ul className="contact__list reveal">
          {rows.map((r) => {
            const inner = (
              <>
                <span className="contact__icon">
                  <Icon name={r.icon} />
                </span>
                <span className="contact__text">
                  <span className="contact__label">{r.label}</span>
                  <span className="contact__value">{r.value}</span>
                </span>
                <Icon name="arrowUpRight" className="contact__arrow" />
              </>
            )
            return (
              <li key={r.label}>
                {r.external ? (
                  <ExtLink href={r.href} className="contact__row">
                    {inner}
                  </ExtLink>
                ) : (
                  <a href={r.href} className="contact__row">
                    {inner}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
        <div className="contact__cv reveal">
          <h2>{t(ui.contact.cvTitle)}</h2>
          <p>
            <CvButton file={config.cv.fr} label={t(ui.contact.cvFr)} />
            <CvButton file={config.cv.en} label={t(ui.contact.cvEn)} variant="secondary" />
          </p>
        </div>
      </div>
    </section>
  )
}

// =====================================================================
//  PAGE INTROUVABLE
// =====================================================================
export function NotFoundPage() {
  const { t } = useApp()
  return (
    <section className="section">
      <div className="wrap">
        <PageHead title={t(ui.notFound.title)} intro={t(ui.notFound.text)} />
        <Link to="" className="btn btn--primary">
          {t(ui.notFound.back)} <Icon name="arrowRight" />
        </Link>
      </div>
    </section>
  )
}
