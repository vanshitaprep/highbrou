import React, { useEffect, useState } from "react";
import CommonTopBannerDynamic from "../CommonTopBanner/CommonTopBannerDynamic";
import "./ProjectsPage.css"
import { Modal, Row, Col, Carousel, Image } from "antd";
import ProjectsData from "./ProjectsData";
import NavigationLinks from "../HighbrouNavigation/NavigationLinks";
const AllProjects = () => {
    const projectCategory = NavigationLinks.find(link => link.link === "Projects +");

    // State for Modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Open Modal with Selected Project
    const showModal = (project) => {
        setSelectedProject(project);
        setIsModalVisible(true);
    };

    // Close Modal
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedProject(null);
    };

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
                                            <div className="ProjectsCardsContainer" key={index} onClick={() => showModal(item)} style={{ cursor: "pointer" }}>
                                                <div className="heightContainer">
                                                    <div className="OverlayContainerShadow">

                                                    </div>
                                                    {Array.isArray(item.image) && item.image.length > 0 && (
                                                        <img src={item.image[0]} alt={item.heading} />
                                                    )}
                                                    <div className="HoverContainerContainer">
                                                        <h2>{item.heading}</h2>
                                                        {/* <p>{item.description}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </div>
                            <Modal
                                title={selectedProject?.heading} // Dynamic Title
                                open={isModalVisible}
                                onCancel={handleCancel}
                                footer={null} // No footer buttons
                                width={1000} // Adjust modal width
                            >
                                {selectedProject && (
                                    <div>
                                        <div style={{ display: "flex", flexWrap: "wrap", padding: "5px" }}>
                                            {Array.isArray(selectedProject?.image) ? (
                                              <>
                                                    {selectedProject.image.map((imgSrc, imgIndex) => (
                                                        <Image
                                                            className="ModalInsideGalleryImage"
                                                            key={imgIndex}
                                                            src={imgSrc}
                                                        
                                                            alt={`${selectedProject.heading} - ${imgIndex + 1}`}
                                                        />
                                                    ))}
                                               </>
                                            ) : (
                                                <Image
                                                    className="ModalInsideGalleryImage"
                                                    src={selectedProject?.image}
                                                    alt={selectedProject?.heading}
                                                />
                                            )}

                                        </div>
                                        {/* <p><b>Tagline:</b> {selectedProject.tagline}</p> */}
                                        <p><b>Description:</b></p>
                                        {selectedProject.description} {/* Renders the JSX description */}
                                    </div>
                                )}
                            </Modal>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AllProjects