'use client';

import { navLinks, site } from '@/content/site';
import { APPLY_DIALOG_ID } from '@/components/ui/ApplyDialog';
import { Dialog, OpenDialogButton } from '@/components/ui/Dialog';
import { Icon } from '@/components/ui/Icon';

export const MOBILE_NAV_ID = 'mobile-nav';

export function MobileNav() {
  return (
    <Dialog id={MOBILE_NAV_ID} labelledBy="mobile-nav-title" className="drawer">
      <div className="drawer__head">
        <h2 id="mobile-nav-title" className="brand__name">
          {site.shortName}
        </h2>
        <form method="dialog">
          <button type="submit" className="icon-button" aria-label="Close navigation menu">
            <Icon name="close" size={22} />
          </button>
        </form>
      </div>

      <nav className="drawer__nav" aria-label="Sections">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => {
              // Close the menu first so the page-scroll lock is lifted, then scroll ourselves.
              // Relying on the link's default jump while the dialog is closing gets the
              // scroll cancelled or cut short on mobile browsers.
              const target = document.querySelector(link.href);
              if (!target) return;
              event.preventDefault();
              event.currentTarget.closest('dialog')?.close();
              const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
              history.pushState(null, '', link.href);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <OpenDialogButton target={APPLY_DIALOG_ID} className="button button--primary">
        Apply for {site.shortName}
      </OpenDialogButton>
    </Dialog>
  );
}
