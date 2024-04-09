import {HomeIcon} from '@sanity/icons'
import blockBuilder from './features/blockBuilder'

export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  isSingleton: true,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      hidden: true,
    },
    blockBuilder,
  ],
}
