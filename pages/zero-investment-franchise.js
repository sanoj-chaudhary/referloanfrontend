import Head from "next/head"
import img from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router';

function FranchiseInquiry() {
    return (
        <>
            <section>
            <div class="row"><div class="col" style={{ fontSize: '24px',
                    color: '#666',
                    textAlign: 'center',
                    paddingTop: '5px',
                    }}><h2 style={{ textAlign: 'center', fontFamily: 'Poppins', fontWeight: '600', fontSize: '44px', marginTop: '1em' }}>Who we are?</h2>
                    <p class="sec_sub_heading" style={{ fontSize: '24px',
                    color: 'var(--lightGrey)',
                    textAlign: 'center',
                    }}>ReferLoan - A leading fintech company</p></div></div>
            </section>

                       
                        <div class="row md-6"  style={{display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}><div class="col-md-6">  
            

            <div class="leftarea">             
                <h2 style={{fontSize: '76px',
            color: 'var(--darkGrey)',
            fontWeight: '700',
            marginBottom: '20px'
            }}> Let's <span style={{fontSize: '76px', color: 'rgb(0, 121, 106)'}}>start</span> with something Big.</h2>                 <p style={{fontFamily: 'Poppins'}}>ReferLoan introduced a franchise model which allows you to grow your business at zero investment and risk-free life.</p></div></div><div class="col-md-6"><div class="detail_card" style={{width: '100%', backgroundColor:'rgb(255, 255, 255)', borderRadius: '20px', flexDirection: 'column', fontFamily: '&quot;Poppins&quot; sans-serif', position: 'relative', overflow: 'hidden' , border: '1px solid rgb(237, 237, 237)', paddingLeft: '3em', paddingRight: '3em'}}>
            <h5 style={{paddingTop: '1em'}}> <img src="https://info.referloan.in/landing/images/start-up.png" alt="" style={{width: '50px', height: '50px'}} /> REQUEST A CALL BACK</h5>

            <form onsubmit="{()={franchiseForm(e)}}">
                                <input type="hidden" name="_token" value="xlWZDc5GrznqwUCvS4lgc4pzSyS22bIoWbEXDeRv"/>                    <div class="form-floating mb-3">
                                    <input type="text" name="name" autocomplete="off" class="form-control onlyalphabetsspace" required="" />
                                    
                                                                                
                                    <label for="floatingInput">Name</label>
                                    <div class="infoMessage"></div>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="email" name="email" autocomplete="off" onpaste="return false;" ondrop="return false;" class="form-control" required="" />
                                        
                                                                                
                                    <label for="floatingInput">Email</label>
                                    <div class="infoMessage"></div>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" name="mobile" autocomplete="off" class="form-control numberonly" maxlength="10" required="" oninput="process(this)" />
                                    
                                                                                
                                    <label for="floatingInput">Mobile No</label>
                                    <div class="infoMessage"></div>
                                </div>
                                <input type="hidden" name="page_name" value="zero-investment-franchise" />
                            

            <div class="search-button"><button class="my-2" type="submit">Let’s Go!</button></div>
                        
                                               </form>
            </div></div></div>

            {/* Products Count Section */}

            <div class="countArea">
                <ul>
                    <li>
                        <h2>345<span>+</span></h2>
                        <p>Financial Products</p>
                    </li>
                    <li>
                        <h2>175<span>+</span></h2>
                        <p>Banks/NBFCs tie-ups</p>
                    </li>
                    <li>
                        <h2>40<span>+</span></h2>
                        <p>Franchise Openings</p>
                    </li>
                    <li>
                        <h2>PAN<span></span></h2>
                        <p>India Presence</p>
                    </li>
                </ul>
            </div>


                        {/* <!-- Do You want to Become Section --> */}
                        <section class="becomeSection">
                            <div class="container">
                                <h2 class="becomeHeading">Do You want to Become</h2>
                                <div class="contentRow">
                                    <div class="contentBox">
                                        {/* <!--<span>Sub Heading</span>--> */}
                                        <h3>A successful entrepreneur?</h3>
                                        <p>We get many ideas and innovations every day to become successful entrepreneurs and also have a dream to do so, isn’t it?</p>
                                    </div>
                                    {/* <!-- box2 --> */}
                                    <div class="imgBox">
                                        <img src="/images/entrepreneur-img.png" alt="entrepreneur" loading='lazy' />
                                    </div>
                                </div>
                                {/* <!-- row --> */}
                                <div class="contentRow flex-row-reverse">
                                    <div class="contentBox">
                                        {/* <!--<span>Sub Heading</span>--> */}
                                        <h3>Become your own Boss?</h3>
                                        <p>Work on your flexible timings without any pressure from anyone because you are the boss of your own business</p>
                                    </div>
                                    {/* <!-- box2 --> */}
                                    <div class="imgBox">
                                        <img src="/images/boss-img.png" alt="Startup" loading='lazy' />
                                    </div>
                                </div>
                                {/* <!-- row --> */}
                                <div class="contentRow">
                                    <div class="contentBox">
                                        {/* <!--<span>Sub Heading</span>--> */}
                                        <h3>Earn huge money</h3>
                                        <p>As many startups need to invest at first and then after the successful setup, you start getting profit but not anymore with the ReferLoan franchise model.</p>
                                    </div>
                                    {/* <!-- box2 --> */}
                                    <div class="imgBox">
                                        <img src="/images/earn-money.png" alt="Startup" loading='lazy' />
                                    </div>
                                </div>
                                {/* <!-- row --> */}
                                <div class="contentRow flex-row-reverse">
                                    <div class="contentBox">
                                        {/* <!--<span>Sub Heading</span>--> */}
                                        <h3>Growing and Stressful life</h3>
                                        <p>Everyone wants to grow their business to the next level with easy and calming life.</p>
                                    </div>
                                    {/* <!-- box2 --> */}
                                    <div class="imgBox">
                                        <img src="/images/growing-img.png" alt="Startup" loading='lazy' />
                                    </div>
                                </div>
                                {/* <!-- row --> */}

                                <div class="butImg">
                                    <img src="/images/but.png" alt="Startup" loading='lazy' height=""  width="" />
                                </div>
                                {/* <!-- invest Area --> */}
                                <div class="investArea">
                                    <div class="box">
                                        <img src="/images/no-money.png" alt="Startup" loading='lazy' />
                                        <h4>Don’t Have Money to invest in your business?</h4>
                                    </div>
                                    <div class="box">
                                        <img src="/images/risk-img.png" alt="Startup" loading='lazy' />
                                        <h4>Afraid of high risk of business failure</h4>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Franchise Model --> */}
                        <section class="franchiseModel">
                            <div class="container">
                                <center><h3>The REFERLOAN FRANCHISE MODEL is here for you with HUGE and UNLIMITED Benefits.
                                </h3> </center>
                                <div class="modelInner_Section">
                                    <div class="franchiseModel-img">
                                        <img src="/images/franchiseModel.png" alt="Startup" loading='lazy' /> <div>
                                      
                                          <ul>
                                                <li>Be your own boss</li>
                                                <li> Less operating cost with a higher growth rate.</li>
                                                <li> Rapid expansion with brand recognition.</li>
                                                <li> Connect with a huge marketplace.</li>
                                                <li> Connect directly all financial products and Banks/NBFCs.</li>
                                                <li> Start your business from the first day.</li>
                                                <li> Full digital training of products.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Zero Investment --> */}
                        <section>
                            <div class="container text-center zeroSection">
                                <img src="/images/zero-img.png" alt="Startup" loading='lazy' />
                            </div>
                        </section>

                        {/* <!-- Amazed?--> */}

                        <section class="becomeSection">
                            <div class="container">
                                <h2 class="becomeHeading">AMAZED?</h2>
                            </div>
                        </section>
                        {/* <!-- invest Area --> */}
                        <section class="franchiseModel">
                            <div class="container">
                                <center><h3>Yes, this is the truth and to get ReferLoan Franchise you just need
                                </h3> </center>
                                <div class="modelInner_Section">
                                    <div class="franchiseModel-img">
                                        <img src="/images/franchise.png" alt="Startup" loading='lazy' /></div>
                                    <ul>
                                        <li>Office with a minimum of 100 sq. ft.</li>
                                        <li> Team of 5 to 20 persons.</li>
                                        <li> Existing DSA running a business in 2 - 3 Verticals.</li>
                                        <li> Minimal computer knowledge of e-mail and Excel.</li>
                                        <li> Bankers who want to start their own business.</li>
                                        <li>  Professionals </li>

                                        <li> Chartered Accountant .</li>
                                        <li> Company secretary .</li>
                                        <li> Cost and work accountant .</li>
                                        <li> Self-employed .</li>
                                    </ul>
                                </div>
                            </div>

                      </section>
                  


            {/* <!-- FAQ Section --> */}
            <section>
                <div class="container">
                    <div class="faqSection">
                        <div class="imgBox">
                            <img src="/images/faq-img.png" alt="Startup"  loading='lazy' />
                        </div>
                        {/* <!-- right --> */}
                        <div class="faqBox">
                            <h2 class="heading">FAQ</h2>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is a franchise?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            A franchise is the best, most modern and appropriate way to the growth of one own
                                            business on the basis of the franchisor’s business model.<br /> A franchise can use one
                                            franchisor’s branding and products to earn money as its own business which means no
                                            investment but huge earnings and no risk of business as well.


                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What is the niche of the ReferLoan franchise?

                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            If you fully understand the basics of the finance sector then this franchise model is
                                            definitely for you, ReferLoan has 175+ tie-ups with Banks/NBFCs with 345+ financial
                                            products like LOAN | Credit Card | Insurance | Investments which can be used by you to
                                            generate huge business.

                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What is the cost of the ReferLoan franchise?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse " aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            The good news is that ReferLoan doesn’t charge any money for franchise opening by you.



                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Who can apply for the ReferLoan franchise?

                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Anyone salaried person, businessmen, banker, professionals like a chartered accountant,
                                            company secretary, advocate etc.
                                            s

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFive">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                What are the criteria required for franchise opening?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" class="accordion-collapse collapse " aria-labelledby="headingFive"
                                            data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                You need a minimum office size of 100 sq. ft., just need a team of 5 to 20 persons,
                                                Existing DSA running a business in 2 - 3 Verticals, minimal computer knowledge of
                                                email and excel.

                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingSix">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                What is the maximum qualification and age required to open a franchise?

                                            </button>
                                        </h2>
                                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                                            data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                The minimum age criteria are 21 Years and the minimum qualification is graduation or
                                                ongoing business of job.

                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingSeven">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                What are the products ReferLoan have?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven"
                                            data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                There are financial products that can be used for business generation and they are
                                                Loan | Credit Card | Insurance | Investment and business incentives.

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default FranchiseInquiry