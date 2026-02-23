export default function SEO({ title, description, jsonLd, noindex }) {
  const fullTitle = title ? `${title}｜建築鈑金はた` : '建築鈑金はた｜福井の屋根・外壁・雨樋リフォーム';

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content="/hatabou-OGP.jpg" />
      {jsonLd &&
        (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
    </>
  );
}
