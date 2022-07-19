import React from 'react'
import { render } from '@testing-library/react'
import JobCard from './index'
import Myntra from '../../../assets/icons/myntra.svg'
describe('Job Card Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(
      <JobCard
        id={1}
        logo={Myntra}
        companyName="Myntra"
        title="User Experience Designer"
        location="HitechCity , Hyderabad - 507003"
        timeElapsed="36 min"
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
