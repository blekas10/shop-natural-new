import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavigationItem {
  label: string;
  url: string;
  order: number;
}

interface HeaderProps {
  locale: string;
  navigationItems: NavigationItem[];
}

export default function Header({ locale, navigationItems }: HeaderProps) {
  // Convert WordPress URLs to local routes
  const getLocalRoute = (url: string, label: string) => {
    if (label.toLowerCase().includes('about') || label.toLowerCase().includes('apie')) {
      return `/${locale}/about`;
    }
    return `/${locale}`;
  };

  return (
    <header className="bg-gradient-to-r from-natural-green-50 to-natural-green-100 border-b border-natural-green-200 sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href={`/${locale}`} 
              className="flex items-center gap-2 text-natural-green-600 hover:text-natural-green-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="text-2xl drop-shadow-sm">🌿</span>
              <span className="font-bold text-xl">Natural Beauty</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems
              .sort((a, b) => a.order - b.order)
              .map((item) => (
                <Link
                  key={item.url}
                  href={getLocalRoute(item.url, item.label)}
                  className="relative px-4 py-2 text-natural-gray-400 hover:text-natural-green-600 font-medium transition-all duration-300 rounded-lg hover:bg-natural-green-50 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-natural-green-500 to-natural-green-400 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"></span>
                </Link>
              ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex-shrink-0">
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg hover:bg-natural-green-50 transition-colors">
              <svg className="w-6 h-6 text-natural-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <nav className="flex flex-col space-y-2">
            {navigationItems
              .sort((a, b) => a.order - b.order)
              .map((item) => (
                <Link
                  key={item.url}
                  href={getLocalRoute(item.url, item.label)}
                  className="px-3 py-2 text-natural-gray-400 hover:text-natural-green-600 font-medium transition-colors rounded-lg hover:bg-natural-green-50"
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>
      </div>
    </header>
  );
}