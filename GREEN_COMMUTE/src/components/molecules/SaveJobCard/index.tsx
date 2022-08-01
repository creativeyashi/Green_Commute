import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import React from 'react'
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
  select?: boolean
  style?: React.CSSProperties | null
  onClick: (jobid: number) => void
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '950px',
    height: '135px',

    padding: '16px 19px',
  },
  img: {
    paddingTop: '5px',
    width: '45px',
    height: '45px',
  },
  innerGrid: { paddingLeft: '21px' },
  moreIcon: {
    float: 'right',
  },
  time: {
    marginTop: '80px',
  },
})

const SaveJobCard: React.FC<Props> = (props) => {
  const { logo, title, companyName, location, timeElapsed ,style} = props
  const routes = [Bus, Car, Metro]
  const classes = useStyles()
  console.log(logo)
  return (
    <Card className={classes.root} onClick={() => props.onClick(props.id)} sx = {style}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <img src={logo} alt="company-logo" className={classes.img} />
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            direction="column"
            spacing={6}
            className={classes.innerGrid}
          >
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
