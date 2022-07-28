import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import FindJobsPage from './Index'

describe('basic FindJobs template', () => {
  test('match snap shot', () => {
    const wrapper = render(<FindJobsPage />)
    expect(wrapper).toBeTruthy()
  })
})
