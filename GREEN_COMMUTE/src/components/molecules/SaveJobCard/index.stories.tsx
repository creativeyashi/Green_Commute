import React from 'react'
import myntra from '../../../assets/icons/myntra.svg'
import { ThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import SaveJobCard from './index'
import theme from '../../../theme/theme'

export default {
  title: 'Molecules/SaveJobCard',
  component: SaveJobCard,
} as ComponentMeta<typeof SaveJobCard>

const Template: ComponentStory<typeof SaveJobCard> = (args) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <SaveJobCard {...args} />
    </ThemeProvider>
  </StyledEngineProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  id: 1,
  logo: myntra,
  companyName: 'Myntra',
  location: 'Hitech city, Hyderabad - 507003',
  timeElapsed: '36 min',
  title: 'User Experience Designer',
}
