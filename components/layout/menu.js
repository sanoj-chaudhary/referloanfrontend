import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SubMenu from './subMenu'
const Menu = () => {
  const [header, setHeader] = useState([]);

  const getHeaderMenu = async () => {
    const res = await axios.get('/api/headermenu');
    const data = res.data;
    setHeader(data)
  }

  useEffect(() => {
    getHeaderMenu();    
  }, [])

  const items = header.map((item) => (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        {item.name}</a>
      <div className="flyout_Menu_container">
        <ul className="subMenu_Container">
          
              {item.category.map((value)=>(
                 <li className="">
                 <a tabIndex="-1" href="#">{value.name}
                   <span className="material-icons">
                     chevron_right
                   </span>
                 </a>
                 <ul className="">
                  <SubMenu data={value.page} />
                  </ul>
               </li>  
              ))}
            </ul>
         
      </div>
    </li>
  ))




  return (
    <header className='headerWrapper'>
      <div className="customContainer">
        <nav className="navbar navbar-expand-lg navbar-light  navBarContainer">
          <div className="container-fluid navContainer">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link href="/" target="_blank" className="logoSection"><a><img
              src="https://qa.referloan.in/assets/images/top-logo.png" alt="" title=" referloan " /></a>
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="menuBar"></div>
              <ul className="navbar-nav">
                {items}

                <li className="nav-item"><a className="nav-link" target="_blank"
                  href="https://qa.referloan.in/zero-investment-franchise?utm_source=direct_visitors&amp;utm_medium=self&amp;utm_campaign=&amp;utm_id=">
                  {/* <!-- <span className="material-icons">apartment</span>  --> */}
                  Franchise</a></li>

                <li className="nav-item"><a className="nav-link" href="https://blog.referloan.in/" target="blank">
                  {/* <!-- <span  className="material-icons">rss_feed</span>  --> */}
                  Blog</a></li>
                <li className="nav-item active">
                  <Link href="/contact?utm_source=direct_visitors&amp;utm_medium=self&amp;utm_campaign=&amp;utm_id=" target="_blank" className="nav-link" >Contact
                  </Link>

                </li>
              </ul>
            </div>
            <div className="signInSection">
              <a href="#">Free Cibil Score</a>
            </div>
          </div>
        </nav>

      </div>
    </header>
  )
}

export default Menu