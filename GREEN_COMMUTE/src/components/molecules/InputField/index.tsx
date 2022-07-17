import TextField from '@mui/material/TextField'
import React from 'react'


export interface InputFieldProps{
        style?: React.CSSProperties,
        Placeholder?: string
        
}



export const InputField = (props:InputFieldProps) => {
    const {Placeholder,style}=props
  return (
    <TextField 
    type="text"
    placeholder={Placeholder}
    style={style}
    />
  )
}
