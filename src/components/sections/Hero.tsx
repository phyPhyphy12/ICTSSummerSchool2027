import { facts, site } from '@/content/site';
import { APPLY_DIALOG_ID } from '@/components/ui/ApplyDialog';
import { OpenDialogButton } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon';
import { asset } from '@/lib/assets';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* The chalkboard in the photo carries the visible title; the h1 stays for screen readers and SEO. */}
      <h1 id="hero-title" className="visually-hidden">
        {site.name}
      </h1>

      <figure className="hero__banner">
        <picture>
          <source
            type="image/webp"
            srcSet={`${asset('/images/hero-sswp-1200.webp')} 1200w, ${asset('/images/hero-sswp-2400.webp')} 2400w`}
            sizes="100vw"
          />
          <img
            src={asset('/images/hero-sswp-2400.jpg')}
            alt="Five women students at a chalkboard reading Summer School for Women in Physics 2027, sketching physics diagrams and equations"
            width={2400}
            height={1333}
            fetchPriority="high"
            decoding="async"
            className="hero__photo"
          />
        </picture>
      </figure>

      <div className="container hero__copy">
        <p className="eyebrow">{site.host}</p>
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
          Programme: 31 May – 11 June 2027 · Application deadline: 28 February 2027
        </p>
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
