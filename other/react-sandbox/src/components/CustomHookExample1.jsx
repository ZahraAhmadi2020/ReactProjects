import React from 'react'
import UseFetch from '../hooks/UseFetch'


function CustomHookExample1() {
  const {data,loading } = UseFetch('https://jsonplaceholder.typicode.com/posts', {})
  
  if (loading) {
    <h3>Loading...</h3>
  }
  return (
    <div>
    {data.map((post) => (
      <h3 key={post.id}>{post.title}</h3>
    ))}
    </div>
  )
}

export default CustomHookExample1