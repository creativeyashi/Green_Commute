import { Card, Typography, Box, Grid } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import React, { MouseEventHandler } from 'react'
import Bus from '../../../assets/icons/BusNew.svg'
import Bike from '../../../assets/icons/bike.svg'
import Car from '../../../assets/icons/CabNew.svg'
import Train from '../../../assets/icons/trainIcon.svg'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  default: {
    width: '100%',
  },
  root: {
    height: '174px',
    width: '174px',
    marginTop: '32px',
  },
  typography: {
    backgroundColor: `${EXTRA_COLORS.shade['700']} !important`,
    color: `theme.palette.text.secondary`,
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    width: '650px',
    height: '150px',
    minWidth: '571px',
    textOverflow: 'ellipsis',
  },
  timecolor: {
    color: `theme.palette.text.secondary`,
  },
  grid: {
    height: '18px',
    width: '15px',
  },
  box: {
    width: '100%',
    height: '100%',
    textOverflow: 'ellipsis',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: '21px',
  },
  img: {
    position: 'static',
    width: '45px',
    height: '45px',
    marginTop: '30px',
    marginLeft: '30px',
  },
  body: {
    fontSize: '20px',
    lineHeight: '30px',
    marginTop: '16px',
  },
  icon: {
    height: '80%',
    marginTop: '27px',
    alignSelf: 'end',
    marginRight: '19px',
  },
  cardalign: {
    marginTop: '60px',
    alignSelf: 'end',
    marginRight: '19px',
  },
  container: {
    paddingTop: '2%',
    justifyContent: 'center',
    height: '75%',
  },
  subtitle: {
    fontSize: '12px',
    lineHeight: '16px',
    color: EXTRA_COLORS.accent[200],
  },
  subtitle2: {
    fontSize: '12px',
    lineHeight: '16px',
    color: theme.palette.text.secondary,
  },
  alignment: {
    width: '20%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
})

export type CardProps = {
  id: number
  companyName: string
  location: string
  time: string
  companyIcon: string
  title: string
  onClick: MouseEventHandler<HTMLDivElement>
}

const JobCard: React.FC<CardProps> = (props) => {
  const { companyName, location, time, companyIcon, title, onClick } = props
  const classes = useStyles()
  return (
    <>
      <Card className={classes.typography} onClick={onClick}>
        <Box className={classes.alignment}>
          <img className={classes.img} src={companyIcon} alt={''} />
        </Box>

        <Box className={classes.box}>
          <Box className={classes.container}>
            <Typography
              data-testid="title"
              variant="body2"
              className={classes.body}
            >
              {title}
            </Typography>
            <Typography variant="subtitle2" className={classes.subtitle}>
              {' '}
              {companyName}
            </Typography>
            <Typography variant="subtitle2" className={classes.subtitle2}>
              {location}
            </Typography>
          </Box>

          <Grid sx={{ marginBottom: '19' }} container columnGap={4}>
            <Grid item className={classes.grid}>
              <img src={Bike} alt="" />
            </Grid>
            <Grid item className={classes.grid}>
              <img src={Bus} alt="" />
            </Grid>
            <Grid item className={classes.grid}>
              <img src={Car} alt="" />
            </Grid>
            <Grid item className={classes.grid}>
              <img src={Train} alt="" />
            </Grid>
          </Grid>
        </Box>

        <Grid container direction="column" className={classes.default}>
          <Grid item className={classes.icon}>
            <MoreHorizIcon />
          </Grid>
          <Grid item className={classes.cardalign}>
            <Typography variant="caption" className={classes.timecolor}>
              {time}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default JobCard
