import { Post as PostType } from '../../types/post';
import * as C from "./style";
import CardPost from '../post';

type props = {
  posts: PostType[]
}
function PostCardList({ posts }: props) {
  return (
    <C.Container>
      {
        posts.map(post=> (
          <CardPost key={post.id} postData={post} size={Math.floor(Math.random() * 2 + 1)}/>
        ))
      }
    </C.Container>
  )
}

export default PostCardList