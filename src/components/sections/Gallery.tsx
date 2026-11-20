import { gallery, type GalleryItem } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { asset } from '@/lib/assets';

function Media({ item }: { item: GalleryItem }) {
  if (item.type === 'video') {
    return (
      <video
        src={asset(item.src)}
        poster={item.poster ? asset(item.poster) : undefined}
        aria-label={item.alt}
        controls
        preload="none"
        playsInline
        className="reel__media"
      />
    );
  }
  const img = (
    <img
      src={asset(item.src)}
      alt={item.alt}
      width={item.width}
      height={item.height}
      loading="lazy"
      decoding="async"
      className="reel__media"
    />
  );
  return (
    // Opens the full-size photo in a new tab, so faces in group shots can be seen up close.
    <a href={asset(item.src)} target="_blank" rel="noopener" className="reel__link">
      {item.webp ? (
        <picture>
          <source
            type="image/webp"
            srcSet={item.webp.map(([path, w]) => `${asset(path)} ${w}w`).join(', ')}
            sizes="(min-width: 48rem) 40rem, 90vw"
          />
          {img}
        </picture>
      ) : (
        img
      )}
      <span className="visually-hidden"> (opens full-size photo in a new tab)</span>
    </a>
  );
}

/**
 * Photo and video reel from earlier editions: a horizontally scrolling strip of cards that
 * snaps to each item. Content lives in src/content/site.ts (gallery.editions).
 */
export function Gallery() {
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading id="gallery-title" eyebrow={gallery.eyebrow} title={gallery.title} lede={gallery.lede} />
      </div>

      <ul className="reel" aria-label="Photos and videos from past schools" tabIndex={0}>
        {gallery.editions.flatMap((edition) =>
          edition.items.length > 0
            ? edition.items.map((item) => (
                <li key={item.src} className="card reel__item reel__item--wide">
                  <figure className="reel__figure">
                    <Media item={item} />
                    <figcaption className="reel__caption">
                      {edition.name}
                      {item.caption ? <span>{item.caption}</span> : null}
                    </figcaption>
                  </figure>
                </li>
              ))
            : [
                <li key={edition.name} className="card reel__item">
                  <div className="reel__figure">
                    <div className="reel__media reel__media--placeholder" aria-hidden="true" />
                    <p className="reel__caption">
                      {edition.name}
                      <span>Photos coming soon</span>
                    </p>
                  </div>
                </li>,
              ],
        )}
      </ul>
    </section>
  );
}
