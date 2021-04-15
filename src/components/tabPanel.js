import React from "react"
import PropTypes from "prop-types"


export const TabPanel = ( props ) => {
  const { children, index, value } = props
  return (
    <div role="tabpanel" hidden={( index === value )}>
      { children }
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

export default TabPanel
