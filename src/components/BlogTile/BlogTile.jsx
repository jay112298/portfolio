import React from 'react'
import { Tile } from './BlogTile.st'

const BlogTile = (props) => {
  return (
    <Tile>
        <div className="title">eatsome</div>
        <div className="subtitle">Restaurant browsing using React.js [Using web API]</div>
        <div className="more"><a href='/blog-post/'>More</a></div>
    </Tile>
  )
}

export default BlogTile