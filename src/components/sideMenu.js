import React from "react"
import { navigate } from "gatsby"
import { useDispatch, useSelector } from "react-redux"
import {
  Divider,
  Drawer,
  IconButton,
  List, ListItem, ListItemIcon, ListItemText
} from "@material-ui/core"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"

import { ROUTES } from "../constants"
import { drawerOpen, toggleDrawer } from "../slices"

//TODO: intl8 for text
export default function SideMenu( props ) {
  const dispatch = useDispatch()
  const drawer = () => dispatch( toggleDrawer() )
  const isDrawerOpen = useSelector( drawerOpen )
  const goTo = () => {
    navigate( ROUTES.ATHELETES );
    drawer()
  }

  return (
    <Drawer open={ isDrawerOpen } >
      <div style={ { "text-align": "right" } }>
        <IconButton onClick={ drawer }>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={ goTo }>
          <ListItemIcon><PersonOutlineIcon /></ListItemIcon>
          <ListItemText >Atheletes</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}
