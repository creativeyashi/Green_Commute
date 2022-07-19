import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Icon from '../../atoms/Icon'

export interface MenuButtonProps {
  Source?: string
  title?: string
  className?: string
  variant?: 'caption' | 'h1' | 'h2'
  onClick?: () => void
}

const useStyle = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  typography: {
    alignSelf: 'center',
    paddingLeft: '10px',
    color: '#373C38',
    fontSize: '16px',
    weight: 500,
    fontFamily: 'Montserrat',
  },
  icons: {
    backgroundColor: '#F7F7F7',
    alignSelf: 'center',
  },
})

export const MenuButton = (props: MenuButtonProps) => {
  const { Source, title, className, variant, onClick } = props
  const style = useStyle()
  return (
    <div className={style.main}>
      <div className={style.icons}>
        <Icon source={Source} />
      </div>
      <Typography
        variant={variant}
        className={`${style.typography} ${className}`}
        onClick={onClick}
      >
        {title}
      </Typography>
    </div>
  )
}
