import React from "react"
import PropTypes from "prop-types"
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"

// suppressHydrationWarning because list is loaded later, without server access
export const AtheletesList = ({ onDelete, onEdit, list, ...relayProps }) => {
  const atheleteItem = ( athelete ) => {
    return (
      <ListItem key={ athelete.id }>
        <ListItemText primary={ athelete.name } />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="edit"
            onClick={ onEdit ? onEdit.bind( null, athelete ) : null }>
              <EditIcon />
          </IconButton>
          <IconButton
            onClick={ onDelete ? onDelete.bind( null, athelete ) : null }
            aria-label="delete">
              <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }

  return (
    <List { ...relayProps }>
      { list.map( a => atheleteItem( a ) ) }
    </List>
  )
}

AtheletesList.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  list: PropTypes.array.isRequired
}

export default AtheletesList
