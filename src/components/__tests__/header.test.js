import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import { store } from "mock-store"

import Header from "../header"

describe( "Header", () => {
  it( "should render Header", () => {
    // console.log( 'headerTest', gatsby )
    const header = renderer.create( <Provider store={ store }><Header /></Provider> ).toJSON()

    expect( header ).toMatchSnapshot()
  })
})

