import React from 'react';


export interface illustrationProps{
    source?:string,
    className?:string,
    style?:React.CSSProperties;

}


export const IllustrationComp = (props:any) => {
    const {source,style,className } =props;
  return (
    
      <img src={source} alt="illustration" className={className}  style={style}/>
    
  );
};


