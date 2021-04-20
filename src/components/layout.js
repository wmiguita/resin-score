import React from "react"

import Header from "./header"
import SideMenu from "./sideMenu"

import themeStyle from "../styles/themeStyle"

//TODO: check if it has to be responsible for detecting wich page is selected?
export function Layout({ children, location }) {
  const classes = themeStyle()

  return (
    <React.Fragment>
      <Header uri={ location.pathname }/>
      <SideMenu uri={ location.pathname }/>
      <main className="content">
        <div className={ classes.appBarSpacer } />
        { children }
      </main>
    </React.Fragment>
  )
}

export default Layout
