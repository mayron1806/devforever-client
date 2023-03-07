import Layout from '@/components/layout'
import PostCardList from '@/components/post-card-list'
import SearchBar from '@/components/search-bar'
import { posts } from '@/services/post'
import { Container } from '@/styles/pages'
import React from 'react'

function Article() {
  return (
    <Layout>
      <Container>
        <SearchBar />
        <PostCardList posts={posts}/>  
      </Container>
    </Layout>
  )
}

export default Article