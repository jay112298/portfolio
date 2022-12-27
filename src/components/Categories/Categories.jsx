import React from 'react'
import { CategoriesDiv } from "./Categories.st"

const Categories = (props) => {
  return (
    <CategoriesDiv>
        <div className="category">{props.first}</div>
        <div className="category">{props.second}</div>
        <div className="category">{props.third}</div>
    </CategoriesDiv>
  )
}

export default Categories 