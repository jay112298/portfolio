import React from 'react'
import { Container } from './Blog.st'
import BlogCategories from '../../components/BlogCategories/BlogCategories'
import BlogTile from '../../components/BlogTile/BlogTile'
import Navbar from '../../components/Navbar/Navbar'

const Blog = () => {
  return (
          <Container>
              <Navbar/>
              <section>
                  <div className="name">blogs</div>
              </section>
              <BlogCategories first="All" second="Mechanical" third="Web Developement"/>
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