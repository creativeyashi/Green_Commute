import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SingleAutoComplete from './index'
const currentLocation = ['E Marredpally, Secunderabad,Hyderabad']
export default {
  title: 'Organisms/SingleAutoComplete',
  component: SingleAutoComplete,
} as ComponentMeta<typeof SingleAutoComplete>

const Template: ComponentStory<typeof SingleAutoComplete> = (args) => (
  <SingleAutoComplete {...args} />
)

export const Location = Template.bind({})
Location.args = {
  options: currentLocation,
}
