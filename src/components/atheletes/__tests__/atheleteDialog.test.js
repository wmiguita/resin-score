import React from "react"
import renderer from "react-test-renderer"

import AtheleteDialog from "../atheleteDialog"

describe( "AtheleteDialog", () => {
  it( "should render AtheleteDialog", () => {
    const athelete = {}
    const tree = renderer.create( <AtheleteDialog athelete={ athelete } open={ false }/> ).toJSON()

    expect( tree ).toMatchSnapshot()
  })
})
