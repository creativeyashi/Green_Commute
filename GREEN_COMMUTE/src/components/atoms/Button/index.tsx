import React from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from '@mui/material'

const CustomizedButton = styled(MuiButton)(() => ({
  '&:hover': {
    boxShadow: 'none',
  },
  '&:focusVisible': {
    boxShadow: 'none',
  },
}))
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button: React.FC<MuiButtonProps> = (props) => {
  return (
    <>
      <CustomizedButton disableRipple {...props}></CustomizedButton>
    </>
  )
}

export default Button
