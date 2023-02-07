import Link from "next/link"

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
                                    <img src="/images/telephone-icon.webp" alt="" />
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
                                    <img src="/images/whatsapp-icon.webp" alt="" />
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
                                    <img src="/images/email-icon.webp" alt="" />
                                </div>
                                <div className="noArea">
                                    <span>Mail us</span>
                                    <h2><Link href="mailto:info@referloan.in"><a>info@referloan.in</a></Link></h2>
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
                            <p>Address: 1/25, Lalita Park, Laxmi Nagar, New Delhi, Delhi 110092 </p>
                        </div>
                        <div className="">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1118&amp;height=621&amp;hl=en&amp;q=1/25, Lalita Park, Laxmi Nagar, New Delhi, Delhi 110092&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                    </div></div>



                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default contact