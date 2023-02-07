import Header from "./Header"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import 'bootstrap/dist/css/bootstrap.css'


export default function CustomerLayout(props) {

  return (<>
    <Header {...props} ></Header>
    <div className="scrn-container">
      <div className="layout has-sidebar fixed-sidebar fixed-header">
        <Sidebar />
        <div id="overlay" className="overlay"></div>
        <div className="layout">
          <Navbar />
          <main className="content">
          {props.children}
          </main>
      
        </div>
      </div>
    </div>
  </>
  )
}