import React, { useState } from "react";
import CommonTopBannerDynamic from "../CommonTopBanner/CommonTopBannerDynamic";
import { Row, Col } from "antd";
import WhatWeDoCardsData from "../WhatWeDoHome/WhatWeDoData";
import "./Services.css";
import SectorsWeServe from "../SectorsWeServe/SectorsWeServe";

const Services = () => {
    const [activeImage, setActiveImage] = useState(WhatWeDoCardsData[0].img); // Default to the first image

    const handleHover = (img) => {
        setActiveImage(img); // Update background image on hover
    };

    return (
        <>
            <section id="ServicesContainer">
                <CommonTopBannerDynamic
                    heading="Services"
                    subheading="High Standards, Innovative Solutions"
                    image="https://images.unsplash.com/photo-1705233844148-c554578cb64b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="sectionPadding" style={{ paddingBottom: "0px" }}>
                    <div>
                        <div className="WhatWeDoServicesContentContainer">
                            <div className="HeaderContainerWhatWeDo">
                                <span>WHAT WE DO?</span>
                                <h2>Transforming Ideas Into Structural Excellence</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="HoverAnimatedImageContainer"
                    style={{
                        backgroundImage: `url(${activeImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "background-image 0.5s ease-in-out", // Smooth transition
                    }}
                >
                    <Row>
                        {WhatWeDoCardsData.map((item, index) => (
                            <Col lg={8} key={index}>
                                <div
                                    className="HoverAnimationContentContainer"
                                    onMouseEnter={() => handleHover(item.img)} // Update image on hover
                                >
                                    {/* <div>
                                        <img src={item.img} alt="" />
                                    </div> */}
                                    <div>
                                        <div className="HoverableCardContent">
                                            <h2>{item.title}</h2>
                                            <div>
                                                <span>{item.tagline}</span>

                                                <div>
                                                    {item.descriptionDetails}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
            <SectorsWeServe/>
        </>
    );
};

export default Services;
