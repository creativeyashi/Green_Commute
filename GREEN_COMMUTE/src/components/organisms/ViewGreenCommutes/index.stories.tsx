import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import ViewGreenCommutes from './index'

export default {
  title: 'Organisms/ViewGreenCommutes',
  component: ViewGreenCommutes,
} as ComponentMeta<typeof ViewGreenCommutes>

const Template: ComponentStory<typeof ViewGreenCommutes> = (args) => (
  <ViewGreenCommutes {...args} />
)

export const GreenComponent = Template.bind({})
