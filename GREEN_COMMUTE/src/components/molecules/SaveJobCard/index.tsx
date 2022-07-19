import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import * as React from 'react'
import Metro from '../../../assets/icons/trainIcon.svg'
import Car from '../../../assets/icons/CabNew.svg'
import Bus from '../../../assets/icons/BusNew.svg'
import More from '../../../assets/icons/more.svg'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import { makeStyles } from '@mui/styles'

export type Props = {
  id: number
  logo: string
  title: string
  companyName: string
  location: string
  timeElapsed: string
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '571px',
    height: '135px',
    ':hover': {
      border: '2px solid #77EDDF',
    },
    padding: '16px 19px',
  },
  img: {
    marginTop: '21px',
  },
  innerGrid: {
    marginTop: '16px',
  },
  moreIcon: {
    float: 'right',
  },
  time: {
    marginTop: '80px',
  },
})

const SaveJobCard: React.FC<Props> = (props) => {
  const { logo, title, companyName, location, timeElapsed } = props
  const routes = [Bus, Car, Metro]
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <img src={logo} alt="company-logo" className={classes.img} />
        </Grid>
        <Grid item xs={8} className={classes.innerGrid}>
          <Grid container direction="column" spacing={6}>
            <Grid item>
              <Grid item>
                <Typography variant="h3" color={`${EXTRA_COLORS.text.primary}`}>
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption2"
                  color={`${EXTRA_COLORS.accent[200]}`}
                >
                  {companyName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption2"
                  color={`${theme.palette.text.secondary}`}
                >
                  {location}
                </Typography>
              </Grid>
            </Grid>

            <Grid item container direction="row" spacing={6}>
              {routes.map((route, id) => {
                return (
                  <Grid item xs={1} key={id}>
                    <img src={route} alt="rote-icon" />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={2}>
          <Grid item sx={{ marginTop: '10px' }}>
            <img src={More} alt="more-icon" className={classes.moreIcon} />
          </Grid>
          <Grid item className={classes.time}>
            <Typography
              sx={{ float: 'right' }}
              variant="caption"
              color={`${theme.palette.text.secondary}`}
            >
              {timeElapsed} ago
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}

export default SaveJobCard
