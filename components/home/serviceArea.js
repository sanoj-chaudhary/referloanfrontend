import Link from "next/link"
import { useRouter } from 'next/router';
const serviceArea = () => {
    const router = useRouter()
    let  utmData = '';
    const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
    if(!utm_campaign){
      utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
  }else{
      utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
  }
    return (
        <div className="container">
            <div className="applyService_Area">
                <div className="cardContainer blue">
                    <h2>Apply for loans</h2>
                    <ul className="iconPnl">
                        <li>
                            <Link href={"/loans/personal-loan" + utmData}><a>
                                <img src="/images/icon/pl-iocn-w.png" alt="" />
                                <h3>Personal</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/loans/business-loan" + utmData}><a>
                                <img src="/images/icon/bl-icon-w.png" alt="" />
                                <h3>Business</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/loans/education-loan" + utmData}><a>
                                <img src="/images/icon/ed-icon-w.png" alt="" />
                                <h3>Education</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/loans/gold-loan" + utmData}><a>
                                <img src="/images/icon/offer-icon-w.png" alt="" />
                                <h3>Gold</h3>
                            </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="cardContainer grey">
                    <h2>Get a credit card </h2>
                    <ul className="iconPnl">
                        <li>
                            <Link href={"/bank-axis" + utmData}><a>
                                <img src="/images/icon/axis-icon.png" alt="" />
                                <h3>Axis</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/bank-kotak" + utmData}><a>
                                <img src="/images/icon/kotak-icon.png" alt="" />
                                <h3>Kotak</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/bank-icici" + utmData}><a>
                                <img src="/images/icon/icici-icon-w.png" alt="" />
                                <h3>ICICI</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/bank-sbi" + utmData}><a>
                                <img src="/images/icon/sbi-icon.png" alt="" />
                                <h3>SBI</h3>
                            </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="cardContainer green">
                    <h2>Get an Insurance Plan </h2>
                    <ul className="iconPnl">
                        <li>
                            <Link href={"/other-product/health-insurance" + utmData}><a>
                                <img src="/images/icon/health-icon.png" alt="" />
                                <h3>Health</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/other-product/life-insurance" + utmData}><a>
                                <img src="/images/icon/life-icon.png" alt="" />
                                <h3>Life</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/insurance-and-investment/guaranteed-return-plan" + utmData}><a>
                                <img src="/images/icon/return-icon.png" alt="" />
                                <h3>Return</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/insurance-and-investment/direct-mutual-funds" + utmData}><a>
                                <img src="/images/icon/mutual-icon.png" alt="" />
                                <h3>Mutual</h3>
                            </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default serviceArea