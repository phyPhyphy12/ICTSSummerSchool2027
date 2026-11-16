import { about } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about">
        <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />
        <div className="about__body">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="reveal">
              {paragraph}
            </p>
          ))}
          <ul className="pillars">
            {about.pillars.map((pillar, index) => (
              <li key={pillar} className="reveal">
                <span className="pillars__index">{String(index + 1).padStart(2, '0')}</span>
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
