
import Image from 'next/image'
import Team from '../../teams.json'



const Teams = () => {



    return (




        <>

            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Team</h2>
                    <p>บุคลากรในบริษัท แอนท์คอมเมิร์ซ มีเดีย จํากัด เป็นบุคลากรเจนเนอเรชั่นใหม่ที่มีวิสัยทัศน์เดียวกันที่ต้องการมุ่งเน้นพัฒนาทิศทางของการตลาดด้านอีคอมเมิร์ซ ให้สอดคล้องกับความต้องการของธุรกิจ เศรษฐกิจในยุคปัจจุบันและอนาคต ซึ่งมีความชํานาญในสายงานด้านต่างๆ ทั้งด้านการจัดทําสื่อออนไลน์,การวิเคราะห์การตลาด, เศรษฐกิจ, การวางแผนรูปแบบงานทั้งทางระยะสั้นและระยะยาวให้กลุ่มลูกค้าและกลุ่มคู่ค้าให้ได้รับประโยชน์สูงสุด</p>
                    </div>

                    <div className="row">


                    {Object.entries(Team).map((value, index) => {

                        return (

                            <>

                               

                                <div className="col-lg-6 mb-3">
                                    <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="pic"><img   src={value[1].photo} className="img-fluid" alt={value[1].name}/></div>
                                    <div className="member-info">
                                        <h4>{value[1].name}</h4>
                                        <span>{value[1].position}</span>
                                        <p>{value[1].descripiton}</p>
                                        <div className="social">
                                        <a href={value[1].linken}> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
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

export default Teams;