import React from "react"
import renderer from "react-test-renderer"

import TabPanel from "../tabPanel"

describe( "TabPanel", () => {
  it( "should render TabPanel", () => {
    const tree = renderer.create( <TabPanel index={ 1 } value={ 2 }><input /></TabPanel> ).toJSON()

    expect( tree ).toMatchSnapshot()
  })

  it( "should be hidden when value and index are different", () => {
    const tab = renderer.create( <TabPanel index={ 0 } value={ 1 } ><input /></TabPanel> )

    const div = tab.root.findByType( 'div' ) //paper material-ui component

    expect( div.props.hidden ).toBe( true )
  })
})
