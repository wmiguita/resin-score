import slice, {
  goTo,
  toggleDrawer
} from "../userInterface"


describe( "userInterface slice", () => {
  it( "should toggle drawerOpen true", () => {
    const action = toggleDrawer()
    const initialState = { drawerOpen: false }
    const result = slice( initialState, action )

    expect( result.drawerOpen ).toBe( true )
  })

  it( "should toggle drawerOpen false", () => {
    const action = toggleDrawer()
    const initialState = { drawerOpen: true }
    const result = slice( initialState, action )

    expect( result.drawerOpen ).toBe( false )
  })

  it.skip( "should change path", () => {
    const path = "/any-path"
    const navigate = goTo( path )
    const initialState = { path: "/old-path" }
    const result = slice( initialState, navigate )

    expect( result.path ).toEqual( path )
  })
})
