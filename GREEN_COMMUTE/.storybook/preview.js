import React from 'react'
import { ThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'
import { addDecorator } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import theme from '../src/theme/theme'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Story />
        </MemoryRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  ),
]
