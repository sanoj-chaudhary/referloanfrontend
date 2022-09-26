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
    <section className="partnerArea">
      <div className="container">
        <h2 className="heading text-center">Our partners</h2>
        <p>from across the industry</p>
                
        <Carousel {...settings}>   
          {data.map((value, key) => (
            <div key={key} className="slickItem"><Image src={'/uploads/partner/'+value.logo_path} layout='fill' /></div>
          ))}
        </Carousel>
      </div>
    </section>
  )

}
export default Partner