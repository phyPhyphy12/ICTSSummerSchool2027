import { site } from '@/content/site';
import { asset } from '@/lib/assets';

/** Wide photograph of the ICTS entrance; the frame grows and the photo drifts as it scrolls through. */
export function Campus() {
  return (
    <section className="campus" aria-label="The ICTS campus">
      <figure className="campus__figure">
        <div className="campus__frame">
          <img
            src={asset('/images/icts-entrance.webp')}
            alt="Entrance of the ICTS campus: a black stone wall carrying the ICTS logo and the words International Centre for Theoretical Sciences, Tata Institute of Fundamental Research"
            width={1121}
            height={477}
            loading="lazy"
            decoding="async"
            className="campus__photo"
          />
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
