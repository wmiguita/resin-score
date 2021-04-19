import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import {
  AppBar,
  IconButton,
  Toolbar, Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { toggleDrawer } from "../slices"
import { ROUTES } from "../constants"

const titleHeader = uri => {
  let text = ""

  switch( uri ) {
    case ROUTES.ATHELETES:
      text = "Atheletes"
      break

    default:
      break
  }

  return (
    <Typography component="h1" variant="h6">{ text }</Typography>
  )
}
export const Header = ({ uri }) => {
  const dispatch = useDispatch()
  const drawer = () => dispatch( toggleDrawer() )

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
        { titleHeader( uri ) }
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  uri: PropTypes.string
}
export default Header
