import React from 'react'
import { Grid } from '@mui/material'
import { EXTRA_COLORS } from '../../../theme/theme'
import { makeStyles } from '@mui/styles'

interface TemplateProps {
  RightFrame: React.ReactNode
  LeftFrame: React.ReactNode
}

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
  },
  leftFrame: {
    background: `${EXTRA_COLORS.shade[700]}`,
  },
  rightFrame: {
    background: `${EXTRA_COLORS.shade[300]}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const LandingPageTemplate = ({ RightFrame, LeftFrame }: TemplateProps) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      // eslint-disable-next-line jsx-a11y/aria-role
      role="template"
      className={classes.root}
    >
      <Grid item xs={8} className={classes.leftFrame}>
        {LeftFrame}
      </Grid>
      <Grid item xs={4} className={classes.rightFrame}>
        {RightFrame}
      </Grid>
    </Grid>
  )
}

export default LandingPageTemplate
