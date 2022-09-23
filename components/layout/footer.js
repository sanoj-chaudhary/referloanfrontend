import Image from "next/image"
import Link from "next/link"
import vcard from './../../public/images/v-card.png'
import aecard from './../../public/images/ae-card.png'
import mcard from './../../public/images/m-card.png'
import rpcard from './../../public/images/rp-card.png'
import mescard from './../../public/images/mes-card.png'
import indicard from './../../public/images/ind-flag.png'
import { useEffect,useState } from "react"
import axios from 'axios'

import Link from 'next/link'
const Footer = () => {
    const [menu, setMenu] = useState([]);
    const [temp, setTemp] = useState(1);
 
    const getFooterMenu = async ()=>{
        try {
            const res = await axios.get('/api/footerlink');
            const data = await res.data;
            setMenu(data)
        }
        catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getFooterMenu();
      }, [])

    function footerMenu() {
        var x = document.getElementById("footerNav");
        if (x.style.display === "block") {
            x.style.display = "none";
            var element = document.getElementById('footerBtn');
            element.classList.remove('tooglrIcon');

        } else {
            console.log(menu)
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
                            <ul>
                            {menu.map((value) => (
                                <li><Link href="#" ><a ><span className="material-icons">east</span>{value.post_title}</a></Link></li>
                            ))}
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
                            <h2>ReferLoan links</h2>
                            <ul>
                                <li><Link href="/about"><a title="About">About</a></Link></li>
                                <li><a href="#" title="Careers">Careers</a></li>
                                <li><a href="#" title="Blog">Blog</a></li>
                                <li><Link href="/contact"><a title="Contact">Contact</a></Link></li>
                                <li><a href="#" title="Investors">Investors</a></li>
                            </ul>
                        </div>
                        <div className="footerLinks">
                            <h2>Credit Cards</h2>
                            <ul>
                                <li><a href="#" title="About">HDFC Credit Card</a></li>
                                <li><a href="#" title="Careers">Kotak Mahindra Credit Card</a></li>
                                <li><a href="#" title="Blog">Blog</a></li>
                                <li><a href="#" title="Contact">Contact</a></li>
                                <li><a href="#" title="Investors">Investors</a></li>
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