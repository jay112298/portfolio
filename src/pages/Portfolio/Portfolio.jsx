import React from 'react'
import { Container } from './Portfolio.st'
import Categories from '../../components/Categories/Categories'
import BlogTile from '../../components/BlogTile/BlogTile'
import Navbar from '../../components/Navbar/Navbar'

const Blog = () => {
  return (
          <Container>
              <Navbar/>
              <section>
                  <div className="name">Portfolio</div>
              </section>
              <Categories first="All" second="Completed" third="In Progress"/>
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