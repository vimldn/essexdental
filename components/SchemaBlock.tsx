interface SchemaBlockProps {
  schemas: unknown[];
}

export default function SchemaBlock({ schemas }: SchemaBlockProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
