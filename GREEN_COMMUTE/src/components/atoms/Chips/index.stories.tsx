import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Chips from './index'

export default {
  title: 'Atoms/Chip',
  component: Chips,
  argTypes: { onClick: { action: 'clicked' }, onDelete: { action: 'clicked' } },
} as ComponentMeta<typeof Chips>

const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />

export const Chip = Template.bind({})
Chip.args = {
  label: 'UI/UX Designer',
  variant: 'filled',
  size: 'small',
  onDelete: () => {
    console.log('deleted')
  },
}
export const Secondary = Template.bind({})

Secondary.args = {
  label: 'UI/UX Designer',
  variant: 'outlined',
}
