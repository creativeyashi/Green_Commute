import React from 'react'
import { render } from '@testing-library/react'
import AQI from './index'
import '@testing-library/jest-dom'

describe('AQI Molecule', () => {
  it('AQI Icon', () => {
    const AqiIcon = render(<AQI AQIIndex={394} />)
    expect(AqiIcon).toBeTruthy()
  })
  it('AQI Icon with text 394', () => {
    const AqiIcon = render(<AQI AQIIndex={400} />)
    expect(AqiIcon.getByText(400)).toBeInTheDocument()
  })
})
