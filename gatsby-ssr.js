import React from "react"
import { Provider } from "react-redux"

import "./src/styles/global.css"
import Layout from "./src/components/layout"
import store from "./src/store"

export const wrapRootElement = ({ element }) => {
  return <Provider store={ store } >{ element }</Provider>
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout { ...props }>{ element }</Layout>
}
