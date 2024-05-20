import Image from "next/image"
import logo from '@/public/Assests/Img/logo.png'
import EmailIcon from "@/icon/EmailIcon"
import LocationIcon from "@/icon/LocationIcon"

function Footer() {

  const date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <div className="container-fluid border-top bg-white">
        <div className="container">
          <div className="row mt-3">
            <div className=" col-sm-12 col-md-12 col-lg-2 offset-lg-1 mt-5 mb-5">
              <Image src={logo} alt="..." className="rounded" height={100} width={100} />
              <p>Digital Age</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-4 mt-5 mb-5">
              <h5>Location</h5>
              <div className="mt-2 d-flex"><div className="me-1"><EmailIcon /></div><div>contact@digitalageeu.com</div></div>
              <div className="mt-2 d-flex"> <div className="me-1"><LocationIcon /></div><div>Branch - Berlin(Germany), Chandigarh, Patna.</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid border-top p-4">
        <div className="text-center">Copyright © {year} Digital Age All Right Reserved</div>
      </div>
    </>
  )
}

export default Footer