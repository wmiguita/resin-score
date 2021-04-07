import React from "react"
import {
  AppBar,
  IconButton,
  Toolbar
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


export default function Header({ props }) {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
