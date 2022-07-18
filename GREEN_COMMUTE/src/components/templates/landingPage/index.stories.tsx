import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import LandingPageTemplate from './index'
import AQI from '../../molecules/AQI'
export default {
  title: 'Templates/LandingPageTemplate',
  component: LandingPageTemplate,
} as ComponentMeta<typeof LandingPageTemplate>

const Template: ComponentStory<typeof LandingPageTemplate> = (args) => (
  <LandingPageTemplate {...args} />
)

export const LandingTemplate = Template.bind({})
LandingTemplate.args = {
  RightFrame: <AQI AQIIndex={987} />,
}
