import Head from 'next/head'
import posts from "../post.json"

const Blog =() => (

    <div> <h1>BLOG PAGE</h1>
    
        <ul>

            {Object.entries(posts).map((value,index) =>

            {

                    return <li key={index}>{value[1].title}</li>


            }
            
            
            )}
        </ul>
    
    </div>



)

export default Blog;