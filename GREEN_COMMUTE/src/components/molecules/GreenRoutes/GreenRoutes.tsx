import { Card, Box, Typography, Stack } from '@mui/material'
import theme from '../../../theme/theme'
import Button from '../../atoms/Button/index'
import Icon from '../../atoms/Icon/index'
import arrowright from '../../../assets/logos/arrow-right.svg'
import { GREEN_ROUTES } from '../../utils/constant'
export interface GreenRoutesProps {
  jobDescription: string
  aboutTheCompany: string
  onClickHandler: any
}
const GreenRoutes = ({ onClickHandler }: GreenRoutesProps) => {
  const descContent = {
    height: '198px',
    width: '354px',
    left: '26px',
    paddingTop: '3px',
    fontSize: '14px',
    lineHeight: '16px',
    color: theme.palette.text.secondary,
  }
  const descHeading = {
    height: '22px',
    width: '129px',
    left: '27px',
    top: '24px',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '20px',
  }
  const subtitleBoxStyles = {
    width: '100%',
    paddingTop: '24px',
    paddingLeft: '26px',
  }

  return (
    <Card
      sx={{ height: '546px', width: '404px', margin: '0' }}
      data-testid="greenRoutes"
    >
      {
        <Stack direction={'column'} sx={{ height: '100%', width: '100%' }}>
          <Box sx={subtitleBoxStyles}>
            <Typography variant="body1" sx={descHeading}>
              {GREEN_ROUTES.DESCRIPTION}
            </Typography>
            <Typography variant="body2" sx={descContent}>
              {GREEN_ROUTES.JOB_DESCRIPTION}
            </Typography>
          </Box>
          <Box sx={subtitleBoxStyles}>
            <Typography variant="body1">
              {GREEN_ROUTES.ABOUT_COMPANY}
            </Typography>
            <Typography variant="body2" sx={descContent}>
              {GREEN_ROUTES.ABOUT_THE_COMPANY}...{' '}
              <span style={{ color: '#4ABAAD' }}>{GREEN_ROUTES.SEE_MORE}</span>
            </Typography>{' '}
          </Box>
          <Button
            variant="contained"
            onClick={onClickHandler}
            style={{
              backgroundColor: `${theme.palette.structural.main}`,
              color: `${theme.palette.primary.primary400}`,
              display: 'flex',
              padding: 0,
              margin: 0,
              width: '409px',
              height: '64px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'none',
              }}
            >
              <Typography variant="subtitle1" sx={{ marginRight: '10px' }}>
                {GREEN_ROUTES.GREEN_COMMUTE_ROUTES}
              </Typography>
              <Box sx={{ marginTop: '8px' }}>
                <Icon source={arrowright}></Icon>
              </Box>
            </Box>
          </Button>
        </Stack>
      }
    </Card>
  )
}

export default GreenRoutes
