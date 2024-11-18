import { OGImageRoute } from "astro-og-canvas";
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

// Define an interface for the page data structure
interface PageData {
  title: string;
  description: string;
}

// Get all entries from the `docs` content collection.
const entries: CollectionEntry<"docs">[] = await getCollection("docs");

// Map the entry array to an object with the page ID as key and the
// frontmatter data as value.
const pages: Record<string, { data: PageData }> = Object.fromEntries(
  entries.map(({ data, id }) => [id, { data: data as PageData }])
);

export const { getStaticPaths, GET } = OGImageRoute({
  // Pass down the documentation pages.
  pages,
  // Define the name of the parameter used in the endpoint path, here `slug`
  // as the file is named `[...slug].ts`.
  param: "slug",
  // Define a function called for each page to customize the generated image.
  getImageOptions: (_path: string, page: { data: PageData }) => {
    return {
      // Use the page title and description as the image title and description.
      title: page.data.title,
      description: page.data.description,
      // Customize various colors and add a border.
      bgGradient: [[24, 24, 27]],
      border: { color: [63, 63, 70], width: 20 },
      padding: 120,
    };
  },
});
