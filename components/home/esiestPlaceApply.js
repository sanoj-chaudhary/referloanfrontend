import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router';
import Image from 'next/image';
import axisBanner from './../../public/images/axisBanner.webp'


const esiestPlaceApply = () => {
  const router = useRouter()
  let  utmData = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if(!utm_campaign){
    utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
}else{
    utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
}
  return (
    <div className='container'>
      <section className="applyLoans__Section">


        <div className="loanCol">
          <h2>Your Financial Stability Made Easy!</h2>
          <ul className="iconPnl p-0">
            <li>
              <Link href={"/loans/personal-loan" + utmData}><a>
                <Image src="/images/icon/pl-icon.webp" alt="Personal Loan" width="36" height="36" loading='lazy' />
                <h3>Personal Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/credit-card" + utmData}><a>
                <Image src="/images/icon/ccard-icon.webp" alt="Credit Cards" width="36" height="36" loading='lazy'  />
                <h3>Credit Cards</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/home-loan" + utmData}><a>
                <Image src="/images/icon/hl-icon.webp" alt="Home Loan" width="36" height="36" loading='lazy' />
                <h3>Home Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/micro-loan" + utmData}><a>
                <Image src="/images/icon/microLoan-icon.webp" alt="Micro Loans" width="36" height="36" loading='lazy' />
                <h3>Micro Loans</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/business-loan" + utmData}><a>
                <Image src="/images/icon/bL-icon.webp" alt="Business Loan" width="36" height="36" loading='lazy' />
                <h3>Business Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/education-loan" + utmData}><a>
                <Image src="/images/icon/eduL-icon.webp" alt="Education Loan" width="36" height="36" loading='lazy' />
                <h3>Education Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/gold-loan" + utmData}><a>
                <Image src="/images/icon/gl-icon.webp" alt="Gold Loan" width="36" height="36" loading='lazy' />
                <h3>Gold Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/open-bank-account/axis-bank-saving-account" + utmData}><a>
                <Image src="/images/icon/sa-icon.webp" alt="Saving Account" width="36" height="36" loading='lazy' />
                <h3>Saving Account</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href="/"><a>
                <Image src="/images/icon/offer-icon.webp" alt="Offer" width="36" height="36" loading='lazy' />
                <h3>Offers</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href="/"><a>
                <Image src="/images/icon/other-icon.webp" alt="More" width="36" height="36" loading='lazy' />
                <h3>More</h3>
              </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="cardBanner">
          <Link href="/"><a><Image src={axisBanner} alt="Ad" loading='lazy'  /></a></Link>
        </div>


        {/* <!-- cardBanner Area --> */}


      </section>
    </div>
  )
}

export default esiestPlaceApply