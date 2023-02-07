
import { useState } from "react";
const LeaveQuestion = () => {
  const [toggle, setToggle] = useState(false);

  const toggleUpdate = () => {
    setToggle(current => !current);
  };
  return (
    <>
      <div className="faq-content-section">
        <div className="faq-content-heading">
          <span className="title-img"><img src="/images/icon/faqicon.png" /></span>
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
          <h2>Have a <b>Question ? </b> We've got <b>Answers!</b></h2>
          <p>
              Not getting the right answers to your curiosity or confusion
              can lead you to a wrong decision that you might regret for 
              a long time. Therefore, at ReferLoan our expert customer service 
              executives are always on their toes to resolve your
              queries and help you with the best suggestion or solution. Feel free to reach out to us!
          </p>
          <div className="hero-btn-box">
            <div className="feature-four__top-btn-box">
              <button className="lq-toggle-btn thm-btn feature-four__top-btn" onClick={toggleUpdate}>Leave Your Question</button>
            </div>
            <div className={`leave-question ${toggle ? 'lq-height' : ''}`}>
              <div className="lq-heading-box">
                <img src="/images/icon/Cards-feature/faq.png" />
                <h2>Leave Your Question</h2>
              </div>
              <form className="lq-form" id="lq-form">
                <div className="input-wrapper form-group">
                  <input type="text" id="question" required />
                  <label htmlFor="user">Leave Your Question</label>
                </div>
                <div className="success-box">
                  <p className="s-title">
                    Our Customer Support will Contact you soon...
                  </p>
                </div>
                <button type="submit" className="btn thm-btn feature-four__top-btn">Submit</button>
              </form>
            </div>
            <div className="play-btn">
              <a id="play-video" className="video-play-button" href="#" data-bs-toggle="modal" data-bs-target="#how-to-play">
                <span></span>
              </a>
              <span className="htp">How To Apply</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeaveQuestion