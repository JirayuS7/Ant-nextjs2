
 import Image from 'next/image'
import Link from 'next/link';
 import React from 'react';
 import { render } from 'react-dom';

 
const Header = () => {


  
 


    function ClickBegger() {

        var element = document.getElementById("mobile-nav-toggle");
        document.getElementById("navbar").classList.toggle('navbar-mobile');
        element.classList.toggle('bi-list');
        element.classList.toggle('bi-x');

        
      } 


      function HeaderTop() {

        let selectHeader =   document.getElementById("header");

        if ( selectHeader) {

            const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
            }


            window.addEventListener('load', headerScrolled)
            onscroll(document, headerScrolled)


        }

 
                
      } 
      


    return (

    

        <>

 


            <header   id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"> 
                    <Link href="/" className="logo me-auto">  
                    <Image src="/img/logo.webp"  width={60} height={60}  className="img-fluid" />
                   </Link>
                   <Link href="/"><a >ANT COMMERCE</a></Link>
                   </h1>


                    <nav id="navbar" className="navbar">
                        <ul className='nav '>
                            <li><Link href="#hero"><a className="nav-link scrollto active" href="#hero">Home</a></Link></li>
                            <li><Link href="#about"><a className="nav-link scrollto" href="#about">About</a></Link></li>
                            <li><Link href="#services"><a className="nav-link scrollto" href="#services">Services</a></Link></li>
                            <li><Link href="#portfolio"><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></Link></li>
                            <li><Link href="#team"><a className="nav-link scrollto" href="#team">Team</a></Link></li>
                            <li><Link href="#blog"><a className="nav-link scrollto" href="#blog">Blog</a></Link></li>
                           
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                            <li><a className="getstarted" href="#about">Tel :  052-020388</a></li>
                        </ul>
                        <i id="mobile-nav-toggle" className="bi bi-list mobile-nav-toggle" onClick={ClickBegger}></i>
                    </nav>

                </div>


            </header>

        </>


    )


}

export default Header;