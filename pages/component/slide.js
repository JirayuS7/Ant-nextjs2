import MainSlideImage from '../../public/img/hero-img.png'
import Image from 'next/image'
 

const Slides = () => {

    return (

        <>



            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up" data-aos-delay="200">
                            <h1>Ant Commerce Media</h1>
                            <h2>ดําเนินกิจการด้านงานอีคอมเมิร์ซและสื่อโฆษณา ประชาสัมพันธ์เป็นหลัก อาทิ การสร้างสื่อธุรกิจออนไลน์ เช่น
                                ออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชั่น, การทำสื่อดิจิตอลมาเกตติ้ง</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#portfolio" className="btn-get-started scrollto">View Portfolio</a>
                                <a   className="  btn-watch-video" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                    className="bi bi-play-circle"></i><span>ดูวิดีโอ</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <Image src='/img/hero-img.png' width={780} height={646} className="img-fluid animated" alt="" />

                        </div>
                    </div>
                </div>

            </section>
         

 
            <div className="modal fade" id="exampleModal"   aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ant Commerce Media</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <video style={{ maxWidth: '100%', width: "100%", height: "400px" }} className="elementor-video"
                                src="https://acm.co.th/wp-content/uploads/2022/02/vtr-ant-2022-final.mp4" controls
                            ></video>
                        </div>

                    </div>
                </div>
            </div>




        </>


    )


}

export default Slides;