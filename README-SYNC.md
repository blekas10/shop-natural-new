# WordPress to JSON Sync Script

## Setup

1. **Update WordPress Configuration** in `scripts/sync-translations.js`:

   ```js
   const WP_GRAPHQL_URL = "https://your-wordpress-site.com/graphql";
   const PAGE_IDS = {
     homepage: 123, // Your homepage page ID
     about: 456, // Your about page ID
   };
   ```

2. **Find Your Page IDs**:
   - Go to your WordPress GraphQL playground
   - Run this query:
   ```graphql
   query GetPageIDs {
     pages(where: { status: PUBLISH }) {
       nodes {
         id
         title
         slug
         language {
           code
         }
       }
     }
   }
   ```
   - Find your homepage and about page IDs

## Usage

### Run the sync script:

```bash
npm run sync
```

### What it does:

1. ✅ Fetches homepage ACF fields (`homepageContent`)
2. ✅ Fetches about page ACF fields (`apieMus`)
3. ✅ Updates `lib/dictionaries/en.json`
4. ✅ Updates `lib/dictionaries/lt.json`
5. ✅ Preserves your existing dictionary structure

### Workflow:

1. **Content editor** updates WordPress pages
2. **Developer** runs `npm run sync`
3. **JSON files** are updated with fresh content
4. **Restart** dev server to see changes

### Example Output:

```
🚀 Starting WordPress to JSON sync...

📥 Fetching EN content...
   ✓ Homepage data fetched
   ✓ About page data fetched
   ✅ en.json updated successfully

   📝 Synced content:
      Home Title: "Welcome to Our Amazing Website"
      About Title: "Learn About Our Company"

📥 Fetching LT content...
   ✓ Homepage data fetched
   ✓ About page data fetched
   ✅ lt.json updated successfully

   📝 Synced content:
      Home Title: "Sveiki atvykę į mūsų nuostabią svetainę"
      About Title: "Sužinokite apie mūsų įmonę"

🎉 Translation sync complete!
```

## Troubleshooting

- **GraphQL endpoint not found**: Check your WordPress URL
- **Page IDs not working**: Verify IDs in WordPress admin
- **Missing ACF fields**: Ensure your GraphQL schema includes ACF fields
- **Language codes**: Make sure your WPML uses EN/LT format
