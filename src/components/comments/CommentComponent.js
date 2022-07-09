import {Link} from "react-router-dom";

function CommentComponent({item}) {
    return (
        <div>
            <h4>{item.id} {item.name}</h4>
            <p>{item.body}</p>
            <p><Link to={item.postId.toString()}>It is your post for comment</Link></p>
        </div>
    );
}

export {CommentComponent};