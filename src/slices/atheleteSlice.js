import { createSlice } from "@reduxjs/toolkit"

export const atheleteSlice = createSlice({
  name: "atheleteSlice",
  initialState: {
    list: []
  },
  reducers: {
    addAthelete: ( state, action ) => {
      state.list.push( action.athelete )
    }
  }
});

export const { addAthelete } = atheleteSlice.actions

export default atheleteSlice.reducer
