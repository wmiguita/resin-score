import React from "react"
import { useDispatch } from "react-redux"
import {
  AppBar,
  IconButton,
  Toolbar
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { toogleDrawer } from "../slices"

export default function Header({ props }) {
  const dispatch = useDispatch()
  const drawer = () => dispatch( toogleDrawer() )

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
      </Toolbar>
    </AppBar>
  )

}
