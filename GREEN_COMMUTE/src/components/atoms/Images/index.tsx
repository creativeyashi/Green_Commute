import React from 'react'
export interface MapProps {
  source: string
}

const MapComponent: React.FC<MapProps> = (props) => {
  const { source } = props
  return <img src={source} alt="map" />
}

export default MapComponent
