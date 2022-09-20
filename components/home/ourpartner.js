import Carousel from "react-slick";

export default function ourpartner() {
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
  return (
    <section className="partnerArea">
      <div className="container">
        <h2 className="heading text-center">Our partners</h2>
        <p>from across the industry</p>
        <Carousel {...settings}>
          <div className="slickItem"><img src="/images/ptn-logo1.png" alt="" /></div>
          <div className="slickItem"><img src="/images/ptn-logo2.png" alt="" /></div>
          <div className="slickItem"><img src="/images/ptn-logo3.png" alt="" /></div>
          <div className="slickItem"><img src="/images/ptn-logo4.png" alt="" /></div>
          <div className="slickItem"><img src="/images/ptn-logo5.png" alt="" /></div>
        </Carousel>
      </div>
    </section>
  );
}