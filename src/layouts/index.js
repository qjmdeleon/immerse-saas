import React from "react"
import { createGlobalStyle } from "styled-components"
import Navbar from "../components/Navbar"

const Global = createGlobalStyle`

    
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }
`

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Global />
      <Navbar />
      <div className="content">{children}</div>
    </div>
  )
}
