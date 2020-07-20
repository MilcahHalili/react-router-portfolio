import React from 'react'

const Blog = (props) => {
  return (
    <div>
      <h2>Blog</h2>
      {props.posts.map(post =>
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}

export default Blog