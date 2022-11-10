import Header from "./header"
import Menu from './menu'
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.css'
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
