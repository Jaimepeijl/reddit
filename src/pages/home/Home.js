import axios from 'axios';
import {useState, useEffect} from "react";
import './Home.css'
import {Link, useParams} from "react-router-dom";

function Home (){
    const [redditPosts, setRedditPosts] = useState([])
    let {id} = useParams()

    useEffect(()=>{

        async function fetchData(){
        try{
            const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
            setRedditPosts(result.data.data.children)
            console.log(redditPosts)

        }catch (e) {
            console.error(e)
        }
    }
        fetchData()

    }, [])

    return(
        <main>
            <div className="hottest-posts">
                <h1>Hottest posts</h1>
                <p>On Reddit right now</p>
            </div>

        <div className="post-container">

            {Object.keys(redditPosts).length > 0 && redditPosts.map((post) => {
                {id = post.data.subreddit_name_prefixed}
                return <div className="posts" key={id}>
                    <h2>{post.data.title}</h2>
                <div className="comments-ups">
                    <Link to={`/subreddit/${id}/about.json`}><h3>{id}</h3></Link>
                    <p>Comments {post.data.num_comments} - Ups {post.data.ups}</p>
                </div>
                </div>
            })}

        </div>
        </main>
    )
}
export default Home