import Image from "next/image"
import resourceDev from "@/public/Assests/Img/officeR.jpg"
import style from '@/components/HeroSection/style.module.css'
import Link from 'next/link'

function ResourceC() {
  return (
    <div className="container-fluid" style={{ marginTop: "200px" }}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Image src={resourceDev} alt="" layout="responsive" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1 mt-4">
          <h1 className="mb-3" style={{ fontWeight: "800", }}>Hire Our Developer</h1>
          <p className="mt-4 mb-4 text-muted">At Digital Age, our skilled engineers specialize in cutting-edge technologies. With a focus on professionalism and ethical conduct, our team delivers high-quality solutions that meet the demands of modern digital projects. Explore our profiles below to discover the expertise and commitment driving success at Digital Age.</p>
          <Link className={style.orangebutton} href="/resource">See Available</Link>
        </div>
      </div>
    </div>
  )
}

export default ResourceC