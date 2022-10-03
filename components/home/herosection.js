import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState,useEffect} from 'react'
import FormGroup from '@mui/material/FormGroup';

import Image from 'next/image'
import axios from 'axios'
import { Radio } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
const herosection = () => {
const [loans,setLoan] = useState([]);

const getLoan = async ()=>{
     const res = await axios.get('api/getpagebycatid/1');
     const data =  await res.data;
     setLoan(res.data);
     
}

useEffect(() => {
      getLoan();
      console.log(loans); 
}, []);


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
                                                            {loans.map((item) =>(
                                                                  <option value={item.id}>{item.post_title}</option>
                                                            ))}
                                                           </select>
                                                            </div>
                                                            <div className="loanType">
                                                            <input type="text" placeholder="Salary" />
                                                            </div>
                                                            <div className="loanType">
                                                                  <input type="text" placeholder="Pincode" />
                                                            </div>
                                                                  <div>
                                                                  <FormControl>
                                                                        <FormLabel id="demo-row-radio-buttons-group-label">Employee Type</FormLabel>
                                                                        <RadioGroup
                                                                        row
                                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                                        name="row-radio-buttons-group"
                                                                        >
                                                                        <FormControlLabel value="salaried" control={<Radio />} label="Salaried" />
                                                                        <FormControlLabel value="self-employed" control={<Radio />} label="Self Employed " />
                                                                        
                                                                        </RadioGroup>
                                                                  </FormControl>
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