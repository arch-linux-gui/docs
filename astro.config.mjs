// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://arch-linux-gui.github.io",
  base: "docs",
  integrations: [
    starlight({
      title: "Arka Linux GUI",
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        de: {
          label: "German",
          lang: "de",
        },
      },
      logo: {
        src: "./src/assets/alg-logo.png",
      },
      components: {
        // Relative path to the custom component.
        Head: "./src/components/Head.astro",
      },
      social: {
        github: "https://github.com/arch-linux-gui",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
