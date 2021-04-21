import React from "react"
import PropTypes from "prop-types"
import {
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from "@material-ui/core"
export const RemoveDialog = ( props ) => {
  const { athelete, onClose, ...relayProps } = props
  const refuseClick = () => onClose( false )
  const confirmClick = () => onClose( true )
  return (
    <Dialog onClose={ refuseClick } { ...relayProps } disableBackdropClick>
      <DialogTitle>{ `Confirm exclusion of "${ athelete.name }"` }</DialogTitle>
      <DialogContent>
        <DialogContentText>
          { `Confirming will permanently remove "${ athelete.name }" from listing!` }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={ refuseClick }>Cancel</Button>
        <Button color="secondary" variant="contained" onClick={ confirmClick }>Confirm Remove</Button>
      </DialogActions>
    </Dialog>
  )
}

RemoveDialog.propTypes = Object.assign({}, Dialog.propTypes, {
  athelete: PropTypes.object.isRequired
})

export default RemoveDialog
