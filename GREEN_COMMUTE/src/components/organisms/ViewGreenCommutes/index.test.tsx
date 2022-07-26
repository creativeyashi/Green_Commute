import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ViewGreenRoutes from './index'

describe('Vehicle Tab component', () => {
  test('Match the snapshot', () => {
    const wrapper = render(
      <ViewGreenRoutes source="E Maredpally" destination="Hi-tech city" />
    )
    expect(wrapper).toBeTruthy()
  })
})
