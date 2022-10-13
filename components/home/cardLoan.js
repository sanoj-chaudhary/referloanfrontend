import Carousel from "react-slick";
const cardLoan = () => {

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

    <section class="servicesBanner__Section">
      <div className="container">
        <ul class="loanCard_carousel">
 <Carousel {...settings}>
            <div className="slickItem">
              <div class="slide_item">
                <li class="greenBox">
                  <a href="#">
                    <div class="contentArea">
                      <h2>Personal Loan</h2>
                      <p>Instant approval on loans upto Rs. 25 lakh</p>
                      <button>Apply Now</button>
                    </div>
                    <div class="imgSection">
                      <img src="/images/pl-bnr-icon.png" alt="" />
                    </div>
                  </a>
                </li>
              </div>
            </div>

            <div className="slickItem">
              <div class="slide_item">
                <li class="blueBox">
                  <a href="#">
                    <div class="contentArea">
                      <h2>Credit Card</h2>
                      <p>Get a card limit of up to Rs. 2 lakh*</p>
                      <button>Apply Now</button>
                    </div>
                    <div class="imgSection">
                      <img src="/images/ccard-bnr-icon.png" alt="" />
                    </div>
                  </a>
                </li>
              </div>
            </div>

            <div className="slickItem">
              <div class="slide_item">
                <li class="purpleBox">
                  <a href="#">
                    <div class="contentArea">
                      <h2>Insta EMI Card</h2>
                      <p>Purchases into easy EMIS with a limit of up to Rs. 2 lakh*</p>
                      <button>Apply Now</button>
                    </div>
                    <div class="imgSection">
                      <img src="/images/emi-bnr-icon.png" alt="" />
                    </div>
                  </a>
                </li>
              </div>
            </div>
            <div className="slickItem">
              <div class="slide_item">
                <li class="yellowBox">
                  <a href="#">
                    <div class="contentArea">
                      <h2>Personal Loan</h2>
                      <p>Instant approval on loans upto Rs. 25 lakh</p>
                      <button>Apply Now</button>
                    </div>
                    <div class="imgSection">
                      <img src="/images/pl-bnr-icon.png" alt="" />
                    </div>
                  </a>
                </li>
              </div>
            </div>
          </Carousel>
         
        </ul>
      </div>
    </section>

  )
}

export default cardLoan