import React from 'react';

interface Props{
  source:string;
}

function Icon(props:Props) {
  return (
    <img src={props.source} alt="try"></img>
  );
}

export default Icon;