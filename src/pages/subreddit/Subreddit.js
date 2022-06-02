import {useEffect, useState} from "react";
import axios from "axios";

function Subreddit ({id}){
    const [subreddit, setSubreddit] = useState([])

    useEffect(()=>{
        async function fetchSubreddit(){
            try{
                const result = await axios.get(`https://www.reddit.com/${id}/about.json`)
                setSubreddit(result)
                console.log(subreddit)

            }catch (e) {
                console.error(e)
            }
        }
        fetchSubreddit()
    }, [])
    return(
        <>
        <h1>Hier komt iets!</h1>
        </>
    )
}
export default Subreddit