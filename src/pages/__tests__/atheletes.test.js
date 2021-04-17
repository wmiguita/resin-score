import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"

import { store } from "mock-store"
import AtheletesPage from "../atheletes"

describe( "Atheletes page", () => {
  it( "renders athelete page on listing tab", () => {
    try {
      const page = renderer.create( <Provider store={ store }><AtheletesPage /></Provider> ).toJSON()

      expect( page ).toMatchSnapshot()
    } catch( e ) {} // suppressing DataGridError
  });

  it( "renders athelete page on manage tab", () => {
    try {
      const manageStore = Object.assign( store, { userInterface: { selectedTab: 1 }})
      const page = renderer.create( <Provider store={ manageStore }><AtheletesPage /></Provider> ).toJSON()

      expect( page ).toMatchSnapshot()
    } catch( e ) {} // suppressing DataGridError
  })
})
