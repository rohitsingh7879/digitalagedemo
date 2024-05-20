import style from '@/components/HeroSection/style.module.css'
import PhoneIcon from '@/icon/PhoneIcon'
import EmailIcon from '@/icon/EmailIcon'
import UserIcon from '@/icon/UserIcon'
import SendIcon from '@/icon/SendIcon'
import GlobeIcon from '@/icon/GlobeIcon'
import style2 from '@/styles/Home.module.css'
import { useState } from 'react'
import ConcernInfo from './ConcernInfo'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const schema = yup
    .object({
        name: yup.string().min(2, "Enter name").required("Enter name"),
        email: yup.string().min(3, "Enter valid email").email("Enter valid email").required("Enter valid email"),
        contact: yup.string().min(10, "Enter valid contact number").required("Enter valid contact number"),
        service: yup.string().required("Select service"),
        isAgreed: yup.bool().oneOf([true], "Please agree to the terms and conditions.")
    })
    .required()


function Contactus() {
    const [show, setShow] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = async (data) => {

        try {
            setMailSent(true);
            await axios.post("api/mail", data);
            reset();
            toast.success('Data sent')
            // gtag_report_conversion('https://www.digitalageeu.com/contact')

            gtag('event', 'conversion', {'send_to': 'AW-1012481815/Ufb7CLrUhZsZEJf-5OID'})
            setMailSent(false);
        } catch (error) {
            console.log('error:', error)
            setMailSent(false);
            toast.error('Data not sent, please refresh page and send again')
        }
    };

    return (
        <div className='container-fluid mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-7'>
                        <h1 className={style2.contactcontact} style={{ fontWeight: "800", }}>Contact Us</h1>
                        <p>Want to reach out? Just drop your message in the form and we&rsquo;ll get back to you!</p>
                    </div>
                    <div className={`col-sm-12 col-md-12 col-lg-5  card p-4 mt-5 ${style2.margincontact}`}>
                        <div className='mt-1'>
                            <form className='mb-3' onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Name</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="username"> <UserIcon /> </span>
                                        <input type="text" className="form-control" placeholder="Enter name" aria-label="name" {...register("name")} aria-describedby="name" disabled={mailSent}/>
                                    </div>
                                    {errors.name && <p className='text-danger' role="alert">{errors.name.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="email"><EmailIcon /> </span>
                                        <input type="text" className="form-control" placeholder="Enter email" aria-label="email" aria-describedby="email" {...register("email")} disabled={mailSent}/>
                                    </div>
                                    {errors.email && <p className='text-danger' role="alert">{errors.email.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Contact Number</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="phone"> <PhoneIcon /> </span>
                                        <input type="text" className="form-control" placeholder="Enter contact number with county code" aria-label="phone" {...register("contact")} aria-describedby="contact" disabled={mailSent}/>
                                    </div>
                                    {errors.contact && <p className='text-danger' role="alert">{errors.contact.message}</p>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Service" className="form-label">Service</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="Service"> <GlobeIcon /> </span>
                                        <select className="form-select" aria-label="Hire Developer" {...register("service")} disabled={mailSent}>
                                            <option value="">Select Service</option>
                                            <option value="Hire Our Developer">Hire Our Developer</option>
                                            <option value="Web Design">Web Design</option>
                                            <option value="Web/Mobile Development">Web/Mobile Development</option>
                                            <option value="SEO">SEO</option>
                                            <option value="Digital marketing">Digital marketing</option>
                                            <option value="DevOPS">DevOPS</option>
                                            <option value="Data Science">Data Science</option>
                                        </select>
                                    </div>
                                    {errors.service && <p className='text-danger' role="alert">{errors.service.message}</p>}
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"  {...register("isAgreed")} disabled={mailSent}/>
                                    <label className="form-check-label" htmlFor="agreed">
                                        By Sending information, you agree to our<span role='button' className='text-primary ms-1' onClick={handleShow}>Terms and conditions and Privacy policy</span>
                                    </label>
                                    {errors.isAgreed && <p className='text-danger' role="alert">{errors.isAgreed.message}</p>}
                                </div>
                                <button type='submit' className={`${style.orangebutton} mt-3`} disabled={mailSent} > <span className='me-3'><SendIcon /></span>{mailSent ? "Wait...":"Send"}</button>
                            </form>
                        </div>
                    </div>
                    <ConcernInfo show={show} handleClose={handleClose} />
                </div>
            </div>
            <Toaster />
        </div>
    )
}


export default Contactus