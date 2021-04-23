import Feedback, { Success, Fail } from "../feedback"

describe( "Feedback model", () => {
  it( "should get Feedback instance", () => {
    const result = new Feedback()

    expect( result ).toBeInstanceOf( Feedback )
  })

  it( "should get Feedback with default error false", () => {
    const result = new Feedback()

    expect( result.error ).toBe( false )
  })

  it( "should get Feedback with message", () => {
    const message = "Feedback message"
    const result = new Feedback( message )

    expect( result.message ).toEqual( message )
  })

  it( "should get Feedback with default success true", () => {
    const result = new Feedback()

    expect( result.success ).toBe( true )
  })

  it( "should get Feedback with message with success true", () => {
    const message = "Feedback message"
    const result = new Feedback( message )

    expect( result.success ).toBe( true )
  })

  it( "should get Feedback with object attributes", () => {
    const attrs = { message: "message", success: true, error: true }
    const result = new Feedback( attrs )

    expect( result.message ).toEqual( attrs.message )
    expect( result.success ).toEqual( attrs.success )
    expect( result.error ).toEqual( attrs.error )
  })

  it( "should get default true on Feedback success with empty attrs args", () => {
    const result = new Feedback({})

    expect( result.success ).toEqual( true )
  })

  it( "should get default false on Feedback error with empty attrs args", () => {
    const result = new Feedback({})

    expect( result.error ).toEqual( false )
  })
})

describe( "Success feedback", () => {
  it( "should get Success feedback with default true on success attribute", () => {
    const result = new Success()

    expect( result.success ).toEqual( true )
  })

  it( "should ignore error true on args", () => {
    const result = new Success({ error: true })

    expect( result.error ).toEqual( false )
  })
})

describe( "Fail Feedback", () => {
  it( "should get Fail feedback with default true on error attribute", () => {
    const result = new Fail()

    expect( result.error ).toEqual( false )
  })

  it( "should ignore success true on args", () => {
    const result = new Fail({ success: true })

    expect( result.success ).toEqual( false )
  })

  it( "should get success with message", () => {
    const message = "success message"
    const result = new Success( message )

    expect( result.message ).toEqual( message )
  })
})
