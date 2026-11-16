import { about } from '@/content/site';

/** Decorative band of the programme's four strands; the two rows slide in opposite directions with scroll. */
export function Marquee() {
  const words = [...about.pillars, ...about.pillars, ...about.pillars];
  return (
    <div className="marquee" aria-hidden="true">
      {['marquee__row', 'marquee__row marquee__row--reverse'].map((className) => (
        <p key={className} className={className}>
          {words.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </p>
      ))}
    </div>
  );
}
