import aboutusimg from '@/public/Assests/Img/Aboutusimg.png'
import Image from 'next/image'

function About() {
    return (
        <div className="container-fluid border-top border-bottom bg-white p-5" style={{ marginTop: "120px" }}>
            <div className="row" style={{ marginBottom: "120px" }}>
                <div className="col-sm-12 col-md-12 col-lg-5" style={{ marginTop: "150px" }}>
                    <Image src={aboutusimg} alt='' layout="responsive" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1" style={{ marginTop: "100px" }}>
                    <h1 className='text-center' style={{ fontWeight: "800" }}>About Us</h1>
                    <div className='mt-4'>
                        <h6 style={{ fontWeight: "800" }}>Empowering SMEs Online</h6>
                        <p className='text-muted'>We started as a small SME born out of freelancing, driven by the vision to address the challenges faced by SMEs in establishing their presence online cost-effectively. Recognizing the struggle many SMEs face in navigating web development, designing, and infrastructure management, we embarked on a mission to provide comprehensive solutions.</p>
                    </div>
                    <div>
                        <span style={{ fontWeight: "800" }}>Our goal is simple:</span>
                        <span className='text-muted'> to empower businesses to thrive online while allowing them to focus on what truly matters - their core business activities. We take care of the technical aspects, providing expert guidance every step of the way, ensuring our clients achieve their business milestones with confidence.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About