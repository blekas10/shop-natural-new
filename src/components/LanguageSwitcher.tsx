"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Remove current locale from pathname to get base path
  const basePath = pathname.replace(`/${currentLocale}`, "") || "/";

  const languages = [
    { code: "en", name: "English" },
    { code: "lt", name: "Lietuvių" },
  ];

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <span style={{ fontSize: "0.875rem", color: "#666" }}>Language:</span>
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}${basePath}`}
          style={{
            padding: "0.5rem 1rem",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "0.875rem",
            backgroundColor:
              currentLocale === lang.code ? "#0070f3" : "#f5f5f5",
            color: currentLocale === lang.code ? "white" : "#333",
            border: currentLocale === lang.code ? "none" : "1px solid #ddd",
          }}
        >
          {lang.name}
        </Link>
      ))}
    </div>
  );
}
