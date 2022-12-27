import React from 'react'
import { Container } from './Blog.st'
import Categories from '../../components/Categories/Categories'
import BlogTile from '../../components/BlogTile/BlogTile'
import Navbar from '../../components/Navbar/Navbar'

const Blog = () => {
  return (
          <Container>
              <Navbar/>
              <section>
                  <div className="name">blogs</div>
              </section>
              <Categories first="All" second="Mechanical" third="Web Developement"/>
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