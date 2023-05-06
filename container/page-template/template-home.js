export default function TemplateHome({ page, site }) {
  const { pageHeading } = page || {};

  return (
    <>
      <div className="page-content template-home">
        <div className="context">
          <h1>ChinChill As Home</h1>
        </div>
      </div>
      <style jsx>{`
        .template-home {
          text-align: center;
        }
        .context {
          margin: var(--s-section) 0 0;
        }
      `}</style>
    </>
  );
}
