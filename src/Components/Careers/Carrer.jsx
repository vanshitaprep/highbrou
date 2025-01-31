import React, { useState } from "react";
import CommonTopBannerDynamic from "../CommonTopBanner/CommonTopBannerDynamic";
import { Row, Col, Modal, Form, Input, Button, message } from "antd";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";

const Career = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);




    const CareerPostData = [
        {
            postTitle: "Jr. Civil Engineer",
            postDate: "13 November, 2024"
        }
    ]
    const openModal = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);

    };
    return (
        <>
            <section id="CareerContainer">
                <CommonTopBannerDynamic
                    heading="Our Career"
                    subheading="Our Career, Our Future"
                    image="https://img.freepik.com/free-photo/walkway-with-glass-walls_1127-2246.jpg?t=st=1738234321~exp=1738237921~hmac=29f6078e4911675346a192b11c7087b6ab24774bdde4af1989f44f5c8241f85c&w=2000"
                />
                <div className="CareerPostContainer sectionPadding">
                    <Row>
                        {CareerPostData.map((item, index) => (
                            <Col lg={6} md={12} key={index} style={{ width: "100%" }}>
                                <div className="BorderHoverCard">

                                    <div className="HoverableCardContent">
                                        <span><FaCalendar /> &nbsp;{item.postDate}</span>
                                        <h2>{item.postTitle}</h2>
                                        <br />
                                        <button className="AnimatedBtnContainer" onClick={() => openModal(item)}>Apply Now<MdOutlineArrowRight /></button>
                                    </div>
                                    <hr />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <Modal
                    title={`Apply for ${selectedPost?.postTitle || ""}`}
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                    width={800}
                >
                    <Form
                      
                        layout="vertical"
                        initialValues={{}}
                    >
                        <Form.Item
                            name="firstName"
                            label="First Name"
                            rules={[{ required: true, message: "Please enter your first name!" }]}
                        >
                            <Input placeholder="Enter your first name" />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            label="Last Name"
                            rules={[{ required: true, message: "Please enter your last name!" }]}
                        >
                            <Input placeholder="Enter your last name" />
                        </Form.Item>

                        <Form.Item
                            name="mobile"
                            label="Mobile"
                            rules={[
                                { required: true, message: "Please enter your mobile number!" },
                                { pattern: /^[0-9]{10}$/, message: "Enter a valid 10-digit number!" },
                            ]}
                        >
                            <Input placeholder="Enter your mobile number" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: "Please enter your email!" },
                                { type: "email", message: "Enter a valid email address!" },
                            ]}
                        >
                            <Input placeholder="Enter your email address" />
                        </Form.Item>

                        <Form.Item
                            name="qualification"
                            label="Highest Qualification"
                            rules={[{ required: true, message: "Please enter your qualification!" }]}
                        >
                            <Input placeholder="Enter your highest qualification" />
                        </Form.Item>

                        <Form.Item
                            name="passingYear"
                            label="Passing Year"
                            rules={[{ required: true, message: "Please enter your passing year!" }]}
                        >
                            <Input placeholder="Enter your passing year" />
                        </Form.Item>

                        <Form.Item
                            name="currentCTC"
                            label="Current CTC (in INR)"
                            rules={[{ required: true, message: "Please enter your current CTC!" }]}
                        >
                            <Input placeholder="Enter your current CTC" />
                        </Form.Item>

                        <Form.Item
                            name="expectedCTC"
                            label="Expected CTC (in INR)"
                            rules={[{ required: true, message: "Please enter your expected CTC!" }]}
                        >
                            <Input placeholder="Enter your expected CTC" />
                        </Form.Item>

                        <Form.Item
                            name="permanentAddress"
                            label="Permanent Address"
                            rules={[{ required: true, message: "Please enter your permanent address!" }]}
                        >
                            <Input.TextArea placeholder="Enter your permanent address" rows={3} />
                        </Form.Item>

                        <Form.Item
                            name="currentAddress"
                            label="Current Address"
                            rules={[{ required: true, message: "Please enter your current address!" }]}
                        >
                            <Input.TextArea placeholder="Enter your current address" rows={3} />
                        </Form.Item>

                        <Form.Item
                            name="experience"
                            label="Total Years of Experience in Relevant Job Profile"
                            rules={[
                                { required: true, message: "Please enter your experience!" },
                            ]}
                        >
                            <Input placeholder="Enter your total years of experience" />
                        </Form.Item>

                        <Form.Item
                            name="noticePeriod"
                            label="Notice Period with Current Employer"
                            rules={[
                                { required: true, message: "Please enter your notice period!" },
                            ]}
                        >
                            <Input placeholder="Enter your notice period" />
                        </Form.Item>

                        <Form.Item
                            name="resume"
                            label="Resume (PDF only)"
                            rules={[
                                { required: true, message: "Please upload your resume!" },
                                {
                                    validator(_, value) {
                                        if (
                                            !value ||
                                            (value.file &&
                                                value.file.type === "application/pdf" &&
                                                value.file.size <= 2 * 1024 * 1024)
                                        ) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error("Only PDF files under 2MB are allowed!")
                                        );
                                    },
                                },
                            ]}
                        >
                            <Input type="file" accept=".pdf" />
                        </Form.Item>

                        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                            Submit Application
                        </Button>
                    </Form>
                </Modal>
            </section>
        </>
    )
}
export default Career