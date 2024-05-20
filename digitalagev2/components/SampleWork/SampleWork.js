import Image from "next/image";
import img1 from "@/public/Assests/Img/show1.png";
import img2 from "@/public/Assests/Img/show2.png";
import img3 from "@/public/Assests/Img/img3.png";



import style from "./style.module.css"

function SampleWork() {


    return (
        <div>
            <h1 className="text-center" style={{ fontWeight: "800", marginTop: "150px" }}>Our Latest Work</h1>
            {/* <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-4 mb-2">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={img4} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={img5} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={img6} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-sm-4 mb-2">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={img7} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={img8} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-sm-4 mb-2">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={img10} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={img11} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={img12} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-sm-4 mb-2">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={img13} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={img15} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-sm-4 mb-2">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={img16} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={img17} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-sm-4 mb-2">
                        <Carousel>
                            <Carousel.Item>
                                <Image src={img18} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={img19} className={style.image1} alt="" layout="responsive" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4 mt-2">
                        <div className={style.container1}>
                            <Image src={img1} className={style.image1} alt="" layout="responsive" />
                            <div className={style.middle}>
                                <div className={style.text}>
                                    <h6>Grocery App Design And Development</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mt-2">
                        <div className={style.container1}>
                            <Image src={img2} className={style.image1} alt="" layout="responsive" />
                            <div className={style.middle}>
                                <div className={style.text}>
                                    <h6>HR Management</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mt-2">
                        <div className={style.container1}>
                            <Image src={img3} className={style.image1} alt="" layout="responsive" />
                            <div className={style.middle}>
                                <div className={style.text}>
                                    <h6>Learning Management System</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SampleWork;
