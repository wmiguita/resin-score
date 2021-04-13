import slice, {
  toogleDrawer
} from "../userInterface"


describe( "userInterface slice", () => {
  it( "should toogle drawerOpen true", () => {
    const action = toogleDrawer()
    const initialState = { drawerOpen: false }
    const result = slice( initialState, action )

    expect( result.drawerOpen ).toBe( true )
  })

  it( "should toogle drawerOpen false", () => {
    const action = toogleDrawer()
    const initialState = { drawerOpen: true }
    const result = slice( initialState, action )

    expect( result.drawerOpen ).toBe( false )
  })
})
