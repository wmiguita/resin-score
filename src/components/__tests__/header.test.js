import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import { wrapComponent } from "mock-store"

import { ROUTES } from "../../constants"
import Header from "../header"

describe( "Header", () => {
  it( "should render Header", () => {
    const tree = renderer.create( wrapComponent( <Header /> )).toJSON()

    expect( tree ).toMatchSnapshot()
  })

  it( "should render Header with Atheletes title", () => {
    const tree = renderer.create( wrapComponent( <Header uri={ ROUTES.ATHELETES } /> )).toJSON()

    expect( tree ).toMatchSnapshot()
  })
})

