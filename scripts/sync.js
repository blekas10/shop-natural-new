const fs = require("fs").promises;
const { PAGES, QUERIES } = require("../lib/queries.js");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

async function fetchGraphQL(query, variables = {}) {
  const response = await fetch("https://localhost/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  return (await response.json()).data;
}

async function sync() {
  console.log("🔄 Syncing...");

  for (const [lang, pageIds] of Object.entries(PAGES)) {
    const [navigation, homepage, about] = await Promise.all([
      fetchGraphQL(QUERIES.navigation, { lang: lang.toLowerCase() }),
      fetchGraphQL(QUERIES.homepage(pageIds.homepage)),
      fetchGraphQL(QUERIES.about(pageIds.about)),
    ]);

    // Just pass raw query data
    const dictionary = {
      navigation,
      homepage,
      about,
    };

    await fs.writeFile(
      `lib/dictionaries/${lang}.json`,
      JSON.stringify(dictionary, null, 2)
    );
    console.log(`✅ ${lang}`);
  }

  console.log("🎉 Done!");
}

sync().catch(console.error);
