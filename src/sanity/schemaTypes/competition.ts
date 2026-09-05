import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'competition',
  title: 'Competition',
  type: 'document',
  fields: [
    defineField({
      name: 'event',
      title: 'Event Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'event' },
    }),
    defineField({
      name: 'institution',
      title: 'Institution (e.g., IIT Delhi)',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['RoboWar', 'RoboRace', 'RoboSoccer', 'RoboBoat', 'FPV', 'Other'],
      },
    }),
    defineField({
      name: 'weightClass',
      title: 'Weight Class (if applicable)',
      type: 'string',
    }),
    defineField({
      name: 'result',
      title: 'Result / Placement',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'My Role',
      type: 'string',
    }),
    defineField({
      name: 'story',
      title: 'Short Story / Challenges',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'verificationStatus',
      title: 'Verification Status',
      type: 'string',
      options: {
        list: ['verified', 'needs-confirmation', 'draft'],
      },
      initialValue: 'draft',
    }),
  ],
})

