import { typicalDay } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TypicalDay() {
  const { practical } = typicalDay;
  return (
    <section id="typical-day" className="section section--tint" aria-labelledby="typical-day-title">
      <div className="container">
        <SectionHeading
          id="typical-day-title"
          eyebrow={typicalDay.eyebrow}
          title={typicalDay.title}
          lede={typicalDay.lede}
        />

        <ol className="card-grid card-grid--three depth day">
          {typicalDay.parts.map((part) => (
            <li key={part.what} className="card day__part reveal">
              <h3>{part.what}</h3>
              <p>{part.text}</p>
            </li>
          ))}
        </ol>

        <aside className="practical reveal" aria-labelledby="practical-title">
          <h3 id="practical-title">{practical.heading}</h3>
          <div>
            <p>{practical.statement}</p>
            <p className="card__note">{practical.note}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
