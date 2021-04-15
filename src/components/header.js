import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  AppBar,
  IconButton,
  Toolbar
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import AtheleteTabs from "./atheleteTabs"
import { selectTab, selectedTab, toggleDrawer } from "../slices"

export function Header({ props }) {
  const dispatch = useDispatch()
  const drawer = () => dispatch( toggleDrawer() )
  const tabChange = ( e, tab ) => dispatch( selectTab( tab ))
  const tab = useSelector( selectedTab )

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={ drawer }
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <AtheleteTabs selected={ tab } onChange={ tabChange }/>
      </Toolbar>
    </AppBar>
  )
}
export default Header
