import React, { ReactElement } from 'react'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import { makeStyles } from '@mui/styles'
import Button from '../../atoms/Button/index'
import { Box, Typography } from '@mui/material'
export type Props = {
  icon: ReactElement
  label: string
}
const useStyles = makeStyles({
  tempbutton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: EXTRA_COLORS.shade['700'],
    boxShadow: '0px2px8pxrgba(125,125,125,0.12)',
    border: 'none',
  },
  item: {
    width: '100%',
    height: '100%',
    marginTop: 40,
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
    // width: '100%',
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
    '& .hoveredIcon': {
      color: theme.palette.text.secondary,
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
})

const MenuButton: React.FC<Props> = (props) => {
  const { icon, label } = props

  const classes = useStyles()
  return (
    <>
      <Box className={classes.sideNavBarHeadings} data-testid="dashboard">
        <Button className={classes.tempbutton} startIcon={icon}>
          <Typography className="navText" variant="body2">
            {label}
          </Typography>
        </Button>
      </Box>
    </>
  )
}

export default MenuButton
