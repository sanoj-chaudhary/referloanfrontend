import Link from "next/link"
import { useRouter } from 'next/router';
import Image from "next/image";

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
                                <Image src="/images/icon/pl-iocn-w.webp" alt="" loading='lazy' width="31" height="31"   />
                                <h3>Personal</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/loans/business-loan" + utmData}><a>
                                <Image src="/images/icon/bl-icon-w.webp" alt="" loading='lazy' width="32" height="32"  />
                                <h3>Business</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/loans/education-loan" + utmData}><a>
                                <Image src="/images/icon/ed-icon-w.webp" alt="" loading='lazy' width="38" height="32"  />
                                <h3>Education</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/loans/gold-loan" + utmData}><a>
                                <Image src="/images/icon/offer-icon-w.webp" alt="" loading='lazy' width="36" height="31" />
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
                                <Image src="/images/icon/axis-icon.webp" alt="" loading='lazy' width="40" height="35" />
                                <h3>Axis</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/bank-kotak" + utmData}><a>
                                <Image src="/images/icon/kotak-icon.webp" alt="" loading='lazy' width="38" height="32" />
                                <h3>Kotak</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/bank-icici" + utmData}><a>
                                <Image src="/images/icon/icici-icon-w.webp" alt="" loading='lazy' width="35" height="32" />
                                <h3>ICICI</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/bank-sbi" + utmData}><a>
                                <Image src="/images/icon/sbi-icon.webp" alt=""  loading='lazy' width="35" height="35"/>
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
                                <Image src="/images/icon/health-icon.webp" alt="" loading='lazy' width="38" height="32" />
                                <h3>Health</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/other-product/life-insurance" + utmData}><a>
                                <Image src="/images/icon/life-icon.webp" alt="" loading='lazy' width="38" height="32" />
                                <h3>Life</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/insurance-and-investment/guaranteed-return-plan" + utmData}><a>
                                <Image src="/images/icon/return-icon.webp" alt="" loading='lazy' width="38" height="32" />
                                <h3>Return</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/insurance-and-investment/direct-mutual-funds" + utmData}><a>
                                <Image src="/images/icon/mutual-icon.webp" alt="" loading='lazy' width="38" height="32" />
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