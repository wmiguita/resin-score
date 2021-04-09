import React from "react"

import {
  Drawer,
  Link,
  List, ListItem, ListItemIcon, ListItemText
} from "@material-ui/core"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"

export default function SideMenu( props ) {
  return (
    <Drawer>
      <List>
        <ListItem button>
          <ListItemIcon><PersonOutlineIcon /></ListItemIcon>
          <ListItemText primary="Athetes" />
        </ListItem>
      </List>
    </Drawer>
  )
}
