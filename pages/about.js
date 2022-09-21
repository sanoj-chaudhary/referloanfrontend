
import Head from 'next/head'
const about = () => {
    return (
        <>
            <Head>
                <title>About page</title>
                <meta name="description" content="Generated by create next app" />

            </Head>
            {/* <!-- Hero Section --> */}
            <section className="about_container">
                <div className="container">
                    <div className="about_inner">
                        <div className="left_col">
                            <h2>Refer Loan is India’s largest Digital marketplace for loans & credit cards</h2>
                            <p>Short say" Refer Loan" is a digital platform which works as intermediary between different Banks
                                and NBFC for providing various services in Loans, Insurance, Investments, Credit Card etc..</p>
                        </div>
                        <div className="join_col">
                            <h2>Join Us</h2>
                            <p>As a leading fintech company, we are all about providing quick, affordable, and reliable loans to
                                our customers all over
                                the world..</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_pad innerpage_bg">
                <div className="container">
                    <p>
                        Refer Loan claims to be proudly connected with more than 175+ Financial Institutions for different
                        verticals. In Refer Loan leads are collected through App or Site and Refer Loan team sends them to the
                        suitable financial institutions of the end user choice.
                    </p>
                    <p>Refer Loan is a recognized Start Up and M/s Durga Finvest Pvt Ltd is the sister concern of Refer Loan.
                    </p>
                    {/* <!-- vision_section --> */}
                    <div className="vision_section">
                        <div className="inner_col">
                            <h2 className="headingBlue">Vision of ReferLoan</h2>
                            <p>Refer Loan in Short "RL" wider objective is to serve the unmet financial needs of those section
                                of population which is either not covered by Digital Fintech Platform or not satisfied with its
                                uses. RL Ultimate goal is to be as Global Digital Platform and be a Leading Fintech Concern
                                which is the epitome of customer service and standing on a solid and apotheosized foundation of
                                outstanding technology and expert talent pool. Vision of Refer Loan is to be number one Fintech
                                in India in Financial Sector within next 5 year.</p>
                        </div>
                        <div className="inner_col">
                            <h2 className="headingBlue">Mission Of ReferLoan </h2>
                            <p>RL mission is to gain the trust and confidence of our users through crystal clear communication,
                                reasonable and objective guidance, together with a genuine concern for their long term and
                                comprehensive financial growth. In RL People usually say,</p>
                            <h3>"Compare with anywhere and submit to RL and get best quotation".</h3>
                        </div>
                    </div>


                    {/* <!-- values_section --> */}
                    <div className="values_section">
                        <div className="contentPnl">
                            <h2 className="headingBlue">ReferLoan Values</h2>
                            <p><span>Ethics:</span> RL believe actions speak louder than words.RL believe in working 
                            ethically and fairly with all its users. When RL talk about values, they are not just incorporated in its work
                                environment,but also lives beyond work</p>
                            <p><span>Knowledge:</span> RL hire,respect and cherish people who are highly knowledgeable,learned,
                                experienced and skilled in their field.RL believe knowledgeable resource is not only an asset but also
                                its users, who are a part of RL family </p>
                            <p><span>Forward Thinking:</span> Refer Loan believe it is the driving force to think beyond the horizons </p>
                            <p><span>Service:</span> ReferLoan put itself in its user"shoe,so that RL better understand their needs </p>
                            <p><span>Respect:</span> ReferLoan believe all human being are equal,and they deserve equal
                                respect irrespective of their position,financial status,race o rethnicity.RL treat others, the way
                                RL expect others to treat itself. </p>
                            <p><span>Quality:</span> ReferLoan believe,A job which lacks the highest quality RL expect from it, is a
                                job half done.When it comes to quality of work - RL DONOT COMPROMISE </p>
                        </div>
                        {/* <!-- img --> */}
                        <div className="imgPnl">
                            <img src="/images/value-img.png" alt="" />
                        </div>
                    </div>

                    {/* <!-- activities_section --> */}
                    <div className="activities_section">
                        <h2>ACTIVITIES COVERED BY REFER LOAN</h2>
                        <p>We cover almost every financial option like:</p>
                        {/* <!-- activities-row --> */}
                        <div className="activities_row">
                            <div className="activities_col">
                                <h2><span>01</span> Lots of LOAN option which provide you finances at fast pace</h2>
                                <ul>
                                    <li>Personal Loan</li>
                                    <li>Home Loan</li>
                                    <li>Loan Against Property</li>
                                    <li>Auto Loan (Car, two-wheeler, Heavy vehicle, Commercial vehicle)</li>
                                    <li>Business Loan</li>
                                </ul>
                                <p>And many more loan options available by ReferLoan</p>
                            </div>
                            {/* <!-- 02 --> */}
                            <div className="activities_col">
                                <h2><span>02</span> Choose your INSURANCE which can protect you or your product.</h2>
                                <ul>
                                    <li>Vehicle Insurance (car, two-wheeler, etc.)</li>
                                    <li>Health Insurance</li>
                                    <li>Mediclaim</li>
                                    <li>Life term plan</li>
                                    <li>Stock Insurance</li>
                                </ul>
                                <p>And many more Insurance options available by ReferLoan </p>
                            </div>
                        </div>
                        <div className="activities_row">
                            <div className="activities_col">
                                <h2><span>03</span> Lots of CREDIT CARD option suits your life style</h2>
                                <ul>
                                    <li>Travel Credit card</li>
                                    <li>Business Credit card</li>
                                    <li>Entertainment Credit Card</li>
                                    <li>Gold /Platinum /Silver Credit card</li>
                                </ul>
                                <p>And many more credit card with all Bank options available by ReferLoan</p>
                            </div>
                            {/* <!-- 02 --> */}
                            <div className="activities_col">
                                <h2><span>04</span> Best INVESTMENT Plans which ease up your retired life.</h2>
                                <ul>
                                    <li>SIP</li>
                                    <li>Fixed Deposit</li>
                                    <li>Other Investment plans</li>
                                </ul>
                                <p>And many more available by ReferLoan With all this services ReferLoan is tied up with more
                                    then 175+ Banks and NBFCs, with a total of 345+ financial products with a vision of tied up
                                    with more Banks and NBFCs and more products. </p>
                            </div>
                        </div>
                        <div className="activities_row">
                            <div className="activities_col">
                                <h2><span>05</span> ReferLoan also do provide Information about Subsidy provided By Government
                                    of India or Any particular State Government to get full benefits out of it like</h2>
                                <ul>
                                    <li>Subsidy for Women</li>
                                    <li>Subsidy for SC /ST or backward classes</li>
                                    <li>Central Level Subsidy</li>
                                    <li>State Level Subsidy</li>
                                </ul>
                                <p>All the information is provided by ReferLoan as well, check them out will full eligibility.
                                    As ReferLoan is a fintech
                                    company all the financial service are provided digitally to the applicant without any extra
                                    charges.
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* <!-- benefits_area --> */}
                    <div className="benefits_area">
                        <h2>The Benefits of Applying for finances needs by ReferLoan</h2>

                        <div className="benefitBox">
                            <div className="imgPnl">
                                <img src="/images/benefit-img.png" alt="" />
                            </div>

                            <div className="contentPnl">
                                <ul>
                                    <li>ReferLoan tied up with more than 175+ financial Institutions, along with 345+ financial
                                        products where the end user
                                        can get benefited with least Rate of Interest.</li>

                                    <li>As ReferLoan is fintech company - all the work is digitally, this means the applicant
                                        who is in need of any kind of
                                        finances, they need to send their documents via mail or WhatsApp to ReferLoan after
                                        submitting the leads even if the
                                        Banks or NBFC's working mode is Offline.</li>

                                    <li>The applicant will also get the feature of sales after service also - this means if any
                                        applicant applied for any kind
                                        of Insurance, then ReferLoan will help you disburse with the same.</li>

                                    <li>Least Rate of Interest - with fast loan disbursal to the applicant bank account.</li>

                                    <li>Full transparency with portal-based login - when you logged in to ReferLoan, a Unique
                                        code get generated where the
                                        applicant can check the file process.</li>

                                    <li>No extra charges or any Fees.</li>

                                    <li>Free CIBIL score calculator.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default about