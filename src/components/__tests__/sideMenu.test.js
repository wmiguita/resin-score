import React from "react"
import renderer from "react-test-renderer"

import SideMenu from "../sideMenu"

describe( "SideMenu", () => {
  it( "should render SideMenu", () => {
    const sideMenu = renderer.create( <SideMenu /> ).toJSON()

    expect( sideMenu ).toMatchSnapshot()
  })
})
