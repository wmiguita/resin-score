import React from "react"
import { useSelector } from "react-redux"
import {
  Drawer,
  Link,
  List, ListItem, ListItemIcon
} from "@material-ui/core"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"

import { ROUTES } from "../constants"
import { drawerOpen } from "../slices"

//TODO: intl8 for text
export default function SideMenu( props ) {
  const isDrawerOpen = useSelector( drawerOpen )

  return (
    <Drawer open={ isDrawerOpen }>
      <List>
        <ListItem button>
          <ListItemIcon><PersonOutlineIcon /></ListItemIcon>
          <Link href={ ROUTES.ATHETES } >Atheletes</Link>
        </ListItem>
      </List>
    </Drawer>
  )
}
