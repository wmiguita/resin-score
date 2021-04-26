import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddIcon from "@material-ui/icons/Add"
import {
  Container,
  Fab,
  Paper,
  Snackbar
} from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import themeStyle from "../styles"
import { Title } from "../components"
import { AtheleteDialog, AtheletesList, RemoveDialog } from "../components/atheletes"
import {
  addAthelete,
  atheleteFeedback,
  atheleteList,
  clearAtheleteFeedback,
  editAthelete,
  removeAthelete
} from "../slices"
import { Athelete } from "../models"

const _emptyAtheleteJSON = (new Athelete()).toJSON()
const _initialState = {
  athelete: _emptyAtheleteJSON,
  formDialogOpen: false,
  removeDialogOpen: false,
}
export default function AtheletesPage() {
  const dispatch = useDispatch()
  const classes = themeStyle()
  const list = useSelector( atheleteList ) //list of atheletes from reducers
  const feedback = useSelector( atheleteFeedback )
  const [ state, setState ] = useState( _initialState )
  const snackPosition = { vertical: "top", horizontal: "center" }
  // clear athelete
  const clearAthelete = () => {
    setState( Object.assign( {}, state, { athelete: _emptyAtheleteJSON }))
  }
  // add or edit athelete
  const onSubmit = ( attrs ) => {
    const action = attrs.id === state.athelete.id ? editAthelete( attrs ) : addAthelete( attrs )
    if( attrs.name )
      dispatch( action )
    closeDialogs()
  }
  // open form dialog new or edit
  const openFormDialog = ( athelete ) => {
    const formDialogOpen = true
    const newState = Object.assign( {}, state, { athelete, formDialogOpen })
    setState( newState )
  }
  // open confirm remove dialog
  const confirmRemoveDialog = ( athelete ) => {
    const removeDialogOpen = true
    const newState = Object.assign({}, state, { athelete, removeDialogOpen })
    setState( newState )
  }
  // executes action selected at remove confirmation
  const onCloseRemoveDialog = ( confirmation ) => {
    if( confirmation )
      dispatch( removeAthelete( state.athelete.id ))
    closeDialogs()
  }
  // clean up state on feedback close
  const onFeedbackClose = () => {
    const snackbarOpen = false
    const feedbackComponent = null
    const newState = Object.assign( {}, state, { snackbarOpen, feedbackComponent } )

    dispatch( clearAtheleteFeedback() )

    setState( newState )
  }
  // close all dialog, resete athelete later for UX nitpicking, calls feedback
  const closeDialogs = _ => {
    let newState = {}
    // UX nitpicking when closing dialog with forms
    newState.athelete = state.athelete
    setState( Object.assign( {}, _initialState, newState ))
  }

  const snackbarOpen = !!feedback
  const feedbackComponent = ( snackbarOpen ) ?
    <Alert elevation={ 6 } variant="filled" severity={ feedback.error ? "error" : "success" }>
      { feedback.message }
    </Alert>
    : null

  return (
    <Container>
      <Paper>
        <Title>
          Athelete list
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            onClick={ openFormDialog.bind( null, state.athelete ) }
            className={ classes.addAction }>
            <AddIcon />
          </Fab>
        </Title>
        <AtheletesList
          suppressHydrationWarning={ true }
          onDelete={ confirmRemoveDialog }
          onEdit={ openFormDialog }
          list={ list } />
        <AtheleteDialog
          open={ state.formDialogOpen }
          athelete={ state.athelete }
          onSubmit={ onSubmit }
          onClose={ closeDialogs }
          onExited={ clearAthelete }/>
        <RemoveDialog
          open={ state.removeDialogOpen }
          athelete={ state.athelete }
          onClose={ onCloseRemoveDialog }
          onExited={ clearAthelete }/>
      </Paper>
      <Snackbar
        anchorOrigin={ snackPosition }
        open={ snackbarOpen }
        autoHideDuration={ 5000 }
        onClose={ onFeedbackClose }>
        { feedbackComponent }
      </Snackbar>
    </Container>
  )
}
