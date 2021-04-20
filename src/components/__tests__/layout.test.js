import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import { wrapComponent } from "mock-store"

import Layout from "../layout"

const pageProps = { location: { pathname: "/" } }
let layout

describe( "Layout", () => {
  it( "renders Layout with children", () => {
    const tree = renderer.create( wrapComponent (
      <Layout { ...pageProps }><div>child</div></Layout>
    )).toJSON()

    expect( tree ).toMatchSnapshot()
  })

  it( "renders Layout with props", () => {
    const propedLayout = renderer.create( wrapComponent(
      <Layout { ...pageProps }><div></div></Layout>
    )).toJSON()

    expect( propedLayout ).toMatchSnapshot()
  })
})
