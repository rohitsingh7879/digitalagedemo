import React from 'react'
import Image from 'next/image'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import design from '../../public/Assests/Img/1.jpg'
import Footer from '../Footer/Footer';

function WebMobileDevelopment() {
    return (
        <>

            <div>
                <div id="carouselExampleCaptions" className="carousel slide">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Image height={500} width={100} src={design}  className="d-block w-100" alt="" layout="responsive"/>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Web Development</h3>

                                    <p className="card-text mb-auto">We specialize in building custom web applications tailored to your specific business needs. Our team of experienced developers will work with you to create a web solution that meets your requirements and exceeds your expectations.</p>

                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img className="bd-placeholder-img" width="200" height="250"
                                        src="https://cdn.pixabay.com/photo/2015/11/16/16/41/web-1045994_640.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Cross-Platform Mobile App Development</h3>

                                    <p className="mb-auto">We provide cross-platform mobile app development services using frameworks such as React Native and Flutter.  mobile app that works on both iOS and Android platforms.

                                    </p>

                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img src="https://cdn.pixabay.com/photo/2015/03/01/11/29/mockup-654585_640.jpg" width="200" height="250" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Front-End Development</h3>

                                    <p className="card-text mb-auto">We provide responsive web design services to ensure that your website looks great on any device. Our team of designers will create a modern and visually appealing design that adapts to different screen sizes and resolutions.</p>

                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img className="bd-placeholder-img" width="200" height="250"
                                        src="https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_640.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Back-End Development</h3>

                                    <p className="mb-auto"> We offer back-end development services to build scalable and secure web architectures. Our team of experienced developers will work with you to design a robust and reliable web solution that can handle high traffic and data loads.</p>
                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img src="https://media.istockphoto.com/id/1332104905/photo/shot-of-two-colleagues-working-together-in-a-server-room.jpg?s=612x612&w=0&k=20&c=0QRku01wgm-bXgt1htR7CHvq5CL0FBhap5QpL1S2bHU=" alt=""  width="200" height="250" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">Website Speed Optimization</h3>

                                    <p className="card-text mb-auto">We provide website speed optimization services to ensure that your website loads quickly and efficiently. Our team of designers and developers will use various optimization techniques to reduce image sizes, minify code, and improve server response times.</p>

                                </div>

                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img className="bd-placeholder-img" width="200" height="250" src="https://cdn.pixabay.com/photo/2023/05/21/07/49/blockchain-8008051_640.jpg" alt="" />
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
                                    <img width="200" height="250" src="https://cdn.pixabay.com/photo/2020/07/31/05/44/server-5451985_640.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">Web Application Maintenance and Support</h3>

                                    <p className="card-text mb-auto">We offer web application maintenance and support services to ensure that your web solution is up-to-date and running smoothly. Our team of experienced developers will provide regular updates.</p>

                                </div>

                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img className="bd-placeholder-img" width="200" height="250" src="https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">

                                    <h3 className="mb-0">Mobile App Maintenance and Updates</h3>

                                    <p className="mb-auto">We provide mobile app maintenance and update services to ensure that your mobile app remains functional and relevant. Our team of skilled developers will provide regular updates, bug fixes, and feature enhancements.</p>

                                </div>
                                <div className="col-auto d-flex align-items-center justify-content-center">
                                    <img src="https://cdn.pixabay.com/photo/2022/02/27/19/05/smartphone-7037878_640.png" alt=""  width="200" height="250"/>
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

export default WebMobileDevelopment
