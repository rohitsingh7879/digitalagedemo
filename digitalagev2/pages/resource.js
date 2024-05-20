import Head from "next/head";
import Footer from '@/components/Footer/Footer'
import styles from "../styles/Resource.module.css"
import Contactus from '@/components/Contactus/Contactus'

function Resource() {
    return (
        <>
            <Head>
                <title>Digital Age/Resource</title>
                <meta name="description" content="Transforming Ideas Into Powerful Solutions: Web Design, Web Development, Mobile Development, SEO, Digital Marketing, DevOPS, Data Science" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
            <div>
            <div className={styles.containerfirst}>
                <div className={styles.overlay}></div>
                <h1 className={styles.textfirst}>Collective Excellence</h1>
            </div>

            <div className="container mt-5">
                <p  style={{ marginTop: "100px" }}>At Digital Age, our skilled engineers specialize in cutting-edge technologies. With a focus on professionalism and ethical conduct, our team delivers high-quality solutions that meet the demands of modern digital projects. Explore our profiles below to discover the expertise and commitment driving success at Digital Age.</p>
                <h1 className='text-center' style={{ fontWeight: "800", marginTop: "100px" }}>Hire Our Developer</h1>
                <div className='row' style={{ marginTop: "100px", marginBottom: "100px" }}>
                    <div className='col-sm-12 col-md-6 mt-3'>
                        <div className={`${styles.cardmargin} border border-warning p-3`}>
                            <p className='text-center' style={{ fontWeight: "800" }}>UI/ UX Designing</p>
                            <p className='mt-5 mb-5'>Years of practice, training, and experience in design have allowed our team to deliver the best UI and UX services to you. We focus on building seamless interaction flows between user and software.</p>
                            <div className='d-flex justify-content-center'>
                                <div className='border border-warning-subtle p-2' style={{ width: "140px", }}>
                                    Available : 40+
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 mt-3'>
                        <div className={`${styles.cardmargin} border border-warning p-3`}>
                            <p className='text-center' style={{ fontWeight: "800" }}>Full Stack Developer</p>
                            <p className='mt-5 mb-5'>We offer end-to-end solutions for web application development, providing expertise in prototyping, intuitive UX/UI design, robust programming, seamless cloud deployment, rigorous testing, and ongoing support. As your trusted partner, we ensure a smooth journey from conception to implementation, tailored to your unique needs.</p>
                            <div className='d-flex justify-content-center'>
                                <div className='border border-warning-subtle p-2' style={{ width: "150px"}}>
                                    Available : 100+
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 mt-3'>
                        <div className={`${styles.cardmargin} border border-warning p-3`}>
                            <p className='text-center' style={{ fontWeight: "800" }}>Mobile App Developer</p>
                            <p className='mt-5 mb-5'>A go-to partner for full-cycle mobile application development services, including prototyping, UX/UI design, programming, cloud deployment, testing, and support.</p>
                            <div className='d-flex justify-content-center'>
                                <div className='border border-warning-subtle p-2' style={{ width: "140px"}}>
                                    Available : 40+
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 mt-3'>
                        <div className={`${styles.cardmargin} border border-warning p-3`}>
                            <p className='text-center' style={{ fontWeight: "800" }}>Digital Marketing</p>
                            <p className='mt-5 mb-5'>We specialize in helping businesses succeed in the digital world. Our team of experienced digital marketing professionals will work with you to create a customized strategy that drives growth and generates results. We understand that every business is unique, which is why we take the time to understand your business goals, target audience, and competition.</p>
                            <div className='d-flex justify-content-center'>
                                <div className='border border-warning-subtle p-2' style={{ width: "140px" }}>
                                    Available : 50+
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 mt-3'>
                        <div className={`${styles.cardmargin} border border-warning p-3`}>
                            <p className='text-center' style={{ fontWeight: "800" }}>DevOps</p>
                            <p className='mt-5 mb-5'>Your trusted ally for comprehensive DevOps solutions, covering the full development lifecycle. Our services include infrastructure setup, continuous integration/continuous deployment (CI/CD), automation, cloud deployment, monitoring, and ongoing support.</p>
                            <div className='d-flex justify-content-center'>
                                <div className='border border-warning-subtle p-2' style={{ width: "140px" }}>
                                    Available : 40+
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 mt-3'>
                        <div className={`${styles.cardmargin} border border-warning p-3`}>
                            <p className='text-center' style={{ fontWeight: "800" }}>Data Science/ML</p>
                            <p className='mt-5 mb-5'>Your go-to partner for end-to-end Data Science and Machine Learning solutions, providing expertise in data exploration, model prototyping, algorithm development, deployment, performance tuning, testing, and ongoing maintenance. Our tailored approach ensures optimal outcomes for your business objectives.</p>
                            <div className='d-flex justify-content-center'>
                                <div className='border border-warning-subtle p-2' style={{ width: "140px"}}>
                                    Available : 40+
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Contactus /> 
            </div>
            <Footer />
        </div>
            </main>
        </>
        
    )
}

export default Resource