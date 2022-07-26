import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Routes from './index'
export default {
  title: 'Molecules/Routes',
  component: Routes,
} as ComponentMeta<typeof Routes>

const Template: ComponentStory<typeof Routes> = (args) => <Routes {...args} />

export const Primary = Template.bind({})

Primary.args = {}
