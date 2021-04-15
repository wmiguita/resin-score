import React from "react"
import renderer from "react-test-renderer"

import AtheleteTabs from "../atheleteTabs"


describe( "AtheleteTabs", () => {
  it( "should render athele tab options", () => {
    const tree = renderer.create( <AtheleteTabs selected={ 1 } onChange={ () => {} } /> ).toJSON()

    expect( tree ).toMatchSnapshot()
  })
})
