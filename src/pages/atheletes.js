import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddIcon from "@material-ui/icons/Add"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import {
  Container,
  Fab,
  IconButton,
  List, ListItem, ListItemText, ListItemSecondaryAction,
  Paper
} from "@material-ui/core"

import themeStyle from "../styles"
import { Title } from "../components"
import { AtheleteDialog, RemoveDialog } from "../components/atheletes"
import { addAthelete, atheleteList, editAthelete, removeAthelete } from "../slices"
import { Athelete } from "../models"

const _initialState = {
  athelete: (new Athelete()).toJSON(),
  formDialogOpen: false,
  removeDialogOpen: false
}
export default function AtheletesPage() {
  const dispatch = useDispatch()
  const classes = themeStyle()

  const list = useSelector( atheleteList ) //list of atheletes from reducers
  const [ state, setState ] = useState( _initialState )
  const closeDialogs = () => setState( _initialState ) // close all dialog and reset athelete
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
        <List suppressHydrationWarning={ true }>
          {
            list.map( athelete => {
              return (
                <ListItem key={ athelete.id }>
                  <ListItemText primary={ athelete.name } />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="edit"
                      onClick={ openFormDialog.bind( null, athelete ) }>
                        <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={ confirmRemoveDialog.bind( null, athelete ) }
                      aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })
          }
        </List>
        <AtheleteDialog
          open={ state.formDialogOpen }
          athelete={ state.athelete }
          onSubmit={ onSubmit }
          onClose={ closeDialogs } />
        <RemoveDialog
          open={ state.removeDialogOpen }
          athelete={ state.athelete }
          onClose={ onCloseRemoveDialog } />
      </Paper>
    </Container>
  )
}
