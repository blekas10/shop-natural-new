// Just page IDs - everything else is raw
export const PAGES = {
  en: { homepage: "cG9zdDoyOQ==", about: "cG9zdDoxMjI=" },
  lt: { homepage: "cG9zdDoxMTU=", about: "cG9zdDoxMzY=" },
};

// Query templates
export const QUERIES = {
  navigation: `
    query GetMenuWithItems($lang: String!) {
      menus(where: {language: $lang}) {
        edges {
          node {
            id
            name
            menuItems {
              edges {
                node {
                  id
                  label
                  url
                  parentId
                  order
                }
              }
            }
          }
        }
      }
    }
  `,
  homepage: (pageId) => `
    query {
      page(id: "${pageId}") {
        title
        slug
        homepageContent { 
          mainTitle 
          descriptionText 
        }
        seo {
          title
          metaDesc
          focuskw
        }
      }
    }
  `,
  about: (pageId) => `
    query {
      page(id: "${pageId}") {
        title
        slug
        apieMus { 
          aboutPageTitle 
          aboutPageDescription 
        }
        seo {
          title
          metaDesc
          focuskw
        }
      }
    }
  `,
};
