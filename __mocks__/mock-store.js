import configureStore from "redux-mock-store"

const mockStore = configureStore([])

//TODO: find better way to keep reducers up to date and check for any test side effects
export const store = mockStore({
  atheletes: {
  },
  userInterface: {
    drawerOpen: false,
    selectedTab: 0
  }
})
