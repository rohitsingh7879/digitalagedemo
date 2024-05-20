import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection/HeroSection";
import CheckPoint from "@/icon/CheckPoint";
import Service from "@/components/Service/Service";
import ResourceC from "@/components/ResourceC/ResourceC";
import SampleWork from "@/components/SampleWork/SampleWork";
import About from "@/components/About/About";
import Contactus from "@/components/Contactus/Contactus";
import Testomonial from "@/components/Testomonial/Testomonial";
import Footer from "@/components/Footer/Footer";
import style from '../styles/Home.module.css'
import providerimg from "@/public/Assests/Img/provider2.svg"
import Script from "next/script";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), { ssr: false })
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Age</title>
        <meta name="description" content="Transforming Ideas Into Powerful Solutions: Web Design, Web Development, Mobile Development, SEO, Digital Marketing, DevOPS, Data Science" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div className="bg-light">
          <Navbar />
          <HeroSection />
          <div className="container-fluid mt-5 border-top border-bottom bg-white">
            <div className="container" >
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6" style={{ marginTop: "150px", marginBottom: "120px" }}>
                  <h2 style={{ fontWeight: "800" }}>Digital Boost Solutions: Empowering Your Online Success</h2>
                  <p className={`mt-4`}>Enhance your online presence through web development, digital marketing, and comprehensive business reporting. Our expertise ensures that your business stands out and succeeds in the competitive online landscape.</p>
                  <div className="d-flex mt-4">
                    <div>
                      <CheckPoint />
                    </div>
                    <div className="ms-2">
                      Cost-effective solutions customized to your needs.
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <div>
                      <CheckPoint />
                    </div>
                    <div className="ms-2">
                      Expert guidance from a seasoned team with 10 years of experience.
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <div>
                      <CheckPoint />
                    </div>
                    <div className="ms-2">
                      Cutting-edge technology and innovative strategies.
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <div>
                      <CheckPoint />
                    </div>
                    <div className="ms-2">
                      Comprehensive support throughout implementation.
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <div>
                      <CheckPoint />
                    </div>
                    <div className="ms-2">
                      Proven track record of driving business growth.
                    </div>
                  </div>
                </div>
                <div className={`${style.serviceproviderimg} col-sm-12 col-md-12 col-lg-6`} style={{ marginBottom: "120px" }}>
                  <Image src={providerimg} alt="" layout="responsive" />
                </div>
              </div>
            </div>
          </div>
          <div id="service">
            <Service />
          </div>
          <ResourceC />
          <div id="samplework">
            <SampleWork />
          </div>
          <div id="aboutus">
            <About />
          </div>
          <div id="contactus">
            <Contactus />
          </div>
          <div style={{ marginBottom: "100px" }}>
            <Testomonial />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
