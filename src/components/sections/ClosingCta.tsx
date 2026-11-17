import { site } from '@/content/site';
import { APPLY_DIALOG_ID } from '@/components/ui/ApplyDialog';
import { OpenDialogButton } from '@/components/ui/Dialog';

export function ClosingCta() {
  return (
    <section id="apply" className="section closing" aria-labelledby="closing-title">
      <div className="container closing__inner reveal">
        <p className="eyebrow">Applications</p>
        <h2 id="closing-title">
          What questions will <em>you</em> ask?
        </h2>
        <p className="closing__lede">
          Programme: 31 May – 11 June 2027. Application deadline: 28 February 2026. The exam portal will open on this
          page.
        </p>
        <OpenDialogButton target={APPLY_DIALOG_ID} className="button button--primary">
          Apply for {site.shortName}
        </OpenDialogButton>
      </div>
    </section>
  );
}
