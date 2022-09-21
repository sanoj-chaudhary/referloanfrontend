import loanwicon from './../../public/images/loan-w-icon.png'
import inserticon from './../../public/images/interst-icon.png'
import loantermicon from './../../public/images/loan-term-icon.png'
import hdimg from './../../public/images/hd-img.png'

import Image from 'next/image'
const herosection = () => {
      return (
            <section className="heroSection">
                  <div className="container">
                        <div className="heroContent">
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
                              {/* <!-- .header-form-area --> */}
                              <div className="header-form-area">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                          <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#loan" type="button" role="tab" aria-controls="home" aria-selected="true">Loan</button>
                                          </li>
                                          <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#creditCard" type="button" role="tab" aria-controls="creditCard" aria-selected="false">Credit Card</button>
                                          </li>
                                          <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#investment" type="button" role="tab" aria-controls="investment" aria-selected="false">Investment</button>
                                          </li>
                                          <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#insurance" type="button" role="tab" aria-controls="insurance" aria-selected="false">Insurance</button>
                                          </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                          <div className="tab-pane fade show active" id="loan" role="tabpanel" aria-labelledby="home-tab">
                                                <form action="">
                                                      <div className="loan-form-area">
                                                            <div className="loanType">
                                                                  <select>
                                                                        <option value='1' selected>Type of loan </option>
                                                                        <option value='2' >Normal</option>
                                                                        <option value='3'>Hard</option>
                                                                        <option value='5'>Expert</option>
                                                                  </select>
                                                            </div>

                                                            <div className="loanType">
                                                                  <input type="text" placeholder="Company Name" />
                                                            </div>
                                                            <div className="loanType salary_slidecontainer">
                                                                  <label>Salary <div className="amount__box"><span>₹</span> 85K</div></label>
                                                                  <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                                                            </div>
                                                            <div className="loanType">
                                                                  <input type="text" placeholder="Pincode" />
                                                            </div>
                                                            <div className="search-button">
                                                                  <button type="button">Search</button>
                                                            </div>
                                                      </div>
                                                </form>
                                          </div>
                                          <div className="tab-pane fade" id="creditCard" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                          <div className="tab-pane fade" id="investment" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                          <div className="tab-pane fade" id="insurance" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default herosection