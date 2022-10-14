import axios from "axios";
import Link from "next/link";

const Menu = ({menu}) => {
    console.log(menu)
    return (
        <header>
            <div className="mmobile_menu d-sm-none d-block">
                <nav id="menu">
                    <ul>
                        {menu && menu.map((item, index) =>
                            <li><Link href="{item.slug}"><a title="{item.name}">{item.name}</a></Link></li>
                        )}
                        <li><a target="_blank" href="#" title="Cards"> Cards</a></li>
                        <li>
                            <span>Loans</span>
                            <ul>
                                <li><a className="" target="_blank" href="#" title="Personal Loan">Personal Loan</a></li>
                                <li><a className="" target="_blank" href="#" title="Business Loan">Business Loan</a></li>
                                {/* <!--  --> */}
                                <li><a className="" target="_blank" href="#" title="InstaMoney Personal Loan">InstaMoneyPersonal Loan</a></li>
                                <li><a className="" target="_blank" href="#" title="MPokket Instant Loan">MPokket InstantLoan</a></li>
                                {/* <!--  --> */}
                                <li><a className="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBeePersonal Loan </a></li>
                                <li><a className="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBeePersonal Loan </a></li>
                            </ul>
                        </li>
                        
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
                    <a href="#"><img src="/images/CIBIL Score.gif" alt="" /></a>
                </div>

            </div>

            <nav className="navBarContainer d-sm-block d-none">
                <div className="container">
                    <ul>
                        {menu && menu.map((item, index) =>
                            <li><Link href="{item.slug}"><a title="{item.name}">{item.name}</a></Link></li>
                        )}
                        <li><a target="_blank" href="#" title="Cards"> Cards</a></li>
                        <li> <a className="hasSub_menu" target="_blank" href="#" title="Loan"> Loan</a>
                            <div className="megaMenu_container">
                                <ul>
                                    <li><a className="" target="_blank" href="#" title="Home Loan">Home Loan</a></li>
                                    <li><a className="" target="_blank" href="#" title="Business Loan">Business Loan</a></li>
                                </ul>
                                <ul>
                                    <li><a className="" target="_blank" href="#" title="Tata Capital Used Car Loan">Tata Capital Used Car Loan</a></li>
                                    <li><a className="" target="_blank" href="#" title="Faircent Personal Loan">Faircent Personal Loan</a></li>
                                </ul>
                                <ul>
                                    <li><a className="" target="_blank" href="#" title="KreditBee Personal Loan">KreditBee Personal Loan </a></li>
                                    <li><a className="" target="_blank" href="#" title="Upward Fintech Personal Loan">Upward Fintech Personal Loan </a></li>
                                </ul>
                                <div className="menu_imgBox">
                                    <img src="/images/pl-bnr-icon.png" alt="" />
                                </div>
                            </div>
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
                </div>
            </nav>
        </header>
    )
}

export async function getServerSideProps() {

    const res = await axios.get("https://testapi.referloan.in/api/categories");
    const menu = await res.data

    return { props: { menu } }
}


export default Menu