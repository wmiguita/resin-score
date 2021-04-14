import { createSlice } from "@reduxjs/toolkit"


export const userInterface = createSlice({
  name: "userInterface",
  initialState: {
    drawerOpen: false
  },
  reducers: {
    toggleDrawer: state => {
      state.drawerOpen = !state.drawerOpen
    }
  }
})

// exporting actions
export const { toggleDrawer } = userInterface.actions

// exporting states
export const drawerOpen = state => state.userInterface.drawerOpen

export default userInterface.reducer
