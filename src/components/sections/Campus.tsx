import { site } from '@/content/site';
import { asset } from '@/lib/assets';

/** Wide photograph of the ICTS entrance; the frame grows and the photo drifts as it scrolls through. */
export function Campus() {
  return (
    <section className="campus" aria-label="The ICTS campus">
      <figure className="campus__figure">
        <div className="campus__frame">
          <picture>
            <source
              type="image/webp"
              srcSet={`${asset('/images/icts-entrance-1200.webp')} 1200w, ${asset('/images/icts-entrance-2400.webp')} 2400w, ${asset('/images/icts-entrance-3200.webp')} 3200w`}
              sizes="(min-width: 76rem) 76rem, 100vw"
            />
            <img
              src={asset('/images/icts-entrance-2400.jpg')}
              alt="Entrance of the ICTS campus: a black granite wall carrying the ICTS logo and the words International Centre for Theoretical Sciences, Tata Institute of Fundamental Research, under a flat canopy"
              width={2400}
              height={1211}
              loading="lazy"
              decoding="async"
              className="campus__photo"
            />
          </picture>
        </div>
        <figcaption className="campus__caption reveal">
          <span className="eyebrow">Where it happens</span>
          <span className="campus__place">ICTS-TIFR, Bengaluru</span>
          <span>{site.address}</span>
        </figcaption>
      </figure>
    </section>
  );
}
