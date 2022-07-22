import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import SideNav from './index'
export default {
  title: 'Organisms/SideNav',
  component: SideNav,
} as ComponentMeta<typeof SideNav>

const Template: ComponentStory<typeof SideNav> = (args) => <SideNav {...args} />

export const Card = Template.bind({})
