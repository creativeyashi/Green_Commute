import React from 'react'
import MuiButton from '@mui/material/Button'

export interface ButtonIconProps {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: 'text' | 'outlined' | 'contained' | undefined
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button: React.FC<ButtonIconProps> = (props) => {
  const { startIcon, endIcon, variant, className, children, onClick, style } =
    props
  return (
    <MuiButton
      startIcon={startIcon}
      style={style}
      endIcon={endIcon}
      onClick={onClick}
      variant={variant}
      className={className}
    >
      {children}
    </MuiButton>
  )
}

export default Button
