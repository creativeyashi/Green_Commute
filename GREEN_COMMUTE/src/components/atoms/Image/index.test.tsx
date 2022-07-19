import { render } from '@testing-library/react'
import { Image } from './index'
import '@testing-library/jest-dom'
import Work from '../../../assets/image/Work.png'

it('renders Image', () => {
  render(<Image source={Work} />)

  const img = document.querySelector('img') as HTMLImageElement
  expect(img).toHaveAttribute('src', Work)
})
