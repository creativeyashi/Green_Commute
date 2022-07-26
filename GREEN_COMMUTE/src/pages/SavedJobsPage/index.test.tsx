/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SavedJobsPage from './index'

describe('basic template', () => {
  test('match snap shot', () => {
    const wrapper = render(<SavedJobsPage />)
    expect(wrapper).toBeTruthy()
  })
})
