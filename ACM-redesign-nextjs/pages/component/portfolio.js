
import Ports from "../../ports.json"
const Portfolios = () => {



    return (




        <>


            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>เป็นเวลากว่า 10 ปีแล้วที่เราได้ช่วยลูกค้าใน  ประเทศไทย และทั่วโลกให้แบรนด์ของพวกเขามีเอกลักษณ์และเสริมพลังในการยกเครื่องเพื่อเปลี่ยนให้เป็นธุรกิจที่เปลี่ยนเกมได้ เป็นเวลากว่า 10 ปีแล้วที่เราได้ช่วยลูกค้าในกรุงเทพฯ ประเทศไทย และทั่วโลกให้แบรนด์ของพวกเขามีเอกลักษณ์และเสริมพลังในการยกเครื่องเพื่อเปลี่ยนให้เป็นธุรกิจที่เปลี่ยนเกมได้</p>
                    </div>

                    <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter="#filter-app">Brand Identity</li>
                        <li data-filter="#filter-card">E-shipping</li>
                        <li data-filter="#filter-design">Graphic Design</li>
                        <li data-filter="#filter-web">Web Design</li>
                    </ul>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        {Object.entries(Ports).map((value, index) => {

                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 portfolio-item " id={value[1].category}>
                                        <div className="portfolio-img"><img
                                            src={value[1].image} className="img-fluid" alt="" /></div>
                                        <div className="portfolio-info">
                                            <h4>{value[1].title}</h4>
                                            <p>{value[1].content}</p>
                                            <a href={value[1].link} data-gallery="portfolioGallery"
                                                className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                                            <a href={value[1].link} className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        )}



                    </div>

                </div>
            </section>
        </>


    )


}

export default Portfolios;