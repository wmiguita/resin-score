import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"

import { wrapComponent } from "mock-store"
import AtheletesPage from "../atheletes"

describe( "Atheletes page", () => {
  it( "renders athelete page on listing tab", () => {
    const page = renderer.create( wrapComponent( <AtheletesPage /> )).toJSON()

    expect( page ).toMatchSnapshot()
  });
})
