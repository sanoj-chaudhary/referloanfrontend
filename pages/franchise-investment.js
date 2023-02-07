import Head from "next/head"
import img from "next/image"
import Link from "next/link"
import LeaveQuestion from "./../components/page/leaveQuestion";
import Faq from "./../components/page/faq";
import { useRouter } from 'next/router';
import CallbackForm from "../components/page/callbackForm";
import { useEffect, useState } from "react";


function FranchiseInquiry() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(false)
    });
    return (
        <>
         <section className="inner-hero-banner card-page">
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="in-hero-content-box">
                                <div className="inner-text">
                                    <div className="hero-anim">
                                        <img src="/images/debit-card.png" height="20" />
                                        <p><span className="circle-h"></span> Explore Your Self</p>
                                    </div>
                                    <h2 className="in-banner-heading">
                                        Franchise <b>Partner</b>
                                    </h2>
                                    <h5 className="h-subheading">Let's start with something Big.</h5>
                                    <p className="inb-subheading">
                                        ReferLoan introduced a franchise model which allows
                                        you to grow your business at zero investment and risk-free life.
                                    </p>
                                    <div className="hero-btn-box">
                                        <div className="feature-four__top-btn-box">
                                            <button className="lq-toggle-btn thm-btn feature-four__top-btn">Partner</button>
                                        </div>
                                        <div className="leave-question partner-form">
                                            <div className="lq-heading-box">
                                            <img src="icon/Cards-feature/faq.png" />  
                                                <h2>Get Partnership</h2>
                                            </div>
                                            <form className="lq-form" id="lq-form">
                                                <div className="input-wrapper form-group">
                                                    <input type="text" id="name" required />
                                                    <label for="user">Your Name</label>
                                                </div>
                                                <div className="input-wrapper form-group">
                                                    <input type="emial" id="emial" required />
                                                    <label for="user">Your Email</label>
                                                </div>
                                                <div className="input-wrapper form-group">
                                                    <input type="tel" id="phone" required />
                                                    <label for="user">Your Phone</label>
                                                </div>
                                                <div className="success-box">
                                                    <p className="s-title">
                                                        Our Customer Support will Contact you soon...
                                                    </p>
                                                </div>
                                                <button type="submit" className="btn thm-btn feature-four__top-btn">Get
                                                    Partnership</button>
                                            </form>
                                        </div>
                                        <div className="play-btn">
                                            <a id="play-video" className="video-play-button" href="#" data-bs-toggle="modal"
                                                data-bs-target="#how-to-play">
                                                <span></span>
                                            </a>
                                            <span className="htp">How To Apply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 in-hBanner-col">
                            <div className="in-hBanner franchaise-banner-image">
                                <img src="/images/partnerbanner.png" />
                            </div>
                        </div>
                    </div>
                </div>
         </section>

            
            {/* Products Count Section */}

            <section className="ourp-section">
                <div className="container">
                    <div className="row counter-row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="counter-container">
                                <div className="counter" data-target="345">345</div>
                                <div className="wdr"></div>
                                <span>Financial Products</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="counter-container">
                                <div className="counter" data-target="175">175</div>
                                <div className="wdr"></div>
                                <span>Banks/NBFCs tie-ups</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="counter-container">
                                <div className="counter" data-target="40">40</div>
                                <div className="wdr"></div>
                                <span>Franchise Openings</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            

                            <div className="counter-container">
                                <div className="counter" data-target="100">PAN</div>
                                <div className="wdr"></div>
                                <span>India Presence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
    {/* <!-- who we are section --> */}


<section className="what-section">
    <div className="container">
        <div className="row what-first">
            <div className="col-lg-6 col-md-12">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="what-car-section what-car-section-1">
                            <div className="what-card light-yellow">
                                <div className="what-card-in">
                                    <div className="wc-img-box"><img src="/images/icon/garanty.png" height="70" /></div>
                                    <div className="wc-content">
                                        <h4>Guarantee</h4>
                                        <p> With our association you will be having high returns, guaranteed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="what-card light-pink">
                                <div className="what-card-in">
                                    <div className="wc-img-box"><img src="/images/icon/speed.png" height="70" /></div>
                                    <div className="wc-content">
                                        <h4>No-Risk</h4>
                                        <p>Without any fear of losing something, you can earn big and get a stable business too. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="what-car-section what-car-section-2">
                            <div className="what-card light-blue">
                                <div className="what-card-in">
                                    <div className="wc-img-box"><img src="/images/icon/reliability.png" height="70" />
                                    </div>
                                    <div className="wc-content">
                                        <h4>Reliability</h4>
                                        <p>Connected with  175+ banks and NBFCs along with 345+ Financial Verticals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="what-card light-green">
                                <div className="what-card-in">
                                    <div className="wc-img-box"><img src="/images/icon/experience.png" height="70" />
                                    </div>
                                    <div className="wc-content">
                                        <h4>Experience</h4>
                                        <p>We have got years of industry expertise and experience, that you can certainly count on.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="what-heading">
                    <img src="/images/icon/Cards-feature/Artboard 1 copy 23.png" />
                    <span className="sub-heaidng">The Breakthrough You Have Been Waiting For!</span>
                    <h2 className="">Why people <b>choose us</b></h2>
                    <div className="wdr"></div>
                    <p>
                       ReferLoan is a leading fintech company with more than 175+ banks and NBFCs along with 345+ Financial Verticals.
                       Get a Free ReferLoan Franchise and become your own boss – with ReferLoan Franchise. Our products are for everyone and 1000s of people seek – 
                       loans, Credit cards, Insurance, and Investments each day, so your business is not going in the wrong direction anytime soon. 
                    </p>
                </div>

                <div className="why-choose-img-box">
                    <img src="/images/partner-why.png" />
                </div>
                <div className="feature-four__top-btn-box">
                    <a href="#" className="thm-btn feature-four__top-btn">Apply for Loan</a>
                </div>
            </div>

        </div>
    </div>
</section>



<section className="become-partner-section">
<div className="become-container container">
    <div className="bps-top-section">
        <div className="title-img"><img src="/images/icon/meet.png" /></div>
        <div className="bps-heading-box">
             <h2 className="bps-heading"> Do You want to Become</h2>
             <span className="bps-sub-heading">Kickstart a New Journey to a Secure Future!</span>
            <div className="wdr"></div>
            <p>
                Most people want to start working for themselves and become their own boss. 
                Some want to make more money, while some want freedom. Whatever your reasons are, there is a wide range
                of choices but one of the smartest investments you could make is by associating yourself with ReferLoan Franchise. 
            </p>
        </div>
    </div>
    <div className="partner-ul-box">
         <ul className="partner-ul">
           
            <li className="prli">
                <div className="li-dots"></div>

                <div className="ul-div">  
                    <div className="ul-div-in">
                       <div className="ul-img">
                            <img src="images/entrepreneur-img.png" />
                       </div>
                       <div className="content-ul-div">
                           <h3>A successful entrepreneur?</h3>
                           <p>
                               We get many ideas and innovations every day to become successful entrepreneurs and also have a dream to do so, isn’t it?
                           </p>
                           <a href="" className="ul-div-link">learn More</a>
                       </div>
                    </div>
                </div>
            </li>
            <li className="prli">
                <div className="li-dots"></div>

                <div className="ul-div">  
                    <div className="ul-div-in">
                       <div className="ul-img">
                            <img src="images/boss-img.png" />
                       </div>
                       <div className="content-ul-div">
                           <h3>Become your own Boss?</h3>
                           <p>
                              Work on your flexible timings without any pressure from anyone because you are the boss of your own business
                           </p>
                           <a href="" className="ul-div-link">learn More</a>
                       </div>
                    </div>
                </div>
            </li>
            <li className="prli">
                <div className="li-dots"></div>

                <div className="ul-div">  
                    <div className="ul-div-in">
                       <div className="ul-img">
                            <img src="images/earn-money.png" />
                       </div>
                       <div className="content-ul-div">
                           <h3>Earn huge money</h3>
                           <p>
                                As many startups need to invest at first and then after the successful 
                                setup, you start getting profit but not anymore with the ReferLoan franchise model.
                           </p>
                           <a href="" className="ul-div-link">learn More</a>
                       </div>
                    </div>
                </div>
            </li>
            <li className="prli">
                <div className="li-dots"></div>

                <div className="ul-div">  
                    <div className="ul-div-in">
                       <div className="ul-img">
                            <img src="images/growing-img.png" />
                       </div>
                       <div className="content-ul-div">
                           <h3>Growing and Stressful life</h3>
                           <p>
                              Everyone wants to grow their business to the next level with easy and calming life.
                           </p>
                           <a href="" className="ul-div-link">learn More</a>
                       </div>
                    </div>
                </div>
            </li>
           
         </ul>
    </div>
</div>
</section>

<section className="process-section">
<div className="container">
    <div className="row">
        <div className="col-lg-12 col-md-12">

            <div className="featured-heading-box">
                <span className="sub-heading-in">The Right Step to </span>
                <h2 className="Features-heading common-heading">Build Your Business Your Own Way!</h2>
                {/* <!-- <div className="dr"></div>
                <p> Credit cards are one of the best ways to increase a person's purchasing power. 
                    They also offer rewards on your spending, </p> --> */}
            </div>
        </div>

    </div>
    <div className="process__inner">
        <div className="process-shape-1">
            <img src="/images/process.png" alt="" />
        </div>
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="process-card process-card-1">
                    <div className="process-icon">
                        <div className="process-icon-in"><img src="/images/icon/select.png" /></div>
                        <span className="overlay">
                            01
                        </span>
                    </div>

                    <div className="process-text">
                        <h5>Visit Our Website</h5>
                        <p>For the first step, you will have to visit our website to explore the options that fit your needs.</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="process-card process-card-2">
                    <div className="process-icon">
                        <div className="process-icon-in"><img src="/images/icon/meeting.png" /></div>
                        <span className="overlay">
                            02
                        </span>
                    </div>

                    <div className="process-text">
                        <h5>Select and Apply</h5>
                        <p>Once you shortlist the investment you have been looking for, apply for it, and proceed with the further process. </p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="process-card process-card-3">
                    <div className="process-icon">
                        <div className="process-icon-in"><img src="/images/icon/meet.png" /></div>
                        <span className="overlay">
                            03
                        </span>
                    </div>

                    <div className="process-text">
                        <h5>Submit Your Document </h5>
                        <p>One of the most important steps. Now you will have to submit all the required documents digitally.</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="process-card process-card-4">
                    <div className="process-icon">
                        <div className="process-icon-in"><img src="/images/icon/get.png" /></div>
                        <span className="overlay">
                            04
                        </span>
                    </div>

                    <div className="process-text">
                        <h5>Enjoy Your Credit Card!</h5>
                        <p>Once your application gets approved based on your eligibility, you will be having your investment plan in hand. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</section>

<section className="card-section">
<div className="container">
    <div className="row">
         <div className="col-12 col-md-6 col-lg-6">
            <div className="have-money-card">
                <div className="dhm-dot"></div>
                <img src="/images/no-money.png" alt="" className="dhm-money"/>
                <div className="wdr-dhm"></div>
                <div className="dhm-content">
                    <h2>Don’t Have Money to invest in your business?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ipsa optio exercitationem in cupiditate ipsum quidem ab, accusantium qui commodi deserunt at est a mollitia, provident tenetur beatae, doloremque hic.</p>
                </div>
            </div>
         </div>
         <div className="col-12 col-md-6 col-lg-6">
            <div className="have-money-card">
                <div className="dhm-dot"></div>
                <img src="/images/risk-img.png" alt="" className="dhm-money" />
                <div className="wdr-dhm"></div>
                <div className="dhm-content">
                    <h2>Afraid of high risk of business failure</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ipsa optio exercitationem in cupiditate ipsum quidem ab, accusantium qui commodi deserunt at est a mollitia, provident tenetur beatae, doloremque hic.</p>
                </div>
            </div>
         </div>
    </div>
</div>
</section>



<section className="fra-benefits-section" >
<div className="container">
    <div className="bps-top-section">
        <div className="title-img"><img src="/images/icon/meet.png" /></div>
        <div className="bps-heading-box">
             <h2 className="bps-heading">get ReferLoan Franchise</h2>
             <span className="bps-sub-heading">Yes, this is the truth and to get ReferLoan Franchise you just need</span>
            <div className="wdr"></div>
        </div>
    </div>
    <div className="row fra-bene-row">
        <div className="col-12 col-lg-6">
            <div className="img-box">
                 <img src="images/frPartner.png" />
            </div>
       </div>
       <div className="col-12 col-lg-6">
          <div className="franchise-bene">
            <ul className="franchise-bene-ul">
                <li>Office with a minimum of 100 sq. ft.</li>
                <li>Team of 5 to 20 persons.</li>
                <li>Existing DSA running a business in 2 - 3 Verticals.</li>
                <li>Minimal computer knowledge of e-mail and Excel.</li>
                <li>Bankers who want to start their own business.</li>
                <li>Professionals</li>
                <li>Chartered Accountant .</li>
                <li>Company secretary .</li>
                <li>Cost and work accountant .</li>
                <li>Self-employed .</li>
            </ul>
          </div>
       </div>
    
    </div>
</div>
</section>


    {/* <!-- mobile section --> */}

<section className="mobile-section">
<div className="container">
     <div className="m-row">
       <div className="mobile-content">
          <div className="heaidng-mobile">
             <h2>
                Zero Investment 
                <br/>
                <b>High Grow</b>
             </h2>
             <div className="feature-four__top-btn-box">
                <a href="#" className="thm-btn feature-four__top-btn">Apply for Loan</a>
            </div>
          </div>
       </div>
       <div className="mobile-img">
            <img src="/images/highrish.png"/>
       </div>
     </div>
</div>
</section>






<section className="fra-benefits-section" >
<div className="container">
    <div className="bps-top-section">
        <div className="title-img"><img src="/images/icon/meet.png" /></div>
        <div className="bps-heading-box">
             <h2 className="bps-heading">ReferLoan Franchise Benefits</h2>
             <span className="bps-sub-heading">The REFERLOAN FRANCHISE MODEL is here for you with HUGE and UNLIMITED Benefits.</span>
            <div className="wdr"></div>
        </div>
    </div>
    <div className="row fra-bene-row">
      
       <div className="col-12 col-lg-6">
          <div className="franchise-bene">
            <ul className="franchise-bene-ul">
               <li> Be your own boss</li>
               <li> Less operating cost with a higher growth rate.</li>
               <li> Rapid expansion with brand recognition.</li>
               <li> Connect with a huge marketplace.</li>
               <li> Connect directly all financial products and Banks/NBFCs.</li>
               <li> Start your business from the first day.</li>
               <li> Full digital training of products.</li>
            </ul>
          </div>
       </div>
       <div className="col-12 col-lg-6">
        <div className="img-box">
             <img src="images/knowledge-banner.png" />
        </div>
   </div>
    </div>
</div>
</section>




<section>
      <div className="modal video-model show" id="how-to-play">
            <div className="modal-dialog video-model-dialog">
              <div className="modal-content video-model-content">
          
                <div className="modal-header video-model-header">
                  <button type="button" className="btn-close thm-btn feature-four__top-btn" data-bs-dismiss="modal">X</button>
                </div>
          
                <div className="modal-body video-model-body">
                    <div className="box">
                         
                          <video id="testVideo" className="bg_video" controls playsinline>
                          <source src="https://ak8.picdn.net/shutterstock/videos/1023566578/preview/stock-footage-beautiful-sunrise-world-skyline-planet-earth-from-space-planet-earth-rotating-animation-clip.mp4" type="video/mp4" />
                          <div className="video_controls paused">
                            <button type="button" className="btn_play"  ></button>
                            <button type="button" className="btn_pause"  ></button>
                          </div>
                        </video>
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