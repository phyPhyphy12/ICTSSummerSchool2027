'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface DialogProps {
  id: string;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}

/**
 * Native modal <dialog>. Open it with <OpenDialogButton target={id}>.
 * Esc / back-gesture dismissal comes from showModal(); backdrop click comes from
 * closedby="any", with a click-outside fallback where that attribute is unsupported.
 */
export function Dialog({ id, labelledBy, className, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    // Set as an attribute: React 18's types do not know `closedby` yet.
    dialog.setAttribute('closedby', 'any');
    if ('closedBy' in HTMLDialogElement.prototype) return;

    const onClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const inside =
        rect.top <= event.clientY &&
        event.clientY <= rect.bottom &&
        rect.left <= event.clientX &&
        event.clientX <= rect.right;
      if (!inside) dialog.close();
    };
    dialog.addEventListener('click', onClick);
    return () => dialog.removeEventListener('click', onClick);
  }, []);

  return (
    <dialog ref={ref} id={id} className={className} aria-labelledby={labelledBy}>
      {children}
    </dialog>
  );
}

interface OpenDialogButtonProps {
  target: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

export function OpenDialogButton({ target, className, ariaLabel, children }: OpenDialogButtonProps) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      aria-haspopup="dialog"
      onClick={(event) => {
        // Opening from inside another dialog (the mobile menu): close that one first.
        event.currentTarget.closest('dialog')?.close();
        const dialog = document.getElementById(target);
        if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal();
      }}
    >
      {children}
    </button>
  );
}
