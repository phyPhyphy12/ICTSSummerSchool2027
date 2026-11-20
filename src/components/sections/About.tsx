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
        </div>
      </div>
    </section>
  );
}
