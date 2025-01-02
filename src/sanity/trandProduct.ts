export const trendyProductpage = {
  name: "trendyProductpage",
  title: "Trendy Products Page",
  type: "document",
  fields: [
    // Heading Fields
    {
      name: "mainHeading",
      title: "Main Heading",
      type: "string",
    },
    {
      name: "subHeading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "buttontext",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonlink",
      title: "Button Link",
      type: "url",
    },

    // Product Fields
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "id",
              title: "Product ID",
              type: "string",
              description: "A unique identifier for the product.",
            },
            {
              name: "image",
              title: "Product Image",
              type: "image",
              options: {
                hotspot: true,
              },
              description: "Upload the product image.",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
              description:
                "Short description of the product (e.g., Bedroom, Dining, Living, etc.).",
            },
            {
              name: "type",
              title: "Type",
              type: "string",
              description:
                "The type or category of the product (e.g., Inner Peace).",
            },
            {
              name: "link",
              title: "Product Link",
              type: "url",
              description: "Link to the product or category page.",
            },
          ],
        },
      ],
    },
  ],
};
