const ourvideo = () => {
  return (
    <section className="videoSevtion">
      <h2 className="heading text-center">Our Videos</h2>
      <div className="container">
        <ul className="vdoArea">
          <li>
            <div className="videBox">
              <iframe src="https://www.youtube.com/embed/ajNe3kO1s3I">
              </iframe>
            </div>
            <p>Leverage the Benefits of Freelancing with ReferLoan</p>
          </li>
          <li>
            <div className="videBox">
              <iframe src="https://www.youtube.com/embed/0MZuznXHeD0">
              </iframe>
            </div>
            <p>How to Start a Business with Zero Investment</p>
          </li>
          <li>
            <div className="videBox">
              <iframe src="https://www.youtube.com/embed/vyJ1OdWFo-U">
              </iframe>
            </div>
            <p>Liberate Yourself Financially, with ReferLoan</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ourvideo