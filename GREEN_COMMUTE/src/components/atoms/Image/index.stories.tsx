import { Image, ImageProps } from './index'
import { Story } from '@storybook/react'
import Work from '../../../assets/image/Work.png'
import Stay from '../../../assets/image/Entry-image.png'
import Job from '../../../assets/image/Skills.png'

export default {
  title: 'Atom/Image',
  component: Image,
}

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const WorkComp = Template.bind({})
WorkComp.args = {
  source: Work,
}

export const VectorComp = Template.bind({})
VectorComp.args = {
  source: Stay,
}

export const JobsComp = Template.bind({})
JobsComp.args = {
  source: Job,
}
