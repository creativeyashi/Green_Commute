import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import theme from '../../../theme/theme'
import Icon from '../../atoms/Icon'
import Back from '../../../assets/icons/back.svg'
import CommonRotes from '../../molecules/CommonRoutes'
import VehicalTabs from '../../molecules/VehicalTabs'
const useStyles = makeStyles({
  root: {
    marginTop: '27px',
  },
  title: {
    width: '122px',
    marginLeft: '14.75px',
    color: theme.palette.text.primary,
  },
  topBox: {
    display: 'flex',
    flexDirection: 'row',
  },
})
const ViewGreenCommutes: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.topBox}>
          <Icon source={Back} />
          <Typography variant="body1" className={classes.title}>
            Common Routes
          </Typography>
        </Box>
        <CommonRotes location1="Khammam" location2="Hyderabad" />
        <VehicalTabs />
      </Box>
    </>
  )
}

export default ViewGreenCommutes
