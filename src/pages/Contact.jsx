import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { profile } from '../data/profile.js'
import PageHeader from '../components/PageHeader.jsx'

export default function Contact() {
  const { lang } = useApp()

  const cards = [
    { icon: 'fa-solid fa-envelope', title: pick(ui.contact.email, lang), value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'fa-solid fa-phone', title: pick(ui.contact.phone, lang), value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: 'fa-solid fa-location-dot', title: pick(ui.contact.location, lang), value: pick(profile.location, lang), href: null },
    { icon: 'fa-brands fa-linkedin-in', title: 'LinkedIn', value: 'Rachid IDONIYI', href: profile.socials.linkedin },
    { icon: 'fa-brands fa-github', title: 'GitHub', value: 'rachidiID', href: profile.socials.github },
    { icon: 'fa-solid fa-robot', title: 'HuggingFace', value: 'Adebissi', href: profile.socials.huggingface },
  ]

  return (
    <>
      <PageHeader title={pick(ui.contact.title, lang)} subtitle={pick(ui.contact.subtitle, lang)} />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="contact-grid">
            {cards.map((c, i) => (
              <div className="card contact-card reveal" key={i}>
                <div className="contact-card__ic"><i className={c.icon} /></div>
                <h3>{c.title}</h3>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{c.value}</a>
                ) : (
                  <p>{c.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <div className="cta reveal">
              <h3>{pick(ui.home.ctaTitle, lang)}</h3>
              <p>{pick(ui.home.ctaText, lang)}</p>
              <div className="hero__cta" style={{ justifyContent: 'center', marginTop: 0 }}>
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  <i className="fa-solid fa-paper-plane" /> {pick(ui.contact.email, lang)}
                </a>
                <a className="btn btn-outline" href={`${import.meta.env.BASE_URL}${profile.cv}`} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-download" /> {pick(ui.actions.cv, lang)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
