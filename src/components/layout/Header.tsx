import { navLinks, site } from '@/content/site';
import { asset } from '@/lib/assets';
import { APPLY_DIALOG_ID } from '@/components/ui/ApplyDialog';
import { OpenDialogButton } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon';
import { MOBILE_NAV_ID, MobileNav } from './MobileNav';

export function Header() {
  return (
    <>
      <div className="site-header">
        <header className="site-header__bar">
          <a href="#top" className="brand" aria-label={`${site.name}, back to top`}>
            <img
              src={asset('/images/icts-logo.png')}
              alt="International Centre for Theoretical Sciences, Tata Institute of Fundamental Research"
              width={1652}
              height={580}
              className="brand__logo"
            />
            <span className="brand__name">{site.shortName}</span>
          </a>

          <nav className="site-nav" aria-label="Sections">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <OpenDialogButton target={APPLY_DIALOG_ID} className="button button--primary button--small">
              Apply
            </OpenDialogButton>
            <OpenDialogButton
              target={MOBILE_NAV_ID}
              className="icon-button site-header__menu"
              ariaLabel="Open navigation menu"
            >
              <Icon name="menu" size={22} />
            </OpenDialogButton>
          </div>
        </header>
      </div>
      <MobileNav />
    </>
  );
}
