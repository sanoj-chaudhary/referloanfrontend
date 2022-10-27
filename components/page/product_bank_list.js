
import { db } from "./../../config/db";
import { useState,useEffect } from 'react';
import {  } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";
import LeftFilterProductBank from '../page/left_filter_product_bank'


const midcontent = ({ url,refer,data }) => {

  const [products, setProducts] = useState([])
  const [content, setContent] = useState([])
  const [ProductByCat, setProductByCat] = useState([])
  

  const searchProduct = async () => {
    try 
    {
      const split     = url.split("/");
      
      let slug;
      let salary;
      let pincode;

      if(split[1]=='salary')
      {
        slug = split[0];
        salary = split[2];
        pincode = split[4];
      }
      else
      {
        slug = split[0]+'/'+split[1];
        salary = split[3];
        pincode = split[5];
      }

      const response1 = await axios.get(`${process.env.APP_URL}/get_product_by_slug/`+slug);
      const data1     = await response1.data;

      let content_data  = data1[0];
      
      let product_id = content_data.id;
      let p_name = content_data.name;
      let cat_id = content_data.cat_id;
     console.log(cat_id)
      
      const finaldata = {product_id,salary,pincode}; 

         const response2 = await axios.post('https://api.referloan.in/api/banks', finaldata);
         if (response2) 
         {
          const data2 = await response2.data;
          setContent({p_name,salary,pincode})
          setProducts(data2.data)
        } else {
          alert('product bank list - failed')
        }

        const response3 = await axios.get(`${process.env.APP_URL}/get_product_by_catid/`+cat_id);
        const data3     = await response3.data;
        console.log(data3)
        setProductByCat(data3.data)
         
    } 
    catch (error) {
      alert('product info - failed')
     }
  }
  useEffect(() => {
    searchProduct()
  }, []);

  return (
    <>
      <Head>
        <title>Referloan : {content.p_name+' | Salary : '+content.salary+' | Pincode : '+content.pincode}</title>
        <meta name={'description'} content={content.p_name+' | Salary : '+content.salary+' | Pincode : '+content.pincode} />
        <meta name={'keywords'} content={content.p_name+' | Salary : '+content.salary+' | Pincode : '+content.pincode}/>
      </Head>
      
      <section className="grabDeal_header">
        <div className="container">
          <div className="headingArea">
          {content.p_name} | Salary : {content.salary} | Pincode : {content.pincode}
          </div>
        </div>
      </section>
      <div className="container">
        <section className="cardOffer_area">
          
          <LeftFilterProductBank content={content} ProductByCat={ProductByCat} />

          <div className="cardlist-Pnl">
            {products.map((item,key) => (
              <div className="lstRow" key={key}>
                <div className="topPnl">
                  <div className="cardImg">
                    <Image src={'/uploads/product_bank/'+item.bankProductName.replace(/\s/g, '_')+'.png'} height="214" width="340" />
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