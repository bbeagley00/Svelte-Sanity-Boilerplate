import {CogIcon} from '@sanity/icons'
import navigationLinks from './features/navigationLinks'
import sponsors from './features/sponsors'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  isSingleton: true,
  icon: CogIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'acknowledgement',
      title: 'Acknowledgement of Country',
      type: 'text',
    },
    navigationLinks,
    sponsors,
  ],
}
