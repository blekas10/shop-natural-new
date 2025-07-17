import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import Header from "@/components/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.homepage.page.seo.title,
    description: dict.homepage.page.seo.metaDesc,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // Extract navigation items from your static data
  const navigationItems =
    dict.navigation.menus.edges[0].node.menuItems.edges.map((item: any) => ({
      label: item.node.label,
      url: item.node.url,
      order: item.node.order,
    }));

  // Sample product data that you can later replace with your own
  const featuredProducts = [
    {
      id: 1,
      name: locale === "en" ? "Organic Face Cream" : "Ekologiškas veido kremas",
      description:
        locale === "en"
          ? "Nourishing cream with natural ingredients"
          : "Maitinantis kremas su natūraliais ingredientais",
      price: "€24.99",
      image: "🧴",
    },
    {
      id: 2,
      name: locale === "en" ? "Natural Lip Balm" : "Natūralus lūpų balzamas",
      description:
        locale === "en"
          ? "Moisturizing balm with organic oils"
          : "Drėkinantis balzamas su ekologiškais aliejais",
      price: "€8.99",
      image: "💄",
    },
    {
      id: 3,
      name: locale === "en" ? "Herbal Body Wash" : "Žolelių kūno prausiklis",
      description:
        locale === "en"
          ? "Gentle cleansing with herbal extracts"
          : "Švelnus valymas su žolelių ekstraktais",
      price: "€16.99",
      image: "🧼",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} navigationItems={navigationItems} />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-natural-green-50 via-natural-green-100 to-natural-green-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-natural-green-600 mb-6 leading-tight">
                  {dict.homepage.page.homepageContent.mainTitle}
                </h1>
                <p className="text-lg md:text-xl text-natural-gray-400 mb-8 leading-relaxed">
                  {dict.homepage.page.homepageContent.descriptionText}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href={`/${locale}/about`}
                    className="bg-gradient-to-r from-natural-green-500 to-natural-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-natural-green-600 hover:to-natural-green-500 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    {locale === "en" ? "Learn More" : "Sužinokite daugiau"}
                  </Link>
                  <Link
                    href={`/${locale}#products`}
                    className="border-2 border-natural-green-500 text-natural-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-natural-green-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {locale === "en" ? "Shop Now" : "Pirkti dabar"}
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="text-8xl md:text-9xl animate-float drop-shadow-2xl">
                    🌿
                  </div>
                  <div className="absolute inset-0 border-4 border-natural-green-400 rounded-full opacity-30 animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-natural-green-600 mb-16">
              {locale === "en"
                ? "Why Choose Natural Beauty?"
                : "Kodėl rinktis Natural Beauty?"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-natural-green-100">
                <div className="text-5xl mb-4 text-center">🌱</div>
                <h3 className="text-xl font-semibold text-natural-green-600 mb-4 text-center">
                  {locale === "en" ? "100% Organic" : "100% Ekologiškas"}
                </h3>
                <p className="text-natural-gray-400 text-center leading-relaxed">
                  {locale === "en"
                    ? "Made with certified organic ingredients sourced from nature"
                    : "Pagamintas iš sertifikuotų ekologiškų ingredientų iš gamtos"}
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-natural-green-100">
                <div className="text-5xl mb-4 text-center">🚫</div>
                <h3 className="text-xl font-semibold text-natural-green-600 mb-4 text-center">
                  {locale === "en" ? "Chemical-Free" : "Be cheminių medžiagų"}
                </h3>
                <p className="text-natural-gray-400 text-center leading-relaxed">
                  {locale === "en"
                    ? "No harmful chemicals, parabens, or synthetic fragrances"
                    : "Jokių kenksmingų cheminių medžiagų, parabenų ar sintetinių kvapų"}
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-natural-green-100">
                <div className="text-5xl mb-4 text-center">🐰</div>
                <h3 className="text-xl font-semibold text-natural-green-600 mb-4 text-center">
                  {locale === "en" ? "Cruelty-Free" : "Netestuota su gyvūnais"}
                </h3>
                <p className="text-natural-gray-400 text-center leading-relaxed">
                  {locale === "en"
                    ? "Never tested on animals, always ethically produced"
                    : "Niekada netestuojama su gyvūnais, visada etiškai gaminama"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24 bg-natural-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-natural-green-600 mb-16">
              {locale === "en"
                ? "Featured Products"
                : "Rekomenduojami produktai"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-natural-green-50 to-natural-green-100 h-48 flex items-center justify-center">
                    <span className="text-6xl drop-shadow-lg">
                      {product.image}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-natural-green-600 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-natural-gray-400 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-natural-green-500">
                        {product.price}
                      </span>
                      <button className="bg-natural-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-natural-green-600 transition-colors duration-200">
                        {locale === "en" ? "Add to Cart" : "Į krepšelį"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-natural-green-600 to-natural-green-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {locale === "en"
                ? "Ready to Transform Your Beauty Routine?"
                : "Pasiruošę pakeisti savo grožio rutiną?"}
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              {locale === "en"
                ? "Join thousands of satisfied customers who chose natural beauty"
                : "Prisijunkite prie tūkstančių patenkintų klientų, kurie pasirinko natūralų grožį"}
            </p>
            <Link
              href={`/${locale}/about`}
              className="inline-block bg-white text-natural-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-natural-green-50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              {locale === "en"
                ? "Start Your Journey"
                : "Pradėkite savo kelionę"}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
