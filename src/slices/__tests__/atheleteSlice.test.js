import slice, {
  addAthelete,
  atheleteList,
  atheleteSlice,
  clearAtheleteFeedback,
  editAthelete,
  removeAthelete
} from "../atheleteSlice"
import { Athelete } from "../../models"

describe( "atheleteSlice", () => {
  it( "should add athelete to list", () => {
    const newAthelete = { name: "new athelete" }
    const state = { list: [] }
    const result = slice( state, addAthelete( newAthelete ))

    expect( result.list[ 0 ].name ).toEqual( newAthelete.name )
  })

  it( "should get athelete feedback on add athelete", () => {
    const newAthelete = { name: "new athelete" }
    const state = { list: [] }
    const result = slice( state, addAthelete( newAthelete ))

    expect( result.feedback ).toBeDefined()
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

    expect( result.feedback ).toBeDefined()
  })

  it( "should get error feedback  when edit athelete not on list", () => {
    const state = { list: [] }
    const result = slice( state, editAthelete({ id: "id not listed" }))

    expect( result.feedback ).toBeDefined()
  })

  it( "should remove athelete from", () => {
    const listed = { id: "to be removed", name: "should be removed" }
    const state = { list: [ listed ] }
    const result = slice( state, removeAthelete( listed.id ))

    expect( result.list.length ).toEqual( state.list.length - 1 )
  })

  it( "should get success feedback on remove", () => {
    const listed = { id: "to be removed", name: "should be removed" }
    const state = { list: [ listed ] }
    const result = slice( state, removeAthelete( listed.id ))

    expect( result.feedback.success ).toEqual( true )
  })

  it( "should get error feedback on remove not found", () => {
    const listed = { id: "to be removed", name: "should be removed" }
    const state = { list: [ listed ] }
    const result = slice( state, removeAthelete( "wrong id" ))

    expect( result.feedback.error ).toEqual( true )
  })

  it( "should clear feedback", () => {
    const state = { feedback: { message: "old message" }}
    const result = slice( state, clearAtheleteFeedback() )

    expect( result.feedback ).toBeNull()
  })
})
