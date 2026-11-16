import { eligibility } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Eligibility() {
  return (
    <section id="eligibility" className="section section--tint" aria-labelledby="eligibility-title">
      <div className="container">
        <SectionHeading id="eligibility-title" eyebrow={eligibility.eyebrow} title={eligibility.title} />
        <div className="card-grid card-grid--two depth">
          {eligibility.cards.map((card, index) => (
            <article key={card.heading} className="card reveal">
              <p className="card__index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{card.heading}</h3>
              <p className="card__statement">{card.statement}</p>
              <p className="card__note">{card.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
