import slice, {
  addAthelete,
  atheleteList,
  atheleteSlice,
  editAthelete
} from "../atheleteSlice"
import { Athelete } from "../../models"

describe( "atheleteSlice", () => {

  it( "should add athelete to list", () => {
    const newAthelete = { name: "new athelete" }
    const initialState = { list: [] }
    const result = slice( initialState, addAthelete( newAthelete ))

    expect( result.list[ 0 ].name ).toEqual( newAthelete.name )
  })

  it.skip( "should load atheletes from localstorage", () => {
    console.log( "atheleteSlice.test atheleteSlice:", atheleteSlice )
  })

  it( "should not have colateral change on athelete", () => {
    const listed = new Athelete( { name: "listed athelete" } )
    const state = { atheleteSlice: { list: [ listed ] }}

    let athelete = atheleteList( state )[ 0 ]

    athelete.name = "altered name"

    expect( listed.name ).not.toEqual( athelete.name )
  })

  it( "should update listed athelete name", () => {
    const listed = new Athelete({ name: 'old name' })
    const state = { list: [ listed ] }
    const newName = new Athelete({ id: listed.id, name: 'new name' })
    const result = slice( state, editAthelete( newName.toJSON() ))

    expect( result.list[ 0 ].name ).toEqual( newName.name )
  })

  // TODO: way to handle errors
  it( "should not throw error when edit athelete not on list", () => {
    const state = { list: [] }
    const result = slice( state, editAthelete({ id: "id not listed" }))
  })
})
