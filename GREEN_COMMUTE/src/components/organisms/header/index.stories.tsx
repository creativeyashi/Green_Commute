import TopNavbar from '.'
import { ComponentStory } from '@storybook/react'
export default {
  title: 'organisms/Header',
  component: TopNavbar,
}

const Template: ComponentStory<typeof TopNavbar> = (args) => (
  <TopNavbar {...args}></TopNavbar>
)
export const TopNavBar = Template.bind({})

TopNavBar.args = {
  text: 'East Marredpally, Secunderabad',
}
