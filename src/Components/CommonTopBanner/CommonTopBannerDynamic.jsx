import React from "react";
import "./CommonTopBanner.css";

const CommonTopBannerDynamic = ({ heading, subheading, image }) => {
    return (
        <>
            <section id="CommonTopBannerContainer">
                <div className="AdjustBannerContainer">
                    <div className="OverlayOpacityContainer"></div>
                    <img src={image} alt="Banner Background" />
                    <div className="taglineContentContainer">
                        <div className="sectionPadding TopBannerSpanAdjust">
                            <span>{heading}</span>
                            <h2>{subheading}</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommonTopBannerDynamic;
