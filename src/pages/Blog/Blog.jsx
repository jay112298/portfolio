import React from 'react'
import { Container } from './Blog.st'
import BlogCategories from '../../components/BlogCategories/BlogCategories'

const Blog = () => {
  return (
    <Container>
        <section>
            <div className="name">blogs</div>
        </section>
        <BlogCategories/>
    </Container>
      )
}

export default Blog