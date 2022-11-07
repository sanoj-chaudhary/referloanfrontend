import Carousel from "react-slick";
import Link from "next/link"
import { useRouter } from 'next/router';
const cardLoan = () => {
  const router = useRouter()
  let  utmData = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if(!utm_campaign){
    utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
}else{
    utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
}

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

    <section className="servicesBanner__Section">
      <div className="container">
        <ul className="loanCard_carousel">
          <Carousel {...settings}>
            <div className="slickItem">
              <div className="slide_item">
                <li className="greenBox">
                  <Link href={'/loans/personal-loan' + utmData}><a>
                    <div className="contentArea">
                      <h2>Personal Loan</h2>
                      <p>Instant approval on loans upto Rs. 25 lakh</p>
                      <button>Apply Now</button>
                    </div>
                    <div className="imgSection">
                      <img src="/images/bnplicon.png" alt="personal-loan" />
                    </div>
                  </a>
                  </Link>
                </li>
              </div>
            </div>

            <div className="slickItem">
              <div className="slide_item">
                <li className="blueBox">
                  <Link href={'/credit-card' + utmData}><a>
                    <div className="contentArea">
                      <h2>Credit Card</h2>
                      <p>Get a card limit of up to Rs. 2 lakh*</p>
                      <button>Apply Now</button>
                    </div>
                    <div className="imgSection">
                      <img src="/images/ccard-bnr-icon.png" alt="credit-card" />
                    </div>
                  </a>
                  </Link>
                </li>
              </div>
            </div>

            <div className="slickItem">
              <div className="slide_item">
                <li className="purpleBox">
                  <Link href={"/loans/business-loan" + utmData}><a>
                    <div className="contentArea">
                      <h2>Business Loan</h2>
                      <p>Purchases into easy EMIS with a limit of up to Rs. 2 lakh*</p>
                      <button>Apply Now</button>
                    </div>
                    <div className="imgSection">
                      <img src="/images/bnblicon.png" alt="business-loan" />
                    </div>
                  </a>
                  </Link>
                </li>
              </div>
            </div>
            <div className="slickItem">
              <div className="slide_item">
                <li className="yellowBox">
                  <Link href={"/loans/gold-loan" + utmData}><a>
                    <div className="contentArea">
                      <h2>Gold Loan</h2>
                      <p>Instant approval on loans upto Rs. 25 lakh</p>
                      <button>Apply Now</button>
                    </div>
                    <div className="imgSection">
                      <img src="/images/pl-bnr-icon.png" alt="gold-loan" />
                    </div>
                  </a>
                  </Link>
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