import React from "react"
import renderer from "react-test-renderer"

import Layout from "../layout"

describe( "Layout", () => {
  it( "renders Layout with children", () => {
    const layout = renderer.create( <Layout><div>child</div></Layout> ).toJSON()

    expect( layout ).toMatchSnapshot()
  })

  it( "renders Layout with props", () => {
    const layout = renderer.create( <Layout test={ "test" }><div></div></Layout> ).toJSON()

    expect( layout ).toMatchSnapshot()
  })
})
