import Image from 'next/image'
import style from './style.module.css'
import svg from '@/public/Assests/Img/Herosectionsvg.svg'
import PhoneIcon from '@/icon/PhoneIcon'
import Link from 'next/link'
import BoxIcon from '@/icon/BoxIcon'
import { useEffect, useState } from 'react'

function HeroSection() {
    const [indexData, setIndexData] = useState(0);
    const data = [
        { name: "Total Dev", size: 200 },
        { name: "UI/ UX Designing", size: 40 },
        { name: "Full Stack Developer", size: 100 },
        { name: "Mobile App Developer", size: 40 },
        { name: "Digital Marketing", size: 50 },
        { name: "DevOps", size: 40 },
        { name: "Data Science/ML", size: 40 },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndexData(prevCount => (prevCount + 1) % data.length);
        }, 1000); // Increment every second (1000 milliseconds)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [data.length]);

    return (
        <div className="container">
            <div className="row mt-5">
                <div className={`${style.herosectionheadline} col-sm-12 col-md-6 col-lg-6`}>
                    <div className="" >
                        <h1 style={{ fontWeight: "800" }}>Transforming Ideas</h1>
                        <h1 style={{ fontWeight: "800" }}>Into <span className={style.textorange}>Powerful Solutions</span></h1>
                        <p className={`text-muted`}>For startups and growing businesses, web and mobile solutions, cloud expertise, and dynamic digital marketing strategies. Partner with us for a transformative journey into the digital realm.</p>
                        <Link className={style.orangebutton} href="/contact"><span className='me-1'><PhoneIcon /></span> Get Free Consultant</Link>
                        <Link className={`${style.orangebutton2}`} href="#samplework"><span className='me-3'><BoxIcon /></span>See Sample Work</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={style.datacom} style={{ position: "absolute", right: 80 }}>
                        {data.slice(indexData === 0 ? data.length - 1 : indexData - 1, indexData === 0 ? data.length : indexData).map((value, index) => {
                            return (
                                <div key={index} className='p-3 shadow-lg' style={{ backgroundColor: "#FD6F00", color: "white" }}>
                                    <p className='text-center' style={{ fontWeight: "800" }}>{value.name}</p>
                                    <div className='d-flex justify-content-center'>
                                        <div className='border border-warning-subtle p-2' style={{ width: "140px" }}>
                                            Available : {value.size}+
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <Image src={svg} alt='' layout="responsive" />
                </div>
            </div>
        </div>
    )
}



export default HeroSection