import Link from 'next/link'

const aboutus = () => {
  return (
    <section className="aboutSection">
      <div className="aboutCol">
        <div className="inner">
          <h2 className="heading">About Us</h2>
          <p>Refer Loan Pvt Ltd. Or in short say" Refer Loan" is a digital platform which works as intermediary between different Banks and NBFC for providing various services in Loans</p>
         <Link href="/about" ><a className="blackBtn">Read More</a></Link> 
          <div className="imgBox"><img src="/images/about-img.png" alt="" /></div>
        </div>
      </div>
      <div className="workCol">
        <div className="inner">
          <h2 className="heading">Join Us </h2>
          <p>As a leading fintech company, we are all about providing quick, affordable, and reliable loans to our customers all over the world</p>
          <a href="" className="blackBtn">Read More</a>
          <div className="imgBox"><img src="/images/work-img.png" alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default aboutus