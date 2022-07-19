import { ThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'
import React from 'react'
import theme from '../../../theme/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FileUploadSuccess from './index'
export default {
  title: 'Molecules/FileUploadSuccess',
  component: FileUploadSuccess,
} as ComponentMeta<typeof FileUploadSuccess>

const Template: ComponentStory<typeof FileUploadSuccess> = (args) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <FileUploadSuccess {...args} />
    </ThemeProvider>
  </StyledEngineProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'Sohail',
}
