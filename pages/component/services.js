
import Image from 'next/image'
const Services = () => {

    return (

        <>

           
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>การสร้างแบรนด์การออกแบบและเอเจนซี่ดิจิทัลในไทย ของเรามีความมั่นใจที่จะสร้างสรรค์ความสามารถในการสร้างความประหลาดใจและประสบการณ์ในการส่งมอบ</p>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><i className='bx bxs-file-html'></i></div>
                                <h4><a href="">WEB & App Development</a></h4>
                                <p> - พัฒนาเว็บไซต์<br />

                                    - โมบาย แอปพลิเคชัน <br />
                                    -  พัฒนาซอร์ฟแวร์  </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className='bx bx-devices'></i></div>
                                <h4><a href="">UI/UX DESIGN</a></h4>
                                <p>- ออกแบบเว็บไซต์<br />

                                    -  ออกแบบ โมบาย แอปพลิเคชัน <br />
                                    -   ออกแบบซอร์ฟแวร์ </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className='bx bxs-package'></i></div>
                                <h4><a href="">E - SHIPPING</a></h4>
                                <p> สื่อกลางในการกระจายข่าวสารให้สินค้าและบริการทั่วประเทศ</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className='bx bx-line-chart'></i></div>
                                <h4><a href="">DIGITAL MARKETING</a></h4>
                                <p>บริการดูแลเพจพร้อมยิงโฆษณา</p>
                            </div>
                        </div>


                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-layer"></i></div>
                                <h4><a href="">BRAND DESIGN</a></h4>
                                <p> -  บริการออกแบบกราฟิก <br />
                                    - ออกแบบโลโก้ <br />
                                    - ออกแบบโบชัว <br />
                                    - ออกแบบแผ่นพับ </p>
                            </div>
                        </div>


                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className='bx bx-user-voice'></i></div>
                                <h4><a href="">ADVERTISING</a></h4>
                                <p>บริการจัดทำสื่อโฆษณาประชาสัมพันธ์ บริการดูแลเพจพร้อมยิงโฆษณา</p>
                            </div>
                        </div>



                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className='bx bx-camera'></i></div>
                                <h4><a href="">PHOTO GRAPHY</a></h4>
                                <p>บริการถ่ายภาพ</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className='bx bxs-videos'></i></div>
                                <h4><a href="">VIDEO EDITING</a></h4>
                                <p>บริการโปรดักชันภาพนิ่งและวีดีโอ</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


        </>


    )


}

export default Services;