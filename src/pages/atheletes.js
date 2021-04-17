import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import DeleteIcon from "@material-ui/icons/Delete"
import {
  Button,
  Container,
  Grid,
  IconButton,
  List, ListItem, ListItemText, ListItemSecondaryAction,
  TextField
} from "@material-ui/core"

import { Athelete } from "../models"
import themeStyle from "../styles/themeStyle"
import { TabPanel } from "../components"
import { Title } from "../components"
import { addAthelete, atheleteList, selectTab, selectedTab } from "../slices"

export default function AtheletesPage() {
  const dispatch = useDispatch()
  const classes = themeStyle()

  const tab = useSelector( selectedTab )
  const list = useSelector( atheleteList )
  const [ formName, setFormName ] = useState( "" )
  const add = () => {
    setFormName( "" )
    dispatch( addAthelete( (new Athelete({ name: formName } )).toJSON()))
    dispatch( selectTab( 0 ) )
  }

  const setName = ( event ) => { setFormName( event.target.value ) }

  return (
    <Container>

      <TabPanel index={ 0 } value={ tab } >
        <Title>{ "Athelete list" }</Title>
        <List>
          {
            list.map( athelete => {
              return (
                <ListItem>
                  <ListItemText primary={ athelete.name } />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })
          }
        </List>
      </TabPanel>

      <TabPanel index={ 1 } value={ tab } >
        <Title>{ "Athelete subscription" }</Title>
        <form className={ classes.form }>
          <Grid container spacing={ 1 } className={ classes.formGrid } >
            <Grid item>
              <AccountCircleIcon />
            </Grid>
            <Grid item>
              <TextField id="athelete-name" label="Name" onChange={ setName } value={ formName }/>
            </Grid>
          </Grid>
          <div className={ classes.formActions }>
            <Button variant="outlined">Cancel</Button>
            <Button color="primary" variant="contained" onClick={ add }>Add</Button>
          </div>
        </form>
      </TabPanel>

    </Container>
  )
}
