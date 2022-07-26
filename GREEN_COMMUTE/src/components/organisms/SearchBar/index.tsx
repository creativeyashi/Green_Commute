import { Box, Divider, InputBase, Autocomplete } from '@mui/material'
import React from 'react'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import SearchSkillIcon from '../../../assets/icons/searchSkill.png'
import SearchIcon from '@mui/icons-material/Search'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import { makeStyles } from '@mui/styles'
// import { Chip } from '../../atoms/Chips/index.stories'
export type SearchProps = {
  placeholder1: string
  placeholder2: string
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
  const { placeholder1, placeholder2 } = props
  return (
    <>
      <Box className={classes.outerBox}>
        <Autocomplete
          multiple
          classes={{ paper: classes.paper, root: classes.searchBox }}
          id="size-small-filled-multi"
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option}
          // renderTags={(value, getTagProps) =>
          //   value.map((option, index) => (
          //     <>
          //       <Chip
          //         variant="filled"
          //         label={option}
          //         size="small"
          //         {...getTagProps({ index })}
          //       />
          //     </>
          //   ))
          // }
          renderInput={(params) => (
            <>
              <InputBase
                placeholder={placeholder1}
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
            </>
          )}
        />

        <Autocomplete
          data-testid="autocomplete2"
          id="location"
          disablePortal
          filterSelectedOptions
          classes={{ paper: classes.paper, root: classes.searchBox }}
          renderInput={(params: any) => (
            <InputBase
              placeholder={placeholder2}
              className={classes.inputBase}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              startAdornment={
                <Box sx={{ padding: '8px' }}>
                  <LocationOnOutlinedIcon />
                </Box>
              }
              endAdornment={<SearchIcon className={classes.searchIcon} />}
            />
          )}
          options={[]}
        />
      </Box>
    </>
  )
}
const top100Films: string[] = ['sohail', 'shaik', 'sonu']

export default SearchBar
