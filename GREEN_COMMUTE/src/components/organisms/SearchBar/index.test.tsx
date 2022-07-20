import React from 'react'
import { render } from '@testing-library/react'
import SearchBar from './index'
import '@testing-library/jest-dom'

describe('SearchBar component', () => {
  it('searchbar Icon', () => {
    const searchBar = render(
      <SearchBar placeholder1="Skills" placeholder2="Location" />
    )
    expect(searchBar).toBeTruthy()
  })
})
