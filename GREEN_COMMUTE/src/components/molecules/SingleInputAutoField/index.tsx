import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    '& input': {
      width: 200,
      bgcolor: 'white',
    },
  },
  lable: {
    marginBottom: '4px',
  },
  customtextfield: {
    '& .MuiOutlinedInput-root': {
      padding: '4px 12px !important',
      height: '50px',
      width: '400px',
      borderRadius: '8px',
      bgcolor: 'white',
      color: '#94A196',
      bordercolor: '#D6D6D6',
    },
  },
})

interface Props {
  onChange: React.Dispatch<React.SetStateAction<string | null | undefined>>
  options: any[]
}

const SingleAutoComplete: React.FC<Props> = (props) => {
  const classes = useStyles()
  return (
    <Autocomplete
      onChange={(_event, value) => props.onChange(value)}
      className={classes.root}
      id="custom-input-demo"
      options={props.options}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <Typography variant="subtitle1" className={classes.lable}>
            {'Where do you stay ?'}
          </Typography>
          <TextField
            className={classes.customtextfield}
            id="autocomplete"
            variant="outlined"
            inputProps={{ ...params.inputProps }}
            placeholder="Enter your Location"
          />
        </div>
      )}
    />
  )
}

export default SingleAutoComplete
