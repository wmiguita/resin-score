import React from "react"
import PropTypes from "prop-types"
import { Paper } from "@material-ui/core"


export const TabPanel = ( props ) => {
  const { children, index, value } = props
  return (
    <Paper role="tabpanel" hidden={( index !== value )}>
      { ( index === value ) ? children : null }
    </Paper>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

export default TabPanel
