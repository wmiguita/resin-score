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
import { addAthelete, atheleteList } from "../slices"

const _initialState = {
  selectedId: null,
  modalOpen: false
}
export default function AtheletesPage() {
  const dispatch = useDispatch()
  const classes = themeStyle()

  const list = useSelector( atheleteList )
  const [ state, setState ] = useState( _initialState )
  const onSubmit = ( athelete ) => {
    dispatch( addAthelete( athelete.toJSON() ) )
    setState( _initialState )
  }
  const openDialog = ( atheleteId ) => {
    const modalOpen = true
    setState({ atheleteId, modalOpen })
  }
  const closeDialog = () => {
    setState( _initialState )
  }

  return (
    <Container>
      <Paper>
        <Title>
          { "Athelete list" }
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            onClick={ openDialog.bind( null, state.atheleteId ) }
            className={ classes.addAction }>
            <AddIcon />
          </Fab>
        </Title>
        <List>
          {
            list.map( athelete => {
              return (
                <ListItem key={ athelete.id }>
                  <ListItemText primary={ athelete.name } />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="edit"
                      onClick={ openDialog.bind( null, athelete.id ) }>
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
          atheleteId={ state.selectedId }
          onSubmit={ onSubmit }
          onClose={ closeDialog }/>
      </Paper>
    </Container>
  )
}
