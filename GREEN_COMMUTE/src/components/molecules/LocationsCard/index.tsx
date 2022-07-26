import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { Paper, Grid, Box, Stack, Icon } from '@mui/material'
import ToLocationIcon from '../../../assets/icons/ToLocationIcon.png'
import FromLocationInsideIcon from '../../../assets/icons/FromLocationInsideIcon.png'
import Swap from '../../../assets/icons/swap.svg'

import theme, { EXTRA_COLORS } from '../../../theme/theme'
import Button from '../../atoms/Button'

export type CommonRoutesProps = {
  location1: string
  location2: string
}

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    marginY: '18px',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '359px',
    justifyContent: 'flex-start',
    backgroundColor: EXTRA_COLORS.neutralShade['700'],
  },
  dot: {
    backgroundColor: `${EXTRA_COLORS.grey[400]}`,
    borderRadius: '50%',
    width: '4px',
    marginTop: '2px',
    height: '4px',
  },
  text: {
    color: `${EXTRA_COLORS.text.primary}`,
    height: '16px',
    fontWeight: 500,
  },
  locationButton: {
    minHeight: 0,
    padding: 0,
    '&:hover': {
      backgroundColor: 'white',
      cursor: 'default',
    },
  },
  icon: {
    transform: 'rotate(90deg)',
  },
  parentGrid: {
    paddingY: '18px',
    paddingLeft: '12px',
  },
  locationBox: {
    borderRadius: '16px',
    width: '16px',
    height: '16px',
    backgroundColor: theme.palette.grey[400],
    marginRight: '8px',
  },
  locationIcon: {
    marginBottom: '4.5px',
    width: '8px',
    height: '8px',
  },
  dotDot: {
    marginLeft: '10px',
    marginTop: '6px',
    marginBottom: '4.75px',
  },
  destinationIcon: {
    marginTop: '8px',
    marginBottom: '0',
    width: '13.5px',
    height: '16.5px',
  },
  swapIcon: {
    paddingLeft: '70.61px',
    marginTop: '24px',
  },
})

const CommonRotes: React.FC<CommonRoutesProps> = (props) => {
  const { location1, location2 } = props
  const classes = useStyles()
  return (
    <>
      <Box>
        <Paper className={classes.paper}>
          <Grid container className={classes.parentGrid}>
            <Stack direction={'row'}>
              <Grid item xs={11}>
                <Grid container direction="column">
                  <Grid item>
                    <Stack direction={'row'} marginLeft={'4px'}>
                      <Button className={classes.locationButton}>
                        <Box className={classes.locationBox}>
                          <img
                            src={FromLocationInsideIcon}
                            alt={FromLocationInsideIcon}
                            className={classes.locationIcon}
                          />
                        </Box>
                        <Box>
                          <Typography
                            className={classes.text}
                            variant="caption"
                          >
                            {location1}
                          </Typography>
                        </Box>
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Box className={classes.dotDot}>
                      <Box className={classes.dot}></Box>
                      <Box className={classes.dot}></Box>
                      <Box className={classes.dot}></Box>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Stack direction={'row'} marginLeft="5.5px">
                      <Button className={classes.locationButton}>
                        <Box marginRight={'8px'}>
                          <img
                            className={classes.destinationIcon}
                            src={ToLocationIcon}
                            alt={ToLocationIcon}
                          />
                        </Box>
                        <Box>
                          <Typography
                            className={classes.text}
                            variant="caption"
                          >
                            {location2}
                          </Typography>
                        </Box>
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1} className={classes.swapIcon}>
                <Icon>
                  <img src={Swap} alt="swap"></img>
                </Icon>
              </Grid>
            </Stack>
          </Grid>
        </Paper>
      </Box>
    </>
  )
}

export default CommonRotes
