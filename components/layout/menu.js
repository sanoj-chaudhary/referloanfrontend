import axios from "axios";
import { useEffect, useState } from "react";
import SubMenu from './subMenu';
const Menu = (props) => {
    const [headermenu, setHeaderMenu] = useState([])
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

    const items = headermenu.map((item) => (
        <li key={item.id}><a className={item.product ? "hasSub_menu" : ''} target="_blank" href="#" title="Loan">{item.name}</a>
            <div className={item.product ? "megaMenu_container" : ''} >
                <ul className={item.product ? "subMenuLevel2" : ''}>
                    {item.product && item.product.map((value) => (
                        <li key={value.id} className="activeSubMenu"> <a className="" target="_blank" href="#" title="Card 1">{value.name}</a>
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
        // <header>
        //     <div className="mmobile_menu d-sm-none d-block">
        //         <nav id="menu">
        //             <ul>
        //                 {menu && menu.map((item, index) =>
        //                     <li key={index}><Link href="{item.id}"><a title="{item.name}">{item.name}</a></Link></li>
        //                 )}
        //                 <li><a target="_blank" href="#" title="Cards"> Cards</a></li>
        //                 <li>
        //                     <span>Loans</span>
        //                     <ul>
        //                         <li><a className="" target="_blank" href="#" title="Personal Loan">Personal Loan</a></li>
        //                         <li><a className="" target="_blank" href="#" title="Business Loan">Business Loan</a></li>
        //                         {/* <!--  --> */}
        //                         <li><a className="" target="_blank" href="#" title="InstaMoney Personal Loan">InstaMoneyPersonal Loan</a></li>
        //                         <li><a className="" target="_blank" href="#" title="MPokket Instant Loan">MPokket InstantLoan</a></li>
        //                         {/* <!--  --> */}
        //                         <li><a className="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBeePersonal Loan </a></li>
        //                         <li><a className="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBeePersonal Loan </a></li>
        //                     </ul>
        //                 </li>

        //                 <li><a className="" target="_blank" href="#" title="About">About</a></li>
        //                 <li><a className="" target="_blank" href="#" title="Franchise">Franchise</a> </li>
        //                 <li><a className="" target="_blank" href="#" title="Blogs">Blogs</a> </li>
        //                 <li><a className="" target="_blank" href="#" title="Contact">Contact</a> </li>
        //             </ul>
        //         </nav>
        //     </div>


        // <div className="customContainer">
        //     <div className="mmenu_icon" id="mheader">
        //         <a href="#menu"><span></span></a>
        //     </div>
        //     <a className="logoSection"
        //         href="https://qa.referloan.in?utm_source=direct_visitors&amp;utm_medium=self&amp;utm_campaign=&amp;utm_id="><img
        //             src="/images/top-logo.png" alt="" title=" referloan " /></a>

        //     <div className="info_section">
        //         <ul>
        //             <li>
        //                 <img src="/images/icon/email-icon.png" alt="" /><a
        //                     href="mailto:info@referloan.in">info@referloan.in</a>
        //             </li>
        //             <li>
        //                 <img src="/images/icon/call-icon.png" alt="" /><a href="tel:0124-4847123">0124-4847123</a>
        //             </li>
        //         </ul>
        //         <a href="#"><img src="/images/CIBIL Score.gif" alt="" /></a>
        //     </div>

        // </div>

        //     <nav className="navBarContainer d-sm-block d-none">
        //         <div className="container">
        //             <ul>
        //                 {menu && menu.map((item, index) =>
        //                     <li key={index}><Link href="{item.slug}"><a title="{item.name}">{item.name}</a></Link></li>
        //                 )}
        //                 <li><a target="_blank" href="#" title="Cards"> Cards</a></li>
        //                 <li> <a className="hasSub_menu" target="_blank" href="#" title="Loan"> Loan</a>
        //                     <div className="megaMenu_container">
        //                         <ul>
        //                             <li><a className="" target="_blank" href="#" title="Home Loan">Home Loan</a></li>
        //                             <li><a className="" target="_blank" href="#" title="Business Loan">Business Loan</a></li>
        //                         </ul>
        //                         <ul>
        //                             <li><a className="" target="_blank" href="#" title="Tata Capital Used Car Loan">Tata Capital Used Car Loan</a></li>
        //                             <li><a className="" target="_blank" href="#" title="Faircent Personal Loan">Faircent Personal Loan</a></li>
        //                         </ul>
        //                         <ul>
        //                             <li><a className="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBee Personal Loan </a></li>
        //                             <li><a className="" target="_blank" href="#" title="Upward Fintech Personal Loan">Upward Fintech Personal Loan </a></li>
        //                         </ul>
        //                         <div className="menu_imgBox">
        //                             <img src="/images/pl-bnr-icon.png" alt="" />
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li> <a className="" target="_blank" href="#" title="Insurance">Insurance</a></li>
        //                 <li><a className="" target="_blank" href="#" title="Investment">Investment</a></li>
        //                 <li><a className="" target="_blank" href="#" title="Subsidy">Subsidy</a></li>
        //                 <li><a className="" target="_blank" href="#" title="Knowledge Center">Knowledge Center</a></li>
        //                 <li><a className="" target="_blank" href="#" title="About">About</a></li>
        //                 <li><a className="" target="_blank" href="#" title="Franchise">Franchise</a> </li>
        //                 <li><a className="" target="_blank" href="#" title="Blogs">Blogs</a> </li>
        //                 <li><a className="" target="_blank" href="#" title="Contact">Contact</a> </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </header>
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
                    href="https://qa.referloan.in?utm_source=direct_visitors&amp;utm_medium=self&amp;utm_campaign=&amp;utm_id="><img
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
                        {/* <li><a className="hasSub_menu" target="_blank" href="#" title="Loan"> Card</a>
                            <div className="megaMenu_container">
                                <ul className="subMenuLevel2">
                                    <li className="activeSubMenu"> <a className="" target="_blank" href="#" title="Card 1">Card 1</a>
                                        <div className="submenuContainer">
                                            <ul>
                                                <li><a className="" target="_blank" href="#"
                                                    title="ICICI Bank Business Loan Overdraft">ICICI
                                                    Bank Business Loan
                                                    Overdraft</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="Tata Capital Used Car Loan">Tata Capital
                                                    Used Car Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="Faircent Personal Loan">Faircent
                                                    Personal Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="InstaMoney Personal Loan">InstaMoney
                                                    Personal Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="MPokket Instant Loan">MPokket Instant
                                                    Loan 55</a></li>
                                            </ul>
                                        </div>

                                    </li>
                                    <li><a className="" target="_blank" href="#" title="Loan">Card 2</a>
                                        <div className="submenuContainer">
                                            <ul>
                                                <li><a className="" target="_blank" href="#"
                                                    title="ICICI Bank Business Loan Overdraft">
                                                    Bank Business Loan
                                                    Overdraft</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="Tata Capital Used Car Loan"> Capital
                                                    Used Car Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="Faircent Personal Loan">Faircent
                                                    Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="InstaMoney Personal Loan">
                                                    Personal Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="MPokket Instant Loan">MPokket Instant
                                                    Loan</a></li>
                                            </ul>
                                            <ul>
                                                <li><a className="" target="_blank" href="#"
                                                    title="ICICI Bank Business Loan Overdraft">
                                                    Bank Business Loan
                                                    Overdraft</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="Tata Capital Used Car Loan"> Capital
                                                    Used Car Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="Faircent Personal Loan">Faircent
                                                    Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="InstaMoney Personal Loan">
                                                    Personal Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="MPokket Instant Loan">MPokket Instant
                                                    Loan</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a className="" target="_blank" href="#" title="Loan">Card 3</a>
                                        <div className="submenuContainer">
                                            <ul>
                                                <li><a className="" target="_blank" href="#"
                                                    title="Faircent Personal Loan">Faircent
                                                    Personal Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="InstaMoney Personal Loan">InstaMoney
                                                    Personal Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="MPokket Instant Loan">MPokket Instant
                                                    Loan</a></li>
                                            </ul>
                                        </div></li>
                                    <li><a className="" target="_blank" href="#" title="Loan">Card 4</a>
                                        <div className="submenuContainer">
                                            <ul>


                                                <li><a className="" target="_blank" href="#"
                                                    title="InstaMoney Personal Loan">InstaMoney
                                                    Personal Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="MPokket Instant Loan">MPokket Instant
                                                    Loan</a></li>
                                                <li><a className="" target="_blank" href="#"
                                                    title="Faircent Personal Loan">Faircent
                                                    Personal Loan</a></li>
                                            </ul>
                                        </div></li>
                                </ul>

                            </div>
                        </li>
                        <li><a className="hasSub_menu" target="_blank" href="#" title="Loan"> Loan</a>
                            <div className="megaMenu_container">
                                <ul>
                                    <li> <a className="" target="_blank" href="#" title="Personal Loan">Personal Loan</a>
                                    </li>
                                    <li><a className="" target="_blank" href="#" title="Gold Loan">Gold Loan </a></li>
                                    <li><a className="" target="_blank" href="#" title="Education Loan">Education Loan </a>
                                    </li>
                                    <li><a className="" target="_blank" href="#" title="Home Loan">Home Loan</a></li>
                                    <li><a className="" target="_blank" href="#" title="Business Loan">Business Loan</a></li>
                                    <li><a className="" target="_blank" href="#" title="Loan">Loan</a></li>
                                </ul>
                                <ul>
                                    <li><a className="" target="_blank" href="#"
                                        title="ICICI Bank Business Loan Overdraft">ICICI
                                        Bank Business Loan
                                        Overdraft</a></li>
                                    <li><a className="" target="_blank" href="#" title="Tata Capital Used Car Loan">Tata Capital
                                        Used Car Loan</a></li>
                                    <li><a className="" target="_blank" href="#" title="Faircent Personal Loan">Faircent
                                        Personal Loan</a></li>
                                    <li><a className="" target="_blank" href="#" title="InstaMoney Personal Loan">InstaMoney
                                        Personal Loan</a></li>
                                    <li><a className="" target="_blank" href="#" title="MPokket Instant Loan">MPokket Instant
                                        Loan</a></li>
                                </ul>
                                <ul>
                                    <li><a className="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBee
                                        Personal Loan </a></li>
                                    <li><a className="" target="_blank" href="#" title="Upward Fintech Personal Loan">Upward
                                        Fintech Personal Loan </a></li>
                                    <li><a className="" target="_blank" href="#" title="CASHe Personal Loan">CASHe Personal Loan
                                    </a></li>
                                    <li><a className="" target="_blank" href="#" title="FlexSalary Personal Loan">FlexSalary
                                        Personal Loan </a></li>
                                </ul>
                                <div className="menu_imgBox">
                                    <img src="/images/pl-bnr-icon.png" alt="" />
                                </div>
                            </div>
                        </li>
                        <li> <a className="" target="_blank" href="#" title="Insurance">Insurance</a></li>
                        <li><a className="" target="_blank" href="#" title="Investment">Investment</a></li>
                        <li><a className="" target="_blank" href="#" title="Subsidy">Subsidy</a></li>
                        <li><a className="hasSub_menu" target="_blank" href="#" title="Knowledge Center">Knowledge Center</a>
                            <div className="megaMenu_container">
                                <ul>

                                   <li> <Link href={{ pathname: '/calculator', query: { name: 'emi-calculator' } }}><a>EMI Calculator</a></Link></li>
                                   <li> <Link href={{ pathname: '/calculator', query: { name: 'subsidy-calculator' } }}><a>SUBSIDY Calculator</a></Link></li>
                                </ul>
                                <ul>    
                                    <li> <Link href={{ pathname: '/calculator', query: { name: 'sip-calculator' } }}><a>SIP Calculator</a></Link></li>
                                    <li> <Link href={{ pathname: '/calculator', query: { name: 'rd-calculator' } }}><a>RD Calculator</a></Link></li>
                                </ul>
                                <ul>
                                    <li> <Link href={{ pathname: '/calculator', query: { name: 'epf-calculator' } }}><a>EPF Calculator</a></Link></li>  
                                    <li> <Link href={{ pathname: '/calculator', query: { name: 'lumpsum-calculator' } }}><a>Lumpsum Calculator</a></Link></li>  
                                    
                    
                                </ul>
                                <ul>
                                <li> <Link href={{ pathname: '/calculator', query: { name: 'ssy-calculator' } }}><a>SSY Calculator</a></Link></li>  
                                <li> <Link href={{ pathname: '/calculator', query: { name: 'ppf-calculator' } }}><a>PPF Calculator</a></Link></li>  
                                </ul>
                                <div className="menu_imgBox">
                                        <img src="/images/pl-bnr-icon.png" alt="" />
                                    </div>
                            </div>
                        </li>
                        <li><a className="" target="_blank" href="#" title="About">About</a></li>
                        <li><a className="" target="_blank" href="#" title="Franchise">Franchise</a> </li>
                        <li><a className="" target="_blank" href="#" title="Blogs">Blogs</a> </li>
                        <li><a className="" target="_blank" href="#" title="Contact">Contact</a> </li> */}
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