import { render, screen } from '@testing-library/react'
import { MenuButton } from '.'
import '@testing-library/jest-dom'
import save from '../../../assets/icons/save.svg'
import FindJob from '../../../assets/icons/jobs.png'

it('save job button', () => {
  render(<MenuButton Source={save} title="Saved Jobs" />)
  const element = screen.getByText('Saved Jobs')
  expect(element).toBeInTheDocument()
})

it('find job button', () => {
  render(<MenuButton Source={FindJob} title="Find Jobs" />)
  const element = screen.getByText('Find Jobs')
  expect(element).toBeInTheDocument()
})
