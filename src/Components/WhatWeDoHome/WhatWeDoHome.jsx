import React from "react";
import "./WhatWeDoHome.css"
import { Row, Col } from "antd";
import WhatWeDoCardsData from "./WhatWeDoData";
const WhatWeDoHome = () => {
   
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