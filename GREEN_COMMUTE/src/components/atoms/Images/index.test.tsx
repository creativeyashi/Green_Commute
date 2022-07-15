import { render, screen } from '@testing-library/react'
import MapComponent from './index'
import Stay from '../../../assets/image/Entry-image.png'
import '@testing-library/jest-dom'

test('Map', () => {
  render(<MapComponent source={Stay} />)
  const MapViewTest = screen.getByRole('img')
  expect(MapViewTest).toBeInTheDocument()
})
