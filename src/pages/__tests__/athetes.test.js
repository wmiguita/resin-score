import React from "react"
import renderer from "react-test-renderer"

import AtheletesPage from "../atheletes"

describe( "Atheletes page", () => {
  it( "renders athelete page", () => {
    const page = renderer.create( <AtheletesPage /> ).toJSON()

    expect( page ).toMatchSnapshot()
  });
})
