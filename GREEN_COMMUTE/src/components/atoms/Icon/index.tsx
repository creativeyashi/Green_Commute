import React from 'react';

interface props{
  source:string;
}

function Icons(props:props) {
  return (
    <img src={props.source} alt="try"></img>
  );
}

export default Icons;