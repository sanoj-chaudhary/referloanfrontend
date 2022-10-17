import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubMenu from './subMenu';
const Menu = (props) => {
    const [headermenu, setHeaderMenu] = useState([])
    console.log("headermenu",headermenu)
    const getheaderMenu = async () => {
        try {
            const res = await axios.get('api/headermenu');
            setHeaderMenu(res.data);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getheaderMenu();
    }, []);

    const items = headermenu && headermenu.map((item) => (
        <li key={item.id}><Link href={item.slug} ><a className={item.product ? "hasSub_menu" : ''}  title={item.name}>{item.name}</a></Link>
            <div className={item.product ? "megaMenu_container" : ''} >
                <ul className={item.product ? "subMenuLevel2" : ''}>
                    {item.product && item.product.map((value) => (
                        <li key={value.id} className="activeSubMenu"> <Link href={value.slug}  ><a className="" title="{value.name}">{value.name}</a></Link>
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
                            <img src="/images/icon/email-icon.png" alt="" /><a
                                href="mailto:info@referloan.in">info@referloan.in</a>
                        </li>
                        <li>
                            <img src="/images/icon/call-icon.png" alt="" /><a href="tel:0124-4847123">0124-4847123</a>
                        </li>
                    </ul>
                    <a href="#"><img style={{ "marginTop":'-14px','height':'36px' }} src="/images/CIBIL Score.gif" alt="" /></a>
                </div>

            </div>

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

export async function getServerSideProps() {

    const res = await axios.get("http://localhost:3000/api/headermenu");
    const data = await res.data;

    return { props: { data } }
}


export default Menu