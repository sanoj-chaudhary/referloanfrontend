import Image from "next/image"
import Link from "next/link"
import vcard from './../../public/images/v-card.webp'
import aecard from './../../public/images/ae-card.webp'
import mcard from './../../public/images/m-card.webp'
import rpcard from './../../public/images/rp-card.webp'
import mescard from './../../public/images/mes-card.webp'
import indicard from './../../public/images/ind-flag.webp'
import footerlogo from './../../public/images/logo.webp'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import axios from 'axios'

const Footer = () => {
    const router = useRouter()
    let  utmData = '';
    const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
    if(!utm_campaign){
      utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
  }else{
      utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
  }


    const [loanP, setLoanp] = useState([]);
    const [loanBP, setLoanbp] = useState([]);
    const [ccBP, setCcbp] = useState([]);
    const [loan, setLoan] = useState([]);
    const [cc, setCc] = useState([]);

    const getFooterMenu = async () => {
        try {
            const res = await axios.get('/api/footerlink');
            const data = await res.data;
            setLoanp(data.loanP[0]);
            setLoanbp(data.loanBP[0]);
            setCcbp(data.ccBP[0]);
        }
        catch (err) {
            console.log(err)
        }
    }

    const getFooterMenu2 = async () => {
        const res = await axios.get('/api/footerlink2');
        const data = await res.data;
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



        <footer >
             
            <div className="sticky_nav">
            <Link href={"/loans"+ utmData}><a className="nav-item"> 
                        <img src="/images/icon/pl-icon.webp" alt="" /><span>Loan</span>
                    </a></Link>

                    <Link href={"/credit-card"+ utmData}><a className="nav-item">
                        <img src="/images/icon/ccard-icon.webp" alt="" />
                        <span>Credit Card</span>
                    </a></Link>

                    <Link href={"/other-product/investment"+ utmData}><a className="nav-item">
                        <img src="/images/icon/sa-icon.webp" alt="" />
                        <span>Investment</span>
                    </a></Link>

                    <Link href={"/subsidy"+ utmData}><a className="nav-item">
                        <img src="images/icon/eduL-icon.webp" alt="" />
                        <span>Subsidy</span>
                    </a></Link>
            </div>

          <div className='footerWrapper'>
            <div className="fot-top-bar">
                <div className="container">
                    <div className="innerBar">

                        <button className="footerMenu-Btn" id="footerBtn" onClick={footerMenu}>MOST SEARCHED LINKS <i className="fas fa-angle-down"></i></button>

                        <div className="socialArea">
                            <div className="emailBox">
                                <Link href="mailto:helpdesk@referloan.in"><a> <i className="fas fa-envelope-open-text"></i> helpdesk@referloan.in</a></Link>
                            </div>
                            <ul className="socialIcon">
                                <li><Link href="https://www.facebook.com/referloan"><a aria-label="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a></Link></li>
                                <li><Link href="https://www.linkedin.com/company/referloan"><a aria-label="linkedin" target="_blank"><i className="fab fa-linkedin-in"></i></a></Link></li>
                                <li><Link href="https://twitter.com/loan_refer"><a aria-label="twitter" target="_blank"><i className="fab fa-twitter"></i></a></Link></li>
                                <li><Link href="https://www.youtube.com/channel/UClDi-QICJKLCQ4uLTJVsc2A"><a aria-label="youtube" target="_blank"><i className="fab fa-youtube"></i></a></Link></li>
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
                                {loanP.map((value) => (
                                    <li key={value.id}><Link href={'/'+value.slug+utmData} ><a><span className="material-icons"><i className="fa fa-arrow-right"></i></span>{value.name}</a></Link></li>
                                ))}
                            </ul>

                            <ul>
                                {loanBP.map((value) => (
                                    <li key={value.id}><Link href={'/'+value.slug+utmData} ><a><span className="material-icons"><i className="fa fa-arrow-right"></i></span>{value.name}</a></Link></li>
                                ))}
                            </ul>

                            <ul>
                                {ccBP.map((value) => (
                                    <li key={value.id}><Link href={'/'+value.slug+utmData} ><a><span className="material-icons"><i className="fa fa-arrow-right"></i></span>{value.name}</a></Link></li>
                                ))}
                            </ul>

                        </div>
                    </div>

                    {/* <!-- footer Address area --> */}

                    <div className="footerContentArea">
                        <div className="growArea">
                            <h2>Save, Fastest Loan &amp; Grow</h2>
                            <p>Our goal at Refer Loan is to provide access to personal loans and education loan, car loan, home loan at insight competitive interest rates. We are the loan provider, you can use our loan product.</p>
                            <Image src={footerlogo} alt=""  loading='lazy' height='38' width='173' />
                        </div>

                        {/* <!-- link Area --> */}
                        <div className="footerLinks">
                            <h2> Loan </h2>
                            <ul>
                                {loan.map((item)=>(
                                    <li key={item.id}><Link href={'/'+item.slug+utmData} ><a title={item.name}>{item.name}</a></Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="footerLinks">
                            <h2>Credit Cards</h2>
                            <ul>
                                {cc.map((item)=>(
                                    <li key={item.id}><Link href={'/'+item.slug+utmData} ><a title={item.name}>{item.name}</a></Link></li>
                                ))}
                                <li> <Link href="https://cms.referloan.in/admin/login"><a target="_blank">Employee Login</a></Link></li>
                                <li> <Link href="https://cms.referloan.in/admin/login" ><a target="_blank">Franchise Login</a></Link></li>
                            </ul>
                        </div>

                    </div>
                    {/* <!-- footer Card option --> */}
                    <div className="footer-card-area">
                        <div className="card-pnl">
                            <ul>
                                <li><Image src={vcard} alt="" loading='lazy' /></li>
                                <li><Image src={aecard} alt="" loading='lazy' /></li>
                                <li><Image src={mcard} alt="" loading='lazy' /></li>
                                <li><Image src={rpcard} alt="" loading='lazy' /></li>
                                <li><Image src={mescard} alt="" loading='lazy' /></li>
                            </ul>
                        </div>
                        <div className="mad-in-india">
                            <Image className="footerIndialogo" src={indicard} alt="Indialogo" loading='lazy'  />
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
                            <Link href="/about-us"><a title="About Us" target="_blank">About Us</a></Link>
                            <Link href="/privacy-policy"><a title="Privacy Policy" target="_blank">Privacy Policy</a></Link>
                            <Link href="/faqs"><a title="Faq's" target="_blank">Faq's</a></Link>
                            <Link href="/terms-and-conditions"><a title="Terms and Conditions" target="_blank">Terms and Conditions</a></Link>
                            <Link href="/app-privacy-policy"><a title="App Privacy Policy" target="_blank">App Privacy Policy</a></Link>
                            <Link href="/franchise-map"><a title="Our Franchises" target="_blank">Our Franchises</a></Link>
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </footer>
        
    )
}

export default Footer