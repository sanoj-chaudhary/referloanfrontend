import Home from './../components/home'
import { db } from './../config/db'
import { useState, useEffect } from "react";
import Loader from "./../components/page/loader";

export default function Index({ partner,testimonial,loanProduct,creditProduct }) {

  const [loading, setLoading] = useState(true)
 useEffect(() => {
 setLoading(false)
 }, [])
  return (
    <>
      {loading && <Loader loading={loading} />}
      <Home partner={partner}  testimonial={testimonial}  loanProduct={loanProduct} creditProduct={creditProduct} />
    </>
  )

}


export async function getServerSideProps() {
  
  const testimonialRes = await db.query("SELECT * FROM `testimonials` WHERE `is_active` = '1' ");
  const testimonial = JSON.parse(JSON.stringify(testimonialRes))

  const res = await db.query("SELECT logo_path,name FROM `partners` WHERE `is_active` = '1' ");
  const partner = JSON.parse(JSON.stringify(res))

  // / Loan - 2, CC - 1, Other - 7
  const LoanRes = await db.query("SELECT * FROM `view_product` WHERE `cat_id` = '2' ");
  const loanProduct = JSON.parse(JSON.stringify(LoanRes))
  const creditRes = await db.query("SELECT * FROM `view_product` WHERE `cat_id` = '1' ");
  const creditProduct = JSON.parse(JSON.stringify(creditRes))

  return { props: { partner,testimonial,loanProduct,creditProduct } }
}