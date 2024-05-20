import Image from 'next/image'
import React from 'react'
import Footer from '../Footer/Footer'
import cicd from '../../public/image.png'
function DevOPS() {
    return (
        <>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={{ height: "500px", width: "100vw" }} src={"https://cdn.pixabay.com/photo/2018/02/15/18/29/devops-3155973_640.jpg"} className="d-block w-100" alt="" layout="responsive" />
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Assessment and Strategy</h3>

                                    <p className="card-text mb-auto">Full stack development is the process of designing, creating, testing, and
                                        deploying a complete web application from start to finish. It involves working with various technologies
                                        and tools, including front-end, back-end and database development.</p>

                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img className="bd-placeholder-img" width="200" height="250"
                                        src="https://cdn.pixabay.com/photo/2021/09/27/14/37/hosting-6661115_640.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Continuous Integration and Continuous Deployment (CI/CD)</h3>

                                    <p className="mb-auto">Python is often used as a support language for software developers, for build control
                                        and management, testing, and in many other ways. SCons for build control. Buildbot and Apache Gump for

                                    </p>

                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <Image src={cicd} width="200" height="250" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Infrastructure as Code (IaC)</h3>

                                    <p className="card-text mb-auto">Data scientists examine which questions need answering and where to find the
                                        related data. They have business acumen and analytical skills as well as the ability to mine, clean, and
                                        present data.</p>

                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img className="bd-placeholder-img" width="200" height="250"
                                        src="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_640.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Cloud Services and Management</h3>

                                    <p className="mb-auto"> Machine learning is a branch of artificial intelligence (AI) and computer science
                                        which focuses on the use of data and algorithms to imitate the way that humans learn, gradually
                                        improving its accuracy.</p>
                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img width="200" height="250" src="https://cdn.pixabay.com/photo/2018/05/16/18/16/cloud-3406627_640.jpg" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">Containerization and Orchestration</h3>

                                    <p className="card-text mb-auto">One of the best ways for software engineers to keep up to date with trends in the field is to attend conferences. Virtual conferences and even canceled events, many organizations will be back in 2022 to holding in-person gatherings.</p>

                                </div>

                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img className="bd-placeholder-img" width="200" height="250" src="https://cdn.pixabay.com/photo/2020/08/07/05/45/cloud-5469737_640.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Monitoring and Logging</h3>

                                    <p className="mb-auto">Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience. User experience is central to the web designing process.</p>

                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img width="200" height="250" src="https://cdn.pixabay.com/photo/2019/04/29/07/39/cloud-4165397_640.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">Security and Compliance</h3>

                                    <p className="card-text mb-auto">One of the best ways for software engineers to keep up to date with trends in the field is to attend conferences. Virtual conferences and even canceled events, many organizations will be back in 2022 to holding in-person gatherings.</p>

                                </div>

                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img className="bd-placeholder-img" width="200" height="250" src="https://cdn.pixabay.com/photo/2023/06/30/07/55/internet-8097838_640.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Disaster Recovery and Backup</h3>

                                    <p className="mb-auto">Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience. User experience is central to the web designing process.</p>

                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img width="200" height="250" src="https://cdn.pixabay.com/photo/2023/05/26/06/54/ai-generated-8018868_640.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default DevOPS