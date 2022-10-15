import Image from "next/image"
import Link from "next/link"
import vcard from './../../public/images/v-card.png'
import aecard from './../../public/images/ae-card.png'
import mcard from './../../public/images/m-card.png'
import rpcard from './../../public/images/rp-card.png'
import mescard from './../../public/images/mes-card.png'
import indicard from './../../public/images/ind-flag.png'
import { useEffect, useState } from "react"
import axios from 'axios'

const Footer = () => {
    const [menu, setMenu] = useState([]);
    const [loan, setLoan] = useState([]);
    const [cc, setCc] = useState([]);
    

    const getFooterMenu = async () => {
        try {
            const res = await axios.get('/api/footerlink');
            const data = await res.data;
            setMenu(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const getFooterMenu2 = async () => {
        const res = await axios.get('/api/footerlink2');
        const data = await res.data;
        console.log(data.cc);
        setLoan(data.loan[0]);
        setCc(data.cc[0]);
    }
    useEffect(() => {
        getFooterMenu();
        getFooterMenu2();
    }, [])

    function footerMenu() {
        var x = document.getElementById("footerNav");
        if (x.style.display === "block") {
            x.style.display = "none";
            var element = document.getElementById('footerBtn');
            element.classList.remove('tooglrIcon');

        } else {
            
            x.style.display = "block";
            var element = document.getElementById('footerBtn');
            element.classList.add('tooglrIcon');
        }
    }
    
    return (
        <footer className='footerWrapper'>
            <div className="fot-top-bar">
                <div className="container">
                    <div className="innerBar">

                        {/* <!-- <a href="#"> MOST SEARCHED LINKS <i className="fas fa-angle-down"></i></a> --> */}
                        <button className="footerMenu-Btn" id="footerBtn" onClick={footerMenu}>MOST SEARCHED LINKS <i className="fas fa-angle-down"></i></button>

                        <div className="socialArea">
                            <div className="emailBox">
                                <a href="mailto:helpdesk@referloan.in"> <i className="fas fa-envelope-open-text"></i> helpdesk@referloan.in</a>
                            </div>
                            <ul className="socialIcon">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fot-bot-bar">

                <div className="container">
                    <div id="footerNav">
                        <div className="footerNav">
                            {/* <ul>
                                {menu.map((value) => (
                                    <li key={value.id}><Link href={value.full_url} ><a><span className="material-icons">east</span>{value.post_title}</a></Link></li>
                                ))}
                                console.log(value.full_url);
                            </ul> */}

                        <ul>
                            <li><a href="#"><span class="material-icons">east</span> Personal Loan</a></li>
                            <li><a href="#"><span class="material-icons">east</span> Gold Loan  </a></li>
                            <li><a href="#"><span class="material-icons">east</span> Micro Loans</a></li>
                            <li><a href="#"><span class="material-icons">east</span> Consumer Loan</a></li>
                            <li><a href="#"><span class="material-icons">east</span> Business Loan</a></li>
                            <li><a href="#"><span class="material-icons">east</span> Home loan</a></li>
                        </ul>
                        <ul>
                            <li><a href="#"><span class="material-icons">east</span> Loan Against Property</a></li>
                            <li><a href="#"><span class="material-icons">east</span> HDFC Bank Millennia Credit Card</a></li>
                            <li><a href="#"><span class="material-icons">east</span>HDFC Bank Moneyback credit card</a></li>
                            <li><a href="#"><span class="material-icons">east</span> HDFC Diners Club Privilege Credit Card</a></li>
                            <li><a href="#"><span class="material-icons">east</span> Investment</a></li>
                            <li><a href="#"><span class="material-icons">east</span> Insurance</a></li>
                        </ul>
                        <ul>
                            <li><a href="#"><span class="material-icons">east</span> HDFC Bank Credit Card</a></li>
                            <li><a href="#"><span class="material-icons">east</span> Yes Bank Credit Card</a></li>
                            <li><a href="#"><span class="material-icons">east</span> SBI Credit Card</a></li>
                        </ul>


                        </div>
                    </div>

                    {/* <!-- footer Address area --> */}

                    <div className="footerContentArea">
                        <div className="growArea">
                            <h2>Save, Fastest Loan &amp; Grow</h2>
                            <p>Our goal at Refer Loan is to provide access to personal loans and education loan, car loan, home loan at insight competitive interest rates. We are the loan provider, you can use our loan product.</p>
                            <img src="/images/logo.png" alt="" className="footerlogo" />
                        </div>

                        {/* <!-- link Area --> */}
                        <div className="footerLinks">
                            <h2> Loan </h2>
                            <ul>
                               {/* {loan.map((item)=>(
                                <li key={item.id}><Link href={item.full_url} ><a  title="About">{item.post_title}</a></Link></li>
                               ))} */}
                            <li><a href="#" title="About">Personal Loan</a></li>
                            <li><a href="#" title="Careers">Gold Loan</a></li>
                            <li><a href="#" title="Blog">Micro Loan</a></li>
                            <li><a href="#" title="Contact">Consumer Loan</a></li>
                            <li><a href="#" title="Investors">Business Loan</a></li> 
                            <li><a href="#" title="Investors">Home loan</a></li> 
                            </ul>
                        </div>

                        
                        <div className="footerLinks">
                            <h2>Credit Cards</h2>
                            <ul>
                            {/* {cc.map((element)=>(
                                <li key={element.id}><Link href={element.full_url} ><a  title="About">{element.post_title}</a></Link></li>
                               ))} */}

                            <li><a href="#" title="About">HDFC Credit Card</a></li>
                            <li><a href="#" title="Careers">Kotak Mahindra Credit Card</a></li>
                            <li><a href="#" title="Blog">Yes Bank Credit Card</a></li>
                            <li><a href="#" title="Contact">ICICI Bank Credit Card</a></li>
                            <li><a href="#" title="Investors">SBI Credit Card</a></li>
                            <li><a href="#" title="Investors">Axis bank credit card</a></li>
                            </ul>
                        </div>


                    </div>
                    {/* <!-- footer Card option --> */}
                    <div className="footer-card-area">
                        <div className="card-pnl">
                            <ul>
                                <li><Image src={vcard} width="64" height="44" alt="" /></li>
                                <li><Image src={aecard} alt="" width="64" height="44" /></li>
                                <li><Image src={mcard} alt="" width="64" height="44" /></li>
                                <li><Image src={rpcard} alt="" width="64" height="44" /></li>
                                <li><Image src={mescard} alt="" width="64" height="44" /></li>
                            </ul>
                        </div>
                        <div className="mad-in-india">
                            <Image className="footerIndialogo" src={indicard} width="40px" height="40px" />
                            <span className="made-india">Made In India</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRightArea">
                <div className="container ">
                    <div className="copyRight_inner">
                        <span>Copyright 2022 © Referloan.in.</span>
                        <span>
                            <Link href="/privacy-policy"><a title="Privacy Policy">Privacy Policy</a></Link>
                            <Link href="/faq"><a title="Faq's">Faq's</a></Link>
                            <Link href="/terms-and-conditions"><a title="Terms and Conditions">Terms and Conditions</a></Link>
                            <Link href="/app-privacy-policy"><a title="App Privacy Policy">App Privacy Policy</a></Link>
                            <Link href="/franchise-map"><a title="Our Franchises">Our Franchises</a></Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer