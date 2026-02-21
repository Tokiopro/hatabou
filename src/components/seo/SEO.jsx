export default function SEO({ title, description, jsonLd }) {
  const fullTitle = title ? `${title}｜建築鈑金はた` : '建築鈑金はた｜福井の屋根・外壁・雨樋リフォーム';

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
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
