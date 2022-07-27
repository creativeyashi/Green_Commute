import React, { ReactElement } from 'react'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import { makeStyles } from '@mui/styles'
import Button from '../../atoms/Button/index'
import { Box, Icon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
export type Props = {
  icon: ReactElement
  label: string
  path: string
}
const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: EXTRA_COLORS.shade['700'],
    boxShadow: '0px2px8pxrgba(125,125,125,0.12)',
    border: 'none',
    width: '100%',
  },
  item: {
    width: '100%',
    height: '100%',
    marginTop: 40,
  },
  icon: {
    borderRadius: '50%',
    backgroundColor: theme.palette.grey[100],
    width: '35px',
    height: '37px',
    color: theme.palette.text.disabled,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkActive: {
    boxShadow: 'none',
    backgroundColor: EXTRA_COLORS.shade[400],
    borderRight: `4px solid ${theme.palette.primary[500]}`,
    borderRadius: '4px',
    '& .hoveredIcon': {
      color: theme.palette.primary[500],
    },
  },
  sideNavBarHeadings: {
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '48px',
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
        fontWeight: 600,
        height: '22px',
      },
      '& .hoveredIcon': {
        color: theme.palette.primary[500],
      },
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
  typoActive: {
    color: theme.palette.primary[500],
    fontWeight: 600,
    height: '22px',
    marginLeft: '21px',
  },
})

const MenuButton: React.FC<Props> = (props) => {
  const { icon, label, path } = props
  const classes = useStyles()
  return (
    <>
      <Link to={path} style={{ textDecoration: 'none' }}>
        <Box
          className={`${classes.sideNavBarHeadings}   ${
            window.location.pathname === path ? classes.linkActive : ''
          }`}
        >
          <Button>
            <Icon className={classes.icon}>{icon}</Icon>
            <Typography
              className={` ${
                window.location.pathname === path
                  ? classes.typoActive
                  : 'navText '
              }`}
              variant="body2"
            >
              {label}
            </Typography>
          </Button>
        </Box>
      </Link>
    </>
  )
}

export default MenuButton
