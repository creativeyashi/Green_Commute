import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import AQI from './index'

export default {
  title: 'Molecules/AQI',
  component: AQI,
} as ComponentMeta<typeof AQI>

const Template: ComponentStory<typeof AQI> = (args) => <AQI {...args} />

export const AQIIcon = Template.bind({})
AQIIcon.args = {
  AQIIndex: 394,
}
