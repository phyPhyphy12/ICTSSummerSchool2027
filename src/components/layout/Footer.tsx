import { navLinks, site } from '@/content/site';
import { asset } from '@/lib/assets';
import { Icon } from '@/components/ui/Icon';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <img
            src={asset('/images/icts-logo.png')}
            alt="International Centre for Theoretical Sciences, Tata Institute of Fundamental Research"
            width={1652}
            height={580}
            loading="lazy"
            className="site-footer__logo"
          />
          <p>
            International Centre for Theoretical Sciences, a centre of the Tata Institute of Fundamental Research,
            dedicated to research, advanced human capacity building, and scientific outreach.
          </p>
          <address>{site.address}</address>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Explore</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Documents & links</h2>
          <ul>
            <li>
              <a href={site.travelNorms.viewUrl} target="_blank" rel="noopener noreferrer">
                Applicable ICTS travel norms (PDF) <Icon name="arrowUpRight" size={14} />
              </a>
            </li>
            <li>
              <a href={site.ictsUrl} target="_blank" rel="noopener noreferrer">
                ICTS official website <Icon name="arrowUpRight" size={14} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__legal">
        <span>© 2026 International Centre for Theoretical Sciences (ICTS-TIFR). All rights reserved.</span>
        <span>{site.name}</span>
      </div>
    </footer>
  );
}
