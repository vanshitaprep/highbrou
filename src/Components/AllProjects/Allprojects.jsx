import React from "react";
import CommonTopBannerDynamic from "../CommonTopBanner/CommonTopBannerDynamic";
import "./ProjectsPage.css"
import { Row, Col } from "antd";
import ProjectsData from "./ProjectsData";
import NavigationLinks from "../HighbrouNavigation/NavigationLinks";
const AllProjects = () => {
    const projectCategory = NavigationLinks.find(link => link.link === "Projects +");

    return (
        <>
            <section id="AllProjectsPageContainer">
                <CommonTopBannerDynamic
                    heading="Our Projects"
                    subheading="Our Works, Our Standards"
                    image="https://images.unsplash.com/photo-1705233844148-c554578cb64b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div>
                    <div className="sectionPadding">
                        <h2 className="ProjectsSectionHeading">Our Portfolio</h2>
                        <div className="AnimatedScrollingCards">
                            <div>
                                <Row>
                                    <Col lg={10}>
                                        <div className="ProjectsNamesCategoriesContainer">
                                            <ul>
                                                {projectCategory?.sublinks.map((subcategory, index) => (
                                                    // <div className="CategoryItem" >
                                                    <li key={index}>{subcategory.link}</li>
                                                    // </div>
                                                ))}
                                            </ul>

                                        </div>
                                    </Col>
                                    <Col lg={14}>
                                        {ProjectsData.map((item, index) => (
                                            <div className="ProjectsCardsContainer" key={index}>
                                                <div className="heightContainer">
                                                    <div className="OverlayContainerShadow">

                                                    </div>
                                                    <img src="https://images.unsplash.com/photo-1536008481235-3e8a05b1666b?q=80&w=2539&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                                    <div className="HoverContainerContainer">
                                                        <h2>{item.heading}</h2>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AllProjects