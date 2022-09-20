import loanwicon from './../../public/images/loan-w-icon.png'
import inserticon from './../../public/images/interst-icon.png'
import loantermicon from './../../public/images/loan-term-icon.png'
import hdimg from './../../public/images/hd-img.png'

import Image from 'next/image'
const herosection = () => {
      return (
            <section className="heroSection">
                  <div className='container'>
                        <div className='row'>
                              <div className='col-sm-6'>
                                    <h1 className='left'>The easy way to compare and get personal loans</h1>
                                    <div className='pointwrapper'>
                                          <Image src={loanwicon} height={25} width={30} alt="" />
                                          <h3>Loans upto<br /> ₹ 100K available</h3>

                                          <Image src={inserticon} height={25} width={30} alt="" />
                                          <h3>Lowest<br />interest rates</h3>

                                          <Image src={loantermicon} height={25} width={30} alt="" />
                                          <h3>Flexible <br /> loan termse</h3>
                                    </div>
                              </div>

                              <div className='col-sm-6 d-flex justify-content-end'>
                                    <Image src={hdimg} height={255} width={200} alt="" />
                              </div>
                        </div>

                        <div className='row'>
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

                                                            <div className='row'>

                                                                  <div className='col-sm-2'>
                                                                        <select className="form-control shadow-0">
                                                                              <option value="" selected>Type of loan </option>
                                                                              <option value="">Normal</option>
                                                                              <option value="">Hard</option>
                                                                              <option value="">Expert</option>
                                                                        </select>
                                                                  </div>

                                                                  <div className='col-sm-2'>
                                                                        <input className="form-control shadow-0" type="text" placeholder="Company Name" value='' />
                                                                  </div>

                                                                  <div className='col-sm-4 loanType salary_slidecontainer'>
                                                                        <label>Salary <div className="amount__box"><span>₹</span> 85K</div></label>
                                                                        <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                                                                  </div>

                                                                  <div className='col-sm-2'>
                                                                        <input className="form-control shadow-0" value='' type="text" placeholder="Pincode" />
                                                                  </div>

                                                                  <div className='col-sm-2'>
                                                                        <div className="search-button">
                                                                              <button type="button">Search</button>
                                                                        </div>
                                                                  </div>

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