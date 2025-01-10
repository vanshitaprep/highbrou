import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import "./AboutHomeContent.css"
import { MdOutlineArrowRight } from "react-icons/md";

const HomePageAbout = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section id="HomePageAboutContainer">
                <div className="HomePageAboutContentContainer sectionPadding">
                    <Row>
                        <Col lg={12} md={24}>
                            <div className="AboutContentContainer">
                                <div>
                                    <span>About us?</span>
                                    <h1>We conduct all business with the highest standards</h1>
                                    <p>At Highbrou Engineering, we specialize in turning visionary concepts into enduring and impactful structures. With more than a decade of expertise in structural engineering, we excel in crafting precision-driven solutions tailored to diverse project needs.
                                    </p>
                                    <p>Our portfolio spans high-rise buildings, intricate industrial facilities, hospitality venues, and government infrastructure. Each project reflects our unwavering commitment to quality, innovation, and resilience.</p>
                                    <button className="AnimatedBtnContainer">Learn More<MdOutlineArrowRight/></button>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} md={24}>
                            <div className="AboutHomeImageContainer">
                                <img style={{ transform: `translateY(${offsetY * 0.1}px)` }} src="https://images.unsplash.com/photo-1714113728562-6c67a7cb4542?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default HomePageAbout