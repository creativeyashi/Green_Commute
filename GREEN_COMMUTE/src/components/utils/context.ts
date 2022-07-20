import React from 'react'
export const SearchContext = React.createContext<any>({})
export const JobContext = React.createContext({
  cardId: -1,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setCardId: (id: number) => {},
})
