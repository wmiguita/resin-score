import React from "react"

import Header from "./header"
import SideMenu from "./sideMenu"

import themeStyle from "../themeStyle"

//TODO: check if it has to be responsible for detecting wich page is selected?
export default function Layout({ children }) {
  const classes = themeStyle()

  return (
    <div className="page-layout-wrapper">
      <Header />
      <SideMenu />
      <main className="content">
        <div className={classes.appBarSpacer} />
        { children }
      </main>
    </div>
  )
}
