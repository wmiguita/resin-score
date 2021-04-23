import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddIcon from "@material-ui/icons/Add"
import {
  Container,
  Fab,
  Paper
} from "@material-ui/core"

import themeStyle from "../styles"
import { Title } from "../components"
import { AtheleteDialog, AtheletesList, RemoveDialog } from "../components/atheletes"
import { addAthelete, atheleteList, editAthelete, removeAthelete } from "../slices"
import { Athelete } from "../models"

const _emptyAtheleteJSON = (new Athelete()).toJSON()
const _initialState = {
  athelete: _emptyAtheleteJSON,
  formDialogOpen: false,
  removeDialogOpen: false
}
export default function AtheletesPage() {
  const dispatch = useDispatch()
  const classes = themeStyle()
  const list = useSelector( atheleteList ) //list of atheletes from reducers
  const [ state, setState ] = useState( _initialState )

  // close all dialog, resete athelete later for UX nitpicking
  const closeDialogs = _ => setState( Object.assign( {}, _initialState, { athelete: state.athelete }))

  // clear athelete
  const clearAthelete = () => setState( Object.assign( {}, state, { athelete: _emptyAtheleteJSON }))

  const onSubmit = ( attrs ) => { // add or edit athelete
    const action = attrs.id === state.athelete.id ? editAthelete( attrs ) : addAthelete( attrs )
    dispatch( action )
    closeDialogs()
  }
  const openFormDialog = ( athelete ) => { // open form dialog new or edit
    const formDialogOpen = true
    const newState = Object.assign( {}, state, { athelete, formDialogOpen })
    setState( newState )
  }
  const confirmRemoveDialog = ( athelete ) => {
    const removeDialogOpen = true
    const newState = Object.assign({}, state, { athelete, removeDialogOpen })
    setState( newState )
  }
  const onCloseRemoveDialog = ( confirmation ) => {
    if( confirmation )
      dispatch( removeAthelete( state.athelete.id ))
    closeDialogs()
  }

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
          onClose={ onCloseRemoveDialog } />
      </Paper>
    </Container>
  )
}
