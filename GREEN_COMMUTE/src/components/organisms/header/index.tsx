import { Grid, GridProps, Box, TextField } from '@mui/material'
import Icon from '../../atoms/Icon'
import logo from '../../../assets/icons/logo.svg'
import message from '../../../assets/icons/message.svg'
import notifications from '../../../assets/icons/notifications.svg'
import location from '../../../assets/icons/location 2.svg'
import AvatarComp from '../../atoms/avatar'
import React from 'react'
import theme from '../../../theme/theme'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  default: {
    minHeight: 0,
    padding: 0,
  },
  root: {
    position: 'absolute',

    top: 20,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  typography: {
    marginLeft: '40px',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Neucha',
    color: `#ffff`,
    fontSize: '24px',
    lineHeight: '32px',
    marginLeft: '4px',
  },
  Avatar: {
    display: 'flex',
    marginRight: '40px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '12%',
  },
  body: {
    color: '#373C38',
    height: '16px',
    fontWeight: 500,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    marginRight: '152px',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
    marginRight: '18.25px',
  },
})

export interface HeaderPropsType extends GridProps {
  text?: string
}

const Header: React.FC<HeaderPropsType> = (props) => {
  const { text } = props
  const classes = useStyles()
  return (
    <Grid container data-testid="topnavbar" className={classes.root}>
      <Box className={classes.typography}>
        <Box className={classes.container}>
          <Icon source={logo} />
          <Box className={classes.logo} />
        </Box>
        <TextField
          value={text}
          variant="standard"
          inputProps={{
            'data-testid': 'location',
          }}
          InputProps={{
            startAdornment: (
              <Box className={classes.location}>
                <Icon source={location} />
              </Box>
            ),
            disableUnderline: true,
            sx: {
              fontFamily: 'Montserrat',
              color: `#FFFFFF`,
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '22px',
              width: '348px',
              borderBottom: '1px solid #ffffff',
            },
          }}
        ></TextField>
      </Box>
      <Box className={classes.Avatar}>
        <Icon source={message} />
        <Icon source={notifications} />
        <AvatarComp />
      </Box>
    </Grid>
  )
}

export default Header
