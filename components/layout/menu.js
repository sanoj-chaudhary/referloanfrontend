import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubMenu from './subMenu';
const Menu = () => {
    //console.log(process.env.APP_URL)
    const [headermenu, setHeaderMenu] = useState([])
    const getheaderMenu = async () => {
        try {
            const res = await axios.get(`${process.env.APP_URL}/headermenu`);
            
            setHeaderMenu(res.data);
        }
        catch (err) {
            console.log(err)
        }
    }
    const items =  headermenu.map((item) => (
        <li key={item.id}><Link href={item.slug} ><a className={item.product ? "hasSub_menu" : ''}  title={item.name}>{item.name}</a></Link>
            <div className={item.product ? "megaMenu_container" : ''} >
                <ul className={item.product ? "subMenuLevel2" : ''}>
                    {item.product && item.product.map((value) => (
                        <li key={value.id} className="activeSubMenu"> <Link href={value.slug}  ><a className="" title={value.name}>{value.name}</a></Link>
                            <div className="submenuContainer">
                                <ul>
                                    {value.bank_product && <SubMenu data={value.bank_product} />}
                                </ul>
                            </div>
                           
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
            <div className="mmobile_menu">

                <nav id="menu">
                    <ul>
                        <li>
                            <a target="_blank" href="#" title="Cards"> Cards</a>
                        </li>
                        <li>
                            <span>Loans</span>
                            <ul>
                                <li> <a className="" target="_blank" href="#" title="Personal Loan">Personal Loan</a>
                                </li>
                                <li><a className="" target="_blank" href="#" title="Gold Loan">Gold Loan </a></li>
                                <li><a className="" target="_blank" href="#" title="Education Loan">Education Loan </a>
                                </li>
                                <li><a className="" target="_blank" href="#" title="Home Loan">Home Loan</a></li>
                                <li><a className="" target="_blank" href="#" title="Business Loan">Business Loan</a></li>
                                <li><a className="" target="_blank" href="#" title="Loan">Loan</a></li>
                                {/* <!--  --> */}
                                <li><a className="" target="_blank" href="#" title="ICICI Bank Business Loan Overdraft">ICICI
                                    Bank
                                    Business Loan
                                    Overdraft</a></li>
                                <li><a className="" target="_blank" href="#" title="Tata Capital Used Car Loan">Tata Capital
                                    Used Car Loan</a></li>
                                <li><a className="" target="_blank" href="#" title="Faircent Personal Loan">Faircent
                                    Personal Loan</a></li>
                                <li><a className="" target="_blank" href="#" title="InstaMoney Personal Loan">InstaMoney
                                    Personal Loan</a></li>
                                <li><a className="" target="_blank" href="#" title="MPokket Instant Loan">MPokket Instant
                                    Loan</a></li>
                                {/* <!--  --> */}
                                <li><a className="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBee
                                    Personal Loan </a></li>
                                <li><a className="" target="_blank" href="#" title="Upward Fintech Personal Loan">Upward
                                    Fintech Personal Loan </a></li>
                                <li><a className="" target="_blank" href="#" title="CASHe Personal Loan">CASHe Personal Loan
                                </a></li>
                                <li><a className="" target="_blank" href="#" title="FlexSalary Personal Loan">FlexSalary
                                    Personal Loan </a></li>
                            </ul>

                        </li>
                        <li> <a className="" target="_blank" href="#" title="Insurance">Insurance</a></li>
                        <li><a className="" target="_blank" href="#" title="Investment">Investment</a></li>
                        <li><a className="" target="_blank" href="#" title="Subsidy">Subsidy</a></li>
                        <li><a className="" target="_blank" href="#" title="Knowledge Center">Knowledge Center</a></li>
                        <li><a className="" target="_blank" href="#" title="About">About</a></li>
                        <li><a className="" target="_blank" href="#" title="Franchise">Franchise</a> </li>
                        <li><a className="" target="_blank" href="#" title="Blogs">Blogs</a> </li>
                        <li><a className="" target="_blank" href="#" title="Contact">Contact</a> </li>
                    </ul>
                </nav>
            </div>
            
            <section>
                <div class="container">
                    <div className="customContainer">
                        <div className="mmenu_icon" id="mheader">
                            <a href="#menu"><span></span></a>
                        </div>
                        <a className="logoSection"
                            href="/"><img
                                src="/images/top-logo.png" alt="" title=" referloan " /></a>

                        <div className="info_section">
                            <ul>
                                <li>
                                <Link href="mailto:info@referloan.in"><a><i class="fa fa-envelope" aria-hidden="true"></i> info@referloan.in</a></Link>
                                </li>
                                <li>
                                <Link href="tel:0124-4847123"><a > <i class="fas fa-phone-square-alt"></i>  0124-4847123</a></Link>
                                </li>
                            </ul>
                            <Link href="#"><a ><img src="/images/cibil-score.png" alt="" /></a></Link>
                        </div>

                    </div>
                </div>

            </section>

               

            <nav className=" navBarContainer">
                <div className="container">
                    <ul>
                        {items}
                        <li><Link href="/zero-investment-franchise"><a className="" title="Franchise">Franchise</a></Link></li>
                        <li><Link href="https://blog.referloan.in/"><a  target="_blank" title="Blogs">Blogs</a></Link></li>
                        <li><Link href="/contact"><a className=""  title="Contact">Contact</a></Link></li> 
                    </ul>
                </div>
            </nav >
        </header >
    )
}

export default Menu