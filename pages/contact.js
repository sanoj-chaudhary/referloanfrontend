
const contact = () => {
    return (
        <>
            <section className="contact_container">
                <div className="container">
                    <div className="contact_inner">
                        <h2>Get in touch with us for<br />
                            more information</h2>
                        <p>If you need help or have a question, were here for you</p>
                    </div>
                </div>
            </section>

            <section className="innerpage_bg">
                <div className="container">
                    <div className="contactPnl">
                        <div className="item-col">
                            <div className="topSection red">
                                <div className="imgBox">
                                    <img src="assets/images/telephone-icon.png" alt="" />
                                </div>
                                <div className="noArea">
                                    <span>Telephone</span>
                                    <h2>0124-4847123</h2>
                                </div>
                            </div>
                            <p>Your concerns have always been our priority, reach out to us at this toll-free number for any
                                query. Lines will be open from 10am to 7pm</p>
                        </div>
                        {/* <!-- next --> */}
                        <div className="item-col">
                            <div className="topSection green">
                                <div className="imgBox">
                                    <img src="assets/images/whatsapp-icon.png" alt="" />
                                </div>
                                <div className="noArea">
                                    <span>Whatsapp</span>
                                    <h2>+91 8588845791</h2>
                                </div>
                            </div>
                            <p>If you are not a call person, you can reach out to us with a text via WhatsApp. Our experts will
                                be there to solve any issue</p>
                        </div>
                        {/* <!-- next --> */}
                        <div className="item-col">
                            <div className="topSection blue">
                                <div className="imgBox">
                                    <img src="assets/images/email-icon.png" alt="" />
                                </div>
                                <div className="noArea">
                                    <span>Mail us</span>
                                    <h2><a href="mailto:info@referloan.in">info@referloan.in</a></h2>
                                </div>
                            </div>
                            <p>If you need to ask anything related to our products or any general query, you can always drop us
                                a mail. We will reach you back!
                            </p>
                        </div>
                    </div>

                    {/* <!-- map Area --> */}
                    <div className="contact_map_area">
                        <div className="addressArea">
                            <h2>Our Location</h2>
                            <p>Address: B-13, 2nd floor, Sector 2, Noida, Uttar Pradesh 201301 Noida, Uttar Pradesh, India
                                201301</p>
                        </div>
                        <div className="mapPnl">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d224366.89525405192!2d77.01768018941108!3d28.517687659492143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d28.4117876!2d77.0449321!4m3!3m2!1d28.63062!2d77.27507!5e0!3m2!1sen!2sin!4v1662549044069!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default contact