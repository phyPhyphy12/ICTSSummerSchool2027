import { facts, site } from '@/content/site';
import { APPLY_DIALOG_ID } from '@/components/ui/ApplyDialog';
import { OpenDialogButton } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon';
import { asset } from '@/lib/assets';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{site.host}</p>
          <h1 id="hero-title">
            Summer School for <em>Women in Physics</em> <span className="hero__year">2027</span>
          </h1>
          <p className="hero__intro">{site.intro}</p>

          <div className="hero__actions">
            <OpenDialogButton target={APPLY_DIALOG_ID} className="button button--primary">
              Apply for {site.shortName}
            </OpenDialogButton>
            <a href="#about" className="button button--ghost">
              About the programme <Icon name="arrowDown" size={16} />
            </a>
          </div>
          <p className="hero__notice">
            Programme: 31 May – 11 June 2027 · Application deadline: 28 February 2026
          </p>
        </div>

        <div className="hero__visual">
          <img
            src={asset('/images/hero-sswp.PNG')}
            alt="Students at a chalkboard with the words Summer School for Women in Physics 2027"
            width={521}
            height={332}
            decoding="async"
            className="hero__photo"
          />
        </div>
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
