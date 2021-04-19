import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import { wrapComponent } from "mock-store"

import Layout from "../layout"

let layout

describe( "Layout", () => {
  it( "renders Layout with children", () => {
    const tree = renderer.create( wrapComponent (
      <Layout><div>child</div></Layout>
    )).toJSON()

    expect( tree ).toMatchSnapshot()
  })

  it( "renders Layout with props", () => {
    const propedLayout = renderer.create( wrapComponent(
      <Layout test={ "test" }><div></div></Layout>
    )).toJSON()

    expect( propedLayout ).toMatchSnapshot()
  })
})
