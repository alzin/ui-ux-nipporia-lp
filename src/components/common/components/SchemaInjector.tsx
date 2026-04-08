interface SchemaInjectorProps {
  schemas: object[];
}

export function SchemaInjector({ schemas }: SchemaInjectorProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
