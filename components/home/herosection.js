import Carousel from "react-slick";
import EligilityForm from "./eligilityForm";
function HeroSection() {
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
            <section class="heroSection">
                  <div class="container">
                        <div class="heroContent">
                              <div class="headMain_carousel">
                                    <Carousel {...settings}>
                                          <div className="slickItem">
                                                <div class="topArea">
                                                      <div class="left">
                                                            <h1>The easy way to compare and get personal loans</h1>
                                                            <div class="pointsArea">
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
                                                      <div class="img-box">
                                                            <img src="/images/hd-img.png" alt="" />
                                                      </div>
                                                </div>

                                          </div>
                                          <div className="slickItem">
                                                <div class="topArea">
                                                      <div class="left">
                                                            <h1>The easy way to compare and get personal loans</h1>
                                                            <div class="pointsArea">
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
                                                      <div class="img-box">
                                                            <img src="/images/hd-img.png" alt="" />
                                                      </div>
                                                </div>

                                          </div>
                                          <div className="slickItem">
                                                <div class="topArea">
                                                      <div class="left">
                                                            <h1>The easy way to compare and get personal loans</h1>
                                                            <div class="pointsArea">
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
                                                      <div class="img-box">
                                                            <img src="/images/hd-img.png" alt="" />
                                                      </div>
                                                </div>

                                          </div>
                                          <div className="slickItem">
                                                <div class="topArea">
                                                      <div class="left">
                                                            <h1>The easy way to compare and get personal loans</h1>
                                                            <div class="pointsArea">
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
                                                      <div class="img-box">
                                                            <img src="/images/hd-img.png" alt="" />
                                                      </div>
                                                </div>

                                          </div>
                                    </Carousel>
                              </div>
                        </div>
                        {/* <!-- .header-form-area --> */}
                        <EligilityForm />
                  </div>

               
                  
            </section>
      )

}
export default HeroSection