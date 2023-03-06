import Layout from '@/components/layout';
import { useRouter } from 'next/router'
import React from 'react'

function Post() {
  const router = useRouter();
  return (
    <Layout>Post - {router.query['id']}</Layout>
  )
}

export default Post