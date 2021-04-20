import { createSlice } from "@reduxjs/toolkit"
import { cloneDeep } from "lodash"
import { Athelete } from "../models"

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

      return state
    },
    editAthelete: ( state, action ) => {
      const updatedAthelete = action.payload
      const athelete = state.list.find( Athelete.byId( updatedAthelete.id ))

      if( athelete ) athelete.name = updatedAthelete.name

      return state
    }
  },
  initialState
});

// exporting actions
export const { addAthelete, editAthelete } = atheleteSlice.actions

// exporting states
export const atheleteList = state => cloneDeep( state.atheleteSlice.list )

export default atheleteSlice.reducer
