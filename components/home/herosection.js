import Carousel from "react-slick";
import EligilityForm from "./eligilityForm";
function HeroSection({ loanProduct }) {
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
                                                            <h1>Looking to get a personal loan? You're in the right place.

</h1>
                                                            <div className="pointsArea">
                                                                  <ul>
                                                                        <li>
                                                                              <img src="/images/loan-w-icon.png" alt="" />
                                                                              <h3>Low-Interest Rates </h3>
                                                                        </li>
                                                                        <li>
                                                                              <img src="/images/interst-icon.png" alt="" />
                                                                              <h3>Easy Application Process </h3>
                                                                        </li>
                                                                        <li>
                                                                              <img src="/images/loan-term-icon.png" alt="" />
                                                                              <h3> Quick Disbursal </h3>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                      <div className="img-box">
                                                            <img src="/images/home-loan.png" alt="" />
                                                      </div>
                                                </div>

                                          </div>
                                          <div className="slickItem">
                                                <div className="topArea">
                                                      <div className="left">
                                                            <h1>The easy way to compare and get Car Loan</h1>
                                                            <div className="pointsArea">
                                                                  <ul>
                                                                        <li>
                                                                              <img src="/images/loan-w-icon.png" alt="" />
                                                                              <h3>Loans upto<br /> ₹ 100K available</h3>
                                                                        </li>
                                                                        <li>
                                                                              <img src="/images/interst-icon.png" alt="" />
                                                                              <h3>Lowest<br />interest rates</h3>
                                                                        </li>
                                                                        <li>
                                                                              <img src="/images/loan-term-icon.png" alt="" />
                                                                              <h3>Flexible <br /> loan termse</h3>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                      <div className="img-box">
                                                            <img src="/images/car-loan.png" alt="" />
                                                      </div>
                                                </div>

                                          </div>
                                          <div className="slickItem">
                                                <div className="topArea">
                                                      <div className="left">
                                                            <h1>The easy way to compare and get Credit Card</h1>
                                                            <div className="pointsArea">
                                                                  <ul>
                                                                        <li>
                                                                              <img src="/images/loan-w-icon.png" alt="" />
                                                                              <h3>Loans upto<br /> ₹ 100K available</h3>
                                                                        </li>
                                                                        <li>
                                                                              <img src="/images/interst-icon.png" alt="" />
                                                                              <h3>Lowest<br />interest rates</h3>
                                                                        </li>
                                                                        <li>
                                                                              <img src="/images/loan-term-icon.png" alt="" />
                                                                              <h3>Flexible <br /> loan termse</h3>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                      <div className="img-box">
                                                            <img src="/images/cc.png" alt="" />
                                                      </div>
                                                </div>

                                          </div>
                                          {/* <div className="slickItem">
                                                <div className="topArea">
                                                      <div className="left">
                                                            <h1>The easy way to compare and get personal loans</h1>
                                                            <div className="pointsArea">
                                                                  <ul>
                                                                        <li>
                                                                              <img src="/images/loan-w-icon.png" alt="" />
                                                                              <h3>Loans upto<br /> ₹ 100K available</h3>
                                                                        </li>
                                                                        <li>
                                                                              <img src="/images/interst-icon.png" alt="" />
                                                                              <h3>Lowest<br />interest rates</h3>
                                                                        </li>
                                                                        <li>
                                                                              <img src="/images/loan-term-icon.png" alt="" />
                                                                              <h3>Flexible <br /> loan termse</h3>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                      <div className="img-box">
                                                            <img src="/images/hd-img.png" alt="" />
                                                      </div>
                                                </div>

                                          </div> */}
                                    </Carousel>
                              </div>
                        </div>
                        {/* <!-- .header-form-area --> */}
                        <EligilityForm loanProduct={loanProduct} />
                  </div>



            </section>
      )

}
export default HeroSection