import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const getSearchData = () =>{

  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('searchData');

    if(items){
      return JSON.parse(localStorage.getItem('searchData'));
    }else{
      return [];
    }
  }
 
}


const midcontent = ({ data }) => {

  const [products, setProducts] = useState([])
  
  const [searchData, setsearchData] = useState(getSearchData())
console.log(products)

  const searchProduct = async () => {

    try {
      
      const response = await axios.post('https://api.referloan.in/api/banks', searchData);
      if (response) {
        const data = await response.data;

        alert('success')
        setProducts(data.data)
       
      } else {
        alert('failed')
      }
    } catch (error) {
      alert('failed')
      console.log("message", error.message)
    }
  }


  useEffect(() => {

    setTimeout(() => {


    
      searchProduct()
    }, 2000);



  }, []);

  return (
    <>

<section class="grabDeal_header">
        <div class="container">
            <div class="headingArea">
                <div class="iconBox">
                    <img src="/images/ccard-bnr-icon.png" alt="" />
                </div>
                <div class="leftCol">
                    <div class="heading_box">
                        <h2>11 Credit cards</h2>
                        <p>Available for you</p>
                    </div>
                    <div class="rightCol">
                        <a href="#">Edit Profile</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <div class="container">
        <section class="cardOffer_area">
            <div class="filterArea">
                <div class="inputRow">
                    <label for="">Loan Purpose</label>
                    <select class="form-select" aria-label="Type of loan ">
                        <option selected>Type of loan</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="inputRow">
                    <label for="">Loan Amount</label>
                    <select class="form-select" aria-label="Type of loan ">
                        <option selected>₹ 50,000,00</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="inputRow">
                    <label for="">Annual Income</label>
                    <select class="form-select" aria-label="Type of loan ">
                        <option selected>₹ 20,000,00</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <button class="applyBtn" title="Apply Filter">Apply Filter</button>
            </div>
            <div class="cardlist-Pnl">
                {/* <!-- list row --> */}
               

                {products.map((item)=>(
          <div class="lstRow">
          <div class="topPnl">
              <div class="cardImg">
                  <img src="/images/axis-card.png" alt="" />
              </div>
              <div class="cardDtl_pnl">
                  <div class="headingBar">
                      <h2>{item.bankProductName}</h2>
                      <div class="cibilBox">
                          <h3><img src="/images/cibil-meter.png" alt="" />Excellent</h3>
                          <p>Approval Chances {item.chance} %</p>
                      </div>
                  </div>
                  {/* <!-- benefitRow --> */}
                  <div class="benefitRow">
                      <ul>
                          <li>
                              <span>Best Suited For</span>
                              = CashBack = Lounge = Shopping
                          </li>
                          <li>
                              <span>1st Year fee</span>
                              ₹ 500
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          {/* <!-- actionBar --> */}
          <div class="actionPnl">
              <div class="compareBox">
                  <input type="checkbox" id="compare" name="compare" value="compare" />
                  <label for="compare"> Compare</label>
              </div>
              {/* <!-- offer --> */}
              {/* <div class="offerBox">
                  <a href="#"><img src="/images/icon/discount-icon.png" alt="" /> Get Flipkart Voucher</a>
              </div> */}

              <div class="actBtnArea">
                  <a href="#" class="grabDeal">Grab Deal</a>
                  <a href="#" class="deatilBtn">View Detail <span class="material-icons">
                          keyboard_arrow_down
                      </span></a>
              </div>
          </div>
      </div>
        ))}

            </div>
        </section>
    </div>

      
    </>

  )
}

export default midcontent