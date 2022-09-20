import React from 'react'

const testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className=" testimaolSlider">
          <h2 className="heading">What Client say about<br />our Services
            <a href="#" title="See More" className="seeBtn orangeBtn float-end">See More &nbsp;<span className="material-icons float-end">east</span></a>
          </h2>
          <ul className="testimaolSlider-container">
            <li>
              <div className="ratingPnl">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>I've applied now! Waiting to get a loan from you quickly as possible!! 001</p>
              <div className="profileBxo">
                <div className="profile-img"><img src="/images/profile-img.jpg" alt="" /></div>
                Sunita Mittal
              </div>
            </li>
            <li>
              <div className="ratingPnl">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>I've applied now! Waiting to get a loan from you quickly as possible!! 005</p>
              <div className="profileBxo">
                <div className="profile-img"><img src="/images/profile-img.jpg" alt="" /></div>
                Sunita Mittal
              </div>
            </li>
            <li>
              <div className="ratingPnl">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>

              </div>
              <p>I've applied now! Waiting to get a loan from you quickly as possible!! 005</p>
              <div className="profileBxo">
                <div className="profile-img"><img src="/images/profile-img.jpg" alt="" /></div>
                Sunita Mittal
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default testimonial