"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  currentLocale: string;
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "lt", name: "Lietuvių", flag: "🇱🇹" },
];

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  
  // Remove current locale from pathname to get base path
  const basePath = pathname.replace(`/${currentLocale}`, "") || "/";

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-natural-gray-600 hidden sm:inline">Language:</span>
      <div className="flex items-center gap-1">
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={`/${lang.code}${basePath}`}
            className={`
              flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
              ${currentLocale === lang.code
                ? 'bg-natural-green-500 text-white shadow-lg'
                : 'bg-natural-green-50 text-natural-gray-400 hover:bg-natural-green-100 hover:text-natural-green-600'
              }
            `}
          >
            <span className="text-xs">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.code.toUpperCase()}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}