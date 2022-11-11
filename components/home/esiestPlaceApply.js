import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router';
import Image from 'next/image';

import axisBanner from './../../public/images/axisBanner.webp'
import pl_icon from './../../public/images/icon/pl-icon.webp'
import ccard_icon from './../../public/images/icon/ccard-icon.webp'
import hl_icon from './../../public/images/icon/hl-icon.webp'
import microLoan_icon from './../../public/images/icon/microLoan-icon.webp'
import bL_icon from './../../public/images/icon/bL-icon.webp'
import eduL_icon from './../../public/images/icon/eduL-icon.webp'
import gl_icon from './../../public/images/icon/gl-icon.webp'
import sa_icon from './../../public/images/icon/sa-icon.webp'
import offer_icon from './../../public/images/icon/offer-icon.webp'
import other_icon from './../../public/images/icon/other-icon.webp'

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
                <Image src={pl_icon} alt="Personal Loan" loading='lazy' />
                <h3>Personal Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/credit-card" + utmData}><a>
                <Image src={ccard_icon} alt="Credit Cards" loading='lazy'  />
                <h3>Credit Cards</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/home-loan" + utmData}><a>
                <Image src={hl_icon} alt="Home Loan" loading='lazy' />
                <h3>Home Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/micro-loan" + utmData}><a>
                <Image src={microLoan_icon} alt="Micro Loans" loading='lazy' />
                <h3>Micro Loans</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/business-loan" + utmData}><a>
                <Image src={bL_icon} alt="Business Loan" loading='lazy' />
                <h3>Business Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/education-loan" + utmData}><a>
                <Image src={eduL_icon} alt="Education Loan" loading='lazy' />
                <h3>Education Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/gold-loan" + utmData}><a>
                <Image src={gl_icon} alt="Gold Loan" loading='lazy' />
                <h3>Gold Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/open-bank-account/axis-bank-saving-account" + utmData}><a>
                <Image src={sa_icon} alt="Saving Account" loading='lazy' />
                <h3>Saving Account</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href="/"><a>
                <Image src={offer_icon} alt="Offer" loading='lazy' />
                <h3>Offers</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href="/"><a>
                <Image src={other_icon} alt="More" loading='lazy' />
                <h3>More</h3>
              </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="cardBanner">
          <Link href="/"><a><Image src={axisBanner} alt="Ad" loading='lazy'  /></a></Link>
        </div>

      </section>
    </div>
  )
}

export default esiestPlaceApply