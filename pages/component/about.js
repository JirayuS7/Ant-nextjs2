
import Image from 'next/image'
const AboutHome = () => {



    return (




        <>

    



            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                                แอนท์คอมเมิร์ซ มีเดีย เป็นบริษัทองค์กรเอกชนที่ดําเนินกิจการด้านงานอีคอมเมิร์ซและสื่อโฆษณา
                                ประชาสัมพันธ์เป็นหลัก อาทิ การสร้างสื่อธุรกิจออนไลน์ เช่น ออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชั่น,
                                การทำสื่อดิจิตอลมาเกตติ้ง เช่น การยิงโฆษณา,ดูแลเพจและแพลตฟอร์มออนไลน์อื่นๆ รวมไปถึงเป็นที่ปรึกษา
                                ทางด้านการตลาดอีคอมเมิร์ซให้กับผู้ที่สนใจเริ่มทําธุรกิจและ
                                ต้องการนําธุรกิจเข้ามาสู่ตลาดอีคอมเมิร์ซเพิ่มมากขึ้น
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> บริษัทรับทําแอปพลิเคชัน พัฒนาซอร์ฟแวร์และออกแบบเว็บไซต์</li>
                                <li><i className="ri-check-double-line"></i> การทํา E-commece ในทุกแพลตฟอร์ม</li>
                                <li><i className="ri-check-double-line"></i> สื่อกลางในการกระจายข่าวสารให้สินค้าและบริการทั่วประเทศ</li>
                                <li><i className="ri-check-double-line"></i> บริการดูแลเพจพร้อมยิงโฆษณา</li>
                                <li><i className="ri-check-double-line"></i> บริการจัดทำสื่อคอนเทนท์</li>
                                <li><i className="ri-check-double-line"></i> บริการจัดทำสื่อโฆษณาประชาสัมพันธ์</li>
                                <li><i className="ri-check-double-line"></i> บริการจัดหาอินฟลูเอนเซอร์</li>
                                <li><i className="ri-check-double-line"></i> บริการออกแบบกราฟิก</li>
                                <li><i className="ri-check-double-line"></i> บริการโปรดักชันภาพนิ่งและวีดีโอ</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">

                            <video style={{ maxWidth: '100%',width: "100%", height:"400px"  }} className="elementor-video"
                                src="https://acm.co.th/wp-content/uploads/2022/02/vtr-ant-2022-final.mp4"  controls 
                                 ></video>

                        </div>
                    </div>

                </div>
            </section>


        </>


    )


}

export default AboutHome;