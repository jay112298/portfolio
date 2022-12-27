import React from 'react'
import { Container } from './Blog.st'
import BlogCategories from '../../components/BlogCategories/BlogCategories'
import BlogTile from '../../components/BlogTile/BlogTile'

const Blog = () => {
  return (
          <Container>
              <section>
                  <div className="name">blogs</div>
              </section>
              <BlogCategories/>
              <div className="grid">
                <BlogTile/>
                <BlogTile/>
                <BlogTile/>
              </div>
              <div className="footer">Stay tuned for more!</div>
          </Container>
      )
}

export default Blog