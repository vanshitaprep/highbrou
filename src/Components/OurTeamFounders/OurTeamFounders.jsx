import React, { useState } from "react";
import "./OurTeamFounders.css";
import { Row, Col, Modal } from "antd";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const OurTeamFounders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [selectedFounder, setSelectedFounder] = useState(null); // Selected founder details

    const FoundersData = [
        {
            memberName: "SAYYAD WAJED ALI",
            position: "FOUNDER",
            image: "/Images/team1.webp",
            qualificationDetails: (
                <div>
                    <ul>
                        <li>Graduate in Civil Engineering from Dr. BAMU university</li>
                        <li>Structural Engineer with 10+ years of experience in high-rise buildings, infrastructure, and industrial projects.</li>
                        <li>Skilled at delivering innovative solutions for complex projects, including high-rises and large-scale developments.</li>
                    </ul>
                </div>
            ),
        },
        {
            memberName: "SARFARAZ SHAIKH",
            position: "FOUNDER",
            image: "/Images/team2.webp",
            qualificationDetails: (
                <div>
                    <ul>
                        <li>A Mechanical Engineering graduate from Mumbai</li>
                        <li>Proficient consultant with over 20 years of experience in the MEP industry.</li>
                        <li>Has successfully completed 200+ projects across various sectors.</li>
                        <li>Leads branding, expansion, and growth strategies at Highbrow Engineering.</li>
                    </ul>
                </div>
            ),
        },
    ];

    const showModal = (founder) => {
        setSelectedFounder(founder); // Set the selected founder details
        setIsModalOpen(true); // Open modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
        setSelectedFounder(null); // Clear selected founder details
    };

    return (
        <>
            <section>
                <div>
                    <div className="sectionPadding">
                        <div className="OurTeamFoundersContentHeader">
                            <span> &nbsp;Guided by Expertise, Driven by Passion.</span>
                            <h2>Our Founders</h2>
                        </div>
                        <div className="FoundersAnimatedCards">
                            <Row>
                                {FoundersData.map((item, index) => (
                                    <Col lg={12} md={24} key={index} style={{ width: "100%" }}>
                                        <div
                                            className="FounderAnimatedCard"
                                            onClick={() => showModal(item)} // Open modal on click
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="FounderOverlayOnHover"></div>
                                            <img src={item.image} alt={item.memberName} />
                                            <div className="FoundersInfoContentContainer">
                                                <div>
                                                    <span>{item.position}</span>
                                                    <h2>{item.memberName}</h2>
                                                </div>
                                                <div>
                                                    <FaFacebookSquare />
                                                    <FaLinkedin />
                                                    <AiFillInstagram />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>

                {/* Ant Design Modal */}
                <Modal
                    title={selectedFounder?.memberName}
                    open={isModalOpen}
                    onCancel={handleCloseModal}
                    footer={null}
                >
                    {selectedFounder && (
                        <>
                            {/* <h3>{selectedFounder.position}</h3> */}
                            <div className="ModalImageContainer">
                                <img
                                    src={selectedFounder.image}
                                    alt={selectedFounder.memberName}
                                    className="ModalFounderImage"
                                />
                            </div>
                            <div className="ModalDetails">
                                {selectedFounder.qualificationDetails}
                            </div>
                        </>
                    )}
                </Modal>
            </section>
        </>
    );
};

export default OurTeamFounders;
