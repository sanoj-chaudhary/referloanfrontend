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
    <li key={item.id} className="nav-item dropdown">
      <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        {item.name}</a>
      <div className="flyout_Menu_container">
        <ul className="subMenu_Container">
          
              {item.category.map((value)=>(
                 <li key={value.id} className="">
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
    <header>
        <div class="mmobile_menu">

            <nav id="menu">
                <ul>
                    <li>
                        <a target="_blank" href="#" title="Cards"> Cards</a>
                    </li>
                    <li>
                        <span>Loans</span>
                        <ul>
                            <li> <a class="" target="_blank" href="#" title="Personal Loan">Personal Loan</a>
                            </li>
                            <li><a class="" target="_blank" href="#" title="Gold Loan">Gold Loan </a></li>
                            <li><a class="" target="_blank" href="#" title="Education Loan">Education Loan </a>
                            </li>
                            <li><a class="" target="_blank" href="#" title="Home Loan">Home Loan</a></li>
                            <li><a class="" target="_blank" href="#" title="Business Loan">Business Loan</a></li>
                            <li><a class="" target="_blank" href="#" title="Loan">Loan</a></li>
                            
                            <li><a class="" target="_blank" href="#" title="ICICI Bank Business Loan Overdraft">ICICI
                                    Bank
                                    Business Loan
                                    Overdraft</a></li>
                            <li><a class="" target="_blank" href="#" title="Tata Capital Used Car Loan">Tata Capital
                                    Used Car Loan</a></li>
                            <li><a class="" target="_blank" href="#" title="Faircent Personal Loan">Faircent
                                    Personal Loan</a></li>
                            <li><a class="" target="_blank" href="#" title="InstaMoney Personal Loan">InstaMoney
                                    Personal Loan</a></li>
                            <li><a class="" target="_blank" href="#" title="MPokket Instant Loan">MPokket Instant
                                    Loan</a></li>
                            
                            <li><a class="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBee
                                    Personal Loan </a></li>
                            <li><a class="" target="_blank" href="#" title="Upward Fintech Personal Loan">Upward
                                    Fintech Personal Loan </a></li>
                            <li><a class="" target="_blank" href="#" title="CASHe Personal Loan">CASHe Personal Loan
                                </a></li>
                            <li><a class="" target="_blank" href="#" title="FlexSalary Personal Loan">FlexSalary
                                    Personal Loan </a></li>
                        </ul>

                    </li>
                    <li> <a class="" target="_blank" href="#" title="Insurance">Insurance</a></li>
                    <li><a class="" target="_blank" href="#" title="Investment">Investment</a></li>
                    <li><a class="" target="_blank" href="#" title="Subsidy">Subsidy</a></li>
                    <li><a class="" target="_blank" href="#" title="Knowledge Center">Knowledge Center</a></li>
                    <li><a class="" target="_blank" href="#" title="About">About</a></li>
                    <li><a class="" target="_blank" href="#" title="Franchise">Franchise</a> </li>
                    <li><a class="" target="_blank" href="#" title="Blogs">Blogs</a> </li>
                    <li><a class="" target="_blank" href="#" title="Contact">Contact</a> </li>
                </ul>
            </nav>
        </div>


        <div class="customContainer">
            <div class="mmenu_icon" id="mheader">
                <a href="#menu"><span></span></a>
            </div>
            <a class="logoSection"
                href="https://qa.referloan.in?utm_source=direct_visitors&amp;utm_medium=self&amp;utm_campaign=&amp;utm_id="><img
                    src="https://qa.referloan.in/assets/images/top-logo.png" alt="" title=" referloan " /></a>

            <div class="info_section">
                <ul>
                    <li>
                        <img src="assets/images/icon/email-icon.png" alt="" /><a
                            href="mailto:info@referloan.in">info@referloan.in</a>
                    </li>
                    <li>
                        <img src="assets/images/icon/call-icon.png" alt="" /><a href="tel:0124-4847123">0124-4847123</a>
                    </li>
                </ul>
                <a href="#"><img src="assets/images/icon/cibil-btn.png" alt="" /></a>
            </div>

        </div>
        <nav class=" navBarContainer">
            <div class="container">
                <ul>
                    <li>
                        <a target="_blank" href="#" title="Cards"> Cards</a>

                    </li>
                    <li> <a class="hasSub_menu" target="_blank" href="#" title="Loan"> Loan</a>
                        <div class="megaMenu_container">
                            <ul>
                                <li> <a class="" target="_blank" href="#" title="Personal Loan">Personal Loan</a>
                                </li>
                                <li><a class="" target="_blank" href="#" title="Gold Loan">Gold Loan </a></li>
                                <li><a class="" target="_blank" href="#" title="Education Loan">Education Loan </a>
                                </li>
                                <li><a class="" target="_blank" href="#" title="Home Loan">Home Loan</a></li>
                                <li><a class="" target="_blank" href="#" title="Business Loan">Business Loan</a></li>
                                <li><a class="" target="_blank" href="#" title="Loan">Loan</a></li>
                            </ul>
                            <ul>
                                <li><a class="" target="_blank" href="#"
                                        title="ICICI Bank Business Loan Overdraft">ICICI
                                        Bank Business Loan
                                        Overdraft</a></li>
                                <li><a class="" target="_blank" href="#" title="Tata Capital Used Car Loan">Tata Capital
                                        Used Car Loan</a></li>
                                <li><a class="" target="_blank" href="#" title="Faircent Personal Loan">Faircent
                                        Personal Loan</a></li>
                                <li><a class="" target="_blank" href="#" title="InstaMoney Personal Loan">InstaMoney
                                        Personal Loan</a></li>
                                <li><a class="" target="_blank" href="#" title="MPokket Instant Loan">MPokket Instant
                                        Loan</a></li>
                            </ul>
                            <ul>
                                <li><a class="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBee
                                        Personal Loan </a></li>
                                <li><a class="" target="_blank" href="#" title="Upward Fintech Personal Loan">Upward
                                        Fintech Personal Loan </a></li>
                                <li><a class="" target="_blank" href="#" title="CASHe Personal Loan">CASHe Personal Loan
                                    </a></li>
                                <li><a class="" target="_blank" href="#" title="FlexSalary Personal Loan">FlexSalary
                                        Personal Loan </a></li>
                            </ul>
                            <div class="menu_imgBox">
                                <img src="assets/images/pl-bnr-icon.png" alt="" />
                            </div>
                        </div>
                    </li>
                    <li> <a class="" target="_blank" href="#" title="Insurance">Insurance</a></li>
                    <li><a class="" target="_blank" href="#" title="Investment">Investment</a></li>
                    <li><a class="" target="_blank" href="#" title="Subsidy">Subsidy</a></li>
                    <li><a class="" target="_blank" href="#" title="Knowledge Center">Knowledge Center</a></li>
                    <li><a class="" target="_blank" href="#" title="About">About</a></li>
                    <li><a class="" target="_blank" href="#" title="Franchise">Franchise</a> </li>
                    <li><a class="" target="_blank" href="#" title="Blogs">Blogs</a> </li>
                    <li><a class="" target="_blank" href="#" title="Contact">Contact</a> </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Menu