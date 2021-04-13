import { createSlice } from "@reduxjs/toolkit"


export const userInterface = createSlice({
  name: "userInterface",
  initialState: {
    drawerOpen: false
  },
  reducers: {
    toogleDrawer: state => {
      state.drawerOpen = !state.drawerOpen
    }
  }
})

// exporting actions
export const { toogleDrawer } = userInterface.actions

// exporting states
export const drawerOpen = state => state.userInterface.drawerOpen

export default userInterface.reducer
