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
  };
  const dispatch = useDispatch();
  const { data: testimonial, status } = useSelector((state) => state.testimonial);

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, []);

  return (
    <section class="testimonial_Area">
      <div className="container">
        <h2 class="heading">What Client say about<br />Our Services
          <a href="https://qa.referloan.in/testimonials" title="See More" class="seeBtn orangeBtn float-end">See
            More &nbsp;<span class="material-icons float-end">east</span></a>
        </h2>
       
          <ul class="testimaol_carousel  ">
            <Carousel {...settings}>
              <li>
                <div class="ratingPnl">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>refer loan provides excellent setup speed &amp; service terms, excellent customer support,
                  ethical business practices and sales transparency.</p>

                {/* <!-----  check img available in testimonials or not  ------> */}

                <div class="profileBxo">
                  <div class="profile-img"><img
                    src="https://qa.referloan.in/uploads/testimonial/1664797175.pdf" alt="" /></div>
                  Narender Mittal
                </div>
              </li>
              <li>
                <div class="ratingPnl">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>refer loan provides excellent setup speed &amp; service terms, excellent customer support,
                  ethical business practices and sales transparency.</p>

                {/* <!-----  check img available in testimonials or not  ------> */}

                <div class="profileBxo">
                  <div class="profile-img"><img
                    src="https://qa.referloan.in/uploads/testimonial/1664797175.pdf" alt="" /></div>
                  Narender Mittal
                </div>
              </li>
              <li>
                <div class="ratingPnl">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>refer loan provides excellent setup speed &amp; service terms, excellent customer support,
                  ethical business practices and sales transparency.</p>

                {/* <!-----  check img available in testimonials or not  ------> */}

                <div class="profileBxo">
                  <div class="profile-img"><img
                    src="https://qa.referloan.in/uploads/testimonial/1664797175.pdf" alt="" /></div>
                  Narender Mittal
                </div>
              </li>
              <li>
                <div class="ratingPnl">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>refer loan provides excellent setup speed &amp; service terms, excellent customer support,
                  ethical business practices and sales transparency.</p>

                {/* <!-----  check img available in testimonials or not  ------> */}

                <div class="profileBxo">
                  <div class="profile-img"><img
                    src="https://qa.referloan.in/uploads/testimonial/1664797175.pdf" alt="" /></div>
                  Narender Mittal
                </div>
              </li>
              <li>
                <div class="ratingPnl">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>refer loan provides excellent setup speed &amp; service terms, excellent customer support,
                  ethical business practices and sales transparency.</p>

                {/* <!-----  check img available in testimonials or not  ------> */}

                <div class="profileBxo">
                  <div class="profile-img"><img
                    src="https://qa.referloan.in/uploads/testimonial/1664797175.pdf" alt="" /></div>
                  Narender Mittal
                </div>
              </li>
            </Carousel>

          </ul>
      
      </div>
    </section>


  )
}

export default testimonial