import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Typography from '@mui/material/Typography'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import CommonRotes from '../../molecules/LocationsCard'
import Routes from '../../molecules/Routes/index'
import { COMMON_ROUTES } from '../../utils/constant'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Button from '../../atoms/Button'

const useStyles = makeStyles({
  root: {
    marginTop: '27px',
    width: '359px',
    paddingLeft: '22px',
  },
  title: {
    marginLeft: '14.75px',
    width: '122px',
    color: theme.palette.text.primary,
  },
  topBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: `${EXTRA_COLORS.text.primary}`,
    height: '16px',
    fontWeight: 500,
  },
  arrow: {
    color: EXTRA_COLORS.text.primary,
  },
})
interface Props {
  source: string
  destination: string
}
const ViewGreenCommutes: React.FC<Props> = (props) => {
  const { source, destination } = props
  const classes = useStyles()
  return (
    <>
      <Box className={classes.root}>
        <Button startIcon={<ArrowBackIcon className={classes.arrow} />}>
          <Typography variant="body1" className={classes.text}>
            {COMMON_ROUTES}
          </Typography>
        </Button>
        <CommonRotes location1={source} location2={destination} />
        <Routes />
      </Box>
    </>
  )
}

export default ViewGreenCommutes
