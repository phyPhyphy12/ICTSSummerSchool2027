import { application, site } from '@/content/site';
import { Dialog } from './Dialog';
import { Icon } from './Icon';

export const APPLY_DIALOG_ID = 'apply-dialog';

/** "Coming soon" notice shown by every Apply button until applications open. */
export function ApplyDialog() {
  return (
    <Dialog id={APPLY_DIALOG_ID} labelledBy="apply-dialog-title" className="modal">
      <form method="dialog" className="modal__close">
        <button type="submit" className="icon-button" aria-label="Close dialog">
          <Icon name="close" />
        </button>
      </form>

      <p className="eyebrow">{site.shortName}</p>
      <h2 id="apply-dialog-title" className="modal__title">
        {application.title}
      </h2>
      <p>{application.body}</p>

      <ul className="modal__points">
        {application.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <form method="dialog" className="modal__actions">
        <button type="submit" className="button button--primary">
          Close
        </button>
      </form>
    </Dialog>
  );
}
