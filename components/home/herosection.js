import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useEffect } from 'react'

import axios from 'axios'
import { Radio } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { useRouter, withRouter } from 'next/router'
import Filterproduct from '../../pages/filter-product';
const herosection = () => {
      const router = useRouter()
      const [loans, setLoan] = useState([]);
      const [formData, setFormData] = useState({
            product_id: '',
            pincode: '',
            emp_type: 'salaried',
            salary: '',
            turnover: '',
            bank_id: '',
            category: 'loan'
      })

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value.trim()
            });
      };

      const onSubmit = async () => {

            router.push({
                  pathname: `/filter-product`,
                  query: formData
            })
      }

      const getLoan = async () => {
            const res = await axios.get('api/getpagebycatid/1');
            const data = await res.data;
            setLoan(res.data);
      }

      useEffect(() => {
            getLoan();
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
                                                                  <select name='product_id' onChange={handleChange}>
                                                                        {loans.map((item) => (
                                                                              <option value={item.id}>{item.post_title}</option>
                                                                        ))}
                                                                  </select>
                                                            </div>

                                                            <div className="loanType">
                                                                  <input name='pincode' type="text" placeholder="Pincode" onChange={handleChange} />
                                                            </div>
                                                            <div>
                                                                  <FormControl>
                                                                        <FormLabel id="demo-row-radio-buttons-group-label">Employee Type</FormLabel>
                                                                        <RadioGroup
                                                                              row
                                                                              aria-labelledby="demo-row-radio-buttons-group-label"
                                                                              value={formData.emp_type}
                                                                              onChange={handleChange}
                                                                        >
                                                                              <FormControlLabel name='emp_type' value="salaried" control={<Radio />} label="Salaried" />
                                                                              <FormControlLabel name='emp_type' value="self-employed" control={<Radio />} label="Self Employed " />

                                                                        </RadioGroup>
                                                                  </FormControl>
                                                            </div>
                                                            <div className="loanType">
                                                                  {formData.emp_type === 'salaried' && <input name='salary' type="text" placeholder="Salary" onChange={handleChange} />}
                                                                  {formData.emp_type === 'self-employed' && <input name='turnover' type="text" placeholder="Turn Over" onChange={handleChange} />
                                                                  }

                                                            </div>

                                                            <div className="search-button">
                                                                  <button onClick={onSubmit} type="button">Search</button>
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


export default withRouter(herosection);