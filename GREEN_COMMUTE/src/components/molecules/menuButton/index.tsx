import { Box, Divider, Grid, Typography } from '@mui/material'
import Button from '../../atoms/Button/index'
import React from 'react'
import SAVED_ICON from '../../../assets/icons/save.svg'
import DashboardIcon from '../../../assets/icons/dashboard.svg'
import PRACTISE from '../../../assets/icons/Side.svg'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
// import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined'
import {
  DASHBOARD,
  SETTINGS,
  CONTACT_US,
  NEED_HELP,
  FIND_JOBS,
  SAVED_JOBS,
  PRACTICE_TEST,
  NEWS_EVENTS,
} from '../../utils/constant'
import WorkOutlineIcon from '../../../assets/icons/jobs.png'
import NEWS_ICON from '../../../assets/icons/NewsEvents.png'
import HelpIcon from '../../../assets/icons/NeedHelp.png'
import PhoneIcon from '../../../assets/icons/contact.svg'
import SettingsIcon from '../../../assets/icons/settings.svg'
import { makeStyles, styled } from '@mui/styles'

const classes = makeStyles(() => ({
  tempbutton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  // navText: {
  //   color: EXTRA_COLORS.text.primary,
  //   marginLeft: '21px',
  //   '&:hover': {
  //     color: theme.palette.primary[500],
  //     weight: '600',
  //     height: '22px',
  //   },
  // },
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: EXTRA_COLORS.neutralShade['700'],
    boxShadow: '0px2px8pxrgba(125,125,125,0.12)',
    border: 'none',
  },
  item: {
    width: '100%',
    height: '100%',
    marginTop: 40,

    // '& .navText': {
    //   color: EXTRA_COLORS.text.primary,
    //   marginLeft: '21px',
    // },
    // '&:hover': {
    //   boxShadow: 'none',
    //   backgroundColor: EXTRA_COLORS.shade[400],
    //   borderRight: `4px solid ${theme.palette.primary[500]}`,
    //   borderRadius: '4px',
    //   '& .navText': {
    //     color: theme.palette.primary[500],
    //     weight: '600',
    //     height: '22px',
    //   },
    // },
  },
  icon: {
    borderRadius: '50%',
    backgroundColor: theme.palette.grey[100],
    width: '40px',
    height: '40px',
    color: theme.palette.text.disabled,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    '&:hover': { color: theme.palette.primary[500] },
  },
  sideNavBarHeadings: {
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '48px',
    width: '100%',
    height: '48px',
    marginBottom: '16px',
    '& .MuiButton-root': {
      marginLeft: '64px',
    },
    '& .MuiDivider-vertical': {
      width: '4px',
      height: '100%',
      backgroundColor: theme.palette.primary[500],
      marginLeft: '85px',
    },
  },
  divider: {
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.grey[200]}`,
  },
  hoverDivider: {
    borderRadius: '4px 0px 0px 4px',
    backgroundColor: theme.palette.primary[500],
  },
}))

const HoverBox = styled(Box)(() => ({
  // '&:hover': {
  //   boxShadow: 'none',
  //   backgroundColor: EXTRA_COLORS.shade[400],
  //   borderRight: `4px solid ${theme.palette.primary[500]}`,
  //   borderRadius: '4px',
  // },

  '& .navText': {
    color: EXTRA_COLORS.text.primary,
    marginLeft: '21px',
  },
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: EXTRA_COLORS.shade[400],
    borderRight: `4px solid ${theme.palette.primary[500]}`,
    borderRadius: '4px',
    '& .navText': {
      color: theme.palette.primary[500],
      weight: '600',
      height: '22px',
    },
    '& .hoveredIcon': {
      color: 'red',
    },
  },
}))
const SideNav: React.FC = () => {
  const styles = classes()
  return (
    <>
      <Grid container className={styles.root}>
        <Grid item className={styles.item}>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="dashboard"
          >
            <Button
              className={styles.tempbutton}
              disableRipple
              startIcon={
                // <DashboardCustomizeOutlinedIcon
                //   className="hoveredIcon"
                //   style={{ color: `${theme.palette.text.secondary}` }}
                // />
                <img src={DashboardIcon} alt="Dashboard icon" />
              }
            >
              <Typography className="navText" variant="body2">
                {DASHBOARD}
              </Typography>
            </Button>
          </HoverBox>

          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="findJobs"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={
                <img src={WorkOutlineIcon} alt="" aria-label="Delete" />
              }
            >
              <Typography variant="body2" className="navText">
                {FIND_JOBS}
              </Typography>
            </Button>
            {/* </Link> */}
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="savedJobs"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={<img src={SAVED_ICON} alt="" />}
            >
              <Typography variant="body2" className="navText">
                {SAVED_JOBS}
              </Typography>
            </Button>
            {/* </Link> */}
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="savedJobs"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={<img src={PRACTISE} alt="" />}
            >
              <Typography variant="body2" className="navText">
                &nbsp;{PRACTICE_TEST}
              </Typography>
            </Button>
            {/* </Link> */}
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="newsEvents"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={<img src={NEWS_ICON} alt="" />}
            >
              <Typography variant="body2" className="navText">
                {NEWS_EVENTS}
              </Typography>
            </Button>
          </HoverBox>
          <Box
            sx={{
              height: '4px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Divider data-testid="divider" className={styles.divider} />
          </Box>

          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="needHelp"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={<img src={HelpIcon} alt="" />}
              sx={{ marginTop: '5px' }}
            >
              <Typography variant="body2" className="navText">
                {NEED_HELP}
              </Typography>
            </Button>
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="contactUs"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={<img src={PhoneIcon} alt="" />}
            >
              <Typography variant="body2" className="navText">
                {CONTACT_US}
              </Typography>
            </Button>
          </HoverBox>
          <HoverBox
            className={styles.sideNavBarHeadings}
            data-testid="settings"
          >
            <Button
              disableRipple
              className={styles.tempbutton}
              startIcon={<img src={SettingsIcon} alt="" />}
            >
              <Typography variant="body2" className="navText">
                {SETTINGS}
              </Typography>
            </Button>
          </HoverBox>
        </Grid>
      </Grid>
    </>
  )
}

export default SideNav
