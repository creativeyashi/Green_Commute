import { Card, Typography, Grid } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Metro from '../../../assets/icons/metro.svg'
import Bike from '../../../assets/icons/bike.svg'
import Car from '../../../assets/icons/cab.svg'
import Bus from '../../..//assets/icons/bus.svg'
import { JobContext } from '../../utils/context'
export type CardProps = {
  id: number
  companyName: string
  location: string
  time: string
  companyIcon: string
  title: string
  onClick: () => void
}

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    borderRadius: '12px',
    height: '280px',
    width: '400px',
    padding: '17.5px 17.5px 17.5px 30px',
    cursor: 'pointer',
    backgroundColor: `${EXTRA_COLORS.shade['700']} !important`,
  },
  iconBox: {
    width: '20%',
    height: '100%',
  },
  icon: {
    position: 'static',
    width: '45px',
    height: '45px',
    marginLeft: '8px',
    marginTop: '8px',
  },
  contentBox: {
    width: '60%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  threeDotAndTimeBox: {
    height: '100%',
  },
  innerBox: {
    marginTop: '41px',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
  },
  companyName: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    color: EXTRA_COLORS.accent[200],
  },
  location: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    color: theme.palette.text.secondary,
  },
  time: {
    marginLeft: '100px',
  },
  vehicleTab: {
    marginTop: '12px',
  },
  route: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '500',
    color: theme.palette.text.secondary,
  },
  routeGrid: {
    marginTop: '20px',
  },
})

const FindJobsCard: React.FC<CardProps> = (props) => {
  const { id, companyName, location, time, title, companyIcon, onClick } = props
  const cardContext = useContext(JobContext)
  const styles = useStyles()
  const routes = [Bike, Bus, Car, Metro]
  return (
    <>
      <Card
        className={styles.root}
        onClick={() => {
          cardContext.setCardId(id)
          onClick()
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Grid container spacing={2}>
              <Grid item className={styles.iconBox} xs={10}>
                <img className={styles.icon} src={companyIcon} alt={'logo'} />
              </Grid>
              <Grid item xs={1}>
                <MoreHorizIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={styles.innerBox}>
            <Grid container direction="column" rowGap="4px">
              <Grid item>
                <Typography
                  data-testid="title"
                  variant="subtitle1"
                  className={styles.title}
                >
                  {title}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  data-testid="company"
                  variant="caption2"
                  className={styles.companyName}
                >
                  {companyName}
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  data-testid="address"
                  variant="caption2"
                  className={styles.location}
                >
                  {location}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={styles.routeGrid}>
            <Typography variant="caption2" className={styles.route}>
              Commute routes available :
            </Typography>
          </Grid>

          <Grid item className={styles.vehicleTab}>
            <Grid container columnGap="20px" spacing={2}>
              {routes.map((route, id) => {
                return (
                  <Grid item xs={1} key={id}>
                    <img src={route} alt="rote-icon" />
                  </Grid>
                )
              })}
              <Grid item className={styles.time}>
                <Typography
                  variant="caption2"
                  color={`${theme.palette.text.secondary}`}
                >
                  {time}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default FindJobsCard
