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
    <FilterPopUp
      onApply={function (): void {
        throw new Error('Function not implemented.')
      }}
      onClear={function (): void {
        throw new Error('Function not implemented.')
      }}
    />
  </ThemeProvider>
)

export const FilterTab = Template.bind({})
FilterTab.args = {}
