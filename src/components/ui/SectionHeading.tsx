interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
  id?: string;
}

export function SectionHeading({ eyebrow, title, lede, id }: SectionHeadingProps) {
  return (
    <header className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {lede ? <p className="section-heading__lede">{lede}</p> : null}
    </header>
  );
}
