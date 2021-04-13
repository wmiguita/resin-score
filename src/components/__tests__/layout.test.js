import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import { store } from "mock-store"

import Layout from "../layout"

let layout

describe( "Layout", () => {
  beforeEach(() => {
    layout = renderer.create(
      <Provider store={ store }>
        <Layout>
          <div>child</div>
        </Layout>
      </Provider>
    )
  })

  it( "renders Layout with children", () => {
    const tree = layout.toJSON()

    expect( tree ).toMatchSnapshot()
  })

  it( "renders Layout with props", () => {
    const propedLayout = renderer.create( 
      <Provider store={ store }>
        <Layout test={ "test" }>
          <div></div>
        </Layout>
      </Provider>
    ).toJSON()

    expect( propedLayout ).toMatchSnapshot()
  })
})
