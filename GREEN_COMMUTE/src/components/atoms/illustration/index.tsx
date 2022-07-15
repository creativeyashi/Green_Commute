import React from 'react';


export interface illustrationProps{
    source?:string,
    style?:React.CSSProperties;

}


export const Image = (props:any) => {
    const {source,style } =props;
  return (
      <img src={source} alt="illustration" style={style}/>
  );
};


