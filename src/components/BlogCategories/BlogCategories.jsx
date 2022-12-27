import React from 'react'
import { Categories } from "./BlogCategories.st"

const BlogCategories = (props) => {
  return (
    <Categories>
        <div className="category">{props.first}</div>
        <div className="category">{props.second}</div>
        <div className="category">{props.third}</div>
    </Categories>
  )
}

export default BlogCategories 