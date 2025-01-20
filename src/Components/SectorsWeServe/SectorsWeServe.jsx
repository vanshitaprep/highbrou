import React from "react";
import { Row, Col } from "antd";
import "./SectorsWeServer.css"
const SectorsWeServe = () => {

    const SectorsCardsData = [
        {
            title: "BUILDING EXCELLENCE",
            tagline: "From residences to high-rise commercial structures"
        },
        {
            title: "INDUSTRIAL FACILITY",
            tagline: "Structuring spaces for optimized industrial operations"
        },
        {
            title: "PRE-ENGINEERED METAL BUILDING",
            tagline: "Modern and efficient modular designer"
        },
        {
            title: "CONNECTING THE WORLD",
            tagline: "Infrastructure that supports essential energy services"
        },
        {
            title: "OIL AND GAS EXCELLENCE",
            tagline: "From residential to high-rise commercial structures"
        },
        {
            title: "QUALITY RESOURCING",
            tagline: "The tiny ship today stiller"
        }
    ]
    return (
        <>
            <section id="SectorsWeServeContainer">
                <div className="SectorsWeServeContentContainer sectionPadding">
                    <div className="HeaderContainerWhatWeDo">
                        <span>SECTORS WE SERVE</span>
                        <h2>CRAFTING EXCELLENCE ACROSS DIVERSE SECTORS</h2>
                    </div>
                    <div className="RowAdjustBorder">
                        <Row>
                            {SectorsCardsData.map((item, index) => (
                                <Col lg={8} md={12} style={{ width: "100%" }} key={index}>
                                    <div className="sectorsCardsContainer">
                                        <h2>{item.title}</h2>
                                        <p>{item.tagline}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SectorsWeServe