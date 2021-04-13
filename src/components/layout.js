import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./header"
import SideMenu from "./sideMenu"

const useStyles = makeStyles(( theme ) => ({
  appBarSpacer: theme.mixins.toolbar
}))

//TODO: check if it has to be responsible for detecting wich page is selected?
export default function Layout({ children }) {
  const classes = useStyles()

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
