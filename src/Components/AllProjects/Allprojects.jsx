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
                    image="https://img.freepik.com/free-photo/construction-site-silhouettes_1127-2990.jpg?t=st=1737616296~exp=1737619896~hmac=540a3debb5585273f0e4171b9ba7ba2d8368d09280cd4a146b3ec8ce03f20446&w=1800"
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