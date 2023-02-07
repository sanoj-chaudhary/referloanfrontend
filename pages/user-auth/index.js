import React from 'react'
import Profile from '../../components/auth/Profile'
import {FacebookShareButton,FacebookIcon,RedditShareButton,RedditIcon,WhatsappShareButton,WhatsappIcon,
    LinkedinShareButton,LinkedinIcon,TwitterIcon,TwitterShareButton} from 'react-share';
const Dashboard = () => {
    return (
        <>

            <div className="content-row">
                <Profile />
                <div className="content-col content-col-50 col-50">
                    <input type="hidden" id="" />
                    <FacebookShareButton
                        url={'http://localhost:3000'} >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <WhatsappShareButton
                        url={'http://localhost:3000'} >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={'http://localhost:3000'} >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <TwitterShareButton
                        url={'http://localhost:3000'} >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <RedditShareButton
                        url={'http://localhost:3000'} >
                        <RedditIcon size={32} round />
                    </RedditShareButton>

                </div>
            </div>


        </>
    )
}

export default Dashboard