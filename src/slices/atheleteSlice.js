import { createSlice } from "@reduxjs/toolkit"

export const atheleteSlice = createSlice({
  name: "atheleteSlice",
  initialState: {
    list: []
  },
  reducers: {
    addAthelete: ( state, action ) => {
      state.list.push( action.payload )
    }
  }
});

// exporting actions
export const { addAthelete } = atheleteSlice.actions

// exporting states
export const atheleteList = state => state.atheleteSlice.list

export default atheleteSlice.reducer
