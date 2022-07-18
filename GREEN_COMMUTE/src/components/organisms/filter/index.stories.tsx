import { ComponentStory } from '@storybook/react'
import { FilterPopUp } from '../filter/index'

export default {
  title: 'Organisms/filter',
  component: FilterPopUp,
}

const Template: ComponentStory<typeof FilterPopUp> = () => <FilterPopUp />

export const FilterTab = Template.bind({})
FilterTab.args = {}
