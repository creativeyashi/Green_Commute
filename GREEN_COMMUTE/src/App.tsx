import { ThemeProvider, Typography } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'

import React from 'react'
import theme from './theme/theme'
import SideNav from './components/organisms/SideNavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SavedJobsPage from './pages/SavedJobsPage'
import LandingPage from './components/pages/LandingPage'
import FindJobsPage from './pages/FindJobsPage/Index'

export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Typography variant="h1" color="primary.main">
       
        </Typography>

        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/savedjobcard" element={<SavedJobsPage />} />
            <Route path="/findJobs" element={<FindJobsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
