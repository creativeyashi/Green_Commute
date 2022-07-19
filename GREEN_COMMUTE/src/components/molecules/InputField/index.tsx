import TextField from '@mui/material/TextField'
import React from 'react'

export interface InputFieldProps {
  style?: React.CSSProperties
  Placeholder?: string
  value?: string
  onChange?: () => void
}

export const InputField = (props: InputFieldProps) => {
  const { Placeholder, value, onChange, style } = props
  return (
    <TextField
      type="text"
      placeholder={Placeholder}
      style={style}
      value={value}
      onChange={onChange}
    />
  )
}
