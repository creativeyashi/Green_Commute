import { Typography } from '@mui/material'
import React from 'react'
import Vector from '../../../assets/image/Vectorshape.png'

interface Prop {
  AQIIndex: number
}

const index: React.FC<Prop> = (props: Prop) => {
  return (
    <div
      style={{
        backgroundImage: `url(${Vector})`,
        height: '174px',
        width: '174px',
        marginTop: '32px',
      }}
    >
      <Typography
        color="#0B6D62"
        sx={{
          top: '64px',
          bottom: '64px',
          fontFamily: 'Montserrat',
          fontWeight: '600',
          fontSize: '48px',
          lineHeight: '48px',
          fontStyle: 'normal',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {props.AQIIndex}
      </Typography>
    </div>
  )
}

export default index
