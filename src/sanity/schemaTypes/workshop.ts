import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Workshop Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'institution',
      title: 'Institution / Organizer',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'City, State',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date / Year',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'audience',
      title: 'Audience Type',
      type: 'string',
    }),
    defineField({
      name: 'attendees',
      title: 'Number of Attendees',
      type: 'number',
    }),
    defineField({
      name: 'topics',
      title: 'Topics Covered',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'hardware',
      title: 'Hardware Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Workshop Photo',
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
      initialValue: 'needs-confirmation',
    }),
  ],
})

