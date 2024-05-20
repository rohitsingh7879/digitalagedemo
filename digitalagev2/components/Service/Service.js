import Image from "next/image"
import style from './style.module.css'
import design from '@/public/Assests/Img/Design.png'
import webmobdev from '@/public/Assests/Img/webmobdev.png'
import seo from '@/public/Assests/Img/seo.png'
import marketing from '@/public/Assests/Img/marketing.png'
import devops from '@/public/Assests/Img/devops1.png'
import datascience from '@/public/Assests/Img/datascience.png'
import NextLink from 'next/link'


function Service() {
    return (
        <div className="container">
            <h1 className={` text-center`} style={{ fontWeight: "800", marginTop: "100px" }}>Services were offering</h1>
            <div className="row">
                <div className="col-sm-4 offset-sm-2" style={{ marginTop: "50px" }}>
                    <div>
                        <NextLink href={"/[Id]"} as={'web-design'}>
                            <Image src={design} alt="..." className={`${style.thumbnail} rounded border`} layout="responsive" />
                        </NextLink>
                        <h6 className={` mt-3`}>Web Design</h6>
                    </div>
                </div>

                <div className="col-sm-4" style={{ marginTop: "50px" }}>
                    <div>
                        <NextLink href={"/[Id]"} as={'web-mobile-development'}>
                            <Image src={webmobdev} alt="..." className={`${style.thumbnail} rounded`} layout="responsive" />
                        </NextLink>
                        <h6 className={` mt-3`}>Web/Mobile Development</h6>
                    </div>
                </div>

            </div>

            <div className="row">

                <div className="col-sm-4 offset-sm-2" style={{ marginTop: "50px" }}>
                    <div>
                        <NextLink href={"/[Id]"} as={'seo'}>
                            <Image src={seo} alt="..." className={`${style.thumbnail} rounded`} layout="responsive" />
                        </NextLink>
                        <h6 className={` mt-3`}>SEO</h6>
                    </div>
                </div>

                <div className="col-sm-4" style={{ marginTop: "50px" }}>
                    <div>
                        <NextLink href={"/[Id]"} as={'digital-marketing'}>
                            <Image src={marketing} alt="..." className={`${style.thumbnail} rounded`} layout="responsive" />
                        </NextLink>
                        <h6 className={` mt-3`}>Digital Marketing</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 offset-sm-2" style={{ marginTop: "50px" }}>
                    <div>
                        <NextLink href={"/[Id]"} as={'devOps'}>
                            <Image src={devops} alt="..." className={`${style.thumbnail} rounded`} layout="responsive" />
                        </NextLink>
                        <h6 className={` mt-3`}>DevOPS</h6>
                    </div>
                </div>
                <div className="col-sm-4" style={{ marginTop: "50px" }}>
                    <div>
                        <NextLink href={"/[Id]"} as={'data-science'}>
                            <Image src={datascience} alt="..." className={`${style.thumbnail} rounded border`} layout="responsive" />
                        </NextLink>
                        <h6 className={` mt-3`}>Data Science</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service