import Carousel from "react-slick";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import axios from "axios";


function Partner() 
{
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear"
  };
  
  const [data, setData] = useState([])

  const getPartner = async ()=>{
  const res = await axios.get('/api/partner');
  const result = await res.data;
  setData(result)
  }

  useEffect(() => {
    getPartner()
  }, [])
 

  return (
    <section class="partnerArea">
        <div class="container">
            <h2 class="heading text-center">Our partners</h2>
            <h3>from across the industry</h3>
            <ul>
                <li><img src="/images/ptn-logo1.png" alt="" /></li>
                <li><img src="/images/ptn-logo2.png" alt="" /></li>
                <li><img src="/images/ptn-logo3.png" alt="" /></li>
                <li><img src="/images/ptn-logo4.png" alt="" /></li>
                <li><img src="/images/ptn-logo5.png" alt="" /></li>
                <li><img src="/images/ptn-logo1.png" alt="" /></li>
                <li><img src="/images/ptn-logo2.png" alt="" /></li>
                <li><img src="/images/ptn-logo3.png" alt="" /></li>
                <li><img src="/images/ptn-logo4.png" alt="" /></li>
                <li><img src="/images/ptn-logo5.png" alt="" /></li>
                <li><img src="/images/ptn-logo1.png" alt="" /></li>
                <li><img src="/images/ptn-logo2.png" alt="" /></li>
                <li><img src="/images/ptn-logo3.png" alt="" /></li>
                <li><img src="/images/ptn-logo4.png" alt="" /></li>
                <li><img src="/images/ptn-logo5.png" alt="" /></li>
            </ul>
        </div>
    </section>
  )

}
export default Partner