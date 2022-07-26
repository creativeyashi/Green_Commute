import { ThemeProvider, Typography } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'

import React from 'react'
import theme from './theme/theme'
export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Typography variant="h1" color="primary.main">
          Hello,This is BC47 GREEN_COMMUTE
        </Typography>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
