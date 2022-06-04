

import Client from "../../clients.json"
import reactDom from "react-dom";
import Link from "next/dist/client/link";

 
const Clients = () => {

  

    return (




        <>



            <section id="cliens" className="cliens ">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Clients</h2>
                        <p>เอเจนซี่ออกแบบในเชียงราย ของเราภาคภูมิใจอย่างเหลือเชื่อกับบริษัทที่มอบความไว้วางใจให้เรา กับแบรนด์ที่มีค่าของพวกเขา</p>
                    </div>

                    <div className="row" data-aos="zoom-in">


                        {Object.entries(Client).map((value, index) => {

                            return (

                                <>

                                    <div key={index} className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">

                                        <Link href={value[1].url} target="_blank">
                                            <img src={value[1].image} className="img-fluid" alt="" />

                                        </Link>


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

export default Clients;