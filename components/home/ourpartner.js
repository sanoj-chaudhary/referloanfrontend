import Carousel from "react-slick";
import React, { useEffect, useState } from "react";
import Image from 'next/image'


function Partner() 
{
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "linear"
  };
  
  const [data, setData]         = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/partner')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No partner data</p>

  return (
    <section className="partnerArea">
      <div className="container">
        <h2 className="heading text-center">Our partners</h2>
        <p>from across the industry</p>
                
        <Carousel {...settings}>   
          {data.map((value, key) => (
<<<<<<< HEAD
              <div className="slickItem"><img src={`/mages/${value.logo_path}`}  /></div>
=======
              <div className="slickItem"><Image src={'/uploads/partner/'+value.logo_path} layout='fill' /></div>
>>>>>>> 4a24030b584fd0e6993d067bac98d75efab23d52
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Partner

