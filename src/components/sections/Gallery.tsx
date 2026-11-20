import { gallery } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { asset } from '@/lib/assets';

/**
 * Photo and video reel from earlier editions. A horizontally scrolling strip of cards that
 * snaps to each item; add files in src/content/site.ts (gallery.items). Until then it shows
 * one placeholder card per past edition.
 */
export function Gallery() {
  const hasItems = gallery.items.length > 0;
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading id="gallery-title" eyebrow={gallery.eyebrow} title={gallery.title} lede={gallery.lede} />
      </div>

      <ul className="reel" aria-label="Photos and videos from past schools" tabIndex={0}>
        {hasItems
          ? gallery.items.map((item) => (
              <li key={item.src} className="card reel__item">
                <figure className="reel__figure">
                  {item.type === 'image' ? (
                    <img src={asset(item.src)} alt={item.alt} loading="lazy" decoding="async" className="reel__media" />
                  ) : (
                    <video
                      src={asset(item.src)}
                      poster={item.poster ? asset(item.poster) : undefined}
                      aria-label={item.alt}
                      controls
                      preload="none"
                      playsInline
                      className="reel__media"
                    />
                  )}
                  {item.caption ? <figcaption className="reel__caption">{item.caption}</figcaption> : null}
                </figure>
              </li>
            ))
          : gallery.placeholderYears.map((year) => (
              <li key={year} className="card reel__item reel__item--placeholder">
                <div className="reel__figure">
                  <div className="reel__media reel__media--placeholder" aria-hidden="true" />
                  <p className="reel__caption">
                    {year}
                    <span>Photos coming soon</span>
                  </p>
                </div>
              </li>
            ))}
      </ul>
    </section>
  );
}
