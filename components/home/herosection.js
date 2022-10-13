import Carousel from "react-slick";
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
                        <div class="header-form-area">
                              <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#loan"
                                                type="button" role="tab" aria-controls="home" aria-selected="true">Loan</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#creditCard"
                                                type="button" role="tab" aria-controls="creditCard" aria-selected="false">Credit
                                                Card</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#investment"
                                                type="button" role="tab" aria-controls="investment"
                                                aria-selected="false">Investment</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#insurance"
                                                type="button" role="tab" aria-controls="insurance" aria-selected="false">Insurance</button>
                                    </li>
                              </ul>
                              <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="loan" role="tabpanel" aria-labelledby="home-tab">
                                          <form action="">
                                                <div class="loan-form-area">
                                                      <div class="loanType">
                                                            <select>
                                                                  <option selected>Type of loan </option>
                                                                  <option>Normal</option>
                                                                  <option>Hard</option>
                                                                  <option>Expert</option>
                                                            </select>
                                                      </div>

                                                      <div class="loanType">
                                                            <input type="text" placeholder="Company Name" />
                                                      </div>
                                                      <div class="loanType salary_slidecontainer">
                                                            <label>Salary <div class="amount__box"><span>₹</span> 85K</div></label>
                                                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
                                                      </div>
                                                      <div class="loanType">
                                                            <input type="Number" placeholder="Pincode" />
                                                      </div>
                                                      <div class="search-button">
                                                            <button type="button" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Search</button>
                                                      </div>
                                                </div>
                                          </form>
                                    </div>
                                    <div class="tab-pane fade" id="creditCard" role="tabpanel" aria-labelledby="profile-tab">...
                                    </div>
                                    <div class="tab-pane fade" id="investment" role="tabpanel" aria-labelledby="contact-tab">...
                                    </div>
                                    <div class="tab-pane fade" id="insurance" role="tabpanel" aria-labelledby="contact-tab">...
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div class="modal fade panCard_Modal" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="modal-body">
                                          <h1 id="exampleModalToggleLabel">Credit Card</h1>
                                          <p>Get the best credit card suit your requirment</p>
                                          <div class="formContainer">
                                                <div class="inputRow">
                                                      <label for="">Pan Number <span>*</span></label>
                                                      <input type="text" placeholder="Will be verified" />
                                                </div>
                                                <div class="checkBoxRow">
                                                      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                      <label for="vehicle1">
                                                            <div class="termBox">
                                                                  Terms and conditions, By entering your personal details, you hereby authorize Refer Laon and or its service provider(s) to contact you and you agree to the <a href="#">Read More</a>
                                                            </div>

                                                      </label>
                                                </div>
                                                <div style={{ marginTop: "40px" }}>
                                                      <button class="custom__btn">Get Offer</button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )

}
export default HeroSection