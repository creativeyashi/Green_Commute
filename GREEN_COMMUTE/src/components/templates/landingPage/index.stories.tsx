import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import LandingPageTemplate from './index'

export default {
  title: 'Templates/LandingPageTemplate',
  component: LandingPageTemplate,
} as ComponentMeta<typeof LandingPageTemplate>

const Template: ComponentStory<typeof LandingPageTemplate> = (args) => (
  <LandingPageTemplate {...args} />
)

export const AQIIcon = Template.bind({})
