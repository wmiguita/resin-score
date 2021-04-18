import React from "react"
import renderer from "react-test-renderer"

import AtheleteDialog from "../atheleteDialog"

describe( "AtheleteDialog", () => {
  it( "should render AtheleteDialog", () => {
    const tree = renderer.create( <AtheleteDialog open={ false }/> ).toJSON()

    expect( tree ).toMatchSnapshot()
  })
})
