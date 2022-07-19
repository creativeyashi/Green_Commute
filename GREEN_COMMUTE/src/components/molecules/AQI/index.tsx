import { Typography } from '@mui/material'
import React from 'react'
import Vector from '../../../assets/image/Vectorshape.png'
import { makeStyles } from '@mui/styles'
import theme from '../../../theme/theme'

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Vector})`,
    height: '174px',
    width: '174px',
    marginTop: '32px',
  },
  typography: {
    top: '64px',
    bottom: '64px',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '48px',
    fontStyle: 'normal',
    textAlign: 'center',
    position: 'relative',
  },
})
interface Prop {
  AQIIndex: number
}

const AQI: React.FC<Prop> = (props: Prop) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography
        className={classes.typography}
        color={`${theme.palette.primary.main}`}
      >
        {props.AQIIndex}
      </Typography>
    </div>
  )
}

export default AQI
