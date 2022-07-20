import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomeScreenTemplate from './Index'

export default {
  title: 'Templates/HomeScreenTemplate',
  component: HomeScreenTemplate,
} as ComponentMeta<typeof HomeScreenTemplate>

const Template: ComponentStory<typeof HomeScreenTemplate> = (args) => (
  <HomeScreenTemplate {...args} />
)

export const LandingTemplate = Template.bind({})
LandingTemplate.args = {}
