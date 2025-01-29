import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import CarousalImage1 from "./CarousalImage1.jpeg"
import CarousalImage2 from "./CarousalImage2.jpeg"
import Homeback from "./Homeback.jpg"
const imageUrls = [
    Homeback,
    "https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1705233844656-d05196a4fa30?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    CarousalImage1,
    CarousalImage2,
];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]); // State to hold preloaded images
    const [loading, setLoading] = useState(true); // Loading state

    // Function to preload images
    useEffect(() => {
        const preloadImages = async () => {
            const loadedImages = await Promise.all(
                imageUrls.map((src) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve(src);
                    });
                })
            );

            setImages(loadedImages); // Update state with preloaded images
            setLoading(false); // Mark loading as complete
        };

        preloadImages();
    }, []);

    // Change image every 4 seconds
    useEffect(() => {
        if (!loading) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [loading, images.length]);
    return (
        <>
            <section className="AnimatedHomePageContainer">
                <div className="AnimatedImageContainer">
                    <div className="BackOverlayContainer"></div>
                    <div className="ImagesContainer">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className={`carousel-image ${index === currentIndex ? "visible" : "hidden"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="HeightContainer">
                        <div className="headingContainer">
                            <h1>Creating timeless designs for modern living</h1>
                        </div>
                        <div className="HoverTextPoints">
                            <Row style={{ width: "100%" }}>
                                <Col lg={6} md={12} style={{ width: "100%" }}>
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
                                <Col lg={6} md={12} style={{ width: "100%" }}>

                                    <div className="HoverItem">
                                        <h4>PECISION ENGINEERING</h4>
                                        <FaArrowRightLong />
                                        <div className="HoverContainer">
                                            <p>We Deliver accuracy down to the milimeter, ensuring perfect execution every time.</p>
                                        </div>
                                        <hr />
                                    </div>
                                </Col>
                                <Col lg={6} md={12} style={{ width: "100%" }}>
                                    <div className="HoverItem">
                                        <h4>SUSTAINABLE SOLUTIONS</h4>
                                        <FaArrowRightLong />
                                        <div className="HoverContainer">
                                            <p>Our eco-friendly designs are setting new standards in green engineering.</p>
                                        </div>
                                        <hr />
                                    </div>
                                </Col>
                                <Col lg={6} md={12} style={{ width: "100%" }}>
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
