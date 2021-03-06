 
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header  from './component/header'
import Slides from './component/slide'
import AboutHome from './component/about'
import Services from './component/services'
import Clients from './component/Clients'
import Cta from './component/cta'
import Portfolios from './component/portfolio'
import Teams from './component/teams'
import Faq from './component/Faq'
import Blogs from './component/blogs'
import Contact from './component/Contact'
import Footer from './component/footer'
import Script from 'next/script'


export default function Home() {
  return (



    <div>



      
      
      <Head>
        <title>Ant Commerce Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/fav-32.png" />


   
   
      
   
     
      </Head>

        <Script    src="/static/aos/aos.js"></Script>
        <Script    src="/static/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script    src="/static/isotope-layout/isotope.pkgd.min.js"></Script>
        <Script    src="/static/php-email-form/validate.js"></Script>
        <Script     src="/static/swiper/swiper-bundle.min.js"></Script>
        <Script    src="/static/waypoints/noframework.waypoints.js"></Script>
        <Script    src="/static/main.js"></Script>
 
      

      <Header   />

      <Slides />

      <main id="main"  >
       <AboutHome />
       <Services />
       <Clients />
       <Cta />
       <Portfolios />
       <Teams />
       <Faq />
       <Blogs />
       <Contact />
      </main>

      <Footer />

    </div>
  )
}
