import Link from 'next/link';
import style from './style.module.css'
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidenav({ show, handleClose }) {

    const handleScroll = (value) => {
        window.scrollTo({
            top: value,
            left: 0,
            behavior: "smooth",
        });
        handleClose()
    }

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Digital Age</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <div className={`${style.sidenav}`} onClick={() => handleScroll(0)}>Home</div>
                        <div className={`${style.sidenav}`} onClick={() => handleScroll()}><Link href="#service" style={{ color: "black", textDecoration: "none" }}>Services</Link></div>
                        <div className={`${style.sidenav}`} onClick={() => handleScroll()}><Link href="#aboutus" style={{ color: "black", textDecoration: "none" }}>About Us</Link></div>
                        <div className={`${style.sidenav}`} onClick={() => handleScroll()}><Link href="#contactus" style={{ color: "black", textDecoration: "none" }}>Contact Us</Link></div>
                        <div className="me-3"> <Link href="/resource">Hire Our Developer</Link></div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidenav;