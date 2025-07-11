import { getDictionary } from "@/lib/dictionaries";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "lt" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
