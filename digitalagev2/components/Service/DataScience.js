import Link from 'next/link'
import React from 'react'
import lap from '@/public/Assests/Img/1.jpg'
import Image from 'next/image'
import Footer from '../Footer/Footer'

function DataScience() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ height: "500px", width: "100%" }} src={"https://cdn.pixabay.com/photo/2024/02/05/14/40/man-8554677_1280.png"} className="d-block w-100" alt="" layout="responsive" />
                    </div>
                </div>
            </div>


            <div className="container my-5" id="Topics">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Data Mining</h3>
                                <p className="card-text mb-auto">One of the best ways for software engineers to keep up to date with trends in the field is to attend conferences. Virtual conferences and even canceled events, many organizations will be back in 2022 to holding in-person gatherings.</p>
                            </div>
                            {/* <div className="col-auto mt-4 d-lg-block"> */}
                            <div className="col-auto d-flex align-items-center justify-content-center">
                                <img className="bd-placeholder-img" width="200" height="250" src="https://cdn.pixabay.com/photo/2018/10/12/12/32/security-3742114_640.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Statistical Analysis</h3>
                                <p className="mb-auto">Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience. User experience is central to the web designing process.</p>
                            </div>
                            <div className="col-auto d-flex align-items-center justify-content-center">
                                <img width="200" height="250" src="https://cdn.pixabay.com/photo/2018/12/10/02/14/manhattan-3866140_640.jpg" alt="" />
                            </div>
                        </div>
                    </div>


                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <h3 className="mb-0">Deep Learning</h3>
                                        <p className="card-text mb-auto">Full stack development is the process of designing, creating, testing, and
                                            deploying a complete web application from start to finish. It involves working with various technologies
                                            and tools, including front-end, back-end and database development.</p>
                                    </div>
                                    <div className="col-auto d-flex align-items-center justify-content-center">
                                        <img className="bd-placeholder-img" width="200" height="250"
                                            src="https://cdn.pixabay.com/photo/2024/01/25/05/47/ai-generated-8531013_640.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <h3 className="mb-0">Python</h3>
                                        <p className="mb-auto">Python is often used as a support language for software developers, for build control
                                            and management, testing, and in many other ways. SCons for build control. Buildbot and Apache Gump for
                                            automated continuous compilation and testing.

                                        </p>
                                    </div>
                                    <div className="col-auto d-flex align-items-center justify-content-center">
                                        <img src="https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_640.jpg" width="200" height="250" alt="" />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <h3 className="mb-0">Data Scientist</h3>
                                        <p className="card-text mb-auto">Data scientists examine which questions need answering and where to find the
                                            related data. They have business acumen and analytical skills as well as the ability to mine, clean, and
                                            present data.</p>
                                    </div>
                                    <div className="col-auto d-flex align-items-center justify-content-center">
                                        <img className="bd-placeholder-img" width="200" height="250"
                                            src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_640.jpg" alt="" />
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <h3 className="mb-0">Machine Learning</h3>
                                        <p className="mb-auto"> Machine learning is a branch of artificial intelligence (AI) and computer science
                                            which focuses on the use of data and algorithms to imitate the way that humans learn, gradually
                                            improving its accuracy.</p>
                                    </div>
                                    <div className="col-auto d-flex align-items-center justify-content-center">
                                        <img width="200" height="250" src="https://cdn.pixabay.com/photo/2024/03/17/21/58/ai-generated-8639839_640.jpg" alt="" />

                                    </div>
                                </div>
                            </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default DataScience
