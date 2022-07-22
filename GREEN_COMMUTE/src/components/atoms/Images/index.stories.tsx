import { Story } from '@storybook/react'
import Work from '../../../assets/image/Work.png'
import Stay from '../../../assets/image/Entry-image.png'
import Job from '../../../assets/image/Skills.png'
import Map from '../../../assets/image/Map.png'
import Logo from '../../../assets/icons/logo.svg'
import Image, { ImageProps } from './index'

export default {
  title: 'Atom/Images',
  component: Image,
}

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const WorkIllustration = Template.bind({})
WorkIllustration.args = {
  source: Work,
}
export const StayIllustration = Template.bind({})
StayIllustration.args = {
  source: Stay,
}
export const JobIllustration = Template.bind({})
JobIllustration.args = {
  source: Job,
}
export const MapIllustration = Template.bind({})
MapIllustration.args = {
  source: Map,
}
export const LogoIllustration = Template.bind({})
LogoIllustration.args = {
  source: Logo,
}
