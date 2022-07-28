import { ThemeProvider, Typography } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'

import React from 'react'
import theme from './theme/theme'
import SideNav from './components/organisms/SideNavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SavedJobsPage from './pages/SavedJobsPage'
import FindJobsPage from './pages/FindJobsPage/Index'

export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Typography variant="h1" color="primary.main">
          Hello,This is BC47 GREEN_COMMUTE
        </Typography>
        <Router>
          <Routes>
            <Route path="/" element={<SideNav />} />
            <Route path="/savedjobcard" element={<SavedJobsPage />} />
            <Route path="/findJobs" element={<FindJobsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
