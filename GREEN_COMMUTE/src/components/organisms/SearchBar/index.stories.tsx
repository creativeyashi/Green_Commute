import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchBar from './index'

export default {
  title: 'Organisms/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
)

export const SearchComponent = Template.bind({})

SearchComponent.args = {
  placeholder1: 'Skills',
  placeholder2: 'Locations',
}
