import Script from 'next/script';
import React, {useEffect} from "react";
    
 
//const Bttop =  

 

var Footer = () => {

     
    return (
        
        <>
            <Script
        id="will-fail"
        src="https://example.com/non-existant-script.js"
        onError={(e) => {
          console.error('Script failed to load', e)
        }}
      />


                <div id="preloader2"></div>
            <footer id="footer">

               

                    <div className="footer-top   section-bg">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-3 col-md-6 footer-contact">
                                    <h3>ANT COMMERCE MEDIA.co.ltd</h3>
                                     <p>
                                        8/22 หมู่ 22 ต.รอบเวียง อ.เมือง จ.เชียงราย 57000 <br/>
                                            <br/>
                                                <strong>Phone:</strong> 052-020388<br/>
                                                    <strong>Email:</strong> acmideacompany@gmail.com<br/>
                                                        <strong>Facebook:</strong> ANT commerce Media<br/>
                                                            <strong>Line:</strong> @acm-idea
                                                        </p>
                                                    </div>




                                                    <div className="col-lg-3 col-md-6 footer-links">
                                                        <h4>Menu</h4>
                                                        <ul>
                                                            <li><i className="bx bx-chevron-right"></i> <a className=" scrollto active" href="#hero">Home</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className=" scrollto" href="#about">About</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className=" scrollto" href="#services">Services</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="   scrollto" href="#portfolio">Portfolio</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className=" scrollto" href="#team">Team</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="  scrollto" href="#Blog">Blog</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="  scrollto" href="#contact">Contact</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 footer-links">
                                                        <h4>Our Services</h4>
                                                        <ul>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="scrollto" href="#services">Web Design</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="scrollto" href="#services">UI/UX DESIGN</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="scrollto" href="#services">UI/UX DESIGN</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="scrollto" href="#services">E - SHIPPING</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="scrollto" href="#services">DIGITAL MARKETING</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="scrollto" href="#services">BRAND DESIGN</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="scrollto" href="#services">ADVERTISING</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="scrollto" href="#services">PHOTO GRAPHY</a></li>
                                                            <li><i className="bx bx-chevron-right"></i> <a className="scrollto" href="#services">VIDEO EDITING</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 footer-links">
                                                        <h4>Our Social Networks</h4>
                                                        <p>ติดตาม และ ติดต่อ พวกเราผ่าน <br/> ช่องทาง Socail ต่างๆ ของเรา </p>
                                                        <div className="social-links mt-3">

                                                            <a href="https://www.facebook.com/ANTCommerceMedia" className="facebook"><i className="bx bxl-facebook"></i></a>
                                                            <a href="https://www.instagram.com/ant_commercemedia/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                                            <a href="https://line.me/R/ti/p/@acm-idea" className="twitter"><i className='bx bx-message-rounded-dots'></i></a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="container footer-bottom clearfix">
                                            <div className="copyright">
                                                &copy; Copyright 2022 <strong><span>Acm.co.th</span></strong>. All Rights Reserved
                                            </div>



                                        </div>
                                    </footer>

                                 
                                    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                                        className="bi bi-arrow-up-short"></i></a>





                                </>


                                )


}

                                export default Footer;