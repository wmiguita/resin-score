import { createSlice } from "@reduxjs/toolkit"
import { cloneDeep } from "lodash"
import { Athelete, Fail, Success } from "../models"

const STORAGE_KEY = "atheletesSlice"
const emptyState = {
  list: [],
  feedback: null
}
const storageAtheletes = ( typeof localStorage !== 'undefined' ) ? localStorage.getItem( STORAGE_KEY ) : null
const initialState = storageAtheletes ? JSON.parse( storageAtheletes ) : emptyState

export const atheleteSlice = createSlice({
  name: "atheleteSlice",
  reducers: {
    addAthelete: ( state, action ) => {
      state.list.push( action.payload )
      localStorage.setItem( STORAGE_KEY, JSON.stringify( state ))
      state.feedback = ( new Success( "Athelete added" )).toJSON()

      return state
    },
    clearAtheleteFeedback: ( state ) => {
      state.feedback = null

      return state
    },
    editAthelete: ( state, action ) => {
      try {
        const updatedAttrs = action.payload
        const athelete = state.list.find( Athelete.byId( updatedAttrs.id ))

        if( athelete ) athelete.name = updatedAttrs.name
        else throw new Error( `ID "${ athelete.id }" not found` )
        localStorage.setItem( STORAGE_KEY, JSON.stringify( state ))

        state.feedback = ( new Success( "Athelete updated" )).toJSON()
        return state
      } catch ( error ) {
        state.feedback = ( new Fail( error.toString() )).toJSON()
        return state
      }
    },
    removeAthelete: ( state, action ) => {
      try {
        const removeId = action.payload
        const athelete = state.list.find( Athelete.byId( removeId ) )
        const idx = state.list.indexOf( athelete )

        if( idx >= 0 ) {
          state.list.splice( idx, 1 )
          localStorage.setItem( STORAGE_KEY, JSON.stringify( state ))
          state.feedback = ( new Success( "Athelete removed" )).toJSON()
        } else throw new Error( `ID "${ removeId }" not found` )

        return state
      } catch ( error ) {
        state.feedback = ( new Fail( error.message )).toJSON()
        return state
      }
    }
  },
  initialState
});

// exporting actions
export const {
  addAthelete,
  clearAtheleteFeedback,
  editAthelete,
  removeAthelete
} = atheleteSlice.actions

// exporting states
export const atheleteList = state => cloneDeep( state.atheleteSlice.list )
export const atheleteFeedback = state => state.atheleteSlice.feedback

export default atheleteSlice.reducer
