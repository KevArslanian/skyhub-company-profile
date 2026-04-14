import { ArrowUpRight, PlaneTakeoff } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { ServiceSpotlight } from "@/components/service-spotlight";
import { ABOUT_COPY, CONTACT_ITEMS, FACTS, HERO_COPY, HERO_TITLE, HIGHLIGHTS, OPERATOR_NOTE, SERVICES } from "@/lib/company-profile";

const heroImage =
  "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1800&q=80";

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" aria-label="SkyHub home">
          <BrandMark />
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#profile">Profile</a>
          <a href="#services">Services</a>
          <a href="#facts">Facts</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-media" style={{ backgroundImage: `url('${heroImage}')` }} />
          <div className="hero-copy">
            <p className="eyebrow">SkyHub Company Profile</p>
            <h1>{HERO_TITLE}</h1>
            <p className="hero-text">{HERO_COPY}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Hubungi SkyHub
              </a>
              <a className="button button-secondary" href="#services">
                Lihat layanan
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-card">
              <p className="card-label">Platform Focus</p>
              <h2>Cargo Ops Control</h2>
              <p>Monitoring shipment, manifest, flight board, dan audit log dalam satu control surface.</p>
            </div>

            <div className="hero-card hero-card-accent">
              <p className="card-label">Current Scope</p>
              <p>
                Ini adalah company profile standalone berbasis Next.js. Tidak ada login, dashboard, atau menu operasional di
                repo ini.
              </p>
            </div>
          </aside>
        </section>

        <section className="section profile-grid" id="profile">
          <article className="panel">
            <p className="eyebrow">About SkyHub</p>
            <h2>Company Profile</h2>
            <p className="section-copy">{ABOUT_COPY}</p>

            <div className="highlight-grid">
              {HIGHLIGHTS.map(({ title, copy, icon: Icon }) => (
                <div key={title} className="highlight-card">
                  <span className="highlight-icon">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel panel-dark">
            <p className="eyebrow eyebrow-light">Operator Note</p>
            <h2>Tampilan yang tenang, kerja yang cepat.</h2>
            <p className="section-copy section-copy-light">{OPERATOR_NOTE}</p>

            <div className="mini-grid">
              <div>
                <span>System tone</span>
                <strong>Formal and structured</strong>
              </div>
              <div>
                <span>Reading style</span>
                <strong>Fast to scan under pressure</strong>
              </div>
              <div>
                <span>Primary context</span>
                <strong>Control room operations</strong>
              </div>
            </div>
          </article>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Core Services</p>
            <h2>Layanan inti yang dibangun untuk operasi cargo udara.</h2>
          </div>

          <ServiceSpotlight services={SERVICES} />
        </section>

        <section className="section" id="facts">
          <div className="section-heading">
            <p className="eyebrow">Company Facts</p>
            <h2>Cakupan dan layanan utama.</h2>
          </div>

          <div className="facts-grid">
            {FACTS.map((fact) => (
              <article key={fact.label} className="fact-card">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-panel">
          <div>
            <p className="eyebrow">Architecture Intent</p>
            <h2>Repo ini sengaja dipisah untuk company profile saja.</h2>
            <p className="section-copy">
              Basisnya sekarang Next.js App Router supaya cocok untuk belajar React component, layout, data mapping, dan client
              interaction sederhana.
            </p>
          </div>
          <div className="cta-badge">
            <PlaneTakeoff size={18} />
            <span>Next.js company-only site</span>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact Information</p>
            <h2>Direktori contact terpadu.</h2>
          </div>

          <div className="contact-grid">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="contact-card">
                  <span className="contact-icon">
                    <Icon size={18} />
                  </span>
                  <p className="card-label">{label}</p>
                  <strong>{value}</strong>
                  {href ? (
                    <span className="contact-link">
                      Open
                      <ArrowUpRight size={16} />
                    </span>
                  ) : null}
                </div>
              );

              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>SkyHub Company Profile</p>
        <p>Standalone Next.js site without login or operational modules.</p>
      </footer>
    </div>
  );
}
