import React from "react";
import "./Footer.css"
import { Row, Col } from "antd";
import highbrou_logo from "./FooterWhiteLogo.png"
import FooterBackOverlayImage from "./FooterBackOverlayImage.png"
import NavigationLinks from "../HighbrouNavigation/NavigationLinks";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <section id="FooterContainer">

                <div>
                    <div className="sectionPadding">
                        <div className="FooterbackImageOverlay">
                            <img src={FooterBackOverlayImage} alt="" />
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className="FooterLogoContainer">
                                    <div className="LogoPlacingContainer">
                                        <img src={highbrou_logo} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={10}>
                                <div className="NavigationLinksContainer">
                                    <Row>
                                        {NavigationLinks.map((item, index) => (
                                            <Col lg={12}>
                                                <p key={index}>{item.link}</p>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="AddressAndSocialLinksContainer">
                                    <Row>
                                        <Col>
                                            <div>
                                                <div className="OfficeAddressContainer">
                                                    {/* <IoLocationSharp/> */}
                                                    <p>Head Office : 204, Damji shamji Udyog Bhavan, Andheri west, Mumbai 400047.</p>
                                                </div>
                                                <div className="OfficeAddressContainer">
                                                {/* <IoLocationSharp/> */}
                                                <p>Registered Office: 8-8-252, New Rashidpura N10, CIDCO, Aurangabad 431003.</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>

                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer