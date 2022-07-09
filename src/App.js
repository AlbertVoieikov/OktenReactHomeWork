import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";

import {Layout} from "./layouts/Layout";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {TodosPage} from "./pages/TodosPage";
import {PostsCurrentComment} from "./components/posts/PostsCurrentComment";

function App() {
  return (
    <div>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={'albums'} element={<AlbumsPage/>}/>
              <Route path={'comments'} element={<CommentsPage/>}>
                  <Route path={':postId'} element={<PostsCurrentComment/>}/>
              </Route>
              <Route path={'todos'} element={<TodosPage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
