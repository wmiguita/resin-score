import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import {
  Button,
  Container,
  Grid,
  List, ListItem, ListItemText,
  TextField
} from "@material-ui/core"

import { Athelete } from "../models"
import themeStyle from "../styles/themeStyle"
import { TabPanel } from "../components"
import { Title } from "../components"
import { addAthelete, atheleteList, selectedTab } from "../slices"

export default function AtheletesPage() {
  const dispatch = useDispatch()
  const classes = themeStyle()

  const tab = useSelector( selectedTab )
  const list = useSelector( atheleteList )
  const [ formName, setFormName ] = useState( "" )
  const add = () => dispatch( addAthelete( (new Athelete({ name: formName } )).toJSON()))

  const setName = ( event ) => { setFormName( event.target.value ) }

  return (
    <Container>
      <TabPanel index={ 0 } value={ tab } >
        <Title>{ "Athelete list" }</Title>
        <List dense>
          {
            list.map(( athelete ) => {
              return (
                 <ListItem>
                   <ListItemText id={ athelete.id } primary={ athelete.name } />
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
