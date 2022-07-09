import {Outlet} from "react-router-dom";

import {CommentsComponent} from "../components/comments/CommentsComponent";

function CommentsPage() {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
}

export {CommentsPage};