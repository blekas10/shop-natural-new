import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as any);
  return {
    title: dict.about.page.seo.title,
    description: dict.about.page.seo.metaDesc,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as any);

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <header style={{ marginBottom: "2rem" }}>
        <LanguageSwitcher currentLocale={locale} />
      </header>

      <main>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>
          {dict.about.page.title}
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
            color: "#666",
          }}
        >
          {dict.about.page.apieMus.aboutPageDescription}
        </p>

        <nav>
          <Link
            href={`/${locale}`}
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#0070f3",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "1rem",
            }}
          >
            {dict.navigation.menus.edges[0].node.menuItems.edges[0].node.label}
          </Link>
        </nav>
      </main>
    </div>
  );
}
