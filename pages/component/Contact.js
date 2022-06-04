
import Image from 'next/image'
const Contact = () => {



    return (




        <>

            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>หากมีคำถามใดๆ อย่าลังเลที่จะ ติดต่อเราได้ที่นี่</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>8/22 หมู่ 22 ต.รอบเวียง อ. เมือง จ.เชียงราย 57000</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>acmideacompany@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>052-020388</p>
                                </div>

                                <iframe  style={{width:'100%', height:"300px"}} scrolling="no"  
                                    src="https://maps.google.com/maps?q=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%20%E0%B9%81%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B9%8C%20%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%8B%20%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%20%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                                    title="บริษัท แอนท์ คอมเมิร์ซ มีเดีย จำกัด" aria-label="บริษัท แอนท์ คอมเมิร์ซ มีเดีย จำกัด"
                                   ></iframe>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label  >ชื่อ</label>
                                        <input type="text" name="name" className="form-control" id="name" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label  >E-mail</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label  >หัวข้อ</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label  >ข้อความ</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">ส่งข้อความ</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>

        </>


    )


}

export default Contact;