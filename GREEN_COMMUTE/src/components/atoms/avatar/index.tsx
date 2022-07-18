import { Avatar } from '@mui/material'
import React from 'react'
import avatar from '../../../assets/icons/Avatar.svg';


function AvatarComp({name}:any) {
    return (
        
        <Avatar src={avatar} data-testid="avatar" >{name}</Avatar>
        
    );
}

export default AvatarComp
