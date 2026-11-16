const paths = {
  arrowUpRight: 'M7 17 17 7M8 7h9v9',
  arrowDown: 'M12 5v14M5 12l7 7 7-7',
  download: 'M12 4v11M7 11l5 5 5-5M5 20h14',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
} as const;

export type IconName = keyof typeof paths;

/** Decorative inline icon; always paired with visible or aria-label text. */
export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
