import React, { useState } from "react";
import "./OurTeamFounders.css";
import { Row, Col, Modal } from "antd";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const OurTeamFounders = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [selectedFounder, setSelectedFounder] = useState(null); // Selected founder details

    const FoundersData = [
        {
            memberName: "SAYYAD WAJED ALI",
            position: "Director",
            tagline: "Structural Engineer with 10+ years of expertise in high-rises and infrastructure.",
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
            position: "Associate Director",
            tagline: "Experienced MEP consultant with 20+ years in the industry, successfully delivering 200+ projects across sectors.",
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

    const InverstorsDetails = [
        {
            image: "",
            name: "Investors Name",
        },
        {
            image: "",
            name: "Investors Name",
        },
        {
            image: "",
            name: "Investors Name",
        },
        {
            image: "",
            name: "Investors Name",
        },
        {
            image: "",
            name: "Investors Name",
        },
        {
            image: "",
            name: "Investors Name",
        },
        {
            image: "",
            name: "Investors Name",
        }
    ]
    return (
        <>
            <section>
                <div>
                    <div className="sectionPadding">
                        <div className="OurTeamFoundersContentHeader">
                            <span> &nbsp;Guided by Expertise, Driven by Passion.</span>
                            <h2>Our Leaders</h2>
                        </div>
                        <div className="FoundersAnimatedCards">
                            {/* <Row>
                                {FoundersData.map((item, index) => (
                                    <Col lg={10} md={24} key={index} style={{ width: "100%" }}>
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
                            </Row> */}
                            <Row>
                                {FoundersData.map((item, index) => (
                                    <Col lg={12} md={24} key={index} style={{ width: "100%" }} data-aos="fade-up"
                                        data-aos-delay={`${index * 200}`}>
                                        <div

                                            onClick={() => showModal(item)} // Open modal on click
                                            style={{ cursor: "pointer" }}
                                            id="FounderCardMainContainer"
                                        >

                                            <div className="FounderImageContainer">
                                                <img src={item.image} alt={item.memberName} />
                                            </div>
                                            <div className="FounderInfo">
                                                <div>
                                                    <span style={{ textTransform: "uppercase" }}>{item.position}</span>
                                                    <h2>{item.memberName}</h2>
                                                    <p>{item.tagline}</p>
                                                </div>
                                                <div>
                                                    <FaFacebookSquare />
                                                    <FaLinkedin />
                                                    <FaInstagramSquare />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <br /><br /><br />
                        <div className="OurInverstorsContentContainer">
                            <div>
                                <Row>
                                    <Col lg={10}>
                                        <div className="InverstorsTeamContainerContent">
                                            <div>
                                                <h2>Board of Directors</h2>
                                                <p>We’re on the lookout for passionate, forward-thinking individuals who are eager to make an impact.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={14}>
                                        <div id="InvestorsCardSwiperContainer">
                                            <Swiper
                                                slidesPerView={2}
                                                spaceBetween={30}
                                                loop={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                modules={[Autoplay, Pagination]}
                                                className="mySwiper"
                                                style={{ height: "100%" }}
                                                breakpoints={{
                                                    0: { slidesPerView: 1, spaceBetween: 10 }, // For mobile devices
                                                    768: { slidesPerView: 2, spaceBetween: 30 }, // For tablets and larger screens
                                                }}
                                            >
                                                {InverstorsDetails.map((item, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div className="InvestorsCardFormat">
                                                            <div>
                                                                <div className="InvestorImage">
                                                                    <img src="https://plus.unsplash.com/premium_photo-1683134127869-a0aa8f8db043?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                                                </div>
                                                                <div className="InvestorsNameAndContent">
                                                                    <h2>{item.name}</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}

                                            </Swiper>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    {/* <div className="sectionPadding"> */}

                    {/* </div> */}
                </div>


                {/* Ant Design Modal */}
                <Modal
                    title={selectedFounder?.memberName}
                    open={isModalOpen}
                    onCancel={handleCloseModal}
                    footer={null}
                    width={500}
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
            </section >
        </>
    );
};

export default OurTeamFounders;
