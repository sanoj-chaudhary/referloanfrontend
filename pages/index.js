import Home from './../components/home'
import { db } from './../config/db'
export default function Index({ partner,video,testimonial,loanProduct }) {

  return (
    <>
      <Home partner={partner}  testimonial={testimonial}  loanProduct={loanProduct} />
    </>
  )

}


export async function getServerSideProps() {
  
  const testimonialRes = await db.query("SELECT * FROM `testimonials` WHERE `is_active` = '1' ");
  const testimonial = JSON.parse(JSON.stringify(testimonialRes))

  const res = await db.query("SELECT logo_path,name FROM `partners` WHERE `is_active` = '1' ");
  const partner = JSON.parse(JSON.stringify(res))

  // For Loan Only
  const LoanRes = await db.query("SELECT * FROM `categories` WHERE `id` = '1' ");
  const loanProduct = JSON.parse(JSON.stringify(LoanRes))

  return { props: { partner,testimonial,loanProduct } }
}
