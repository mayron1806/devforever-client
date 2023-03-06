import { Post as PostType } from '../../types/post';
import * as C from "./style";

type props = {
  postData: PostType,
}

function CardPost({ postData }: props) {
  return (
    <C.Container>
      <C.Image/>
      <C.Content>
        <C.IconContainer>
          <C.Icon />
        </C.IconContainer>
        <C.Title>{postData.title}</C.Title>
      </C.Content>
    </C.Container>
  )
}

export default CardPost