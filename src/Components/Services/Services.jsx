import React, { useState,useEffect } from "react";
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
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id="ServicesContainer">
                <CommonTopBannerDynamic
                    heading="Services"
                    subheading="High Standards, Innovative Solutions"
                    image="https://img.freepik.com/free-photo/construction-silhouette_1127-2991.jpg?t=st=1737616348~exp=1737619948~hmac=6179e21b22c8ea115707f24b48bcad8ace8f1d993a804402dac214ea8e7db48a&w=2000"
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
