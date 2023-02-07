
import Carousel from "react-slick";
import Image from "next/image";
import Link from 'next/link';
import { newsdata } from "../constant/data";



const headline = (props) => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
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
        <h2 className="heading text-center mt-5"> News & Media</h2>
        <div className="">
          <Carousel {...settings}>
            {
                
               newsdata.map((item, index) => (         
                <div className="" key={index}>
                           
                    <div className="newshighlight card">
                      <div className="imagearea"> 
                        <Link href={item.url}>
                            <a target="_blank"><Image src={`/images/${item.image}`} width="194" height="78" loading='lazy' alt="" /></a>
                        </Link>
                    </div>
                </div>
                   
             
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
    </section>

  
  )
}

export default headline