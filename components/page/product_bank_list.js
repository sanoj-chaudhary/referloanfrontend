
import { useState,useEffect } from 'react';
import {  } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import LeftFilterProductBank from '../page/left_filter_product_bank'

const getSearchData = () => {

  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('searchData');

    if (items) {
    console.log(items)
      return JSON.parse(localStorage.getItem('searchData'));
    } else {
      return [];
    }
  }
}

const midcontent = ({ data }) => {

  const a = getSearchData()
  const [products, setProducts] = useState([])
  const [searchData, setsearchData] = useState(getSearchData())
  console.log(searchData)
  const searchProduct = async () => {

    try {
      const response = await axios.get('https://api.referloan.in/api/banks', searchData);
      if (response) {
        const data = await response.data;
        console.log(data)
        setProducts(data.data)
      } else {
        alert('failed')
      }
    } catch (error) {
      alert('failed')
      //console.log("message", error.message)
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
          Product Name | salary | pincode
          {/*  {a} {searchData.salary} */}
          {/* {JSON.parse(searchData)['salary']}  */}
          </div>
        </div>
      </section>
      <div className="container">
        <section className="cardOffer_area">
          
          <LeftFilterProductBank />

          <div className="cardlist-Pnl">
            {products.map((item,key) => (
              <div className="lstRow" key={key}>
                <div className="topPnl">
                  <div className="cardImg">
                    <Image src={'/uploads/product_bank/'+item.bankProductName+'.png'} height="214" width="340" />
                  </div>
                  <div className="cardDtl_pnl">
                    <div className="headingBar">
                      <h2>{item.bankProductName}</h2>
                      <div className="cibilBox">
                        <h3><img src="/images/cibil-meter.png" alt="" />Excellent</h3>
                        <p>Approval Chances {item.chance} %</p>
                      </div>
                    </div>

                    <div className="benefitRow">
                      <ul>
                        <li>
                          <span>Min Interest</span>{JSON.parse(item.bankProductInfo)['interest_min']} % 
                        </li>
                        <li>
                          <span>Max Interest</span>{JSON.parse(item.bankProductInfo)['interest_max']} %
                        </li>
                        <li>
                          <span>Processing Fees</span>{JSON.parse(item.bankProductInfo)['processing_fee']} 
                        </li>
                        <li>
                          <span>Fees</span>{JSON.parse(item.bankProductInfo)['fee']} %
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