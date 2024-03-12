import React from 'react'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function Post() {
  const Navigate = useNavigate()
  const goToFeeds = () => {
    Navigate('/')
  }
  return (
    <>
    <div>Post</div>
    <button onClick={goToFeeds}>Feeds</button>
    </>
    
  )
}

export default Post