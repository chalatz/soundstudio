import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID || '',
  // Get this from tina.io
  token: process.env.TINA_TOKEN || '',  

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "./assets/images",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "home_page",
        label: "Home page",
        path: "content/home",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Intro",
            isBody: true,
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Heading",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subheading",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
              },
              {
                type: "object",
                label: "Image",
                name: "image",
                fields: [
                  {
                    type: "image",
                    name: "path",
                    label: "Image path",
                  },
                  {
                    type: "string",
                    name: "alt_text",
                    label: "Alt text",
                  },                  
                ]
              },
            ]
          }
        ],
      },
    ],
  },
});
