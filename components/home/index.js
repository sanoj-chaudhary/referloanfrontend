import Herosection from "./herosection"
import CardLoan from './cardLoan'
import CustomerSupport from './customerSupport'
import InsuranceInvestment from './insuranceInvestment'
import Ourpartner from "./ourpartner"
import Testimonial from "./testimonial"
import EsiestPlaceApply from "./esiestPlaceApply"
import ServiceArea from "./serviceArea"
import BlogSection from "./blogsection"
import NewsHighlights from "./newsHighlights"
const index = (props) => {
  return (
    <>
      <Herosection loanProduct={props.loanProduct} creditProduct={props.creditProduct} />
      <CardLoan />
      <EsiestPlaceApply />
      <CustomerSupport />
      <InsuranceInvestment />
      <ServiceArea />
      <Ourpartner partner={props.partner} />
      <Testimonial testimonial={props.testimonial} />
      <NewsHighlights />
      <BlogSection />
     
    </>
  )
}

export default index