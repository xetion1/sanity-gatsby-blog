export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61584b644dde9200b8f01a4e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-rdegchoa",
                  apiId: "b97a3709-96fe-4a0f-bf05-8558c4625356",
                },
                {
                  buildHookId: "61584b64bb94173201d9e5ea",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xzgekmoh",
                  apiId: "7158b4a9-b8f4-4607-8e7d-cadc064b6398",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/xetion1/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xzgekmoh.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
