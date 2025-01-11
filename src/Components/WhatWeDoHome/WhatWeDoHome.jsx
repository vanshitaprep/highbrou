import React from "react";
import "./WhatWeDoHome.css"
import { Row, Col } from "antd";
const WhatWeDoHome = () => {
    const WhatWeDoCardsData = [
        {
            img: "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "STRUCTURAL ENGINEERING DESIGN",
            tagline: "We covers the full spectrum, including:"
        },
        {
            img: "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "PEER REVIEW",
            tagline: "Our Peer Review Service ensures :"
        },
        {
            img: "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "VALUE ENGINEERING",
            tagline: "Our Value Engineering service employs:"
        }
    ]
    return (
        <>
            <section className="sectionPadding" id="WhatWeDoHome">
                <div className="WhatWeDoCardsContainer">
                    <div className="HeaderContainerWhatWeDo">
                        <span>WHAT WE DO?</span>
                        <h2>Transforming Ideas Into Structural Excellence</h2>
                    </div>
                    <div className="WhatWeDoHoverableCards">
                        <div>
                            <Row>
                                {WhatWeDoCardsData.map((item, index) => (
                                    <Col key={index} lg={8} md={12}>
                                        <div className="BorderHoverCard">
                                            <div className="HoverableCardImage">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="HoverableCardContent">
                                                <span>{item.tagline}</span>
                                                <h2>{item.title}</h2>
                                            </div>
                                            <hr />
                                        </div>
                                    </Col>
                                ))}

                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhatWeDoHome