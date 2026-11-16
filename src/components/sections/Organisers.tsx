import { organisers } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Organisers() {
  return (
    <section id="organisers" className="section" aria-labelledby="organisers-title">
      <div className="container">
        <SectionHeading
          id="organisers-title"
          eyebrow={organisers.eyebrow}
          title={organisers.title}
          lede={organisers.lede}
        />
        <ol className="people">
          {organisers.people.map((person, index) => (
            <li key={person.name} className="people__item reveal">
              <span className="people__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="people__name">{person.name}</span>
              {'role' in person && <span className="people__affiliation">{person.role}</span>}
              <span className="people__affiliation">{person.affiliation}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
