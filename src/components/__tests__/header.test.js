import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import { wrapComponent } from "mock-store"

import Header from "../header"

describe( "Header", () => {
  it( "should render Header", () => {
    const header = renderer.create( wrapComponent( <Header /> )).toJSON()

    expect( header ).toMatchSnapshot()
  })
})

