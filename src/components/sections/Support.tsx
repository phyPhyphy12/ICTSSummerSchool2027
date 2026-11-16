import { site, support } from '@/content/site';
import { asset } from '@/lib/assets';
import { Icon } from '@/components/ui/Icon';

export function Support() {
  return (
    <section id="support" className="section" aria-labelledby="support-title">
      <div className="container">
        <div className="support reveal">
          <p className="eyebrow">{support.eyebrow}</p>
          <h2 id="support-title">{support.title}</h2>
          <p className="support__statement">{support.statement}</p>

          <div className="support__document">
            <div>
              <p className="support__document-title">{support.documentTitle}</p>
              <p className="support__document-note">{support.documentNote}</p>
            </div>
            <div className="support__actions">
              <a
                href={site.travelNorms.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--light"
              >
                View official PDF <Icon name="arrowUpRight" size={16} />
              </a>
              <a
                href={asset(site.travelNorms.localPath)}
                download={site.travelNorms.downloadName}
                className="button button--outline-light"
              >
                Download <Icon name="download" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
