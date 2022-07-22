import MuiAvatar from '@mui/material/Avatar';
import React from 'react'
import avatar from '../../../assets/icons/Avatar.svg';


function Avatar({name}:any) {
    return (
        <MuiAvatar src={avatar} data-testid="avatar" >{name}</MuiAvatar>
    );
 }
export default Avatar
