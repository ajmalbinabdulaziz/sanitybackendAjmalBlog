import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'array',
      of: [{type: 'reference', to: {type: 'comment'}}],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
  },

})
