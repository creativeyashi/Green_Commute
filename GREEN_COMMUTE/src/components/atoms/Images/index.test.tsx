import { render, screen } from '@testing-library/react'
import Image from './index'
import Stay from '../../../assets/image/Entry-image.png'
import '@testing-library/jest-dom'

test('Map', () => {
  render(<Image source={Stay} />)
  const MapViewTest = screen.getByRole('img')
  expect(MapViewTest).toBeInTheDocument()
})
