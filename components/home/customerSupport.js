import Image from "next/image"
const customerSupport = () => {
  return (
    <section className="financiallyArea">
      <div className="container">
        <h2 className="headingBlue">Keeping you Financially Healthy and safe, always hello</h2>
        <div className="item_pnl">

          <div className="item_col">
            <div className="item-img">
              <Image src={"/images/advice-icon.png"} height={80} width={64} alt="" />
            </div>
            <p>Unbiased<br />Advice and Suggestions </p>
          </div>

          <div className="item_col">
            <div className="item-img">
              <Image src={"/images/customerSupport-icon.png"} height={80} width={64} alt="" />
            </div>
            <p>24*7<br /> Customer Support </p>
          </div>

          <div className="item_col">
            <div className="item-img">
              <Image src={"/images/reliability-icon.png"} height={80} width={64} alt="" />
            </div>
            <p>Out-and-out Reliability</p>
          </div>

          <div className="item_col">
            <div className="item-img">
              <Image src={"/images/financial-icon.png"} height={80} width={64} alt="" />
            </div>
            <p>175+ Financial<br /> Institutions Association</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default customerSupport