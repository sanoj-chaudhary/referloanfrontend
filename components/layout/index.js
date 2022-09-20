import Header from "./header"
import Menu from './menu'
import Footer from "./footer"
export default function Layout(props) {
  return (<>
    <Header { ...props } ></Header>
    <Menu />
    { props.children }

    <Footer />
  </>
  )
}
