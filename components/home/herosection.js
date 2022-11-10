import Carousel from "react-slick";
import EligilityForm from "./eligilityForm";
import Image from "next/image";

function HeroSection({ loanProduct, creditProduct }) {
      const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 4000,
            arrows: false,
      };

      return (
            <section className="heroSection">
                  <div className="container">
                        <div className="heroContent">
                              <div className="headMain_carousel">
                                    <Carousel {...settings}>
                                          <div className="slickItem">
                                                <div className="topArea">
                                                      <div className="left">

                                                            <h2>Looking to get a personal loan? You're in the right place.</h2>                                            
                                                            <div className="pointsArea">
                                                                  <ul>
                                                                        <li>
                                                                              <Image src="/images/gold-loan.png" alt="Low-Interest Rates" width="55" height="55" loading='lazy' />
                                                                              <h3>Low-Interest Rates </h3>
                                                                        </li>
                                                                        <li>
                                                                              <Image src="/images/arrow.png" alt="Easy Application Process" width="55" height="55" loading='lazy' />
                                                                              <h3>Easy Application Process </h3>
                                                                        </li>
                                                                        <li>
                                                                              <Image src="/images/business.png" alt="Quick Disbursal" width="55" height="55" loading='lazy' />
                                                                              <h3> Quick Disbursal </h3>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                      <div className="img-box">
                                                            <Image src="/images/home-loan.webp" alt="" loading='lazy' width="244" height="226"  />
                                                      </div>
                                                </div>

                                          </div>
                                          <div className="slickItem">
                                                <div className="topArea">
                                                      <div className="left">
                                                            <h2>Get Your Car Financed in a Jiffy!</h2>
                                                            <div className="pointsArea">
                                                                  <ul>
                                                                        <li>
                                                                              <Image src="/images/gold-loan.png" alt="Low-Interest Rates" width="55" height="55" loading='lazy' />
                                                                              <h3>Easy EMIs</h3>
                                                                        </li>
                                                                        <li>
                                                                              <Image src="/images/arrow.png" alt="Easy Application Process" width="55" height="55" loading='lazy' />
                                                                              <h3>Financing <br />All Models </h3>
                                                                        </li>
                                                                        <li>
                                                                              <Image src="/images/business.png" alt="Quick Disbursal" width="55" height="55" loading='lazy' />
                                                                              <h3>Flexible <br /> loan tenure</h3>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                      <div className="img-box">
                                                            <Image src="/images/car-loan.webp" alt="" loading='lazy' width="512" height="226" />
                                                      </div>
                                                </div>

                                          </div>
                                          <div className="slickItem">
                                                <div className="topArea">
                                                      <div className="left">
                                                            <h2>Check Out a New Way to Get Approved for Credit Cards</h2>
                                                            <div className="pointsArea">
                                                                  <ul>
                                                                        <li>
                                                                              <Image src="/images/gold-loan.png" alt="Low-Interest Rates" width="55" height="55" loading='lazy' />
                                                                              <h3>Instant Approvals</h3>
                                                                        </li>
                                                                        <li>
                                                                              <Image src="/images/arrow.png" alt="Easy Application Process" width="55" height="55" loading='lazy' />
                                                                              <h3>Cashbacks & Rewards</h3>
                                                                        </li>
                                                                        <li>
                                                                              <Image src="/images/business.png" alt="Quick Disbursal" width="55" height="55" loading='lazy' />
                                                                              <h3>Wide Range to Choose From </h3>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                      <div className="img-box">
                                                            <Image src="/images/hd-img.webp" alt="" loading='lazy' width="184" height="226" />
                                                            {/* width="256" height="322"  */}
                                                      </div>
                                                </div>
                                          </div>
                                    </Carousel>
                              </div>
                        </div>
                        {/* <!-- .header-form-area --> */}
                        <EligilityForm loanProduct={loanProduct} creditProduct={creditProduct} />
                  </div>



            </section>
      )

}
export default HeroSection