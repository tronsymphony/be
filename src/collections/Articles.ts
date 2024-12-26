import type { CollectionConfig } from 'payload'

const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'content',
      type: 'blocks', // Use 'blocks' instead of 'richText'
      blocks: [
        {
          slug: 'wysiwyg',
          labels: {
            singular: 'WYSIWYG Editor',
            plural: 'WYSIWYG Editors',
          },
          fields: [
            {
              name: 'content',
              type: 'richText', // Built-in WYSIWYG editor
              label: 'Content',
              required: true,
              admin: {
                description: 'Enter rich text content here...',
              },
            },
          ],
        },
        {
          slug: 'html-embed',
          labels: {
            singular: 'HTML Embed',
            plural: 'HTML Embeds',
          },
          fields: [
            {
              name: 'htmlCode',
              label: 'HTML Code',
              type: 'code',
              required: true,
              admin: {
                language: 'html',
              },
            },
          ],
        },
        {
          slug: 'image',
          labels: {
            singular: 'Image',
            plural: 'Images',
          },
          fields: [
            {
              name: 'image',
              label: 'Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'alt',
              label: 'Alt Text',
              type: 'text',
            },
            {
              name: 'caption',
              label: 'Caption',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
  ],
}

export default Articles
