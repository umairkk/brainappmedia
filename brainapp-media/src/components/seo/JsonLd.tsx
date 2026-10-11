export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BrainApp Media",
    url: "https://brainappmedia.com",
    description:
      "Digital marketing, website development, paid advertising, and creative design for small and medium businesses.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
