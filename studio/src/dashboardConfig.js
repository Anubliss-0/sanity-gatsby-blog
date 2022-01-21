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
                    "61eaf3f28a932b36ffd43459",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-n8vipu12",
                  apiId: "89f1a7aa-541b-490c-9b71-fad383e41d31",
                },
                {
                  buildHookId: "61eaf3f23f14c14459cfb459",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-3km6uxvj",
                  apiId: "ee66323f-fab4-45d3-b8fa-53a097378b2c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Anubliss-0/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-3km6uxvj.netlify.app",
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
