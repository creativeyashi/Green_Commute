import React from 'react'
import '@testing-library/jest-dom'
import GreenRoutes from './GreenRoutes'
import { render, screen } from '@testing-library/react'
import { GREEN_ROUTES } from '../../utils/constant'

describe('Green Routes Molecule', () => {
  it('snapshot match', () => {
    const mock = jest.fn()
    render(
      <GreenRoutes
        onClickHandler={mock}
        jobDescription={`${GREEN_ROUTES.JOB_DESCRIPTION}`}
        aboutTheCompany={`${GREEN_ROUTES.ABOUT_THE_COMPANY}`}
      />
    )
    const greenRoutesCard = screen.getByTestId('greenRoutes')
    expect(greenRoutesCard).toBeTruthy()
  })
})
