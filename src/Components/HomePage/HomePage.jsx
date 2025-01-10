import React from "react";
import "./HomePage.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage = () => {
    return (
        <>
            <section className="AnimatedHomePageContainer">
                <div className="AnimatedImageContainer">
                    <div className="BackOverlayContainer"></div>
                    <div className="ImagesContainer">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    <div className="HeightContainer">
                        <div className="headingContainer">
                            <h1>Creating timeless designs for modern living</h1>
                        </div>
                        <div className="HoverTextPoints">
                            <Row style={{ width: "100%" }}>
                                <Col lg={6} md={12}>
                                    <div className="HoverItem">
                                        <div>
                                            <h4>CUTTING EDGE DESIGN</h4>
                                            <FaArrowRightLong />
                                        </div>
                                        <div className="HoverContainer">
                                            <p>Our state-of-the-art technology creates structures that others only dream of</p>
                                        </div>
                                        <hr />
                                    </div>
                                </Col>
                                <Col lg={6} md={12}>

                                    <div className="HoverItem">
                                        <h4>PECISION ENGINEERING</h4>
                                        <FaArrowRightLong />
                                        <div className="HoverContainer">
                                            <p>We Deliver accuracy down to the milimeter, ensuring perfect execution every time.</p>
                                        </div>
                                        <hr />
                                    </div>
                                </Col>
                                <Col lg={6} md={12}>
                                    <div className="HoverItem">
                                        <h4>SUSTAINABLE SOLUTIONS</h4>
                                        <FaArrowRightLong />
                                        <div className="HoverContainer">
                                            <p>Our eco-friendly designs are setting new standards in green engineering.</p>
                                        </div>
                                        <hr />
                                    </div>
                                </Col>
                                <Col lg={6} md={12}>
                                    <div className="HoverItem">
                                        <h4>RAPID DELIVERY </h4>
                                        <FaArrowRightLong />
                                        <div className="HoverContainer">
                                            <p>We work at the speed of innovation, without compromising on quality.</p>
                                        </div>
                                        <hr />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
