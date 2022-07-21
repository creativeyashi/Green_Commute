import { Grid } from '@mui/material'
import React from 'react'

import { EXTRA_COLORS } from '../../../theme/theme'
import DashboardIcon from '@mui/icons-material/DashboardOutlined'
import FindJobsIcon from '@mui/icons-material/WorkOutlineOutlined'
import SavedJobsIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PractiseTestIcon from '@mui/icons-material/DescriptionOutlined'
import NewsIcon from '@mui/icons-material/NewspaperOutlined'
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined'
import ContactIcon from '@mui/icons-material/LocalPhoneOutlined'
import SettingsIcon from '@mui/icons-material/Settings'

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

import { makeStyles } from '@mui/styles'
import MenuButton from '../MenuButton/index'
const classes = makeStyles(() => ({
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
  },
}))

const SideNav: React.FC = () => {
  const styles = classes()
  const buttons = [
    { icon: <DashboardIcon className="hoveredIcon" />, label: DASHBOARD },
    { icon: <FindJobsIcon className="hoveredIcon" />, label: FIND_JOBS },
    { icon: <SavedJobsIcon className="hoveredIcon" />, label: SAVED_JOBS },
    {
      icon: <PractiseTestIcon className="hoveredIcon" />,
      label: PRACTICE_TEST,
    },
    { icon: <NewsIcon className="hoveredIcon" />, label: NEWS_EVENTS },
    { icon: <HelpIcon className="hoveredIcon" />, label: NEED_HELP },
    { icon: <ContactIcon className="hoveredIcon" />, label: CONTACT_US },
    { icon: <SettingsIcon className="hoveredIcon" />, label: SETTINGS },
  ]

  return (
    <>
      <Grid container className={styles.root}>
        <Grid item className={styles.item}>
          {buttons.map((button) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <MenuButton icon={button.icon} label={button.label} />
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default SideNav
