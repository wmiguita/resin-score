import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Button,
  Dialog, DialogActions, DialogContent, DialogTitle,
  Grid, TextField
} from "@material-ui/core"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

import themeStyle from "../../styles"
import { Athelete } from "../../models"

const _initialForm = {
  id: "",
  name: ""
}

export const AtheleteDialog = ( props ) => {
  const { atheleteId, onSubmit, ...relayProps } = props
  const [ form, setForm ] = useState( _initialForm )
  const classes = themeStyle()
  const submitWrapper = ( e ) => {
    e.preventDefault() //
    onSubmit( new Athelete( form ) )
    setForm( _initialForm )
  }
  const setName = ( event ) => {
    const name = event.target.value
    setForm( Object.assign( {}, form, { name }) )
  }

  return (
    <Dialog { ...relayProps }>
      <DialogTitle>Athelete subscription</DialogTitle>
      <DialogContent>
        <form className={ classes.form } onSubmit={ submitWrapper }>
          <input type="hidden" value={ form.id } />
          <Grid container spacing={ 1 } className={ classes.formGrid } >
            <Grid item>
              <AccountCircleIcon />
            </Grid>
            <Grid item>
              <TextField id="athelete-name" label="Name" value={ form.name } onChange={ setName }/>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={ props.onClose }>Cancel</Button>
        <Button color="primary" variant="contained" onClick={ submitWrapper }>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

AtheleteDialog.propTypes = Object.assign( Dialog.propTypes, {
  onSubmit: PropTypes.func,
  atheleteId: PropTypes.string
})
export default AtheleteDialog
