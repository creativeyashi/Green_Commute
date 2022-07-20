import { ThemeProvider } from '@emotion/react'
import { ComponentStory } from '@storybook/react'
import { FilterPopUp } from './index'
import theme from '../../../theme/theme'

export default {
  title: 'Organisms/filter',
  component: FilterPopUp,
}

const Template: ComponentStory<typeof FilterPopUp> = () => (
  <ThemeProvider theme={theme}>
    <FilterPopUp />
  </ThemeProvider>
)

export const FilterTab = Template.bind({})
FilterTab.args = {}
