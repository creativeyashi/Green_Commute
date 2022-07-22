import React from 'react'
export interface ImageProps {
  source: string
}

const Image: React.FC<ImageProps> = (props) => {
  const { source } = props
  return <img src={source} alt="map" />
}

export default Image
