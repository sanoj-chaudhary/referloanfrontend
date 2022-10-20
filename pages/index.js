import Home from './../components/home'
import { db } from './../config/db'

export default function Index({ partner,testimonial,loanProduct,creditProduct }) {


  return (
    <>
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
  const LoanRes = await db.query("SELECT * FROM `products` WHERE `categories_id` = '2' ");
  const loanProduct = JSON.parse(JSON.stringify(LoanRes))
  const creditRes = await db.query("SELECT * FROM `products` WHERE `categories_id` = '1' ");
  const creditProduct = JSON.parse(JSON.stringify(creditRes))

  return { props: { partner,testimonial,loanProduct,creditProduct } }
}
