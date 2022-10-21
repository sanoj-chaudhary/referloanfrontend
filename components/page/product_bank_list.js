
import { useState,useEffect } from 'react';
import {  } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import LeftFilterProductBank from '../page/left_filter_product_bank'


const midcontent = ({ url,refer,data }) => {

  const [products, setProducts] = useState([])
  const [content, setContent] = useState([])
  const searchProduct = async () => {
   // console.log(url)

    try {
      let finaldata;
      
      const response1 = await axios.get(`${process.env.APP_URL}/get_search_info_local/`+refer);
      const data1     = await response1.data;
      if(data1)
      {
        console.log(data1)

        finaldata = data1[0]
        console.log(finaldata)
  
        setContent(finaldata)

        const response = await axios.post('https://api.referloan.in/api/banks', finaldata);
        if (response) {
          const data = await response.data;
          console.log(data)
          setProducts(data.data)
        } else {
          alert('failed')
        }
      } 
    } catch (error) {
      alert('failed')
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
          {content.name} | {content.salary} | {content.pincode}
          </div>
        </div>
      </section>
      <div className="container">
        <section className="cardOffer_area">
          
          <LeftFilterProductBank content={content} />

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