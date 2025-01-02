import { Rule } from 'sanity';

export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'oldPrice',
      title: 'Old Price',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image1',
      title: 'Additional Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image2',
      title: 'Additional Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image3',
      title: 'Additional Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0).max(5),
    },
    {
      name: 'customerReview',
      title: 'Customer Reviews',
      type: 'number',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'SKU',
      title: 'SKU',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
}
