
import Image from 'next/image'
const Faq = () => {



    return (




        <>

            <section id="faq" className="faq  ">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>

                    </div>

                    <div className="faq-list">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse"
                                    data-bs-target="#faq-list-1">ฉันคาดหวังอะไรได้ ถ้าฉันทำงานกับคุณ?<i
                                        className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                    <p>
                                        เมื่อคุณทำงานกับ Ant Commerce คุณจะได้รับหน่วยงานออกแบบที่มีทีมงานที่ทุ่มเทและมุ่งมั่น เราจะไม่เพิกเฉยคุณ เราต้องการสนทนาเกี่ยวกับจุดแข็งและจุดอ่อนของธุรกิจของคุณและทำความเข้าใจกับตลาดกลุ่มเป้าหมาย สถานการณ์การแข่งขันและเป้าหมายของคุณ เราต้องการทำทุกอย่างภายในความสามารถของเราเพื่อค้นหาว่าอะไรที่เหมาะกับคุณ สิ่งที่ไม่เหมาะกับคุณและวิธีการที่จะทำในสิ่งที่ถูกต้อง หุ้นส่วนที่แท้จริงสำหรับการแชร์ความสำเร็จร่วมกัน!
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="200">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2"
                                    className="collapsed">ถ้าเราอยู่ในต่างประเทศจะทำอย่างไร? <i
                                        className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        ลูกค้าของเราหลายคนอยู่ต่างประเทศและทำงานนอกกรุงเทพฯ สำหรับลูกค้าในต่างประเทศไม่เป็นปัญหาสำหรับเรา ปัจจุบันการสื่อสารโต้ตอบอย่างรวดเร็วหลายรูปแบบ ทั้ง อีเมล์ การโทรผ่านวิดีโอ และการถ่ายโอนข้อมูลทางอิเล็กทรอนิกส์ทำให้มันง่ายมาก เรามีความภูมิใจในกลุ่มลูกค้าต่างประเทศและหวังว่าจะเพิ่มคุณในพอร์ตโฟลิโอของเรา!
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="300">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3"
                                    className="collapsed">ฉันจะรู้ได้อย่างไรว่า Ant Commerce เหมาะสมกับธุรกิจของฉัน? <i
                                        className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Ant Commerce เป็นแบรนด์ที่ให้บริการเต็มรูปแบบ ทั้งการออกแบบ การพิมพ์และเอเจนซี่ดิจิตอลที่มีประสบการณ์มากกว่า 10 ปีทั้งในและนอกประเทศไทย เราเชื่อว่าเราเหมาะสมกับธุรกิจของคุณเพราะทีมออกแบบของเราทำงานได้อย่างน่าประทับใจที่เรายืนหยัดอย่างเต็มที่
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="400">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4"
                                    className="collapsed">คุณต้องชำระเงินล่วงหน้าก่อนเริ่มโครงการหรือไม่? <i
                                        className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        ใช่เราขอให้คุณจ่าย 50% ของราคาที่ตกลงกันก่อนที่จะเริ่มงานของคุณ
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="500">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5"
                                    className="collapsed">ใครที่ฉันจะได้ร่วมงานด้วย?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        ลูกค้าของ Ant Commerce ทุกคนจะมีผู้จัดการงานส่วนตัว ซึ่งจะเป็นคนติดต่อหลักของคุณตลอดกระบวนการทั้งหมดเพื่อให้แน่ใจว่ามีความมั่นคงและเชื่อถือได้ ขึ้นอยู่กับขอบเขตของงาน, ผู้ออกแบบ, นักพัฒนาและผู้เชี่ยวชาญด้านแบรนด์ ซึ่งจะได้รับมอบหมายเมื่อมีความจำเป็น
                                    </p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="500">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-6"
                                    className="collapsed">ถ้าฉันไม่พอใจกับงานล่ะ<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-6" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        เหตุผลหนึ่งที่เราใช้เวลามาก เพื่อให้แน่ใจว่าเราเข้าใจธุรกิจและเป้าหมายของคุณ อย่างไรก็ตามเราเสนอการแก้ไขที่ไม่จำกัดในงานออกแบบทั้งหมดของเราและหากจำเป็นให้กลับไปที่กระดานวาดภาพเพื่อให้ลูกค้าพึงพอใจอย่างสมบูรณ์
                                    </p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="500">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-7"
                                    className="collapsed">คุณออกแบบงานทั้งหมดของคุณในบริษัท?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-7" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        ใช่แม้ว่าบริการบางอย่างเช่นการเขียนคำโฆษณาและการผลิตวิดีโอเราใช้ผู้เชี่ยวชาญที่ไว้ใจได้ซึ่งเราทำงานมาหลายปีแล้ว
                                    </p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="500">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-8"
                                    className="collapsed">คุณเคยทำงานในอุตสาหกรรมของฉันไหม?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-8" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        เป็นไปได้! ในช่วง 10 ปีที่ผ่านมาเราได้ทำงานกับลูกค้ามากกว่า xxx คนในหลายอุตสาหกรรม ดังนั้นจึงเป็นไปได้ที่เราจะมีประสบการณ์ในตลาดของคุณ แต่ตามความจริงแล้วมันไม่สำคัญมากนักเกี่ยวกับอุตสาหกรรมที่คุณใช้เพราะเราใช้หลักการค้นพบข้อมูลแบบเดียวกันกับลูกค้าของเราทุกคน
                                    </p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="500">
                                <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-9"
                                    className="collapsed">คุณมีนักออกแบบกี่คนที่ Ant Commerce?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="faq-list-9" className="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        ที่สำนักงานใหญ่ของเราในกรุงเทพฯ ขณะนี้เรามีนักออกแบบ xx ที่มีความเชี่ยวชาญในทุกด้านของการสร้างแบรนด์การออกแบบการพิมพ์และการออกแบบดิจิทัล
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </section>



        </>


    )


}

export default Faq;