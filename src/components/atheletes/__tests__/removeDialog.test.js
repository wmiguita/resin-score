import React from "react"
import renderer from "react-test-renderer"

import RemoveDialog from "../removeDialog"

describe( "RemoveDialog", () => {

  it( "should render RemoveDialog", () => {
    const athelete = { name: 'athelete to remove' }
    const tree = renderer.create( <RemoveDialog open={ false } athelete={ athelete } /> ).toJSON()

    expect( tree ).toMatchSnapshot()
  })
})
