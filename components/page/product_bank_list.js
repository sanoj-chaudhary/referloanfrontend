
import { useState,useEffect } from 'react';
import {  } from 'react';
import axios from 'axios';
import LeftFilterProductBank from '../page/left_filter_product_bank'

const getSearchData = () => {

  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('searchData');

    if (items) {
      return JSON.parse(localStorage.getItem('searchData'));
    } else {
      return [];
    }
  }
}

const midcontent = ({ data }) => {

  const [products, setProducts] = useState([])
  const [searchData, setsearchData] = useState(getSearchData())

  const searchProduct = async () => {

    try {
      const response = await axios.post('https://api.referloan.in/api/banks', searchData);
      if (response) {
        const data = await response.data;
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
    searchProduct()
  }, []);

  return (
    <>

      <section class="grabDeal_header">
        <div class="container">
          <div class="headingArea">
            Heading
          </div>
        </div>
      </section>
      <div class="container">
        <section class="cardOffer_area">
          
          <LeftFilterProductBank />
          
          
          <div class="cardlist-Pnl">
            {products.map((item) => (
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
                    {/* {item.bankProductInfo} */}
                     {/* {item.bankProductInfo.map((item1,key1) => (  
                        <div>{item1.slug}</div>
                      ))} */}
                      {/* <ul>
                        <li>
                          <span>Best Suited For</span>
                          <i class="fas fa-angle-right"></i>&nbsp; CashBack&nbsp;&nbsp; <i class="fas fa-angle-right"></i> &nbsp;Lounge &nbsp;&nbsp;<i class="fas fa-angle-right"></i> &nbsp; Shopping
                        </li>
                        <li>
                          <span>1st Year fee</span>
                          ₹ 500
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
                {/* <!-- actionBar --> */}
                <div class="actionPnl">
                  {/* <div class="compareBox">
                  <input type="checkbox" id="compare" name="compare" value="compare" />
                  <label for="compare"> Compare</label>
              </div> */}
                  {/* <!-- offer --> */}
                  {/* <div class="offerBox">
                  <a href="#"><img src="/images/icon/discount-icon.png" alt="" /> Get Flipkart Voucher</a>
              </div> */}

                  <div class="actBtnArea">
                    <a href="/" class="grabDeal">Grab Deal</a>
                    <a href="/" class="deatilBtn">View Detail <span class="material-icons">
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