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

const _initialForm = { name: "" }

export const AtheleteDialog = ( props ) => {
  const { athelete, onClose, onSubmit, ...relayProps } = props
  const [ form, setForm ] = useState( athelete ||  _initialForm )
  const classes = themeStyle()
  const submitWrapper = ( e ) => {
    e.preventDefault() //
    const attrs = Object.assign( {}, athelete, form )
    onSubmit( new Athelete( attrs ).toJSON() )
    setForm( _initialForm )
  }
  const closeWrapper = ( e ) => {
    setForm( _initialForm )
    return onClose( e )
  }
  const setName = ( event ) => {
    const name = event.target.value
    setForm( Object.assign( {}, form, { name }) )
  }

  return (
    <Dialog
      title="Athelete subscription"
      onClose={ closeWrapper }
      { ...relayProps }>
      <DialogTitle>Athelete subscription</DialogTitle>
      <DialogContent>
        <form id="atheleteForm" className={ classes.form } onSubmit={ submitWrapper }>
          <input type="hidden" value={ athelete.id } />
          <Grid container spacing={ 1 } className={ classes.formGrid } >
            <Grid item>
              <AccountCircleIcon />
            </Grid>
            <Grid item>
              <TextField
                id="athelete-name"
                name="name"
                label="Name"
                value={ form.name || athelete.name }
                onChange={ setName }/>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={ closeWrapper }>Cancel</Button>
        <Button color="primary" variant="contained" type="submit" form="atheleteForm">OK</Button>
      </DialogActions>
    </Dialog>
  )
}

AtheleteDialog.propTypes = Object.assign( Dialog.propTypes, {
  onSubmit: PropTypes.func,
  athelete: PropTypes.object
})
export default AtheleteDialog
