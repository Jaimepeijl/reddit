import axios from 'axios';
import {useState} from "react";

function Home(){
    const [redditPosts, setRedditPosts] = useState([])
    async function fetchData(){
        try{
            const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
            console.log(result.data.data.children[4].data)
            console.log(result.data.data.children[4].data.subreddit_name_prefixed)
            console.log(result.data.data.children[4].data.ups)
            console.log(result.data.data.children[4].data.title)
            console.log(result.data.data.children[4].data.num_comments)

            setRedditPosts(result.data.data.children)
            console.log(redditPosts)

        }catch (e) {
            console.error(e)
        }
    }
    fetchData()
    return(
        <>
            <p>doe iets</p>

        <div className="posts">
            {redditPosts.map((post) => {
                return `
                <div><h1>${post.data.title}</h1>
                <h3>${post.data.subreddit_name_prefixed}</h3>
                <p>Comments ${post.data.num_comments} - Ups ${post.data.ups}</p></div>
                `
            })}

        </div>
        </>
    )
}
export default Home