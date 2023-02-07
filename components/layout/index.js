import Header from "./header"
import Menu from './menu'
import Footer from "./footer"

import { useEffect } from "react"

export default function Layout(props) {

  return (<>
    <Header { ...props } ></Header>
    <Menu />
    { props.children }
     <Footer /> 
  </>
  )
}
