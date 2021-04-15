import { createSlice } from "@reduxjs/toolkit"


export const userInterface = createSlice({
  name: "userInterface",
  initialState: {
    drawerOpen: false,
    selectedTab: 0
  },
  reducers: {
    toggleDrawer: state => {
      state.drawerOpen = !state.drawerOpen
    },
    selectTab: ( state, action ) => {
      state.selectedTab = action.payload
    }
  }
})

// exporting actions
export const {
  selectTab,
  toggleDrawer
} = userInterface.actions

// exporting states
export const drawerOpen = state => state.userInterface.drawerOpen
export const selectedTab = state => state.userInterface.selectedTab

export default userInterface.reducer
