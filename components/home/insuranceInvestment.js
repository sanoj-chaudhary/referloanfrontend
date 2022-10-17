import Image from "next/image"

const insuranceInvestment = () => {
  return (
    <section className="financeSimpli_area">
    <div className="container">
        <h3>FINANCE SIMPLIFIED</h3>
        <h2>How the credit review works?</h2>
        <p>The credit review is an online marketplace that provides borrowers with competitive, personalized loan
            offers from multiple, vetted lenders in real time.</p>
        <ul className="stepArea">
            <li>
                <div className="step-imgBox"><img src="/images/step1.png" alt="" /></div>
                <h2>Discover</h2>
            </li>
            <li>
                <div className="step-imgBox"><img src="/images/step2.png" alt="" /></div>
                <h2>Compare</h2>
            </li>
            <li>
                <div className="step-imgBox"><img src="/images/step3.png" alt="" /></div>
                <h2>Apply</h2>
            </li>
        </ul>
    </div>
</section>
  )
}

export default insuranceInvestment