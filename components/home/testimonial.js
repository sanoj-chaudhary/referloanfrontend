import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTestimonial } from './../../redux/testimonialSlice';
import Link from 'next/link'
import Carousel from "react-slick";
const testimonial = (props) => {



  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      ],
  };

  return (
    <section className="testimonial_Area">
      <div className="container">
        <h2 className="heading">What Client say about<br />Our Services
          <a href="https://qa.referloan.in/testimonials" title="See More" className="seeBtn orangeBtn float-end">See
            More &nbsp;<span className="material-icons float-end">east</span></a>
        </h2>
       
          <ul className="testimaol_carousel  ">
          <Carousel {...settings}>
            {
              props.testimonial && props.testimonial.map((item)=>(
                
                <li key={testimonial.id}>
                    <div className="ratingPnl">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>{item.client_message}</p>
                    <div className="profileBxo">
                      <div className="profile-img"><img src="/images/profile-img.jpg" alt="" /></div>
                      {item.client_name}
                    </div>
                  </li>
            
              ))
            }
              </Carousel>

          </ul>
      
      </div>
    </section>


  )
}

export default testimonial