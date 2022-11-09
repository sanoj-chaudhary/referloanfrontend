
import Carousel from "react-slick";
import Image from "next/image";


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
        <h2 className="heading text-center">What Our Patrons Have to Say About Our Services</h2>
          <ul className="testimaol_carousel  ">
          <Carousel {...settings}>
            {
              props.testimonial && props.testimonial.map((item,index)=>(
                <li key={index}>
                    <div className="ratingPnl">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>{item.client_message}</p>
                    <div className="profileBxo">
                      <div className="profile-img"><Image src={`/uploads/testimonial/${item.client_pic}`}  width="50" height="50" loading='lazy' alt="" /></div>
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