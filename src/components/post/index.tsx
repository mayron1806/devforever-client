import { Post as PostType } from '../../types/post';
import * as C from "./style";

type props = {
  postData: PostType,
  size?: number
}

function CardPost({ postData, size }: props) {
  return (
    <C.Container size={size}>
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