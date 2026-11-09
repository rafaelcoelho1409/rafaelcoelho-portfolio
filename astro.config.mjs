// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";

function rehypeScrollableTables() {
  return (tree) => {
    const visit = (parent) => {
      if (!Array.isArray(parent.children)) return;

      parent.children = parent.children.flatMap((child) => {
        if (child.type === "element" && child.tagName === "table") {
          return [{
            type: "element",
            tagName: "div",
            properties: {
              className: ["table-scroll"],
              role: "region",
              ariaLabel: "Scrollable data table",
              tabIndex: 0,
            },
            children: [child],
          }];
        }

        visit(child);
        return [child];
      });
    };

    visit(tree);
  };
}

export default defineConfig({
  site: "https://rafaelcoelho.pages.dev",
  trailingSlash: "ignore",
  markdown: {
    processor: unified({ rehypePlugins: [rehypeScrollableTables] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});
