import { facts, site } from '@/content/site';
import { APPLY_DIALOG_ID } from '@/components/ui/ApplyDialog';
import { OpenDialogButton } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon';

/** Decorative 3D gyroscope of orbits. Spins on its own; tilts and zooms with page scroll (see motion.css). */
function OrbitScene() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit__stage">
        <div className="orbit__camera">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="orbit__plane">
              <div className="orbit__ring">
                <span className="orbit__body" />
              </div>
            </div>
          ))}
        </div>
        <span className="orbit__core" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{site.host}</p>
          <h1 id="hero-title">
            Summer School for <em>Women in Physics</em> <span className="hero__year">2027</span>
          </h1>
          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__intro">{site.intro}</p>

          <div className="hero__actions">
            <OpenDialogButton target={APPLY_DIALOG_ID} className="button button--primary">
              Apply for {site.shortName}
            </OpenDialogButton>
            <a href="#about" className="button button--ghost">
              About the programme <Icon name="arrowDown" size={16} />
            </a>
          </div>
          <p className="hero__notice">Dates to be announced. Applications will open soon.</p>
        </div>

        <OrbitScene />
      </div>

      <dl className="container facts">
        {facts.map((fact) => (
          <div key={fact.label} className="facts__item">
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
