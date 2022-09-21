import Carousel from "react-slick";

import { useEffect } from "react";
import axios from 'axios'

const ourPartner = ({ partners = [] }) => {
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


  const getPartner = async()=>
{
  const res = await axios.get('http://localhost:3000/api/partner');
  const data = await res.data;
  console.log(data)
}
  useEffect(() => {
    getPartner();
  }, []);

  return (
    <section className="partnerArea">
      <div className="container">
        <h2 className="heading text-center">Our partners</h2>
        <p>from across the industry</p>
       
       
       
        <Carousel {...settings}>
          <div className="slickItem"><img src="" alt="" /> </div>
      

        </Carousel>
      </div>
    </section>
  );
}

export default ourPartner


