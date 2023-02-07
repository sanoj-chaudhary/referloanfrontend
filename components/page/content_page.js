import Head from "next/head";
import { useState, useEffect } from "react";
import Loader from "./loader";
import LeaveQuestion from "./leaveQuestion";
import Faq from "./faq";
const midcontent = ({ data, faq }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  });

  return (
    <>
      {loading && <Loader />}
      <div className="innerpage_bg">
        <section className="">

          <div className="main-container">
            <div dangerouslySetInnerHTML={{ __html: data[0].description }}></div>
          </div>
          
          <section className="faq-section"> 
          <div className="container">
            <div className="row">
              <div className="col-md-6">
               <LeaveQuestion />
              </div>
              <div className="col-md-6">

                
               <Faq faq={faq} />
              </div>
            </div>

          </div>
        </section>
        </section>
      </div>

      <section>
      <div className="modal video-model show" id="how-to-play">
            <div className="modal-dialog video-model-dialog">
              <div className="modal-content video-model-content">
          
                <div className="modal-header video-model-header">
                  <button type="button" className="btn-close thm-btn feature-four__top-btn" data-bs-dismiss="modal">X</button>
                </div>
          
                <div className="modal-body video-model-body">
                    <div className="box">
                         
                          <video id="testVideo" className="bg_video" controls playsinline>
                          <source src="https://ak8.picdn.net/shutterstock/videos/1023566578/preview/stock-footage-beautiful-sunrise-world-skyline-planet-earth-from-space-planet-earth-rotating-animation-clip.mp4" type="video/mp4" />
                          <div className="video_controls paused">
                            <button type="button" className="btn_play"  ></button>
                            <button type="button" className="btn_pause"  ></button>
                          </div>
                        </video>
                      </div>
                </div>
          
                 
          
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

// script 


export default midcontent;





