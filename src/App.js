import {getUserPosts, Posts, Users} from "./components";
import {useState} from "react";

function App() {
    let [posts, setPosts] = useState([]);
    const userId = (id) => {
        getUserPosts(id).then(({data})=>{
            setPosts([...data]);
        })
    }
    return (
        <div>
            <div><Users userId={userId}/></div>
            <div>
                <Posts posts={posts}/>
            </div>

        </div>
    )

}

export default App;