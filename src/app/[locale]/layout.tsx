import { getDictionary, isValidLocale, getDefaultLocale } from "@/lib/dictionaries";
import { redirect } from "next/navigation";
import { Locale } from "@/lib/types";
import "@/styles/globals.css";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "lt" }];
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Validate locale and redirect if invalid
  if (!isValidLocale(locale)) {
    redirect(`/${getDefaultLocale()}`);
  }

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}