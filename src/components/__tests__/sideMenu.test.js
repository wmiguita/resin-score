import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import { wrapComponent } from "mock-store"

import SideMenu from "../sideMenu"
import { ROUTES } from "../../constants"

describe( "SideMenu", () => {
  it( "should render SideMenu", () => {
    const tree = renderer.create( wrapComponent( <SideMenu /> ) ).toJSON()

    expect( tree ).toMatchSnapshot()
  })

  it.skip( "should render SideMenu with selected uri", () => {
    const sideMenu = renderer.create( wrapComponent( <SideMenu uri={ ROUTES.ATHELETES } /> ))

    //TODO: find better way to test behaviour or should it be tested?
    const selected = sideMenu.root.findByProps({ className: 'Mui-selected' })

    expect( selected.length ).toBe( 1 )
  })
})
