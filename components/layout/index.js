import Header from "./header"
import Menu from './menu'
import Footer from "./footer"
import Script from "next/script"
import 'bootstrap/dist/css/bootstrap.css'

export default function Layout(props) {
  return (<>
    <Header { ...props } ></Header>
    <Menu />
    { props.children }

    <Footer />
    
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous" />
  </>
  )
}
