import React from 'react'
import HomeScreenTemplate from '../../components/templates/homeScreen/Index'
import Header from '../../components/organisms/header'
import SideNav from '../../components/organisms/SideNavBar'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { Grid, Typography } from '@mui/material'
import theme from '../../theme/theme'
import SaveJobCard from '../../components/molecules/SaveJobCard'
import Myntra from '../../assets/icons/myntra.svg'

const useStyles = makeStyles({
  root: {
    paddingLeft: 45,
    paddingTop: 40,
  },
  section: {
    color: theme.palette.text.primary,
    width: '113px',
    height: '30px',
  },
  innerBox: {
    paddingTop: '20px',
  },
})
const SavedJobsPage: React.FC = () => {
  const classes = useStyles()
  return (
    <HomeScreenTemplate
      Header={<Header text="Hitech city, Hyderabad, India" />}
      SideMenu={<SideNav />}
      MainContent={
        <>
          <Box className={classes.root}>
            <Typography className={classes.section} variant="h3">
              Saved Jobs
            </Typography>
            <Box className={classes.innerBox}>
              <Grid container spacing={6} direction="column">
                <Grid item>
                  <SaveJobCard
                    companyName="Myntra"
                    location="Hitech city, Hyderabad - 507003"
                    logo={Myntra}
                    timeElapsed="36 mins"
                    title="User Experience Designer"
                    id={1}
                  />
                </Grid>
                <Grid item>
                  <SaveJobCard
                    companyName="Myntra"
                    location="Hitech city, Hyderabad - 507003"
                    logo={Myntra}
                    timeElapsed="36 mins"
                    title="User Experience Designer"
                    id={1}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </>
      }
    />
  )
}

export default SavedJobsPage
