import React from "react"

import {
  Drawer,
  Link,
  List, ListItem, ListItemIcon, ListItemText
} from "@material-ui/core"

import { ROUTES } from "../constants"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"

//TODO: intl8 for text
export default function SideMenu( props ) {
  return (
    <Drawer>
      <List>
        <ListItem button>
          <ListItemIcon><PersonOutlineIcon /></ListItemIcon>
          <Link href={ ROUTES.ATHETES } >Atheletes</Link>
        </ListItem>
      </List>
    </Drawer>
  )
}
