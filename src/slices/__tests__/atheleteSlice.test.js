import slice, {
  addAthelete,
  atheleteList,
  atheleteSlice,
  editAthelete,
  removeAthelete
} from "../atheleteSlice"
import { Athelete, Fail, Success } from "../../models"

describe( "atheleteSlice", () => {

  it( "should add athelete to list", () => {
    const newAthelete = { name: "new athelete" }
    const initialState = { list: [] }
    const result = slice( initialState, addAthelete( newAthelete ))

    expect( result.list[ 0 ].name ).toEqual( newAthelete.name )
  })

  it.todo( "should load atheletes from localstorage" )

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

  it( "should give success feedback on update", () => {
    const listed = new Athelete({ name: 'old name' })
    const state = { list: [ listed ] }
    const newName = new Athelete({ id: listed.id, name: 'new name' })
    const result = slice( state, editAthelete( newName.toJSON() ))

    expect( result.feedback ).toBeInstanceOf( Success )
  })

  it( "should get error feedback  when edit athelete not on list", () => {
    const state = { list: [] }
    const result = slice( state, editAthelete({ id: "id not listed" }))

    expect( result.feedback ).toBeInstanceOf( Fail )
  })

  it( "should remove athelete from", () => {
    const listed = { id: "to be removed", name: "should be removed" }
    const state = { list: [ listed ] }
    const result = slice( state, removeAthelete( listed.id ))

    expect( result.list.length ).toEqual( state.list.length - 1 )
  })
})
