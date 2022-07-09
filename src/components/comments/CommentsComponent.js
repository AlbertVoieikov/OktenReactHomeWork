import {useEffect, useState} from "react";

import {CommentComponent} from "./CommentComponent";
import {getComments} from "../../services/app.service";

function CommentsComponent() {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        getComments().then(value => setComments([...value]))
    }, [])
    return (
        <div>
            {
                comments.map(value => <CommentComponent item={value} key={value.id}/>)
            }
        </div>
    );
}

export {CommentsComponent};