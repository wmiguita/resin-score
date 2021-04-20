import { Athelete } from "../athelete"
import { v4 as uuidv4 } from "uuid"

describe( "Athelete model", () => {
  it( "should create user with name", () => {
    const name = "New athelete"
    const athelete = new Athelete({ name })

    expect( athelete.name ).toEqual( name )
  })

  it( "should add uuid to new athelete", () => {
    const athelete = new Athelete({})

    expect( athelete.id ).toBeTruthy()
  })

  it( "should use id from attr on constructor", () => {
    const uuid = uuidv4()
    const athelete = new Athelete({ id: uuid })

    expect( athelete.id ).toEqual( uuid )
  })

  it( "should get plain athelete object", () => {
    const plain = { id: "testid", name: "test name" }
    const athelete = new Athelete( plain )

    expect( athelete.toJSON() ).toEqual( plain )
  })

  it( "should get new athelete instance with null attrs as parameter", () => {
    const plain = { id: "", name: "" }
    const athelete = new Athelete()

    expect( athelete ).toBeInstanceOf( Athelete )
    expect( athelete.toJSON() ).toEqual( plain )
  })

  it( "should get athelete id comparison function", () => {
    const a1 = new Athelete({ id: "id 1", name: "one" })
    const a2 = new Athelete({ id: "id 2", name: "two" })
    const array = [ a1, a2 ]
    const found = array.find( Athelete.byId( a1.id ))

    expect( found ).toEqual( a1 )
  })
})
