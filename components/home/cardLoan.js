import Carousel from "react-slick";
import Link from "next/link"
import { useRouter } from 'next/router';
import Image from "next/image";

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
    autoplay: false,
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
        <div className="loanCard_carousel" >
          {/* <Carousel {...settings}> */}
            <div className="slickItem">
              <div className="slide_item">
                <div className="greenBox loanCrouselitem">
                  <Link href={'/loans/personal-loan' + utmData}><a>
                    <div className="contentArea">
                      <h2>Personal Loan</h2>
                      <p>Instant approval on loans upto Rs. 25 lakh</p>
                      <button>Apply Now</button>
                    </div>
                    <div className="imgSection">
                      <Image src="/images/bnplicon.webp" alt="personal-loan" width="70" height="72" loading='lazy' />
                    </div>
                  </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="slickItem">
              <div className="slide_item">
                <div className="blueBox loanCrouselitem">
                  <Link href={'/credit-card' + utmData}><a>
                    <div className="contentArea">
                      <h2>Credit Card</h2>
                      <p>Get a card limit of up to Rs. 2 lakh*</p>
                      <button>Apply Now</button>
                    </div>
                    <div className="imgSection">
                      <Image src="/images/ccard-bnr-icon.png" alt="credit-card" width="70" height="72" loading='lazy' />
                    </div>
                  </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="slickItem">
              <div className="slide_item">
                <div className="yellowBox loanCrouselitem">
                  <Link href={"/loans/gold-loan" + utmData}><a>
                    <div className="contentArea">
                      <h2>Gold Loan</h2>
                      <p>Instant approval on loans upto Rs. 25 lakh</p>
                      <button>Apply Now</button>
                    </div>
                    <div className="imgSection">
                      <Image src="/images/pl-bnr-icon.webp" alt="gold-loan" width="70" height="72" loading='lazy' />
                    </div>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          {/* </Carousel> */}

        </div>
      </div>
    </section>

  )
}

export default cardLoan