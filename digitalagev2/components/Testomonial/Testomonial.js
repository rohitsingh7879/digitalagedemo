import Image from "next/image"
import img1 from '@/public/Assests/testomonial/testomonial1.png'
import img2 from '@/public/Assests/testomonial/testomonnial2.png'
import img3 from '@/public/Assests/testomonial/testomonial3.png'

function Testomonial() {
  return (
    <div className="container border-top">
                <h1 style={{ fontWeight: "800" }} className="text-center mt-5">Testomonial</h1>
                <div className="row mt-5">
                    <div className="col-sm-4 mt-1">
                        <Image src={img1} alt="" layout="responsive" />
                    </div>
                    <div className="col-sm-4 mt-1">
                        <Image src={img2} alt="" layout="responsive" />
                    </div>
                    <div className="col-sm-4 mt-1">
                        <Image src={img3} alt="" layout="responsive" />
                    </div>
                </div>
            </div>
  )
}

export default Testomonial