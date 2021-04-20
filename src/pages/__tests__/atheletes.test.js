import React from "react"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"

import { wrapComponent, store } from "mock-store"

import { AtheleteDialog } from "../../components/atheletes"
import { Athelete } from "../../models"
import AtheletesPage from "../atheletes"

describe( "Atheletes page", () => {
  it( "renders athelete page on listing tab", () => {
    const page = renderer.create( wrapComponent( <AtheletesPage /> )).toJSON()

    expect( page ).toMatchSnapshot()
  });

  it.skip( "should add athelete onSubmit athelete with null id", () => {
    const atheletes = store.getState().atheleteSlice.list
    const newAthelete = new Athelete({ name: "new athelete" })
    const page = renderer.create( wrapComponent( <AtheletesPage /> ))
    const dialog = page.root.findByType( AtheleteDialog )

    expect.assertions( 1 )
    dialog.props.onSubmit( newAthelete )

    const updated = Promise.resolve( store.getState().atheleteSlice.list.length )
    return expect( updated ).resolves.toEqual( atheletes.length + 1 )
  })
})
