import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Custom Flight Controller', 'FPV Drone', 'Payload UAV', 'Combat Robotics', 'Other'],
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
    }),
    defineField({
      name: 'architecture',
      title: 'System Architecture',
      type: 'text',
    }),
    defineField({
      name: 'hardwareStack',
      title: 'Hardware Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'software',
      title: 'Software / Firmware',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'lessonsLearned',
      title: 'Lessons Learned',
      type: 'text',
    }),
  ],
})

