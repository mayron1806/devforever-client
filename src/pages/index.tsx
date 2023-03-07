import Layout from "@/components/layout";
import Loading from "@/components/loading";
import PostCardList from "@/components/post-card-list";
import SearchBar from "@/components/search-bar";
import { posts } from "@/services/post";
import { Container } from "@/styles/pages";
import dynamic from "next/dynamic";
import React from "react";
import { Suspense } from "react";
const Posts = dynamic(() => import('@/components/post-card-list'))
const Home = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Container>
          <SearchBar />
          <Posts posts={posts}/>  
        </Container>  
      </Suspense>
    </Layout>
  );
}

export default Home;