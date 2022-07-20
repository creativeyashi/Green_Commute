import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Chips from './index'

describe('Logo Component', () => {
  it('Logo with label', () => {
    render(<Chips label="Sohail" />)
    const chip = screen.getByTestId('MuiChip')
    expect(chip).toBeTruthy()
  })

  it('with outlined vairant', () => {
    const mockFn = jest.fn()
    const wrapper = render(
      <Chips label="Sohail" variant="outlined" onClick={mockFn} />
    )
    expect(wrapper).toBeTruthy()
  })

  it('with filled vairant', () => {
    const mockFn = jest.fn()
    const wrapper = render(
      <Chips label="Sohail" variant="filled" onClick={mockFn} />
    )
    expect(wrapper).toBeTruthy()
  })

  it('with size small', () => {
    const mockFn = jest.fn()
    const wrapper = render(
      <Chips label="Sohail" variant="filled" size="small" onClick={mockFn} />
    )
    expect(wrapper).toBeTruthy()
  })

  it('with medium small', () => {
    const mockFn = jest.fn()
    const wrapper = render(
      <Chips label="Sohail" variant="filled" size="medium" onClick={mockFn} />
    )
    expect(wrapper).toBeTruthy()
  })

  it('with onClick() clicked', () => {
    const mockFn = jest.fn()
    const wrapper = render(
      <Chips label="Sohail" variant="filled" size="medium" onClick={mockFn} />
    )
    expect(wrapper).toBeTruthy()
    fireEvent.click(wrapper.getByTestId('MuiChip'))
    expect(mockFn).toBeCalledTimes(1)
  })
})
