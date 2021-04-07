import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe( "Header", () => {
  it( "should render Header", () => {
    const header = renderer.create( <Header /> ).toJSON()

    expect( header ).toMatchSnapshot()
  })
})

