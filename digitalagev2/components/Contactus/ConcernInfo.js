import Modal from 'react-bootstrap/Modal';
import style from '@/components/HeroSection/style.module.css'

const ConcernInfo = ({ show, handleClose }) => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Terms and conditions and Privacy policy
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Terms and Conditions:</h5>
                <p>
                    By engaging with our services, you agree that we may collect and store necessary personal data for communication purposes. This data will be retained for a period of six months, after which it will be securely deleted from our systems. We assure you that your information will not be shared with any third-party services under any circumstances, unless required by law. Our commitment to privacy and data security is paramount, and we take all necessary measures to safeguard your information. By using our services, you consent to the aforementioned data collection, storage, and processing practices.
                </p>
                <h5>Privacy Policy:</h5>
                <p>
                    We are committed to protecting your privacy and ensuring the security of your personal information. When you engage with our services, we may collect certain data necessary for communication purposes. This data will be stored securely and will only be retained for a period of six months, after which it will be promptly deleted from our systems. We do not share your information with any third-party services, ensuring your confidentiality and trust. Our privacy policy is designed to uphold the highest standards of data protection and compliance. By utilizing our services, you acknowledge and agree to the terms outlined in this privacy policy.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button type='button' className={`${style.orangebutton}`} onClick={handleClose}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConcernInfo;