import React,{useEffect} from "react";
import OurApprochtimelineImage from "./OurApprochTimeline.png"
import "./OurApproch.css"
import CommonTopBannerDynamic from "../CommonTopBanner/CommonTopBannerDynamic";
import ApproachImage1 from "./1.png"
import ApproachImage2 from "./2.png"
import ApproachImage3 from "./3.png"
import ApproachImage4 from "./4.png"
import ApproachImage5 from "./5.png"
import ApproachImage6 from "./6.png"
import ApproachImage7 from "./7.png"
import OurApprochBackAttach from "./Our ApprochBackAttach.jpg"
const OurApproach = () => {
    return (
        <>
            <section id="OurApprochContainer">
                <CommonTopBannerDynamic
                    heading="Our Approach"
                    subheading="High Standards, Innovative Solutions"
                    image="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="OurApprochContentContainer">
                    {/* <img src={OurApprochBackAttach} alt="" /> */}
                    <div className="sectionPadding">
                        <h2>Our Approach</h2>
                    </div>
                    <div className="ourApprochImageContainer">
                        <img src={ApproachImage1} alt="" data-aos="fade-up" data-aos-duration="1000" />
                        <img src={ApproachImage2} alt="" data-aos="fade-up" data-aos-duration="1000" />
                        <img src={ApproachImage3} alt="" data-aos="fade-up" data-aos-duration="1000" />
                        <img src={ApproachImage4} alt="" data-aos="fade-up" data-aos-duration="1000" />
                        <img src={ApproachImage5} alt="" data-aos="fade-up" data-aos-duration="1000" />
                        <img src={ApproachImage6} alt="" data-aos="fade-up" data-aos-duration="1000" />
                        <img src={ApproachImage7} alt="" data-aos="fade-up" data-aos-duration="1000" />

                    </div>
                </div>
            </section>
        </>
    )
}
export default OurApproach