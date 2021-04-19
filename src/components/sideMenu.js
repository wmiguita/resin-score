import React from "react"
import PropTypes from "prop-types"
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
import themeStyle from "../styles/themeStyle"

//TODO: intl8 for text
export function SideMenu( props ) {
  const classes = themeStyle()
  const dispatch = useDispatch()
  const { uri } = props
  const drawer = () => dispatch( toggleDrawer() )
  const isDrawerOpen = useSelector( drawerOpen )
  const goTo = ( uri ) => {
    navigate( uri );
    drawer()
  }

  return (
    <Drawer open={ isDrawerOpen } >
      <div className={ classes.sideMenuClose }>
        <IconButton onClick={ drawer }>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          onClick={ goTo.bind( null, ROUTES.ATHELETES ) }
          selected={ uri === ROUTES.ATHELETES }>
          <ListItemIcon><PersonOutlineIcon /></ListItemIcon>
          <ListItemText >Atheletes</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}

SideMenu.propTypes = {
  uri: PropTypes.string
}
export default SideMenu
