import { createSlice } from "@reduxjs/toolkit"

const STORAGE_KEY = "atheletesSlice"
const emptyState = {
  list: []
}
const storageAtheletes = ( typeof localStorage !== 'undefined' ) ? localStorage.getItem( STORAGE_KEY ) : null
const initialState = storageAtheletes ? JSON.parse( storageAtheletes ) : emptyState

export const atheleteSlice = createSlice({
  name: "atheleteSlice",
  reducers: {
    addAthelete: ( state, action ) => {
      state.list.push( action.payload )
      localStorage.setItem( STORAGE_KEY, JSON.stringify( state ))
    }
  },
  initialState
});
// exporting preloadedState
export const preloadAtheletes = () => {
  return
}

// exporting actions
export const { addAthelete } = atheleteSlice.actions

// exporting states
export const atheleteList = state => state.atheleteSlice.list

export default atheleteSlice.reducer
