import Link from "next/link"

const serviceArea = () => {
    return (
        <div className="container">
            <div className="applyService_Area">
                <div className="cardContainer blue">
                    <h2>Apply for loans</h2>
                    <ul className="iconPnl">
                        <li>
                            <Link href={"/loans/personal-loan" + process.env.UTM}><a>
                                <img src="/images/icon/pl-iocn-w.png" alt="" />
                                <h3>Personal</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/loans/business-loan" + process.env.UTM}><a>
                                <img src="/images/icon/bl-icon-w.png" alt="" />
                                <h3>Business</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/loans/education-loan" + process.env.UTM}><a>
                                <img src="/images/icon/ed-icon-w.png" alt="" />
                                <h3>Education</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/loans/gold-loan" + process.env.UTM}><a>
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
                            <Link href={"/bank-axis" + process.env.UTM}><a>
                                <img src="/images/icon/axis-icon.png" alt="" />
                                <h3>Axis</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/bank-kotak" + process.env.UTM}><a>
                                <img src="/images/icon/kotak-icon.png" alt="" />
                                <h3>Kotak</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/bank-icici" + process.env.UTM}><a>
                                <img src="/images/icon/icici-icon-w.png" alt="" />
                                <h3>ICICI</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/bank-sbi" + process.env.UTM}><a>
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
                            <Link href={"/other-product/health-insurance" + process.env.UTM}><a>
                                <img src="/images/icon/health-icon.png" alt="" />
                                <h3>Health</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/other-product/life-insurance" + process.env.UTM}><a>
                                <img src="/images/icon/life-icon.png" alt="" />
                                <h3>Life</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/insurance-and-investment/guaranteed-return-plan" + process.env.UTM}><a>
                                <img src="/images/icon/return-icon.png" alt="" />
                                <h3>Return</h3>
                            </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/insurance-and-investment/direct-mutual-funds" + process.env.UTM}><a>
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