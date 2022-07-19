import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CheckBoxComponent from '.'

const CheckBoxComponentStory = {
  title: 'Atom/CheckBox',
  component: CheckBoxComponent,
} as ComponentMeta<typeof CheckBoxComponent>

const Template: ComponentStory<typeof CheckBoxComponent> = (args) => (
  <CheckBoxComponent {...args} />
)

export const CheckBoxActive = Template.bind({})
CheckBoxActive.args = {
  checked: true,
  value: 'iamchecked',
}

export const CheckBoxInactive = Template.bind({})
CheckBoxInactive.args = {
  checked: false,
  value: 'iamunchecked',
}

export default CheckBoxComponentStory
