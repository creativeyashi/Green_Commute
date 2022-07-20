import React from 'react'
import { render } from '@testing-library/react'
import JobCard from './index'
import '@testing-library/jest-dom'
import Logo from '../../../assets/icons/hp.svg'

describe('AQI Molecule', () => {
  const Card = render(
    <JobCard
      companyIcon={Logo}
      companyName="HP"
      id={1}
      location="Hyderabad,Telangana,India"
      time="1 hour 30 minutes"
      title="UX Designer"
    />
  )
  it('Job Card', () => {
    expect(Card).toBeTruthy()
  })
  it('Job Card Title', () => {
    expect(Card.findByTestId('title')).toBeTruthy()
  })
  it('Job Card Company', () => {
    expect(Card.findByTestId('company')).toBeTruthy()
  })
  it('Job Card Address', () => {
    expect(Card.findByTestId('address')).toBeTruthy()
  })
})
