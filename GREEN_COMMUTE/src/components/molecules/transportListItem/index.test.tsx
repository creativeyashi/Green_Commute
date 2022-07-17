import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ListItem from './index'
import ola from '../../../assets/logos/ola.svg'

it('renders mui icons', () => {
  render(<ListItem icon={ola} cname="Ola" price="45" />)
  const testIcon = screen.getByTestId('listitem')
  expect(testIcon).toBeInTheDocument()
})
