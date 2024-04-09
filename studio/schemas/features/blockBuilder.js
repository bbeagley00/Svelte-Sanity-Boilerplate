import breakoutText from '../components/breakoutText'
import headerHero from '../components/headerHero'
import headerSimple from '../components/headerSimple'
import imageText from '../components/imageText'
import logo from '../components/logo'

export default {
  name: 'blocks',
  title: 'Blocks',
  type: 'array',
  of: [headerHero, headerSimple, breakoutText, imageText, logo],
}
