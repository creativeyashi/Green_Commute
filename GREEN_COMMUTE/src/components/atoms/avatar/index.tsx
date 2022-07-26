import MuiAvatar from '@mui/material/Avatar'
import React from 'react'
import avatar from '../../../assets/icons/Avatar.svg'

interface Props {
  name?: string
}
const Avatar: React.FC<Props> = (props) => {
  const { name } = props
  return (
    <MuiAvatar src={avatar} data-testid="avatar">
      {name}
    </MuiAvatar>
  )
}
export default Avatar
