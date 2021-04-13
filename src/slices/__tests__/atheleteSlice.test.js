import slice, {
  addAthelete,
  atheleteList
} from "../atheleteSlice"
import { Athelete } from "../../models"

describe( "atheleteSlice", () => {

  it( "should add athelete to list", () => {
    const newAthelete = new Athelete( { name: "new athelete" } )
    const initialState = { list: [] }
    const result = slice( initialState, addAthelete( newAthelete ))

    expect( result.list.length ).toBe( 1 )
  })

  it.skip( "should not have colateral change on athelete", () => {
    const listed = new Athelete( { name: "listed athelete" } )
    const state = { atheleteSlice: { list: [ listed ] }}

    let athelete = atheleteList( state )[ 0 ]

    athelete.name = "altered name"

    expect( listed.name ).not.toEqual( athelete.name )
  })
})
