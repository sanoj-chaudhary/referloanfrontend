import Image from "next/image"
const customerSupport = () => {
  return (
    <section class="financiallyArea">
      <div class="container">
        <h2 class="headingBlue">Keeping you Financially Healthy and safe, always hello</h2>
        <div class="item_pnl">
          <div class="item_col">
            <div class="item-img">
              <img src="/images/icon/advice-icon.png" alt="" />
            </div>
            <p>Unbiased<br />Advice and Suggestions </p>
          </div>
          <div class="item_col">
            <div class="item-img">
              <img src="/images/icon/customerSupport-icon.png" alt="" />
            </div>
            <p>24*7<br /> Customer Support </p>
          </div>
          <div class="item_col">
            <div class="item-img">
              <img src="/images/icon/reliability-icon.png" alt="" />
            </div>
            <p>Out-and-out <br />Reliability</p>
          </div>
          <div class="item_col">
            <div class="item-img">
              <img src="/images/icon/financial-icon.png" alt="" />
            </div>
            <p>175+ Financial<br /> Institutions Association</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default customerSupport