import React from 'react'
import { ThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'

import theme from '../../../theme/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FileUpload from './index'

export default {
  title: 'Molecules/FileUpload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <FileUpload {...args} />
    </ThemeProvider>
  </StyledEngineProvider>
)

export const PopUp = Template.bind({})
