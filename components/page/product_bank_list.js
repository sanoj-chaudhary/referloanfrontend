
import { useState,useEffect } from 'react';
import {  } from 'react';
import axios from 'axios';
import Link from 'next/link';
import LeftFilterProductBank from '../page/left_filter_product_bank'

const getSearchData = () => {

  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('searchData');

    if (items) {
     // console.log(items)
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
        console.log(data)
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

      <section className="grabDeal_header">
        <div className="container">
          <div className="headingArea">
            Heading
            
          </div>
        </div>
      </section>
      <div className="container">
        <section className="cardOffer_area">
          
          <LeftFilterProductBank />
          
          
          <div className="cardlist-Pnl">
            {products.map((item) => (
              <div className="lstRow">
                <div className="topPnl">
                  <div className="cardImg">
                    <img src="/images/axis-card.png" alt="" />
                  </div>
                  <div className="cardDtl_pnl">
                    <div className="headingBar">
                      <h2>{item.bankProductName}</h2>
                      <div className="cibilBox">
                        <h3><img src="/images/cibil-meter.png" alt="" />Excellent</h3>
                        <p>Approval Chances {item.chance} %</p>
                      </div>
                    </div>
                    {/* <!-- benefitRow --> */}
                    <div className="benefitRow">
                    {/* {item.bankProductInfo}
                    {JSON.stringify(item.bankProductInfo)}
                    {JSON.parse(item.bankProductInfo)} */}
                     {/* {item.bankProductInfo.map((item1,key1) => (  
                        <div>{item1.slug}</div>
                      ))} */}
                      <ul>
                        <li>
                          <span>Best Suited For</span>Lounge 
                        </li>
                        <li>
                          <span>1st Year fee</span>
                          ₹ 500
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="actionPnl">
                  <div className="actBtnArea">
                    <Link href={item.slug}><a className="grabDeal">Grab Deal</a></Link>
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