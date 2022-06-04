
import Post from '../../post.json'
import Link from 'next/link'
const Blogs = () => {



    return (




        <>
            <section id="blog" className="  section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>BLOG</h2>

                    </div>

                    <div className="row">

                        {Object.entries(Post).map((value, index) => {

                            return (

                                <>


                                    <div className="col-md-3" key={index}>
                                        <div className="card"  >
                                            <img src={value[1].image}  className="card-img-top" alt={value[1].title} />
                                            <div className="card-body">
                                                <h5 className="card-title"><a href={value[1].link}>{value[1].title}</a></h5>
                                                <p className="card-text">{value[1].content}</p>
                                                <Link target={'_blank'} href={value[1].link} ><a  target={'_blank'} className="btn btn-outline-primary">ReadMore</a></Link>
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

export default Blogs;