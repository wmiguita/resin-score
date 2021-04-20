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
import { AtheleteDialog } from "../components/atheletes"
import { addAthelete, atheleteList, editAthelete } from "../slices"
import { Athelete } from "../models"

const _initialState = {
  athelete: (new Athelete()).toJSON(),
  modalOpen: false
}
export default function AtheletesPage() {
  const dispatch = useDispatch()
  const classes = themeStyle()

  const list = useSelector( atheleteList )
  const [ state, setState ] = useState( _initialState )
  const onSubmit = ( attrs ) => {
    const action = attrs.id === state.athelete.id ? editAthelete( attrs ) : addAthelete( attrs )
    dispatch( action )
    setState( _initialState )
  }
  const openDialog = ( athelete ) => {
    const modalOpen = true
    setState({ athelete, modalOpen })
  }
  const closeDialog = () => setState( _initialState )

  return (
    <Container>
      <Paper>
        <Title>
          Athelete list
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            onClick={ openDialog.bind( null, state.athelete ) }
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
                      onClick={ openDialog.bind( null, athelete ) }>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })
          }
        </List>
        <AtheleteDialog
          open={ state.modalOpen }
          athelete={ state.athelete }
          onSubmit={ onSubmit }
          onClose={ closeDialog }/>
      </Paper>
    </Container>
  )
}
