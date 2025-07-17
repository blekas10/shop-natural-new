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
  const dict = await getDictionary(locale);

  // Extract navigation items from your static data
  const navigationItems = dict.navigation.menus.edges[0].node.menuItems.edges.map(
    (item: any) => ({
      label: item.node.label,
      url: item.node.url,
      order: item.node.order,
    })
  );

  // Sample team data that you can replace with your own
  const teamMembers = [
    {
      id: 1,
      name: locale === 'en' ? 'Emma Johnson' : 'Emma Johnson',
      role: locale === 'en' ? 'Founder & CEO' : 'Įkūrėja ir vadovė',
      bio: locale === 'en' 
        ? 'Emma founded Natural Beauty with a passion for organic skincare and environmental responsibility.'
        : 'Emma įkūrė Natural Beauty su aistra ekologiškam odos priežiūrai ir aplinkos atsakomybei.',
      image: '👩‍💼'
    },
    {
      id: 2,
      name: locale === 'en' ? 'Dr. Sarah Chen' : 'Dr. Sarah Chen',
      role: locale === 'en' ? 'Head of Research' : 'Tyrimų vadovė',
      bio: locale === 'en' 
        ? 'Dr. Chen leads our research team in developing innovative natural formulations.'
        : 'Dr. Chen vadovauja mūsų tyrimų komandai kurdama inovatyvias natūralias formules.',
      image: '👩‍🔬'
    },
    {
      id: 3,
      name: locale === 'en' ? 'Michael Green' : 'Michael Green',
      role: locale === 'en' ? 'Sustainability Director' : 'Tvarumo direktorius',
      bio: locale === 'en' 
        ? 'Michael ensures all our processes meet the highest environmental standards.'
        : 'Michael užtikrina, kad visi mūsų procesai atitiktų aukščiausius aplinkos standartus.',
      image: '👨‍🌾'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: locale === 'en' ? 'Company Founded' : 'Įmonės įkūrimas',
      description: locale === 'en' 
        ? 'Started with a vision to create truly natural beauty products'
        : 'Pradėjome su vizija kurti tikrai natūralus grožio produktus'
    },
    {
      year: '2020',
      title: locale === 'en' ? 'Organic Certification' : 'Ekologinis sertifikatas',
      description: locale === 'en' 
        ? 'Achieved certified organic status for all our products'
        : 'Gavome ekologinį sertifikatą visiems mūsų produktams'
    },
    {
      year: '2022',
      title: locale === 'en' ? 'International Expansion' : 'Tarptautinis plėtimasis',
      description: locale === 'en' 
        ? 'Expanded to serve customers across Europe'
        : 'Išplėtėme veiklą aptarnauti klientus visoje Europoje'
    },
    {
      year: '2024',
      title: locale === 'en' ? 'Carbon Neutral' : 'Anglies neutralumas',
      description: locale === 'en' 
        ? 'Achieved carbon neutral manufacturing processes'
        : 'Pasiekėme anglies neutralių gamybos procesų'
    }
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
                  {dict.about.page.apieMus.aboutPageTitle}
                </h1>
                <p className="text-lg md:text-xl text-natural-gray-400 mb-8 leading-relaxed">
                  {dict.about.page.apieMus.aboutPageDescription}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="text-8xl md:text-9xl animate-float drop-shadow-2xl">🌱</div>
                  <div className="absolute inset-0 border-4 border-natural-green-400 rounded-full opacity-30 animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-natural-green-600 mb-8">
                {locale === 'en' ? 'Our Mission' : 'Mūsų misija'}
              </h2>
              <p className="text-lg md:text-xl text-natural-gray-400 mb-12 leading-relaxed">
                {locale === 'en' 
                  ? 'We believe that beauty should never come at the expense of our planet. Our mission is to create exceptional natural beauty products that nourish your skin while protecting the environment for future generations.'
                  : 'Mes tikime, kad grožis niekada neturėtų būti kuriamas mūsų planetos sąskaita. Mūsų misija - kurti išskirtinius natūralaus grožio produktus, kurie maitina jūsų odą ir kartu saugo aplinką ateities kartoms.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-natural-green-50 to-natural-green-100 p-8 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-natural-green-500 mb-2">100%</div>
                  <div className="text-natural-green-600 font-semibold">
                    {locale === 'en' ? 'Organic' : 'Ekologiškas'}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-natural-green-50 to-natural-green-100 p-8 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-natural-green-500 mb-2">50K+</div>
                  <div className="text-natural-green-600 font-semibold">
                    {locale === 'en' ? 'Happy Customers' : 'Patenkintų klientų'}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-natural-green-50 to-natural-green-100 p-8 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-natural-green-500 mb-2">6</div>
                  <div className="text-natural-green-600 font-semibold">
                    {locale === 'en' ? 'Years Experience' : 'Metai patirties'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-natural-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-natural-green-600 mb-16">
              {locale === 'en' ? 'Our Values' : 'Mūsų vertybės'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-natural-green-100">
                <div className="text-5xl mb-4 text-center">🌿</div>
                <h3 className="text-xl font-semibold text-natural-green-600 mb-4 text-center">
                  {locale === 'en' ? 'Natural Ingredients' : 'Natūralūs ingredientai'}
                </h3>
                <p className="text-natural-gray-400 text-center leading-relaxed">
                  {locale === 'en' 
                    ? 'We source only the finest natural ingredients from sustainable farms around the world.'
                    : 'Mes gauname tik geriausius natūralūs ingredientus iš tvarių ūkių visame pasaulyje.'}
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-natural-green-100">
                <div className="text-5xl mb-4 text-center">🏭</div>
                <h3 className="text-xl font-semibold text-natural-green-600 mb-4 text-center">
                  {locale === 'en' ? 'Sustainable Manufacturing' : 'Tvarus gamyba'}
                </h3>
                <p className="text-natural-gray-400 text-center leading-relaxed">
                  {locale === 'en' 
                    ? 'Our manufacturing processes are designed to minimize environmental impact.'
                    : 'Mūsų gamybos procesai sukurti siekiant sumažinti poveikį aplinkai.'}
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-natural-green-100">
                <div className="text-5xl mb-4 text-center">🤝</div>
                <h3 className="text-xl font-semibold text-natural-green-600 mb-4 text-center">
                  {locale === 'en' ? 'Ethical Practices' : 'Etiškas praktikos'}
                </h3>
                <p className="text-natural-gray-400 text-center leading-relaxed">
                  {locale === 'en' 
                    ? 'We maintain fair trade relationships and never test on animals.'
                    : 'Palaikome sąžiningos prekybos santykius ir niekada netestuojame su gyvūnais.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-natural-green-600 mb-16">
              {locale === 'en' ? 'Our Journey' : 'Mūsų kelionė'}
            </h2>
            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-natural-green-500 to-natural-green-400"></div>
              <div className="space-y-8">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative flex items-start">
                    <div className="absolute left-4 md:left-6 w-4 h-4 bg-natural-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="ml-16 md:ml-20">
                      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-natural-green-100">
                        <div className="text-lg font-bold text-natural-green-500 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-natural-green-600 mb-2">{milestone.title}</h3>
                        <p className="text-natural-gray-400 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-natural-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-natural-green-600 mb-16">
              {locale === 'en' ? 'Meet Our Team' : 'Susipažinkite su mūsų komanda'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-natural-green-50 to-natural-green-100 h-48 flex items-center justify-center">
                    <span className="text-6xl drop-shadow-lg">{member.image}</span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-natural-green-600 mb-2">{member.name}</h3>
                    <p className="text-natural-green-500 font-medium mb-3">{member.role}</p>
                    <p className="text-natural-gray-400 leading-relaxed">{member.bio}</p>
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
              {locale === 'en' 
                ? 'Join Our Natural Beauty Community' 
                : 'Prisijunkite prie mūsų natūralaus grožio bendruomenės'}
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              {locale === 'en' 
                ? 'Discover products that care for your skin and the planet'
                : 'Atraskite produktus, kurie rūpinasi jūsų oda ir planeta'}
            </p>
            <Link 
              href={`/${locale}`} 
              className="inline-block bg-white text-natural-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-natural-green-50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              {locale === 'en' ? 'Shop Now' : 'Pirkti dabar'}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}