import React from "react"

import Header from "./header"
import SideMenu from "./sideMenu"

//TODO: check if it has to be responsible for detecting wich page is selected?
export default function Layout({ children }) {
  let layout = [
    <Header key="header" />,
    <SideMenu key="sideMenu" />
  ]

  //return layout.concat( children )
  return (
    <div className="page-layout-wrapper">
      <Header />
      <SideMenu />
      { children }
    </div>
  )
}
