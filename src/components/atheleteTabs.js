import React from "react"
import PropTypes from "prop-types"
import { Tabs, Tab } from "@material-ui/core"

export const AtheleteTabs = ( props ) => {
  const { selected, onChange } = props
  return (
    <Tabs value={ selected } onChange={ onChange } aria-label={ "Athelete menu" }>
      <Tab label="Atheletes" id="atheletes-list" aria-controls="atheletes-list" />
      <Tab label="Manage" id="manage" aria-controls="manage-athelete" />
    </Tabs>
  )
}

AtheleteTabs.propTypes = {
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}
export default AtheleteTabs
