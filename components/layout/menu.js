import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubMenu from './subMenu';
import $ from 'jquery';
import Script from 'next/script';

const Menu = () => {
    //console.log(process.env.APP_URL)
    const [headermenu, setHeaderMenu] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };
    const getheaderMenu = async () => {
        try {
            const res = await axios.get(`${process.env.APP_URL}/headermenu`);
            
            setHeaderMenu(res.data);
        }
        catch (err) {
            console.log(err)
        }
    }
    const items =  headermenu.map((item, index) => (
        item.hierarchy=='Product_BankProduct'?<li key={item.id}><Link href={item.slug} ><a className={item.product ? "hasSub_menu" : ''}  title={item.name}>{item.name}</a></Link>
        <div className={item.product ? "megaMenu_container" : ''} >
            <ul className={item.product ? "subMenuLevel2" : ''}>
                {item.product && item.product.map((value, Indexkey) => (
                    <li key={value.id} 
                        className={Indexkey ? "activeSubMenu" : "activeSubMenu menu-active" && isHovering ? 'activeSubMenu' : 'activeSubMenu menu-active'}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    > <Link href={value.slug}  ><a  title={value.name}>{value.name}</a></Link>
                        <div className="submenuContainer">
                            <ul>
                                {value.bank_product && <SubMenu data={value.bank_product} />}
                            </ul>
                        </div>
                       
                    </li>
                ))}
            </ul>
        </div>
    </li>:<li key={item.id}><Link href={item.slug} ><a className={item.page ? "hasSub_menu" : ''}  title={item.name}>{item.name}</a></Link>
        <div className={item.page ? "megaMenu_container" : ''} >
            <ul className={item.page ? "subMenuLevel2" : ''}>
                {item.page && item.page.map((value, Indexkey) => (
                    <li key={value.id} 
                        className={Indexkey ? "activeSubMenu" : "activeSubMenu menu-active" && isHovering ? 'activeSubMenu' : 'activeSubMenu menu-active'}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    > <Link href={value.slug}  ><a style={{ textTransform: 'capitalize' }} title={value.name}>{value.name}</a></Link>  
                    </li>
                ))}
            </ul>
        </div>
    </li>
        
    ))

    useEffect(() => {
        getheaderMenu();
    }, []);
    return (
        <header>
            <div className="mmobile_menu d-none">

                <nav id="menu">
                    <ul>
                        <li>
                            <a target="_blank" href="#" title="Cards"> Cards</a>
                        </li>
                        <li>
                            <span>Loans</span>
                            <ul>
                                <li> <a  target="_blank" href="#" title="Personal Loan">Personal Loan</a>
                                </li>
                                <li><a  target="_blank" href="#" title="Gold Loan">Gold Loan </a></li>
                                <li><a  target="_blank" href="#" title="Education Loan">Education Loan </a>
                                </li>
                                <li><a  target="_blank" href="#" title="Home Loan">Home Loan</a></li>
                                <li><a  target="_blank" href="#" title="Business Loan">Business Loan</a></li>
                                <li><a  target="_blank" href="#" title="Loan">Loan</a></li>
                                {/* <!--  --> */}
                                <li><a  target="_blank" href="#" title="ICICI Bank Business Loan Overdraft">ICICI
                                    Bank
                                    Business Loan
                                    Overdraft</a></li>
                                <li><a  target="_blank" href="#" title="Tata Capital Used Car Loan">Tata Capital
                                    Used Car Loan</a></li>
                                <li><a  target="_blank" href="#" title="Faircent Personal Loan">Faircent
                                    Personal Loan</a></li>
                                <li><a  target="_blank" href="#" title="InstaMoney Personal Loan">InstaMoney
                                    Personal Loan</a></li>
                                <li><a  target="_blank" href="#" title="MPokket Instant Loan">MPokket Instant
                                    Loan</a></li>
                                {/* <!--  --> */}
                                <li><a  target="_blank" href="#" title="KreditBee Personal Loan">KreditBee
                                    Personal Loan </a></li>
                                <li><a  target="_blank" href="#" title="Upward Fintech Personal Loan">Upward
                                    Fintech Personal Loan </a></li>
                                <li><a  target="_blank" href="#" title="CASHe Personal Loan">CASHe Personal Loan
                                </a></li>
                                <li><a  target="_blank" href="#" title="FlexSalary Personal Loan">FlexSalary
                                    Personal Loan </a></li>
                            </ul>

                        </li>
                        <li> <a  target="_blank" href="#" title="Insurance">Insurance</a></li>
                        <li><a  target="_blank" href="#" title="Investment">Investment</a></li>
                        <li><a  target="_blank" href="#" title="Subsidy">Subsidy</a></li>
                        <li><a  target="_blank" href="#" title="Knowledge Center">Knowledge Center</a></li>
                        <li><a  target="_blank" href="#" title="About">About</a></li>
                        <li><a  target="_blank" href="#" title="Franchise">Franchise</a> </li>
                        <li><a  target="_blank" href="#" title="Blogs">Blogs</a> </li>
                        <li><a  target="_blank" href="#" title="Contact">Contact</a> </li>
                    </ul>
                </nav>
            </div>
            
            <section>
                <div className="container">
                    <div className="customContainer">
                        <div className="mmenu_icon" id="mheader">
                            <a href="#menu"><span></span></a>
                        </div>
                        <Link  href="/"><a className="logoSection"
                           ><img
                                src="/images/top-logo.png" alt="" title=" referloan " /></a></Link>

                        <div className="info_section">
                            <ul>
                                <li>
                                <Link href="mailto:info@referloan.in"><a><i className="fa fa-envelope" aria-hidden="true"></i> info@referloan.in</a></Link>
                                </li>
                                <li>
                                <Link href="tel:0124-4847123"><a > <i className="fas fa-phone-square-alt"></i>  0124-4847123</a></Link>
                                </li>
                            </ul>
                            <Link href="#"><a ><img src="/images/CIBIL Score.gif" alt="" /></a></Link>
                        </div>

                    </div>
                </div>

            </section>

            <nav className=" navBarContainer"> 
                <div className="container">
                    <ul>
                        {items}
                        <li><Link href="/zero-investment-franchise"><a  title="Franchise">Franchise</a></Link></li>
                        <li><Link href="https://blog.referloan.in/"><a  target="_blank" title="Blogs">Blogs</a></Link></li>
                        <li><Link href="/contact"><a   title="Contact">Contact</a></Link></li> 
                    </ul>
                </div>
            </nav >
        </header >

    )

}

export default Menu