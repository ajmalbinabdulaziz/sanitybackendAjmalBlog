import { defineField } from "sanity"


export default defineField({
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
      
        {type: 'block'},
        {type: 'image'},
        {type: 'code'}

        ],
    })

  