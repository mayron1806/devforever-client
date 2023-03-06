import Layout from "@/components/layout";
import { Post } from "@/types/post";
import dynamic from "next/dynamic";
import Loading from "./loading";

const posts: Post[] = [
  { id: "123", title: "Lorem ipsum dolor sit amet consectetur adipiscing "},
  { id: "122", title: "Lorem ipsum dolor adipiscing "},
  { id: "1234", title: "Lorem ipsum dolor sit  adipiscing "},
  { id: "1223", title: "Lorem ipsum dolor sit amet consectetur adipiscing "},
  { id: "12263", title: "Lorem ipsum dolor sit amet adipiscing "},
  { id: "124753", title: "Lorem ipsum "},
  { id: "1235", title: "Lorem ipsum dolor amet consectetur "},
  { id: "1233", title: "Lorem ipsum dolor sit amet consectetur "},
  { id: "12356", title: "Lorem ipsum dolor sit consectetur"},
  { id: "12314", title: "Lorem ipsum dolor sit adipiscing "},
  { id: "12d23", title: "Lorem ipsum dolor sit amet "}
]
const Posts = dynamic(() => import("@/components/post-card-list"), {
  loading: () => <Loading />
})
const Home = () => {
  return (
    <Layout>
      <Posts posts={posts}/>
    </Layout>
  );
}
 
export default Home;