import Image from "next/image"
const customerSupport = () => {
  return (
    <section className="financiallyArea">
      <div className="container">
        <h2 className="headingBlue">Keeping You Financially Safe and Healthy!</h2>
        <div className="item_pnl">
          <div className="item_col">
            <div className="item-img">
              <img src="/images/icon/advice-icon.webp" alt="" />
            </div>
            <p>Unbiased<br />Advice and Suggestions </p>
          </div>
          <div className="item_col">
            <div className="item-img">
              <img src="/images/icon/customerSupport-icon.webp" alt="" />
            </div>
            <p>24*7<br /> Customer Support </p>
          </div>
          <div className="item_col">
            <div className="item-img">
              <img src="/images/icon/reliability-icon.webp" alt="" />
            </div>
            <p>Out-and-out <br />Reliability</p>
          </div>
          <div className="item_col">
            <div className="item-img">
              <img src="/images/icon/financial-icon.webp" alt="" />
            </div>
            <p>175+ Financial<br /> Institutions Association</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default customerSupport