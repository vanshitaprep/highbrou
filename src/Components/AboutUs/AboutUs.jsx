import React from "react";
import CommonTopBannerDynamic from "../CommonTopBanner/CommonTopBannerDynamic";
import TimeLineAnimatedComponent from "../TimeLineAnimated/TimeLineAnimatedComponent";
import HighbrouMissionVision from "../MissionVision/HighbrouMissionVision";
const AboutUs = () => {
    return (
        <>
            <section id="AboutUsContainer">
                <CommonTopBannerDynamic
                    heading="About"
                    subheading="High Standards, Innovative Solutions"
                    image="https://images.unsplash.com/photo-1705233844148-c554578cb64b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <TimeLineAnimatedComponent/>
                <HighbrouMissionVision/>
            </section>
        </>
    )
}
export default AboutUs