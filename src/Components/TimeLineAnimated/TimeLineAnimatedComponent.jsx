import React from "react";
import { Row, Col } from "antd";
import "./TimeLineAnimatedComponent.css"
import { IoIosArrowRoundDown } from "react-icons/io";

const TimeLineAnimatedComponent = () => {

    const TimeLineContentData = [
        {
            title: "2025 – Industry Leadership",
            description: "Established as a trusted partner for architects, builders, and EPC contractors, delivering world-class structural engineering solutions globally."
        },
        {
            title: "2024 – Incorporation & Expansion",
            description: 'Incorporated as "Highbrou Engineering Private Limited" and expanded services to international markets.'
        },
        {
            title: "2022 – Innovation Drive",
            description: "Initiated R&D for sustainable engineering and began leveraging AI and advanced design automation tools for accelerated project delivery."
        },
        {
            title: "2020 – Resilience and Adaptabilitys",
            description: "Seamlessly transitioned to remote work during the pandemic, integrating advanced design technologies."
        },
        {
            title: "2019 – Growth Phase",
            description: "Expanded expertise, strengthened relationships with repeat clients, and grew the engineering team."
        },
        {
            title: "2018 – Early Success",
            description: "Earned recognition for excellence in high-rise and industrial projects, building a strong client base."
        },
        {
            title: "2016 – Humble Beginnings",
            description: "Established with a vision to deliver innovative and reliable structural engineering solutions."
        }
    ];

    return (
        <>
            <section id="TimeLineAnimatedContainer">

                <div className="sectionPadding">
                    <h2 className="TimelineSectionHeading">Our Journey Through Time</h2>
                    <Row>
                        {TimeLineContentData.map((item, index) => (
                            <Col lg={24} key={index} style={{ width: "100%" }}>
                                <div className="AnimatedHoverAnimationTimeline">
                                    <div className="ContentContainerTimeline">
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                    <IoIosArrowRoundDown />
                                    <hr />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    )
}
export default TimeLineAnimatedComponent