import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import { store } from "mock-store"

import SideMenu from "../sideMenu"

let sideMenu
describe( "SideMenu", () => {
  beforeEach(() => {
    sideMenu = renderer.create(
      <Provider store={ store }>
        <SideMenu />
      </Provider>
    )
  })
  it( "should render SideMenu", () => {
    const tree = sideMenu.toJSON()

    expect( tree ).toMatchSnapshot()
  })
})
