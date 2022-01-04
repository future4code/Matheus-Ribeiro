import React, { Component } from "react"
import Home from "./components/Home/Home"
import { GlobalStyle } from "./StyledApp"


export class App extends Component {

   render() {
      return <>
         <GlobalStyle />
         <Home />
      </>
   }
}