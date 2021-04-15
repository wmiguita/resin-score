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
})
