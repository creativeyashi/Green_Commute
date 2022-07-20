import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import theme from '../../../theme/theme'

interface TemplateProps {
  Header: React.ReactNode
  SideMenu: React.ReactNode
  MainContent: React.ReactNode
}

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    top: 0,
  },
  header: {
    width: '100vw',
    height: '80px',
    background: `${theme.palette.primary.main}`,
  },
  sideMenu: {
    marginLeft: '0px',
    height: '100vh',
    background: `${theme.palette.structural.main}`,
  },
  mainContent: {
    background: `${theme.palette.grey[100]}`,
    height: '100vh',
  },
})

const HomeScreenTemplate = ({
  Header,
  SideMenu,
  MainContent,
}: TemplateProps) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      // eslint-disable-next-line jsx-a11y/aria-role
      role="home-template"
      className={classes.root}
    >
      <Grid item className={classes.header}>
        {Header}
      </Grid>
      <Grid item container direction="row">
        <Grid item xs={2} className={classes.sideMenu}>
          {SideMenu}
        </Grid>
        <Grid item xs={10} className={classes.mainContent}>
          {MainContent}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeScreenTemplate
