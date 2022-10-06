import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTestimonial } from './../../redux/testimonialSlice';
import Link from 'next/link'
const testimonial = (props) => {

  const dispatch = useDispatch();
  const { data: testimonial, status } = useSelector((state) => state.testimonial);

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, []);

  return (
    <section>
      <div className="container">
        <div className=" testimaolSlider">
          <h2 className={('heading', props.classes)}>What Client say about<br />our Services
            <Link href="/testi-monial"><a title="See More" className="seeBtn orangeBtn float-end">See More &nbsp;<span className="material-icons float-end">east</span></a>
            </Link>
          </h2>
          <ul className="testimaolSlider-container">
            {testimonial && testimonial.slice(0, props.slice).map((testimonial) => (
              <li key={testimonial.id}>
                <div className="ratingPnl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>{testimonial.client_message}</p>
                <div className="profileBxo">
                  <div className="profile-img"><img src="/images/profile-img.jpg" alt="" /></div>
                  {testimonial.client_name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  )
}

export default testimonial