import React from "react"
import { Typography } from "@material-ui/core"

import themeStyle from "../styles"

export function Title( props ) {
  const classes = themeStyle()

  return (
    <Typography component="h2" variant="h4" className={ classes.title }>
      { props.children }
    </Typography>
  )
}

export default Title
