import { Box, Divider, InputBase, Autocomplete } from '@mui/material'
import React, { useState } from 'react'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import SearchSkillIcon from '../../../assets/icons/searchSkill.png'
import SearchIcon from '@mui/icons-material/Search'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { makeStyles } from '@mui/styles'
export type SearchProps = {
  options1: string[] | null
  options2: string[] | null
  onChange: (location: string | null, skill: string | null) => void
}

const styles = makeStyles(() => ({
  outerBox: {
    marginTop: '8px',
    borderTopLeftRadius: '100px',
    borderTopRightRadius: '100px',
    borderBottomLeftRadius: '100px',
    borderBottomRightRadius: '100px',
    border: `1px solid ${theme.palette.grey['100']}`,
    display: 'flex',
    flexDirection: 'row',
    width: '843px',
    height: '56px',
    justifyContent: 'center',
    alignItems: 'center',
    background: EXTRA_COLORS.shade[700],
    boxSizing: 'border-box',
  },
  searchBox: {
    width: '50%',
    height: '50%',
    display: 'flex',
  },
  searchIcon: {
    backgroundColor: EXTRA_COLORS.primary['400'],
    color: EXTRA_COLORS.shade['700'],
    width: '44px !important',
    height: '44px !important',
    borderRadius: '50%',
    padding: '4px',
    border: `1px solid ${EXTRA_COLORS.shade['700']}`,
  },
  paper: {
    marginLeft: '50px',
    marginTop: '0px',
  },
  inputBase: {
    width: '100%',
    padding: '6px',
  },
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
}))

const SearchBar: React.FC<SearchProps> = (props) => {
  const classes = styles()
  const [location, setLocation] = useState<string | null>('')
  const [skill, setSkill] = useState<string | null>('')

  return (
    <>
      <Box className={classes.outerBox}>
        <Autocomplete
          data-testid="autocomplete2"
          id="location"
          disablePortal
          options={props.options1}
          filterSelectedOptions
          classes={{ paper: classes.paper, root: classes.searchBox }}
          value={skill}
          onChange={(event, newValue: string | null) => {
            setSkill(newValue)
          }}
          renderInput={(params: any) => (
            <InputBase
              placeholder={'skills'}
              className={classes.inputBase}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              startAdornment={
                <Box sx={{ padding: '20px' }}>
                  <img src={SearchSkillIcon} alt="" />
                </Box>
              }
              endAdornment={<Divider orientation="vertical" />}
            />
          )}
        />
        <Autocomplete
          data-testid="autocomplete2"
          id="location"
          disablePortal
          options={props.options2}
          filterSelectedOptions
          value={location}
          onChange={(event, newValue: string | null) => {
            setLocation(newValue)
          }}
          classes={{ paper: classes.paper, root: classes.searchBox }}
          renderInput={(params: any) => (
            <InputBase
              placeholder={'Location'}
              className={classes.inputBase}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              startAdornment={
                <Box sx={{ padding: '8px' }}>
                  <LocationOnOutlinedIcon />
                </Box>
              }
              endAdornment={
                <SearchIcon
                  className={classes.searchIcon}
                  onClick={() => {
                    props.onChange(location, skill)
                  }}
                  style={{ cursor: 'pointer' }}
                />
              }
            />
          )}
        />
      </Box>
    </>
  )
}
export default SearchBar
