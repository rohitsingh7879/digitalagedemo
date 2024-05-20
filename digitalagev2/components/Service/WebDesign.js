import Image from 'next/image'
import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import design from '../../public/Assests/Img/Design.png'

function WebDesign() {
    return (
      <div>
      <div id="carouselExampleCaptions" className="carousel slide">
              
                <div className="carousel-inner">
                    {/* <div className="carousel-item active"> */}
                    <img height={500} width={100} src={"https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg"} className="d-block w-100" alt="" layout="responsive"  />
                    {/* </div> */}
                </div>
            </div>

            <div className="container my-5">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                    
                                <h3 className="mb-0">Consultation and Planning</h3>
                               
                                <p className="card-text mb-auto">Full stack development is the process of designing, creating, testing, and
                                    deploying a complete web application from start to finish. It involves working with various technologies
                                    and tools, including front-end, back-end and database development.</p>
                  
                            </div>
                            <div className="col-auto d-flex align-items-center justify-content-center">
                                <img className="bd-placeholder-img" width="200" height="250"
                                    src="https://cdn.pixabay.com/photo/2023/08/02/14/50/focused-american-men-8165458_640.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                              
                                <h3 className="mb-0">Graphic Design</h3>
                               
                                <p className="mb-auto">Python is often used as a support language for software developers, for build control
                                    and management, testing, and in many other ways. SCons for build control. Buildbot and Apache Gump for
                                    automated continuous compilation and testing.

                                </p>
                   
                            </div>
                            <div className="col-auto d-flex align-items-center justify-content-center">
                                <img src="https://cdn.pixabay.com/photo/2023/07/25/18/42/vector-graphic-8149677_640.jpg" width="200" height="250"alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                          
                                <h3 className="mb-0">Responsive Design</h3>
                               
                                <p className="card-text mb-auto">Data scientists examine which questions need answering and where to find the
                                    related data. They have business acumen and analytical skills as well as the ability to mine, clean, and
                                    present data.</p>
                                
                            </div>
                            <div className="col-auto d-flex align-items-center justify-content-center">
                                <img className="bd-placeholder-img" width="200" height="250"
                                    src="https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_640.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                               
                                <h3 className="mb-0">Web Development</h3>
                               
                                <p className="mb-auto"> Machine learning is a branch of artificial intelligence (AI) and computer science
                                    which focuses on the use of data and algorithms to imitate the way that humans learn, gradually
                                    improving its accuracy.</p>
                            </div>
                            <div className="col-auto d-flex align-items-center justify-content-center">
                                <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg" alt="" width="200" height="250" />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">Digital Marketing Integration</h3>
                               
                                <p className="card-text mb-auto">One of the best ways for software engineers to keep up to date with trends in the field is to attend conferences. Virtual conferences and even canceled events, many organizations will be back in 2022 to holding in-person gatherings.</p>
                           
                            </div>
                         
                            <div className="col-auto d-flex align-items-center justify-content-center">
                                <img className="bd-placeholder-img" width="200" height="250" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_640.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                           
                                <h3 className="mb-0">Hosting and Deployment</h3>
                               
                                <p className="mb-auto">Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience. User experience is central to the web designing process.</p>
                           
                            </div>
                            <div className="col-auto d-flex align-items-center justify-content-center">
                                <img  width="200" height="250" src="https://cdn.pixabay.com/photo/2020/07/31/05/44/server-5451985_640.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default WebDesign
