import React from 'react'
import  Button  from '@mui/material/Button'

export interface ButtonIconProps {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: "text" | "outlined" | "contained" | undefined
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

 const MuiButton: React.FC<ButtonIconProps> = (props ) => {
  const { startIcon, endIcon, variant, className, children, onClick, style } =  props
  return (
    <Button
      startIcon={startIcon}
      style={style}
      endIcon={endIcon}
      onClick={onClick}
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  )
}

export default MuiButton
