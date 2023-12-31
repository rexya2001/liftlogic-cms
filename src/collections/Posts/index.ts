import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/ThemeA/Archive'
import { CallToAction } from '../../blocks/ThemeA/CallToAction'
import { Content } from '../../blocks/ThemeA/Content'
import { FormBlock } from '../../blocks/ThemeA/Form'
import { MediaBlock } from '../../blocks/Media'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
// import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { formatAppURL, revalidatePage } from '../../hooks/revalidatePage'
import { Sites } from '../Sites'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
  },
  hooks: {
    beforeChange: [populatePublishedDate],
    // afterRead: [populateArchiveBlock],
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'site',
      type: 'relationship',
      relationTo: Sites.slug,
      hasMany: false,
      index: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [CallToAction, Content, FormBlock, MediaBlock, Archive],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
