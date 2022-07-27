/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-undef */

import { Box, Grid, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import logo from '../../../assets/icons/logo2.svg'
import Icon from '../../atoms/Icon'
import StepperComponent from '../../molecules/stepper'
import SingleAutoComplete from '../../molecules/SingleInputAutoField'
import Button from '../../atoms/Button'
import theme from '../../../theme/theme'
import stayIcon from '../../../assets/image/Stay.png'
import AirQualityIndex from '../../molecules/AQI'
import { makeStyles } from '@mui/styles'

const steps = [
  <Typography variant="subtitle1">Your Location</Typography>,
  <Typography variant="subtitle2">Job Location</Typography>,
  <Typography variant="subtitle2">Your Skills</Typography>,
]
const currentLocation = ['E Marredpally, Secunderabad,Hyderabad']

const useStyles = makeStyles({
  text: {
    wordSpacing: '2px',
    letterSpacing: '.4px',
    color: '#373C38',
    font: 'Montserrat',
    width: '900px',
  },
  icon: {
    marginTop: '10px',
  },
  title: {
    marginTop: '80px',
    marginRight: '20px',
  },
  activebutton: {
    borderRadius: '8px',
    border: '1px solid #30A193',
    width: '140px',
    height: '46px',
    marginRight: '12px',
  },
  unablebutton: {
    borderRadius: '8px',
    backgroundColor: '#30A193',
    width: '140px',
    height: '46px',
  },
  roottitle: {
    marginTop: '64px',
    width: '120%',
  },
  svg: {
    background: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)',
    height: '720px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttoncontainer: {
    marginTop: '36px',
    display: 'flex',
    flexDirection: 'row',
  },
  aqititle: {
    marginTop: '30px',
  },
  root: {
    padding: '60px 270px 25px 150px',
  },
  skipbutton: {
    marginTop: '80px',
  },
  userlocation: {
    marginTop: '40px',
  },
})

const LandingPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [userLocation, setUserLocation] = React.useState<string | null>()

  let aqi: JSX.Element | ReactElement<any, any> | JSX.Element[] | null = null,
    autocomplete: JSX.Element | null = null

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const classes = useStyles()
  if (activeStep === 0) {
    autocomplete = (
      <>
        <SingleAutoComplete
          onChange={setUserLocation}
          options={currentLocation}
        />
      </>
    )

    if (!userLocation) {
      aqi = (
        <>
          <Typography className={classes.icon}>
            <Icon source={stayIcon} />
          </Typography>

          <Typography className={classes.aqititle} variant="h2">
            &nbsp;&nbsp;&nbsp;Enter Location to know <br />
            Time Air Quality Index (AQI)
          </Typography>
        </>
      )
    } else {
      if (userLocation) {
        aqi = (
          <>
            <AirQualityIndex AQIIndex={894} />
            <Typography className={classes.userlocation} variant="h2">
              Real Time Air Quality Index(AQI)
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; in this location
            </Typography>
          </>
        )
      }
    }
  }
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box className={classes.root}>
              <Icon source={logo} />
              <Box className={classes.roottitle}>
                <StepperComponent active={activeStep} steps={steps} />
              </Box>
              <Box className={classes.title}>
                <Typography variant="h1" className={classes.text}>
                  More than 2000 people are using <br /> Green Commute
                </Typography>
              </Box>
              <Box sx={{ marginTop: '64px' }}>
                {autocomplete ? autocomplete : null}
              </Box>
              <Box className={classes.buttoncontainer}>
                {activeStep !== 0 ? (
                  <Button
                    variant="outlined"
                    className={classes.activebutton}
                    data-testid="handleBackStepper"
                    onClick={handleBack}
                  >
                    <Typography variant="body1">Back</Typography>
                  </Button>
                ) : null}
                <Button
                  variant="contained"
                  className={classes.unablebutton}
                  data-testid="handleNextStepper"
                  onClick={handleNext}
                >
                  <Typography variant="body1">Next</Typography>
                </Button>
              </Box>
              <Box className={classes.skipbutton}>
                <Button sx={{ color: `${theme.palette.primary[300]}` }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      borderBottom: `2px solid ${theme.palette.primary[300]}`,
                    }}
                  >
                    Skip
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box data-testid="svgBackground" className={classes.svg}>
              {aqi}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default LandingPage
