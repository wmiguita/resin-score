import React from "react"
import renderer from "react-test-renderer"

import AtheletesList from "../atheletesList"

describe( "AtheletesList", () => {

  it( "should render AtheleteList", () => {
    const tree = renderer.create( <AtheletesList list={ [] } /> ).toJSON()

    expect( tree ).toMatchSnapshot()
  })
})
