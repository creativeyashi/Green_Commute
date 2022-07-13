import React from 'react'
import { Button } from '@mui/material'

export interface ButtonIconProps {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

export const ButtonComponent = (props: any) => {
  const { startIcon, endIcon, variant, className, children, onClick, style } =
    props
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