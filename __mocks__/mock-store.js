import React from "react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"

const mockStore = configureStore([])

//TODO: find better way to keep reducers up to date and check for any test side effects
export const store = mockStore({
  atheleteSlice: {
    list: []
  },
  userInterface: {
    drawerOpen: false,
    selectedTab: 0
  }
})

export const wrapComponent = ( element ) => {
  return (
    <Provider store={ store }>{ element }</Provider>
  )
}
