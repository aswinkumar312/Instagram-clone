import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Feed() {
  return (
    <div className="d-flex flex-column">
      <div><Stories/></div>
      <div><Posts/></div>
    </div>
  )
}

export default Feed