import React from 'react'
import { render } from '@testing-library/react'
import FileUpload from './index'
import '@testing-library/jest-dom'

describe('File upload Component', () => {
  it('should match snapshot', () => {
    const fn = jest.fn()
    const wrapper = render(
      <FileUpload setIsFilePicked={fn} setSelectedFile={fn} />
    )
    expect(wrapper).toBeTruthy()
  })
  it('click upload button', async () => {
    const fn = jest.fn()
    const wrapper = render(
      <FileUpload setIsFilePicked={fn} setSelectedFile={fn} />
    )
    expect(wrapper.findByTestId('input')).toBeTruthy()
  })
})
