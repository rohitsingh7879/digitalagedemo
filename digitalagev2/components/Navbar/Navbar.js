import SideBarIcon from '@/icon/SideBarIcon'
import style from './style.module.css'
import { useState } from 'react';
import Sidenav from '../Sidenav/Sidenav';
import Link from 'next/link'
import Login from '@/pages/Login';
// import { Row } from 'react-bootstrap';


function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleSubServiceHover = () => {
        setIsDropdownOpen(true);
    };

    return (
        <div className="container-fluid p-3 bg-white border-bottom sticky-top">
            <div className="d-flex justify-content-between">
                <div>
                    <h5 style={{ cursor: "pointer" }}>Digital Age</h5>
                </div>
                <div className={`${style.sidenav}`}><button className='btn btn-light' onClick={handleShow}><SideBarIcon /> </button></div>
                {show ? <Sidenav show={show} handleClose={handleClose} /> : null}

                <div className={`${style.navbarformob} d-flex me-3`} style={{ cursor: "pointer" }}>
                    <Link href={'/'}  className="me-3" style={{ color: "black", textDecoration: "none" }}>
                    <div className="me-3"> {"Home"} </div>
                    </Link>

                    {/* Here is service dropdown */}
                    <Link href="#service" className="me-3" style={{ color: "black", textDecoration: "none" }}><div onMouseEnter={handleMouseEnter} style={{ display: "inline-block", transitionDelay: 10 }}>
                        <Link href="#service" className="me-3" style={{ color: "black", textDecoration: "none" }}>
                            {"Service"}
                        </Link>
                        {isDropdownOpen && (
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: "absolute", top: "100%", background: "white", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", zIndex: 1 }}>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <li><Link href={"/[Id]"} as={'web-design'} onMouseEnter={handleSubServiceHover} style={{ color: "black", textDecoration: "none", display: "block", padding: "8px 16px" }}>Web Design</Link></li>
                                    <li><Link href={"/[Id]"} as={'web-mobile-development'} onMouseEnter={handleSubServiceHover} style={{ color: "black", textDecoration: "none", display: "block", padding: "8px 16px" }}>Web/Mobile Development</Link></li>
                                    <li><Link href={"/[Id]"} as={'seo'} onMouseEnter={handleSubServiceHover} style={{ color: "black", textDecoration: "none", display: "block", padding: "8px 16px" }}>SEO</Link></li>
                                    <li><Link href={"/[Id]"} as={'digital-marketing'} onMouseEnter={handleSubServiceHover} style={{ color: "black", textDecoration: "none", display: "block", padding: "8px 16px" }}>Digital Marketing</Link></li>
                                    <li><Link href={"/[Id]"} as={'devOps'} onMouseEnter={handleSubServiceHover} style={{ color: "black", textDecoration: "none", display: "block", padding: "8px 16px" }}>DevOPS</Link></li>
                                    <li><Link href={"/[Id]"} as={'data-science'} onMouseEnter={handleSubServiceHover} style={{ color: "black", textDecoration: "none", display: "block", padding: "8px 16px" }}>Data Science</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    </Link>

                    <Link href="#aboutus" className="me-3" style={{ color: "black", textDecoration: "none" }}>About Us </Link>
                    <div className="me-3" > <Link href="/resource" style={{ color: "black", textDecoration: "none" }}>Hire Our Developer</Link></div>
                    <Link href={"/[Id]"} as={'Blog'} className="me-3" style={{ color: "black", textDecoration: "none" }} >Blog</Link>
                    <Link href="#contactus" className="me-3" style={{ color: "black", textDecoration: "none" }} >Contact Us</Link>
                    <Login />

                </div>
            </div>
        </div>
    )
}

export default Navbar