import React, { useState, useEffect } from "react";
import CommonTopBannerDynamic from "../CommonTopBanner/CommonTopBannerDynamic";
import { Row, Col, Modal, Form, Input, Button, message, Tag } from "antd";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";

const Career = () => {
    const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const CareerPostData = [
        {
            postTitle: "Design Engineer - BIM Structures",
            postDate: "13 November, 2024",
            location: "Mumbai, Maharashtra, India",
            jobtype: [
                "Remote", "Full-time"
            ],
            jobdescription: <>
                <div>
                    <p><b>Location: </b> Mumbai, Maharashtra, India</p>
                    <div>
                        <p><b>About the job</b></p>
                        <p><b>Company Description</b></p>
                        <p>Highbrou Engineering Pvt. Ltd. is dedicated to redefining the role of an engineering partner by delivering cutting-edge technical consulting services in Structural Engineering. With expertise in tall buildings, PEB warehouses, stadiums, and more, our seasoned engineers bring decades of combined experience to each project. Our vision is to exceed client expectations by providing innovative and sustainable solutions, supported by a team proficient in BIM tools for quality results.</p>
                        <p><b>Role Description</b></p>
                        <p>This is a full-time remote role for a Design Engineer - BIM Structures at Highbrou Engineering Pvt. Ltd. The Design Engineer will be responsible for tasks related to design engineering, BIM, computer-aided design (CAD), etc.</p>
                        <p><b> Key Responsibilities:</b></p>
                        <ul>
                            <li>Create structural drawings in Revit (seldom in AutoCAD)</li>
                            <li>Check drawings for compliance with project specs </li>
                            <li>Manage project documentation & filing systems </li>
                            <li>Collaborate with the project team for updates & revisions </li>
                            <li>Prepare structural framing layouts from Architectural designs</li>
                            <li>Produce detailed GA layouts, sections & RCC rebar drawings</li>
                            <li>Generate structural steel details, connections, BOM, BBS, etc.</li>
                        </ul>
                        <p><b> Requirements:</b></p>
                        <ul>
                            <li>Diploma in Civil Engineering (BE Civil is a plus) </li>
                            <li>3-5 years of BIM experience in buildings/infrastructure projects </li>
                            <li>Proficient in Revit Structures & AutoCAD</li>
                            <li>Knowledge of Dynamo & automation is a bonus </li>
                            <li>Great communication & teamwork skills</li>
                            <li>Remote work-friendly</li>
                        </ul>
                    </div>
                </div>
            </>
        },
        {
            postTitle: "Structural Design Engineer",
            postDate: "4 January 2025",
            location: "Mumbai Metropolitan Region",
            jobtype: [
                "Hybrid", "Full-time", "0 of 10 skills match"
            ],
            jobdescription: <>
                <div>
                    <p><b>Location: </b> Mumbai Metropolitan Region</p>

                    <div>
                        <p><b>About the job</b></p>
                        <p>Tips: Provide a summary of the role, what success in the position looks like, and how this role fits into the organization overall.</p>
                        <p><b>Role and Responsibilities:</b></p>
                        <ul>
                            <li>Developing structural design models.</li>
                            <li>Performing calculations and analysis for various structural projects.</li>
                            <li>Preparing design reports, drawings, and specifications.</li>
                            <li>Collaborating with clients, architects, and project teams.</li>
                            <li>Ensuring compliance with building codes and standards.
                            </li>
                        </ul>
                        <p><b>Experience Level:</b></p>
                        <ul>
                            <li>Preferably 3–6 years of experience in structural design.</li>
                            <li>Proficiency in software tools like ETABS, SAFE, STAAD.Pro, AutoCAD, and Revit.</li>
                        </ul>
                        <p><b>Required Skills:</b></p>
                        <ul>
                            <li>Strong knowledge of RCC and steel design.
                            </li>
                            <li>Familiarity with BIM workflows.</li>
                            <li>Ability to perform dynamic and seismic analysis.</li>
                            <li>Problem-solving mindset and attention to detail.
                            </li>
                        </ul>
                        <p><b>Location and Work Mode:</b></p>
                        <ul>
                            <li>The position allows for remote work, aligning with Highbrou's work-from-home policy.
                            </li>
                            <li>Candidates must have their own computer system meeting the company's configuration requirements and a professional workspace.
                            </li>
                        </ul>
                        <p><b>Compensation and Benefits:</b></p>
                        <ul>
                            <li>Competitive salary based on experience and skills.</li>
                            <li>Opportunities for training and professional growth.
                            </li>
                        </ul>
                        <p><b>Additional Considerations:</b></p>
                        <ul>
                            <li>The engineer should have excellent communication skills to coordinate with clients and team members effectively.
                            </li>
                            <li>A strong commitment to delivering high-quality, innovative designs.
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        },
        {
            postTitle: "Senior Structural Draftsman (RCC & Steel)",
            postDate: "- 2025",
            location: "Mumbai Metropolitan Region",
            jobtype: [
                "Hybrid", "Full-time", "0 of 10 skills match"
            ],
            jobdescription: <>
                <div>
                    <p><b>About the job</b></p>
                    <p><b>Responsibilities</b></p>
                    <ul>
                        <li>Undertake CAD / BIM drafting work</li>
                        <li>Prepare high quality civil structural and infrastructural drawings</li>
                        <li>Examine and check drawings to ensure compliance with project requirements and specifications</li>
                        <li>Maintain and adhere to office and project filing systems / documentation</li>
                        <li>Assist in administration and documentation of projects, including prepare manuals</li>
                        <li>Work closely with the project team on any update and changes to drawings
                        </li>
                        <li> ⁠Prepare concept structural framing drawings from scratch using Architectural layouts</li>
                        <li>Prepare detailed GA layouts and sections as per project requirement</li>
                        <li>Prepare rebar details for RCC elements</li>
                        <li>Prepare Structural steel details including GA layouts & connection details</li>
                        <li>⁠Prepare GFC drawings</li>
                        <li>Prepare bar bending schedule</li>
                    </ul>
                    <p><b>Requirements</b></p>
                    <ul>
                        <li>⁠Diploma in Civil Engineering / ITI in CAD drafting or equivalent</li>
                        <li>Min 5 years’ drafting experience, preferably in civil or infrastructure projects</li>
                        <li>Proficient in AutoCAD software, knowledge in Revit BIM will be an added advantage</li>
                        <li>Excellent interpersonal and communication skills</li>
                        <li>⁠Ability to work remotely within a team</li>
                    </ul>
                </div>
            </>
        }


    ]
    const openDescriptionModal = (post) => {
        setSelectedPost(post);
        setIsDescriptionModalOpen(true);
    };

    const openApplyModal = () => {
        setIsDescriptionModalOpen(false);
        setIsApplyModalOpen(true);
    };

    const handleCancel = () => {
        setIsDescriptionModalOpen(false);
        setIsApplyModalOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <section id="CareerContainer">
                <CommonTopBannerDynamic
                    heading="Our Career"
                    subheading="Our Journey, Our Tomorrow"
                    image="https://img.freepik.com/free-photo/walkway-with-glass-walls_1127-2246.jpg?t=st=1738234321~exp=1738237921~hmac=29f6078e4911675346a192b11c7087b6ab24774bdde4af1989f44f5c8241f85c&w=2000"
                />
                <div className="CareerPostContainer sectionPadding">
                    <Row>
                        {CareerPostData.map((item, index) => (
                            <Col lg={12} md={12} key={index} style={{ width: "100%", padding: "10px" }}>
                                <div className="BorderHoverCard">

                                    <div className="HoverableCardContent">
                                        <span><FaCalendar /> &nbsp;{item.postDate}</span>
                                        <h2>{item.postTitle}</h2>
                                        <p>{item.location}</p>
                                        <div>
                                            {Array.isArray(item.jobtype) ? (
                                                item.jobtype.map((type, idx) => (
                                                    <Tag key={idx} color="blue">{type}</Tag>
                                                ))
                                            ) : null}
                                        </div>
                                        {/* <p>{item.jobdescription}</p> */}
                                        <br />
                                        <button className="AnimatedBtnContainer" onClick={() => openDescriptionModal(item)}>View Job Description <MdOutlineArrowRight /></button>
                                    </div>
                                    <hr />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <Modal
                    title={selectedPost?.postTitle || ""}
                    open={isDescriptionModalOpen}
                    onCancel={handleCancel}
                    width={1000}
                    footer={[
                        <button className="AnimatedBtnContainer" onClick={openApplyModal} key="apply">Apply Now <MdOutlineArrowRight /></button>
                    ]}
                >
                    <p style={{ fontSize: "16px" }}>{selectedPost?.jobdescription}</p>
                </Modal>
                <Modal
                    title={`Apply for ${selectedPost?.postTitle || ""}`}
                    open={isApplyModalOpen}
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

                        <button className="AnimatedBtnContainer" htmlType="submit" >
                            Submit Application
                        </button>
                    </Form>
                </Modal>
            </section>
        </>
    )
}
export default Career