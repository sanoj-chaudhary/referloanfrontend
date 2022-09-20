import Link from 'next/link'
const Menu = () => {
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
            <Link href="/" target="_blank" className="logoSection"><img
              src="https://qa.referloan.in/assets/images/top-logo.png" alt="" title=" referloan " />
            </Link>
            {/* <a className="logoSection"
              href="https://qa.referloan.in?utm_source=direct_visitors&amp;utm_medium=self&amp;utm_campaign=&amp;utm_id=">
               </a> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="menuBar"></div>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    {/* <!-- <span className="material-icons">real_estate_agent</span> --> */}
                    Products </a>
                  <div className="flyout_Menu_container">
                    <ul className="subMenu_Container">

                      <li className="">
                        <a tabIndex="-1" href="#">Personal Loan
                          <span className="material-icons">
                            chevron_right
                          </span>
                        </a>

                        <ul className="">
                          <li className=""><a tabIndex="-1" href="#">Pre-advice</a></li>
                          <li className=""><a href="#">Strategy & Technical</a></li>
                          <li className=""><a href="#">Research</a></li>
                          <li className="">
                            <a href="#">APL & Products
                              <span className="material-icons">
                                chevron_right
                              </span>
                            </a>

                            <ul className="parent">
                              <li>
                                <a href="#">
                                  Approved Product List
                                </a>
                              </li>
                              <li ><a href="#">Model Portfolios</a></li>
                              <li ><a href="#">Non-approved Products</a></li>
                            </ul>
                          </li>
                          <li className=""><a href="#">Implementation</a></li>
                          <li className=""><a href="#">Review</a></li>
                          <li className=""><a href="#">Execution Only</a></li>
                        </ul>
                      </li>
                      <li ><a href="#">Gold Loan</a></li>
                      <li ><a href="#">Business Loan</a></li>
                      <li ><a href="#">Education Loan</a></li>
                      <li ><a href="#">Home Loan</a></li>
                      <li ><a href="#">Bajaj Finserv Home Loan</a></li>
                      <li ><a href="#">ICICI Bank Business Loan Overdraft</a></li>
                      <li ><a href="#">Tata Capital Used Car Loan</a></li>
                      <li ><a href="#">Bajaj Housing Finance Loan Against Property</a></li>

                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    {/* <!-- <span className="material-icons">school</span> --> */}
                    Knowledge Center
                  </a>
                </li>
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