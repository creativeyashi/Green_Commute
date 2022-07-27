// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-key */
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Stepper from '.'
import { Typography } from '@mui/material'

const steps = [
  <Typography variant="subtitle1">Your Location</Typography>,
  <Typography variant="subtitle2">Job Location</Typography>,
  <Typography variant="subtitle2">Your Skills</Typography>,
]

it('Stepper Component should Render', () => {
  render(<Stepper active={2} steps={steps} />)
  const stepperElement = screen.getByTestId('stepper')
  expect(stepperElement).toBeInTheDocument()
})
